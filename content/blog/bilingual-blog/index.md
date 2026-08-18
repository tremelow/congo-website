---
title: "Bilingual features of this blog"
date: 2026-08-18
sourceLang: en
---

On this blog, some posts are available in two languages and some are only available in one language. 
For example, my [video recommandations](blog/video-recommendations/) are usually commented in both French and English, while my [teaching material](blog/tp-pisano/) is only available in French, and this post is only available in English.
This blog has to naturally reflect the fact that I, like many of my colleagues and students, work in both languages pretty much interchangeably.[^multilingual]

[^multilingual]: This modification should work with an arbitrary number of languages, but I only tested it with two.

## The features

By default, [Hugo](blog/hugo-blog-setup) tends to fence off content in different languages, with a separate website for each language.
This is not what I want.
A user fluent in both French and English should be able to browse and access articles freely, without having to switch all the time.

Therefore, one must distinguish the article's language from the user/website's language.
If the article is only available in one language, it must still appear on both versions of the website. If it exists in both languages, the displayed version should match the website's language.

This leads to the scenarios below:

{{< figure
    src="page_en.png"
    alt="The display of an English-only post for both versions of the website."
    caption="An English-only post. The icon on the right indicates the site's language."
    >}}

The address of the post is `blog/...` for the English version (above) and `fr/blog/...` for the French version (below), but the English content is automatically copied to the French version of the website, at generation.
This is indicated by the `{{< icon "translate" >}} EN` icon[^icon][^no-flags] in the metadata.

[^icon]: I have been told that the default icon looks like the Google Translate logo, which could give the wrong idea that posts are translated automatically. I tried other icons, but unfortunately, they all felt ill-balanced compared to this one.

[^no-flags]: I initially used flags to indicate the language of the post, but [flags are not languages](https://www.flagsarenotlanguages.com/blog/why-flags-do-not-represent-language/).

The converse is also possible:

{{< figure
    src="page_fr.png"
    alt="The display of an English-only post for both versions of the website."
    caption="A French-only post."
    >}}

Here, the addresses are still `blog/...` and `fr/blog/...`, but the source content is French.
The content may exist in both versions:

{{< figure
    src="page_both.png"
    alt="The display of a post available in both languages, matching the website's version."
    caption="A bilingual post. The title is translated but the slug/address is identical."
    >}}

As long as the slug is shared, the language switcher at the top of the page will take the user to either version of the post.

## Using the features

Once the setup ([described below](#setup-and-modifications)) is completed, every post should include the source language in the front matter, for example `sourceLang: en` or `sourceLang: fr`.[^cascade] 
A parameter `hideSourceLang` disables the display of the source language in the metadata.

[^cascade]: In theory, this `sourceLang` parameter should be automatically inherited from the section's front matter, if the post is in a section with a `cascade` parameter, but I found that this inheritance sometimes always fails for some reason. I recommend to always include it in the post's front matter.

The content creation is otherwise fairly straightforward.
There is a default `index.md` (in either language) and an accessory `index.xx.md` for each post, where `xx` is the other language (either `en` or `fr`).
If the post is monolingual, `index.xx.md` is not needed. 

### Setup and modifications

The first step is to mount the content directory in `module.toml` in order to populate either language with all the content, regardless of its source language. This is done with the following configuration:

```toml
# module.toml
[[mounts]]
  source = "content"
  target = "content"
[mounts.sites.matrix]
  languages = [ "*" ]
```

Now to display the source language in the metadata, I modified `_partials/article_meta.html` to include a new partial `_partials/meta/lang.html` that displays the source language if it is different from the website's language.

```go
// _partials/article_meta.html
{{ if and (ne .Params.sourceLang .Language.Name) (not (.Params.hideSourceLang | default false)) }}
  {{ $meta.Add "partials" (slice (partial "meta/lang.html" .Params.sourceLang)) }}
{{ end }}
// showDate, etc
```

```go
// _partials/meta/lang.html
<span class="fallback-language-{{ . }}">
  {{ partial "icon.html" "translate" }}{{ upper . }}
</span>
{{- /* Trim EOF */ -}}
```

### Separate content directories

I have decided against using separate content directories, but it should be possible with the following configuration.

```toml
# languages.en.toml
contentDir = "content/en"

# languages.fr.toml
contentDir = "content/fr"

# module.toml
[[mounts]]
  source = "content/fr"
  target = "content"
[mounts.sites.matrix]
  languages = [ "*" ]
[[mounts]]
  source = "content/en"
  target = "content"
[mounts.sites.matrix]
  languages = [ "*" ]
```

{{< alert icon="exclamation-triangle" >}}
When creating both `en/blog/my-post/index.md` and `fr/blog/my-post/index.md`, the latter overwrites the former. Identifying at least one of the two as `index.en.md` or `index.fr.md` is necessary.
This is compatible with separate content directories `content/en/` and `content/fr/` (modifying `params.xx.toml` accordingly), 
{{< /alert >}}

## Summary

I'm fairly happy with this setup, which allows me to be lazy about translating posts, while still allowing users to access all content in either language.
The use is simple: a file `page.md` can be supplemented by `page.xx.md` (where `xx` is either `en` or `fr`), and both versions are informed by the `sourceLang` parameter in the front matter.

This is especially useful for my [work page](work) which can now simply be copied from one language to the other (yes, this is still a handwritten list).
Hopefully, I won't be the only one this helps!
