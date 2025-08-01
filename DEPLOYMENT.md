# Guide de Déploiement SantExpress sur Vercel

## 📋 Checklist avant déploiement

### ✅ Configuration complétée
- [x] Configuration Vercel (`vercel.json`)
- [x] Variables d'environnement définies (`.env.example`)
- [x] Optimisations de production
- [x] Headers de sécurité configurés
- [x] SEO optimisé (sitemap.xml, robots.txt)
- [x] Support multilingue testé
- [x] Responsive design validé

### ✅ Fichiers de production
- [x] `vercel.json` - Configuration deployment Vercel
- [x] `.env.example` - Template variables d'environnement
- [x] `robots.txt` - Configuration SEO robots
- [x] `sitemap.xml` - Plan du site pour SEO
- [x] `README.md` - Documentation complète

## 🚀 Étapes de déploiement

### 1. Préparer le repository
```bash
# S'assurer que tous les fichiers sont commités
git add .
git commit -m "Production ready: Add Vercel configuration and optimizations"
git push origin main
```

### 2. Configuration Vercel

#### A. Via l'interface web Vercel
1. Se connecter sur [vercel.com](https://vercel.com)
2. Importer le repository GitHub
3. Configurer les variables d'environnement :
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   NODE_ENV=production
   SESSION_SECRET=your-secure-random-secret-here
   ```

#### B. Via Vercel CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour les déploiements suivants
vercel --prod
```

### 3. Configuration base de données

#### Option recommandée : Neon Database
1. Créer un compte sur [neon.tech](https://neon.tech)
2. Créer une nouvelle base de données
3. Copier l'URL de connection
4. L'ajouter comme variable `DATABASE_URL` dans Vercel

#### Alternative : Supabase
1. Créer un projet sur [supabase.com](https://supabase.com)
2. Aller dans Settings > Database
3. Copier l'URL de connection PostgreSQL
4. L'ajouter dans Vercel

### 4. Variables d'environnement Vercel

Dans l'interface Vercel > Settings > Environment Variables :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `DATABASE_URL` | `postgresql://...` | URL connection PostgreSQL |
| `NODE_ENV` | `production` | Mode production |
| `SESSION_SECRET` | `random-secret-key` | Clé sécurisée session |

### 5. Configuration domaine (optionnel)

1. Dans Vercel > Settings > Domains
2. Ajouter le domaine personnalisé
3. Configurer les DNS selon les instructions Vercel

## ⚡ Optimisations incluses

### Performance
- **Code splitting** : vendor, UI, utils séparés
- **Minification** : JavaScript et CSS optimisés
- **Compression** : gzip/brotli automatique
- **Cache headers** : Assets mis en cache efficacement

### SEO
- **Meta tags** : Title et description par page
- **Sitemap** : Plan du site généré
- **Robots.txt** : Configuration crawler
- **Structured data** : Microdata pour rich snippets
- **Multilingual** : hreflang configuré

### Sécurité
- **Headers sécurité** : CSP, XSS protection, etc.
- **Variables env** : Secrets protégés
- **Validation données** : Zod côté serveur et client
- **Session sécurisée** : Configuration production

### UX/UI
- **Responsive** : Mobile-first design
- **Accessibility** : ARIA labels, keyboard navigation
- **Animations** : Smooth scroll, transitions
- **Loading states** : Skeleton loaders

## 🔧 Commandes de production

```bash
# Build local (test)
npm run build

# Vérification TypeScript
npm run check

# Preview du build
npm run preview

# Database setup (si nécessaire)
npm run db:push
```

## 📊 Monitoring

### Vercel Analytics
- Automatiquement inclus avec le déploiement
- Métriques Core Web Vitals
- Trafic et performance

### Vérifications post-déploiement
1. **Lighthouse Score** : Viser 90+ sur tous critères
2. **Core Web Vitals** : LCP < 2.5s, FID < 100ms, CLS < 0.1
3. **Mobile Friendly** : Test Google Mobile-Friendly
4. **SEO** : Vérifier indexation Google

## 🐛 Troubleshooting

### Build failures
- Vérifier les variables d'environnement
- Consulter les logs de build dans Vercel
- Tester le build localement

### Database connection
- Vérifier l'URL de connection
- Tester la connection avec un client PostgreSQL
- Vérifier les règles firewall de la base

### Performance issues
- Analyser avec Lighthouse
- Vérifier les bundles avec `npm run build`
- Optimiser les images si nécessaire

## 📞 Support

- **Email technique** : contact@santexpress.fr
- **Développement** : Sofia Conseil - https://sofiaconseil.com
- **Documentation Vercel** : https://vercel.com/docs