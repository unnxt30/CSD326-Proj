import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M5 12h14"></path>
                <path d="M5 12h0" strokeWidth="3"></path>
                <path d="M5 19h0" strokeWidth="3"></path>
                <path d="M12 5v0" strokeWidth="3"></path>
                <path d="M19 12h0" strokeWidth="3"></path>
              </svg>
              <span className="ml-2 text-lg font-semibold text-foreground">CityRoads</span>
            </div>
            <p className="mt-4 text-foreground/70 max-w-xs">
              Connecting citizens and city staff for better road infrastructure management and maintenance.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Features</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Reporting</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Tracking</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Analytics</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Notifications</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">API Access</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Community</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Press</a></li>
              <li><a href="#" className="text-base text-foreground/70 hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-sm text-foreground/60">
            © 2023 CityRoads, Inc. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary">Terms of Service</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
