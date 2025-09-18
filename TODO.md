# Crandy Films - Development Plan

Este archivo detalla las fases de desarrollo, las tareas y los endpoints de la API de TMDB que se utilizarán.

### API Base URL
- **API:** `https://api.themoviedb.org/3`
- **Images:** `https://image.tmdb.org/t/p/` (e.g., `w500`, `original`)

---

### Fase 1: Estructura y UI Principal (Layout)

- [ ] **Crear estructura de carpetas:**
    - `src/services/` para la lógica de la API.
    - `src/modules/` para agrupar componentes por feature.
    - `src/components/` para UI reutilizable (layout, ui).
    - `src/lib/` para hooks, types, etc.
- [ ] **Diseñar y crear el `Header`:**
    - Componente `Header` en `src/components/layout/Header.tsx`.
    - Incluir logo, links de navegación (Home, Series, Películas) y menú de usuario (Profile, Settings).
    - Animar la aparición del Header.
- [ ] **Diseñar y crear el `Footer`:**
    - Componente `Footer` en `src/components/layout/Footer.tsx`.
    - Incluir links a redes sociales, información de la API, etc.
- [ ] **Integrar Layout en `src/app/layout.tsx`:**
    - Añadir `Header` y `Footer` para que sean visibles en todas las páginas.

---

### Fase 2: Página Principal (Home)

- [ ] **Sección Héroe (Hero Section):**
    - Mostrar una película o serie destacada.
    - **Endpoint:** `GET /trending/movie/day` para obtener el item más popular.
    - **Componente:** `src/modules/home/components/Hero.tsx`.
- [ ] **Carrusel de "Trending":**
    - Mostrar las películas y series más populares de la semana.
    - **Endpoint:** `GET /trending/all/week`.
    - **Componente:** `src/modules/home/components/TrendingCarousel.tsx`.
- [ ] **Carrusel de "Top Rated":**
    - Mostrar las películas mejor calificadas.
    - **Endpoint:** `GET /movie/top_rated`.
    - **Componente:** `src/modules/home/components/TopRatedCarousel.tsx`.
- [ ] **Componente `MovieCard`:**
    - Tarjeta reutilizable para mostrar el póster, título y calificación.
    - **Componente:** `src/components/ui/MovieCard.tsx`.
- [ ] **Servicio de API para Home:**
    - Crear funciones en `src/services/tmdb.ts` para llamar a los endpoints de esta fase.

---

### Fase 3: Página de Detalles

- [ ] **Crear Ruta Dinámica:**
    - `src/app/movie/[id]/page.tsx`.
- [ ] **Obtener Detalles de la Película:**
    - Mostrar información detallada: título, sinopsis, fecha de estreno, calificación, géneros.
    - **Endpoint:** `GET /movie/{movie_id}`.
- [ ] **Mostrar Reparto (Créditos):**
    - Crear una sección para mostrar los actores principales.
    - **Endpoint:** `GET /movie/{movie_id}/credits`.
    - **Componente:** `src/modules/details/components/CastSection.tsx`.
- [ ] **Mostrar Películas Relacionadas:**
    - Carrusel con películas recomendadas.
    - **Endpoint:** `GET /movie/{movie_id}/recommendations`.
    - **Componente:** `src/modules/details/components/RelatedMovies.tsx`.
- [ ] **Servicio de API para Detalles:**
    - Añadir las nuevas funciones al servicio `src/services/tmdb.ts`.

---

### Fase 4: Funcionalidades de Usuario (UI)

- [ ] **Botones de Acción:**
    - Añadir botones (Favorito, Watchlist) a `MovieCard` y a la página de detalles.
- [ ] **Contexto de Usuario:**
    - Crear un `UserContext` para manejar un estado simulado de la lista de favoritos y watchlist.
    - **Hook:** `src/lib/hooks/useUser.ts`.
- [ ] **Página de Perfil (Placeholder):**
    - Crear una página simple en `src/app/profile/page.tsx`.
- [ ] **Página de Configuración (Placeholder):**
    - Crear una página simple en `src/app/settings/page.tsx`.

---

### Fase 5: Búsqueda

- [ ] **Input de Búsqueda en el Header.**
- [ ] **Página de Resultados de Búsqueda:**
    - Crear ruta `src/app/search/page.tsx`.
    - **Endpoint:** `GET /search/multi` (para buscar películas, series y personas).
- [ ] **Servicio de API para Búsqueda.**
