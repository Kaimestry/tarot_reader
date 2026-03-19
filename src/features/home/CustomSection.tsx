import React from "react";
import PlainButton from "../../components/buttons/plainButton";
import { MdDraw } from "react-icons/md";

const CustomSection = () => {
  return (
    <section className="py-20">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center gap-10 text-center">
          {/* TEXT */}
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-secondary mb-2">
              🚧 Coming Soon
            </div>

            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              🎨 Create Your Own Tarot Cards
            </h2>

            <p className="text-main mb-4">
              Soon you'll be able to design tarot cards that feel truly yours.
              Draw directly in the app, customize layouts, or upload your own
              artwork.
            </p>

            <p className="text-main mb-6">
              Build your personal deck and use it instantly in readings — all in
              one place.
            </p>

            <PlainButton
              variant="secondary"
              label="Coming Soon"
              icon={<MdDraw />}
            />
          </div>

          {/* DEMO (WIDE RECTANGLE) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl aspect-[5/3] bg-primary rounded-2xl shadow-xl flex items-center justify-center text-sm">
              Card Customization Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
