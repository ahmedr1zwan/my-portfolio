
const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start px-6 lg:px-12 pt-24 pb-4 max-w-7xl mx-auto gap-8 lg:gap-12"
    >
      {/* Left section: Content */}
      <div className="w-full lg:w-auto lg:flex-1 space-y-6 lg:pt-8">
        <div className="about-intro space-y-4">
          <p className="intro-role">Software developer</p>
          <h1 className="hero-title">
            Ahmed Rizwan
          </h1>
          
          <p className="relative text-lg lg:text-xl text-apple-gray-700 leading-relaxed max-w-2xl">
            I build full-stack applications, applied AI tools, and backend services. Most recently, I helped architects and engineers explore 1,000+ enterprise systems at Intact.
          </p>
        </div>


        {/* Social Links */}
        <div className="social-links flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://github.com/ahmedr1zwan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
          >
            <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/ahmed-rizwan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
          >
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          
          <a href="mailto:ahmed.rizwan@queensu.ca" className="flex items-center gap-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
            <img src="/assets/mail.svg" alt="Email" className="w-5 h-5" />
            <span className="text-sm">ahmed.rizwan@queensu.ca</span>
          </a>
        </div>
        <div className="education border-t border-apple-gray-200 pt-5 flex items-start sm:items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-apple-gray-50 p-3 flex items-center justify-center">
            <img src="/icons/queens.svg" alt="Queen’s University logo" className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0 space-y-1">
            <h2 className="text-sm font-semibold text-apple-gray-900">Education</h2>
            <p className="text-sm text-apple-gray-700">Queen’s University · Bachelor of Computing (Hons.)</p>
            <p className="text-sm text-apple-gray-600">Computer Science, AI Specialization · Kingston, ON</p>
            <p className="text-sm text-apple-gray-600">Sept. 2022 – Apr. 2027 (expected)</p>
          </div>
        </div>
      </div>

      {/* Right section: Profile Picture */}
      <div className="portrait-composition">
        <div className="portrait-frame">
        <img
          src="/assets/ahmed_2.svg"
          alt="Ahmed Rizwan"
          className="portrait-image"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
