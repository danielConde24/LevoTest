Antes de iniciar cada proyecto, se deben instalar las dependencias ejecuntando npm i

Proyecto jwtLevo
Esta aplicación es requerida para obtener los tokens de usuarios en la aplicacion levoAngular.
No necesita conexion a base de datos.
Para iniciar el servicio solo se necesita ejecutar en consola.
El usuario y contraseña para obtener el token son: admin y 1234 respectivamente

Proyecto levoAngular
Esta aplicación requiere del servicio jwtLevo para obtener los tokens de los usuarios,
por lo tanto en el archivo user.service.ts se debe modificar la url del api a utilizar.
Inicialmente tiene el valor http://localhost:3000/api/.
Por último, para iniciar esta aplicación se requiere en comando en consola ng serve


