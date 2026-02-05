import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  () => import("../components/ModelViewer"),
  { ssr: false }
);

export default function ViewerPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl mb-4">GLB Asset Viewer</h1>
      <ModelViewer />
    </main>
  );
}