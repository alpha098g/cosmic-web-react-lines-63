import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NodeProps {
  count: number;
  mousePosition: { x: number; y: number };
}

const NetworkNodes = ({ count, mousePosition }: NodeProps) => {
  const meshRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const connections: number[][] = [];
    
    // Generate random positions for nodes
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    
    // Find connections between nearby nodes
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < 2.5) {
          connections.push([i, j]);
        }
      }
    }
    
    return [positions, connections];
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the entire network slowly
      meshRef.current.rotation.x += 0.0005;
      meshRef.current.rotation.y += 0.001;
      
      // React to mouse position
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x += Math.sin(time * 0.1) * 0.0002;
      meshRef.current.rotation.y += Math.cos(time * 0.1) * 0.0002;
      
      // Mouse influence
      meshRef.current.rotation.x += mousePosition.y * 0.0001;
      meshRef.current.rotation.y += mousePosition.x * 0.0001;
    }
    
    if (groupRef.current) {
      // Sync group rotation with points
      groupRef.current.rotation.copy(meshRef.current?.rotation || new THREE.Euler());
    }
  });

  return (
    <>
      <Points ref={meshRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Connection lines */}
      <group ref={groupRef}>
        {connections.map(([i, j], index) => {
          const start = new THREE.Vector3(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2]
          );
          const end = new THREE.Vector3(
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
          
          return (
            <line key={index}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array([...start.toArray(), ...end.toArray()]), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial 
                color="#8b5cf6" 
                transparent 
                opacity={0.3}
                blending={THREE.AdditiveBlending}
              />
            </line>
          );
        })}
      </group>
    </>
  );
};

const Interactive3DBackground = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NetworkNodes count={100} mousePosition={mousePosition.current} />
      </Canvas>
    </div>
  );
};

export default Interactive3DBackground;