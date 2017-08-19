---
title: Commonly Used Tools
author: Ali
layout: post
---

I've been shopping this idea around to some people because
I don't want to build it myself.

If someone wants to make a tool that'll parse
all of the dependency files in a set of github repositories,
for example, all of the repositories in
[the Stanford HCI group's github page][],
and generate a list of the packages, tools, etc...
that are used by the group,
as well as sets of people who use various dependencies,
and render a page with all of the common tools that people in that group use.

So, for example, if you looked up
[AngularJS][],
you might find that
Niloufar and I have both (independently) worked on projects where Angular was listed as a dependency.

This idea has come to light because our Slack organization has a channel called
\#slack-overflow
where people can drop in with a question about any random thing.
We've fielded questions about tons of different topics,
but we've also _failed_ pretty badly in a lot of cases.

![a question about TensorFlow][crickets]
_I have, almost **literally**, no idea what she's talking about._
{: style="color:gray; text-align: center;"}

My _hunch_ is that the problem with this setup
--- a slack channel for tech support ---
is that you're in this catch-22 where you can't notify everyone naively to ask for help
(I sure as hell don't know anything about TensorFlow, and
I don't want to be notified about these kinds of questions),
but I do want to be notified about questions that I at least _might_ know something about.

As a technical solution, this is kind of clever, but
as any social scientist could probably tell you,
it's not especially clever.
There's a lot of knowledge that's being overlooked and ultimately lost here,
but I would argue that this is a good way to bootstrap _something_.
We could use it to pre-populate a database with seeded information about a person.
For example, here's the output from running a quick analysis of `package.json` files on some of my projects:

{% gist b574e135d29ca187c907d1c01fd41031 %}

So in the above snippet you see that
I've used
[express][] a lot and
[body-parser][] and
[morgan][] and some other things.

So if you're interested in building something like this,
either have at it or just [contact me][] or whatever.
I don't really feel like going and building it unless at least some other people think they
(or their groups)
would benefit from this.

[the Stanford HCI group's github page]: https://github.com/StanfordHCI/
[AngularJS]: https://angularjs.org/
[crickets]: /media/no-response.png
[express]: http://expressjs.com/
[body-parser]: https://github.com/expressjs/body-parser
[morgan]: https://github.com/expressjs/morgan
[contact me]: /contact