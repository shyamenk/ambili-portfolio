"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Calendar, User } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { movies } from "@/lib/constants";

export default function FilmographyGrid() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <section id="movies" className="py-20 bg-gray-900">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className="bg-gray-800 border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm mb-2">
                      {movie.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="secondary"
                        className="bg-yellow-400 text-gray-900 text-xs"
                      >
                        {movie.year}
                      </Badge>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-gray-900 bg-yellow-400 hover:bg-yellow-500"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="p-4 bg-gray-800">
                  <CardTitle className="text-lg font-bold text-white truncate">
                    {movie.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {movie.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={() => setSelectedMovie(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 aspect-[2/3]">
                  <Image
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedMovie.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-400 text-gray-900 mb-4"
                  >
                    {selectedMovie.year}
                  </Badge>
                  <p className="text-gray-300 mb-4">
                    {selectedMovie.description}
                  </p>
                  <p className="text-gray-400 text-sm mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span className="font-semibold mr-2">Screenplay:</span>{" "}
                    {selectedMovie.screenPlay}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span className="font-semibold mr-2">Director:</span>{" "}
                    {selectedMovie.director}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
