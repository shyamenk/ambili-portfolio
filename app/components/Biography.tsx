"use client";

import { useState } from "react";
import { Camera, Film, Palette, Award, Brush } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description:
      "Started as a still photographer, capturing moments that tell stories.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Art Direction",
    description:
      "Mastered the art of visual storytelling through set design and aesthetics.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Film Direction",
    description:
      "Revolutionizing Malayalam cinema with unique visual narratives.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Artistry",
    description:
      "A born painter with deep understanding of colors and visual composition.",
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: "Makeup Artistry",
    description:
      "A visionary artist with an innate talent for blending colors and creating stunning visual harmony.",
  },
];

export default function Biography() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section
      id="biography"
      className="py-20 bg-gradient-to-b from-gray-100 to-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-yellow-500 sm:text-5xl">
            Biography
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A visionary director who has revolutionized the visual culture of
            Malayalam Cinema through innovative storytelling and artistic
            excellence.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedAchievement(item)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative z-10">
                <div className="text-yellow-500 mb-4 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Achievement Details */}
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8 mb-16"
          >
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 mr-4">
                {selectedAchievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedAchievement.title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg">
              {selectedAchievement.description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
