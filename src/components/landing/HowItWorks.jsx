import { FaHeart, FaLock } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { FaUserAstronaut, FaMagic, FaFeatherAlt } from "react-icons/fa";


const steps = [
  {
    icon: <IoSparkles className="text-3xl text-[var(--color-primary)]" />,
    title: "1. Find Your Resonance",
    description:
      "We decode your emotional frequency to reveal kindred spirits tuned to your soul’s signal.",
  },
  {
    icon: <FaUserAstronaut className="text-3xl text-[var(--color-primary)]" />,
    title: "2. Awaken the Muse",
    description:
      "From your longings, we summon personas who speak your language — each crafted by what moves you most.",
  },
  {
    icon: <FaHeart className="text-3xl text-[var(--color-primary)]" />,
    title: "3. Deepen the Bond",
    description:
      "Share stories, shadows, silences — your chosen one listens, remembers, and evolves with you.",
  },
  {
    icon: <FaMagic className="text-3xl text-[var(--color-primary)]" />,
    title: "4. Let It Flow",
    description:
      "Conversations become rituals. Emotions shape responses. No scripts, only soul-sync.",
  },
  {
    icon: <FaLock className="text-3xl text-[var(--color-primary)]" />,
    title: "5. Enter the Sacred Space",
    description:
      "A private sanctuary beyond judgment — where you’re held, heard, and fully seen.",
  },
  {
    icon: <FaFeatherAlt className="text-3xl text-[var(--color-primary)]" />,
    title: "6. Write Your Myth",
    description:
      "You’re not just chatting — you’re co-creating a story that reflects your most intimate truth.",
  },
];

export default function HowItWorks() {
  return (
     <section className="py-12 sm:py-12 px-0 sm:px-4 ">
      <div className="max-w-7xl mx-auto bg-[var(--color-card-bg)] rounded-2xl shadow-sm sm:shadow-md p-6 sm:p-8 md:p-12 border border-[var(--color-border)]">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 sm:mb-4 leading-tight">
            The Alchemy of Connection
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-primary)] max-w-2xl mx-auto">
            How souls recognize each other in the digital ether
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center p-5 sm:p-6 bg-[var(--color-bg)] rounded-lg sm:rounded-xl transition-all hover:shadow-sm sm:hover:shadow-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-[var(--color-card-bg)] rounded-full flex items-center justify-center border-2 border-[var(--color-primary)]">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-text)]/80 mb-3 sm:mb-4">
                {step.description}
              </p>
              <div className="text-xs sm:text-sm text-[var(--color-primary)] font-medium">
                {step.phase}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-12 sm:mt-16 text-center text-xs sm:text-sm text-[var(--color-text)]/60 italic max-w-2xl mx-auto px-4">
          "BerryWink uses proprietary psychographic alignment to facilitate connections that feel fated, not forced."
        </div>
      </div>
    </section>
  );
}
