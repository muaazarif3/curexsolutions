import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { id: "bills-sent", value: 18, unit: "M", label: "Original Bills Sent", type: "number" },
    { id: "bills-payment", value: 8.1, unit: "B", label: "Original Bills Payment", type: "currency" },
    { id: "appeals-sent", value: 1.8, unit: "M", label: "Second Review ", type: "number" },
    { id: "appeal-payments", value: 12, unit: "M", label: "Appeal Payments", type: "currency" },
];

const formatValue = (val, type) => {
    const fixed = Number.isInteger(val) ? 0 : 1;
    return type === "currency" ? `$${val.toFixed(fixed)}` : val.toFixed(fixed);
};

const SolutionMetrics = () => {
    const containerRef = useRef(null);
    const metricRefs = useRef([]);

    const addToRefs = (el) => {
        if (el) metricRefs.current.push(el);
    };

    useEffect(() => {
        metrics.forEach((metric, index) => {
            const element = metricRefs.current[index];
            if (!element) return;

            const display = element.querySelector(".metric-display-value");
            if (!display) return;

            const counter = { num: 0 };

            gsap.to(counter, {
                num: metric.value,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    once: true,
                },
                onUpdate: () => {
                    display.textContent = formatValue(counter.num, metric.type);
                },
                onComplete: () => {
                    display.textContent = formatValue(metric.value, metric.type);
                },
            });
        });
    }, []);


    return (
        <section ref={containerRef} className="bg-white py-12 sm:py-16 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Deliver Solution</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 lg:gap-x-8">
                    {metrics.map((metric) => (
                        <div key={metric.id} ref={addToRefs} className="flex flex-col  items-center text-center">
                            <svg className="w-48 h-48 sm:w-56 sm:h-56" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#E0F2F7" strokeWidth="4" />

                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="url(#gradientFill)"
                                    strokeWidth="4"
                                    strokeDasharray="283"
                                    strokeDashoffset="141.5"
                                    transform="rotate(-90 50 50)"
                                />

                                <defs>
                                    <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#67E8F9" />
                                        <stop offset="100%" stopColor="#22D3EE" />
                                    </linearGradient>
                                </defs>

                                {/* Metric Value */}
                                <text
                                    x="50%"
                                    y="50%"  // adjust vertical position
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="metric-display-value text-2xl sm:text-2xl font-bold fill-current text-cyan-600"
                                >
                                    0
                                </text>

                                {/* Metric Unit */}
                                <text
                                    x="50%"
                                    y="70%"  
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="text-[16px] font-semibold fill-current text-cyan-500"
                                >
                                    {metric.unit}
                                </text>
                            </svg>

                            <p className="mt-4 text-lg font-medium text-gray-700">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionMetrics;
