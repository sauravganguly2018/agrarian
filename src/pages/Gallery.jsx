import React, { useEffect, useState } from 'react';
import { Camera, X } from 'lucide-react';
import MobileSocialRow from '../components/MobileSocialRow';
import BannerOverlay from '../components/BannerOverlay';

const Gallery = () => {
  useEffect(() => {
    document.title = "Our Gallery | Agrarian";
  }, []);

  const galleryItems = [
    { id: 1, tag: 'FIELDS', image: '/images/4b7d73a96a96606d1ebdbdd26d08450cd68bc606.jpg', size: 'small' },
    { id: 2, tag: 'EVENTS', image: '/images/0c92d06746f135612ff1172b9ae4f720da293224.jpg', size: 'small' },
    { id: 3, tag: 'FIELDS', image: '/images/homemade-ripe-apples-growing-branch.jpg.jpeg', size: 'large' },
    { id: 4, tag: 'FARMERS', image: '/images/ChatGPT Image May 9, 2026, 01_43_27 PM.png', size: 'small' },
    { id: 5, tag: 'CROPS', image: '/images/21263f7b9fbbf3324e17d5a973246d44891e8197.jpg', size: 'small' },
    { id: 6, tag: 'PRODUCTS', image: '/images/basket-full-harvest-organic-vegetables-root-organic-bio-farm-autumn-vegetable-harvest.jpg.jpeg', size: 'small' },
    { id: 7, tag: 'SOIL', image: '/images/fake-cactus-plant-gardening-tools-black-soil.jpg.jpeg', size: 'small' },
    { id: 9, tag: 'FIELDS', image: '/images/957bfb68142754af562816dd817ae37351615975.png', size: 'small' },
    { id: 10, tag: 'FIELDS', image: '/images/machine-working-peanut-field-blue-sky-agriculture (1).jpg.jpeg', size: 'small' },
    { id: 11, tag: 'CROPS', image: '/images/farmer-holds-rice-hand (2).jpg.jpeg', size: 'small' },
  ];

  return (
    <main className="flex-grow animate-fade-in-up">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <BannerOverlay />
        <div className="absolute inset-0">
          <img
            src="/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg"
            alt="Gallery Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-16">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-white tracking-[0.05em] uppercase leading-[0.9]">
            OUR <span className="text-[#76b947]">GALLERY</span>
          </h1>
          <MobileSocialRow className="mt-8" />
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-[0.9]">
              FIELD <span className="text-[#76b947]">PHOTOS</span>
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="relative break-inside-avoid rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.tag} 
                  className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ffb300] text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                    {item.tag}
                  </span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Field Videos Section */}
      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-[0.9]">
              FIELD <span className="text-[#76b947]">VIDEOS</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {[
              {
                id: 'DsL13nTU-_s',
                title: 'Trapper Bio Pesticides Result',
                flex: 'lg:flex-[1.5]'
              },
              {
                id: 'Dl_THUqWkEw',
                title: 'Brix AC 24 in Ridge Gourd',
                flex: 'lg:flex-1'
              },
              {
                id: 'SXH3EVqRqVY',
                title: 'Micorhiza Game Changer',
                flex: 'lg:flex-1'
              }
            ].map((video) => (
              <div 
                key={video.id}
                className={`relative h-[300px] sm:h-[400px] lg:h-[500px] ${video.flex} rounded-2xl overflow-hidden shadow-lg bg-black`}
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a 
              href="https://youtube.com/@agrariancrop9379"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 bg-[#0a1d13] text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#1b4332] transition-all group"
            >
              Explore All
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Gallery;
