# 📚 Full-Stack Library App

Aplicación Full-Stack creada con:

- **Backend:** Node.js + Express + MongoDB  
- **Frontend:** React (Vite)  
- **Base de datos:** MongoDB en Render  
- **Deploy:** Render (backend) y Vercel/Render (frontend)

Este README explica cómo instalar y ejecutar el proyecto, tanto en entorno local como en producción.

---

# 🚀 1. Requisitos Previos

Antes de instalar el proyecto, asegurarse de tener:

- **Node.js** v18 o superior  
- **npm**  
- **MongoDB** (local o cadena de conexión remota)  
- **Git**

---

# 🗄️ 2. Instalación del Backend

- Entrar al directorio del backend: cd backend
- Instalar dependencias
- Configurar variables de entorno, crear un archivo .env con las variables que están en .env.example.
- Ejecutar en modo desarrollo: npm run dev (levanta el servidor)
- Compilar para el modo producción: npm run build.

# 🗄️ 3. Instalación del Frontend:

- cd '@latest': te posiciona en la carpeta que está el proyecto.
- Instalar dependencias: npm install.
- Ejecutar en modo desarrollo: npm run dev
- Ejecutar en modo producción: npm run build.

# 🔄 4. Scripts del Proyecto

## 🛠 Backend (package.json)
- `npm run dev` → Modo desarrollo
- `npm run build` → Genera carpeta dist/
- `npm start` → Inicia servidor de producción

## 🎨 Frontend (package.json)
- `npm run dev` → Servidor de desarrollo Vite
- `npm run build` → Genera build optimizado
- `npm run preview` → Vista previa del build

# ☁️ 5. Cómo ejecutar el proyecto completo en local:

- Abrir dos terminales: en una la carpeta de backend y levantar el servidor y en otra la carpeta de frontend y ejecutarlo.

----
El proyecto funciona tanto en entorno local como en entorno remoto. 

Mi backend reployado en render es: https://backend-utn-4tf6.onrender.com/

Y el frontend deployado en vercel: 
https://tpfinal-frontend-55737n07r-anyu-escobars-projects.vercel.app/