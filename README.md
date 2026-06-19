# FrontendSAF

FrontendSAF es la aplicacion web del Sistema de Activos Fijos (SAF). Permite operar los flujos de activos fijos, usuarios, roles, depreciaciones, reportes, logs y riesgos desde una interfaz construida con Angular.

Este repositorio corresponde al frontend del sistema y consume la API REST expuesta por `BackendSAF`.

## Caracteristicas principales

- Inicio de sesion por usuario, contrasena y empresa.
- Paneles separados por tipo de usuario: power user, administrador, encargado y usuario.
- Registro, actualizacion, listado y baja logica de activos fijos.
- Consulta de activos por empresa y visualizacion de movimientos.
- Gestion de usuarios, roles y permisos operativos.
- Recuperacion, bloqueo y cambio de contrasena.
- Historial de depreciaciones por periodo.
- Generacion de reportes PDF y Excel mediante el backend.
- Registro y consulta de logs de usuarios y actividad de la aplicacion.
- Modulo de riesgos con evaluacion de probabilidad, impacto, controles y riesgo residual.

## Stack tecnologico

- Angular 15.2
- TypeScript 4.9
- Angular Material
- Bootstrap 5
- RxJS
- Angular Router
- HttpClient
- Karma y Jasmine para pruebas unitarias

## Requisitos previos

- Node.js 16+ recomendado
- npm
- Angular CLI 15
- BackendSAF ejecutandose en `http://localhost:1234`

## Instalacion

Desde la carpeta `FrontendSAF`:

```bash
npm install
```

## Configuracion

La URL del backend se define en los archivos de ambiente:

```text
src/environments/environment.ts
src/environments/environment.development.ts
```

Configuracion actual:

```ts
export const environment = {
  production: false,
  url: "http://localhost:1234"
};
```

Si el backend se ejecuta en otro host o puerto, actualizar el valor de `url`.

## Ejecucion local

```bash
npm start
```

La aplicacion queda disponible en:

```text
http://localhost:4200
```

## Scripts disponibles

| Comando | Descripcion |
| --- | --- |
| `npm start` | Levanta el servidor de desarrollo de Angular |
| `npm run build` | Genera la version compilada en `dist/frontend-saf` |
| `npm run watch` | Compila en modo observacion para desarrollo |
| `npm test` | Ejecuta pruebas unitarias con Karma/Jasmine |

## Modulos funcionales

| Area | Funcionalidad |
| --- | --- |
| Autenticacion | Login, recuperacion de contrasena, bloqueo y validacion de vida util |
| Activos fijos | Registro, edicion, listado, baja logica y detalle de activos |
| Depreciacion | Consulta de depreciaciones e historial por mes/anio |
| Usuarios | Registro, actualizacion, listado y baja de usuarios |
| Roles | Creacion, listado y eliminacion de roles |
| Reportes | Solicitud de reportes PDF y Excel al backend |
| Logs | Visualizacion de logs de usuarios y movimientos de activos |
| Riesgos | Registro y consulta de evaluaciones de riesgo |

## Rutas principales

| Ruta | Vista |
| --- | --- |
| `/` | Login |
| `/menu-poweruser` | Menu principal para power user |
| `/registrar-usuario` | Registro de usuarios |
| `/listade-usuarios` | Listado de usuarios |
| `/gestionar-roles` | Gestion de roles |
| `/menu-user` | Menu principal para usuario |
| `/menu-admin` | Menu principal para administrador |
| `/menu-encargado` | Menu principal para encargado |
| `/lista-encargado` | Listado de activos para encargado |
| `/historialdepre-encargado` | Historial de depreciaciones |
| `/riesgos-poweruser` | Gestion de riesgos |
| `/logsu-poweruser` | Logs de usuarios |
| `/logapp-poweruser` | Logs de la aplicacion |

## Estructura del proyecto

```text
src/app
|-- components/   # Vistas y componentes de la interfaz
|-- dto/          # Modelos usados para intercambio de datos
|-- service/      # Servicios HTTP hacia BackendSAF
|-- store/        # Repositorio local de estado
`-- app-routing.module.ts
```

## Build de produccion

```bash
npm run build
```

El resultado se genera en:

```text
dist/frontend-saf
```

## Pruebas

```bash
npm test
```

Angular ejecuta las pruebas unitarias configuradas con Karma y Jasmine.

## Relacion con el backend

Para usar la aplicacion completa en local:

1. Levantar PostgreSQL.
2. Ejecutar `BackendSAF` en `http://localhost:1234`.
3. Ejecutar `FrontendSAF` en `http://localhost:4200`.
