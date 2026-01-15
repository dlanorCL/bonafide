export default function Hero() {
  const whatsappMessage = encodeURIComponent('Hola, quiero solicitar un Informe Jurídico Inmobiliario Patrimonial.');
  const whatsappUrl = `https://wa.me/56912345678?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="bg-gradient-to-br from-verde-institucional to-verde-claro text-white py-20 lg:py-32 pt-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/imagenes/marca-agua.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Bona Fide Consultores
          </h1>
          
          <p className="text-xl lg:text-2xl mb-4 font-light">
            Análisis Jurídico e Inmobiliario Patrimonial
          </p>
          
          <p className="text-lg mb-8 opacity-90">
            con evaluación de escenarios judiciales
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              En <strong>Bona Fide Consultores</strong> elaboramos <strong>Informes Jurídicos Inmobiliarios Previos</strong> orientados 
              a la protección del patrimonio. Nuestro trabajo busca que cada decisión sobre bienes raíces —compra, venta, 
              inversión, herencia o conflicto— se tome con <strong>claridad jurídica, análisis de riesgos y criterio estratégico</strong>, 
              anticipando escenarios y evitando errores que suelen derivar en litigios costosos.
            </p>
            
            <p className="text-base leading-relaxed opacity-90">
              El informe se entrega por escrito, con conclusiones prudentes y próximos pasos concretos. Está diseñado para 
              personas y empresas que requieren <strong>certeza</strong> antes de comprometer capital o asumir exposición legal.
            </p>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-verde-institucional px-8 py-4 rounded-lg text-lg font-semibold 
                     hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            👉 Solicitar Informe por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
