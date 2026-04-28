# GitHub Repository Setup Guide

## Prerequisites
- Git installed on your local machine
- GitHub account with access to your repository
- Your repository URL: `https://github.com/nannapanenir/portfolio-website`

## Steps to Update Your Repository

### 1. Download Project Files
Download all the files from this Bolt project to your local machine.

### 2. Navigate to Your Local Repository
```bash
cd path/to/your/portfolio-website
```

### 3. Backup Current Work (Optional)
```bash
git checkout -b backup-old-portfolio
git push origin backup-old-portfolio
git checkout main
```

### 4. Replace Files
Copy all the downloaded files to your repository directory, replacing the existing ones.

### 5. Update Package.json
Make sure your package.json has the correct homepage URL:
```json
{
  "homepage": "https://nannapanenir.github.io/portfolio-website/"
}
```

### 6. Install Dependencies
```bash
npm install
```

### 7. Test Locally
```bash
npm run dev
```

### 8. Build for Production
```bash
npm run build
```

### 9. Commit and Push Changes
```bash
git add .
git commit -m "Complete portfolio redesign - Frontend Engineer positioning

- Redesigned hero section with frontend/AI engineer positioning  
- Rewrote about section focusing on frontend expertise
- Updated skills section with clean grouping (no progress bars)
- Added 4 featured projects with case study format
- Rewritten experience section emphasizing frontend engineering
- Added 'What I'm Exploring' insights section
- Modernized contact section
- Removed Java Full Stack Developer positioning
- Added AI integration as emerging specialization"

git push origin main
```

### 10. Deploy to GitHub Pages
```bash
npm run deploy
```

## File Structure You Should Have
```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Insights.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Troubleshooting

### If you get merge conflicts:
```bash
git status
# Resolve conflicts manually
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### If you want to force update (⚠️ This will overwrite remote):
```bash
git push --force origin main
```

### If GitHub Pages isn't updating:
1. Go to your repository settings
2. Navigate to Pages section
3. Make sure source is set to "Deploy from a branch"
4. Select "gh-pages" branch
5. Wait a few minutes for deployment

## Your Live Site
After deployment, your site will be available at:
https://nannapanenir.github.io/portfolio-website/