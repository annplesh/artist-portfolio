import { useState } from "react";
import { Artwork } from "../data/artworks";

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            // rounded + shadow gives cards some depth; hover adds scale/stronger shadow
            className="border border-gray-300 rounded bg-white overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-out"
          >
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-md p-2">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="max-w-full max-h-full object-contain bg-gray-100 rounded-md shadow-md cursor-pointer"
                onClick={() => setSelectedImage(artwork.image)}
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">{artwork.title}</h3>
              <p className="text-gray-600 text-sm">{artwork.category}</p>
              <p className="text-gray-700 text-sm mt-2">
                {artwork.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl font-light bg-transparent border-none cursor-pointer p-1"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              &#215;
            </button>

            <img
              src={selectedImage}
              alt="Enlarged artwork"
              className="max-w-[90vw] max-h-[90vh] min-w-[300px] min-h-[300px] object-contain rounded shadow-lg bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
