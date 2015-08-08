This is the [Jekyll][] source for my site, adapted from [Adrian Sampson's site][asampson]. The design, code, and content are made available under the [Creative Commons Attribution][cc-by] license.

# How to deploy it for yourself

It shouldn't be too tricky to deploy it on your own. In general, you should follow [the official instructions][] for this, but I'll sort of reiterate them and make additional suggestions here:

First, you'll fork my repository - I'm not taking pull requests (that would essentially be like a guest post I guess), so you'll want to have your own repo.

![guide image][image]

Fork is in the top right hand corner. Click it and you'll have a repo called alialkhatib.githubpages.io. Hurray! Except it won't work that way. Change the repo name to `yourusername`.githubpages.io - this is just a semi-arbitrary requirement for a personal page to work. I mean it's reasonable, but you just have to trust that this whole thing won't work if it doesn't match your user name and everything. Why can't the name be whatever? *Because*, that's why.

Once it's renamed, go into your terminal and clone:

```
$ git clone https://github.com/yourusername/yourusername.github.io.git
```

Now that you have the code, there are a few tweaks I suggest people make:

- This is really important because it'll be really confusing for me otherwise: in `_layouts/default.html` there's a snippet of code at the bottom for Google Analytics. It has the effect of putting that code everywhere on the site. It's great. It also specifically associates to *my* account, so if someone were to *fork my repository and not remove that code* (kinda like how we're doing things), then it'd confuse my analytics. If you have Google Analytics, all you really need to do is change the value that reads

```
ga('create', 'UA-54110533-1');
```

so that the code is yours. That's it! If you don't use Google Analytics, you should probably just comment out the whole `<script>` block at the bottom of the page.

- You should either *remove* `CNAME` or *change* the value of it based on the domain name you're going to use. There are excellent instructions (by GitHub, no less!) [here][custom domain instructions], and you should follow them. There's also some acrobatics you'll need to do with A records and your domain registrar, and I remember it being vaguely confusing, but I can't remember any specific tips. The [GitHub][A record stuff] page on it was good. Follow those instructions and make the appropriate changes with your registrar.

- You'll *really* want to get into the `_config.yml` file at the root of the directory and change stuff like name, Twitter handle, etc... as it'll get applied to some other stuff around the site.

- You'll probably figure on this, but you'll want to change the `research.md`, `contact.md`, `index.md`, etc... files, delete all of the posts in `_posts`, fix the boilerplate draft in `_drafts` so it says stuff like your name and whatnot, and maybe tweak the colors and other stylistic choices made in `_source/main.less`.

- Do yourself a favor and make/use a better favicon than the one I use.

Once you've done all that, go ahead and commit, push, and then debug why it might not have worked right away.


[cc-by]: http://creativecommons.org/licenses/by/3.0/us/
[Jekyll]: http://jekyllrb.com
[asampson]: https://homes.cs.washington.edu/~asampson/
[the official instructions]: https://pages.github.com/
[image]: /media/fork.png
[custom domain instructions]: https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/
[general aid]: https://help.github.com/categories/github-pages-basics/
[A record stuff]: https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/