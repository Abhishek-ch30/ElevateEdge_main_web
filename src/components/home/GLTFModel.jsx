// src/components/GLTFModel.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/scene.gltf");
  return <primitive object={scene} scale={1} />;
};

// Helper to fix camera look at center
const CameraSetup = ({ position }) => {
  const { camera } = useThree();
  React.useEffect(() => {
    camera.position.set(...position);
    camera.lookAt(0, 0, 0);
  }, [camera, position]);
  return null;
};

const GLTFModel = () => {
  return (
    <Canvas style={{ height: 400 }} camera={{ fov: 18, near: 0.1, far: 1000 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 5]} />
      <Suspense fallback={null}>
        <Model />
        <CameraSetup position={[0, 12, 60]} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default GLTFModel;
