## Proyecto de viaticos

### Instrucciones

1. Clonar el repositorio
2. Dirigirse al directorio donde se encuentra el repositorio
3. Ejecutar el comando `npm install` para instalar las dependencias
4. Ejecutar el comando `ng serve` para iniciar el servidor
5. Dirigirse a `http://localhost:4200/` para acceder a la aplicación

### Como usar la aplicación

1. Iniciar sesión con el correo `admin@admin.com` y la contraseña `admin123`. Mismos que son datos creados al arrancar la aplicación del backend. Si usted desea ingresar con otro usuario deberá registrarlo en la aplicación, en la opción de registro de usuarios. (Se puede registrar un usuario con el rol de `Aprobador de viaticos` o `Solicitante de viaticos`, por defecto el usuario creado automaticamente tiene ambos roles).
2. En la pestaña "Mis viaticos" se pueden ver las solicitudes de viaticos realizadas por el usuario registrado o a su vez, el usuario puede crear una nueva solicitud de viaticos. Misma que será creada a su nombre.
3. En la pestaña "Aprobar viaticos" se pueden ver las solicitudes de viaticos pendientes de aprobación. El usuario puede aprobar o rechazar una solicitud de viaticos. Esta acción esta restringida a los usuarios con el rol de `Aprobador de viaticos`, rol que se selecciona en la ventana de registro de usuarios. 

### Notas
- El usuario `admin@admin.com` creado al arrancar la aplicación tiene ambos roles, por lo que puede ver y crear solicitudes de viaticos, así como aprobar o rechazar solicitudes de viaticos.
- Todas las solicitudes de viaticos pueden ser aprobadas o rechazadas por cualquier usuario con el rol de `Aprobador de viaticos`.






