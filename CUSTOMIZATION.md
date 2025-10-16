# 🎨 Guía de Personalización - Lámparas 3D

Esta guía te ayudará a personalizar completamente tu página web de lámparas 3D.

## 🎯 Personalización Básica

### 1. Cambiar Información de Contacto

Edita el archivo `config.js`:

```javascript
contact: {
    whatsapp: '+54 9 11 TU-NUMERO-REAL',
    instagram: '@tu-instagram-real',
    email: 'tu-email@real.com',
    address: 'Tu dirección real',
    businessHours: 'Lunes a Viernes: 9:00 - 18:00'
}
```

### 2. Actualizar Datos del Sitio

```javascript
site: {
    name: 'Tu Nombre de Marca',
    tagline: 'Tu eslogan personalizado',
    description: 'Tu descripción única',
    url: 'https://tu-dominio.com'
}
```

### 3. Configurar Mercado Pago

```javascript
payment: {
    mercadopago: {
        baseUrl: 'https://mpago.la/TU-LINK-REAL',
    }
}
```

## 🎨 Personalización Visual

### 1. Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    /* Colores principales */
    --primary-color: #8B4513;      /* Color principal (marrón madera) */
    --secondary-color: #D2B48C;    /* Color secundario (beige) */
    --accent-color: #F4A460;       /* Color de acento (marrón claro) */
    --text-dark: #2C2C2C;          /* Texto oscuro */
    --text-light: #666666;         /* Texto claro */
    --white: #FFFFFF;
    --light-bg: #FAFAFA;
    --border-color: #E0E0E0;
}
```

#### Paletas de Colores Sugeridas:

**Paleta Madera (Actual)**:
```css
--primary-color: #8B4513;
--secondary-color: #D2B48C;
--accent-color: #F4A460;
```

**Paleta Moderna**:
```css
--primary-color: #2C3E50;
--secondary-color: #ECF0F1;
--accent-color: #3498DB;
```

**Paleta Elegante**:
```css
--primary-color: #34495E;
--secondary-color: #BDC3C7;
--accent-color: #E74C3C;
```

**Paleta Minimalista**:
```css
--primary-color: #2C2C2C;
--secondary-color: #F8F9FA;
--accent-color: #007BFF;
```

### 2. Cambiar Tipografía

En `css/styles.css`, modifica:

```css
/* Google Fonts - Cambia la URL */
@import url('https://fonts.googleapis.com/css2?family=TU-FUENTE:wght@300;400;500;600;700&display=swap');

:root {
    --font-primary: 'TU-FUENTE', sans-serif;
}
```

#### Fuentes Sugeridas:
- **Poppins** (actual): Moderna y limpia
- **Roboto**: Minimalista
- **Open Sans**: Legible
- **Montserrat**: Elegante
- **Lato**: Amigable

### 3. Cambiar Logo

1. Crea tu logo (PNG transparente, 200x60px)
2. Guárdalo en `assets/images/logo.png`
3. Actualiza `config.js`:

```javascript
site: {
    logo: 'assets/images/logo.png'
}
```

4. En `index.html`, reemplaza el texto del logo:

```html
<div class="nav-logo">
    <img src="assets/images/logo.png" alt="Tu Logo" height="40">
</div>
```

## 🛍️ Personalización de Productos

### 1. Agregar Nuevos Productos

En `js/script.js`, edita el array `PRODUCTS`:

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Tu Lámpara Personalizada',
        description: 'Descripción detallada de tu producto',
        price: 15000, // Precio en pesos argentinos
        image: 'assets/images/productos/tu-lampara.jpg', // o null para placeholder
        category: 'tu-categoria',
        available: true
    },
    // ... más productos
];
```

### 2. Agregar Imágenes de Productos

1. **Prepara las imágenes**:
   - Formato: JPG o PNG
   - Tamaño: 800x600px o 1200x900px
   - Peso: máximo 500KB
   - Nombre: `producto-[id]-[nombre].jpg`

2. **Guárdalas en**: `assets/images/productos/`

3. **Actualiza el producto**:
```javascript
{
    id: 1,
    name: 'Mi Lámpara',
    image: 'assets/images/productos/producto-1-mi-lampara.jpg',
    // ... otros campos
}
```

### 3. Cambiar Precios

```javascript
// En js/script.js
{
    id: 1,
    name: 'Lámpara Minimalista',
    price: 20000, // Nuevo precio
    // ... otros campos
}
```

## 📝 Personalización de Contenido

### 1. Cambiar Textos de la Página Principal

En `index.html`, busca y modifica:

