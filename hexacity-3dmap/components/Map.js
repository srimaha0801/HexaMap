import { Html, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Building from "./Building";
import HexagonCompass from "./HexagonCompass";
import TowerHoverPointer from "./TowerHoverPointer";
import { pointersMap } from "./util";

// Component to handle gate opacity
function GateGroup({ gateName, isActive, children, ...props }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        // Handle both single material and array of materials
        const materials = Array.isArray(child.material) ? child.material : [child.material];

        materials.forEach((material) => {
          if (!material) return;

          if (!material.userData) {
            material.userData = {};
          }

          if (!material.userData.cloned) {
            const clonedMaterial = material.clone();
            clonedMaterial.userData.cloned = true;
            clonedMaterial.transparent = true;

            if (Array.isArray(child.material)) {
              const index = child.material.indexOf(material);
              child.material[index] = clonedMaterial;
            } else {
              child.material = clonedMaterial;
            }
          }
        });

        // Update the opacity based on active state
        const finalMaterials = Array.isArray(child.material) ? child.material : [child.material];
        finalMaterials.forEach((mat) => {
          if (mat) {
            mat.opacity = isActive ? 1 : 0.2;
            mat.needsUpdate = true;
          }
        });
      }
    });
  });

  return (
    <group ref={groupRef} {...props}>
      {children}
    </group>
  );
}

