
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

interface NodeProps {
  count: number;
  mousePosition: { x: number; y: number };
}

const NetworkNodes = ({ count, mousePosition }: NodeProps) => {
  const meshRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    // Generate random positions for nodes
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    
    return positions;
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
  });

  return (
    <Points ref={meshRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
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
