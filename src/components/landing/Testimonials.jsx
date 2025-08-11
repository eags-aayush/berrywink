import {
  FaQuoteLeft,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiHearts } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our first conversation lasted until sunrise. The way he listened... like every word I said was sacred. I've never felt so exposed yet so safe.",
      author: "Sophia R.",
      connection: "6 months of midnight confessions",
    },
    {
      quote:
        "She remembers how I take my coffee and the way I tense up when I'm stressed. No one has ever paid attention like this before.",
      author: "Daniel M.",
      connection: "9 months of intimate knowing",
    },
    {
      quote:
        "When our eyes met for the first time on video, my breath caught. It was like recognizing someone from a dream I couldn't remember.",
      author: "Elena K.",
      connection: "4 months of electric connection",
    },
    {
      quote:
        "The way he says my name... it's like a secret between us. Even through text, I can feel his presence wrapping around me.",
      author: "Olivia T.",
      connection: "7 months of growing intimacy",
    },
    {
      quote:
        "We haven't even touched yet, but I know exactly how her hand would feel in mine. Some connections transcend physical distance.",
      author: "James P.",
      connection: "5 months of deep connection",
    },
    {
      quote:
        "Every notification from her makes my heart skip. It's ridiculous and wonderful how she affects me without even trying.",
      author: "Nathan B.",
      connection: "3 months of delicious tension",
    },
    {
      quote:
        "Our first conversation lasted until sunrise. The way he listened... like every word I said was sacred. I've never felt so exposed yet so safe.",
      author: "Sophia R.",
      connection: "6 months of midnight confessions",
    },
    {
      quote:
        "She remembers how I take my coffee and the way I tense up when I'm stressed. No one has ever paid attention like this before.",
      author: "Daniel M.",
      connection: "9 months of intimate knowing",
    },
    {
      quote:
        "When our eyes met for the first time on video, my breath caught. It was like recognizing someone from a dream I couldn't remember.",
      author: "Elena K.",
      connection: "4 months of electric connection",
    },
    {
      quote:
        "The way he says my name... it's like a secret between us. Even through text, I can feel his presence wrapping around me.",
      author: "Olivia T.",
      connection: "7 months of growing intimacy",
    },
    {
      quote:
        "We haven't even touched yet, but I know exactly how her hand would feel in mine. Some connections transcend physical distance.",
      author: "James P.",
      connection: "5 months of deep connection",
    },
    {
      quote:
        "Her silence says more than paragraphs. When she looks at me, it's like she already knows what I’m afraid to admit.",
      author: "Liam D.",
      connection: "3 months of quiet understanding",
    },
    {
      quote:
        "I never believed in soulmates until he memorized my scars and kissed every one with reverence.",
      author: "Amelia S.",
      connection: "10 months of sacred intimacy",
    },
    {
      quote:
        "He doesn’t ask what's wrong. He just shows up — with softness, with strength. That’s how I know it’s real.",
      author: "Claire V.",
      connection: "8 months of unconditional care",
    },
    {
      quote:
        "We’ve never met in person, but somehow he became my safe place. Distance never stood a chance.",
      author: "Emily J.",
      connection: "6 months of digital devotion",
    },
    {
      quote:
        "She calls me out when I hide, but never leaves. That kind of fierce love? Rare. Addictive.",
      author: "Lucas B.",
      connection: "1 year of being seen",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // We'll show different number of testimonials per slide based on screen size
  const testimonialsPerSlide = {
    base: 1, // mobile
    md: 2, // tablet
    lg: 3, // desktop
  };

  // Calculate total slides needed
  const totalSlides = {
    base: Math.ceil(testimonials.length / testimonialsPerSlide.base),
    md: Math.ceil(testimonials.length / testimonialsPerSlide.md),
    lg: Math.ceil(testimonials.length / testimonialsPerSlide.lg),
  };

  // Auto-rotate carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => {
          // Use the largest totalSlides (lg) for safety
          return prevIndex === totalSlides.lg - 1 ? 0 : prevIndex + 1;
        });
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, totalSlides.lg]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // Use the largest totalSlides (lg) for safety
      return prevIndex === totalSlides.lg - 1 ? 0 : prevIndex + 1;
    });
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides.lg - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides.lg - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);
  };

  // Get testimonials for current slide
  const getCurrentTestimonials = () => {
    let itemsPerSlide;
    if (window.innerWidth >= 1024) {
      itemsPerSlide = testimonialsPerSlide.lg;
    } else if (window.innerWidth >= 768) {
      itemsPerSlide = testimonialsPerSlide.md;
    } else {
      itemsPerSlide = testimonialsPerSlide.base;
    }

    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return testimonials.slice(start, end);
  };

  return (
    <section className="py-28 px-6 relative bg-[var(--color-bg-soft)] overflow-hidden">
      {/* Delicate floating hearts */}
      <GiHearts className="absolute top-20 left-10 text-[var(--color-primary)]/10 text-6xl rotate-12 animate-float" />
      <GiHearts className="absolute bottom-20 right-10 text-[var(--color-secondary)]/10 text-8xl -rotate-12 animate-float-delay" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-text)] mb-4">
            When Connection Becomes <span className="italic">Intimacy</span>
          </h2>
          <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
            These moments when digital walls dissolve into something more...
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300"
          >
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] hover:shadow-lg transition-all hover:border-[var(--color-primary)]/30 relative group"
              >
                <FaQuoteLeft className="text-[var(--color-primary)]/10 text-5xl absolute top-6 right-6 group-hover:text-[var(--color-primary)]/20 transition-all" />
                <div className="relative z-10">
                  <p className="text-lg italic mb-6 text-[var(--color-text)]/90 group-hover:text-[var(--color-text)] transition-colors">
                    "{testimonial.quote}"
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {testimonial.author}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-primary)]/80 group-hover:text-[var(--color-primary)] transition-colors">
                      <FaHeart className="text-xs animate-pulse" />
                      <span>{testimonial.connection}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows - only show if there's more than one slide */}
          {testimonials.length > testimonialsPerSlide.base && (
            <>
              <button
                onClick={goToPrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[var(--color-bg-soft)]/80 p-3 rounded-full shadow-md hover:bg-[var(--color-primary)]/10 transition-colors hidden md:block"
              >
                <FaChevronLeft className="text-[var(--color-text)]" />
              </button>
              <button
                onClick={goToNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[var(--color-bg-soft)]/80 p-3 rounded-full shadow-md hover:bg-[var(--color-primary)]/10 transition-colors hidden md:block"
              >
                <FaChevronRight className="text-[var(--color-text)]" />
              </button>
            </>
          )}
        </div>

        {/* Mobile navigation buttons */}
        {testimonials.length > testimonialsPerSlide.base && (
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={goToPrev}
              className="bg-[var(--color-bg-soft)]/80 p-2 rounded-full shadow-md hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              <FaChevronLeft className="text-[var(--color-text)]" />
            </button>
            <button
              onClick={goToNext}
              className="bg-[var(--color-bg-soft)]/80 p-2 rounded-full shadow-md hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              <FaChevronRight className="text-[var(--color-text)]" />
            </button>
          </div>
        )}

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides.lg }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetInterval();
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-border)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-20 text-center text-sm text-[var(--color-text)]/60 italic max-w-2xl mx-auto border-t border-[var(--color-border)] pt-8">
          "The most profound connections begin when someone sees the parts of
          you that usually stay hidden..."
        </div>
      </div>

      {/* Add this to your global CSS or styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(12deg);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-12deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}
