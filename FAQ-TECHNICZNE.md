# 🔧 FAQ TECHNICZNE - Najczęstsze problemy

## ❓ **PROBLEMY Z GITHUB**

### **Q: Nie mogę przesłać plików do GitHub**
**A:** 
- Sprawdź czy repozytorium jest **Public**
- Usuń folder `.git` z pobranych plików
- Spróbuj przesłać po kilka plików naraz

### **Q: GitHub pokazuje błąd przy commit**
**A:**
- Dodaj commit message (np. "Dodanie strony")
- Sprawdź czy nie przesyłasz zbyt dużych plików (>100MB)

---

## ❓ **PROBLEMY Z TINACMS**

### **Q: Nie mogę się zalogować do TinaCMS**
**A:**
- Użyj **"Continue with GitHub"**
- Sprawdź czy masz dostęp do repozytorium
- Wyczyść cookies i spróbuj ponownie

### **Q: TinaCMS nie widzi mojego repozytorium**
**A:**
- Repozytorium musi być **Public**
- Sprawdź czy TinaCMS ma uprawnienia do GitHub
- Odśwież stronę i spróbuj ponownie

### **Q: Gdzie znajdę klucze API?**
**A:**
1. **app.tina.io** → Twój projekt
2. **"Overview"** (lewa strona)
3. Sekcja **"Environment Variables"**
4. Skopiuj `TINA_CLIENT_ID` i `TINA_TOKEN`

---

## ❓ **PROBLEMY Z NETLIFY**

### **Q: Build fails - błąd podczas wdrażania**
**A:**
- Sprawdź czy **Build command** to `npm run build`
- Sprawdź czy **Publish directory** to `dist`
- Zobacz logi błędów w sekcji "Deploys"

### **Q: Strona pokazuje 404**
**A:**
- Poczekaj 5-10 minut na pierwsze wdrożenie
- Sprawdź czy build się udał (zielona ikona)
- Sprawdź czy pliki są w folderze `dist`

### **Q: CMS nie działa (/admin pokazuje 404)**
**A:**
- Sprawdź czy zmienne `TINA_CLIENT_ID` i `TINA_TOKEN` są ustawione
- Upewnij się, że nie ma spacji na początku/końcu wartości
- Przebuduj stronę: "Trigger deploy"

### **Q: Jak dodać zmienne środowiskowe?**
**A:**
1. **Netlify** → Twoja strona → **"Site settings"**
2. **"Environment variables"** (lewa strona)
3. **"Add variable"**
4. Key: `TINA_CLIENT_ID`, Value: (wklej z TinaCMS)
5. Powtórz dla `TINA_TOKEN`
6. **"Save"** → **"Trigger deploy"**

---

## ❓ **PROBLEMY Z CMS**

### **Q: CMS ładuje się, ale nie mogę edytować**
**A:**
- Sprawdź czy jesteś zalogowany w TinaCMS
- Sprawdź czy masz uprawnienia do repozytorium
- Spróbuj wylogować się i zalogować ponownie

### **Q: Zmiany w CMS nie pojawiają się na stronie**
**A:**
- Poczekaj 2-5 minut (GitHub → Netlify potrzebuje czasu)
- Sprawdź w Netlify czy nowy deploy się rozpoczął
- Wyczyść cache przeglądarki (Ctrl+F5)
- Sprawdź logi w Netlify czy nie ma błędów

### **Q: Nie mogę przesłać zdjęć**
**A:**
- Zdjęcia muszą być mniejsze niż 10MB
- Obsługiwane formaty: JPG, PNG, WebP
- Spróbuj zmniejszyć rozmiar zdjęcia

---

## ❓ **OGÓLNE PROBLEMY**

### **Q: Strona działa, ale wygląda źle**
**A:**
- Wyczyść cache przeglądarki (Ctrl+F5)
- Sprawdź czy CSS się załadował
- Sprawdź w narzędziach deweloperskich czy nie ma błędów

### **Q: Jak zmienić adres strony?**
**A:**
1. **Netlify** → **"Site settings"** → **"Site details"**
2. **"Change site name"**
3. Wpisz nową nazwę (np. `anna-fotograf`)
4. Nowy adres: `https://anna-fotograf.netlify.app`

### **Q: Czy mogę mieć własną domenę?**
**A:**
- Tak! W Netlify: **"Domain settings"** → **"Add custom domain"**
- Potrzebujesz kupić domenę (np. w home.pl, OVH)
- Netlify pokaże jak skonfigurować DNS

---

## 🆘 **GDZIE SZUKAĆ POMOCY**

### **Logi i diagnostyka:**
1. **Netlify**: "Deploys" → kliknij ostatni deploy → "Deploy log"
2. **Przeglądarka**: F12 → "Console" (błędy JavaScript)
3. **GitHub**: "Actions" (jeśli używasz GitHub Actions)

### **Dokumentacja:**
- **TinaCMS**: https://tina.io/docs/
- **Netlify**: https://docs.netlify.com/
- **GitHub**: https://docs.github.com/

### **Społeczności:**
- **TinaCMS Discord**: https://discord.com/invite/zumN63Ybpf
- **Netlify Community**: https://community.netlify.com/
- **Stack Overflow**: Taguj pytania `tinacms`, `netlify`

---

## 🔍 **CHECKLIST ROZWIĄZYWANIA PROBLEMÓW**

Gdy coś nie działa, sprawdź po kolei:

### ✅ **GitHub**
- [ ] Repozytorium jest Public
- [ ] Wszystkie pliki są przesłane
- [ ] Brak błędów w repozytorium

### ✅ **TinaCMS**  
- [ ] Projekt jest utworzony
- [ ] Repozytorium jest połączone
- [ ] Klucze API są skopiowane

### ✅ **Netlify**
- [ ] Strona jest wdrożona (zielona ikona)
- [ ] Zmienne środowiskowe są ustawione
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`

### ✅ **CMS**
- [ ] `/admin` ładuje się bez błędów
- [ ] Możesz się zalogować
- [ ] Sekcje są widoczne

**Jeśli wszystko jest ✅ a nadal nie działa - wyczyść cache i poczekaj 5 minut!**