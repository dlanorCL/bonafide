export default function Contexto() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="/imagenes/evaluacion-riesgos.svg" 
                alt="Evaluación de riesgos" 
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gris-grafito mb-6">
                Cuando el patrimonio inmobiliario está en juego, decidir sin análisis es un riesgo
              </h2>
            </div>
          </div>
          
          <p className="text-lg text-gris-grafito leading-relaxed mb-6">
            Las decisiones inmobiliarias suelen implicar el activo patrimonial más relevante de una persona o empresa. 
            Sin embargo, en la práctica, muchos conflictos surgen por:
          </p>
          
          <ul className="space-y-3 mb-8 text-gris-grafito">
            <li className="flex items-start">
              <span className="text-verde-institucional font-bold mr-3">•</span>
              <span>documentación incompleta,</span>
            </li>
            <li className="flex items-start">
              <span className="text-verde-institucional font-bold mr-3">•</span>
              <span>contratos con riesgos no detectados,</span>
            </li>
            <li className="flex items-start">
              <span className="text-verde-institucional font-bold mr-3">•</span>
              <span>posesión u ocupación irregular,</span>
            </li>
            <li className="flex items-start">
              <span className="text-verde-institucional font-bold mr-3">•</span>
              <span>herencias mal regularizadas,</span>
            </li>
            <li className="flex items-start">
              <span className="text-verde-institucional font-bold mr-3">•</span>
              <span>o decisiones basadas en información parcial.</span>
            </li>
          </ul>
          
          <div className="bg-gris-claro p-6 rounded-lg">
            <p className="text-lg text-gris-grafito leading-relaxed">
              Un error previo puede traducirse en <strong>pérdida de valor</strong>, retrasos significativos en operaciones, 
              imposibilidad de disponer del inmueble o, en el peor escenario, conflictos judiciales largos y costosos. 
              Por ello, ofrecemos un enfoque preventivo: identificar riesgos reales, anticipar escenarios judiciales 
              y proponer medidas concretas antes de tomar una decisión patrimonial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
