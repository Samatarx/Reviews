import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const numberCheck = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const back = () => {
    let newIndex = index - 1;
    return setIndex(numberCheck(newIndex));
  };

  const forward = () => {
    let newIndex = index + 1;
    return setIndex(numberCheck(newIndex));
  };

  const randomBtn = () => {
    let randomNumber = Math.floor(people.length * Math.random());
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(numberCheck(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            back();
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            forward();
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          randomBtn();
        }}
      >
        Suprise me
      </button>
    </article>
  );
};

export default Review;
