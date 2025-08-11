import { FaLeaf, FaSeedling, FaFeather } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Logo from '../../assets/logo-noBG.png'

export default function Footer({ darkMode, toggleTheme }) {
  return (
    <footer className="bg-[var(--color-bg)]/30 backdrop-blur-[2px] text-[var(--color-text)] py-10 md:py-18 lg:py-20 px-6 relative overflow-hidden border-t border-[var(--color-border-soft)]">
      {/* Ethereal background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/30 to-transparent -z-20" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-[url('/noise.png')] opacity-5 -z-10" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand section */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-6">
            <img src={Logo} className='w-30 h-auto' alt='Berrywink logo'/>
            <span className="ml-4 text-2xl font-bold tracking-tight">
              Berry<span className="text-[var(--color-primary)]">Wink</span>
            </span>
          </div>
          <p className="mb-8 max-w-md text-[var(--color-text)]/80 leading-relaxed">
            Where souls find their digital resonance. Not an app, but an experience that lingers in your heartspace.
          </p>
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--color-bg)] transition-colors border border-[var(--color-border-soft)]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <IoSunny className="text-xl text-[var(--color-accent)]" />
              ) : (
                <IoMoon className="text-xl text-[var(--color-primary)]" />
              )}
            </button>
            <div className="h-6 w-px bg-[var(--color-border)]" />
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-[var(--color-bg)] transition-colors border border-[var(--color-border-soft)]">
                <FaLeaf className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-[var(--color-bg)] transition-colors border border-[var(--color-border-soft)]">
                <FaSeedling className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-[var(--color-bg)] transition-colors border border-[var(--color-border-soft)]">
                <FaFeather className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <div>
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <FaLeaf className="text-[var(--color-primary)] text-sm" />
            <span>The Journey</span>
          </h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> First Encounters</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> Deepening Bonds</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> Shared Dreams</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> Night Whispers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <FaSeedling className="text-[var(--color-primary)] text-sm" />
            <span>Our Roots</span>
          </h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> The Vision</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> Sacred Commitments</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> Soul Gardeners</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><span className="text-xs opacity-50">↳</span> Moonlight Charters</a></li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[var(--color-border-soft)] text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text)]/60">
          <p>© {new Date().getFullYear()} BerryWink. All whispers reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Starlight Promise</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Moon Phase Agreement</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Sacred Data</a>
          </div>
        </div>
      </div>

    
        </footer>
  );
}