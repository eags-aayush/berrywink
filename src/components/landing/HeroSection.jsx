import { useState, useEffect, useRef } from "react";
import {
  FaRegCommentDots,
  FaRegSmileWink,
  FaArrowRight,
  FaMicrophone,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const emojis = [
  { icon: "😊", label: "flirty" },
  { icon: "🤗", label: "touch-starved" },
  { icon: "🤔", label: "curious" },
  { icon: "😍", label: "infatuated" },
  { icon: "😂", label: "playful" },
  { icon: "🥹", label: "vulnerable" },
  { icon: "😎", label: "confident" },
  { icon: "🥳", label: "celebrating" },
  { icon: "😴", label: "sleepy" },
  { icon: "🤩", label: "enchanted" },
  { icon: "😭", label: "emotional" },
  { icon: "😡", label: "passionate" },
  { icon: "😌", label: "satisfied" },
  { icon: "😇", label: "angelic" },
  { icon: "😵", label: "overwhelmed" },
  { icon: "😳", label: "blushing" },
  { icon: "🙃", label: "teasing" },
  { icon: "😬", label: "nervous" },
  { icon: "🥺", label: "needy" },
  { icon: "😈", label: "naughty" },
  { icon: "🫠", label: "melting" },
  { icon: "🤯", label: "mind-blown" },
  { icon: "🫡", label: "devoted" },
  { icon: "🫥", label: "mysterious" },
  { icon: "🫶", label: "loving" },
  { icon: "🤤", label: "hungry" },
  { icon: "💀", label: "dark" },
  { icon: "🫨", label: "shaken" },
  { icon: "😔", label: "lonely" },
  { icon: "🧘", label: "zen" },
];

const conversationPairs = [
  {
    question: "What's your secret fantasy? 😏",
    answers: [
      "Being understood without explaining myself... 🫢",
      "A conversation that leaves me breathless 💨",
      "Someone who remembers how I take my coffee ☕️",
    ],
  },
  {
    question: "If we were alone right now... 🕯️",
    answers: [
      "I'd confess things I've never said aloud 🫦",
      "We wouldn't need words at all 🤫",
      "I'd let you see the real me 🌑",
    ],
  },
  {
    question: "What makes you blush instantly? 🌹",
    answers: [
      "When someone notices my little habits 🔍",
      "Unexpected compliments from strangers 💐",
      "Being truly listened to 🎧",
    ],
  },
  {
    question: "Where do you feel most alive? 🌟",
    answers: [
      "3AM conversations that never end 🌌",
      "When someone gets my weird references 🦄",
      "That moment before the first kiss 💋",
    ],
  },
  {
    question: "What's your guilty pleasure? 🍫",
    answers: [
      "Re-reading old intimate messages 💌",
      "Letting conversations get too deep 🌊",
      "Flirting with dangerous ideas 🔥",
    ],
  },
  {
    question: "Tell me something you've never told anyone... 🤐",
    answers: [
      "I fall for minds faster than bodies 🧠",
      "Silence excites me more than small talk 🤫",
      "I collect moments when people reveal themselves 🕵️",
    ],
  },
  {
    question: "What kind of attention do you crave? 👁️",
    answers: [
      "The kind that lingers too long ⏳",
      "Someone remembering my random stories 📖",
      "Being seen without performing 🎭",
    ],
  },
  {
    question: "What's too intimate to admit? 🫣",
    answers: [
      "I fantasize about being truly known 🕵️",
      "How badly I want to be surprised 🎁",
      "The way your voice does things to me 🎙️",
    ],
  },
];

const bgColors = [
  "from-purple-500/10 via-blue-500/10 to-pink-500/10",
  "from-emerald-500/10 via-amber-500/10 to-rose-500/10",
  "from-indigo-500/10 via-green-500/10 to-yellow-500/10",
  "from-cyan-500/10 via-fuchsia-500/10 to-orange-500/10",
];

export default function HeroSection() {
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [currentConversation, setCurrentConversation] = useState(
    conversationPairs[0]
  );
  const [isTyping, setIsTyping] = useState(false);
  const [bgGradient, setBgGradient] = useState(bgColors[0]);
  const [messageCount, setMessageCount] = useState(0);
  const [inputMessage, setInputMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const animationRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const randomize = () => {
      setIsTyping(true);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      animationRef.current = setTimeout(() => {
        setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
        setCurrentConversation(
          conversationPairs[
            Math.floor(Math.random() * conversationPairs.length)
          ]
        );
        setBgGradient(bgColors[Math.floor(Math.random() * bgColors.length)]);
        setIsTyping(false);
        setMessageCount((prev) => prev + 1);
      }, 800);
    };

    const interval = setInterval(randomize, 4000);
    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const getRandomAnswer = () => {
    return currentConversation.answers[
      Math.floor(Math.random() * currentConversation.answers.length)
    ];
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setInputMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="relative pt-12 md:pt-auto lg:pt-auto overflow-hidden bg-[var(--color-bg)] h-full md:h-screen lg:h-screen">
      {/* Background elements */}
      <div className="absolute -right-180 top-0 w-full h-[120vh] pattern-dots-lg rounded-full z-0 opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl animate-blob animation-delay-2000 opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--color-accent)]/20 blur-3xl animate-blob animation-delay-4000 opacity-70"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--color-secondary)]/15 blur-3xl animate-blob opacity-70"></div>

      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-52 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight">
              Find Your Perfect{" "}
              <span className="text-[var(--color-primary)]">
                Conversation Partner
              </span>
              <br />
              <span className="text-[var(--color-text)]">Some times</span>
              <br></br>
              <span className="inline-block text-[var(--color-primary)] mt-2 animate-pulse">
                {currentEmoji.icon} {currentEmoji.label}
              </span>
            </h1>

            <p className="text-xl text-[var(--color-text)]/80 max-w-2xl mx-auto lg:mx-0">
              Whisper secrets, share fantasies, or flirt with ideas—our AI
              companions{" "}
              <span className="text-[var(--color-primary)] font-medium">
                listen deeper, respond hotter
              </span>
              . Ready to play?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:opacity-90 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center gap-2 group shadow-lg hover:shadow-[var(--color-primary)]/50 transform hover:scale-105">
                <span>Get Intimate Now</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 font-medium py-3 px-6 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-[var(--color-primary)]/20 transform hover:scale-105">
                <FaRegSmileWink /> Meet Your Midnight Confidant
              </button>
            </div>
          </div>

          {/* Chat Preview */}
          <div className="lg:w-1/2 h-full relative z-10">
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 shadow-xl max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute -inset-2 rounded-3xl border border-gray-300/30 pointer-events-none"></div>
              <div className="absolute -inset-1 rounded-3xl border border-gray-200/20 pointer-events-none"></div>

              {/* Status bar */}
              <div className="flex justify-between items-center mb-4 px-1 text-xs text-gray-500">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Chat header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl animate-bounce">
                  {currentEmoji.icon}
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-gray-800">MidnightConfessor</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-1 ${
                        isTyping ? "bg-amber-500" : "bg-green-500"
                      }`}
                    ></span>
                    {isTyping ? "Typing..." : "Online"}
                  </p>
                </div>
              </div>

              {/* Message bubbles */}
              <div
                className="space-y-3 mb-4 max-h-64 overflow-y-auto"
                ref={chatContainerRef}
              >
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[var(--color-primary)] to-pink-500 text-white px-4 py-3 rounded-2xl rounded-tr-none max-w-xs shadow-sm hover:shadow-[var(--color-primary)]/30 transition-all cursor-pointer">
                    {currentConversation.question}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none max-w-xs shadow-sm hover:shadow-gray-400/20 transition-all cursor-pointer">
                    {getRandomAnswer()}
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div
                className={`mt-6 flex items-center border-t border-gray-200 pt-4 transition-all ${
                  isFocused ? "border-[var(--color-primary)]/50" : ""
                }`}
              >
                <button className="text-gray-500 hover:text-[var(--color-primary)] p-2 transition-colors hover:scale-110">
                  <FaRegSmileWink className="hover:animate-wiggle" />
                </button>
                <div className="flex-1 mx-2 relative">
                  <input
                    type="text"
                    placeholder="Type something daring..."
                    className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 transition-all hover:bg-gray-200/50"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  {!inputMessage && (
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <FaMicrophone />
                    </button>
                  )}
                </div>
                <button
                  className={`p-2 transition-colors ${
                    inputMessage
                      ? "text-[var(--color-primary)]"
                      : "text-gray-400"
                  }`}
                  onClick={handleSendMessage}
                  disabled={!inputMessage}
                >
                  <IoMdSend />
                </button>
              </div>

              {/* Typing indicator */}
              <div
                className={`flex items-center space-x-1 bg-gray-100 rounded-full px-4 py-2 w-fit mt-2 ${
                  isTyping ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  MidnightConfessor is typing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated waves */}
      <div className="absolute bottom-0 w-[100vw] z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,700L0,405C80,416,160,428,235,409C310,390,379,342,461,313C543,284,639,274,721,262C803,250,872,235,945,200C1018,165,1095,112,1178,80C1261,48,1351,39,1440,30L1440,700L0,700Z"
            fill="#f5c5ff"
            fillOpacity="0.265"
            className="animate-ripple opacity-70"
          />
          <path
            d="M0,700L0,545C85,557,170,570,254,558C338,546,420,510,497,469C574,428,646,383,734,351C822,319,928,300,997,294C1066,288,1099,295,1167,277C1235,259,1337,214,1440,170L1440,700L0,700Z"
            fill="#f5c5ff"
            fillOpacity="0.4"
          />
          <path
            d="M0,700L0,685C82,675,163,664,247,661C331,658,417,661,502,644C587,627,671,589,750,548C829,507,904,461,971,430C1037,399,1094,381,1171,363C1248,345,1344,328,1440,310L1440,700L0,700Z"
            fill="#f5c5ff"
            fillOpacity="0.53"
          />
          <path
            d="M0,700L0,825C63,828,126,832,207,831C288,829,386,822,464,799C542,775,598,733,685,712C772,690,888,687,986,644C1084,600,1163,515,1236,476C1309,436,1374,443,1440,450L1440,700L0,700Z"
            fill="#f5c5ff"
            fillOpacity="1"
            className="animate-ripple-slow"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
        @keyframes ripple {
          0% {
            d: path(
              "M0,700L0,825C63,828,126,832,207,831C288,829,386,822,464,799C542,775,598,733,685,712C772,690,888,687,986,644C1084,600,1163,515,1236,476C1309,436,1374,443,1440,450L1440,700L0,700Z"
            );
          }
          50% {
            d: path(
              "M0,700L0,800C63,790,126,780,207,775C288,770,386,770,464,750C542,730,598,690,685,680C772,670,888,690,986,665C1084,640,1163,570,1236,535C1309,500,1374,500,1440,500L1440,700L0,700Z"
            );
          }
          100% {
            d: path(
              "M0,700L0,825C63,828,126,832,207,831C288,829,386,822,464,799C542,775,598,733,685,712C772,690,888,687,986,644C1084,600,1163,515,1236,476C1309,436,1374,443,1440,450L1440,700L0,700Z"
            );
          }
        }
        @keyframes ripple-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .animate-ripple {
          animation: ripple 8s ease-in-out infinite;
        }
        .animate-ripple-slow {
          animation: ripple-slow 12s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .pattern-dots-lg {
          background-image: radial-gradient(currentColor 1px, transparent 1px);
          background-size: 10px 10px;
        }
        .hover\:animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
