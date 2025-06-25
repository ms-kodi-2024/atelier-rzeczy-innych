> Ten plik jest dostępny także w języku polskim: [README.md](README.md)

# Atelier Rzeczy Innych – Full Stack Application

An online store offering greeting cards and paper goods.

---

## Quick Start – Step by Step

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd <project_folder_name>
   ```

2. **Install dependencies**
   ```bash
   npm install              # backend
   npm run client:install   # frontend
   ```

3. **Configure `.env` files**
   ```bash
   cp .env.example .env
   cp client/.env.example client/.env
   ```

4. **Set up the database**

   Manually create an empty MySQL database (e.g. using MySQL Workbench):

   **Database name**: `atelierdb`

   In the `.env` file, configure the connection string:

   ```
   DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/atelierdb"
   ```

   Then run:

   ```bash
   npx prisma generate        # generates Prisma client
   npx prisma db push         # creates tables in the atelierdb database
   npx prisma db seed         # inserts sample data (products, categories, slider)
   ```

   > Note: `db push` does not create the database – only tables. You must create the database first.

5. **Start the backend**
   ```bash
   npm run start:dev
   ```

6. **Start the frontend (development mode)**
   ```bash
   npm run client:start
   ```

7. **Or build the frontend for production**
   ```bash
   npm run client:build
   ```

---

## Technologies

- **Frontend (React)**: React 19, Redux Toolkit, React Router, Bootstrap, SCSS Modules, Axios
- **Backend (Nest.js)**: NestJS, Prisma, MySQL

---

## Environment Variables

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

## Deployment

The frontend is served by the backend using `ServeStaticModule`.  
Deployment link: https://atelier-rzeczy-innych.onrender.com/

---

## Additional Information

The data for products, categories, the homepage slider, and orders comes directly from a MySQL database accessed via Prisma ORM. This application is designed with further development in mind – future stages will include an admin panel allowing:

- content management (adding sliders, products, categories),
- reviewing and managing orders.

All user-facing content is in Polish, as the application may eventually become a fully operational e-commerce platform targeting the Polish market. To maintain clarity and adhere to best practices, code identifiers (e.g. variables, keys) are written in English, while route names are kept in Polish for consistency with the interface language.

All graphics were created by **Marta Stalmach**. Design and layout were inspired by [studioblogo.pl](https://studioblogo.pl/).

---

## Project Author

**Marcin Stalmach**  
Created as part of a Full Stack Developer portfolio project.
