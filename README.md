# OE App Frontend - Build Output

Esta carpeta contiene los archivos compilados del frontend de OE App.

## 📁 Estructura

```
oe-app-frontend-build/
├── .github/
│   └── workflows/
│       ├── deploy.yml       # GitHub Action para desplegar a GitHub Pages
│       └── README.md        # Documentación del deployment
├── dist/                    # Archivos compilados (generados por npm run build)
└── README.md               # Este archivo
```

## 🚀 Deployment

Los archivos en la carpeta `dist/` se generan automáticamente cuando ejecutas:

```bash
cd ../oe-app-frontend
npm run build
```

El contenido de `dist/` se despliega automáticamente a GitHub Pages mediante el GitHub Action configurado en `.github/workflows/deploy.yml`.

## ⚠️ Importante

- Esta carpeta **NO debe** ser editada manualmente
- El contenido de `dist/` se genera automáticamente desde el código fuente en `oe-app-frontend/`
- Para hacer cambios, edita los archivos en `oe-app-frontend/` y compila nuevamente

## 📝 Notas

- La carpeta `dist/` debe estar en `.gitignore` del repositorio principal
- Solo se deben versionar los archivos de configuración de GitHub Actions
