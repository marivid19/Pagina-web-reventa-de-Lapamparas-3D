# 🏮 Lámparas 3D Artesanales - Página Web

Una página web moderna y funcional para gestionar pedidos de lámparas 3D impresas a pedido.

## 🎯 Características

- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Catálogo de Productos**: Visualización atractiva de modelos disponibles
- **Formulario de Pedidos**: Sistema completo de captura de datos del cliente
- **Integración de Pago**: Conexión con Mercado Pago para el pago del 50%
- **Gestión de Pedidos**: Sistema para registrar y gestionar pedidos
- **Contacto**: Múltiples canales de comunicación

## 🚀 Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! La página está funcionando

### Opción 2: Hosting en GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main como fuente
4. Tu página estará disponible en `https://tuusuario.github.io/tu-repositorio`

### Opción 3: Hosting en Vercel/Netlify
1. Conecta tu repositorio de GitHub
2. Configura el build (no requiere configuración especial)
3. Despliega automáticamente

## ⚙️ Configuración

### 1. Personalizar Productos
Edita el array `PRODUCTS` en `js/script.js`:

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Tu Lámpara',
        description: 'Descripción del producto',
        price: 15000,
        image: 'ruta/a/imagen.jpg', // o null para placeholder
        category: 'categoria',
        available: true
    }
    // ... más productos
];
```

### 2. Configurar Mercado Pago
En `js/script.js`, actualiza la configuración:

```javascript
const CONFIG = {
    mercadopago: {
        baseUrl: 'https://tu-link-de-mercadopago.com',
        // Otras configuraciones
    }
};
```

### 3. Actualizar Información de Contacto
Modifica los datos en `js/script.js`:

```javascript
contact: {
    whatsapp: '+54 9 11 TU-NUMERO',
    instagram: '@tu-instagram',
    email: 'tu-email@ejemplo.com'
}
```

### 4. Personalizar Colores y Estilos
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #8B4513;      /* Color principal */
    --secondary-color: #D2B48C;    /* Color secundario */
    --accent-color: #F4A460;       /* Color de acento */
    /* ... más variables */
}
```

## 📁 Estructura del Proyecto

```
lamparas-3d/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   └── script.js           # Lógica JavaScript
├── assets/                 # Imágenes y recursos
│   ├── images/            # Imágenes de productos
│   └── favicon.ico        # Icono del sitio
└── README.md              # Este archivo
```

## 🛠️ Funcionalidades Implementadas

### ✅ Completadas
- [x] Diseño responsive y moderno
- [x] Navegación suave entre secciones
- [x] Catálogo de productos dinámico
- [x] Formulario de pedidos con validación
- [x] Modal de confirmación de pago
- [x] Sistema de notificaciones
- [x] Integración básica con Mercado Pago
- [x] Secciones de contacto y sobre nosotros

### 🔄 En Desarrollo (Opcionales)
- [ ] Integración real con API de Mercado Pago
- [ ] Envío automático de emails
- [ ] Conexión con Google Sheets para pedidos
- [ ] Panel de administración
- [ ] Sistema de seguimiento de pedidos
- [ ] Galería de productos entregados

## 🎨 Personalización

### Agregar Nuevos Productos
1. Agrega la imagen del producto en `assets/images/`
2. Actualiza el array `PRODUCTS` en `js/script.js`
3. La página se actualizará automáticamente

### Cambiar Colores
1. Modifica las variables CSS en `:root`
2. Los cambios se aplicarán en toda la página

### Agregar Nuevas Secciones
1. Agrega el HTML en `index.html`
2. Agrega los estilos en `css/styles.css`
3. Agrega la funcionalidad en `js/script.js`

## 📱 Responsive Design

La página está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía (Poppins)

## 📞 Soporte

Si necesitas ayuda o tienes preguntas:

1. **WhatsApp**: +54 9 11 1234-5678
2. **Email**: pedidos@lamparas3d.com
3. **Instagram**: @lamparas3d_artesanales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo y modificarlo libremente.

## 🚀 Próximos Pasos

1. **Configurar Mercado Pago**: Reemplaza el link de ejemplo con tu link real
2. **Agregar Imágenes**: Sube las fotos de tus productos
3. **Personalizar Contenido**: Actualiza textos y información
4. **Configurar Dominio**: Conecta tu dominio personalizado
5. **Analytics**: Agrega Google Analytics para seguimiento

---

**¡Tu página web de lámparas 3D está lista para recibir pedidos!** 🎉

