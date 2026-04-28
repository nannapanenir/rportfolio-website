# rportfolio-website

### 1. Verify vite.config.ts

Ensure the base path matches your repository name:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rportfolio-website/",
});
```

---

### 2. Push latest changes

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

---

### 3. Deploy

```bash
npm run deploy
```

---

### 4. GitHub Pages Configuration

Go to:

Repository → Settings → Pages

Set:

* Source: Deploy from a branch
* Branch: gh-pages
* Folder: / (root)

Leave Custom domain empty

---

### 5. Live URL

[https://nannapanenir.github.io/rportfolio-website/](https://nannapanenir.github.io/rportfolio-website/)

---

### Notes

* Vite builds files into `dist/`, so deployment must use:

```json
"deploy": "gh-pages -d dist"
```

* If changes are not visible, do a hard refresh:

```
Ctrl + Shift + R
```
