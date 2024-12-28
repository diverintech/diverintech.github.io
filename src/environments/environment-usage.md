# Environment Configuration Guide

This project supports multiple environments, allowing you to customize settings for development, production, or other scenarios. The environment configuration is managed through files located in the `src/environments/` directory.

## **Environment Files**

The following files define the environment-specific configurations:

- **`environment.ts`**: Contains settings for the development environment.
- **`environment.prod.ts`**: Contains settings for the production environment.

During the build or serve process, Angular automatically replaces `environment.ts` with the appropriate environment file based on the specified configuration.

### Example:

For production builds, Angular uses `environment.prod.ts` instead of `environment.ts`.

---

## **Usage**

### **Serving the Application**

To run the application in a specific environment, use the following commands:

- **Development**:

  ```bash
  ng serve --configuration=development
  ```

- **Production**:
  ```bash
  ng serve --configuration=production
  ```

By default, `ng serve` runs in the development environment unless otherwise specified.

### **Building the Application**

To build the application for a specific environment, use:

- **Development**:

  ```bash
  ng build --configuration=development
  ```

- **Production**:
  ```bash
  ng build --configuration=production
  ```

The build artifacts will be stored in the `dist/` directory.

---

## **Environment Configuration Details**

The environment files contain a TypeScript object defining environment-specific settings. Example:

### **`environment.ts`**

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'MyApp'
};
```

### **`environment.prod.ts`**

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.myapp.com',
  appName: 'MyApp'
};
```

### How It Works

- The `production` flag is used to determine whether the application is running in production mode.
- Replace the `apiUrl` or other settings as needed for each environment.

---

For more details, refer to the [Angular documentation on environments](https://angular.dev/tools/cli/environments).
