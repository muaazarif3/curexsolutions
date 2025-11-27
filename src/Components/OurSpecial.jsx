import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------- Icons ----------------

const TreatmentIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 206.351 206.351"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M141.814,30.466c-1.78-1.36-4.309-1.033-5.671,0.731l-43.399,56.25L71.821,64.139c-1.495-1.665-4.048-1.799-5.705-0.308
      c-1.661,1.491-1.799,4.044-0.308,5.705l24.164,26.918c0.769,0.856,1.862,1.341,3.006,1.341c0.051,0,0.099,0,0.15-0.004
      c1.2-0.043,2.316-0.619,3.05-1.566l46.366-60.089C143.905,34.368,143.578,31.831,141.814,30.466z" />

    <path d="M159.107,2.405c-5.855-3.752-16.083-2.407-29.048-0.695c-8.266,1.093-17.637,2.332-26.855,2.332
      c-9.218,0-18.588-1.238-26.858-2.331C63.397-0.002,53.158-1.351,47.302,2.405C26.56,15.722,22.776,51.084,38.476,83.32
      c-1.01,7.095-1.523,15.128-1.523,23.903c0,38.254,10.275,74.365,27.482,96.595c1.03,1.326,2.766,1.886,4.368,1.393
      c1.602-0.485,2.742-1.91,2.857-3.583c3.658-51.709,18.912-82.607,31.546-82.607c12.768,0,28.082,31.258,31.609,83.562
      c0.114,1.661,1.235,3.086,2.825,3.583c0.398,0.126,0.805,0.185,1.207,0.185c1.207,0,2.375-0.541,3.156-1.519
      c17.708-22.159,28.283-58.649,28.283-97.609c0-9.189-0.619-17.582-1.843-24.973C183.5,50.373,179.495,15.489,159.107,2.405z
       M141.912,190.86c-4.376-41.387-17.456-79.92-38.707-79.92c-21.015,0-34.083,37.922-38.577,78.741
      c-12.389-20.995-19.594-50.88-19.594-82.457c0-8.897,0.545-16.955,1.618-23.95c0.126-0.829-0.008-1.677-0.383-2.427
      C31.977,52.429,34.4,20.291,51.666,9.208c3.37-2.158,13.668-0.793,23.623,0.513c8.515,1.128,18.166,2.403,27.916,2.403
      s19.401-1.274,27.916-2.403c9.963-1.314,20.265-2.671,23.623-0.513c16.959,10.882,19.59,42.59,5.871,70.683
      c-0.375,0.769-0.497,1.638-0.347,2.478c1.286,7.232,1.937,15.598,1.937,24.854C162.205,139.499,154.74,169.83,141.912,190.86z" />
  </svg>
);


const MedlegalIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M15.405 22.21a8.319 8.319 0 0 0-6.14 6.55c-.18.99-.28 1.99-.28 2.98 0 3.42 1.08 6.79 3.12 9.6a12.18 12.18 0 0 0 3.79 3.4c.86.49 1.77.87 2.72 1.13-2.71-3.95-4.82-8.86-5.26-14.8-.27-3.58.77-6.59 2.05-8.86z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M43.765 20.11c1.47-.54 3.2-.25 4.52.76l1.63 1.25c1.41.36 3.16.54 5.1.2l-.65-3.19-.55-.1c-1.55-.29-2.98-.97-4.31-1.8-2.02-1.25-4.44-1.07-5.77-.83.12.45-.12.95-.57 1.15-1.76.77-3.37 1.67-4.77 2.67-2.5 1.76-3.61 4.93-2.78 7.9.61 2.16 1.24 5.03 1.46 8.15 1.38-.85 3.53-1.83 5.77-1.57 1.81.21 3.35 1.17 4.56 2.85.33.45.23 1.08-.22 1.4-.18.13-.38.19-.59.19-.31 0-.61-.15-.81-.42-.88-1.22-1.92-1.89-3.16-2.03-2.28-.27-4.63 1.31-5.47 1.95-.02 4.33-.98 8.89-3.99 12.5a.99.99 0 0 1-.77.36c-.23 0-.45-.08-.64-.23a1.01 1.01 0 0 1-.13-1.41c4.6-5.52 3.83-13.74 2.58-19.19-1.27 3.61-3.75 8.9-8.22 12.54-.19.15-.41.22-.63.22-.29 0-.58-.12-.78-.37a.99.99 0 0 1 .15-1.4c1.44-1.18 2.66-2.56 3.69-4-2.58-3.58-6.42-2.24-6.58-2.18-.52.19-1.1-.08-1.29-.59-.19-.52.07-1.09.58-1.29 1.79-.67 5.67-.95 8.44 2.29 2.64-4.41 3.65-8.86 3.79-9.5-.08-3.05 1.33-6.01 3.88-7.81 1.51-1.07 3.24-2.03 5.13-2.87.5-.22 1.09.01 1.32.52v.01c2.43-.97 5.34-1.82 8.82-2.35l-.41-3.48-7.49 1.77.38-4.68h-4.24s.56 3.84-2.08 5.87a30.906 30.906 0 0 0-6.27 3.85c-.1-4.14 3.72-9.08 3.72-9.08l-4.22-.9c-4.28 3.57-5.23 9.1-5.23 9.1-2.12-5.73-6.99-7.34-6.99-7.34l-2.92 2.91s3.72 2.62 3.82 7.04c0 0-5.77 4.66-5.23 11.97 1.31 17.7 18.91 25.84 18.91 25.84s11.21-4.75 15.29-15.76c2.78-7.49.64-14.01-1.02-17.42l-1.46-1.13c-.78-.59-1.77-.77-2.6-.46-2.68.99-3.03 4.03-3.04 4.06-.05.51-.48.89-.99.89-.03 0-.07 0-.11-.01a.987.987 0 0 1-.88-1.1c.01-.17.5-4.3 4.32-5.72z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const DiagnosticsIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M55.17 63H46c-3.57-1.35-6-8.37-6-8.43v-.65a16.017 16.017 0 0 0 2.23-1.58 13.653 13.653 0 0 0 2.69-1.18l1.54 1.55-.79.79z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M58 45c0 4.18-1.4 4.86-1.86 7.31l-4.64-4.64-.79.79-1.33-1.32A13.909 13.909 0 0 0 52 39a13.732 13.732 0 0 0-.97-5.1A60.728 60.728 0 0 0 52 24v-2h-2a12.593 12.593 0 0 1-12.08-8.57l-1.37-4.54-2.3 4.14c-4.4 7.93-20.21 8.96-20.37 8.97l-1.88.12V24c0 1.1.16 23.01 12 29.92v.65c0 .06-2.4 7.07-6 8.43H3c.63-4.47 5-4.49 5-9 0-4-2-4-2-9 0-4.51 4-5 4-9 0-4.51-2-4-2-9C8 11 18 1 32 1s24 10 24 26c0 5-2 4.49-2 9 0 4 4 4.49 4 9zM61 63h-5.17l3.46-3.46A6.1 6.1 0 0 1 61 63z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M50 24a57.062 57.062 0 0 1-.55 6.96 14 14 0 1 0-12.13 22.02A13.746 13.746 0 0 1 32 54c-18 0-18-30-18-30s17-1 22-10c0 0 3 10 14 10zM38.088 54.861A15.975 15.975 0 0 1 32 56a15.975 15.975 0 0 1-6.088-1.139C25.664 57.1 24.708 61.6 21 63h22c-3.708-1.4-4.664-5.9-4.912-8.139z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="m51.5 50.5-.793.793-4.025-4.025a12.062 12.062 0 1 0-1.5 1.329l4.11 4.11-.792.793 7 7 3-3zM38 49a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"
      fill="currentColor"
      stroke="none"
    />
    <circle cx="33" cy="36" r="1" fill="currentColor" stroke="none" />
    <circle cx="32" cy="42" r="1" fill="currentColor" stroke="none" />
    <circle cx="38" cy="46" r="1" fill="currentColor" stroke="none" />
    <circle cx="44" cy="41" r="1" fill="currentColor" stroke="none" />
    <circle cx="42" cy="34" r="1" fill="currentColor" stroke="none" />
    <circle cx="38" cy="39" r="1" fill="currentColor" stroke="none" />
  </svg>
);


const DMEIcon = (props) => {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M252 223V106h-24V54h8V39h-65v15h7v52h-24V54h8V39H97v15h7v52H80V54h8V39H23v15h7v52H5v129h37v16h23v-16h128v16h23v-16h36v-14zm-62-169h26v52h-26V54zm26 72h-26v-9h26v9zm-74-72v23h-26V54h26zm-100 0h26v52H42V54zm26 94H42v-31h26v31zM16 117h14v59c0 13.7 11.3 24.8 25 24.8S80 189.7 80 176v-59h24v59c0 13.7 11.3 24.8 25 24.8S154 189.7 154 176v-59h24v59c0 13.7 11.3 24.8 25 24.8S228 189.7 228 176v-59h13v106H16V117z" />
    </svg>
  );
};

// const RehabilitationIcon = (props) => (
//   <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"
//     strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M14 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
//     <path d="M22 17h-2a2 2 0 0 0-2 2v1" />
//     <path d="M8 6v12M4 14h8" />
//     <path d="M18 3v6M15 6h6" />
//   </svg>
// );


// ---------------- Data ----------------

const specialities = [
  { title: "Dentist", subtitle: "", icon: TreatmentIcon },
  { title: "Cardiologist", subtitle: "", icon: MedlegalIcon },
  { title: "Dermatologist", subtitle: "", icon: DiagnosticsIcon },
  { title: "Clinical Laboratory", subtitle: "", icon: DMEIcon },
  // { title: "Rehabilitation Collections.", subtitle: "", icon: RehabilitationIcon },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12">

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
