import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Map from "./Map";
import Building from "./Building";

export default function MainCity() {
  const GOLEM_POSITION_ROTATION = [
    {
      position: [28, 26.5, 16.4],
      rotation: [0, Math.PI / 3.05, 0],
    },
    {
      position: [0, 26.5, 32.2],
      rotation: [0, 0 , 0],
    },
    {
      position: [-27.2, 26.5, 16.4],
      rotation: [0, -(Math.PI / 3), 0],
    },
    {
      position: [-27, 26.5, -16.4],
      rotation: [0, -(Math.PI / 1.5), 0],
    },
    {
      position: [0, 26.5, -31.95],
      rotation: [0, -(Math.PI) / 1, 0],
    },
    {
      position: [28.3, 26.5, -15.5],
      rotation: [0, Math.PI / 1.5, 0],
    },
  ];
  
  return (
    <div className="w-full h-[600px] bg-black">
      <Canvas camera={{ position: [0, 6, 10], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} />
        <group>
          <Map />
          <Building
            path="/models/centerCrystal.glb"
            position={[0, 9, 0]}
            scale={0.8}
          />
          {/* 6 Golem */}
          {GOLEM_POSITION_ROTATION.map(({position,rotation}, index) => (
            <Building
              key={index}
              path="/models/golem.glb"
              position={position}
              scale={0.8}
              rotation={rotation}
            />
          ))}
{/* 
          <Building
            path="/models/barrack.glb"
            position={[106, 26, 12]}
            scale={1.0}
            rotation={[0,-(Math.PI/1.5 ),0]}
          /> */}
        </group>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
