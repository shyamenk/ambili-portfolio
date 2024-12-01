"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { movies } from "@/lib/constants";

export default function FilmographyGrid() {
  const controls = useAnimation();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const animateScroll = async () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const viewportWidth = containerRef.current.offsetWidth;

        await controls.start({
          x: [-viewportWidth, -containerWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          },
        });
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <section
      id="movies"
      className="py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Play className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Filmography
          </h2>
        </motion.div>

        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            animate={controls}
            className="flex space-x-4"
            style={{
              width: `${movies.length * 320 + (movies.length - 1) * 16}px`,
            }}
          >
            {[...movies, ...movies].map((movie, index) => (
              <Card
                key={`${movie.title}-${index}`}
                className="w-80 flex-shrink-0 bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: "url('/film-strip.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  <CardHeader className="absolute bottom-0 left-0 right-0">
                    <CardTitle className="text-xl font-bold text-white">
                      {movie.title}
                    </CardTitle>
                    <CardDescription>
                      <Badge
                        variant="outline"
                        className="bg-yellow-400 text-black text-sm"
                      >
                        {movie.year}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {movie.description}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Screenplay: {movie.screenPlay}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <Badge
                    variant="secondary"
                    className="bg-gray-700 text-yellow-400 text-xs"
                  >
                    Film {(index % movies.length) + 1} of {movies.length}
                  </Badge>
                  <Button
                    variant="ghost"
                    className="text-yellow-400 hover:text-yellow-300 text-sm"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
