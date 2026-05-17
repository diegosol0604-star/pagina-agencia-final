# Creación de Diseño Web

## Detección de Entrada

Al recibir una tarea de recreación, lo primero es identificar el tipo de entrada:

- **++Imagen adjunta++** → usarla directamente como referencia visual
- **++URL proporcionada++** → capturarla con Puppeteer para obtener la referencia visual antes de empezar

### Si la entrada es una URL

1. Capturar la URL con Puppeteer a **++1440px de ancho++** (desktop) y también a **++390px++** (mobile) si el diseño es responsive. Capturar y analizar la referencia son una única acción — pasar directamente a generar el HTML sin pasos intermedios:

```bash
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('URL_AQUI', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'reference.png', fullPage: true });
  await browser.close();
})();
"
```

2. Usar `reference.png` como imagen de referencia para el resto del flujo

3. Si la URL requiere scroll para ver secciones distintas, capturar cada sección en el mismo script antes de continuar

### Si la entrada es una imagen

Usarla directamente como referencia. No hay paso previo de captura.

---

## Flujo de Trabajo Principal

### 1. Analizar la referencia

Inspeccionar la imagen de referencia e identificar todo lo necesario antes de escribir una sola línea de código. El análisis y la generación ocurren en el mismo paso mental — no hay vuelta atrás a esta fase:

- Estructura general (header, hero, cards, footer, etc.)
- Paleta de colores (valores hex exactos si son visibles)
- Tipografía (tamaños, pesos, familias)
- Espaciados y grid
- Componentes interactivos (botones, inputs, navs)

### 2. Generar `index.html`

Crear un único archivo `index.html` con:

- **Tailwind CSS** vía CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Todo el contenido inline — sin archivos externos salvo lo que se pida
- Imágenes de placeholder de `https://placehold.co/` cuando no haya fuente real
- Diseño responsive mobile-first

### 3. Capturar el resultado

```bash
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file:///al/index.html', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'result.png', fullPage: true });
  await browser.close();
})();
"
```

### 4. Comparar con la referencia

Comparar `result.png` contra la referencia. Anotar **++todas++** las discrepancias en una sola pasada antes de tocar el código — no corregir una a una:

| Aspecto | Qué medir |
|---------|-----------|
| Layout | |
| Espaciado y padding | Diferencias en px |
| Tipografía | Tamaño, peso, line-height, familia |
| Colores | Valores hex exactos |
| Alineación | Posicionamiento de elementos |
| Bordes y sombras | border-radius, box-shadow, outline |
| Imágenes e íconos | Tamaño y ubicación |
| Responsive | Comportamiento en mobile |

Ser **++específico++** en cada discrepancia encontrada. Ejemplos:
- "El heading es 32px pero la referencia muestra ~24px"
- "El gap entre cards es 16px pero debería ser 24px"
- "El color del botón es #38B2F6 pero la referencia muestra ~#2563EB"

### 5. Corregir

Aplicar **++todos++** los ajustes identificados en el paso anterior en una única edición del `index.html`. No realizar ediciones parciales o re-capturar entre correcciones individuales.

### 6. Re-capturar y repetir

Volver al paso 3 y repetir la comparación.

**++Realizar siempre un mínimo de 2 rondas completas de comparación.++**

Solo detener cuando:
- El usuario lo indique explícitamente, o
- No queden diferencias visuales (dentro de ~2-3px en todos los elementos)

---

## Reglas

- No añadir características, secciones ni contenido que no estén en la referencia
- Igualar la referencia exactamente — no "mejorar" el diseño
- Si el usuario proporciona clases CSS o tokens de estilo, usarlos literalmente
- Mantener el código limpio pero sin abstraer en exceso — clases Tailwind inline están bien
- Si la URL no es accesible (error de red, auth requerida, etc.), notificarlo y pedir una captura manual
- Si Puppeteer no está instalado: `npm install puppeteer` antes de usarlo

---

## Prerequisitos y Dependencias

Para que este flujo funcione correctamente, necesitas tener instalado:

### 1. **Node.js** (v14 o superior)
- Descarga e instala desde: https://nodejs.org/
- Verifica la instalación: `node --version`

### 2. **Puppeteer**
- Es una librería de Node.js para controlar Chrome/Chromium de forma automatizada
- Se usa para capturar screenshots de URLs y del HTML generado
- Instalación: `npm install puppeteer`
- Puppeteer descargará automáticamente una versión de Chromium cuando se instale

### 3. **Tailwind CSS** (vía CDN)
- No requiere instalación local
- Se carga directamente en el HTML con: `<script src="https://cdn.tailwindcss.com"></script>`

### 4. **Placehold.co**
- Servicio web para generar imágenes placeholder
- No requiere instalación, se usa vía URL: `https://placehold.co/WIDTHxHEIGHT`

### Instalación rápida

```bash
# Asegúrate de tener Node.js instalado primero
node --version

# Instala Puppeteer globalmente (recomendado) o en tu proyecto
npm install -g puppeteer
# O dentro de un proyecto específico:
# npm install puppeteer

# Verifica que Puppeteer funcione
node -e "const puppeteer = require('puppeteer'); console.log('Puppeteer instalado correctamente');"
```
