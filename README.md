# StackOps

**StackOps** est une plateforme simple et rapide pour déployer automatiquement une application depuis un dépôt GitHub personnel.

> 🔧 Tech Stack : Next.js (frontend) + Hono.js (backend) + Docker + Traefik + GitHub Actions

---

## Objectif

StackOps te permet de :

- Se connecter à son compte GitHub
- Sélectionner un repository à déployer
- Déployer une app automatiquement via Docker
- Bénéficier d’un accès HTTPS via Traefik + Let's Encrypt

---

## Structure du projet

stackops/
├── backend/ # API Hono.js
│ └── index.js
├── frontend/ # UI Next.js
│ └── app/hello/page.tsx
├── traefik/
│ ├── traefik.yml
│ └── acme.json
├── .github/
│ └── workflows/deploy.yml
├── docker-compose.yml
├── README.md

## Démarrage local (Docker)

1. Clone le repo :

```bash
git clone https://github.com/tonuser/stackops.git
cd stackops
```

Lance tous les services :

```bash
docker compose up --build
Accès aux services :
```

Service URL

- Frontend https://stackops.nip.io
- Backend API https://api.stackops.nip.io/hello
- Dashboard http://localhost:8080 (Traefik dashboard)

ℹ️ Le domaine nip.io redirige automatiquement vers localhost en HTTPS si bien configuré.

🔁 CI/CD (GitHub Actions)
Chaque push sur main :

Build le frontend (Next.js)

Build le backend (Hono.js)

⚠️ Tu peux facilement étendre pour déployer automatiquement vers un VPS ou Docker Registry

Fichier de workflow : .github/workflows/deploy.yml

📦 Exemples
✔️ Exemple d’appel backend :

```bash
curl https://api.stackops.nip.io/hello
# Hello World
```

✔️ Exemple dans le front (/hello) :
Affiche dynamiquement le message Hello World récupéré via fetch.

🛡️ Sécurité
🔐 HTTPS automatique via Traefik + Let's Encrypt

🔐 .env, acme.json et autres secrets ignorés via .gitignore

🧪 Technologies

- Type Tech
- Frontend Next.js (App Router, Tailwind)
- Backend Hono.js (Node.js)
- Reverse Proxy Traefik v2
- CI/CD GitHub Actions
- Container Docker (multi-service)

📌 À faire (Roadmap)
Connexion OAuth GitHub

Sélecteur de dépôt

Déploiement dynamique d’apps via Hono.js

Historique des déploiements

Multi-utilisateur (auth + sessions)

👨‍💻 Auteur
Hausk

📄 License
MIT
