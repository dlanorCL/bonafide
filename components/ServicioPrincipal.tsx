export default function ServicioPrincipal() {
  return (
    <section id="servicio" className="py-16 bg-white scroll-mt-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="/imagenes/analisis-juridico.svg" 
              alt="Análisis jurídico" 
              className="w-80 h-60 mb-6"
            />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gris-grafito text-center">
              Informe Jurídico Inmobiliario Patrimonial
            </h2>
          </div>
          
          <p className="text-lg text-gris-grafito leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            El <strong>Informe Jurídico Inmobiliario Patrimonial</strong> es un servicio de consultoría que culmina en 
            un documento escrito, estructurado y profesional, que permite tomar decisiones patrimoniales informadas 
            respecto de un inmueble o conflicto asociado.
          </p>
          
          <div className="bg-gris-claro p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-serif font-bold text-verde-institucional mb-6">
              Qué entrega el informe:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-verde-institucional font-bold text-xl mr-3">✓</span>
                <span className="text-gris-grafito">
                  Un <strong>diagnóstico jurídico</strong> del caso y antecedentes disponibles.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-verde-institucional font-bold text-xl mr-3">✓</span>
                <span className="text-gris-grafito">
                  Identificación de riesgos con impacto patrimonial: contrato, dominio, posesión, terceros, ocupación, regularización.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-verde-institucional font-bold text-xl mr-3">✓</span>
                <span className="text-gris-grafito">
                  Análisis civil y contractual en lo pertinente, siempre ligado al inmueble.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-verde-institucional font-bold text-xl mr-3">✓</span>
                <span className="text-gris-grafito">
                  Evaluación de escenarios judiciales: acciones posibles, riesgos, prueba, tiempos.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-verde-institucional font-bold text-xl mr-3">✓</span>
                <span className="text-gris-grafito">
                  Recomendaciones prudentes y un plan de acción con próximos pasos.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-sm text-gris-grafito italic">
              <strong>Aclaración técnica:</strong> El informe constituye una <em>opinión jurídica preliminar</em> basada 
              en antecedentes disponibles a la fecha, y puede variar si aparecen nuevos hechos o documentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
