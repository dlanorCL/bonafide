export default function Modalidades() {
  const modalidades = [
    {
      title: 'Informe Express',
      tiempo: '48 horas hábiles',
      objetivo: 'Claridad rápida para una decisión urgente.',
      incluye: 'Diagnóstico preliminar, riesgos principales y pasos inmediatos recomendados.',
      ideal: 'Situaciones con plazos cercanos o decisiones inmediatas.',
      destacado: false,
    },
    {
      title: 'Informe Estándar',
      tiempo: '5 días hábiles',
      objetivo: 'Análisis completo y decisión con fundamento.',
      incluye: 'Diagnóstico estructurado, escenarios posibles, recomendaciones prudentes y checklist 15/30/60 días.',
      ideal: 'Compraventas relevantes, herencias con inmuebles, conflictos incipientes.',
      destacado: true,
    },
    {
      title: 'Informe Premium',
      tiempo: '7–10 días hábiles',
      objetivo: 'Máxima profundidad, útil para casos complejos o de alto valor.',
      incluye: 'Análisis profundo, matriz de riesgos, evaluación judicial más detallada y reunión explicativa final.',
      ideal: 'Inversiones significativas, conflictos con terceros, situaciones con alta exposición patrimonial.',
      destacado: false,
    },
  ];

  return (
    <section id="modalidades" className="py-16 bg-white scroll-mt-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gris-grafito mb-12 text-center">
            Modalidades de Informe
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {modalidades.map((modalidad, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-lg shadow-md ${
                  modalidad.destacado 
                    ? 'bg-verde-institucional text-white ring-4 ring-verde-claro transform scale-105' 
                    : 'bg-gris-claro text-gris-grafito'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    {modalidad.title}
                  </h3>
                  {modalidad.destacado && (
                    <span className="inline-block bg-white text-verde-institucional px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Más solicitado
                    </span>
                  )}
                </div>
                
                <div className={`mb-4 pb-4 border-b ${modalidad.destacado ? 'border-white/30' : 'border-gray-300'}`}>
                  <p className="text-sm font-semibold mb-1">Tiempo de entrega:</p>
                  <p className="text-lg font-bold">🔹 {modalidad.tiempo}</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Objetivo:</p>
                    <p>{modalidad.objetivo}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-1">Incluye:</p>
                    <p>{modalidad.incluye}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-1">Ideal para:</p>
                    <p>{modalidad.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gris-grafito">
              <strong>Nota de honorarios:</strong> Los honorarios se informan antes de iniciar, según alcance y complejidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
