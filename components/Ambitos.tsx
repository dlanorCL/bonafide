export default function Ambitos() {
  const ambitos = [
    {
      title: 'Compraventa y promesas de compraventa',
      description: 'Revisión de riesgos contractuales, cláusulas críticas, condiciones suspensivas, incumplimientos, nulidades potenciales, y medidas preventivas antes de firmar o cerrar una operación.',
    },
    {
      title: 'Contratos inmobiliarios con impacto patrimonial',
      description: 'Análisis de contratos relacionados al inmueble (arrendamiento con riesgos de restitución, uso y goce, ocupación, acuerdos de salida, indemnidades), siempre con foco patrimonial.',
    },
    {
      title: 'Posesiones efectivas con bienes raíces',
      description: 'Evaluación de riesgos patrimoniales en herencias con inmuebles, adjudicaciones, comunidades hereditarias, disposición del inmueble, conflictos entre herederos y necesidad de regularización.',
    },
    {
      title: 'Dominio, posesión, ocupación y conflictos de tenencia',
      description: 'Análisis de situaciones de ocupación irregular, precario, conflictos posesorios, riesgos de pérdida o dificultad de restitución, y estrategia preventiva.',
    },
    {
      title: 'Inversiones inmobiliarias',
      description: 'Diagnóstico jurídico previo antes de invertir: riesgos de documentación, ocupación, disputas, y viabilidad de estrategia en caso de conflicto.',
    },
    {
      title: 'Conflictos civiles inmobiliarios',
      description: 'Evaluación jurídica previa de escenarios como reivindicación, nulidad de actos, deslindes, servidumbres, problemas de restitución, entre otros.',
    },
  ];

  return (
    <section id="ambitos" className="py-16 bg-gris-claro scroll-mt-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/imagenes/inmobiliario.svg" 
              alt="Ámbitos inmobiliarios" 
              className="w-80 h-60 mb-6"
            />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gris-grafito text-center">
              Ámbitos de Intervención
            </h2>
          </div>
          
          <p className="text-lg text-gris-grafito text-center mb-12">
            Consultoría inmobiliaria patrimonial en materias como:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {ambitos.map((ambito, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-serif font-bold text-verde-institucional mb-3 flex items-start">
                  <span className="mr-3">✅</span>
                  {ambito.title}
                </h3>
                <p className="text-gris-grafito leading-relaxed">
                  {ambito.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-verde-institucional text-white p-6 rounded-lg text-center">
            <p className="text-lg font-semibold">
              En todos los casos, el eje es el mismo: <em>proteger el patrimonio inmobiliario y anticipar el conflicto</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
