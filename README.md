# Aplicacion de Rifas

## Descripción del Proyecto
Este proyecto consiste en una aplicación móvil desarrollada en **React Native** diseñada para la gestión automatizada de rifas y sorteos. La solución implementa un flujo de trabajo optimizado que permite la captura de participantes, selección aleatoria mediante algoritmos de orden superior y la generación de reportes documentales en formato PDF.

Desarrollado bajo estándares de arquitectura limpia (Clean Architecture), separando la lógica de negocio del renderizado de componentes para garantizar escalabilidad y mantenibilidad.

---

## Características Principales
* **Gestión de Estado Reactiva:** Control fluido de la lista de participantes utilizando hooks de React.
* **Algoritmo de Selección Aleatoria:** Lógica imparcial basada en índices dinámicos.
* **UI/UX Premium:** Interfaz intuitiva con feedback visual inmediato (Modales y resaltado de ganador).
* **Reinicio de Ciclo de Vida:** Limpieza de memoria y reset total para nuevas sesiones.
* 
----

##  Arquitectura de Componentes

### 1. `ParticipantInput`
Encargado de la captura de datos. Implementa validaciones para prevenir entradas duplicadas o vacías, asegurando la integridad del listado.

### 2. `ParticipantList`
Componente de visualización de alto rendimiento. Orquesta la renderización de la colección y aplica estilos diferenciales al objeto seleccionado como ganador.

### 3. `WinnerModal`
Capa visual emergente que notifica el resultado final al usuario, mejorando la experiencia del sorteo mediante una transición clara.

### 4. `PDF Generator Module`
Servicio especializado que transforma el estado de la aplicación en un documento estructurado para su distribución o archivo.

---

## Stack Tecnológico
* **Framework:** React Native (Expo Workflow)
* **Lenguaje:** JavaScript (ES6+)
* **Gestión de Estado:** Hooks (`useState`)
* **Lógica de Reportes:** `expo-print` & `expo-sharing`

---

## Instalación y Ejecución

Sigue estos pasos:

1. **Clonar repositorio:**
   ```bash
   git clone [https://github.com/usuario/raffle-app.git](https://github.com/usuario/raffle-app.git)
   Instalar dependencias:

2. **npm install**
Instalar librerías para exportación PDF:


3. **npx expo install expo-print expo-sharing**
Iniciar entorno de desarrollo:

4. **npx expo start**
