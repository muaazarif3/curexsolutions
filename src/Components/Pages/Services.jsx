import React from "react";
import Review from "../Review";
import Card from "../Card";
import { FaArrowDown, FaFileMedical, FaRev } from "react-icons/fa";
import { CiInboxOut } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdDisplaySettings, MdOutlineMedicalServices, MdOutlineSupportAgent } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import frame from '../../assets/services.jpg';

import { Link } from "react-router-dom";


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
              icon={<FaRev />}
              title="Revenue Cycle Management"
              description="Streamline billing and maximize revenue efficiency."
            />

            <Card
              icon={<CiInboxOut />}
              title="Medical Billing Outsourcing"
              description="Outsource billing tasks for accurate claims processing."
            />

            <Card
              icon={<MdDisplaySettings />}
              title="Provider Credentialing"
              description="Ensure providers meet all regulatory standards."
            />

            <Card
              icon={<RiCalendarScheduleLine />}
              title="Appointment Scheduling"
              description="Manage appointments efficiently and reduce no-shows."
            />

            <Card
              icon={<MdOutlineMedicalServices />}
              title="Client Services"
              description="Deliver high-quality support to your patients."
            />

            <Card
              icon={<MdOutlineSupportAgent />}
              title="Customer Support"
              description="Provide reliable assistance to resolve client issues."
            />

            <Card
              icon={<CgWebsite />}
              title="Website Development & Designing"
              description="Build professional websites tailored to your business."
            />

            <Card
              icon={<FaFileMedical />}
              title="Other Services"
              description="BPO & additional healthcare support services."
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
            {[
              {
                question: "How do you ensure accurate and timely billing?",
                answer: "We use certified coders and automated workflows to submit clean claims quickly."
              },
              {
                question: "Is my patient data secure?",
                answer: "Yes our processes are fully HIPAA-compliant with strict data protection measures."
              },
              {
                question: "What is the cost structure?",
                answer: "We offer transparent pricing, typically a percentage of collections or a fixed monthly fee."
              }
            ].map((item, i) => (
              <details key={i} className="group rounded-lg bg-[#F0F4F8] p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="font-medium text-black">{item.question}</h2>
                  <span className="material-symbols-outlined text-primary transition duration-300 group-open:rotate-180">
                    <FaArrowDown />
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 px-4 sm:px-10 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-[#111813]">
            Ready to Join Us on Your Journey?
          </h2>

          <p className="text-[#333]">
            Whether you need a new primary care provider or specialized treatment, our team is here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link to="/services" className="h-12 px-6 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
              Explore Our Services
            </Link>

            <Link to="/contact" className="h-12 px-6 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-[#111813] dark:text-white font-bold">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
