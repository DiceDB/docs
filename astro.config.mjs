import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
		starlight({
			title: 'DiceDB',
      favicon: '/favicon.png',
			social: {
				github: 'https://github.com/dicedb/dice',
        discord: 'https://discord.gg/6r8uXWtXh7',
        twitter: 'https://twitter.com/thedicedb/',
        'x.com': 'https://twitter.com/thedicedb/',
			},
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
