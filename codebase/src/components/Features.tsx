import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M9 14l2 2 4-4"></path>
        </svg>
      ),
      title: "Online Repair Requests",
      description: "Citizens can easily report road issues through our intuitive online platform, accessible from any device."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h5l2 3h6l2-3h5"></path>
          <path d="M9.17 12a3 3 0 1 0 5.66 0"></path>
        </svg>
      ),
      title: "Area-Based Management",
      description: "Branch offices manage repairs for their specific areas, ensuring efficient and localized response to issues."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <line x1="10" y1="14" x2="14" y2="14"></line>
          <line x1="12" y1="12" x2="12" y2="16"></line>
        </svg>
      ),
      title: "Prioritized Scheduling",
      description: "Intelligent scheduling system based on severity, locality type, and resource availability."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2Z"></path>
          <path d="M21.17 8H12V2.83"></path>
        </svg>
      ),
      title: "Real-time Progress Tracking",
      description: "Citizens can monitor repair progress in real-time through transparent status updates."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M9 9h6v6H9z"></path>
          <path d="M5 5v.01"></path>
          <path d="M5 19v.01"></path>
          <path d="M19 5v.01"></path>
          <path d="M19 19v.01"></path>
        </svg>
      ),
      title: "Resource Management",
      description: "Comprehensive tracking of raw materials, machinery, and personnel to optimize allocation."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2Z"></path>
          <path d="M12 12 2.12 9.8a10 10 0 0 0 13.15 9.33"></path>
          <path d="M12 12v10"></path>
        </svg>
      ),
      title: "Analytics Dashboard",
      description: "Detailed statistics and reports for city officials to analyze repair trends and resource utilization."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 section-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Platform Features</h2>
          <p className="text-lg text-foreground/70">
            Our system provides robust tools for both citizens and city officials, streamlining the road maintenance process from report to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
