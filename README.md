# 🧭 Navbar Responsive con Menú Lateral

Barra de navegación responsive con menú hamburguesa animado y barra lateral deslizante, construida con HTML, CSS y JavaScript puro.

---

## 🚀 ¿Qué hace?

- Navbar fija en la parte superior de la página
- En desktop muestra los links horizontalmente
- En móvil oculta los links y muestra un botón hamburguesa
- Al hacer clic el menú se desliza desde la derecha como barra lateral
- El icono cambia de ☰ a ✕ con animación suave
- Al cerrar vuelve a ☰

---

## 🛠️ Tecnologías usadas

- **HTML5** — estructura semántica
- **CSS3** — Flexbox, variables CSS, transiciones, media queries, position fixed
- **JavaScript** — manipulación del DOM, classList.toggle, addEventListener
- **Font Awesome 6** — iconos del menú hamburguesa y la X

---


---

## 💡 Conceptos clave aprendidos

### classList.toggle
Agrega la clase si no existe, la quita si ya existe. Perfecto para menús:
```js
menu.classList.toggle("active")
```

### position: fixed vs absolute
- `fixed` → se posiciona respecto a la ventana del navegador, no se mueve al hacer scroll
- `absolute` → se posiciona respecto al padre con `position: relative`

### Animación con transition
```css
.menu {
  right: -250px;
  transition: right 0.3s ease;
}
.menu.active {
  right: 0;
}
```

---

## ▶️ ¿Cómo usarlo?

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/navbar-responsive.git
```
2. Abre `index.html` con Live Server en VS Code.
3. Reduce el ancho a menos de 600px para ver el menú hamburguesa.

---

## 👨‍💻 Autor

**Diego Herrera**  
Aprendiendo desarrollo web Full Stack 🚀****
