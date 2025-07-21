import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NetworkBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Network nodes and connections
    const nodes: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];
    const nodeCount = 50;
    
    // Create nodes
    const nodeGeometry = new THREE.SphereGeometry(0.03, 8, 6);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.8
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      
      // Store original position for animation
      (node.userData as any).originalPosition = node.position.clone();
      (node.userData as any).offset = Math.random() * Math.PI * 2;
      
      nodes.push(node);
      scene.add(node);
    }

    // Create connections between nearby nodes
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x00bcd4,
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 4) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          const line = new THREE.Line(geometry, connectionMaterial);
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 15;
    camera.position.y = 3;
    camera.lookAt(0, 0, 0);

    // Animation
    const animate = (time: number) => {
      frameRef.current = requestAnimationFrame(animate);

      // Animate nodes with floating motion
      nodes.forEach((node, index) => {
        const userData = node.userData as any;
        const originalPos = userData.originalPosition;
        const offset = userData.offset;
        
        node.position.x = originalPos.x + Math.sin(time * 0.001 + offset) * 0.5;
        node.position.y = originalPos.y + Math.cos(time * 0.0015 + offset) * 0.3;
        node.position.z = originalPos.z + Math.sin(time * 0.0008 + offset) * 0.4;
      });

      // Update connections
      connections.forEach((connection, index) => {
        const nodeA = nodes[Math.floor(index / (nodes.length - 1))];
        const nodeB = nodes[(index % (nodes.length - 1)) + Math.floor(index / (nodes.length - 1)) + 1];
        
        if (nodeA && nodeB) {
          const positions = connection.geometry.getAttribute('position');
          positions.setXYZ(0, nodeA.position.x, nodeA.position.y, nodeA.position.z);
          positions.setXYZ(1, nodeB.position.x, nodeB.position.y, nodeB.position.z);
          positions.needsUpdate = true;
        }
      });

      // Gentle camera rotation
      camera.position.x = Math.sin(time * 0.0003) * 16;
      camera.position.z = Math.cos(time * 0.0003) * 16;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0.9) 70%)'
      }}
    />
  );
};

export default NetworkBackground;