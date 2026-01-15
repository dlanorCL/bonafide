export default function Especializacion() {
  return (
    <section id="especializacion" className="py-16 bg-verde-institucional text-white scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/imagenes/conocimiento-legal.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="/imagenes/conocimiento-legal.svg" 
              alt="Derecho Inmobiliario" 
              className="w-80 h-60 mb-6"
            />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center">
              Derecho Inmobiliario Patrimonial
            </h2>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            Nuestra consultoría se centra exclusivamente en el <strong>patrimonio inmobiliario</strong> y en los riesgos 
            legales asociados al bien raíz. Este enfoque integra el análisis civil y contractual, pero siempre desde una 
            perspectiva inmobiliaria: <strong>el inmueble como activo patrimonial</strong>.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-lg leading-relaxed">
              A diferencia de una asesoría general, el Derecho Inmobiliario Patrimonial se ocupa de evaluar cómo se 
              adquiere, conserva, transfiere y protege un inmueble frente a riesgos que pueden afectar su dominio, 
              posesión o libre disposición. En los casos en que exista conflicto o potencial judicialización, 
              incorporamos además un análisis de <strong>escenarios judiciales</strong>: qué podría demandarse, 
              qué se debería probar y cuáles son los riesgos de tiempo y costos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
