# ⚡ SZYBKI START - 15 MINUT DO GOTOWEJ STRONY

## 🎯 **CO ZROBIMY:**
1. ✅ Dodamy stronę do GitHub (5 min)
2. ✅ Połączymy z TinaCMS (5 min)  
3. ✅ Wdrożymy na Netlify (5 min)
4. ✅ Przetestujemy CMS (bonus)

---

## 🚀 **KROK 1: GITHUB (5 min)**

### A. Utwórz konto i repozytorium:
1. **GitHub.com** → Sign up (jeśli nie masz konta)
2. **"New repository"** → nazwa: `moja-strona-fotografa`
3. ✅ **Public** + ✅ **Add README**
4. **"Create repository"**

### B. Prześlij pliki:
1. **Pobierz wszystkie pliki** z tego projektu Bolt
2. W GitHub: **"uploading an existing file"**
3. **Przeciągnij wszystkie pliki**
4. **"Commit changes"**

---

## 🎨 **KROK 2: TINACMS (5 min)**

### A. Rejestracja:
1. **app.tina.io** → **"Sign up with GitHub"**
2. Autoryzuj TinaCMS

### B. Utwórz projekt:
1. **"Create a project"**
2. Wybierz **"moja-strona-fotografa"**
3. Branch: **"main"**
4. **"Continue"**

### C. Skopiuj klucze:
1. **"Overview"** → **"Environment Variables"**
2. Skopiuj **TINA_CLIENT_ID** i **TINA_TOKEN**

---

## 🌐 **KROK 3: NETLIFY (5 min)**

### A. Połącz z GitHub:
1. **app.netlify.com** → zaloguj przez GitHub
2. **"Add new site"** → **"Import from GitHub"**
3. Wybierz **"moja-strona-fotografa"**

### B. Ustawienia:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **"Deploy site"**

### C. Dodaj zmienne:
1. **"Site settings"** → **"Environment variables"**
2. Dodaj:
   - `TINA_CLIENT_ID` = (wartość z TinaCMS)
   - `TINA_TOKEN` = (wartość z TinaCMS)
3. **"Trigger deploy"** → **"Deploy site"**

---

## ✅ **KROK 4: TEST (bonus)**

### Sprawdź:
1. **Strona**: `https://twoja-nazwa.netlify.app`
2. **CMS**: `https://twoja-nazwa.netlify.app/admin`

### Pierwszy test:
1. W CMS: **"Informacje o stronie"**
2. Zmień imię fotografa
3. **"Save"**
4. Sprawdź stronę po 2-3 minutach

---

## 🎉 **GOTOWE W 15 MINUT!**

Masz teraz:
- ✅ Profesjonalną stronę fotografa
- ✅ Nowoczesny CMS do zarządzania treścią
- ✅ Automatyczne wdrażanie
- ✅ Darmowy hosting

### Co dalej?
1. **Zmień wszystkie treści** na swoje
2. **Dodaj swoje zdjęcia**
3. **Podziel się linkiem**!

**Szczegółowe instrukcje: `INSTRUKCJA-GITHUB-TINA.md`**