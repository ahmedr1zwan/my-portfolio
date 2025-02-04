import Clock from "./Clock";

export default function Navbar() {
  return (
    <div className="fixed top-0 flex items-center w-full h-20 px-4
    bg-gradient-to-r from-white/60 via-white/30 to-white/60
    backdrop-blur-sm">
      {/* Left side: clock */}
      <div className="">
        <Clock />
      </div>

      {/* Middle section: nav items */}
      <div className="flex justify-center flex-1">
        <div className="bg-[#4F4D4D] px-4 py-2 rounded-3xl flex items-center space-x-8 text-white">
          <a href="#home">Home</a>
          <a href="#info">About</a>
          <a href="#info">Projects</a>
          {/* “Toggle” circle */}
          <div className="bg-black w-12 h-6 rounded-3xl" />
        </div>
      </div>

      {/* Right side: icons */}
      <div className="hidden md:flex items-center">
        <img src="/icons/network.svg" className="h-6" />
      </div>
    </div>
  );
}
