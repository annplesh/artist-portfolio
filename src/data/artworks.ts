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
    image: "/artworks/drawing1.jpg",
    description: "A serene landscape painting",
  },
  {
    id: 2,
    title: "Portrait Study",
    category: "portrait",
    image: "/artworks/drawing2.jpg",
    description: "Character portrait in oils",
  },
  {
    id: 3,
    title: "Abstract Flow",
    category: "abstract",
    image: "/artworks/drawing3.jpg",
    description: "Modern abstract composition",
  },
  {
    id: 4,
    title: "Forest Path",
    category: "landscape",
    image: "/artworks/drawing4.jpg",
    description: "Nature inspired acrylic",
  },
  {
    id: 5,
    title: "Still Life",
    category: "still-life",
    image: "/artworks/drawing5.jpg",
    description: "Traditional still life arrangement",
  },
  {
    id: 6,
    title: "Urban Perspective",
    category: "abstract",
    image: "/artworks/drawing6.jpg",
    description: "Contemporary cityscape",
  },
];

export const categories = [
  "All",
  "landscape",
  "portrait",
  "abstract",
  "still-life",
];
