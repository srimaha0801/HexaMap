import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

import Map from "./Map";
import Building from "./Building";
import GateGroup from "./GateGroup";

export default function MainCityMap() {
  const [activeGate, setActiveGate] = useState(1);

  const GATES = [
    {
      id: 1,
      golem: {
        position: [28, 26.5, 16.4],
        rotation: [0, Math.PI / 3, 0],
      },
      stoneThrower: {
        position: [25, 26.5, 20],
        rotation: [0, Math.PI / 3, 0],
      },
    },
    {
      id: 2,
      golem: {
        position: [0, 26.5, 32.8],
        rotation: [0, Math.PI / 2, 0],
      },
      stoneThrower: {
        position: [3, 26.5, 36],
        rotation: [0, Math.PI / 2, 0],
      },
    },
    {
      id: 3,
      golem: {
        position: [-28, 26.5, 16.4],
        rotation: [0, (2 * Math.PI) / 3, 0],
      },
      stoneThrower: {
        position: [-32, 26.5, 18],
        rotation: [0, (2 * Math.PI) / 3, 0],
      },
    },
    {
      id: 4,
      golem: {
        position: [-28, 26.5, -16.4],
        rotation: [0, Math.PI, 0],
      },
      stoneThrower: {
        position: [-32, 26.5, -18],
        rotation: [0, Math.PI, 0],
      },
    },
    {
      id: 5,
      golem: {
        position: [0, 26.5, -32.8],
        rotation: [0, (4 * Math.PI) / 3, 0],
      },
      stoneThrower: {
        position: [2, 26.5, -36],
        rotation: [0, (4 * Math.PI) / 3, 0],
      },
    },
    {
      id: 6,
      golem: {
        position: [28, 26.5, -16.4],
        rotation: [0, (5 * Math.PI) / 3, 0],
      },
      stoneThrower: {
        position: [32, 26.5, -18],
        rotation: [0, (5 * Math.PI) / 3, 0],
      },
    },
  ];

  return (
    <div className="mt-10 mx-auto w-150 h-250 bg-black">
      <Canvas camera={{ position: [0, 6, 10], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} />

        <Map />

        {/* Center crystal */}
        <Building
          path="/models/centerCrystal.glb"
          position={[0, 9, 0]}
          scale={0.8}
        />

        {/* Gates */}
        {GATES.map((gate) => (
          <GateGroup
            key={gate.id}
            active={gate.id === activeGate}
            golem={gate.golem}
            stoneThrower={gate.stoneThrower}
          />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  );
}
