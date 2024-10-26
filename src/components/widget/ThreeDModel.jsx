// ThreeDModel.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
    const model = useGLTF('../../assets/NFT/NFT.obj');

    // Rotate the model on the Y-axis for the spinning effect
    useFrame(() => {
        ref.current.rotation.y += 0.01;
    });

    return <primitive ref={ref} object={model.scene} scale={0.5} />;
};

const ThreeDModel = () => {
    return (
        <Canvas 
            style={{ height: '400px', width: '100%' }}
            camera={{ position: [0, 0, 5], fov: 50 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableZoom={true} />
            <Model />
        </Canvas>
    );
};

export default ThreeDModel;
