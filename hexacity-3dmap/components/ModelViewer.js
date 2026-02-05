import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState } from "react";
import Model from "./Model";

const MODELS = [
  "/models/map.glb",
  "/models/ballista.glb",
  "/models/barrack.glb",
  "/models/centerCrystal.glb",
  "/models/darkTower.glb",
  "/models/fireTower.glb",
  "/models/golem.glb",
  "/models/lightTower.glb",
  "/models/stoneThrower.glb",
  "/models/wallGate.glb",
  "/models/waterTower.glb",
  "/models/windTower.glb",
];

export default function ModelViewer() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="mb-3 flex gap-3">
        <button onClick={() => setIndex((i) => (i + MODELS.length - 1) % MODELS.length)}>
          Prev
        </button>
        <button onClick={() => setIndex((i) => (i + 1) % MODELS.length)}>
          Next
        </button>
        <span className="ml-4">{MODELS[index]}</span>
      </div>

      <div className="w-full h-[1400px]">
        <Canvas camera={{ position: [0, 4, 8], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} />

          <Model path={MODELS[index]} scale={1} />

          <OrbitControls />
          <Environment preset="city" />
        </Canvas>
      </div>
    </>
  );
}
