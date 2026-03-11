# Kathya Pérez — Portfolio

Portafolio personal desplegado en GitHub Pages.
🔗 **URL:** `https://kathya-perez117.github.io`

## Cómo desplegarlo en GitHub Pages

### Paso 1 — Crear el repositorio en GitHub
1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: **`kathya-perez117.github.io`** (exactamente así, con tu usuario)
3. Márcalo como **Public**
4. NO marques "Add a README file"
5. Clic en **Create repository**

### Paso 2 — Subir el código
Abre una terminal en la carpeta `portfolio` y ejecuta:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/kathya-perez117/kathya-perez117.github.io.git
git push -u origin main
```

### Paso 3 — Activar GitHub Pages
1. En el repositorio, ve a **Settings → Pages**
2. En "Source" selecciona **Deploy from a branch**
3. Branch: **main** / Folder: **/ (root)**
4. Clic en **Save**

En 1-2 minutos tu portafolio estará en:
**https://kathya-perez117.github.io**

---

## Estructura del proyecto

```
portfolio/
├── index.html   ← estructura y contenido
├── styles.css   ← todo el diseño visual
└── script.js    ← interactividad (nav, scroll reveal)
```

## Personalizar

- **Cambiar info personal:** edita `index.html`
- **Agregar proyecto:** copia un `<article class="project-card">` y edita el contenido
- **Cambiar colores:** edita las variables CSS en `:root` dentro de `styles.css`
