import { useGLTF } from "@react-three/drei";
import Building from "./Building";
export default function Map() {
  const { scene } = useGLTF("/models/map.glb");
  const barrack = useGLTF("/models/barrack.glb");

  const darkTower = useGLTF("/models/darkTower.glb");
  const fireTower = useGLTF("/models/fireTower.glb");
  const lightTower = useGLTF("/models/lightTower.glb");
  const windTower = useGLTF("/models/windTower.glb");
  const waterTower = useGLTF("/models/waterTower.glb");

  const wallGate = useGLTF("/models/wallGate.glb");
  const ballista = useGLTF("/models/ballista.glb");
  const stoneThrower = useGLTF("/models/stoneThrower.glb");
  return (
    <>
      <group>
        <primitive
          object={scene}
          scale={1}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <group name="building-area1" scale={1}
          position={[86, 26, 5]}
          rotation={[0, -Math.PI / 1.5, 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
        </group>

        <group name="building-area2" scale={1}
          position={[38, 26, 77]}
          rotation={[0, -Math.PI , 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
        </group>

        <group name="building-area3" scale={1}
          position={[-48, 26, 71]}
          rotation={[0, Math.PI/1.5 , 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
        </group>
        <group name="building-area4" scale={1}
          position={[-85, 26, -5.1]}
          rotation={[0, Math.PI/3 , 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
        </group>
        <group name="building-area5" scale={1}
          position={[-38, 26, -76.4]}
          rotation={[0, 0 , 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
        </group>
        <group name="building-area6" scale={1}
          position={[46.9, 26, -71.3]}
          rotation={[0, -1.05 , 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
        </group>
      </group>
      <group>
        <primitive
          object={scene}
          scale={1}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <group
          name="wall-area1" scale={1}
          position={[-2, 35, 138]}
          rotation={[0, 0, 0]}
          >
          <primitive
            object={wallGate.scene.clone()}
          />
          <primitive name="stoneThrower"
            object={stoneThrower.scene.clone()}
            scale={1}
            position={[0, 8, 0]}
          />
          <primitive name="ballista1"
            object={ballista.scene.clone()}
            scale={1}
            position={[-17, 7, 0]}
          />
          <primitive name="ballista2"
            object={ballista.scene.clone()}
            scale={1}
            position={[17, 7, 0]}
          />

        </group>

        <group
          name="wall-area2" scale={1}
          position={[10, 35, 0]}
          rotation={[0, 0, 0]}
        >
          <primitive
            object={wallGate.scene.clone()}
          />
          <primitive name="stoneThrower"
            object={stoneThrower.scene.clone()}
            scale={1}
            position={[0, 8, 0]}
          />
          <primitive name="ballista1"
            object={ballista.scene.clone()}
            scale={1}
            position={[-17, 7, 0]}
          />
          <primitive name="ballista2"
            object={ballista.scene.clone()}
            scale={1}
            position={[17, 7, 0]}
          />

        </group>
      </group>
    </>
  );
}


{/* <Building
        path="/models/barrack.glb"
        position={[106, 26, 12]}
        scale={1.0}
        rotation={[0, -(Math.PI / 1.5), 0]}
      /> */}

/* Optional: preload for better performance */
useGLTF.preload("/models/map.glb");
