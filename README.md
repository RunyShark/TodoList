# Lista de Tareas - Guía de Ejecución

Este repositorio contiene el código fuente para una aplicación de Todo List como requerimiento de prueba tecnica.

## Pasos para Ejecutar la Aplicación

### 1. Verificación de la versión de Node en tu computadora: v18.16.0

Antes de comenzar a instalar las dependencias, es importante asegurarse de tener Node en la versión 18.16.0 o superior. Esto es esencial para evitar posibles problemas de compatibilidad.

Para verificar la versión actual de Node, ejecuta el siguiente comando:

```
node -v
```

En caso de que Node no esté instalado, puedes descargarlo desde el siguiente enlace: https://nodejs.org/es. Además, te recomendamos considerar el uso de NVM (Node Version Manager) como una alternativa. Puedes obtener más información en: https://github.com/nvm-sh/nvm.

### 2. instalar dependecias del backend

##### 1. Abre una terminal y navega a la carpeta del backend utilizando el comando cd ruta/de/la/carpeta/backend.

##### 2. Una vez que te encuentres en la ubicación correcta, verifica la presencia del archivo package.json.

##### 3. Ejecuta el siguiente comando en la terminal:

```
npm install
```

Este comando se encargará de instalar todas las dependencias necesarias para el proyecto.

luego ejecute

```
npm run dev
```

### 3. .env.example

El archivo .env.example incluye todas las variables de entorno (envs) necesarias para que el proyecto funcione correctamente. Debes reemplazar estas variables con tus propias configuraciones en un archivo llamado .env en el mismo directorio.

Asegúrate de configurar adecuadamente las variables de entorno con los valores específicos requeridos por tu proyecto.

### Opcional pero recomendado si no tienes una instancia de MongoDB activa

Si no cuentas con una base de datos MongoDB en funcionamiento, te sugiero utilizar la siguiente opción para agilizar el proceso:

Puedes levantar una instancia de la base de datos MongoDB utilizando el comando:

```
docker-compose up -d
```

Este comando iniciará una imagen de la base de datos MongoDB en modo "detached" (en segundo plano), lo que te permitirá trabajar con el backend sin necesidad de conectarte a tu propia base de datos personal.

Esta opción es útil para evitar configuraciones adicionales y comenzar a trabajar con el backend de manera eficiente. Sin embargo, si ya tienes una base de datos MongoDB en funcionamiento, puedes omitir este paso.

### 4. instalar dependecias del frontend

##### 1. Abre una terminal y navega a la carpeta del frontend utilizando el comando cd ruta/de/la/carpeta/frontend.

##### 2. Una vez que te encuentres en la ubicación correcta, verifica la presencia del archivo package.json.

##### 3. Ejecuta el siguiente comando en la terminal:

```
npm install
```

Este comando se encargará de instalar todas las dependencias necesarias para el proyecto.

luego ejecute

```
npm run dev
```

### 5. .env.example

El archivo .env.example incluye todas las variables de entorno (envs) necesarias para que el proyecto funcione correctamente. Debes reemplazar estas variables con tus propias configuraciones en un archivo llamado .env en el mismo directorio.

Asegúrate de configurar adecuadamente las variables de entorno con los valores específicos requeridos por tu proyecto.

#### Siguiendo todos los pasos mencionados anteriormente, estarás listo el proyecto para funcionar
