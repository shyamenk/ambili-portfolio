import React from 'react';
import { Image } from 'lucide-react';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    caption: "Behind the Scenes - The Silent Echo"
  },
  {
    url: "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?auto=format&fit=crop&w=800&q=80",
    caption: "Art Direction Workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1524779709304-40b5a3560c60?auto=format&fit=crop&w=800&q=80",
    caption: "Exhibition Opening"
  },
  {
    url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80",
    caption: "Film Festival Screening"
  },
  {
    url: "https://images.unsplash.com/photo-1533158628620-7e35717d36e7?auto=format&fit=crop&w=800&q=80",
    caption: "Award Ceremony"
  },
  {
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    caption: "Art Gallery Opening"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Image className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Photo Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white p-4">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}