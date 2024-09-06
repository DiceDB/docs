import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
		starlight({
			title: 'DiceDB',
      logo: {
        src: './public/logo.png',
        replacesTitle: true,
      },
      customCss: [
        './src/styles/docs.css',
      ],
      // themes: ['starlight-theme-light'],
      // useStarlightDarkModeSwitch: false,
      favicon: '/favicon.png',
			sidebar: [
        {
					label: 'Get started',
					autogenerate: { directory: 'get-started' }
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' }
				},
        {
					label: 'Commands',
					autogenerate: { directory: 'commands' }
				},
			],
		}),
	],
});
