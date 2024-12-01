"use client";

import { Camera, Film, Palette, Award } from "lucide-react";

const achievements = [
  {
    icon: <Camera className="w-8 h-8 text-yellow-400" />,
    title: "Photography",
    description:
      "Started as a still photographer, capturing moments that tell stories.",
  },
  {
    icon: <Palette className="w-8 h-8 text-yellow-400" />,
    title: "Art Direction",
    description:
      "Mastered the art of visual storytelling through set design and aesthetics.",
  },
  {
    icon: <Film className="w-8 h-8 text-yellow-400" />,
    title: "Film Direction",
    description:
      "Revolutionizing Malayalam cinema with unique visual narratives.",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Artistry",
    description:
      "A born painter with deep understanding of colors and visual composition.",
  },
];

export default function Biography() {
  return (
    <section
      id="biography"
      className="py-20 bg-gradient-to-b from-white to-gray-300 text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 sm:text-5xl">
            Biography
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A visionary director who has revolutionized the visual culture of
            Malayalam Cinema through innovative storytelling and artistic
            excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 "
            >
              <div className="text-yellow-400 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Biography Full Text */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <blockquote className="border-l-4 pl-4 italic text-gray-700 text-lg font-medium border-yellow-400">
              <p>
                The journey from being a still photographer to becoming a
                renowned film director has been marked by dedication and
                artistic growth. Mastering multiple disciplines including
                make-up artistry, design, and art direction has contributed to a
                unique perspective in filmmaking. As a natural-born painter with
                an innate understanding of color theory and visual composition,
                this multifaceted background has shaped a distinctive approach
                to cinematic storytelling.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
