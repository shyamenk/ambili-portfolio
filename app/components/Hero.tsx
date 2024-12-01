import {
  ChevronDown,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Film Director Background"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-7xl font-serif font-extrabold text-white mb-6 tracking-wider">
            AMBILI
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="h-[1px] w-12 bg-[#C8A456]"></span>
            <p className="text-xl sm:text-2xl text-yellow-400 font-extrabold tracking-wide">
              Film Maker + Artist
            </p>
            <span className="h-[1px] w-12 bg-[#C8A456]"></span>
          </div>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
            Introducing a new visual culture in Malayalam Cinema through
            innovative storytelling and artistic vision. From still photography
            to art direction, my journey embodies the evolution of creative
            expression.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link href="https://instagram.com" passHref>
              <span className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </span>
            </Link>
            <Link href="https://twitter.com" passHref>
              <span className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </span>
            </Link>
            <Link href="https://facebook.com" passHref>
              <span className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </span>
            </Link>
            <Link href="https://youtube.com" passHref>
              <span className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#biography"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-[#C8A456] transition-colors duration-300"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
}
