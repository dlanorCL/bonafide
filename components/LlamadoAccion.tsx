export default function LlamadoAccion() {
  const whatsappMessage = encodeURIComponent('Hola, quiero solicitar un Informe Jurídico Inmobiliario Patrimonial.');
  const whatsappUrl = `https://wa.me/56912345678?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-verde-institucional to-verde-claro text-white scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/imagenes/proteccion-patrimonial.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
            Proteja su patrimonio inmobiliario con análisis jurídico especializado
          </h2>
          
          <p className="text-xl mb-10 leading-relaxed">
            Antes de firmar, invertir o judicializar, conozca sus riesgos reales y escenarios posibles.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-verde-institucional px-10 py-5 rounded-lg text-xl font-bold 
                     hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            👉 Solicitar Informe Jurídico Inmobiliario Patrimonial
          </a>
        </div>
      </div>
    </section>
  );
}
