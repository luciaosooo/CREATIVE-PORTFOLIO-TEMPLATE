# Prompt a la IA

"Necesito implementar un sistema de filtrado de proyectos en mi portfolio. Tengo una galería de proyectos con diferentes categorías (web, branding, photography, etc.) y necesito que los usuarios puedan filtrar los proyectos haciendo clic en botones de categoría. ¿Puedes explicarme conceptualmente y paso a paso cómo podría implementar esta funcionalidad usando JavaScript vanilla? Necesito entender la lógica completa antes de implementarlo."

# Respuesta de la IA

(Plan Completo)Concepto GeneralEl sistema de filtrado funciona mediante la manipulación del DOM basándose en atributos de datos (data attributes). La idea es:

- Asignar categorías a cada proyecto mediante atributos data-category
- Detectar clics en los botones de filtro
- Mostrar/ocultar proyectos según la categoría seleccionada
- Proporcionar feedback visual sobre qué filtro está activo
- Estructura HTML Recomendadahtml

<!-- Botones de filtro -->
<div class="filter-buttons">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="web">Web</button>
  <button class="filter-btn" data-filter="branding">Branding</button>
  <button class="filter-btn" data-filter="photography">Photography</button>
</div>

<!-- Proyectos -->
<div class="projects-grid">
  <div class="project-item" data-category="web">...</div>
  <div class="project-item" data-category="branding">...</div>
  <div class="project-item" data-category="photography">...</div>
</div>

### Implementación JavaScript Paso a Paso

## Paso 1: Seleccionar elementos del DOM

javascriptconst filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

## Paso 2: Agregar event listeners a los botones

javascriptfilterButtons.forEach(button => {
button.addEventListener('click', () => {
const filterValue = button.getAttribute('data-filter');
filterProjects(filterValue);
updateActiveButton(button);
});
});

## Paso 3: Función principal de filtrado

javascriptfunction filterProjects(category) {
projectItems.forEach(item => {
const itemCategory = item.getAttribute('data-category');

    if (category === 'all' || itemCategory === category) {
      item.style.display = 'block'; // o la clase que uses
      // Opcional: añadir animación
      item.classList.add('fade-in');
    } else {
      item.style.display = 'none';
      item.classList.remove('fade-in');
    }

});
}

## Paso 4: Actualizar estado visual de los botones

javascriptfunction updateActiveButton(activeButton) {
filterButtons.forEach(btn => {
btn.classList.remove('active');
});
activeButton.classList.add('active');
}

## Consideraciones de Mejora

- Animaciones suaves: Usar CSS transitions para fade in/out
- Accesibilidad: Agregar aria-pressed a los botones activos
- Performance: Si tienes muchos proyectos, considera usar clases CSS en lugar de display: block/none
- URLs amigables: Opcionalmente, actualizar la URL con el filtro seleccionado usando URLSearchParams
- Alternativa con Clases CSS (Recomendado)En lugar de manipular display directamente:
  javascriptfunction filterProjects(category) {
  projectItems.forEach(item => {
  const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.classList.remove('hidden');
        item.classList.add('visible');
      } else {
        item.classList.add('hidden');
        item.classList.remove('visible');
      }
  });
  }
  Y en CSS:
  css.project-item.hidden {
  display: none;
  opacity: 0;
  }

.project-item.visible {
display: block;
opacity: 1;
transition: opacity 0.3s ease;
}

## Notas de ImplementaciónLo que se implementó del plan:

✅ Estructura HTML: Seguí la estructura recomendada usando data-filter en botones y data-category en proyectos
✅ Lógica de filtrado: Implementé la función principal de filtrado adaptada a mi estructura de grid
✅ Gestión de estado activo: Creé la función updateActiveButton para gestionar visualmente qué filtro está seleccionado
✅ Enfoque con clases CSS: Opté por el método de clases CSS en lugar de manipular display directamente para mejores animaciones
✅ Animaciones: Añadí transiciones CSS para fade in/out suaves

## Adaptaciones personales:

- Ajusté los nombres de las categorías a las específicas de mi portfolio
- Integré el sistema con mi layout de CSS Grid existente
- Añadí un contador de proyectos visibles en cada categoría
- Revisé y entendí completamente cada línea antes de incluirla en el código final

## Archivos modificados:

index.html (estructura de filtros y data attributes)
script.js (lógica de filtrado)
components.css (estilos para estados hidden/visible y animaciones)
