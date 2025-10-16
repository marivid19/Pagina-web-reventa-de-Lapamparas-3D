// ===== SITE_CONFIGURACIÓN Y DATOS =====

// Base de datos de productos (puedes expandir esto)
const PRODUCTS = [
    {
        id: 1,
        name: 'Lámpara Minimalista',
        description: 'Diseño limpio y moderno, perfecta para cualquier ambiente. Ideal para dormitorios y salas de estar.',
        price: 15000,
        image: null, // null = usar placeholder
        category: 'moderna',
        available: true
    },
    {
        id: 2,
        name: 'Lámpara Geométrica',
        description: 'Formas geométricas únicas que crean patrones de luz fascinantes. Un verdadero punto focal.',
        price: 18000,
        image: null,
        category: 'geometrica',
        available: true
    },
    {
        id: 3,
        name: 'Lámpara Personalizada',
        description: 'Completamente personalizable con tu nombre, frase favorita o diseño único. ¡Hazla tuya!',
        price: 22000,
        image: null,
        category: 'personalizada',
        available: true
    },
    {
        id: 4,
        name: 'Lámpara Vintage',
        description: 'Estilo retro con un toque moderno. Perfecta para crear ambientes cálidos y acogedores.',
        price: 16000,
        image: null,
        category: 'vintage',
        available: true
    },
    {
        id: 5,
        name: 'Lámpara Industrial',
        description: 'Diseño industrial robusto, ideal para espacios modernos y minimalistas.',
        price: 20000,
        image: null,
        category: 'industrial',
        available: true
    },
    {
        id: 6,
        name: 'Lámpara Artística',
        description: 'Pieza de arte funcional. Cada lámpara es única y cuenta una historia diferente.',
        price: 25000,
        image: null,
        category: 'artistica',
        available: true
    }
];

// ===== VARIABLES GLOBALES =====
let currentOrder = null;
let selectedProduct = null;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadProducts();
    setupModals();
    setupForms();
    setupSmoothScrolling();
    console.log('✅ Aplicación inicializada correctamente');
}

// ===== NAVEGACIÓN =====
function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cambiar enlace activo al hacer scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== CARGA DE PRODUCTOS =====
function loadProducts() {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    PRODUCTS.forEach(product => {
        const productCard = createProductCard(product);
        catalogGrid.appendChild(productCard);
    });

    console.log(`✅ Cargados ${PRODUCTS.length} productos`);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-up';
    card.innerHTML = `
        <div class="product-image">
            ${product.image ? 
                `<img src="${product.image}" alt="${product.name}">` : 
                `<div class="product-placeholder">
                    <i class="fas fa-lightbulb"></i>
                    <p>Imagen de ${product.name}</p>
                </div>`
            }
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toLocaleString('es-AR')}</div>
            <div class="product-actions">
                <button class="btn-order" onclick="openOrderModal(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Encargar
                </button>
            </div>
        </div>
    `;

    return card;
}

// ===== MODALES =====
function setupModals() {
    const orderModal = document.getElementById('order-modal');
    const paymentModal = document.getElementById('payment-modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const cancelButton = document.getElementById('cancel-order');

    // Cerrar modales con X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Cerrar modales haciendo click fuera
    [orderModal, paymentModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal(this);
                }
            });
        }
    });

    // Botón cancelar pedido
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            closeModal(orderModal);
        });
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal:not([style*="display: none"])');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });
}

function openModal(modal) {
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ===== FORMULARIO DE PEDIDO =====
function openOrderModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;
    const modal = document.getElementById('order-modal');
    const productSelect = document.getElementById('product-model');

    // Llenar el select de productos
    if (productSelect) {
        productSelect.innerHTML = '<option value="">Selecciona un modelo</option>';
        PRODUCTS.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = p.name;
            option.selected = p.id === productId;
            productSelect.appendChild(option);
        });
    }

    // Actualizar resumen
    updateOrderSummary();

    // Abrir modal
    openModal(modal);
}

function updateOrderSummary() {
    const modelSelect = document.getElementById('product-model');
    const summaryModel = document.getElementById('summary-model');
    const summaryTotal = document.getElementById('summary-total');
    const summaryDeposit = document.getElementById('summary-deposit');

    if (!modelSelect || !summaryModel || !summaryTotal || !summaryDeposit) return;

    const selectedId = parseInt(modelSelect.value);
    const product = PRODUCTS.find(p => p.id === selectedId);

    if (product) {
        summaryModel.textContent = product.name;
        summaryTotal.textContent = `$${product.price.toLocaleString('es-AR')}`;
        summaryDeposit.textContent = `$${Math.round(product.price * 0.5).toLocaleString('es-AR')}`;
    } else {
        summaryModel.textContent = '-';
        summaryTotal.textContent = '$0';
        summaryDeposit.textContent = '$0';
    }
}

// ===== SITE_CONFIGURACIÓN DE FORMULARIOS =====
function setupForms() {
    setupOrderForm();
    setupContactForm();
}

