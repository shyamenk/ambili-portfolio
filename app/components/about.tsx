import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const achievements = [
  "Art director for about 150 South Indian films",
  "Directed 12 films, including 'Veenapoovu' (1981)",
  "Received Film Critics Award",
  "Exhibited paintings across the country",
  "Participated in national and state-level art camps",
  "Designed book covers for leading publishers in Kerala",
  "Contributed to the printing of an Arabic book in India",
  "Worked as a makeup artist for film actors and classical dancers",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-100 to-white text-gray-900"
    >
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="/profile-pic.jpeg"
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            <div className="md:w-2/3 p-6 md:p-8">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-14 w-14 flex items-center justify-center">
                    <AvatarImage
                      className="w-full h-full rounded-full object-cover"
                      src="/profile-pic.jpeg"
                      alt="Avatar"
                    />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-bold">Ambili</CardTitle>
                    <CardDescription>Film Maker + Artist</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700  mb-4">
                  Ambili was born and raised in Chentrappinni, a coastal village
                  in the Thrissur district of Kerala, South India. The natural
                  beauty of the riverside, the grandeur of the Arabian Sea, and
                  the colorful hide-and-seek of the setting sun captivated him
                  during his younger days, drawing him into the enchanting world
                  of colors and paints. From an early age, he knew he wanted to
                  be a painter—and he fulfilled that ambition.{" "}
                </p>
                <p className="text-gray-700 mb-4">
                  He earned a national diploma in fine arts from a prestigious
                  institution in Asia. His deep knowledge and understanding of
                  color combinations and painting techniques not only made him a
                  great painter but also paved the way for his success as a
                  photographer, art director, and eventually a filmmaker. He
                  began his journey in the world of art through hoardings and
                  cinema slides and quickly gained recognition.
                </p>

                <p className="text-gray-700 mb-4">
                  Over his career, Ambili served as the art director for about
                  150 South Indian films. His creativity was evident in the
                  posters and titles he brought to life through his art. With
                  his vast experience as an art director and a keen
                  understanding of frames and editing, he transitioned into
                  filmmaking. His debut film, Veenapoovu, was released in 1981.
                </p>
                <p className="text-gray-700 mb-4">
                  Now fully devoted to painting, Ambili is planning solo
                  exhibitions on national and international platforms,
                  continuing to captivate audiences with his artistic vision.
                </p>
                <ul className="space-y-2 my-6">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 mr-2 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
