import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaLightbulb } from "react-icons/fa6";
import { SiFsecure } from "react-icons/si";
import frame from '../../assets/contact.png';



// -------------------------------------
// Reusable ValueCard Component
// -------------------------------------
const ValueCard = ({ icon, title, text }) => (
  <div className="flex flex-1 gap-4 rounded-xl border border-[#dbe6df] bg-white p-6 flex-col items-center text-center">
    <div className="text-black 0 p-3 rounded-full">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-[#111813] text-lg font-bold leading-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-normal">
        {text}
      </p>
    </div>
  </div>
);

// -------------------------------------
// MAIN PAGE
// -------------------------------------
export default function AboutPage() {
  return (
    <main className="flex-1">

      {/* HERO SECTION */}
      <section className="@container">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
            style={{
                       backgroundImage:
                         `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${frame})`,
                     }}
        >
          <div className="flex flex-col gap-2 max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                     Bringing Clarity to <br/> Heathcare Revenue
            </h1>
            <h2 className="text-white text-sm @[480px]:text-base">
              Learn more about our journey, mission, and the team behind your care.
            </h2>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#111813] text-3xl font-bold @[480px]:text-4xl">
              Our Mission
            </h2>
            <p className="text-[#333]  leading-relaxed">
              Our mission is to provide compassionate, high-quality, and accessible healthcare
              to our community. We believe in innovation, integrity, and a patient-first approach.
            </p>
          </div>

          <div
            className="w-full bg-center bg-no-repeat aspect-square md:aspect-[4/3] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCG8LFki06rb2hBMOL2JDxfgn2TBzXLoVUOoZSX65x7ddGue_80kOX2Rmio4tGqQBkCpBl0I5Biuih44SPAvY33mJUwhR0isLQ2eIGb34A1hWXRaBmPuYMKNDWFCd8vm6rBbS67M6RRbx09FqxB13O0vaX8UnIw30C9wmUGu2NtlhkXWxfr9XUPYWUOcywdH5KXLclHjCQCgX-6lgskc9l3Bta95X7DLjPWv2AptO3LOMn-DrZTVksYD5WpDEnfD-GyP4042v2J0vIr")',
            }}
          />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 lg:py-24 bg-gradient-to-br from-blue-500 to-cyan-500 ">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <h2 className="text-center text-[#fff] text-3xl font-bold">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={<CiHeart />}
              title="Compassion"
              text="We treat every patient with empathy and support."
            />

            <ValueCard
              icon={<FaLightbulb />}
              title="Innovation"
              text="We embrace medical innovation for better outcomes."
            />

            <ValueCard
              icon= {<SiFsecure />}
              title="Integrity"
              text="We uphold honesty, professionalism, and responsibility."
            />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 px-4 sm:px-10 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-[#111813]">
            Ready to Join Us on Your Health Journey?
          </h2>

          <p className="text-[#333]">
            Whether you need a new primary care provider or specialized treatment, our team is here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button className="h-12 px-6 rounded-lg bg-primary text-white font-bold">
              Explore Our Services
            </button>

            <button className="h-12 px-6 rounded-lg bg-white dark:bg-gray-700 text-[#111813] dark:text-white font-bold">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
