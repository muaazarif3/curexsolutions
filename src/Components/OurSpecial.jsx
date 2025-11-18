import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------- Icons ----------------

const TreatmentIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="8" height="15" rx="1" />
    <path d="M6 10h4M6 14h4" />
    <rect x="14" y="2" width="8" height="10" rx="1" />
    <path d="M16 5h4M18 15v6M15 18h6" />
  </svg>
);

const MedlegalIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="15" cy="9" r="6" />
    <path d="M15 6v3l2 1" />
    <rect x="3" y="12" width="6" height="4" rx="1" />
    <rect x="3" y="9.5" width="6" height="4" rx="1" />
    <rect x="3" y="7" width="6" height="4" rx="1" />
    <path d="M4.5 8.5h3" />
    <path d="M4.5 11h3" />
    <path d="M4.5 13.5h3" />
  </svg>
);

const DiagnosticsIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2" />
    <path d="M7 6h10M7 10h10M7 14h10" />
    <rect x="7" y="18" width="10" height="2" rx="0.5" />
  </svg>
);

const DMEIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v5" />
    <path d="M10 9h4M12 7v4" />
    <rect x="16" y="14" width="6" height="8" rx="2" />
  </svg>
);

const RehabilitationIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
    <path d="M22 17h-2a2 2 0 0 0-2 2v1" />
    <path d="M8 6v12M4 14h8" />
    <path d="M18 3v6M15 6h6" />
  </svg>
);


// ---------------- Data ----------------

const specialities = [
  { title: "Treatment Collections.", subtitle: "(PTP/STP)", icon: TreatmentIcon },
  { title: "Medlegal Collections.", subtitle: "(PQME/AME)", icon: MedlegalIcon },
  { title: "Diagnostics Collections.", subtitle: "", icon: DiagnosticsIcon },
  { title: "Durable Medical Equipment", subtitle: "(DME)", icon: DMEIcon },
  { title: "Rehabilitation Collections.", subtitle: "", icon: RehabilitationIcon },
];


// ---------------- Component ----------------

export default function OurSpecial() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    // Animate cards
    gsap.to(cards, {
      scrollTrigger: {
        trigger: ".specialities-container",
        start: "top 80%",
      },
      opacity: 100,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Animate SVG icons separately
    const svgs = cards.map((c) => c.querySelector("svg"));

    gsap.to(svgs, {
      scrollTrigger: {
        trigger: ".specialities-container",
        start: "top 85%",
      },
      opacity: 100,
      duration: 0.5,
      stagger: 0.12,
      ease: "power2.out",
    });
  }, []);


  return (
    <div className="h-auto p-10 bg-gray-50 flex items-center justify-center ">
      <div className="w-full max-w-6xl text-center specialities-container">

        <h2 className="text-3xl sm:text-5xl font-lato font-bold mb-10 text-gray-900">
          Our Specialities
        </h2>

        <div className="bg-white rounded-3xl shadow-xl py-2 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-12">

            {specialities.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="cursor-pointer opacity-0 flex flex-col items-center justify-start p-2 rounded-xl transition-all"
                  style={{
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)",
                  }}
                >
                  <Icon className="w-16 h-16 text-gray-500 mb-4 opacity-0" />

                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>

                  {item.subtitle && (
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  )}
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
}
