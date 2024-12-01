import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full"
                    placeholder="Your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-600">contact@ambili.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-600">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-600">
                      Trivandrum, Kerala, India
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

