Plan 2: Efecto de Subrayado Animado en Navegación y Footer

# Prompt a la IA

"Quiero implementar un efecto de subrayado animado en los enlaces de mi navegación. Cuando el usuario pasa el ratón sobre un enlace, quiero que aparezca una línea debajo que se anime desde la izquierda hacia la derecha. ¿Puedes explicarme diferentes métodos para lograr esto usando CSS, especialmente con pseudo-elementos y transiciones? Necesito entender las opciones disponibles para elegir la que mejor se adapte al estilo visual de mi proyecto."

# Respuesta de la IA (Plan Completo)

Métodos Disponibles para Subrayado Animado
Existen varios enfoques para crear este efecto. Te explico los 3 más comunes y sus ventajas:

## Método 1: Pseudo-elemento ::after con transform (Recomendado)

Ventajas: Performance óptima (usa transform), fácil de controlar dirección

css.nav-link {
position: relative;
text-decoration: none;
display: inline-block;
}

.nav-link::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 2px;
background-color: currentColor;
transform: scaleX(0);
transform-origin: left;
transition: transform 0.3s ease;
}

.nav-link:hover::after {
transform: scaleX(1);
}

Cómo funciona paso a paso:

El pseudo-elemento ::after se posiciona absolutamente debajo del enlace
Inicialmente está oculto con scaleX(0) (ancho = 0)
transform-origin: left hace que la animación empiece desde la izquierda
Al hacer hover, scaleX(1) expande el elemento a su ancho completo
transition suaviza la transformación

## Método 2: Pseudo-elemento con width

Ventajas: Más intuitivo de entender, similar resultado visual

css.nav-link {
position: relative;
text-decoration: none;
display: inline-block;
}

.nav-link::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 0;
height: 2px;
background-color: currentColor;
transition: width 0.3s ease;
}

.nav-link:hover::after {
width: 100%;
}
Diferencia con Método 1: Anima width en lugar de transform. Es más simple pero ligeramente menos performante (width es una propiedad de layout).

## Método 3: Pseudo-elemento con border-bottom

Ventajas: Útil si quieres usar border en lugar de background
css.nav-link {
position: relative;
text-decoration: none;
border-bottom: 2px solid transparent;
transition: border-color 0.3s ease;
}

.nav-link:hover {
border-color: currentColor;
}

Limitación: Este método no tiene animación de "crecimiento", solo cambia el color. Es más simple pero menos dinámico.

## Método 4 (Avanzado): Animación desde el centro

Si quieres que crezca desde el centro hacia los lados:

css.nav-link::after {
content: '';
position: absolute;
bottom: 0;
left: 50%;
width: 0;
height: 2px;
background-color: currentColor;
transform: translateX(-50%);
transition: width 0.3s ease;
}

.nav-link:hover::after {
width: 100%;
}

### Consideraciones Adicionales

- Accesibilidad:
  css/_ Para usuarios que prefieren reducir movimiento _/
  @media (prefers-reduced-motion: reduce) {
  .nav-link::after {
  transition: none;
  }
  }

- Personalización de colores:
  css/_ Usar currentColor hereda el color del texto _/
  .nav-link::after {
  background-color: currentColor;
  }

/_ O especificar un color custom _/
.nav-link::after {
background-color: #ff6b6b;
}
Ajustar timing:
css/_ Más rápido _/
transition: transform 0.2s ease;

/_ Más lento y suave _/
transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

/_ Con delay _/
transition: transform 0.3s ease 0.1s;

## Recomendación Final

Para mejor performance y control: usa el **Método 1** con `transform: scaleX()`. Es el estándar moderno y funciona perfectamente en todos los navegadores actuales.

## Notas de Implementación

1. Método seleccionado: Implementé el Método 1 (pseudo-elemento con transform) por su mejor performance
2. Estructura base: Añadí `position: relative` a los enlaces y creé el pseudo-elemento `::after`
3. Animación: Configuré la transición con `transform: scaleX()` y `transform-origin: left`
4. Accesibilidad: Incluí la media query `prefers-reduced-motion` para usuarios sensibles al movimiento
5. Timing personalizado: Ajusté la duración y easing function para que coincida con el estilo del portfolio

### Adaptaciones personales:

- Experimenté con diferentes duraciones (0.25s, 0.3s, 0.4s) y elegí la que se sentía más natural
- Ajusté el grosor de la línea (`height: 2px`) para que combine con el peso de la tipografía
- Usé `currentColor` para que el subrayado herede automáticamente el color del texto
- Añadí un espaciado inferior mínimo (`bottom: -4px`) para separar visualmente el subrayado del texto
- Probé la animación en diferentes tamaños de pantalla y ajusté según necesidad

### Archivos modificados:

- components.css (sección de navegación)
