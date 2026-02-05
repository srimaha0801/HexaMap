import { useGLTF } from "@react-three/drei";

export default function Map() {
  const { scene } = useGLTF("/models/map.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

/* Optional: preload for better performance */
useGLTF.preload("/models/map.glb");
