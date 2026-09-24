import Clock from "./Clock";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="site-nav fixed top-0 left-0 right-0 z-50 glass border-b border-apple-gray-200/50 backdrop-blur-apple">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left side: clock */}
          <div className="text-apple-gray-900 font-medium text-sm">
            <a href="#home" className="nav-monogram" aria-label="Ahmed Rizwan home">ar<span aria-hidden="true">✳</span></a>
            <span className="nav-clock"><Clock /></span>
          </div>

          {/* Middle section: nav items */}
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              className="text-sm font-medium text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-sm font-medium text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
            >
              Projects
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
