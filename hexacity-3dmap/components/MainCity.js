import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Map from "./Map";
import Building from "./Building";
import { useEffect, useRef, useState, Suspense } from "react";
import HexagonCompass from "./HexagonCompass";
import LoadingScreen from "./LoadingScreen";
import { pointersMap } from "./util";

export default function MainCity() {
  const ref = useRef();
  const controlsRef = useRef();
  const [selectedGate, setSelectedGate] = useState("gate1");
  const [mapRotation, setMapRotation] = useState(0);
  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedDefense, setSelectedDefense] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      console.log("ref data: ", ref.current.position);
    }
    
    // Hide loading screen after initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
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
    <div>
      {isLoading && <LoadingScreen />}

            <HexagonCompass selectedGate={selectedGate} onGateSelect={handleGateSelect} />

      <div className="absolute top-[10%] md:top-[50%] left-5 z-[1000] -translate-y-1/2">
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

      <div className="absolute top-[10%] md:top-[50%] right-5 z-[1000] -translate-y-1/2">
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

            {/* Mobile Tower Popover at bottom */}
      {selectedTower && (
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-[2000] w-[90%] max-w-sm">
          <div className="relative">
            <button
              onClick={() => setSelectedTower(null)}
              className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-lg"
            >
              ×
            </button>
            <div className="w-full rounded-xl border border-yellow-400/40 bg-zinc-900/95 backdrop-blur-sm p-4 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
              <h2 className="text-center text-lg font-semibold text-yellow-300 mb-3">
                {selectedTower.label}
              </h2>
              <div className="space-y-2 text-sm text-gray-200">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-yellow-400">Level</span>
                  <span className="font-semibold">{selectedTower.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-red-500">Element</span>
                  <span className="font-semibold">{selectedTower.element}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-blue-400">Attack</span>
                  <span className="font-semibold">{selectedTower.attack}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-green-400">Defence</span>
                  <span className="font-semibold">{selectedTower.defence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Defense Popover at bottom */}
      {selectedDefense && (
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-[2000] w-[90%] max-w-sm">
          <div className="relative">
            <button
              onClick={() => setSelectedDefense(null)}
              className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-lg"
            >
              ×
            </button>
            <div className="w-full rounded-xl border border-blue-400/40 bg-zinc-900/95 backdrop-blur-sm p-4 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <h2 className="text-center text-lg font-semibold text-blue-300 mb-3">
                {selectedDefense.label}
              </h2>
              <div className="space-y-2 text-sm text-gray-200">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-yellow-400">Level</span>
                  <span className="font-semibold">{selectedDefense.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-purple-500">Type</span>
                  <span className="font-semibold">{selectedDefense.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-red-400">Attack</span>
                  <span className="font-semibold">{selectedDefense.attack}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-green-400">Defence</span>
                  <span className="font-semibold">{selectedDefense.defence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    <div className="w-full h-[300px] md:h-[600px] bg-black relative">      



      <Canvas 
        camera={{ position: [0, 250, 530], fov: 30 }} 
        ref={ref} 
        className="mt-[25%] md:mt-auto"
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: false
        }}
      >
        <Suspense fallback={null}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 15, 10]} />

        <group name="main-city">

          <Map 
            controlsRef={controlsRef} 
            mapRotation={mapRotation} 
            selectedGate={selectedGate} 
            setMapRotation={setMapRotation} 
            setSelectedGate={setSelectedGate}
            onTowerClick={setSelectedTower}
            onDefenseClick={setSelectedDefense}
          />

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
        </Suspense>
      </Canvas>

    </div>
        </div>

  );
}
