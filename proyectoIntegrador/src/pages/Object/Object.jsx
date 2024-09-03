import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import useObjectStore from "../../stores/use-Object-store.js";

/* eslint-disable react/no-unknown-property */
const Object = () => {
  const ObjectRef = useRef(null);
  const {setObjectTransforms} = useObjectStore();
  
  const speed = 0.01; 
  const range = 10;
  const [direction, setDirection] = useState(1);
  
  useFrame((state, delta) => {
    if (ObjectRef.current) {
     
      ObjectRef.current.position.y = Math.cos(state.clock.elapsedTime);
      ObjectRef.current.position.x += speed * direction;
     
      if (ObjectRef.current.position.x > range || ObjectRef.current.position.x < -range) {
        setDirection(-direction); 
      }

      
      setObjectTransforms({
        position: ObjectRef.current.position,
        scale: ObjectRef.current.scale,
      });
    }
  });

  return (
    <group ref={ObjectRef} name="Object" scale={[2, 3, 1]}>
      <mesh name="roof" position-y={1} rotation-y={Math.PI / 4} scale-y={1.5}>
        <coneGeometry args={[1, 1, 4]} />
        <meshPhongMaterial color={"green"} />
      </mesh>
      <mesh name="structure">
        <boxGeometry args={[0.5, 1, 1]} />
        <meshPhysicalMaterial wireframe={false} color="SaddleBrown" />
      </mesh>
    </group>
  );
  

};

export default Object;