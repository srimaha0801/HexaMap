import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Map from "./Map";
import Building from "./Building";
import { useEffect, useRef, useState } from "react";
import HexagonCompass from "./HexagonCompass";
import { pointersMap } from "./util";

export default function MainCity() {
  const ref = useRef();
  const controlsRef = useRef();
  const [selectedGate, setSelectedGate] = useState("gate1");
  const [mapRotation, setMapRotation] = useState(0);

  useEffect(() => {
    if (ref.current) {
      console.log("ref data: ", ref.current.position);
    }
  }, [ref]);

  const handleGateSelect = (gate) => {
    const gates = Object.keys(pointersMap);
    const currentIndex = gates.indexOf(selectedGate);
    const targetIndex = gates.indexOf(gate);
    const diff = targetIndex - currentIndex;

    setSelectedGate(gate);
    setMapRotation(prev => prev - (diff * Math.PI / 3));
  };

  // Navigate to next gate (rotate by 60 degrees)
  const handleNextGate = () => {
    const gates = Object.keys(pointersMap);
    const currentIndex = gates.indexOf(selectedGate);
    const nextIndex = (currentIndex + 1) % gates.length;
    setSelectedGate(gates[nextIndex]);
    setMapRotation(prev => prev - Math.PI / 3); // Subtract 60 degrees for continuous rotation
  };

  // Navigate to previous gate (rotate by -60 degrees)
  const handlePrevGate = () => {
    const gates = Object.keys(pointersMap);
    const currentIndex = gates.indexOf(selectedGate);
    const prevIndex = (currentIndex - 1 + gates.length) % gates.length;
    setSelectedGate(gates[prevIndex]);
    setMapRotation(prev => prev + Math.PI / 3); // Add 60 degrees for continuous rotation
  };


  return (
    <div className="w-full h-[300px] md:h-[600px] bg-black">
      {/* <Html fullscreen> */}
      <HexagonCompass selectedGate={selectedGate} onGateSelect={handleGateSelect} />
      {/* </Html> */}

      <div className="absolute top-[10%] left-5 z-[1000] -translate-y-1/2">
        <button
          onClick={handlePrevGate}
          className="flex cursor-pointer items-center gap-x-1 rounded-xl bg-gray-800 p-3 font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-900 hover:shadow-zinc-900 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="hidden lg:block">Prev Gate</span>
        </button>
      </div>

      <div className="absolute top-[10%] right-5 z-[1000] -translate-y-1/2">
        <button
          onClick={handleNextGate}
          className="flex cursor-pointer items-center gap-x-1 rounded-xl bg-gray-800 p-3 font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-900 hover:shadow-zinc-900 active:scale-95"
        >
          <span className="hidden lg:block">Next Gate</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <Canvas camera={{ position: [0, 250, 530], fov: 30 }} ref={ref} className="mt-[25%] md:mt-auto">
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 15, 10]} />

        <group name="main-city">

          <Map controlsRef={controlsRef} mapRotation={mapRotation} selectedGate={selectedGate} setMapRotation={setMapRotation} setSelectedGate={setSelectedGate} />

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
          ref={controlsRef}
          minDistance={150}
          maxDistance={400}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 9}
          maxAzimuthAngle={Math.PI / 9}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
