import React from "react";
import Review from "../Review";
import Card from "../Card";

import frame from '../../assets/services.jpg';



export default function Services() {
  return (
    <div className=" text-[#333333]  dark:text-[#F0F4F8] font-display">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center -z-10"
            style={{
              backgroundImage:
                `url(${frame})`,
            }}
          ></div>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Comprehensive Care Tailored For You
            </h1>
          
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We offer a wide range of services to meet your needs.
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

      <Review />

      {/* FAQ Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 ">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <details
                key={i}
                className="group rounded-lg bg-[#F0F4F8] p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="font-medium text-black">What should I bring?</h2>
                  <span className="material-symbols-outlined transition duration-300 group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                  Please bring ID, insurance card, medications, and medical
                  records.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
