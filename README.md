# Contentful + SvelteKit + Tailwind CSS + GraphQL

Example project using SvelteKit with the [Contentful Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) along with [GraphQL](https://www.contentful.com/developers/docs/references/graphql/), deployed to [Vercel](https://vercel.com). If you don't want to use GraphQL please refer to the [nographql](https://github.com/Fedeorlandau/contentful-svelte-tailwind/tree/nographql) branch which uses Contentful's SDK.

![web](images/web.png)

_Live Example: https://contentful-svelte-tailwind.vercel.app/_

_Live Example: https://contentful-svelte-tailwind.vercel.app/test_

## Developing

### Env variables

Remember to set up a `.env` file with your contentful keys

```env
VITE_CONTENTFUL_SPACE_ID=""
VITE_CONTENTFUL_TOKEN=""
VITE_CONTENTFUL_ENVIRONMENT="" // usually "production" or "master"
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

## Content types
This starter kit relies on the following content models.

### Page
![Page content model](./images/page.png)
* Title, short text.
* Slug, short text
* Components, References - many.

### Hero
![Hero content model](./images/hero.png)
* Title, short text.
* Description, short text
* CTA Text, short text
* CTA Link, short text

## Lighthouse score
![Lighthouse score](./images/lighthouse.gif)
