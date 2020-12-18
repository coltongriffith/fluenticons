# Fluenticons Viewer

2000+ pixel perfect open source icons from [Microsoft](https://github.com/microsoft/fluentui-system-icons).
![Fluent Icons](https://fluenticons.co/social/icon.png)

This site is not affiliated or connected to Microsoft in any way, this is just a viewer for the open-source icons from them.

This was made because I had to open their [Figma](https://www.figma.com/community/file/836835755999342788) file every time I wanted any icons from their list, there was no search or proper tool to view them, hence I made this website as a small weekend project.

## Features
1. Search from 2000+ icons.
2. Two pane view for Regular and filled icon sets.
3. Dark mode to see how they look on dark backgrounds.
4. Copy the SVG to the clipboard or simply download them.

---

This website is made with [Nuxt.js](https://nuxtjs.org/) and [Tailwindcss](https://tailwindcss.com/).

I have used some hack to show these icons like I am using the `img` tag to show the icons, as showing 2000+ inline SVGs made the website extremely slow.

## Roadmap
1. Make use of inline SVG tags in the `icon` component, so we can try changing the color of the icon. Making sure the performance is not affected (we could just keep the images and show a modal with the inline SVG).
2. Make an image API similar to [svgbox](https://svgbox.net/), using vercel serverless functions.

## License

Open source software licensed as MIT.


## Website Build Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work with Nuxt, check out [Nuxt.js docs](https://nuxtjs.org).
