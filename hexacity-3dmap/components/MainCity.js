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
      <Canvas camera={{ position: [0, 250, 330], fov: 45 }} ref={ref}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 10, 5]} />
        <group>
          {/* <Map />
          <Building
            path="/models/centerCrystal.glb"
            position={[0, 9, 0]}
            scale={0.8}
          /> */}

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

            {/* Golem 1 */}
            <Building
              name="golem-1"
              path="/models/golem.glb"
              position={[28, 26.5, 16.4]}
              rotation={[0, Math.PI / 3.05, 0]}
              scale={0.8}
            />

            {/* Golem 2 */}
            <Building
              name="golem-2"
              path="/models/golem.glb"
              position={[28.3, 26.5, -15.5]}
              rotation={[0, Math.PI / 1.5, 0]}
              scale={0.8}
            />
          </group>

          {/* Golem 3 */}
          <Building
            name="golem-3"
            path="/models/golem.glb"
            position={[0, 26.5, -31.95]}
            rotation={[0, -Math.PI, 0]}
            scale={0.8}
          />

          {/* Golem 4 */}
          <Building
            name="golem-4"
            path="/models/golem.glb"
            position={[-27, 26.5, -16.4]}
            rotation={[0, -(Math.PI / 1.5), 0]}
            scale={0.8}
          />

          {/* Golem 5 */}
          <Building
            name="golem-5"
            path="/models/golem.glb"
            position={[-27.2, 26.5, 16.4]}
            rotation={[0, -(Math.PI / 3), 0]}
            scale={0.8}
          />

          {/* Golem 6 */}
          <Building
            name="golem-6"
            path="/models/golem.glb"
            position={[0, 26.5, 32.2]}
            rotation={[0, 0, 0]}
            scale={0.8}
          />
        </group>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
