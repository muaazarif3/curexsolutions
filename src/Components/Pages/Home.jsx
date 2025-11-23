import React from "react";
import SolutionMetrics from "../SolutionMetrics";
import WhyCurex from "../WhyCurex";
import OurSpecial from "../OurSpecial";
import Review from "../Review";
import Card from "../Card";
import Vid from '../../assets/hervid.mp4';

// Inline Style for Script-Style "BOOST"
const CustomStyles = () => (
  <style>
    {`
      .hero-script-text {
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-weight: 300;
        letter-spacing: 0.1em;
        line-height: 1;
      }
    `}
  </style>
);

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gray-900 overflow-hidden">
        <CustomStyles />

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            //   backgroundImage: `url(https://placehold.co/1920x1080/0e1b20/ffffff/jpeg?text=Medical+Professional+Background)`,
            zIndex: 0,
          }}

        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(12,38,51,0.4) 100%)",
            }}
          ></div>
          <video
            src={Vid}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* HERO SECTION */}
        <main className="font-lato absolute w-full h-full z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-12 py-16">
          <div className="text-white max-w-2xl">
            {/* BOOST */}
        

            {/* MAIN HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight uppercase">
              MAXIMIZE YOUR  <br /> <span className="text-primary font-medium italic">REVENUE</span>, MINIMIZE <br />
              YOUR <span className="text-primary font-medium italic">HASSLES</span>!
            </h1>

            {/* SUBTITLE */}
            <p className="mt-6 text-lg sm:text-xl font-light max-w-lg">
              Unlock your financial potential and streamline your journey with us.
              Experience a hassle-free path to revenue optimization.
            </p>
          </div>


        </main>

      </div>
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl">
              Our Medical Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We offer a wide range of services to meet your health needs.
            </p>
          </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 capitalize">
            {/* Card 1 */}
            <Card
              icon="shield_with_heart"
              title="Revenue Cycle Management"
              description="Proactive health screenings and check-ups to maintain your well-being."
            />

            <Card
              icon="biotech"
              title="Medical Billing Outsourcing"
              description="Advanced imaging and lab tests for accurate and timely diagnoses."
            />

            <Card
              icon="medication"
              title="Provider Credentialing"
              description="Expert care for chronic conditions and specialized medical needs."
            />

            <Card
              icon="spa"
              title="Appointment Scheduling"
              description="Customized plans to help you achieve your health and lifestyle goals."
            />
            <Card
              icon="spa"
              title="Client Services"
              description="Customized plans to help you achieve your health and lifestyle goals."
            />
            <Card
              icon="spa"
              title="Customer Support"
              description="Customized plans to help you achieve your health and lifestyle goals."
            />
            <Card
              icon="spa"
              title="Website Development & Desiging"
              description="Customized plans to help you achieve your health and lifestyle goals."
            />
            <Card
              icon="spa"
              title="Other Services"
              description="Customized plans to help you achieve your health and lifestyle goals."
            />




          </div>
        </div>
      </section>
      <WhyCurex />
      <SolutionMetrics />
      <OurSpecial />
      <Review />
    </>
  );
};

export default Home;
