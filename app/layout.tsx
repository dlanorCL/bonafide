import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bona Fide Consultores | Análisis Jurídico Inmobiliario Patrimonial',
  description: 'Consultoría especializada en Derecho Inmobiliario Patrimonial. Informes jurídicos para proteger su patrimonio con análisis de riesgos y escenarios judiciales.',
  keywords: 'derecho inmobiliario, consultoría jurídica, patrimonio inmobiliario, análisis jurídico, bienes raíces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/imagenes/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
