import React from "react";
import PlainButton from "../../components/buttons/plainButton";

const LibrarySection = () => {
  return (
    <section className="py-20">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-12">
          {/* LEFT - TEXT */}
          <div className="flex-1 flex justify-center">
            <div className="max-w-sm text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🔮 Discover Every Card, Every Meaning
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Navigate the full tarot deck with ease. Quickly search for any
                card, filter by category, and access clear, structured meanings
                without the clutter.
              </p>

              <PlainButton variant="secondary" label="View Cards" />
            </div>
          </div>

          {/* RIGHT - DEMO */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xs aspect-[3/4] bg-primary rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
