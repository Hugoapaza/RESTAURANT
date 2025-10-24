# 🍔 Feane - Restaurante de Comida Rápida

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Descripción del Proyecto

Feane es un sitio web moderno para un restaurante de comida rápida que ofrece hamburguesas, pizzas, pastas y papas fritas. El sitio permite a los clientes explorar el menú, hacer reservas de mesa y realizar pedidos en línea.

## 🎯 Objetivos

- Crear una presencia digital atractiva para el restaurante
- Facilitar las reservas de mesa de forma online
- Mostrar el menú completo con sistema de filtros
- Implementar carrito de compras para pedidos
- Ofrecer una experiencia responsive en todos los dispositivos

## 👥 Audiencia Objetivo

- Clientes locales que buscan comida rápida de calidad
- Familias y grupos que desean reservar mesa
- Jóvenes adultos que prefieren ordenar online
- Turistas buscando opciones gastronómicas

## 🗂️ Estructura del Sitio

```
feane-restaurant/
├── index.html          # Página principal
├── menu.html           # Menú completo
├── about.html          # Sobre nosotros
├── book.html           # Reservar mesa
├── css/
│   ├── bootstrap.css
│   ├── style.css
│   ├── responsive.css
│   └── font-awesome.min.css
├── js/
│   ├── jquery-3.4.1.min.js
│   ├── bootstrap.js
│   └── custom.js       # ⭐ JavaScript personalizado
├── images/
│   ├── hero-bg.jpg
│   ├── f1.png - f9.png
│   ├── o1.jpg, o2.jpg
│   └── about-img.png
└── README.md
```

## 🚀 Funcionalidades Implementadas

### ✅ Completadas

1. **Navegación Responsive**
   - Menú hamburguesa para móviles
   - Navegación suave entre secciones

2. **Carrusel de Imágenes**
   - Slider automático en página principal
   - Indicadores de navegación

3. **Sistema de Filtros de Menú**
   - Filtrado por categorías (Todo, Hamburguesas, Pizzas, Pastas, Papas)
   - Animaciones con Isotope.js

4. **Formulario de Reserva**
   - ✨ Validación completa en tiempo real
   - ✨ Mensajes de error personalizados
   - ✨ Guardado en localStorage
   - ✨ Notificaciones de confirmación

5. **Carrito de Compras** ⭐ NUEVO
   - Agregar productos al carrito
   - Aumentar/disminuir cantidades
   - Eliminar productos
   - Cálculo automático de total
   - Persistencia en localStorage
   - Badge con contador de items

6. **Modo Oscuro** ⭐ NUEVO
   - Alternancia entre tema claro y oscuro
   - Preferencia guardada en localStorage
   - Botón flotante para cambiar

7. **Sistema de Notificaciones**
   - Alertas visuales para acciones del usuario
   - Tipos: info, success, error, warning

8. **Integración de Google Maps**
   - Mapa interactivo con ubicación del restaurante

9. **Testimonios de Clientes**
   - Carrusel de reseñas con Owl Carousel

10. **SEO Básico**
    - Meta tags configurados
    - Estructura semántica HTML5

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **Bootstrap 4.x** - Framework responsive
- **JavaScript ES6** - Funcionalidad dinámica
- **jQuery 3.4.1** - Manipulación DOM

### Librerías y Plugins
- **Owl Carousel 2.3.4** - Carruseles
- **Isotope Layout 3.0.4** - Filtros de menú
- **Nice Select 1.1.0** - Selectores personalizados
- **Font Awesome** - Iconos
- **Popper.js** - Tooltips y popovers
- **Google Maps API** - Mapas interactivos

## 📦 Instalación

### Requisitos Previos
- Navegador web moderno
- Servidor web local (opcional: Live Server, XAMPP, etc.)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/feane-restaurant.git
cd feane-restaurant
```

2. **Abrir con Live Server**
   - Instalar extensión "Live Server" en VS Code
   - Click derecho en `index.html` → "Open with Live Server"

3. **O usar servidor local**
```bash
# Con Python
python -m http.server 8000

# Con PHP
php -S localhost:8000

# Con Node.js (http-server)
npx http-server
```

4. **Acceder al sitio**
   - Navegar a `http://localhost:8000`

## 🔧 Configuración

### Google Maps API

1. Obtener API Key en [Google Cloud Console](https://console.cloud.google.com/)
2. Reemplazar en todos los archivos HTML:

```html
<!-- Cambiar ESTA línea -->
<script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=myMap"></script>
```

3. Configurar restricciones de dominio en Google Cloud Console

### Personalización de Coordenadas

En `custom.js`, línea 50:
```javascript
var mapProp = {
    center: new google.maps.LatLng(-12.0464, -77.0428), // TUS COORDENADAS
    zoom: 15,
};
```

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🎨 Personalización

### Colores Principales

```css
:root {
  --primary-color: #ffbe33;    /* Naranja/Dorado */
  --secondary-color: #222222;  /* Negro */
  --text-color: #ffffff;       /* Blanco */
  --bg-dark: #0a0a0a;         /* Fondo oscuro */
}
```

### Fuentes

- **Headings**: Dancing Script, cursive
- **Body**: Roboto, sans-serif

## 📊 Base de Datos (Futuro)

### Estructura Propuesta

```sql
-- Tabla de reservas
CREATE TABLE reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    persons INT,
    date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    description TEXT,
    image VARCHAR(255),