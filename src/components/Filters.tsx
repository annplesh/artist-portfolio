import { categories } from "../data/artworks";

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Filters({ selectedCategory, onCategoryChange }: FiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 ${
            selectedCategory === category
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {category === "All" ? "All" : category}
        </button>
      ))}
    </div>
  );
}
