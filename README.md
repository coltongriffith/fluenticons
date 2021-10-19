# Fluenticons Viewer

4000+ pixel perfect open source icons from [Microsoft](https://github.com/microsoft/fluentui-system-icons).
![Fluent Icons](https://fluenticons.co/social/icon.png)

This site is not affiliated or connected to Microsoft in any way, this is just a viewer for the open-source icons from them.

This site was made because I had to open their [Figma](https://www.figma.com/community/file/836835755999342788) file every time I wanted any icons from their list, there was no search or proper tool to view them, hence I made this website as a small weekend project.

---

### ***New version disclaimer.***
This is still under development and I have been trying to work on this a little at a time. It could be updated over time without any announcement, if you'd like to contribute, you're welcome to open a PR.

You can still find the old version [here](https://github.com/fayazara/fluenticons-old)


### What's new in v2?

- No more hacks, I've used actual SVG's now, so I was able to add some new features like manipulating them.
- You can copy snippets for SVGs, Vue component, React Component, HTML Image.
- You can download SVGs, PNGs, WEBP, Vue component, React Component now.
- Manipulate colors to see how the icon looks.
- More performant, loads way too fast now. (Scores 100 on Lighthouse Yay!!). Was surprised to see the site loading in 600ms when I moved from vercel to cloudflare pages.

### What's next?

1. Make an advanced editor like adding frames behind the icons. Inspiration - [Bakery](https://apps.apple.com/ne/app/bakery-simple-icon-maker/id1575220747?mt=12) & [Iconscout's Icon Editor](https://iconscout.com/icon-editor) (requires a lot a math, which I am not good at.)
2. Make a npm package for others to use the components in their own web projects.




### Tech stack
1. Nuxt.js
2. Tailwind Css.
3. Hosted on cloudflare pages.

### To run the project locally

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### SVG and File Cleanup

The icons are cleaned with SVGO, so you can use the same icons in your project.

Use SVGO and run `svgo -r ./**/SVG/*.svg -o ../cleaned` to clean and minimise all the raw svg files.

Delete all sizes except 24, since Microsoft was providing thousands of icons ins multiple sizes, which was not really needed for this project.

find `<FILEPATH>` -type f \! -name "_24_"

Append -delete at the end to delete from the `<FILEPATH>`


