import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouseButtons";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "./content";
import "./embla.css";
import InfoCard from "../InfoCard";

const EmblaCarousel = ({ infoData, btnClicked }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 3,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {infoData.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <InfoCard
                  btnClicked={btnClicked}
                  cardIcon={item.image}
                  text1={item.text1}
                  text2={item.text2}
                />
                {/* <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt="A cool cat."
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
