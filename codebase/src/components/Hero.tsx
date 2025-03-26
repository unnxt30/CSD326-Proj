import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl -z-10 animate-float" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl -z-10 animate-float" style={{animationDelay: '1s'}} />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12 animate-fade-in">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                City Road Maintenance Management
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Connecting Citizens with Civic Infrastructure
              </h1>
              <p className="mt-6 text-lg text-foreground/80 max-w-2xl">
                A comprehensive platform that enables citizens to report road issues and track repairs, while providing city officials with tools to manage and prioritize maintenance work.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Report a Road Issue
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 rounded-lg bg-white shadow-sm text-foreground font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Learn How It Works
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500K+</p>
                <p className="text-sm text-foreground/70">City Residents</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-foreground/70">Issue Reporting</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-foreground/70">City Branches</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="glass rounded-2xl p-1 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="City Infrastructure"
                className="rounded-xl w-full h-auto object-cover shadow-sm"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Road repairs in progress</p>
                  <p className="text-xs text-foreground/70">Updated 2 hours ago</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Average response time</p>
                  <p className="text-xs text-foreground/70">24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
