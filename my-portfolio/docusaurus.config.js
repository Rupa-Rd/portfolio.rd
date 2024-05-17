// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rd\'s Portfolio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            // type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About Me',
            to:'/myself'
          },
          {
            to: '/academics',
            label: 'Academics',
            position: 'left'
          },
          {
            label:'Projects',
            position: 'left',
            to:'/projects',
          },
          {
            label: 'Achievements',
            position: 'left',
            to:'/achievements',
          },
          {
            label: 'Internships',
            position: 'left',
            to:'/internships',
          },
          {
            label: 'Open Source Contributions',
            position: 'left',
            to:'/opensource',
          },
          {
            href: 'https://github.com/Rupa-Rd',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Coding Profiles',
            items: [
              {
                label: 'Leetcode',
                href: 'https://leetcode.com/user0207t/',
              },
              {
                label: 'Hacker Rank',
                href: 'https://www.hackerrank.com/profile/RA2111003020345',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/roopa-dharshini-104526239/',
              },
              // {
              //   label: 'Email',
              //   ,
              // },
              {
                label: 'Link Tree',
                href: 'https://linktr.ee/roopa_rd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://rupard.hashnode.dev/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Rupa-Rd',
              },
            ],
          },
        ],
        copyright: `Copyright © Developed by Rupa-rd`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
