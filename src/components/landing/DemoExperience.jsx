import { FaPlay, FaVolumeUp } from 'react-icons/fa';

export default function DemoExperience() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto bg-[var(--color-card-bg)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-border)]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Demo Chat Section */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
              Experience BerryWink
            </h2>
            
            <div className="bg-[var(--color-secondary)]/20 rounded-xl p-4 mb-6 border border-[var(--color-border)]">
              <div className="bg-[var(--color-bg)] rounded-lg p-4 shadow-inner h-64 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-[var(--color-primary)]/10 text-[var(--color-text)] px-4 py-3 rounded-2xl max-w-xs md:max-w-md">
                      Hi there! How are you feeling today?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[var(--color-primary)] text-white px-4 py-3 rounded-2xl max-w-xs md:max-w-md">
                      I'm okay, just a bit tired
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[var(--color-primary)]/10 text-[var(--color-text)] px-4 py-3 rounded-2xl max-w-xs md:max-w-md">
                      I remember you mentioned work has been stressful. Want to talk about it?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Voice Demo Section */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full flex items-center justify-center shadow-xl">
                <FaVolumeUp className="text-4xl text-white" />
              </div>
              <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                <div className="w-48 h-2 bg-[var(--color-secondary)]/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[var(--color-primary)] rounded-full animate-waveform" 
                    style={{ 
                      animation: 'waveform 2s infinite ease-in-out',
                      width: '100%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2">
            <FaPlay /> Try Free Demo Now
          </button>
        </div>
      </div>
    </section>
  );
}