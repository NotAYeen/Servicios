# ESPECIFICACIONES DE IDENTIDAD VISUAL Y DISEÑO — ANTONIO ALBARRAN

Este documento detalla el sistema de diseño, la identidad visual, la dirección tipográfica y los lineamientos arquitectónicos del portafolio web de **Antonio Albarran** (*Software Engineer & Creative Technologist*).

---

## 1. Concepto de Marca y Posicionamiento

* **Nombre de Marca / Firma:** Antonio Albarran
* **Título Profesional:** Software Engineer & Creative Technologist
* **Eslogan Conceptual:** *"Sistemas robustos, interfaces fluidas."*
* **Filosofía de Diseño:** Fusión entre el rigor de ingeniería de alto rendimiento (ejecución *client-side* con WebAssembly, arquitecturas sin latencia) y la expresión creativa vanguardista inspirada en el movimiento *Swiss-Monospace* y el diseño editorial de alta gama.

---

## 2. Paleta de Colores (Modo Oscuro & Tono Editorial)

Se prescinde del negro puro (`#000000`) para evitar fatiga visual y proyectar una estética *premium* basada en carbones profundos y grises neutros de alta precisión.

| Rol Cromático | Código Hex | Aplicación en la Interfaz |
| :--- | :--- | :--- |
| **Carbón Profundo (Fondo 1)** | `#0A0B0E` / `#0D0E11` | Canvas general, sección hero y bloques principales de código. |
| **Gris Glitch / Superficie** | `#1A1B20` / `#161F30` | Tarjetas de proyectos (Bento grid), contenedores modales, terminales. |
| **Hueso / Papel (Fondo 2)** | `#E8E6DF` / `#F3F4F6` | Secciones de contraste editorial y bloques de transición invertidos. |
| **Texto Tiza (Principal)** | `#F3F4F6` / `#E4E4E7` | Títulos de alto impacto, encabezados y elementos interactivos activos. |
| **Zinc Técnico (Secundario)**| `#A1A1AA` / `#71717A` | Descripciones secundarias, metadatos, marcas de agua ASCII. |
| **Acento Esmeralda (Estado)**| `#10B981` | Indicador de disponibilidad en vivo (`ONLINE` / `Disponible`). |

---

## 3. Tipografía y Jerarquía

Se utiliza una combinación tipográfica rigurosa para equilibrar la legibilidad web con la estética de consola y diseño editorial suizo:

1. **Titulares y Encabezados (Display):**
   * **Familia:** `Space Grotesk` (Fallback: `Inter`, `sans-serif`)
   * **Pesos:** `Bold` (700) / `Medium` (500)
   * **Uso:** Títulos principales del Hero, nombres de proyectos en cajas Bento y llamadas a la acción (*CTAs*). Caracterizado por su estructura geométrica limpia y de gran impacto visual.
2. **Cuerpo de Texto y Descripciones:**
   * **Familia:** `Inter` (Fallback: `sans-serif`)
   * **Pesos:** `Light` (300) / `Regular` (400) / `Medium` (500)
   * **Uso:** Párrafos de biografía, descripciones técnicas de los proyectos, notas al pie y textos de interfaz fluidos.
3. **Código, Insignias y Metadatos (Monospace):**
   * **Familia:** `JetBrains Mono` (Fallback: `monospace`)
   * **Pesos:** `Regular` (400) / `Bold` (700)
   * **Uso:** Etiquetas de stack tecnológico (`React 19`, `WASM`, `Python`), comandos del chat Taskii, coordenadas geográficas (`COMX 19.43`), y bloques de arte ASCII.

---

## 4. Elementos Dinámicos y Efectos Visuales

### A. Fondo ASCII Dinámico con Efecto *Spotlight* (Scramble)
* **Composición:** Matriz continua de caracteres de código (`//`, `::`, `[]`, `01`, `WASM`, `SYS`) generada mediante HTML5 Canvas.
* **Interactividad:** Al desplazar el cursor sobre el fondo, se activa un radio de enfoque (~160px) que eleva el brillo de los caracteres e introduce un microefecto de desencriptado dinámico (*scramble*), regresando al reposo al salir el puntero.

### B. Separadores de Sección: "Glitch ASCII Eater"
* **Transiciones de Color:** Fronteras orgánicas entre las secciones oscuras y las secciones claras (estilo papel/hueso).
* **Comportamiento guiado por Scroll:** A medida que el usuario hace *scroll*, la frontera desciende de forma suave, aumentando la densidad de "mordidas", bloques corruptos e insignias tipográficas invertidas (`[E]`, `[F]`, `[I]`, `[T]`, `C:6NTTTS:`, `71XNGXN`, `6A·T·S7N`).
* **Interacción local:** Al pasar el cursor sobre la franja separadora, los bloques cercanos experimentan un desplazamiento por ruido sintético.

### C. Vórtice Tipográfico Rotacional (Split Section)
* **Diseño:** SVG concéntrico de múltiples capas con texto técnico rotando en direcciones opuestas (`animate-spin-slow` y `animate-spin-reverse`), encapsulando las competencias nucleares del perfil en un patrón radial hipnótico.

---

## 5. Maquetación y Arquitectura de UI

1. **Estructura Asimétrica (Bento Grid Brutalista):**
   * Distribución irregular de tarjetas de proyectos con tamaños variables (ancho completo, bloques verticales y horizontales escalonados).
   * Efectos de *hover* de alto contraste (inversión de color instantánea, bordes marcados de 2px y sombras compensadas).
2. **Widgets Interactivos Embebidos:**
   * **Design Forge:** Simulador interactivo en tiempo real de daltonismo y estándares WCAG 2.1.
   * **SQLEARN:** Consola interactiva SQLite ejecutando un motor real en el navegador mediante WebAssembly (WASM).
   * **WA Visualizer:** Tarjeta de análisis estadístico con motor de expresiones regulares (*Regex*).
   * **Delphinus:** Módulo móvil y fragmento de código de arquitectura core.
3. **Interfaz de Control (Taskii & Command Palette):**
   * **Taskii Chatbot:** Widget flotante en la esquina inferior derecha con indicador de estado en línea.
   * **Command Palette (`⌘K`):** Ventana modal de acceso rápido activada por atajo de teclado global para consultar comandos, proyectos o copiar el correo electrónico al portafolio de forma instantánea.

---