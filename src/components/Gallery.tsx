import { Artwork } from "../data/artworks";

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          // rounded + shadow gives cards some depth; hover adds scale and stronger shadow (V2)
          className="border border-gray-300 rounded bg-white overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-out"
        >
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{artwork.title}</h3>
            <p className="text-gray-600 text-sm">{artwork.category}</p>
            <p className="text-gray-700 text-sm mt-2">{artwork.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
