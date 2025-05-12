# React + TypeScript + Vite Boilerplate

This repository provides a boilerplate for building React applications using TypeScript and Vite. It includes a minimal setup with modern tools and configurations to streamline development.

## Features

- **React 19**: The latest version of React for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **Vite**: Fast and modern build tool with HMR (Hot Module Replacement).
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Zustand**: Lightweight state management library.
- **React Query**: Data fetching and caching for server state management.
- **ESLint & Prettier**: Linting and formatting tools for consistent code quality.
- **NProgress**: Progress bar for loading states.
- **Sonner**: Toast notifications with customizable themes.
- **Axios**: Promise-based HTTP client for API requests.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-vite-boilerplate.git
   cd react-vite-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

### Build for Production

To build the application for production:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/               # Static assets
├── components/           # Reusable UI and custom components
├── configs/              # Configuration files (e.g., NProgress, QueryClient)
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── layouts/              # Layout components
├── lib/                  # Utility functions
├── pages/                # Application pages
├── types/                # TypeScript type definitions
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
├── index.css             # Global styles
└── vite-env.d.ts         # Vite environment types
```

## Configuration

### ESLint

The project uses a custom ESLint configuration defined in [`eslint.config.js`](eslint.config.js). It includes rules for TypeScript, React, and Prettier integration. To lint your code, run:

```bash
npm run lint
```

### Prettier

Prettier is configured for consistent code formatting. The configuration is defined in [`.prettierrc`](.prettierrc). To format your code, run:

```bash
npm run format
```

### TypeScript

The project uses multiple TypeScript configurations:

- [`tsconfig.json`](tsconfig.json): Base configuration.
- [`tsconfig.app.json`](tsconfig.app.json): Application-specific configuration.
- [`tsconfig.node.json`](tsconfig.node.json): Node.js-specific configuration.

### Environment Variables

Environment variables can be defined in a `.env` file. An example file is provided as `.env.example`.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.
- `npm run format`: Format code using Prettier.

## Expanding the ESLint Configuration

For production applications, consider enabling type-aware lint rules. See the [README.md](README.md) for detailed instructions.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query](https://tanstack.com/query)
- [Sonner](https://github.com/emilkowalski/sonner)
