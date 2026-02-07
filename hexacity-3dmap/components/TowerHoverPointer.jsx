import { Html } from "@react-three/drei";
import { useState } from "react";

export default function TowerHoverPointer({
  name,
  model,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  isActive,
  label,
  pointerImg,             
  pointerHeight = 35,
  tooltipHeight = 20,
  level = 3,
  element = "Dark",
  attack = 75,
  defence = 50,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        if (!isActive) return;
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      {/* Tower model */}
      <primitive name={name} object={model.scene.clone()} scale={scale} />

      {isActive && pointerImg && (
        <Html position={[0, pointerHeight, 0]} center distanceFactor={100} occlude>
          <div className="pointer-events-none">
            <img
              src={pointerImg}
              alt={`${label} pointer`}
              className="max-w-10"
            />
          </div>
        </Html>
      )}

      {isActive && hovered && (
        <Html
          position={[0, tooltipHeight, 0]}
          center
          distanceFactor={100}
       occlude="raycast"
  zIndexRange={[10, 0]}
        >
          <div className="pointer-events-none">
            <div className="w-56 z-[100] absolute rounded-xl border border-yellow-400/40 bg-zinc-900 p-4 shadow-[0_0_15px_rgba(234,179,8,0.35)]">
              
              {/* Title */}
              <h2 className="text-center text-lg font-semibold text-yellow-300 mb-3">
                {label}
              </h2>

              {/* Stats */}
              <div className="space-y-2 text-sm text-gray-200">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-yellow-400">
                     Level
                  </span>
                  <span className="font-semibold">{level}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-red-500">
                     Element
                  </span>
                  <span className="font-semibold">{element}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-blue-400">
                     Attack
                  </span>
                  <span className="font-semibold">{attack}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-green-400">
                     Defence
                  </span>
                  <span className="font-semibold">{defence}</span>
                </div>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}
