---
title: bibtex snippets
layout: post
---

I was talking to a friend about a feature that would be kind of neat for the HCI group's site, and it came up that Google Scholar doesn't recognize her name since it's one letter. Let's set aside the point about Google Scholar being stupid for assuming such a dumb thing about names and how they should be getting input from non-white people, non-male people, etc... and talk **solutions**. Well, sort of solutions.

The feature in question was *our own* bibtex snippet thing. Alongside all of our research papers, we'd have the snippet of bibtex that we want people to use when they cite our papers. Obviously the (overwhelming) majority of people citing our papers will use Google Scholar, but if you're ever curious to get confirmation, you should be able to go *somewhere* to know how to cite someone's work. You could look at the Digital Library, but not every publication will be through ACM, so it's not a perfect solution.

The inspiration for this was the feature GitHub (and lots of other sites I'm sure) offers where you click a button that looks like a clipboard and it copies a string of text (usually a URL) to your clipboard automagically. You can see an example on any repository page, or here:

![](/content/copy-to-clipboard.png)
*Neat, right?*

Naturally, someone's already implemented this sort of thing. If you're interested, check out [clipboard.js][clipboardjs].

After a few minutes of styling, I've updated my [research][] page to give you a link to copy the bibtex snippet *I want* you to use to your clipboard. Note that the text you'll copy is visible (although that's not technically necessary) despite bibtex citations looking inscrutable. It's uncool to do stuff with a user's clipboard without them knowing about it, so even if it's not ideal, try to be reasonably transparent about what your buttons and stuff do (end rant).

I happen to be happy with the snippets Google Scholar has come up with, but it's still convenient to be able to point to my own page for all the bibtex citations I might want to give people. As useful as Google Scholar is, I fundamentally don't trust Google to continue to support projects that they don't seem to think are *cool*. For evidence of that, see Google Reader (or don't, since it's gone).

If you want something similar, you can take a look at [the research page on my github repository][ghr] to see what the whole thing looks like in context (the markdown preview looks like a horrible mess, so I'd recommend looking at [the raw version][ghrraw]). Alternatively, you can look at this (relatively) self-contained gist

{% gist 86ee6a7d6e7fcd8b5074c000f4656633 %}


If it's helpful, great! If not, then at least maybe it serves as a useful reminder that you can put regular old HTML into your markdown if you want to do something a little more complicated than markdown typically affords.

And hopefully soon we'll be incorporating something like this into our group's site so people can copy bibtex citation keys directly from our site 🎉


[clipboardjs]: https://github.com/zenorocha/clipboard.js
[research]: /research
[ghr]: https://github.com/alialkhatib/alialkhatib.github.io/blob/master/research.md
[ghrraw]: https://raw.githubusercontent.com/alialkhatib/alialkhatib.github.io/master/research.md