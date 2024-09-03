/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Object from "./pages/Object/Object.jsx";
import React from "react";
import useObjectStore from "./stores/use-Object-store";
import { PointerLockControls } from "@react-three/drei";

const World = () => {
    
  const cameraSettings = {
    fov: 120,

    position: [2, 0, 5],
  };

  const styleSettings = {
    width: '100vw',     
    height: '100vh'     
  };

  const {transformsObject} = useObjectStore();

  return (
    <React.Fragment>
      
      <Canvas camera={cameraSettings} style={styleSettings}>
        <PointerLockControls />
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />
        <Object />
      </Canvas>
    </React.Fragment>
  );
  
};

export default World;