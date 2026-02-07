import dynamic from "next/dynamic";

const MainCity = dynamic(() => import("../components/MainCity"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="h-20 bg-black flex items-center px-6"></div>
      <div className="w-full">
        <MainCity />
      </div>
    </main>
  );
}