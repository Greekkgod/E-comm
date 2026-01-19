# Rudraksh Web

Rudraksh Web is a web application built using Next.js, Prisma, and Tailwind CSS. This project serves as a template for building modern web applications with a focus on performance and developer experience.

## Features

- **Next.js**: A React framework for building server-rendered applications.
- **Prisma**: An ORM for Node.js and TypeScript that simplifies database access.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A superset of JavaScript that adds static types.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd rudrakshweb
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up the database**:
   - Update the database connection string in the `prisma/schema.prisma` file.
   - Run the following command to create the database:
   ```
   npx prisma migrate dev --name init
   ```

4. **Seed the database** (optional):
   ```
   npx ts-node prisma/seed.mjs
   ```

5. **Run the development server**:
   ```
   npm run dev
   ```

6. **Open your browser**:
   Navigate to `http://localhost:3000` to see your application in action.

## Directory Structure

- `prisma/`: Contains the Prisma schema and seed script.
- `public/`: Static assets for the application.
- `src/`: Source code for the application.
  - `components/`: Reusable React components.
  - `pages/`: Application pages.
  - `styles/`: CSS files for styling.
  - `utils/`: Utility functions and helpers.
  - `types/`: TypeScript type definitions.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Lints the code using ESLint.
- `postinstall`: Runs Prisma generate after installation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.