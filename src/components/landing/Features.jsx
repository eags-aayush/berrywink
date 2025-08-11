import { FaFeather } from 'react-icons/fa6';
import { BiSolidBookHeart } from "react-icons/bi";
import { GiLockedHeart } from "react-icons/gi";

export default function Features() {
  const features = [
    {
      icon: <FaFeather className="text-3xl" />,
      title: "Unspoken Tension",
      description: "That electric moment when your eyes meet across the room, and suddenly the air feels thicker between you."
    },
    {
      icon: <GiLockedHeart className="text-3xl" />,
      title: "Stolen Moments",
      description: "The secret thrill when your hands brush 'accidentally', leaving your skin tingling with possibility."
    },
    {
      icon: <BiSolidBookHeart className="text-3xl" />,
      title: "Midnight Whispers",
      description: "Those conversations that stretch into the night, where every word feels like a delicate caress."
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-[var(--color-bg-soft)] overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[var(--color-primary)] blur-sm animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-[var(--color-primary)] blur-sm animate-pulse delay-300" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-text)] mb-4">
            The Art of <span className="italic">Anticipation</span>
          </h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            That delicious tension when you both know... but neither says a word
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] hover:shadow-lg transition-all hover:border-[var(--color-primary)]/40 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-text)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text)]/80 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
              <div className="mt-4 text-sm text-[var(--color-primary)] italic">
                {["The first glance...", "The silent promise...", "The slow burn..."][index]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-sm text-[var(--color-text)]/60 italic max-w-2xl mx-auto border-t border-[var(--color-border)] pt-8">
          "The most intoxicating seduction is the one that hasn't happened yet..."
        </div>
      </div>
    </section>
  );
}