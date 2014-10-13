---
title: Markdown Extension Regex
author: Ali
layout: post
categories:
  - Code
---
First, the part you probably care about (a regex pattern to identify Markdown files): {% gist alialkhatib/fa11e17f385db6970cc3 %}

Okay, let's begin...

Recently I was avoiding some work with a personal project and I realized that I needed to find all of the Markdown files in a directory. I use `.md` consistently in my own projects, but I'm sure in collaborative settings (or indeed across projects) the file extension differs significantly. Indeed, [this StackOverflow question](http://superuser.com/questions/249436/file-extension-for-markdown-files) suggested half a dozen file extensions.

I didn't do much looking (and in hindsight, I should do that at some point to check my answer) before I decided to write up the pattern for a Markdown extension myself based on the accepted answer. I could (perhaps should) have used the canonical Markdown source on what extensions should be used, but

1. That made for a less interesting challenge (I'll explain in the next line)
2. I wasn't adhering to that prescription anyway (nor was most of Github - a cursory search (another thing I should revisit later) yields relatively few `.markdown` extension files in favor of `.md` even accounting somewhat for the bias Github creates by creating `readme.md` files - again, I should come back to this later)

I think it's a fairly simple pattern as far as regex goes, but that speaks more to how bizarre regex naturally looks than anything else. Walking through it can be difficult, but I find it's easiest to read it from the outside inward, like peeling an onion.

If you want to cry while reading regex patterns, that's fine too. Let's begin:

- `.*\.`...`$`: These are sort of loose ends, so they'll go together, but they serve a single purpose together. `.*\.` means "I'm looking for *any* character in any length (including zero characters) followed by a litteral `.`" (hence the backslash). `$` is a regex special character meaning "end of string". It might be unique in Python's implementation of regex (although I doubt it) that in *multiline* strings, `$` means "end of line". Worth knowing, and as an aside if you want to search multiple lines there's [a way to do that](https://docs.python.org/3.4/library/re.html#re.M).
- `(m`...`|text)` - this means "I'm either looking for `m`+whatever weird extras I ask for, or `text`"
- `(?:`...`)` - given the previous option (between `m` and `text`), if we're going down the `m` path then you need to find something matching in this group. The `?:` modifier tells the engine not to capture it as its own "group". As far as I can tell, this isn't really that important except that retaining groups from these little bits and pieces is unnecessary, so why bother?
- `d`...`|arkdown|kdn?` - I'm lumping things together so this post doesn't go forever. I'm either looking for `d` or `arkdown` (forming `markdown`, thanks to that previous `m`), or `kdn` (again, forming `mkdn`). Here it's becoming clearer to me that we could've made this slightly more concise. I might revisit it later.
- `(?:te?xt|o?wn)?` - this is one of those mistakes you know you're making in the moment but can't help but make anyway; like all decisions one makes while drunk (except I wasn't drunk while writing this, which would be a convenient excuse) - I'm looking not to capture (`?:`) either `txt` with an optional `e` *or* an optional `o` followed by `wn`. All of this is optional. This can result in patterns like `mdtxt`, `mdtext`, `mdwn`, `mdown`, or simply `md`.

So that's it. I might revisit the `arkdown` cop-out later, since I'm sure there must be some clever way to integrate that in the existing pattern, but it's worth pointing out that you could solve this problem another way, much more legibly, in Python:

{% gist alialkhatib/aef135321ad92e3328fd %}

The advantage of this is that it's about a million times more readable. We're looking for any of the things in the list at the top, which we can read and edit much more easily.

An hour wasted writing this post? Maybe. Let me know if this post helped, made you laugh, or inspired you in some way.