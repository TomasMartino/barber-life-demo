# Barber Life — Landing Demo Premium

Landing page demo para **Barber Life Barbería**, ubicada en Beltrán 1510, Godoy Cruz, Mendoza.

## Datos del negocio

| Campo | Valor |
|-------|-------|
| Nombre | Barber Life Barbería |
| Dirección | Beltrán 1510, Godoy Cruz, Mendoza |
| Teléfono | 0261 617-4842 |
| WhatsApp | +54 9 261 617-4842 ([link](https://wa.me/5492616174842)) |
| Instagram | [@barber_life10](https://www.instagram.com/barber_life10/) |
| Google Reviews | 111 reseñas, 5.0 ⭐ |
| Coordenadas | -32.908041, -68.851624 |
| Horarios | Lun-Sáb 9:00–20:00 *(placeholder, verificar)* |

## Stack

- **HTML5** semántico con SEO completo + JSON-LD Barbershop + Open Graph
- **CSS3** mobile-first con variables CSS, animaciones y `prefers-reduced-motion`
- **Vanilla JS** — menú, header sticky, reveal con IntersectionObserver, lightbox con navegación por teclado
- **Google Fonts** — Oswald (headings) + Inter (body)
- **Imágenes** — Unsplash (barbería real, sin inventar)
- **Frameworks:** Ninguno. 100% vanilla.

## Secciones

1. **Header** sticky con nav + CTA Reservar (WhatsApp)
2. **Hero** luminoso con frase, badge de reseñas y 2 CTAs
3. **Servicios** 6 cards con precios
4. **Por qué elegirnos** 4 puntos diferenciadores
5. **Galería** 8 fotos + lightbox con flechas y teclado
6. **Combo destacado** Corte + Barba como servicio principal
7. **Testimonios** 3 reviews estilo Google Maps
8. **Instagram** bloque @barber_life10 con grid 4
9. **Contacto** mapa (Google Maps), dirección, horarios, links
10. **Footer** con crédito

## Paleta de color

Feedback de la demo anterior: *"muy oscura"*. Rediseño orientado a barbería clásica **clara pero masculina**: fondo crema cálido en vez de negro, solo header y footer en oscuro. IG del local (barber_life10) no permite extraer colores de marca (bloquea scrapers), así que se tomó la dirección clásica del rubro: crema de barbería + verde botella + acento dorado.

| Token | Hex | Uso |
|-------|-----|-----|
| `--c-bg` | `#f5f1ea` | Fondo crema base (servicios, galería, testimonios, contacto) |
| `--c-bg-alt` | `#fbf8f2` | Crema más claro (por qué elegirnos, planes, Instagram) |
| `--c-bg-card` | `#ffffff` | Cards y plan |
| `--c-accent` | `#1e3d2f` | Verde botella (botones, borde del plan, links) |
| `--c-gold` | `#c9a86a` | Dorado (estrellas, icono logo, hover nav) |
| `--c-gold-deep` | `#a07c36` | Dorado profundo (precios) |
| `--c-text` | `#1a1a1a` | Texto principal |
| `--c-text-muted` | `#6b655c` | Texto secundario |
| `--c-footer` | `#142118` | Verde muy oscuro (header + footer) |

Hero con foto de barbería iluminada + overlay crema suave, título oscuro legible. Fotos oscuras de la galería reemplazadas por tomas más luminosas (Unsplash).

## Datos importantes

- Sin web propia (la demo reemplaza esto)
- Horarios son placeholder: verificar horarios reales antes de producción
- Los precios son referenciales para la demo
- Las fotos son de Unsplash, representan estética de barbería
- Teléfono WhatsApp: `+54 9 261 617-4842` (formato internacional)

## Cómo abrir

Doble clic en `index.html`. No necesita servidor. Funciona en cualquier navegador moderno.

## Creado por

**Tomás Martino** — Demo landing page, septiembre 2026.
