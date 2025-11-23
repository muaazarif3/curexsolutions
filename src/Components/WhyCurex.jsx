
import { FaCheckCircle } from "react-icons/fa";
import DcImage from '../assets/dc.png';
const features = [
  "Cutting-edge proprietary Tech",
  "In-house Clearing House",
  "Jet File Engine",
  "Funding Partnership",
  "Expertise in Denied Claims",
  "Collection Management Services",
];


const DOCTOR_IMAGE_URL =
  "https://placehold.co/450x450/1e88e5/ffffff?text=Professional+Doctor";

const WhyCurex = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-16 lg:py-24 rounded-xl m-4 shadow-xl overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-8 text-gray-800">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Why <span className="text-primary border-b-4 border-primary pb-1">Curex</span>
          </h1>
          <p className="text-lg text-gray-600 max-full">
            Supercharge Your Earnings and Bid Farewell to Insurance Hassles with MLM's RCM and Medical Billing Marvel! Our 35 years of industry dominance is powered by:
          </p>

          <ul className="space-y-3 pt-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span className="ml-3 text-base font-medium text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <p className="text-gray-700 mb-4 font-semibold italic">
              We've got your back every step of the way.
            </p>
            <button className="px-6 py-3 relative bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-teal-700 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 flex items-center gap-2">
             Contatc Us 
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center p-2">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-4xl shadow-2xl bg-[#1E88E5]">
            <img
              src={DcImage}
              alt="Professional doctor"
              className="w-full h-[600px] absolute top-[-52%]  object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/450x450/38a169/ffffff?text=Doctor+Image+Placeholder";
              }}
            />
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCurex;
