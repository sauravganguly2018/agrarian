import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/images/21263f7b9fbbf3324e17d5a973246d44891e8197.jpg', alt: 'Organic Produce', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: '/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg', alt: 'Farm Machinery', span: 'col-span-1 row-span-1' },
    { src: '/images/c9fe7ae00f5ded6dd3bd0e62aca116db3f81f253.jpg', alt: 'Wheat Field', span: 'col-span-1 row-span-1' },
    { src: '/images/880f1e8ab1be57fb9bff37e37f5428e34eccfe63.jpg', alt: 'Harvesting', span: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-agrarian-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-agrarian-dark font-bold tracking-wide uppercase text-sm mb-2">Our Gallery</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Glimpses of Our Fields</h3>
            <p className="text-gray-700 text-lg">
              Explore the vibrant life and advanced methods at Agrarian through our photo showcase.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border-2 border-agrarian-green text-agrarian-green font-bold rounded-full hover:bg-agrarian-green hover:text-white transition-colors duration-300">
            View All Media
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-[auto] md:h-[600px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
