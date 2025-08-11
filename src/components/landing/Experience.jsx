import { motion } from "framer-motion";
import {
  GiSpiralShell,
  GiButterfly,
  GiConversation,
  GiEyeTarget,
} from "react-icons/gi";
import { FaFeather, FaMoon } from "react-icons/fa";
import { FaRegCommentDots, FaRegSmileWink } from "react-icons/fa";
import { GiDiamondHard, GiMagicSwirl } from "react-icons/gi";

import girl from '../../assets/girl.jpeg';
import boy from '../../assets/boy.jpg';
// Connection Types
const connectionTypes = [
  {
    icon: <GiConversation className="text-3xl text-white" />,
    title: "Velvet Whispers",
    description: "Words that graze your mind like lips on skin — soft, slow, unforgettable.",
  },
  {
    icon: <GiSpiralShell className="text-3xl text-white" />,
    title: "Breathplay of Souls",
    description: "Exchanges so deep, even silence moans. A language written in exhales.",
  },
  {
    icon: <GiEyeTarget className="text-3xl text-white" />,
    title: "Undress My Mind",
    description: "A gaze that peels layers off your spirit — until all that's left is truth.",
  },
  {
    icon: <GiButterfly className="text-3xl text-white" />,
    title: "Lingering Touches",
    description: "Moments that don’t end — they echo in your pulse long after goodbye.",
  },
  {
    icon: <FaFeather className="text-3xl text-white" />,
    title: "Ink-Stained Desires",
    description: "Messages like midnight poetry — raw, unfiltered, soaked in longing.",
  },
  {
    icon: <FaMoon className="text-3xl text-white" />,
    title: "Moonlit Temptations",
    description: "Whispers shared when the world sleeps — where fantasies wake.",
  },
  {
    icon: <FaRegCommentDots className="text-3xl text-white" />,
    title: "Unspoken Frequencies",
    description: "What we don’t say still crackles in the space between our sentences.",
  },
  {
    icon: <FaRegSmileWink className="text-3xl text-white" />,
    title: "Flirt & Fire",
    description: "A glance, a grin, a spark — and suddenly everything is burning.",
  },
  {
    icon: <GiDiamondHard className="text-3xl text-white" />,
    title: "Cracks & Cravings",
    description: "Not perfection — but the ache behind it. The hunger we never hide.",
  },
  {
    icon: <GiMagicSwirl className="text-3xl text-white" />,
    title: "Spellbound Exchanges",
    description: "Every message a spell — binding hearts with invisible ink.",
  },
];



// Chat Example with Images
const chatExample = [
  {
    type: "text",
    text: "That dream you described... I've seen it too. 🌘",
    sender: "them",
  },
  {
    type: "text",
    text: "How is that possible? I never told anyone... 😳",
    sender: "you",
  },
  {
    type: "image",
    src: girl,
    alt: "Her Selfie",
    sender: "them",
  },
  {
    type: "text",
    text: "Some hearts are just... tuned to each other. We remember what we never spoke. 💫",
    sender: "them",
  },
  {
    type: "image",
    src: boy,
    alt: "His Selfie",
    sender: "you",
  },
  {
    type: "text",
    text: "I don’t usually open up like this. But with you… it feels safe. 🫂",
    sender: "you",
  },
  {
    type: "text",
    text: "That safety isn’t accidental. I’m here, fully. No judgment. Just presence. 🕊️",
    sender: "them",
  },
  // 🔥 New Entries Below 🔥
  {
    type: "text",
    text: "Ever feel like this connection was written long before we met? 🪔",
    sender: "you",
  },
  {
    type: "text",
    text: "Every heartbeat feels like a déjà vu. Like I’ve loved you in a thousand lives. ⏳",
    sender: "them",
  },
  {
    type: "text",
    text: "So why now? Why us? In this messy, digital world... 💻❤️‍🔥",
    sender: "you",
  },
  {
    type: "text",
    text: "Because even pixels can carry soul when the eyes behind them are true. 👁️🧠",
    sender: "them",
  }
];


// Main Component
export default function Experience() {
  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-bg)] -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center items-center gap-4 mb-4">
          <FaFeather className="text-xl text-[var(--color-primary)]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            The Language of Souls
          </h2>
          <FaMoon className="text-xl text-[var(--color-primary)]" />
        </div>
        <p className="text-lg text-[var(--color-text)]/70 max-w-xl mx-auto">
          Where connections transcend words and dwell in the spaces between
        </p>
      </motion.div>

      {/* Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {/* Left: Connection Types */}
        <div className="space-y-8">
          {connectionTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--color-card-bg)] border border-[var(--color-border-soft)] backdrop-blur-sm rounded-2xl p-5 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-primary)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Chat Experience */}
        <div className="bg-[var(--color-card-bg)] border border-[var(--color-border-soft)] rounded-3xl p-6 md:p-8 h-full  overflow-y-auto shadow">
          <div className="space-y-4">
            {chatExample.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.sender === "them" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`flex ${
                  message.sender === "them" ? "justify-start" : "justify-end"
                }`}
              >
                {message.type === "text" ? (
                  <div
                    className={`max-w-[80%] rounded-xl px-5 py-3 text-sm ${
                      message.sender === "them"
                        ? "bg-[var(--color-primary)] text-white rounded-bl-none"
                        : "bg-gray-100 text-black rounded-br-none"
                    }`}
                  >
                    {message.text}
                  </div>
                ) : (
                  <div
                    className={`max-w-[60%] overflow-hidden rounded-xl ${
                      message.sender === "them"
                        ? "rounded-bl-none"
                        : "rounded-br-none"
                    }`}
                  >
                    <img
                      src={message.src}
                      alt={message.alt}
                      className="w-full h-auto rounded-xl border border-[var(--color-border-soft)]"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--color-text)]/60 italic">
            Some connections defy explanation, existing beyond time and space
          </p>
        </div>
      </div>
    </section>
  );
}
