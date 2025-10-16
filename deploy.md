# 🚀 Guía de Despliegue - Lámparas 3D

Esta guía te ayudará a desplegar tu página web de lámparas 3D en diferentes plataformas.

## 📋 Pre-requisitos

Antes de desplegar, asegúrate de:

1. ✅ **Configurar tu información personal** en `config.js`
2. ✅ **Agregar tus imágenes** en `assets/images/`
3. ✅ **Configurar Mercado Pago** con tu link real
4. ✅ **Actualizar datos de contacto** (WhatsApp, email, Instagram)

## 🌐 Opciones de Hosting

### 1. GitHub Pages (Gratuito)

**Ventajas**: Gratuito, fácil de usar, dominio personalizado
**Desventajas**: Solo sitios estáticos

#### Pasos:
1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona "Deploy from a branch" > "main"
5. Tu sitio estará en: `https://tuusuario.github.io/tu-repositorio`

#### Dominio personalizado:
1. Compra un dominio (ej: `tulamparas3d.com`)
2. En GitHub Pages, agrega tu dominio en Custom domain
3. Configura los DNS de tu dominio

### 2. Vercel (Recomendado)

**Ventajas**: Muy rápido, fácil, dominio personalizado, HTTPS automático
**Desventajas**: Límites en plan gratuito

#### Pasos:
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un sitio estático
5. ¡Despliega! Tu sitio estará en: `https://tu-proyecto.vercel.app`

### 3. Netlify

**Ventajas**: Fácil, formularios nativos, funciones serverless
**Desventajas**: Límites en plan gratuito

#### Pasos:
1. Ve a [netlify.com](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configura el build (no necesario para sitios estáticos)
4. ¡Despliega!

### 4. Hosting Tradicional

Si tienes un hosting tradicional (cPanel, etc.):

1. Sube todos los archivos vía FTP
2. Asegúrate de que `index.html` esté en la raíz
3. Configura SSL/HTTPS si es posible

## ⚙️ Configuración Post-Despliegue

### 1. Configurar Mercado Pago

1. Ve a tu cuenta de Mercado Pago
2. Crea un link de pago para cada producto
3. Actualiza `config.js` con tus links reales:

```javascript
payment: {
    mercadopago: {
        baseUrl: 'https://mpago.la/TU_LINK_REAL',
    }
}
```

### 2. Configurar Google Analytics (Opcional)

1. Crea una cuenta en Google Analytics
2. Obtén tu Tracking ID
3. Actualiza `config.js`:

```javascript
analytics: {
    googleAnalytics: {
        enabled: true,
        trackingId: 'GA_TRACKING_ID'
    }
}
```

### 3. Configurar EmailJS (Opcional)

Para recibir emails automáticamente:

1. Crea cuenta en [EmailJS](https://emailjs.com)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea un template de email
4. Actualiza `config.js`:

```javascript
forms: {
    emailjs: {
        enabled: true,
        serviceId: 'TU_SERVICE_ID',
        templateId: 'TU_TEMPLATE_ID',
        publicKey: 'TU_PUBLIC_KEY'
    }
}
```

## 🔧 Optimizaciones

### 1. Optimizar Imágenes

```bash
# Usar herramientas como:
- TinyPNG (online)
- ImageOptim (Mac)
- GIMP (gratuito)
```

### 2. Configurar Cache

Agrega un archivo `.htaccess` (para Apache):

```apache
# Cache para archivos estáticos
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### 3. Minificar CSS y JS (Opcional)

Para producción, puedes minificar los archivos:
- CSS: [cssminifier.com](https://cssminifier.com)
- JS: [jscompress.com](https://jscompress.com)

## 📱 Testing

Después del despliegue, prueba:

1. ✅ **Responsividad**: Abre en móvil, tablet, desktop
2. ✅ **Formularios**: Envía un pedido de prueba
3. ✅ **Pagos**: Prueba el flujo de pago
4. ✅ **Velocidad**: Usa [PageSpeed Insights](https://pagespeed.web.dev)
5. ✅ **SEO**: Usa [Google Search Console](https://search.google.com/search-console)

## 🚨 Troubleshooting

### Problema: Las imágenes no se ven
**Solución**: Verifica las rutas en `assets/images/`

### Problema: Los formularios no funcionan
**Solución**: Configura EmailJS o Formspree

### Problema: Los pagos no funcionan
**Solución**: Verifica los links de Mercado Pago

### Problema: El sitio es lento
**Solución**: Optimiza las imágenes y habilita cache

## 📞 Soporte

Si tienes problemas:

1. **Revisa la consola del navegador** (F12)
2. **Verifica la configuración** en `config.js`
3. **Consulta la documentación** de la plataforma de hosting
4. **Contacta al soporte** de la plataforma

## 🎉 ¡Listo!

Una vez desplegado, tu página web estará lista para recibir pedidos de lámparas 3D. 

**No olvides**:
- Compartir el link en tus redes sociales
- Agregar el link a tu perfil de Instagram
- Incluir el link en tu WhatsApp Business
- Monitorear los pedidos regularmente

¡Éxito con tu negocio de lámparas 3D! 🏮✨

