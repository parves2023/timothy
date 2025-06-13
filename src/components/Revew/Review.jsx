import React, { useState } from "react";
import "./Review.css";

const Review = () => {
  const reviews = [
    {
      name: "John D.",
      role: "Engineering Student",
      feedback: "This platform has made learning so much easier and accessible!",
      stars: 5,
    },
    {
      name: "Emily R.",
      role: "Medical Student",
      feedback: "The study resources are well-organized and easy to understand.",
      stars: 5,
    },
    {
      name: "Mark L.",
      role: "Computer Science Student",
      feedback: "I love how interactive the courses are. Highly recommended!",
      stars: 5,
    },
    {
      name: "Sophia W.",
      role: "Art Student",
      feedback: "Creative courses with amazing instructors. Loved every bit of it!",
      stars: 5,
    },
    {
      name: "James T.",
      role: "Law Student",
      feedback: "The mock tests helped me prepare for exams better. Excellent!",
      stars: 4,
    },
    {
      name: "Olivia H.",
      role: "Business Student",
      feedback: "Perfect platform for case studies and research materials.",
      stars: 5,
    },
    {
      name: "Liam C.",
      role: "Physics Student",
      feedback: "The learning tools are top-notch, and the explanations are clear.",
      stars: 5,
    },
    {
      name: "Mia K.",
      role: "Psychology Student",
      feedback: "The interactive activities are a game changer for online education!",
      stars: 4,
    },
    {
      name: "Noah B.",
      role: "Math Student",
      feedback: "Simplifies complex concepts beautifully. Highly recommended!",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 3 : prev - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= reviews.length ? 0 : prev + 3
    );
  };

  return (
    <div className="testimonial-section">
      <h2 className="title">
         Students gave their <span>Feedback</span>
      </h2>
      <div className="review-container flex flex-col items-center md:flex-row flex-wrap">
        {reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="text-2xl ">{review.name}</h3>
            <p className="role">{review.role}</p>
            <div className="stars">
              {"⭐".repeat(review.stars)}
            </div>
            <p className="feedback">"{review.feedback}"</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Review;
