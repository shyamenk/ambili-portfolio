import { Trophy } from "lucide-react";

const awards = [
  {
    year: "2023",
    title: "Best Director",
    event: "Kerala State Film Awards",
    description: "Excellence in cinematic direction",
  },
  {
    year: "2022",
    title: "Best Art Direction",
    event: "National Film Awards",
    description: "Outstanding contribution to visual aesthetics",
  },
  {
    year: "2021",
    title: "Special Jury Award",
    event: "International Film Festival of Kerala",
    description: "Innovative storytelling techniques",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold sm:text-4xl">
            Awards & Recognition
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="text-yellow-400 text-xl font-bold mb-2">
                {award.year}
              </div>
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <div className="text-gray-400 mb-2">{award.event}</div>
              <p className="text-gray-300">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