// Component to handle opacity for building groups
function BuildingArea({ areaName, position, rotation, isActive, barrack, darkTower, lightTower, fireTower, waterTower, windTower, onTowerClick }) {
  const groupRef = useRef();


  useFrame(() => {
    if (!groupRef.current) return

    groupRef.current.traverse((child) => {
      if (child.isMesh) {
        if (!child.material.userData.cloned) {
          child.material = child.material.clone()
          child.material.userData.cloned = true
          child.material.transparent = true
        }

        // here we are going to update the opacity
        child.material.opacity = isActive ? 1 : 0.2
        child.material.needsUpdate = true
      }
    })
  }, [isActive])

  const renderTowers = () => {
    switch (areaName) {
      case 'building-area1':
        return <>
          <TowerHoverPointer
            name="tower1"
            model={fireTower}
            position={[19.5, 0, -19.2]}
            isActive={isActive}
            label="Fire Tower"
            pointerImg="/FIRE_3_red.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower2"
            model={darkTower}
            position={[19.5, 0, 10]}
            isActive={isActive}
            label="Dark Tower"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower3"
            model={lightTower}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Light Tower"
            pointerImg="/Light_1_yellow.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower4"
            model={fireTower}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Fire Tower"
            pointerImg="/FIRE_3_red.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower5"
            model={windTower}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
            isActive={isActive}
            label="Wind Tower"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />
        </>

      case 'building-area2':
        return <>
          <TowerHoverPointer
            name="tower1"
            model={darkTower}
            position={[19.5, 0, -19.2]}
            isActive={isActive}
            label="Dark Tower"
            pointerImg="/Water_2_blue.webp "
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower2"
            model={waterTower}
            position={[19.5, 0, 10]}
            isActive={isActive}
            label="Water Tower"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower3"
            model={darkTower}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Dark Tower"
            pointerImg="/Water_2_blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower4"
            model={darkTower}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Dark Tower"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower5"
            model={waterTower}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
            isActive={isActive}
            label="Water Tower"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />
        </>

      case 'building-area3':
        return <>
          <TowerHoverPointer
            name="tower1"
            model={windTower}
            position={[19.5, 0, -19.2]}
            isActive={isActive}
            label="Tower 1"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower2"
            model={darkTower}
            position={[19.5, 0, 10]}
            isActive={isActive}
            label="Tower 2"
            pointerImg="/Dark_1_purple.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower3"
            model={darkTower}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 3"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower4"
            model={darkTower}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 4"
            pointerImg="/Dark_1_purple.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower5"
            model={windTower}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
            isActive={isActive}
            label="Tower 5"
            pointerImg="/Storm_3_green.webp"
            onTowerClick={onTowerClick}
          />
        </>

      case 'building-area4':
        return <>
          <TowerHoverPointer
            name="tower1"
            model={windTower}
            position={[19.5, 0, -19.2]}
            isActive={isActive}
            label="Tower 1"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower2"
            model={darkTower}
            position={[19.5, 0, 10]}
            isActive={isActive}
            label="Tower 2"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower3"
            model={lightTower}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 3"
            pointerImg="/Light_3_yellow.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower4"
            model={lightTower}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 4"
            pointerImg="/Light_3_yellow.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower5"
            model={fireTower}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
            isActive={isActive}
            label="Tower 5"
            pointerImg="/FIRE_3_red.webp"
            onTowerClick={onTowerClick}
          />
        </>

      case 'building-area5':
        return <>
          <TowerHoverPointer
            name="tower1"
            model={waterTower}
            position={[19.5, 0, -19.2]}
            isActive={isActive}
            label="Tower 1"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower2"
            model={darkTower}
            position={[19.5, 0, 10]}
            isActive={isActive}
            label="Tower 2"
            pointerImg="/Dark_1_purple.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower3"
            model={darkTower}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 3"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower4"
            model={fireTower}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 4"
            pointerImg="/FIRE_3_red.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower5"
            model={windTower}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
            isActive={isActive}
            label="Tower 5"
            pointerImg="/Storm_3_green.webp"
            onTowerClick={onTowerClick}
          />
        </>

      case 'building-area6':
        return <>
          <TowerHoverPointer
            name="tower1"
            model={lightTower}
            position={[19.5, 0, -19.2]}
            isActive={isActive}
            label="Tower 1"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower2"
            model={lightTower}
            position={[19.5, 0, 10]}
            isActive={isActive}
            label="Tower 2"
            pointerImg="/Light_3_yellow.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower3"
            model={lightTower}
            position={[-10, 0, 27]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 3"
            pointerImg="/Light_2_yellow.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower4"
            model={darkTower}
            position={[-35.5, 0, 12.2]}
            rotation={[0, -Math.PI / 1.5, 0]}
            isActive={isActive}
            label="Tower 4"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />

          <TowerHoverPointer
            name="tower5"
            model={darkTower}
            position={[-15, 0, -17]}
            rotation={[0, -Math.PI / 1.2, 0]}
            isActive={isActive}
            label="Tower 5"
            pointerImg="/Water-3-blue.webp"
            onTowerClick={onTowerClick}
          />
        </>
    }
  }

  return (
    <group
      ref={groupRef}
      name={areaName}
      scale={1}
      position={position}
      rotation={rotation}
    >

      <primitive object={barrack.scene.clone()} />
      {renderTowers()}
    </group>
  );
}

export default function Map({ controlsRef, selectedGate,setSelectedGate,mapRotation,setMapRotation, onTowerClick }) {
  // const [selectedGate, setSelectedGate] = useState("gate1");
  // const [mapRotation, setMapRotation] = useState(0);
  const mapGroupRef = useRef();

  const { scene } = useGLTF("/models/map.glb");
  const barrack = useGLTF("/models/barrack.glb");
  const darkTower = useGLTF("/models/darkTower.glb");
  const lightTower = useGLTF("/models/lightTower.glb");
  const fireTower = useGLTF("/models/fireTower.glb");
  const waterTower = useGLTF("/models/waterTower.glb");
  const windTower = useGLTF("/models/windTower.glb");
  const wallGate = useGLTF("/models/wallGate.glb");
  const ballista = useGLTF("/models/ballista.glb");
  const stoneThrower = useGLTF("/models/stoneThrower.glb");

  const { controls } = useThree();

  // // Navigate to next gate (rotate by 60 degrees)
  // const handleNextGate = () => {
  //   const gates = Object.keys(pointersMap);
  //   const currentIndex = gates.indexOf(selectedGate);
  //   const nextIndex = (currentIndex + 1) % gates.length;
  //   setSelectedGate(gates[nextIndex]);
  //   setMapRotation(prev => prev - Math.PI / 3); // Subtract 60 degrees for continuous rotation
  // };

  // // Navigate to previous gate (rotate by -60 degrees)
  // const handlePrevGate = () => {
  //   const gates = Object.keys(pointersMap);
  //   const currentIndex = gates.indexOf(selectedGate);
  //   const prevIndex = (currentIndex - 1 + gates.length) % gates.length;
  //   setSelectedGate(gates[prevIndex]);
  //   setMapRotation(prev => prev + Math.PI / 3); // Add 60 degrees for continuous rotation
  // };

  // Animate map rotation when gate changes
  useEffect(() => {
    if (!mapGroupRef.current) return;

    const targetRotation = mapRotation;
    const currentRotation = mapGroupRef.current.rotation.y;

    let progress = 0;
    const duration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const newRotation = currentRotation + (targetRotation - currentRotation) * eased;

      mapGroupRef.current.rotation.y = newRotation;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Reset camera azimuth angle after rotation completes
        if (controlsRef?.current) {
          controlsRef.current.reset();
        }
      }
    };

    animate();

    // Set camera control limits
    if (controls) {
      // Zoom restrictions
      controls.minDistance = 150;
      controls.maxDistance = 400;

      // Vertical angle restrictions (prevent upside down and top view)
      // Math.PI/2 is 90 degrees (horizontal view)
      controls.minPolarAngle = Math.PI / 3;    // 60 degrees (30 degrees from horizontal)
      controls.maxPolarAngle = Math.PI / 2.2;  // ~82 degrees (8 degrees from horizontal)

      // Disable panning to prevent free movement
      controls.enablePan = false;

      // Enable rotation but restrict it
      controls.enableRotate = true;

      // Restrict horizontal rotation to ±20 degrees from current position
      const maxOffset = Math.PI / 9; // 20 degrees
      controls.minAzimuthAngle = -maxOffset;
      controls.maxAzimuthAngle = maxOffset;

      // Enable damping for smoother control
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Update controls
      controls.update();
    }
  }, [mapRotation, controls, controlsRef]);

  // Check if building area should be visible
  const isHtmlVisible = (buildingName) => {
    const activeBuildings = pointersMap[selectedGate];
    return activeBuildings.includes(buildingName);
  };

  return (
    <>
      {/* Hexagon Compass Overlay */}


      {/* Navigation Buttons */}
      {/* <Html fullscreen>
        <div style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: 1000 }}>
          <button onClick={handlePrevGate} style={{
            padding: '15px 20px', fontSize: '24px', backgroundColor: 'rgba(59, 130, 246, 0.9)',
            color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}>◀</button>
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: 1000 }}>
          <button onClick={handleNextGate} style={{
            padding: '15px 20px', fontSize: '24px', backgroundColor: 'rgba(59, 130, 246, 0.9)',
            color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}>▶</button>
        </div>
      </Html> */}

      {/* Main rotating map group */}
      <group ref={mapGroupRef}>
        <primitive object={scene} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />

        {/* Golem 1 */}
        <Building
          name="golem-1"
          path="/models/golem.glb"
          position={[0, 26.5, 32.2]}
          rotation={[0, 0, 0]}
          scale={0.8}
        />
        {isHtmlVisible('golem-1') && (
          <Html position={[0, 50.5, 32.2]} center distanceFactor={100} occlude>
            <div className=" rounded-full text-base font-semibold shadow-lg">
              <img src={'/Light_3_yellow.webp'} className="max-w-11" />
            </div>
          </Html>
        )}

        {/* Golem 2 */}
        <Building
          name="golem-2"
          path="/models/golem.glb"
          position={[28, 26.5, 16.4]}
          rotation={[0, Math.PI / 3.05, 0]}
          scale={0.8}
        />
        {isHtmlVisible('golem-2') && (
          <Html position={[28, 50.5, 16.4]} center distanceFactor={100} occlude>
            <div className=" rounded-full text-base font-semibold shadow-lg">
              <img src={'/Light_3_yellow.webp'} className="max-w-11" />
            </div>
          </Html>
        )}

        {/* Golem 3 */}
        <Building
          name="golem-3"
          path="/models/golem.glb"
          position={[28.3, 26.5, -15.5]}
          rotation={[0, Math.PI / 1.5, 0]}
          scale={0.8}
        />
        {isHtmlVisible('golem-3') && (
          <Html position={[28.3, 50.5, -15.5]} center distanceFactor={100} occlude>
            <div className=" rounded-full text-base font-semibold shadow-lg">
              <img src={'/Light_3_yellow.webp'} className="max-w-11" />
            </div>
          </Html>
        )}

        {/* Golem 4 */}
        <Building
          name="golem-4"
          path="/models/golem.glb"
          position={[0, 26.5, -31.95]}
          rotation={[0, -Math.PI, 0]}
          scale={0.8}
        />
        {isHtmlVisible('golem-4') && (
          <Html position={[0, 50.5, -31.95]} center distanceFactor={100} occlude>
            <div className=" rounded-full text-base font-semibold shadow-lg">
              <img src={'/Light_3_yellow.webp'} className="max-w-11" />
            </div>
          </Html>
        )}

        {/* Golem 5 */}
        <Building
          name="golem-5"
          path="/models/golem.glb"
          position={[-27, 26.5, -16.4]}
          rotation={[0, -(Math.PI / 1.5), 0]}
          scale={0.8}
        />
        {isHtmlVisible('golem-5') && (
          <Html position={[-27, 50.5, -16.4]} center distanceFactor={100} occlude>
            <div className=" rounded-full text-base font-semibold shadow-lg">
              <img src={'/Light_2_yellow.webp'} className="max-w-11" />
            </div>
          </Html>
        )}

        {/* Golem 6 */}
        <Building
          name="golem-6"
          path="/models/golem.glb"
          position={[-27.2, 26.5, 16.4]}
          rotation={[0, -(Math.PI / 3), 0]}
          scale={0.8}
        />
        {isHtmlVisible('golem-6') && (
          <Html position={[-27.2, 50.5, 16.4]} center distanceFactor={100} occlude>
            <div className="rounded-full text-base font-semibold shadow-lg">
              <img src={'/Light_3_yellow.webp'} className="max-w-11" />
            </div>
          </Html>
        )}


        {/* Building Areas */}
        <BuildingArea areaName="building-area1" position={[38, 26, 77]} rotation={[0, -Math.PI, 0]}
          isActive={isHtmlVisible("building-area1")} barrack={barrack} darkTower={darkTower} lightTower={lightTower} fireTower={fireTower} waterTower={waterTower} windTower={windTower} onTowerClick={onTowerClick} />
        <BuildingArea areaName="building-area2" position={[86, 26, 5]} rotation={[0, -Math.PI / 1.5, 0]}
          isActive={isHtmlVisible("building-area2")} barrack={barrack} darkTower={darkTower} lightTower={lightTower} fireTower={fireTower} waterTower={waterTower} windTower={windTower} onTowerClick={onTowerClick} />
        <BuildingArea areaName="building-area3" position={[46.9, 26, -71.3]} rotation={[0, -1.05, 0]}
          isActive={isHtmlVisible("building-area3")} barrack={barrack} darkTower={darkTower} lightTower={lightTower} fireTower={fireTower} waterTower={waterTower} windTower={windTower} onTowerClick={onTowerClick} />
        <BuildingArea areaName="building-area4" position={[-38, 26, -76.4]} rotation={[0, 0, 0]}
          isActive={isHtmlVisible("building-area4")} barrack={barrack} darkTower={darkTower} lightTower={lightTower} fireTower={fireTower} waterTower={waterTower} windTower={windTower} onTowerClick={onTowerClick} />
        <BuildingArea areaName="building-area5" position={[-85, 26, -5.1]} rotation={[0, Math.PI / 3, 0]}
          isActive={isHtmlVisible("building-area5")} barrack={barrack} darkTower={darkTower} lightTower={lightTower} fireTower={fireTower} waterTower={waterTower} windTower={windTower} onTowerClick={onTowerClick} />
        <BuildingArea areaName="building-area6" position={[-48, 26, 71]} rotation={[0, Math.PI / 1.5, 0]}
          isActive={isHtmlVisible("building-area6")} barrack={barrack} darkTower={darkTower} lightTower={lightTower} fireTower={fireTower} waterTower={waterTower} windTower={windTower} onTowerClick={onTowerClick} />

        {/* Wall Gates */}
        <GateGroup gateName="gate1" isActive={selectedGate === "gate1"} name="wall-area1" position={[-1, 35, 137]} rotation={[0, 0, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text position={[0, 0, 30]} fontSize={3} color="white" anchorX="center" anchorY="middle"
            outlineWidth={0.08} outlineColor="black" billboard>Gate 1</Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </GateGroup>

        <GateGroup gateName="gate2" isActive={selectedGate === "gate2"} name="wall-area2" position={[117, 35, 71.5]} rotation={[0, Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text position={[0, 0, 30]} fontSize={3} color="white" anchorX="center" anchorY="middle"
            outlineWidth={0.08} outlineColor="black" billboard>Gate 2</Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </GateGroup>

        <GateGroup gateName="gate3" isActive={selectedGate === "gate3"} name="wall-area3" position={[117, 35, -65]} rotation={[0, 2 * Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text position={[0, 0, 30]} fontSize={3} color="white" anchorX="center" anchorY="middle"
            outlineWidth={0.08} outlineColor="black" billboard>Gate 3</Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </GateGroup>

        <GateGroup gateName="gate4" isActive={selectedGate === "gate4"} name="wall-area4" position={[1, 35, -137]} rotation={[0, Math.PI, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text position={[0, 0, 30]} fontSize={3} color="white" anchorX="center" anchorY="middle"
            outlineWidth={0.08} outlineColor="black" billboard>Gate 4</Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </GateGroup>

        <GateGroup gateName="gate5" isActive={selectedGate === "gate5"} name="wall-area5" position={[-117, 35, -71.5]} rotation={[0, 4 * Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text position={[0, 0, 30]} fontSize={3} color="white" anchorX="center" anchorY="middle"
            outlineWidth={0.08} outlineColor="black" billboard>Gate 5</Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </GateGroup>

        <GateGroup gateName="gate6" isActive={selectedGate === "gate6"} name="wall-area6" position={[-117, 35, 65]} rotation={[0, 5 * Math.PI / 3, 0]} scale={1}>
          <primitive object={wallGate.scene.clone()} scale={1} />
          <Text position={[0, 0, 30]} fontSize={3} color="white" anchorX="center" anchorY="middle"
            outlineWidth={0.08} outlineColor="black" billboard>Gate 6</Text>
          <primitive name="stoneThrower" object={stoneThrower.scene.clone()} scale={1} position={[0, 8, 0]} />
          <primitive name="ballista1" object={ballista.scene.clone()} scale={1} position={[-17, 7, 0]} />
          <primitive name="ballista2" object={ballista.scene.clone()} scale={1} position={[17, 7, 0]} />
        </GateGroup>
      </group>
    </>
  );
}

useGLTF.preload("/models/map.glb");
