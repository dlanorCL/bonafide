# Bona Fide Consultores - Sitio Web

Sitio web profesional para Bona Fide Consultores, especializada en Derecho Inmobiliario Patrimonial.

## Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Docker** - Contenedorización

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Producción con Docker

### Construir y levantar el servicio:

```bash
docker-compose up -d --build
```

El sitio estará disponible en `http://bonafideconsultores.cl` o `http://localhost:8877`

### Detener el servicio:

```bash
docker-compose down
```

### Ver logs:

```bash
docker-compose logs -f
```

## Estructura del proyecto

```
BonaFide/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Contexto.tsx
│   ├── Especializacion.tsx
│   ├── ServicioPrincipal.tsx
│   ├── Ambitos.tsx
│   ├── Modalidades.tsx
│   ├── ComoFunciona.tsx
│   ├── Rigor.tsx
│   ├── Direccion.tsx
│   ├── LlamadoAccion.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── docker-compose.yml
├── Dockerfile
├── package.json
└── tailwind.config.js
```

## Configuración

Para cambiar el número de WhatsApp, editar en los archivos:
- `components/Hero.tsx`
- `components/LlamadoAccion.tsx`
- `components/WhatsAppButton.tsx`
- `components/Footer.tsx`

Buscar `56912345678` y reemplazar con el número deseado.

## Características

- ✅ Diseño responsivo (mobile-first)
- ✅ Colores institucionales (verde + gris grafito)
- ✅ Botón flotante de WhatsApp
- ✅ Componentes separados y reutilizables
- ✅ One-page design
- ✅ SEO optimizado
- ✅ Dockerizado para producción
