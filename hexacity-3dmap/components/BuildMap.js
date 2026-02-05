import { useGLTF } from "@react-three/drei";

export default function BuildMap({
  path,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  dimmed = false,
}) {
  const { scene } = useGLTF(path);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = dimmed ? 0.25 : 1;
    }
  });

  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}
