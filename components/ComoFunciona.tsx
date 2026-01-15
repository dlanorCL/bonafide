export default function ComoFunciona() {
  const pasos = [
    {
      numero: '1',
      titulo: 'Contacto inicial',
      descripcion: 'Contacto por WhatsApp para conocer su situación.',
    },
    {
      numero: '2',
      titulo: 'Determinación del alcance',
      descripcion: 'Definimos el alcance del informe y antecedentes necesarios.',
    },
    {
      numero: '3',
      titulo: 'Confirmación de honorarios',
      descripcion: 'Informamos honorarios y coordinamos pago para iniciar revisión.',
    },
    {
      numero: '4',
      titulo: 'Análisis jurídico',
      descripcion: 'Realizamos el análisis de la información disponible.',
    },
    {
      numero: '5',
      titulo: 'Entrega del informe',
      descripcion: 'Entrega del informe escrito dentro del plazo acordado, con conclusiones y próximos pasos.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-gris-claro scroll-mt-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <img 
              src="/imagenes/consulta-legal.svg" 
              alt="Cómo funciona" 
              className="w-80 h-60 mb-6"
            />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gris-grafito text-center">
              ¿Cómo funciona?
            </h2>
          </div>
          
          <div className="space-y-6">
            {pasos.map((paso, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-16 h-16 bg-verde-institucional text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  {paso.numero}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-gris-grafito mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-gris-grafito leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
