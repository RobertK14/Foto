# 🚀 INSTRUKCJA: GitHub + TinaCMS - Krok po Krok

## 📋 **CZĘŚĆ 1: DODANIE STRONY DO GITHUB**

### KROK 1: Utwórz konto GitHub (jeśli nie masz)
1. Wejdź na **https://github.com**
2. Kliknij **"Sign up"**
3. Wypełnij formularz rejestracyjny
4. Potwierdź email

### KROK 2: Utwórz nowe repozytorium
1. Po zalogowaniu kliknij **zielony przycisk "New"** (lub "+" w prawym górnym rogu)
2. Wypełnij dane:
   - **Repository name**: `strona-fotografa` (lub dowolna nazwa)
   - **Description**: `Strona internetowa fotografa`
   - ✅ **Public** (zaznacz)
   - ✅ **Add a README file** (zaznacz)
3. Kliknij **"Create repository"**

### KROK 3: Pobierz kod strony
1. **Pobierz wszystkie pliki** z tego projektu Bolt
2. **Rozpakuj** do folderu na komputerze
3. **Usuń folder `.git`** (jeśli istnieje)

### KROK 4: Prześlij pliki do GitHub

#### OPCJA A: Przez przeglądarkę (łatwiejsza)
1. W swoim repozytorium GitHub kliknij **"uploading an existing file"**
2. **Przeciągnij wszystkie pliki** z folderu projektu
3. Napisz commit message: `Pierwsza wersja strony`
4. Kliknij **"Commit changes"**

#### OPCJA B: Przez Git (dla zaawansowanych)
```bash
git clone https://github.com/TWOJA-NAZWA/strona-fotografa.git
cd strona-fotografa
# Skopiuj wszystkie pliki projektu tutaj
git add .
git commit -m "Pierwsza wersja strony"
git push origin main
```

---

## 🎨 **CZĘŚĆ 2: KONFIGURACJA TINACMS**

### KROK 1: Rejestracja w TinaCMS
1. Wejdź na **https://app.tina.io**
2. Kliknij **"Sign up"**
3. Wybierz **"Continue with GitHub"**
4. Zaloguj się swoim kontem GitHub
5. Autoryzuj TinaCMS

### KROK 2: Utwórz projekt w TinaCMS
1. Po zalogowaniu kliknij **"Create a project"**
2. Wybierz swoje repozytorium **"strona-fotografa"**
3. Wybierz branch: **"main"**
4. Kliknij **"Continue"**

### KROK 3: Pobierz klucze API
1. W panelu TinaCMS przejdź do **"Overview"**
2. Znajdź sekcję **"Environment Variables"**
3. **Skopiuj** te wartości:
   - `TINA_CLIENT_ID` = (długi ciąg znaków)
   - `TINA_TOKEN` = (długi ciąg znaków)

---

## 🌐 **CZĘŚĆ 3: KONFIGURACJA NETLIFY**

### KROK 1: Połącz GitHub z Netlify
1. Wejdź na **https://app.netlify.com**
2. Zaloguj się (lub zarejestruj przez GitHub)
3. Kliknij **"Add new site"** → **"Import an existing project"**
4. Wybierz **"Deploy with GitHub"**
5. Autoryzuj Netlify
6. Wybierz repozytorium **"strona-fotografa"**

### KROK 2: Ustawienia wdrożenia
1. **Branch to deploy**: `main`
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. Kliknij **"Deploy site"**

### KROK 3: Dodaj zmienne środowiskowe
1. Po wdrożeniu przejdź do **"Site settings"**
2. Kliknij **"Environment variables"**
3. Kliknij **"Add variable"** i dodaj:

**Pierwsza zmienna:**
- **Key**: `TINA_CLIENT_ID`
- **Value**: (wklej skopiowaną wartość z TinaCMS)

**Druga zmienna:**
- **Key**: `TINA_TOKEN`  
- **Value**: (wklej skopiowaną wartość z TinaCMS)

4. Kliknij **"Save"**

### KROK 4: Przebuduj stronę
1. Przejdź do **"Deploys"**
2. Kliknij **"Trigger deploy"** → **"Deploy site"**
3. Poczekaj 2-3 minuty na zakończenie

---

## ✅ **CZĘŚĆ 4: TESTOWANIE**

### Sprawdź czy wszystko działa:

1. **Strona główna**: `https://twoja-nazwa-strony.netlify.app`
2. **Panel CMS**: `https://twoja-nazwa-strony.netlify.app/admin`

### W panelu CMS powinieneś zobaczyć:
- ✅ Informacje o stronie
- ✅ Sekcja główna  
- ✅ O mnie
- ✅ Usługi
- ✅ Opinie klientów
- ✅ FAQ
- ✅ Portfolio

---

## 🎯 **CZĘŚĆ 5: PIERWSZE KROKI W CMS**

### Test edycji:
1. Wejdź do panelu CMS
2. Kliknij **"Informacje o stronie"**
3. Zmień **"Imię i nazwisko fotografa"**
4. Kliknij **"Save"**
5. Sprawdź czy zmiana pojawiła się na stronie (2-3 minuty)

### Dodanie zdjęcia:
1. Kliknij **"O mnie"**
2. Kliknij pole **"Zdjęcie"**
3. Przeciągnij nowe zdjęcie
4. Zapisz zmiany

---

## 🔧 **ROZWIĄZYWANIE PROBLEMÓW**

### Problem: CMS nie ładuje się
**Rozwiązanie:**
- Sprawdź czy zmienne `TINA_CLIENT_ID` i `TINA_TOKEN` są ustawione
- Upewnij się, że nie ma spacji na początku/końcu wartości
- Przebuduj stronę w Netlify

### Problem: Zmiany nie pojawiają się na stronie
**Rozwiązanie:**
- Poczekaj 2-3 minuty (GitHub → Netlify potrzebuje czasu)
- Sprawdź w Netlify czy deploy się udał
- Wyczyść cache przeglądarki (Ctrl+F5)

### Problem: Błąd 404 na /admin
**Rozwiązanie:**
- Sprawdź czy plik `tina/config.ts` istnieje w repozytorium
- Upewnij się, że TinaCMS jest zainstalowany (`package.json`)
- Przebuduj stronę

---

## 🎉 **GOTOWE!**

Teraz masz:
- ✅ **Stronę na GitHub** - kod bezpiecznie przechowany
- ✅ **Automatyczne wdrażanie** - każda zmiana w kodzie aktualizuje stronę
- ✅ **Nowoczesny CMS** - edycja treści bez programowania
- ✅ **Profesjonalny workflow** - jak w największych firmach

### Następne kroki:
1. **Zmień wszystkie treści** na swoje (imię, zdjęcia, opisy)
2. **Dodaj swoje zdjęcia** do portfolio
3. **Utwórz dodatkowe strony** (np. cennik, regulamin)
4. **Podziel się linkiem** ze znajomymi!

---

## 📞 **POTRZEBUJESZ POMOCY?**

Jeśli coś nie działa:
1. **Sprawdź ten przewodnik ponownie** - 90% problemów to pomijanie kroków
2. **Sprawdź logi w Netlify** - pokażą błędy wdrożenia
3. **Dokumentacja TinaCMS**: https://tina.io/docs/
4. **GitHub Help**: https://docs.github.com/

**Powodzenia! 🚀**