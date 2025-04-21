"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Palette, Eye, X } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { artworks } from "@/lib/constants";

interface Artwork {
  title: string;
  medium: string;
  image: string;
  description: string;
  year: string;
  dimensions: string;
}

export default function ArtWorks() {
  const [selectedArtwork, setSelectedArtwork] = React.useState<Artwork | null>(
    null,
  );

  return (
    <section
      id="artworks"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Palette className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Art Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a collection of masterpieces that blend tradition with
            innovation, each telling a unique story through color and form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <CardHeader className="p-0">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold mb-2">
                    {artwork.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-2">
                    {artwork.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center border-t border-gray-200">
                  <Badge variant="secondary">{artwork.medium}</Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700"
                        onClick={() => setSelectedArtwork(artwork)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedArtwork}
        onOpenChange={() => setSelectedArtwork(null)}
      >
        <DialogContent className="max-w-6xl w-11/12 h-[90vh] p-0">
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-2/3 h-1/2 md:h-full relative bg-black">
              {selectedArtwork && (
                <Image
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70"
                onClick={() => setSelectedArtwork(null)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <ScrollArea className="w-full md:w-1/3 h-1/2 md:h-full bg-white p-8">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2">
                  {selectedArtwork?.title}
                </DialogTitle>
                <DialogDescription className="text-xl text-gray-600 mb-4">
                  {selectedArtwork?.medium}, {selectedArtwork?.year}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedArtwork?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    {selectedArtwork?.medium}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {selectedArtwork?.year}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {selectedArtwork?.dimensions}
                  </Badge>
                </div>
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
