// ===== CONFIGURACIÓN DEL SITIO WEB =====
// Este archivo contiene todas las configuraciones personalizables del sitio

const SITE_CONFIG = {
    // Información básica del sitio
    site: {
        name: 'Lámparas 3D Artesanales',
        tagline: 'Diseños personalizados impresos a pedido',
        description: 'Transformamos tus ideas en lámparas únicas. Cada pieza es diseñada y fabricada especialmente para ti.',
        url: 'https://tu-dominio.com', // Cambiar por tu dominio real
        logo: 'assets/images/logo.png' // Ruta al logo (opcional)
    },

    // Información de contacto
    contact: {
        whatsapp: '+54 9 2954232772', // Cambiar por tu número real
        instagram: '@pil3d', // Cambiar por tu Instagram
        email: 'juanbf2009@gmail.com', // Cambiar por tu email real
        address: 'Santa Rosa, La Pampa, Argentina', // Opcional
        businessHours: 'Lunes a Viernes: 9:00 - 17:00' // Opcional
    },

    // Configuración de pagos
    payment: {
        // Mercado Pago
        mercadopago: {
            enabled: true,
            baseUrl: 'https://mpago.la/piljuanbautista.mp', // Cambiar por tu link real
            // Para implementación completa, necesitarías:
            // accessToken: 'TU_ACCESS_TOKEN',
            // publicKey: 'TU_PUBLIC_KEY',
            // preferenceId: 'TU_PREFERENCE_ID'
        },
        
        // Otros métodos de pago (para futuras implementaciones)
        otherMethods: {
            transferencia: false,
            efectivo: false,
            tarjeta: false
        }
    },

    // Configuración de pedidos
    orders: {
        depositPercentage: 50, // Porcentaje de seña
        currency: 'ARS', // Moneda
        currencySymbol: '$',
        minOrderValue: 10000, // Valor mínimo de pedido
        maxOrderValue: 100000, // Valor máximo de pedido
        estimatedDeliveryDays: 7, // Días estimados de entrega
        nonRefundableDeposit: true // Seña no reembolsable
    },

    // Configuración de productos
    products: {
        defaultImage: 'assets/images/placeholder.jpg', // Imagen por defecto
        imagePath: 'assets/images/productos/', // Ruta de imágenes
        categories: [
            'moderna',
            'geometrica', 
            'personalizada',
            'vintage',
            'industrial',
            'artistica'
        ]
    },

    // Configuración de formularios
    forms: {
        // EmailJS (para envío de emails)
        emailjs: {
            enabled: false, // Cambiar a true si usas EmailJS
            serviceId: 'TU_SERVICE_ID',
            templateId: 'TU_TEMPLATE_ID',
            publicKey: 'TU_PUBLIC_KEY'
        },
        
        // Google Sheets (para guardar pedidos)
        googleSheets: {
            enabled: false, // Cambiar a true si usas Google Sheets
            scriptUrl: 'TU_GOOGLE_APPS_SCRIPT_URL'
        },
        
        // Formspree (alternativa para formularios)
        formspree: {
            enabled: false, // Cambiar a true si usas Formspree
            endpoint: 'https://formspree.io/f/TU_FORM_ID'
        }
    },

    // Configuración de redes sociales
    social: {
        facebook: '', // URL de tu página de Facebook
        instagram: 'https://instagram.com/tu-instagram', // Cambiar por tu Instagram
        tiktok: '', // URL de tu TikTok
        youtube: '', // URL de tu canal de YouTube
        pinterest: '' // URL de tu Pinterest
    },

    // Configuración de analytics
    analytics: {
        googleAnalytics: {
            enabled: false, // Cambiar a true si usas Google Analytics
            trackingId: 'GA_TRACKING_ID'
        },
        facebookPixel: {
            enabled: false, // Cambiar a true si usas Facebook Pixel
            pixelId: 'FB_PIXEL_ID'
        }
    },

    // Configuración de SEO
    seo: {
        keywords: [
            'lamparas 3d',
            'impresion 3d',
            'lamparas personalizadas',
            'decoracion hogar',
            'iluminacion artesanal',
            'lamparas unicas'
        ],
        author: 'Tu Nombre',
        ogImage: 'assets/images/og-image.jpg' // Imagen para redes sociales
    },

    // Configuración de desarrollo
    development: {
        debug: true, // Cambiar a false en producción
        showConsoleLogs: true, // Cambiar a false en producción
        enableHotReload: true // Para desarrollo local
    }
};

// ===== FUNCIONES DE CONFIGURACIÓN =====

// Función para obtener configuración
function getConfig(section, key = null) {
    if (key) {
        return SITE_CONFIG[section]?.[key];
    }
    return SITE_CONFIG[section];
}

// Función para actualizar configuración
function updateConfig(section, key, value) {
    if (SITE_CONFIG[section]) {
        SITE_CONFIG[section][key] = value;
    }
}

// Función para validar configuración
function validateConfig() {
    const required = [
        'contact.whatsapp',
        'contact.email',
        'payment.mercadopago.baseUrl'
    ];
    
    const missing = [];
    
    required.forEach(path => {
        const [section, key] = path.split('.');
        if (!getConfig(section, key)) {
            missing.push(path);
        }
    });
    
    if (missing.length > 0) {
        console.warn('⚠️ Configuración faltante:', missing);
        return false;
    }
    
    return true;
}

// ===== INICIALIZACIÓN =====
if (typeof window !== 'undefined') {
    // Exponer configuración globalmente para debugging
    window.SITE_CONFIG = SITE_CONFIG;
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
    
    // Validar configuración al cargar
    if (getConfig('development', 'debug')) {
        console.log('🔧 Configuración cargada:', SITE_CONFIG);
        validateConfig();
    }
}

// Exportar para uso en módulos (si se usa bundling)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        getConfig,
        updateConfig,
        validateConfig
    };
}


