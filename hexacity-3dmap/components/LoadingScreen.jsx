export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-4 inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent"></div>
        <h2 className="text-xl font-semibold text-yellow-300">Loading City...</h2>
        <p className="mt-2 text-sm text-gray-400">Preparing your 3D experience</p>
      </div>
    </div>
  );
}
