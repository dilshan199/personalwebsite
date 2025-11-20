# Modern Next.js Personal Portfolio Template

A **fully responsive, single-page personal portfolio template** built with **Next.js**.  
Perfect for developers, designers, and freelancers who want a professional online presence.

---

## Features

- Built with **Next.js** (React framework)  
- Fully **responsive** (desktop, tablet, mobile)  
- Smooth scrolling  
- Portfolio section to showcase your work
- Clean, well-structured, and easy-to-customize code  
- Can be deployed as a **Next.js app** or exported as **static HTML**  

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) v18+  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- A code editor like [VS Code](https://code.visualstudio.com/)  

---

## Site Content

All the site content (text, headings, descriptions, and some images) is stored in the `sitedata` file:

- Location: `app/sitedata.tsx` (or `.js` depending on your setup)
- Update any text or labels here to change what appears on the website
- Example:

```ts
export const siteData = {
    name: "Dilshan Keerawella",
    typedWords: [
    "Entrepreneur",
    "Full-stack Developer",
    "Freelancer",
    "Software Engineer",
  ],
  about: {
    heading: "About Me",
    Subtitle: "Read to know more about me",
  },
  // ... other sections like portfolio, contact, etc.
};

```

---

## Getting Started (Development)

1. Clone or download the repository:

```bash
git clone <your-repo-url>
cd personalwebsite

```

2. Install depencies

``` bash
npm install
# or
yarn install

```

3. Start the development server:

``` bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


```

Open http://localhost:3000 in your browser.
The page auto-updates as you edit app/page.tsx or any files.

Build for Production

``` bash
npm run build
# or
yarn build

```
This will create an optimized production build.

Static Export Instructions

To export as a static HTML site:

``` bash
npm run export
# or
yarn export
```
1. The static files will be in the out/ folder.

2. Upload the out/ folder to Netlify, Vercel, GitHub Pages, or any static hosting.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
