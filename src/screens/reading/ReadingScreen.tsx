import React, { useState, useEffect } from "react";
import PhaseShuffle from "./PhaseShuffle";
import PhaseSpread from "./PhaseSpread";
import PhaseReading from "./PhaseReading";
import PhaseNewReading from "./PhaseNewReading";

const READING_CONFIG = {
  maxSelection: 3,
  deckSize: 14,
};

export type Card = {
  id: number;
  name: string;
};

const TarotReader: React.FC = () => {
  const [phase, setPhase] = useState(1);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [revealedCards, setRevealedCards] = useState<Card[]>([]);

  const [opacity, setOpacity] = useState(1); // 1 = visible, 0 = hidden

  const deck: Card[] = Array.from(
    { length: READING_CONFIG.deckSize },
    (_, i) => ({
      id: i + 1,
      name: `Card ${i + 1}`,
    }),
  );

  const handleNextPhase = () => {
    setOpacity(0); // Trigger fade out

    // Wait 500ms (matching the CSS duration) before swapping phase
    setTimeout(() => {
      setPhase((prev) => (prev === 4 ? 1 : prev + 1));
      setOpacity(1); // Trigger fade in
    }, 500);
  };

  const resetReading = () => {
    setOpacity(0);
    setTimeout(() => {
      setSelectedCards([]);
      setRevealedCards([]);
      setPhase(1);
      setOpacity(1);
    }, 500);
  };

  return (
    <div className="w-full min-h-screen bg-main text-main overflow-hidden">
      {/* Wrapper with dynamic opacity and transition.
         'duration-500' matches the setTimeout above.
      */}
      <div
        className={`transition-opacity duration-500 ease-in-out h-full w-full`}
        style={{ opacity: opacity }}
      >
        {phase === 1 && <PhaseShuffle onNext={handleNextPhase} />}

        {phase === 2 && (
          <PhaseSpread
            deck={deck}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            maxSelection={READING_CONFIG.maxSelection}
            onNext={handleNextPhase}
          />
        )}

        {phase === 3 && (
          <PhaseReading
            selectedCards={selectedCards}
            revealedCards={revealedCards}
            setRevealedCards={setRevealedCards}
            onNext={handleNextPhase}
          />
        )}

        {phase === 4 && (
          <PhaseNewReading
            onReset={resetReading}
            selectedCards={selectedCards}
          />
        )}
      </div>
    </div>
  );
};

export default TarotReader;
