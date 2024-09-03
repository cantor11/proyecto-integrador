import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from './pages/Object/Object.jsx';

const World =() => {
    return (
    <Canvas 
        camera={{
            position: [3, 0, 4],
            fov: 120
        }}

        style={{
            width: '100vw',     // Ocupa todo el ancho de la ventana
            height: '100vh'     // Ocupa toda la altura de la ventana
        }}
    >
        <OrbitControls 
            enableZoom={true}
            autoRotate={false}
            autoRotateSpeed={2.0}
            enablePan={true}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.1}
            rotateSpeed={1.0}
        />
        <ambientLight intensity={1.5}/>
        <directionalLight position={[0, 10, 10]} />
        <House />
    </Canvas>
    );
};

export default World;