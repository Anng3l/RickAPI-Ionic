# Rick and Morty Characters - App

Aplicación móvil desarrollada con **Angular** e **Ionic**, que permite buscar personajes de la serie *Rick and Morty*, mostrar sus detalles, agregar comentarios personalizados y almacenar la información en **Firebase Firestore**.

## 📱 Descripción

Esta app consume la [API pública de Rick and Morty](https://rickandmortyapi.com/) y permite al usuario realizar búsquedas por nombre de personajes. Al seleccionar un personaje, se muestran sus detalles junto a una caja de texto para ingresar comentarios. Toda esta información se guarda en una base de datos en Firebase.

---

## 🚀 Funcionalidades

### ✅ Parte 1
- Buscador de personajes por nombre.
- Mostrar resultados en una lista con links hacia los detalles de cada personaje.

### ✅ Parte 2
- Página de detalles del personaje.
- Caja de texto para agregar comentarios.

### ✅ Parte 3
- Guardado en Firebase Firestore de:
  - Nombre
  - Estado
  - Especie
  - Imagen
  - Comentarios

---  
  
## 🧪 Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Rick and Morty API](https://rickandmortyapi.com/)

---

## 🛠️ Instalación y ejecución

Sigue los pasos a continuación para clonar el proyecto y ejecutarlo en tu entorno local:

1. **Clonar el repositorio**

```bash
git clone [ [https://github.com/tu-usuario/rick-and-morty-ionic-app.git](https://github.com/Anng3l/RickAPI-Ionic/tree/main)](https://github.com/Anng3l/RickAPI-Ionic)
cd rick-and-morty-ionic-app
```
2. **Instalar dependencias**
```bash
npm install
```
3. **Configurar Firebase**
```bash
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO.firebaseapp.com",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_BUCKET.appspot.com",
    messagingSenderId: "TU_ID",
    appId: "TU_APP_ID"
  }
};
```
4. **Ejecutar la app**
```bash
ionic serve

```

## 📷Capturas de pantalla
 - Página inicial
![_](./images/pagina%20inicial.png)
 - Búsqueda de personaje
![_](./images/busqueda%201.png)
 - Límite de la búsqueda con el infinite scroll
![_](./images/busqueda%201.1.png)
 - Página con los detalles del personaje buscado
![_](./images/detalles%20de%20personaje.png)
 - Comentario agregado
![_](./images/detalles%20con%20comentario.png)
 - Documento registrado en la base de datos
![_](./images/FirebaseCreacion.png)
