![](https://i.imgur.com/xPj0ICn.png)

# Gatsby Starter Portfolio: Emilia

A portfolio starter for [Gatsby](https://www.gatsbyjs.org/). The target audience are designers and photographers.

[Demo Website](https://emilia.lekoarts.de)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-portfolio-emilia) [![Edit gatsby-starter-portfolio-emilia](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LekoArts/gatsby-starter-portfolio-emilia/tree/master/)

[![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-emilia.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-emilia) [![Netlify Status](https://api.netlify.com/api/v1/badges/5da7d9e1-9b91-44c5-b23d-b47cab98c50d/deploy-status)](https://app.netlify.com/sites/portfolio-emilia/deploys)

- Focus on big images
- Dark theme
- Image grid powered by CSS Grid
- Page Transitions & Animations

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site the _gatsby-starter-portfolio_ are a perfect fit for you! The project's goal is to offer minimalistic and fast websites.

I hope you like my starters and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me creating more free starters!

Also check out the other _gatsby-starter-portfolio_:

- [gatsby-starter-portfolio-emma](https://github.com/LekoArts/gatsby-starter-portfolio-emma)
- [gatsby-starter-portfolio-bella](https://github.com/LekoArts/gatsby-starter-portfolio-bella)
- [gatsby-starter-portfolio-cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)
- [gatsby-starter-portfolio-jodie](https://github.com/LekoArts/gatsby-starter-portfolio-jodie)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

- Configurable
  - Use the site.js to easily change the most important information
  - Use the theme.js to configure your CSS
- Projects in MDX ([gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx))
- Image Grid with CSS Grid
- Page transitions & animations with [`react-spring`](https://github.com/react-spring/react-spring)
- [HeroPatterns](http://www.heropatterns.com/) Header
- Styled Components
- Cypress for End-to-End testing
- Google Analytics Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Responsive images
  - The right image size for every screen size
  - Image Lazy-Loading
  - WebP Support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-emilia
cd project-name
npm run dev
```

### Adding a new project

- Create a new folder in `content/projects`
- Create a new MDX file, add the frontmatter (use the same date format)
- **Optional:** Add text under the frontmatter (will be placed before the images)
- Add your images in the folder (they will automatically be placed in the document). **Format:** JPG/PNG/TIF/WEBP

If you're still unsure have a look at the already existing examples.

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/site.js`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Emilia', // Navigation and Site Title
  siteTitleAlt: 'Emilia - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Emilia', // short_name for manifest
  siteHeadline: 'Publishing & Creating stunning photos', // Headline for schema.org JSONLD
  siteUrl: 'https://emilia.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Dark One-Page portfolio with cards & detailed project views',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@emilia', // Twitter Username
  ogSiteName: 'emilia', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-12345689-1',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/lekoarts.png',
  name: 'LekoArts',
  location: 'Germany',
  socialMedia: [
    {
      url: 'https://twitter.com/lekoarts_de',
      name: 'Twitter',
    },
    {
      url: 'https://www.instagram.com/lekoarts.de',
      name: 'Instagram',
    },
    {
      url: 'https://www.lekoarts.de/en',
      name: 'Homepage',
    },
  ],
}
```

You can also configure the styling by editing the `config/theme.js` file:

```JS
// You can grab your own pattern here:
// http://www.heropatterns.com/

module.exports = {
  bgPattern: `data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316191f' fill-opacity='0.8'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E`,
  colors: {
    bg: '#16191f',
    color: 'white',
    dark_bg: 'black',
    secondary: '#b6b6b6',
    link: '#328bff',
    linkHover: '#79a8ff',
  },
  maxWidths: {
    general: '1600px',
    project: 1600,
  },
  gridColumns: 2, // Number of columns of the grid on the index page
  contentPadding: '1.0875rem',
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
}
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!
