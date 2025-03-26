import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Submit a Repair Request",
      description: "Citizens can easily report road issues by filling out a simple form with location details and issue description."
    },
    {
      number: "02",
      title: "Assessment by Supervisor",
      description: "A supervisor visits the site to evaluate the severity, determine priority, and estimate required resources."
    },
    {
      number: "03",
      title: "Resource Allocation",
      description: "The system automatically schedules repairs based on priority and available resources."
    },
    {
      number: "04",
      title: "Repair Execution",
      description: "Work crews carry out the repairs according to the schedule, logging progress at each stage."
    },
    {
      number: "05",
      title: "Completion & Verification",
      description: "Completed repairs are verified and the status is updated for citizens to view."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 section-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How The System Works</h2>
          <p className="text-lg text-foreground/70">
            Our streamlined process ensures efficient handling of road maintenance from initial report to completion.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:ml-auto'}`}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                  {/* Step number badge */}
                  <div className="absolute top-6 left-0 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 shadow-md md:left-auto md:right-0 md:translate-x-1/2">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
