import { Html } from "@react-three/drei";

const GateName = ({gateName}) => {
    return         <Html
      position={[0, 0, 30]}
      center
      occlude
      zIndexRange={[100, 0]}
      distanceFactor={90}
    >
      <div className="
        overflow-hidden
        rounded-lg
        bg-[#121212] bg-opacity-90
        shadow-lg
        ring-1 ring-black ring-opacity-5
        backdrop-blur-sm
        px-4 py-2
      ">
           <span className="text-white text-2xl font-bold whitespace-nowrap">
          {gateName}
        </span>
      </div>
    </Html>
}

export default GateName