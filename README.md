# 🧩 Microfrontend Angular con Docker

Este proyecto tiene como objetivo mostrar cómo trabajar con **Microfrontends en Angular**, especialmente enfocado en resolver el manejo de **archivos estáticos como imágenes**, un problema que personalmente me costó entender y solucionar.

Se basa en mi proyecto anterior, donde no logré resolver dicho problema:

[https://github.com/Cajami/EjemploMicrofrontendAngular17](https://github.com/Cajami/EjemploMicrofrontendAngular17)

en el otro proyecto no pude solucionar el tema de las imagenes.

Bueno comencemos!!!

---

Por temas prácticos se está usando un solo git para manejar todos los proyectos, pero cada proyecto facilmente puede ser manejado por un proyecto git

## 🚀 Tecnologías utilizadas

- Angular v19
- Docker
- NGINX
- Libería: @angular-architects/native-federation

## 🏗️ Estructura del proyecto

Este repositorio contiene 3 proyectos:

- **`root`**: Proyecto principal que carga los microfrontends.
- **`mf-ventas`**: Microfrontend encargado del módulo de ventas.
- **`mf-compras`**: Microfrontend encargado del módulo de compras.

> ⚠️ Nota: Por practicidad, todos los proyectos están en un solo repositorio, pero pueden separarse en repos individuales fácilmente.

Explicaré lo que se reliazó:

A cada proyecto, hay que instalarle la libería:

* Proyecto ROOT

```js
ng add @angular-architects/native-federation@19 --project root --port 4200
 ```

* Proyecto MF-VENTAS

```js
ng add @angular-architects/native-federation@19 --project mf-ventas --port 4201
 ```

* Proyecto MF-COMPRAS

```js
ng add @angular-architects/native-federation@19 --project mf-compras --port 4202
 ```

Cada microfrontend deberá manejar sus archivos estáticos (imagenes, css, fuentes, js, etc) con un nombre de carpeta único:

En mf-ventas, todo se colocará en una carpeta con el nombre mf-ventas:

<img width="225" height="195" alt="image" src="https://github.com/user-attachments/assets/769c41bc-aa51-48c6-a528-611df20157ed" />

y se utiliza:

```js
<img src="mf-ventas/images/{{venta.imagenUrl}}" class="card-img-top img-ejemplo" alt="{{ venta.producto }}" />
```

En mf-compras, todo se colocará en una carpeta con el nombre mf-compras:

<img width="268" height="189" alt="image" src="https://github.com/user-attachments/assets/948c2c9e-f8e3-4da1-a8f1-a2e35fb52876" />

 y se utiliza:

 ```js
<img src="/mf-compras/images/angular.svg" alt="Angular" class="img-fluid" style="max-height: 150px;">
```


¿Porque se hace esto?

Porque debemos identificar las imanges de que proyecto pertenecen, recordemos que root cargará los demas microfrontend, y cuando se muestren imagenes, el browser irá a buscar en el puerto donde está corriendo root, y en ese puerto no están las imagenes.

Ahora, en `root` debemos agregar un proxy reservo cuando estemos en local:

<img width="685" height="468" alt="image" src="https://github.com/user-attachments/assets/771ba6d4-8f3c-49f6-92ad-f15a8e4cf16c" />

y lo configuramos en `angular.json` para que en localhost se utilice, al tener ese prefijo único en cada microfrontend, el proxy reverso detectará ese prefijo único y lo redireccionará a su puerto en local donde esté corriendo, con ello logramos que se vean las imagenes.


Ahora, esto funcionada ya en localhost y nos servirá para el desarrollo, pero cuando lo mandemos a desplegar, el proxy reverso solo sirve para local, en producción debemos configurar el servidor para que haga lo mismo.

🐳 Docker Compose

En la raíz del proyecto hay un archivo `docker-compose.yml` que configura los 3 contenedores y sus puertos.

Para probar rápidamente con Docker:

```js
docker compose -p mfprueba up --build
```

Esto iniciará los 3 proyectos dentro de contenedores listos para funcionar en conjunto.



Solo en el `default.conf` del `root` se encuentra la configuración que hará lo mismo que el proxy reverso, detectará ese prefijo y lo mandará a los otros mf

<img width="718" height="816" alt="image" src="https://github.com/user-attachments/assets/a80ce6f2-9f89-4594-a9a9-3e3aa3c0df3e" />

y en los demás microfrontend está la configuracón para el servidor nginx, por ahora para evitar tema de CORS se configuró para que pueda ser llamado por cualquier url, cosa que no deberái ser así, pero para temas prácticos para el ejercicio se está dejando así, en producción deberíamos limitar que los microfrontend solo puedan ser llamados por urls conocidas:

<img width="807" height="384" alt="image" src="https://github.com/user-attachments/assets/62d6863d-10c8-465a-a462-927800d42eec" />

archivo `docker-compose.yml` 

<img width="412" height="791" alt="image" src="https://github.com/user-attachments/assets/12cb21cd-139c-4178-920d-e76dc4ebe482" />

Aqui configuramos los 3 servicios en que puertos van a correr, si quieren probar de manera rápida en contenedores, despues de clonar el proyecto, se colocan en la carpeta con un cmd, y ejecutan el siguiente comando:

```js
docker compose -p mfprueba up --build
```
<img width="1502" height="180" alt="image" src="https://github.com/user-attachments/assets/8bb304de-f495-410d-b339-3f8e3a2c29f4" />

---

Proyecto ejecutado independiente:

<img width="654" height="445" alt="image" src="https://github.com/user-attachments/assets/c42483b7-03d7-48b9-9a07-ebed9f06297a" />

Proyecto Root llamando a microfrontend

<img width="625" height="443" alt="image" src="https://github.com/user-attachments/assets/a59e2751-c7d6-46c9-aa48-25cad083758e" />


Este proyecto tiene varias cosas que pueden mejorar, pero la idea fue explicar una forma sencilla de mostrar las imagenes de los microfrontend en root


