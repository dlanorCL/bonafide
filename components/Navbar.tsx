'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Especialización', href: '#especializacion' },
    { name: 'Servicio', href: '#servicio' },
    { name: 'Ámbitos', href: '#ambitos' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-verde-institucional shadow-lg' 
          : 'bg-verde-institucional/95'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="text-white font-serif font-bold text-xl lg:text-2xl hover:text-gray-200 transition-colors"
            >
              Bona Fide Consultores
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-white hover:text-gray-200 transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20quiero%20solicitar%20un%20Informe%20Jur%C3%ADdico%20Inmobiliario%20Patrimonial."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-verde-institucional px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
