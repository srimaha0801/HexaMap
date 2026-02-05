import dynamic from "next/dynamic";

const MainCity = dynamic(() => import("../components/MainCity"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainCity />
    </main>
  );
}