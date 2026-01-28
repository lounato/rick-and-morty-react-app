# Rick and Morty React App

Aplicación desarrollada en React que consume la API pública de Rick y Morty (https://rickandmortyapi.com/documentation).

Permite listar, filtrar y visualizar información detallada de los personajes de la serie, así como marcarlos como favoritos.

## Instrucciones para ejecutar el proyecto

### Requisitos
- Node.js (v16 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto
```
git clone https://github.com/lounato/rick-and-morty-react-app.git
cd rick-and-morty-app
npm install
npm run dev
```
La aplicación estará disponible en http://localhost:5173/.

## Arquitectura y decisiones técnicas

La aplicación sigue una arquitectura basada en componentes, para asegurar mantenibilidad y escalabilidad.

### Estructura del proyecto
```
rick-and-morty-app/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ assets/images/ # Imágenes
│  │  └─ empty-heart.png
│  │  └─ full-heart.png
│  │  └─ logo.svg
│  │  └─ rick-sanchez.png
│  ├─ components/ # Componentes reutilizables
│  │  ├─ character-card/
│  │  │	 └─ CharacterCard.jsx
│  │  │	 └─ CharacterCard.scss
│  │  ├─ character-list/
│  │  │	 └─ CharacterList.jsx
│  │  │	 └─ CharacterList.scss
│  │  ├─ character-modal/
│  │  │	 └─ CharacterModal.jsx
│  │  │	 └─ CharacterModal.scss
│  │  ├─ favorite-button/
│  │  │  └─ FavoriteButton.jsx
│  │  │	 └─ FavoriteButton.scss
│  │  ├─ filters/
│  │  │  └─ Filters.jsx
│  │  │	 └─ Filters.scss
│  │  ├─ navbar/
│  │  │  └─ Navbar.jsx
│  │  │	 └─ Navbar.scss
│  │  ├─ searchbar/
│  │  │  └─ Searchbar.jsx
│  │  │	 └─ Searchbar.scss
│  ├─ contexts/ # Context API
│  │  └─ FavoriteContext.jsx
│  │  └─ FiltersContext.jsx
│  ├─ hooks/ # Hooks personalizados
│  │  └─ useFavorites.js
│  │  └─ useFetch.js
│  │  └─ useFilters.js
│  ├─ pages/ # Vistas principales
│  │  ├─ favorites-page/
│  │  │  └─ FavoritesPage.jsx
│  │  │	 └─ FavoritesPage.scss
│  │  ├─ home-page/
│  │  │  └─ HomePage.jsx
│  │  │	 └─ HomePage.scss
│  ├─ App.jsx
│  ├─ App.scss
│  ├─ index.scss
│  └─ main.jsx
├─ package.json
├─ index.html
├─ README.md
└─ vite.config.js
```

### Decisiones técnicas
- <ins>Context API</ins>: Utilizada para manejar estados globales como filtros y favoritos, evitando prop drilling y mejorando la organización del estado.
- <ins>Hook personalizado</ins> `useFetch`: Centraliza la lógica de llamadas a la API:
  - Manejo de estados (loading, error, data)
  - Reutilización
  - Mantenimiento más sencillo
- <ins>Componentización por páginas</ins>: Cada página se compone de componentes pequeños y enfocados en una sola responsabilidad.
- <ins>Paginación</ins>: Implementada mediante la librería `react-paginate` para una navegación eficiente entre resultados.
- <ins>Navegación</ins>: Implementada mediante la librería `react-router-dom`, se utiliza para manejar el enrutamiento de la aplicación, permitiendo separar vistas por páginas, facilitar la escalabilidad y mejorar el mantenimiento del código.

### Funcionalidades
- Listado de personajes.
- Barra de búsqueda por nombre, especie o estado de los personajes.
- Modal con información más detallada del personaje seleccionado.
- Marcar personajes favoritos.

## Mejoras y extensiones futuras

### Funcionalidades
- Filtros combinados (nombre + especie + estado).
- Nuevos tipos de filtros (selects, dropdowns, etc.).
- Diseño responsive para dispositivos móviles y tablets.
- Persistencia de favoritos (localStorage o backend).
- Autenticación de usuarios y perfiles personalizados.

### Técnicas / Arquitectura
- Uso de Redux o Redux Toolkit para mayor escalabilidad.
- Lazy loading de componentes y rutas.
- Creación de componentes UI reutilizables (botones, inputs, modales).
- Tests unitarios y de integración.
- Configuración de entornos: desarrollo, preproducción, producción.


