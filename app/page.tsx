import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Modalidades from '@/components/Modalidades'
import Contexto from '@/components/Contexto'
import Especializacion from '@/components/Especializacion'
import ServicioPrincipal from '@/components/ServicioPrincipal'
import Ambitos from '@/components/Ambitos'
import ComoFunciona from '@/components/ComoFunciona'
import Rigor from '@/components/Rigor'
import Direccion from '@/components/Direccion'
import LlamadoAccion from '@/components/LlamadoAccion'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Modalidades />
      <Contexto />
      <Especializacion />
      <ServicioPrincipal />
      <Ambitos />
      <ComoFunciona />
      <Rigor />
      <Direccion />
      <LlamadoAccion />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
