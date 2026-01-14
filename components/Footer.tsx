export default function Footer() {
  const whatsappUrl = 'https://wa.me/56912345678';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gris-grafito text-white py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Bona Fide Consultores
            </h3>
            <p className="text-lg mb-2">
              Análisis y Estrategia Legal
            </p>
            <p className="text-base opacity-90">
              Consultoría Jurídica Especializada en Derecho Inmobiliario Patrimonial
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm opacity-75">
                © {currentYear} <strong>Bona Fide Consultores</strong>. Todos los derechos reservados.
              </div>
              
              <div className="flex items-center gap-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-verde-claro transition-colors duration-300 font-semibold"
                >
                  WhatsApp
                </a>
                <span className="opacity-50">|</span>
                <span className="text-sm opacity-75">Concepción, Chile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
