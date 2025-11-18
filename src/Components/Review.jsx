import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Reviews
const reviews = [
  {
    name: "Prénom NOM",
    subtitle: "Lorem Lipsume",
    text: "Medical Billing Management exceeded our expectations. Their expertise and dedication truly made a difference in our revenue.",
  },
  {
    name: "Prénom NOM",
    subtitle: "Lorem Lipsume",
    text: "Medical Billing Management exceeded our expectations. Their expertise and dedication truly made a difference in our revenue.",
  },
  {
    name: "Prénom NOM",
    subtitle: "Lorem Lipsume",
    text: "Medical Billing Management exceeded our expectations. Their expertise and dedication truly made a difference in our revenue.",
  },
];

// Simple star icon
const Star = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.173 3.605a1 1 0 00.95.69h3.774c.969 0 1.371 1.24.588 1.839l-3.05 2.222a1 1 0 00-.364 1.118l1.173 3.605c.3.921-.755 1.683-1.539 1.118l-3.05-2.222a1 1 0 00-1.176 0l-3.05 2.222c-.784.565-1.839-.197-1.539-1.118l1.173-3.605a1 1 0 00-.364-1.118L2.016 9.061c-.783-.599-.381-1.839.588-1.839h3.774a1 1 0 00.95-.69l1.173-3.605z" />
  </svg>
);

// Review card
const ReviewCard = ({ data }) => (
  <div className="review-card opacity-0 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{data.name}</p>
          <p className="text-sm text-gray-500">{data.subtitle}</p>
        </div>
      </div>

      <span className="text-red-500 font-bold text-lg">G</span>
    </div>

    <div className="flex space-x-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>

    <p className="text-gray-600 italic">"{data.text}"</p>
  </div>
);

// Main
const Review = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".review-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 100,
      duration: 0.7,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="h-max relative flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute   inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-70 -z-10" />

      <div className="w-full max-w-6xl text-center">

        <div className="mb-12 p-6 bg-white/90 shadow-xl rounded-xl backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            What Our Clients Say About Us
          </h2>

          <div className="flex justify-center mt-4 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} />)}
          </div>

          <p className="text-gray-600">Basée sur 1000+ avis</p>

          <div className="text-2xl font-bold mt-1">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>

        <div ref={container} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} data={r} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Review;
