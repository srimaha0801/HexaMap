import { useGLTF } from "@react-three/drei";

export default function Model({ path, scale = 1 }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}