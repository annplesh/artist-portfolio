import { useState } from "react";
import { artworks } from "./data/artworks";
import { Filters } from "./components/Filters";
import { Gallery } from "./components/Gallery";
import { ContactForm } from "./components/ContactForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Artist Portfolio</h1>
          <p className="text-gray-600">Showcase of artistic works</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="mb-8">
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          <Gallery artworks={filteredArtworks} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default App;
