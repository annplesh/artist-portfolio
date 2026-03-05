export interface Artwork {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Sunset Over Mountains",
    category: "landscape",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A serene landscape painting",
  },
  {
    id: 2,
    title: "Portrait Study",
    category: "portrait",
    image: "https://images.pexels.com/photos/1699976/pexels-photo-1699976.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Character portrait in oils",
  },
  {
    id: 3,
    title: "Abstract Flow",
    category: "abstract",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern abstract composition",
  },
  {
    id: 4,
    title: "Forest Path",
    category: "landscape",
    image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Nature inspired acrylic",
  },
  {
    id: 5,
    title: "Still Life",
    category: "still-life",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Traditional still life arrangement",
  },
  {
    id: 6,
    title: "Urban Perspective",
    category: "abstract",
    image: "https://images.pexels.com/photos/1699976/pexels-photo-1699976.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Contemporary cityscape",
  },
];

export const categories = ["All", "landscape", "portrait", "abstract", "still-life"];
