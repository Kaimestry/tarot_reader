import React from "react";
import PlainButton from "../../components/buttons/plainButton";
import { GiCardRandom } from "react-icons/gi";
import { BRAND_CONFIG } from "../../config/appConfig";

const DemoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8  pt-12 md:pt-16">
      {/* LEFT - DEMO */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-sm aspect-[4/3] bg-primary rounded-xl overflow-hidden">
          {/* video goes here */}
        </div>
      </div>

      {/* RIGHT - TEXT */}
      <section className="flex flex-col max-w-[450px] w-full md:w-1/2 gap-6">
        <h2 className="text-primary text-2xl md:text-3xl font-bold">
          🃏 Interact With Cards
        </h2>

        <p className="text-main">
          <span className="font-bold text-primary">
            {BRAND_CONFIG.shortBrandName}
          </span>{" "}
          lets you shuffle, spread, and flip cards just like a real tarot deck.
          Take your time, pick cards that feel right, and reveal meanings when
          you're ready.
        </p>

        <div className="cta">
          <PlainButton
            variant="primary"
            label="Start Reading"
            icon={<GiCardRandom />}
          />
        </div>
      </section>
    </div>
  );
};

export default DemoSection;
