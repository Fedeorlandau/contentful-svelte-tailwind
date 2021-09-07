# Contentful + SvelteKit + Tailwind CSS

Example project using SvelteKit with the [Contentful Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/), deployed to [Vercel](https://vercel.com).

_Live Example: https://contentful-svelte-tailwind.vercel.app/_

## Developing

### Env variables

Remember to set up a `.env` file with your conentstack keys

```env
VITE_CONTENTFUL_SPACE_ID=""
VITE_CONTENTFUL_TOKEN=""
```

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

This uses the [Vercel Adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel) for SvelteKit.

```bash
npm run build
```
