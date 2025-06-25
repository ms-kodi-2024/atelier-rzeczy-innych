> This README is also available in English: [README.en.md](README.en.md)

# Atelier Rzeczy Innych – aplikacja full stack

Sklep internetowy z kartkami okolicznościowymi.

---

## Szybki start – krok po kroku

1. **Sklonuj repozytorium**
   ```bash
   git clone <adres_repozytorium>
   cd <nazwa_katalogu_projektu>
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install              # backend
   npm run client:install   # frontend
   ```

3. **Skonfiguruj pliki `.env`**
   ```bash
   cp .env.example .env
   cp client/.env.example client/.env
   ```

4. **Przygotuj bazę danych**

   Utwórz ręcznie pustą bazę danych w MySQL (np. za pomocą MySQL Workbench):

   **Nazwa bazy**: `atelierdb`

   W pliku `.env` skonfiguruj dostęp do bazy:

   ```
   DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/atelierdb"
   ```

   Następnie wykonaj:

   ```bash
   npx prisma generate        # generuje klienta Prisma
   npx prisma db push         # tworzy tabele w bazie atelierdb
   npx prisma db seed         # dodaje dane startowe (produkty, kategorie, slider)
   ```

   > Uwaga: `db push` nie tworzy bazy danych – tylko tabele. Baza musi istnieć wcześniej.

5. **Uruchom backend**
   ```bash
   npm run start:dev
   ```

6. **Uruchom frontend (dev)**
   ```bash
   npm run client:start
   ```

7. **Lub zbuduj frontend do wersji produkcyjnej**
   ```bash
   npm run client:build
   ```

---

## Technologie

- **Frontend (React)**: React 19, Redux Toolkit, React Router, Bootstrap, SCSS Modules, Axios
- **Backend (Nest.js)**: NestJS, Prisma, MySQL

---

## Zmienne środowiskowe

### `.env` (backend):

```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/atelierdb"
FRONTEND_URL=http://localhost:3000
PORT=5000
```

### `client/.env` (frontend):

```
REACT_APP_API_URL=http://localhost:5000
```

---

## Publikacja

Frontend jest serwowany przez backend za pomocą `ServeStaticModule`. 
Link do publikacji: https://atelier-rzeczy-innych.onrender.com/

---

## Informacje dodatkowe

Dane dotyczące produktów, kategorii, slidera oraz zamówień pochodzą bezpośrednio z bazy danych MySQL, z którą aplikacja łączy się za pomocą Prisma ORM. Aplikacja została zaprojektowana z myślą o dalszym rozwoju – w kolejnych etapach planowane jest stworzenie panelu administracyjnego umożliwiającego:

- zarządzanie treściami (dodawanie slajdów, produktów, kategorii),
- przeglądanie i obsługę zamówień.

Wszystkie treści w aplikacji zostały przygotowane w języku polskim, ponieważ projekt może w przyszłości stać się pełnoprawnym sklepem internetowym działającym na terenie Polski. Dla zachowania czytelności i zgodności z dobrymi praktykami, identyfikatory w kodzie (zmienne, klucze i inne identyfikatory) zapisano w języku angielskim, zaś ścieżki - w celu zgodności z wersją językową aplikacji - w języku polskim.

Autorką wszystkich grafik jest Marta Stalmach natomiast inspiracji dotyczących layoutu i designu dostarczyło https://studioblogo.pl/
---

## Autor projektu

**Marcin Stalmach**  
Projekt wykonany w ramach portfolio dla Full Stack Developera.
