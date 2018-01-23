![](https://i.imgur.com/xPj0ICn.png)

# Gatsby Starter Portfolio: Emilia

A portfolio starter for [Gatsby](https://www.gatsbyjs.org/). The target audience are designers and photographers.

[Demo Website](https://upbeat-edison-0598aa.netlify.com)

- Focus on big images
- Dark theme
- Image grid powered by CSS Grid
- One-Page layout with sub-pages for projects

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site the *gatsby-starter-portfolio* are a perfect fit for you! The project's goal is to offer minimalistic and fast websites. [Tweet me](https://twitter.com/lekoarts_de) your website made with this starter!

## Features

- Configurable
    - Use the SiteConfig.js to easily change the most important information
    - Google Fonts
    - Use the Style.js to configure your CSS
- Projects in Markdown
- Element Transitions with [React Overdrive](https://github.com/berzniz/react-overdrive)
- Image Grid with CSS Grid
- [HeroPatterns](http://www.heropatterns.com/) Header
- Styled components
- Google Analytics Support
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Typography.js
- Responsive images
    - The right image size for every screen size
    - Traced SVG Loading (Lazy-Loading)
    - WebP Support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-one/#check-your-development-environment)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LeKoArts/gatsby-starter-portfolio-emilia
npm run dev
```

### Adding a new project
- Create a new folder in ``content/projects`` with the current date (Format: YYYY-MM-DD)
- Create a new markdown file, add the frontmatter (use the same date format)
    - Reference the image you want to be shown in the grid and as the first image on the project as ``cover``
- Add your other images below the frontmatter (you can also include text)

If you're still unsure have a look at the already existing examples.

### Adding new features/plugins

You can add other features by having a look at the offical [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in ``config/SiteConfig``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Emilia', // Navigation and Site Title
  siteTitleAlt: 'Emilia - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://upbeat-edison-0598aa.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Dark One-Page Portfolio with Cards & detailed project views',

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: 'emilia', // Twitter Username
  ogSiteName: 'emilia', // Facebook Site Name
  googleAnalyticsID: 'UA-12345689-1',

  // Date format used in your project
  // More information here: https://date-fns.org/v1.29.0/docs/format
  dateFormat: 'DD.MM.YYYY',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.js
  headerFontFamily: 'Open Sans',
  bodyFontFamily: 'Merriweather',
  baseFontSize: '16px',

  // Your information
  avatar: '/logos/social.png',
  name: 'LekoArts',
  location: 'Germany',
  socialMedia: [
    {
      url: 'https://www.facebook.com/lekoarts.de',
      name: 'Facebook',
    },
    {
      url: 'https://www.instagram.com/lekoarts.de',
      name: 'Instagram',
    },
  ],
};
```

You can also configure the styling by editing the ``config/Style`` file:

```JS
// You can grab your own pattern here:
// http://www.heropatterns.com/

export const BG_PATTERN = `data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316191f' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

export const BG_COLOR = '#16191f';

export const COLOR = 'white';

export const SECONDARY_COLOR = '#b6b6b6';

export const LINK_COLOR = '#328bff';

export const LINK_HOVER_COLOR = '#79a8ff';

// max-width for the index page (header + grid)
export const MAX_WIDTH = '1600';

// your maxWidth for gatsby-remark-images in gatsby-config.js MUST have the same width!
export const MAX_WIDTH_PROJECT_DETAIL = 1600;

export const GRID_COLUMNS = '2';

export const CONTENT_PADDING = '1.0875rem';
```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!

## About Me

Thanks for using my *gatsby-starter*. I hope you like it and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights).