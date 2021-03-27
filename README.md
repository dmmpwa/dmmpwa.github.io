# dmmpwa.github.io
Página web PWA

https://dmmpwa.github.io

Espera 11 minutos después de hacer
los cambios en tu sitio, para
depués actualizar sw.js.

## Creación de los archivos del sw.js

### Genera un archivo con el listado de la carpeta 
En Windows PowerShell y Visual Studio Code puedes usar el siguiente comando para
generar un listado de archivos

```
Get-ChildItem -path . -Recurse | Select Directory,Name | Out-File lista.txt
```

Quita las carpetas y el archivo sw.js del listado.

### Cambia los \ por / desde Visual Studio Code

```
Ctrl+h
Find:\
Replace:/,
Reemplaza todo
```
 
### Coloca las comillas del final de cada línea desde Visual Studio Code
```
Ctrl+h -> selecciona el botón ".*"
Find:\s*$
Replace:",
Reemplaza todo y luego ESC
```

### Coloca las comillas iniciales desde Visual Studio Code
Marca la carpeta inicial, Shift+Ctrl+l bórrala y pon las " y luego ESC

### Cambia las secuencias de espacios por / desde Visual Studio Code
```
Ctrl+h -> selecciona el botón ".*"
Find:\s+
Replace:/
Reemplaza todo
```

### Cambia las "/ por " desde Visual Studio Code
```
Ctrl+h -> quita selección del botón ".*"
Find:"/
Replace:"
Reemplaza todo
```