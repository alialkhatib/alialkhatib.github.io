---
title: Relative Labeling
author: Ali
layout: post
---

I'm working on some new projects, and one of the things that makes new projects a lot of fun is that you learn a lot very quickly, especially through conversations with other people.
One of the projects I'm working on is related to our [street-level algorithms][] work.
A conversation with someone who does AI and NLP stuff prompted me to think about this quality of data labeling that I wanted to tease out, but can't really work into the project.
Maybe someone will read this and have an insight and either let me know or just go and write a really cool paper about it.

People have written about how one shortcoming of collecting training data - or rather, a shortcoming of training data itself - is that you need to know the answer to the question. Tasks soliciting training data have to be indistinguishable from tasks often used as "attention checks" - basically, tasks that you already know the answer to, where you say "if someone gets this wrong, then I know they're actually not paying attention". There are ways to work around this (e.g. by getting people to agree on something (basically seeking high inter-rater agreement)), but essentially these all require a correct answer and incorrect answers.

The problem is that, philosophically, these kinds of tasks don't encompass all statements that have *truth value*.
Statements about perceptions have truth value but can differ from person to person.
"I like ants on ice cream" has a certain *truth value* that others might not share.
Recommender systems get around this using collaborative filtering (basically using a constellation of people's opinions about something to sorta try and triangulate how you might feel about it, given that you generally agree with those people about the stuff you all have rated).
Netflix and Last.fm and probably lots of streaming and product recommendation systems do this: if you loved `song_a` and `song_b` but you hated `song_c`, then someone else who also loved `song_a` and `song_b` and hated `song_c` might be really interested in whatever you happen to think of `song_d`.

There's more interesting, or at least more complicated, math behind real-world implementations of this; but the overly simplistic intuition is that you're probably going to agree with someone about a thing if you agree about other things. If you feel comfortable with that, you're at least ready for dinner parties.

This helps us corner a more central thought: that conventional training data tends to be absolute.
When you're labeling stuff,
something either **is** or **isn't** spam;
it **is** or **isn't** pornography;
it **is** or **isn't** a dog, or a bee, or a cow, or whatever you're labeling for.
Even in collaborative filtering, discrete often-one-dimensional ratings (e.g. 1-5 stars) tend to be all that informs the system.
We sort of approximate nuance with tons of labels on tons of data points.

> You're the sort of person who **loves** `song_a` and `song_b` but **hates** `song_c`, so I predict that you'll like `song_d`.

This sort of represents a philosophical "absolutism", for lack of a better word. Things either **are** or **aren't** some *quality*. 
But people are messy, and complicated, and every effort people make to make sense of that complexity seems to add more complexity.
We're **a little** of some quality, or that quality is blended with other qualities.

This is aside from intersectionality - how do you even have a conversation about how your racial identity and your gender identity interact if you're dealing with a system that wasn't built at the outset to understand mixed race or trans gender identity? ([Sasha Costanza-Chock has written about this last issue][sasha] - dealing with body scanning technology for which you either match how a **man** should look or a **woman** should look).





[intersectionality]: #
[sasha]: #
[street-level algorithms]: #