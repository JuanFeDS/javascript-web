# 🟨 JavaScript Web

Repositorio de estudio de desarrollo web con JavaScript: fundamentos del lenguaje, frontend con React y backend con Express.

Consolida varios repositorios de aprendizaje que tenía por separado. Cada uno conserva su historial de commits.

## Estructura

🌱 [**01. JavaScript**](./01.JavaScript/)
- Curso práctico: taller de figuras geométricas y taller de precios y descuentos
- Data & APIs: consumo de APIs con `fetch`

⚛️ [**02. React**](./02.React/): tienda en línea con Create React App: home, login, creación y recuperación de cuenta, órdenes y checkout

🚂 [**03. Backend Express**](./03.Backend_Express/): API REST de productos, categorías y usuarios con Express, validación de esquemas, middlewares de errores y PostgreSQL con Docker Compose

## Uso

Cada carpeta es un proyecto independiente con su propio `package.json`:

```bash
cd 02.React   # o 03.Backend_Express
npm install
npm start
```

Create React App está deprecado; para un proyecto nuevo conviene Vite.
