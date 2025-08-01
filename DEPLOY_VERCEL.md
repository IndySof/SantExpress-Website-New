# 🚀 Guide de Déploiement Vercel - SantExpress

## 📋 Prérequis

1. **Compte Vercel** : Créez un compte sur [vercel.com](https://vercel.com)
2. **Repository Git** : Code poussé sur GitHub, GitLab, ou Bitbucket
3. **Clé API Web3Forms** : Pour le formulaire de contact (gratuit sur [web3forms.com](https://web3forms.com))

## 🔧 Configuration Rapide

### 1. Connecter le Repository
```bash
# Via Vercel CLI (optionnel)
npm i -g vercel
vercel login
vercel --prod
```

### 2. Variables d'Environnement Vercel
Dans le dashboard Vercel > Project Settings > Environment Variables, ajoutez :

```
VITE_WEB3FORMS_ACCESS_KEY=votre_cle_web3forms
NODE_ENV=production
```

⚠️ **Important** : La clé Web3Forms est utilisée exclusivement côté client. Elle sera visible dans le code JavaScript final, ce qui est normal et sécurisé pour Web3Forms.

### 3. Configuration Build
Vercel détectera automatiquement le framework Vite grâce au `vercel.json` configuré.

**Build Command :** `npm run build`  
**Output Directory :** `dist/public`  
**Install Command :** `npm install`

## 📁 Structure des Fichiers de Déploiement

```
├── vercel.json          # Configuration Vercel
├── .vercelignore        # Fichiers exclus du déploiement  
├── .env.example         # Template variables d'environnement
├── dist/public/         # Build statique généré
└── DEPLOY_VERCEL.md     # Ce guide
```

## ⚡ Déploiement Automatique

1. **Push vers la branche principale** → Déploiement automatique
2. **Preview deployments** → Pull requests et branches
3. **Domaine personnalisé** → Configuration dans Vercel Dashboard

## 🔒 Sécurité et Performance

✅ **Application 100% client-side** - Aucun serveur backend  
✅ **Assets optimisés** - Images et code minifiés  
✅ **SPA routing** - Navigation client-side fluide  
✅ **Headers sécurité** - Configurés par défaut sur Vercel  
✅ **SSL/TLS** - Certificat automatique  

## 🌐 Domaines et DNS

- **Domaine Vercel** : `votre-projet.vercel.app`
- **Domaine personnalisé** : Configurable dans Vercel Dashboard
- **Sous-domaines** : Support complet (www, api, etc.)

## 📊 Monitoring

- **Analytics Vercel** : Inclus automatiquement
- **Core Web Vitals** : Métriques de performance
- **Edge Functions** : Pas nécessaires pour cette app client-only

## 🐛 Troubleshooting

### Build Errors
```bash
# Test du build localement
npm run build
npm run preview
```

### Routing Issues
- Vérifiez que `vercel.json` contient les règles SPA avec gestion des assets
- Les fichiers statiques (JS/CSS/images) sont servis directement
- Les routes non-fichiers pointent vers `/index.html`

### MIME Type Issues
- Configuration des headers pour forcer le bon Content-Type
- Fichiers JS servis avec `application/javascript`
- Fichiers CSS servis avec `text/css`

### Environment Variables
- Variables doivent commencer par `VITE_` pour être accessibles côté client
- Configurées dans Vercel Dashboard > Environment Variables

## 🎯 Checklist Pré-Déploiement

- [ ] Build local réussi (`npm run build`)
- [ ] Tests des routes et navigation
- [ ] Clé Web3Forms configurée
- [ ] Images et assets optimisés
- [ ] Variables d'environnement configurées
- [ ] Domaine personnalisé configuré (optionnel)

## 🔗 Liens Utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Web3Forms Documentation](https://docs.web3forms.com)