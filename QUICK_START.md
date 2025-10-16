# ⚡ Inicio Rápido - Lámparas 3D

¡Tu página web está lista! Sigue estos pasos para ponerla en funcionamiento.

## 🚀 Pasos Inmediatos

### 1. Abrir la Página (5 minutos)
```bash
# Opción 1: Doble click en index.html
# Opción 2: Servidor local (recomendado)
npx http-server . -p 3000 -o
```

### 2. Configurar Información Básica (10 minutos)

Edita `config.js` y cambia:

```javascript
// ❌ Cambiar estos datos:
contact: {
    whatsapp: '+54 9 11 1234-5678', // ← Tu número real
    instagram: '@lamparas3d_artesanales', // ← Tu Instagram
    email: 'pedidos@lamparas3d.com', // ← Tu email
}

// ❌ Y este link de pago:
payment: {
    mercadopago: {
        baseUrl: 'https://mpago.la/', // ← Tu link de Mercado Pago
    }
}
```

### 3. Agregar tus Productos (15 minutos)

En `js/script.js`, edita el array `PRODUCTS`:

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Tu Lámpara Real', // ← Nombre de tu producto
        description: 'Descripción de tu lámpara', // ← Tu descripción
        price: 15000, // ← Tu precio real
        image: null, // ← null o ruta a tu imagen
        category: 'moderna',
        available: true
    }
    // Agrega más productos...
];
```

### 4. Agregar tus Imágenes (10 minutos)

1. Crea la carpeta: `assets/images/productos/`
2. Sube tus fotos de lámparas
3. Actualiza los productos con las rutas de las imágenes

## 🎯 Checklist de Configuración

- [ ] ✅ Cambiar número de WhatsApp
- [ ] ✅ Cambiar Instagram
- [ ] ✅ Cambiar email de contacto
- [ ] ✅ Configurar link de Mercado Pago
- [ ] ✅ Agregar tus productos reales
- [ ] ✅ Subir fotos de tus lámparas
- [ ] ✅ Cambiar precios reales
- [ ] ✅ Personalizar textos de la página

## 🌐 Desplegar en Internet

### Opción 1: GitHub Pages (Gratuito)
1. Crea repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona "main" branch
5. ¡Listo! Tu sitio estará online

### Opción 2: Vercel (Recomendado)
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu GitHub
3. Importa el repositorio
4. ¡Despliega automáticamente!

## 🔧 Funcionalidades Incluidas

### ✅ Ya Funcionando
- **Diseño responsive** (móvil, tablet, desktop)
- **Catálogo de productos** dinámico
- **Formulario de pedidos** con validación
- **Modal de pago** con Mercado Pago
- **Navegación suave** entre secciones
- **Notificaciones** de éxito/error
- **Secciones** de contacto y sobre nosotros

### 🔄 Para Configurar (Opcional)
- **Envío de emails** automático (EmailJS)
- **Guardar pedidos** en Google Sheets
- **Google Analytics** para estadísticas
- **Dominio personalizado**

## 📱 Cómo Funciona el Flujo

1. **Cliente entra** → Ve el catálogo
2. **Elige producto** → Hace click en "Encargar"
3. **Llena formulario** → Datos personales + personalización
4. **Ve resumen** → Precio total y seña (50%)
5. **Paga seña** → Link a Mercado Pago
6. **Tú recibes** → Datos del cliente para contactar

## 🎨 Personalización Rápida

### Cambiar Colores
En `css/styles.css`:
```css
:root {
    --primary-color: #TU-COLOR; /* Color principal */
    --secondary-color: #TU-COLOR; /* Color secundario */
}
```

### Cambiar Textos
En `index.html`, busca y cambia:
- Títulos de secciones
- Descripciones
- Textos de botones

### Agregar Productos
En `js/script.js`, agrega al array `PRODUCTS`:
```javascript
{
    id: 7, // Siguiente número
    name: 'Nueva Lámpara',
    description: 'Descripción...',
    price: 20000,
    image: 'assets/images/productos/nueva-lampara.jpg',
    category: 'nueva-categoria',
    available: true
}
```

## 🚨 Problemas Comunes

### ❌ Las imágenes no se ven
**Solución**: Verifica que las rutas en `PRODUCTS` sean correctas

### ❌ Los formularios no envían
**Solución**: Configura EmailJS o Formspree (ver `deploy.md`)

### ❌ Los pagos no funcionan
**Solución**: Reemplaza el link de Mercado Pago con tu link real

### ❌ El sitio se ve mal en móvil
**Solución**: Verifica que estés usando las clases CSS correctas

## 📞 Próximos Pasos

1. **Configura Mercado Pago** con tus datos reales
2. **Agrega tus productos** e imágenes
3. **Personaliza los textos** con tu información
4. **Despliega en internet** (GitHub Pages o Vercel)
5. **Comparte el link** en tus redes sociales
6. **Monitorea los pedidos** regularmente

## 🎉 ¡Listo!

Tu página web de lámparas 3D está **100% funcional** y lista para recibir pedidos.

**Archivos importantes**:
- `index.html` - Página principal
- `css/styles.css` - Estilos y colores
- `js/script.js` - Funcionalidad y productos
- `config.js` - Configuración personalizable

**Para más detalles**, consulta:
- `README.md` - Documentación completa
- `CUSTOMIZATION.md` - Guía de personalización
- `deploy.md` - Guía de despliegue

¡Éxito con tu negocio de lámparas 3D! 🏮✨

