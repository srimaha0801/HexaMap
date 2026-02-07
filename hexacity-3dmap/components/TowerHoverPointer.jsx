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
        <Html position={[0, tooltipHeight, 0]} center distanceFactor={100} occlude>
          <div className="px-3 py-1 rounded-lg bg-black/80 text-white text-xs shadow-lg whitespace-nowrap">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}
