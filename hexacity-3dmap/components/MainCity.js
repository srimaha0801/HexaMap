import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Map from "./Map";
import Building from "./Building";
import { useEffect, useRef } from "react";

export default function MainCity() {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      console.log("ref data: ", ref.current.position)
    }
  }, [ref])

  return (
    <div className="w-full h-[600px] bg-black">
      <Canvas camera={{ position: [0, 250, 530], fov: 30 }} ref={ref}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 10, 5]} />

          <group name="main-city">
            <Map />

            {/* Center Crystal */}
            <Building
              name="center-crystal"
              path="/models/centerCrystal.glb"
              position={[0, 9, 0]}
              scale={0.8}
              rotation={[0, 0, 0]}
            />
          </group>

        <OrbitControls 
          minDistance={150}
          maxDistance={400}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 3}
          minAzimuthAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 9}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
