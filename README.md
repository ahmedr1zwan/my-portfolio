# Ahmed Rizwan’s portfolio

A React portfolio built with Vite and Tailwind CSS, deployed on Netlify.

## Development

Use Node **24.21.0 LTS** and npm **11.19.0** (bundled with that Node release).
The project declares its supported versions in `package.json`; `.nvmrc` pins
Node for local version managers and Netlify builds.

With nvm installed:

```sh
nvm install
nvm use
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
npm run audit
npm run preview
```

`npm ci` installs the exact versions in `package-lock.json`. Commit changes to
both package files when updating dependencies.

## Netlify

Build command: `npm run build`

Publish directory: `dist`

Netlify reads `.nvmrc` from the repository base directory. The updated Node
version and dependencies take effect on the next deployment.

## Dependency maintenance

Run `npm outdated` and `npm audit` when updating packages, then verify the build
and browser layout. ESLint 10 uses `@eslint-react/eslint-plugin` for React
checks, alongside the React Hooks and Fast Refresh plugins. Avoid forcing
incompatible peer dependencies.

Tailwind 4 uses its Vite plugin; the existing theme is loaded from
`tailwind.config.js` through the CSS `@config` directive. No separate PostCSS or
autoprefixer configuration is needed. Tailwind 4 requires modern browsers
(Safari 16.4+, Chrome 111+, Firefox 128+).
