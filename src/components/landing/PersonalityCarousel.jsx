import { FaHeart, FaComment } from 'react-icons/fa';

const personalities = [
  {
    name: "Grace",
    title: "The caring lover",
    tags: ["romantic", "attentive", "affectionate"],
    color: "bg-[var(--color-secondary)]"
  },
  {
    name: "Zara",
    title: "The flirty mood queen",
    tags: ["playful", "energetic", "teasing"],
    color: "bg-[var(--color-accent)]"
  },
  {
    name: "Leo",
    title: "The chill, loyal boyfriend",
    tags: ["steady", "reliable", "calm"],
    color: "bg-[var(--color-secondary)]"
  },
  {
    name: "Kai",
    title: "The sweet stranger turned best friend",
    tags: ["friendly", "understanding", "supportive"],
    color: "bg-[var(--color-accent)]"
  }
];

export default function PersonalityCarousel() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 text-center">
          Find Your Perfect Match
        </h2>
        <p className="text-lg text-[var(--color-primary)] mb-12 text-center max-w-2xl mx-auto">
          Discover AI personalities that resonate with you
        </p>
        
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide gap-6">
          {personalities.map((persona, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-72 bg-[var(--color-card-bg)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-[var(--color-border)]"
            >
              <div className={`${persona.color} h-40 flex items-center justify-center`}>
                <div className="w-24 h-24 rounded-full bg-[var(--color-card-bg)] flex items-center justify-center shadow-md">
                  <FaHeart className="text-3xl text-[var(--color-primary)]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text)]">{persona.name}</h3>
                <p className="text-[var(--color-primary)] mb-4">{persona.title}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {persona.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-[var(--color-secondary)]/30 text-[var(--color-text)] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                  <FaComment /> Start Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}