import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

export default function Building({ 
  path, 
  position = [0, 0, 0], 
  scale = 1, 
  rotation = [0,0,0] 
}) {
  const { scene } = useGLTF(path);
  const clonedScene = useMemo(
    () => SkeletonUtils.clone(scene),
    [scene]
  );
  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}