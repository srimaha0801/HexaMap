import { Html, Text, useGLTF } from "@react-three/drei";
import Building from "./Building";
import { useEffect, useState } from "react";

export default function Map() {
  const [selectedGate, setSelectedGate] = useState("gate1")
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

  const pointersMap = {
    gate1: ["building-area1", "building-area2"],
    gate2: ["building-area2", "building-area3"],
    gate3: ["building-area3", "building-area4"],
    gate4: ["building-area4", "building-area5"],
    gate5: ["building-area5", "building-area1"],
  }

  useEffect(() => {

  }, [selectedGate])


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
          position={[38, 26, 77]}
          rotation={[0, -Math.PI, 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <Html
            position={[19.5, 35, -19.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              1
            </div>
          </Html>

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />
          <Html
            position={[19.5, 35, 10]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              2
            </div>
          </Html>

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-10, 35, 27]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              3
            </div>
          </Html>

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-35.5, 35, 12.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              4
            </div>
          </Html>

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
          <Html
            position={[-15.5, 35, -17]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              5
            </div>
          </Html>
        </group>

        <group name="building-area2" scale={1}
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

          <Html
            position={[19.5, 35, -19.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              1
            </div>
          </Html>

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />
          <Html
            position={[19.5, 35, 10]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              2
            </div>
          </Html>

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-10, 35, 27]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              3
            </div>
          </Html>

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-35.5, 35, 12.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              4
            </div>
          </Html>

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
          <Html
            position={[-15.5, 35, -17]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              5
            </div>
          </Html>
        </group>

        <group name="building-area3" scale={1}
          position={[46.9, 26, -71.3]}
          rotation={[0, -1.05, 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <Html
            position={[19.5, 35, -19.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              1
            </div>
          </Html>

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />
          <Html
            position={[19.5, 35, 10]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              2
            </div>
          </Html>

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-10, 35, 27]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              3
            </div>
          </Html>

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-35.5, 35, 12.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              4
            </div>
          </Html>

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
          <Html
            position={[-15.5, 35, -17]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              5
            </div>
          </Html>
        </group>
        <group name="building-area4" scale={1}
          position={[-38, 26, -76.4]}
          rotation={[0, 0, 0]}
        >
          <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <Html
            position={[19.5, 35, -19.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              1
            </div>
          </Html>

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />
          <Html
            position={[19.5, 35, 10]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              2
            </div>
          </Html>

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-10, 35, 27]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              3
            </div>
          </Html>

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-35.5, 35, 12.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              4
            </div>
          </Html>

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
          <Html
            position={[-15.5, 35, -17]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              5
            </div>
          </Html>
        </group>
        <group name="building-area5" scale={1}
          position={[-85, 26, -5.1]}
          rotation={[0, Math.PI / 3, 0]}
        >
         <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <Html
            position={[19.5, 35, -19.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              1
            </div>
          </Html>

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />
          <Html
            position={[19.5, 35, 10]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              2
            </div>
          </Html>

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-10, 35, 27]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              3
            </div>
          </Html>

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-35.5, 35, 12.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              4
            </div>
          </Html>

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
          <Html
            position={[-15.5, 35, -17]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              5
            </div>
          </Html>
        </group>
        <group name="building-area6" scale={1}
          position={[-48, 26, 71]}
          rotation={[0, Math.PI / 1.5, 0]}
        >
         <primitive
            object={barrack.scene.clone()}
          />

          <primitive name="tower1"
            object={darkTower.scene.clone()}
            scale={1}
            position={[19.5, 0, -19.2]}
          />

          <Html
            position={[19.5, 35, -19.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              1
            </div>
          </Html>

          <primitive name="tower2"
            object={lightTower.scene.clone()}
            scale={1}
            position={[19.5, 0, 10]}
          />
          <Html
            position={[19.5, 35, 10]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              2
            </div>
          </Html>

          <primitive name="tower3"
            object={lightTower.scene.clone()}
            scale={1}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-10, 35, 27]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              3
            </div>
          </Html>

          <primitive name="tower4"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
          />
          <Html
            position={[-35.5, 35, 12.2]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              4
            </div>
          </Html>

          <primitive name="tower5"
            object={darkTower.scene.clone()}
            scale={1}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
          />
          <Html
            position={[-15.5, 35, -17]}
            center
            distanceFactor={100}
            occlude
          >
            <div className="px-3 py-1 w-7.5 h-7.5 rounded-full bg-blue-600 text-white text-base font-semibold shadow-lg">
              5
            </div>
          </Html>
        </group>
      </group>

      <group>
        <primitive object={scene} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />

        {/* Wall 1  */}
        <group name="wall-area1" position={[-1, 35, 137]} rotation={[0, 0, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text
            position={[0, 0, 30]}   // above gate
            fontSize={3}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.08}
            outlineColor="black"
            billboard
          >
            Gate 1
          </Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </group>

        {/* Wall 2 */}
        <group name="wall-area2" position={[117, 35, 71.5]} rotation={[0, Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </group>

        {/* Wall 3 */}
        <group name="wall-area3" position={[117, 35, -65]} rotation={[0, 2 * Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </group>

        {/* Wall 4 */}
        <group name="wall-area4" position={[1, 35, -137]} rotation={[0, Math.PI, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </group>

        {/* Wall 5 */}
        <group name="wall-area5" position={[-117, 35, -71.5]} rotation={[0, 4 * Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </group>

        {/* Wall 6 */}
        <group name="wall-area6" position={[-117, 35, 65]} rotation={[0, 5 * Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
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
