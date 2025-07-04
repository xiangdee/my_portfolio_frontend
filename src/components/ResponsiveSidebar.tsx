'use client'
import React, { useState } from 'react';
import { Menu, X, Home, User, FileText, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';


const ResponsiveSidebar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [pathname, setPathname] = useState('') 

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
        setPathname(new URL(window.location.href).pathname)
    }
}, []);

  let routePrefix = pathname.split("/")[1];
 routePrefix = routePrefix === "" ? "" : "/";

 const navItems = [
    { href: "/", label: "01. Home", icon: Home },
    { href: routePrefix+"#about", label: "02. About", icon: User },
    { href: routePrefix+"#resume", label: "03. Resume", icon: FileText },
    { href: routePrefix+"#works", label: "04. Works", icon: Briefcase },
    { href: routePrefix+"#contact", label: "05. Contact", icon: Mail }
  ];

  const handleNavClick = () => {
    setNavOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed right-3 top-1/2 -translate-y-1/2 max-w-[437px] rounded-[24px] p-5 bg-[#111111] 
      backdrop-blur-[36px] shadow-[inset_0px_0px_20px_0px_rgba(103,103,103,0.25)] z-20 max-h-screen overflow-y-auto">
        <nav>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium flex items-center gap-3"
                  onClick={handleNavClick}
                >
                  <item.icon size={20} />
                  {/* {item.label} */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="lg:hidden fixed right-6 top-6 z-50 p-3 rounded-full bg-[#111111] backdrop-blur-[36px] shadow-[inset_0px_0px_20px_0px_rgba(103,103,103,0.25)] text-white hover:bg-gray-800 transition-colors duration-300"
      >
        {navOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {navOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-[rgb(0,0,0,0.8)]   z-30 transition-opacity duration-300"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Mobile Sliding Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-[#111111] backdrop-blur-[36px] shadow-[inset_0px_0px_20px_0px_rgba(103,103,103,0.25)] z-40 transform transition-transform duration-300 ease-in-out ${
        navOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 pt-20">
          <nav>
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-white hover:text-gray-300 transition-colors duration-300 text-xl font-medium flex items-center gap-4 py-2"
                    onClick={handleNavClick}
                  >
                    <item.icon size={24} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

   
    </>
  );
};

export default ResponsiveSidebar;