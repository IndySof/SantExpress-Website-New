# SantExpress - Medical Transport Platform

Une plateforme numérique complète pour la gestion du transport sanitaire en France, connectant transporteurs médicaux, établissements de santé, organismes publics et patients.

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte Vercel
- Base de données PostgreSQL (recommandé: Neon Database)
- Variables d'environnement configurées

### Étapes de déploiement

1. **Fork/Clone du repository**
   ```bash
   git clone <repository-url>
   cd santexpress
   ```

2. **Installation des dépendances**
   ```bash
   npm install
   ```

3. **Configuration des variables d'environnement**
   
   Créer un fichier `.env.local` avec :
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   NODE_ENV=production
   SESSION_SECRET=your-secure-session-secret-here
   ```

4. **Build local (optionnel pour test)**
   ```bash
   npm run build
   ```

5. **Déploiement sur Vercel**
   
   Option A - Via Vercel CLI :
   ```bash
   npm i -g vercel
   vercel
   ```
   
   Option B - Via l'interface Vercel :
   - Connecter votre repository GitHub/GitLab
   - Configurer les variables d'environnement dans l'interface
   - Déclencher le déploiement

### Variables d'environnement Vercel

Dans l'interface Vercel, ajouter :

| Variable | Description | Exemple |
|----------|-------------|---------|
| `DATABASE_URL` | URL de connection PostgreSQL | `postgresql://user:pass@host:5432/db` |
| `NODE_ENV` | Environnement d'exécution | `production` |
| `SESSION_SECRET` | Clé secrète pour les sessions | `your-random-secret-key` |

### Configuration base de données

1. **Créer une base PostgreSQL**
   - Recommandé: [Neon Database](https://neon.tech) (gratuit)
   - Alternative: [Supabase](https://supabase.com), [PlanetScale](https://planetscale.com)

2. **Configurer la connection**
   - Copier l'URL de connection dans `DATABASE_URL`
   - Les tables seront créées automatiquement

### Optimisations incluses

✅ **Performance**
- Code splitting automatique (vendor, UI, utils)
- Minification CSS et JavaScript
- Compression des assets
- Cache optimisé

✅ **SEO**
- Meta tags dynamiques
- Sitemap automatique
- Structure sémantique
- Support multilingue

✅ **Sécurité**
- Variables d'environnement sécurisées
- Headers de sécurité
- Validation des données côté serveur

## 🌐 Fonctionnalités

### Interface utilisateur
- **Responsive design** - Optimisé mobile et desktop
- **Multilingue** - Français, Anglais, Allemand, Italien
- **Thème médical** - Couleurs et design professionnel
- **Navigation intuitive** - Menu intelligent avec sous-sections

### Contenu
- **Section héro** avec logo et message d'accueil
- **Statistiques marché** avec données DREES actualisées
- **Acteurs du système** de santé français
- **Vision entreprise** avec solutions spécialisées
- **Services détaillés** pour chaque type d'utilisateur
- **Contact intégré** avec Web3Forms

### Technique
- **React 18** + TypeScript pour la robustesse
- **Tailwind CSS** pour le design système
- **shadcn/ui** pour les composants accessibles
- **Wouter** pour le routing côté client
- **TanStack Query** pour la gestion d'état
- **Express.js** pour l'API backend
- **PostgreSQL** avec Drizzle ORM

## 📱 Support navigateurs

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🛠 Développement local

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Preview du build
npm run preview
```

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé
- **Bundle size** : < 500KB gzippé
- **Time to Interactive** : < 3s

## 🔒 Sécurité

- Validation des données avec Zod
- Protection CSRF
- Headers de sécurité
- Gestion sécurisée des sessions

## 📞 Support

Pour toute question technique ou commerciale :
- Email : contact@santexpress.fr
- Développement : Sofia Conseil (https://sofiaconseil.com)