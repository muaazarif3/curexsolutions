import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Card({ icon, title, description }) {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.to(cardRef.current, {
           opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
            }
        });
    }, []);

    return (
        <div
            ref={cardRef}
            className="flex card flex-col gap-4 rounded-xl opacity-0 bg-[#F0F4F8] p-6 text-center items-center transition-shadow hover:shadow-lg"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#005A9C]/10 text-[#005A9C]">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>

            <h3 className="text-xl font-semibold text-black">{title}</h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
                {description}
            </p>

            <a
                className="mt-2 text-sm font-semibold text-[#005A9C] hover:text-[#005A9C]/80"
                href="#"
            >
                Learn More →
            </a>
        </div>
    );
}

export default Card;