function setupOrderForm() {
    const orderForm = document.getElementById('order-form');
    const productSelect = document.getElementById('product-model');

    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
    }

    if (productSelect) {
        productSelect.addEventListener('change', updateOrderSummary);
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// ===== MANEJO DE ENVÍO DE FORMULARIOS =====
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderData = {
        customer: {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address')
        },
        product: {
            id: parseInt(formData.get('model')),
            customization: formData.get('customization')
        },
        timestamp: new Date().toISOString()
    };

    // Validar datos
    if (!validateOrderData(orderData)) {
        return;
    }

    // Obtener producto seleccionado
    const product = PRODUCTS.find(p => p.id === orderData.product.id);
    if (!product) {
        showNotification('Error: Producto no encontrado', 'error');
        return;
    }

    // Crear pedido completo
    currentOrder = {
        ...orderData,
        product: {
            ...orderData.product,
            name: product.name,
            price: product.price
        },
        deposit: Math.round(product.price * 0.5),
        total: product.price
    };

    // Cerrar modal de pedido y abrir modal de pago
    closeModal(document.getElementById('order-modal'));
    openPaymentModal();
    
    console.log('✅ Pedido creado:', currentOrder);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };

    // Aquí puedes implementar el envío del formulario de contacto
    // Por ejemplo, usando EmailJS, Formspree, o tu propio backend
    
    showNotification('Mensaje enviado correctamente. Te responderemos pronto.', 'success');
    e.target.reset();
    
    console.log('✅ Mensaje de contacto:', contactData);
}

// ===== VALIDACIÓN =====
function validateOrderData(orderData) {
    const required = ['name', 'email', 'phone', 'address'];
    
    for (let field of required) {
        if (!orderData.customer[field] || orderData.customer[field].trim() === '') {
            showNotification(`Por favor completa el campo: ${getFieldLabel(field)}`, 'error');
            return false;
        }
    }

    if (!orderData.product.id) {
        showNotification('Por favor selecciona un modelo', 'error');
        return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderData.customer.email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return false;
    }

    return true;
}

function getFieldLabel(field) {
    const labels = {
        name: 'Nombre completo',
        email: 'Email',
        phone: 'Teléfono/WhatsApp',
        address: 'Dirección'
    };
    return labels[field] || field;
}

// ===== MODAL DE PAGO =====
function openPaymentModal() {
    if (!currentOrder) return;

    const modal = document.getElementById('payment-modal');
    const customerSpan = document.getElementById('payment-customer');
    const modelSpan = document.getElementById('payment-model');
    const customizationSpan = document.getElementById('payment-customization');
    const amountSpan = document.getElementById('payment-amount');
    const mercadopagoLink = document.getElementById('mercadopago-link');

    // Llenar información del pago
    if (customerSpan) customerSpan.textContent = currentOrder.customer.name;
    if (modelSpan) modelSpan.textContent = currentOrder.product.name;
    if (customizationSpan) {
        customizationSpan.textContent = currentOrder.product.customization || 'Sin personalización';
    }
    if (amountSpan) {
        amountSpan.textContent = `$${currentOrder.deposit.toLocaleString('es-AR')}`;
    }

    // SITE_CONFIGurar link de Mercado Pago
    if (mercadopagoLink) {
        // Aquí deberías generar un link real de Mercado Pago
        // Por ahora usamos un placeholder
        const paymentUrl = generateMercadoPagoLink();
        mercadopagoLink.href = paymentUrl;
    }

    openModal(modal);
}

function generateMercadoPagoLink() {
    if (!currentOrder) return '#';
    
    // Esta es una implementación de ejemplo
    // En producción, deberías usar la API de Mercado Pago para generar links reales
    const params = new URLSearchParams({
        amount: currentOrder.deposit,
        description: `Seña - ${currentOrder.product.name}`,
        customer: currentOrder.customer.name,
        email: currentOrder.customer.email
    });
    
    return `${SITE_CONFIG.mercadopago.baseUrl}?${params.toString()}`;
}

// ===== SCROLL SUAVE =====
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 70; // Altura del header fijo
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-family: var(--font-primary);
    `;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// ===== FUNCIONES DE UTILIDAD =====
function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INTEGRACIÓN CON SERVICIOS EXTERNOS =====

// Función para enviar datos a Google Sheets (opcional)
async function sendToGoogleSheets(data) {
    // Esta función requeriría SITE_CONFIGuración adicional
    // Puedes usar Google Apps Script o una API personalizada
    console.log('Enviando a Google Sheets:', data);
    
    // Ejemplo de implementación:
    /*
    try {
        const response = await fetch('TU_GOOGLE_APPS_SCRIPT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            showNotification('Pedido registrado correctamente', 'success');
        } else {
            throw new Error('Error al enviar datos');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error al registrar el pedido', 'error');
    }
    */
}

// Función para enviar email (opcional)
async function sendEmail(data) {
    // Esta función requeriría un servicio como EmailJS
    console.log('Enviando email:', data);
    
    // Ejemplo con EmailJS:
    /*
    try {
        await emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
            to_email: 'tu-email@ejemplo.com',
            customer_name: data.customer.name,
            customer_email: data.customer.email,
            product_name: data.product.name,
            total_amount: data.total,
            deposit_amount: data.deposit,
            customization: data.product.customization
        });
        
        showNotification('Email enviado correctamente', 'success');
    } catch (error) {
        console.error('Error al enviar email:', error);
        showNotification('Error al enviar email', 'error');
    }
    */
}

// ===== SITE_CONFIGURACIÓN DE DESARROLLO =====
if (typeof window !== 'undefined') {
    // Exponer funciones globales para debugging
    window.Lamparas3D = {
    CONFIG: SITE_CONFIG,
    PRODUCTS,
    currentOrder,
    selectedProduct,
    showNotification,
    openOrderModal,
    openPaymentModal
};
    
    console.log('🔧 Modo desarrollo activado. Usa window.Lamparas3D para debugging.');
}

// ===== MANEJO DE ERRORES GLOBALES =====
window.addEventListener('error', function(e) {
    console.error('Error global:', e.error);
    showNotification('Ha ocurrido un error inesperado', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rechazada:', e.reason);
    showNotification('Error en la aplicación', 'error');
});

console.log('🚀 Script de Lámparas 3D cargado correctamente');