```html
<h1 class="hero-title">Tu Título Personalizado</h1>
<p class="hero-subtitle">Tu subtítulo único</p>
<p class="hero-description">
    Tu descripción personalizada que explique tu negocio.
</p>
```

### 2. Actualizar Sección "Sobre Nosotros"

```html
<section id="sobre-nosotros" class="about">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2>Sobre Nosotros</h2>
                <p>
                    Tu historia personal, cómo empezaste, 
                    qué te hace único, etc.
                </p>
                <!-- ... más contenido -->
            </div>
        </div>
    </div>
</section>
```

### 3. Modificar Características

En `index.html`, busca la sección `.features`:

```html
<div class="feature-card">
    <div class="feature-icon">
        <i class="fas fa-cube"></i>
    </div>
    <h3>Tu Característica</h3>
    <p>Descripción de tu característica única</p>
</div>
```

## 🔧 Personalización Avanzada

### 1. Agregar Nuevas Secciones

1. **Agrega el HTML** en `index.html`:
```html
<section id="nueva-seccion" class="nueva-seccion">
    <div class="container">
        <h2>Mi Nueva Sección</h2>
        <p>Contenido de mi nueva sección</p>
    </div>
</section>
```

2. **Agrega los estilos** en `css/styles.css`:
```css
.nueva-seccion {
    padding: var(--spacing-xxl) 0;
    background: var(--light-bg);
}

.nueva-seccion h2 {
    text-align: center;
    color: var(--text-dark);
    margin-bottom: var(--spacing-lg);
}
```

3. **Agrega la funcionalidad** en `js/script.js` si es necesario.

### 2. Cambiar Iconos

Reemplaza los iconos de Font Awesome:

```html
<!-- Cambiar de: -->
<i class="fas fa-lightbulb"></i>

<!-- A: -->
<i class="fas fa-star"></i>
```

#### Iconos Sugeridos:
- `fa-lightbulb` - Bombilla
- `fa-star` - Estrella
- `fa-heart` - Corazón
- `fa-gem` - Gema
- `fa-magic` - Varita mágica
- `fa-fire` - Fuego

### 3. Agregar Animaciones

En `css/styles.css`, agrega:

```css
/* Animación personalizada */
@keyframes miAnimacion {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.mi-elemento {
    animation: miAnimacion 2s infinite;
}
```

## 📱 Personalización Móvil

### 1. Ajustar Breakpoints

En `css/styles.css`, modifica:

```css
/* Tablet */
@media (max-width: 768px) {
    /* Tus estilos para tablet */
}

/* Móvil */
@media (max-width: 480px) {
    /* Tus estilos para móvil */
}
```

### 2. Optimizar para Móvil

```css
/* Botones más grandes en móvil */
@media (max-width: 480px) {
    .btn {
        padding: 15px 25px;
        font-size: 16px;
    }
}
```

## 🎯 Personalización de Negocio

### 1. Cambiar Proceso de Pedido

En `js/script.js`, modifica:

```javascript
// Cambiar porcentaje de seña
const CONFIG = {
    orders: {
        depositPercentage: 30, // Cambiar de 50% a 30%
        // ... otros campos
    }
};
```

### 2. Agregar Términos y Condiciones

Crea una nueva sección o modal con tus términos.

### 3. Personalizar Mensajes

En `js/script.js`, busca y modifica:

```javascript
function showNotification(message, type = 'info') {
    // Cambiar mensajes por defecto
    const customMessages = {
        success: '¡Pedido enviado correctamente!',
        error: 'Error al procesar el pedido',
        // ... más mensajes
    };
}
```

## 🚀 Consejos de Personalización

### 1. Mantén la Consistencia
- Usa los mismos colores en toda la página
- Mantén la misma tipografía
- Sigue el mismo estilo de imágenes

### 2. Optimiza para tu Audiencia
- Usa un lenguaje que tu cliente entienda
- Incluye testimonios si los tienes
- Agrega fotos de tus productos reales

### 3. Hazlo Único
- Cuenta tu historia personal
- Destaca qué te hace diferente
- Muestra tu proceso de trabajo

### 4. Prueba Todo
- Prueba en diferentes dispositivos
- Verifica que los formularios funcionen
- Asegúrate de que los pagos funcionen

## 📞 Soporte

Si necesitas ayuda con la personalización:

1. **Revisa la documentación** de cada tecnología
2. **Usa las herramientas de desarrollador** del navegador (F12)
3. **Consulta comunidades** como Stack Overflow
4. **Contacta a un desarrollador** si necesitas cambios complejos

¡Tu página web de lámparas 3D está lista para ser única! 🎨✨

