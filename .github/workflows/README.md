# Deployment a GitHub Pages

Este workflow despliega automáticamente el frontend en GitHub Pages cuando se hace push a la rama principal.

## Configuración inicial

### 1. Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**

### 2. Actualizar la base URL en vite.config.ts

Si el nombre de tu repositorio NO es `oe-app`, actualiza el valor de `base` en `oe-app-frontend/vite.config.ts`:

```typescript
base: '/nombre-de-tu-repo/', // Reemplaza con el nombre real
```

### 3. Verificar la rama principal

Si tu rama principal se llama `master` en lugar de `main`, actualiza el archivo `deploy.yml` línea 6:

```yaml
branches:
  - master # Cambia a tu rama principal
```

## Cómo funciona

- **Trigger automático**: Se ejecuta cuando hay cambios en la carpeta `oe-app-frontend/` en la rama principal
- **Trigger manual**: Puedes ejecutarlo manualmente desde la pestaña "Actions" en GitHub
- **Build**: Compila el proyecto React con Vite
- **Deploy**: Despliega el contenido de `dist` a GitHub Pages

## URL de tu sitio

Una vez desplegado, tu sitio estará disponible en:

```
https://tu-usuario.github.io/nombre-del-repo/
```

## Solución de problemas

### El sitio no carga correctamente

- Verifica que la URL base en `vite.config.ts` coincida con el nombre del repositorio
- Asegúrate de que GitHub Pages esté configurado para usar "GitHub Actions" como source

### El workflow falla

- Verifica que los permisos estén configurados correctamente en el repositorio
- Revisa los logs del workflow en la pestaña "Actions" para ver el error específico
