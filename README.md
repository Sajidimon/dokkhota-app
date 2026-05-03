# দক্ষতা (Dokkhota) 📚

**Dokkhota** is a Bangladeshi career skills learning platform built with **Laravel 11** (backend) and **React 18** (frontend via Vite + Inertia-style SPA routing). The app delivers interactive learning modules, quizzes, email writing guides, interview preparation resources, a practical dictionary, and a job listings board — all in Bangla.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 11 (PHP) |
| Frontend | React 18, Chakra UI v2 |
| Routing (Frontend) | React Router DOM v6 |
| HTTP Client | Axios |
| Bundler | Vite |
| Styling | Chakra UI Design Tokens (custom brand palette) |
| Icons | Google Material Symbols |
| Fonts | Google Fonts (Hind Siliguri, Inter) |

## Local Development Setup

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js >= 18
- npm

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd dokkhota-app

# Install PHP dependencies
composer install

# Install JS dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate
```

### Running the Dev Servers

Open two terminals:

```bash
# Terminal 1 — Laravel backend
npm artisan serve

Then open [http://127.0.0.1:8000] in your browser.

## License

MIT
