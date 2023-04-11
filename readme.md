# Website of Tom Plüss

Live site: [tompluess.ch](https://tompluess.ch)
Deployed on: [vercel.com](https://vercel.com)

## Features

- [X] 🌊 [Tailwind CSS](https://tailwindcss.com/)
- [X] 🍔 Responsive Hamburger Menu
- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] ✨ [Mend Renovate configuration](https://github.com/marketplace/renovate)
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))

Do you have suggestions or feedback? [Open an issue](https://github.com/fabe/gatsby-universal/issues/new)!

## Usage

```bash
# Installation with `gatsby-cli`
gatsby new my-site https://github.com/fabe/gatsby-universal

# Installation with `git clone`
git clone git@github.com:fabe/gatsby-universal.git my-site
cd my-site
yarn install

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn format

```

> 🚨 Don't forget to update your `robots.txt` inside `static/`!

## Folder structure

```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   │   ├── head # All meta tags etc.
│   │   ├── io # Intersection Observer component, uses render props
│   │   ├── layout # Layout component
│   │   │   ├── layout.css # Main CSS for Layout
│   │   │   └── layout.js
│   │   └── transition # Page Transition component, used by Gatsby APIs
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── mediaTemplates.js # Creates media queries for styled-components
│   ├── images # Images needed by the site/theme (not content)
│   │   ├── icon.png
│   ├── pages
│   └── store # Store and provider of a React.createContext instance
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

## Credits

The [Gatsby Universal template](https://gu.fabianschultz.com/) used for this website is from Fabian Schultz ([@fschultz_](https://twitter.com/fschultz_)) - Thank you very much!
