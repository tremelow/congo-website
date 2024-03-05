---
title: Making my website using Hugo
date: 2024-03-05
draft: false
---

This website is generated from Markdown using [Hugo](https://gohugo.io/) and the [Congo](https://jpanther.github.io/congo/) theme! Here's how I set it up.[^tutorial]

[^tutorial]: This is **not** a tutorial, what I've written is very sparse, and gets into the very specific details I spent time on *despite reading tutorials.*

## Why Hugo?

- converts from Markdown, my note-taking "language" of choice
- large database of themes and examples
- fairly intuitive, template based
- recommended by a friend :)

Also, everyone says Hugo is fast. As it is the only static site generator[^generators] I've ever used, I can't comment on this, but my site has never taken more than a couple of seconds to build. This is great when iterating on designs.

[^generators]: I've also read good things about [Zola](https://www.getzola.org/) [here](https://mrkaran.dev/posts/migrating-to-zola/) and [Astro](https://astro.build/) [here](https://onebite.dev/hugo-vs-astro-which-static-site-generator-to-choose-in-2023/). The former uses a similar syntax to Hugo, but I've not yet faced issues with the unfortunate "magic" of Hugo which Zola supposedly prevents. The latter targets devs familiar with JavaScript and/or other website generator, which I'm not. Personally, I'd rather ~~steal from~~ use the large database of themes and examples for Hugo than tinker for days myself.

## How Hugo?

### Choosing a theme

I ended up choosing [Congo](https://jpanther.github.io/congo/) for my theme, for a few reasons.

1. multi-page
2. full of features but still fairly minimalist
3. seemingly well documented through the example site, with accessible code
4. customisable using (some) Tailwind CSS
5. callout boxes! (though they still need some work)
6. table of contents in blog posts

### Using a theme

Congo suggests 3 ways to import the theme. I chose the second, import it as a git submodule.

- updates are easier than naive download (see tutorial in example site)
- easy access to the example site (go to the `exampleSite` folder and execute `hugo server --themesDir ../..`)
- no risk of having Hugo delete the cache and having to redownload the theme

>[!warning]
>This means that after cloning this repo, you should run use `git clone --recursive`, or follow the standard cloning with `git submodule update --init themes/congo` before building the website!

My previous website used [Academic](https://github.com/HugoBlox/theme-academic-cv) by WowChemy / HugoBlox, but it was too closed off for me. I like the original approach of Hugo with snippets and modularity, while with HugoBlox, anything outside of the box was inaccessible. With Congo, I was able to tweak and modify a lot of things on my own.

### The project structure

I have a private git repo with the source,[^private] which I work on using `hugo server`. Once a blog post or modification is finished, I just run `hugo` which generates the website files in a `public` folder. This folder is linked to [another git repo](https://github.com/tremelow/tremelow.github.io), which is synced to the website with [Github Pages](https://pages.github.com/).[^pages] I just have to do

```sh
git add .
git commit -m "<date of update>"
git push
```

and we're all set! The website gets updated almost immediately.

Maybe importing the website as a submodule would also work, and it would make it appear in the online repo nicely, but this way works fine for me.

[^private]: My source is actually public [here](https://github.com/tremelow/congo-website), since I wanted the changes I made to the theme to be freely available. In the future, I plan on following [this StackOverflow guide](https://stackoverflow.com/questions/7983204/having-a-private-branch-of-a-public-repo-on-github) to separate between my drafts and my public modifications.

[^pages]: The Gitlab of most labs and universities have this feature too, nowadays! The CNRS webpage hosting does as well.

## My customisation of Congo

- Standard customisation
  - leaves for publications and "about" page
  - storing PDFs of publications in `static/<leaf name>` (in my case, `<leaf name>` is `work`)
  - Enabled the light/dark button and `header.layout = hybrid` (see [the Congo docs](https://jpanther.github.io/congo/docs/getting-started/#action-links))
- Allowed custom alt text for the profile picture to give proper credit to [Marie Morin](https://atelier-marmo.myportfolio.com/)
- Imported some icons from FontAwesome (fixed for dark mode, `<path d=...>` should be `<path fill="currentColor" d=...>`)
- Imported a TikZJax script by [benrbray](https://github.com/benrbray/tikzjax)
- Modified `badge` to allow `href` in it (because `button` was too clunky)
- Preview on footnote hover (thanks to [1](https://blog.securecloudops.com/post/doc-footnote-preview/) [2](https://github.com/aidenlx/better-fn)), which still needs work

All these modifications are visible either in `assets` or `layouts`.

## To-do

There are many things I'm still not satisfied with at the moment, which I'll hopefully tackle eventually.

- [ ] Blog section should present every post on the list page, topics should get flattened (users can click on breadcrumbs to get back to a topic summary)
- [ ] Callout boxes
  - [ ] Fix weird offset when it contains a list
  - [ ] Make them foldable and give them a potential title (maybe using [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details))
- [ ] Footnotes
  - [ ] preview/tooltip even on mobile
  - [ ] fix position when the footnote is at the edge of the content
  - [ ] fit width to content of footnote hover
- [ ] "Cite" button for publications, to make the Bibtex appear
- [ ] Dark / Light colour theme
  - [ ] Post-process TikZ images to fit with the theme (graft the post-process of [Obsidian TikZ](https://github.com/artisticat1/obsidian-tikzjax/) with the [most recent](https://github.com/bill-ion/tikzjax) or [most visible](https://github.com/benrbray/tikzjax) fork, as motivated by this [StackOverflow answer](https://stackoverflow.com/questions/77758813/how-to-use-tikz-libraries-in-tikzjax))
  - [ ] Different images depending on theme (reading list: [1](https://ahelwer.ca/post/2023-04-06-dark-mode/) [2](https://stenbrinke.nl/blog/adding-support-for-dark-and-light-images-to-hugo-figure-shortcode/) [3](https://zerovip.github.io/en/15738/))
- [ ] My own colour theme
- [ ] Colour to indicate current section in navigation bar (maybe superfluous with breadcrumbs) and/or position in Table of contents
- [ ] Automatic conversion from Obsidian to Hugo syntax (maybe with [Amethyst](https://amethyst.bencuan.me/)?)
- [ ] Enable comments (see [the Hugo docs](https://gohugo.io/content-management/comments/))
- [ ] Improve icons support using e.g. [the Icons module](https://hugo-mods.github.io/blog/icons/)
