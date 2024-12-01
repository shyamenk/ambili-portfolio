"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Ticket } from "lucide-react";
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

const exhibitions = [
  {
    title: "Visual Narratives",
    date: "March 15-30, 2024",
    venue: "Kerala Art Gallery",
    location: "Trivandrum, Kerala",
    description:
      "A retrospective of cinematic and artistic works, showcasing the evolution of visual storytelling in Malayalam cinema and contemporary art.",
  },
  {
    title: "Colors of Malayalam Cinema",
    date: "April 10-25, 2024",
    venue: "National Gallery of Modern Art",
    location: "Mumbai, Maharashtra",
    description:
      "Exploring the vibrant palette and unique visual language of Malayalam cinema, from classic films to modern masterpieces.",
  },
];

export default function Exhibition() {
  return (
    <section
      id="exhibition"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Ticket className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Upcoming Exhibitions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for immersive experiences showcasing the intersection of
            cinema and art.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-gray-400 opacity-50 rounded-lg" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {exhibition.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {exhibition.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center text-gray-700 mb-2">
                      <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
                      {exhibition.date}
                    </div>
                    <div className="flex items-center text-gray-700 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                      {exhibition.venue}, {exhibition.location}
                    </div>
                  </CardContent>
                  <CardFooter className="relative z-10 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between items-center w-full">
                      <Badge
                        variant="outline"
                        className="bg-yellow-100 text-yellow-800 border-yellow-300"
                      >
                        Limited Seats
                      </Badge>
                      <Button
                        variant="default"
                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                      >
                        Reserve Ticket
                      </Button>
                    </div>
                  </CardFooter>
                </div>
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-white rounded-full border-4 border-yellow-400 transform -translate-y-1/2" />
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-white rounded-full border-4 border-yellow-400 transform -translate-y-1/2" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

