import BuildMap from "./BuildMap";

export default function GateGroup({
  active,
  golem,
  stoneThrower,
  towers = ["/models/darkTower.glb","/models/lightTower.glb","/models/fireTower.glb","/models/waterTower.glb","/models/windTower.js"],
}) {
  return (
    <group>
      {/* Golem */}
      <BuildMap
        path="/models/golem.glb"
        position={golem.position}
        rotation={golem.rotation}
        scale={0.7}
        dimmed={!active}
      />

      {/* Stone Thrower */}
      <BuildMap
        path="/models/stoneThrower.glb"
        position={stoneThrower.position}
        rotation={stoneThrower.rotation}
        scale={0.6}
        dimmed={!active}
      />

      {/* Towers */}
      {towers.map((tower, i) => (
        <BuildMap
          key={i}
          path={tower.path}
          position={tower.position}
          rotation={tower.rotation}
          scale={tower.scale}
          dimmed={!active}
        />
      ))}
    </group>
  );
}
