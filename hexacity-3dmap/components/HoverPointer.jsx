import { Html } from "@react-three/drei";
import { useState, useCallback, memo, useMemo } from "react";

const HoverPointer = memo(function HoverPointer({
  name,
  model,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  isActive,
  label,
  pointerImg,
  pointerHeight = 15,
  tooltipHeight = 10,
  level = 2,
  type = "Defense",
  attack = 50,
  defence = 40,
  onDefenseClick,
}) {
  const [hovered, setHovered] = useState(false);

  // Clone the model scene once and memoize it
  const clonedScene = useMemo(() => {
    if (!model?.scene) return null;
    return model.scene.clone();
  }, [model]);

  const handleClick = useCallback((e) => {
    if (!isActive) return;
    e.stopPropagation();
    
    // On mobile, trigger the click handler to show popover at bottom
    if (onDefenseClick) {
      onDefenseClick({ label, level, type, attack, defence });
    }
  }, [isActive, onDefenseClick, label, level, type, attack, defence]);

  const handlePointerOver = useCallback((e) => {
    if (!isActive) return;
    e.stopPropagation();
    setHovered(true);
  }, [isActive]);

  const handlePointerOut = useCallback((e) => {
    e.stopPropagation();
    setHovered(false);
  }, []);

  if (!clonedScene) return null;

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {/* Defense model */}
      <primitive name={name} object={clonedScene} scale={scale} />

      {isActive && pointerImg && (
        <Html 
          position={[0, pointerHeight, 0]} 
          center 
          distanceFactor={100}
          style={{ pointerEvents: 'none' }}
        >
          <div className="pointer-events-none">
            <img
              src={pointerImg}
              alt={`${label} pointer`}
              className="max-w-8"
            />
          </div>
        </Html>
      )}

      {/* Desktop hover tooltip - hidden on mobile */}
      {isActive && hovered && (
        <Html
          position={[0, tooltipHeight, 0]}
          center
          distanceFactor={100}
          zIndexRange={[100, 0]}
          style={{ pointerEvents: 'none' }}
        >
          <div className="pointer-events-none hidden md:block">
            <div className="w-52 z-[100] rounded-xl border border-blue-400/40 bg-zinc-900 p-3 shadow-[0_0_15px_rgba(59,130,246,0.35)]">
              
              {/* Title */}
              <h2 className="text-center text-base font-semibold text-blue-300 mb-2">
                {label}
              </h2>

              {/* Stats */}
              <div className="space-y-1.5 text-xs text-gray-200">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-yellow-400">
                     Level
                  </span>
                  <span className="font-semibold">{level}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-purple-500">
                     Type
                  </span>
                  <span className="font-semibold">{type}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-red-400">
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
});

export default HoverPointer;
