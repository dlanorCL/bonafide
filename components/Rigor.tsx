export default function Rigor() {
  const principios = [
    {
      icono: '🔒',
      titulo: 'Confidencialidad absoluta',
      descripcion: 'Manejo reservado de antecedentes y documentación.',
    },
    {
      icono: '📋',
      titulo: 'Alcance definido',
      descripcion: 'Claridad sobre lo que incluye el informe antes de iniciar.',
    },
    {
      icono: '⚖️',
      titulo: 'Sin promesas irreales',
      descripcion: 'Análisis prudente, no garantías de resultado.',
    },
    {
      icono: '📄',
      titulo: 'Documento escrito',
      descripcion: 'Útil para decidir, conversar con terceros o reevaluar escenarios.',
    },
    {
      icono: '🏛️',
      titulo: 'Enfoque patrimonial',
      descripcion: 'Recomendaciones orientadas a proteger activos y reducir exposición.',
    },
  ];

  return (
    <section className="py-16 bg-verde-institucional text-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-12 text-center">
            Rigor, Transparencia y Confidencialidad
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principios.map((principio, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl mb-4 text-center">{principio.icono}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-center">
                  {principio.titulo}
                </h3>
                <p className="text-center leading-relaxed">
                  {principio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
