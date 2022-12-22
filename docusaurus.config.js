// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Home',
  tagline: 'Future mobility',
  url: 'https://github.com/soar-robotics/soarchain-docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-96x96.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Soar Robotics', // Usually your GitHub org/user name.
  projectName: 'Soarchain', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/soar-robotics/soarchain-docs/${docPath}`,
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Soarchain',
        logo: {
          alt: 'Soar',
          src: 'img/favicon-96x96.png',
        },
        items: [
          {
            to: '/introduction/whitepaper',
            position: 'left',
            label: 'WhitePaper',
            activeBasePath: "/introduction/whitepaper"
          },
          {
            position:'left',
            label:'Website',
            href:'https://www.soarchain.com'
          },

          // {
          //   // type: 'dropdown',
          //   // label: 'API',
          //   // position: 'left',
          //   // items: [

          //   // ],
          // },


          {
            href: 'https://discord.gg/eKUXe2VT',
            position: 'right',
            className: 'header-discord-link',
            title: 'Soarchan Discord',
            'aria-label': 'Soarchain Discord',
          },
          {
            href: 'https://github.com/soar-robotics',
            position: 'right',
            className: 'header-github-link',
            title: 'GitHub repository',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://twitter.com/soar_chain',
            position: 'right',
            className: 'header-twitter-link',
            title: 'Soarchain Twitter',
            'aria-label': 'Soarchain twitter',

          }


        ],
      },
      footer: {
        logo: {
          alt: 'Soar',
          src: 'img/favicon-96x96.png',
          href: '/',
          height: '60px',
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Lightpaper',
                href:'https://www.soarchain.com/lightpaper'
              },
              {
                label : 'Application Ecosystem',
                to: '/category/ecosystem'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Soarchain Community',
                href: 'https://www.soarchain.com/community'
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/eKUXe2VT'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/soar_chain'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/soar-robotics'
              }

            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@soarchain'
              },
              {
                label: 'Devnet',
                href: 'http://explorer.soarchain.com'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Soar Robotics`
},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    scripts: [
      "/js/redirect.js",
    ]
};

module.exports = config;
