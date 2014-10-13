---
title: Highlighty
author: Ali
layout: post
categories:
  - Uncategorized
---
When I started working on grad school apps I found myself using a lot of the same words, terms, phrases et al. pretty frequently. In some cases, it was justified (it's awfully hard to get around the word "qualitative" and "quantitative"), but in other cases it was just me being lazy and repetitive (you can call "qualitative and quantitative methods" something else, like "mixed methods").

Anyway, this poses a problem because I don't want to come off as lazy and repetitive, so I started thinking about ways I could solve that problem. This posed some challenges:

1. I *am* lazy. Everyone is. I defy you to prove me wrong, which you won't do because it would take too much effort. Lazy*.
2. I was on a bit of a deadline; I couldn't necessarily acquire a vocabulary of significantly greater size than the one I already had in my head (and to be honest, I don't think that's the problem as much as it is that certain words sort of bubble to the top of my head, and those form a sort of go-to vocabulary list of "Ali's favorite words").

So I needed something that could do the checking for me, would be consistent and fair, and didn't mind doing some extra work *at all*. Often this would fall to a friend (or an acquaintance) who would review writing for me. I had considered asking some friends (and did at one point!) but I needed friends who could be as obsessive as me. That's a tall order.

So I thought about using something like Mechanical Turk. I don't know if you've ever been to MT but I'll save you the exploration and tell you that it would be folly to trust people there with proofreading important documents. And besides, I trust *myself* to do the proofreading, I just needed **something** to point out where I needed to think harder about my word choice.

## something

I'll cut to the chase: I wrote a little web app in Javascript - a language I *mostly* learned last quarter (but had been hacking around with since last year) to identify and highlight words I was using too often. You can play with it [here](http://ali-alkhatib.com/projects/highlighty).  
![screenshot of highlighty](http://ali-alkhatib.com/projects/highlighty/thumb.png)

It's still very much in progress, but I like the general thrust of its outcome. There are still some things I'd really like it to do:

*   compare word usage against Google 1-grams (and maybe arbitrary n-grams?) for commonness ("of" is a naturally common word, so it shouldn't skew results if it shows up a lot in my writing)
*   overlapping UI - I originally thought it'd be nice if writing in Google Drive could be augmented by this, but as it turns out the implementation for that is somewhat clunky and heavy. I don't mind doing it, I just want to come up with a cleverer solution first. As an extended example, the highlighting feature in Facebook when you @link someone's name (and it provides you with a blue background around the name itself) is a good illustration of what I'd someday like to see (variable levels of red highlighting the text in the textbox into which you're typing).
*   stemming - I know, it doesn't do this and that's kind of a big deal.
*   phrase-finding - while using the word "precipitate" (or various tenses of it) is itself kind of bad, I'd be *seriously* alarmed if the entire phrase "precipitated this outcome" showed up even twice. I want to spot those phrases and bring **those** to the attention of a writer right away. That example would require 3-gram analysis, but this script only deals with 1-grams. Obviously, I'd want to go up as high as 5-gram or more (dependent on how intensive this is on the processor (partly dependent on how efficiently I code it)).

This has been kind of an interesting endeavor, not the least of which because it substantively took away from time I should have spent working on my last grad app (due January 1st), but also because it turned out I would be writing a text analysis engine in [an Informatics course this quarter](http://www.ics.uci.edu/~djp3/classes/2014_01_INF141/structure.html).

## Long term

I'll be putting this project on Github at some point when it's slightly more fleshed out, but for now I don't feel ready with it. It's funny that I worry more about my public profile on Github than my public profile on Twitter or Facebook (maybe because Github is much more intentionally deliberate, whereas some slack is given for social networking gaffes).

## Other things

I need to write a post about the workload I've unwisely taken on. Long story short, it's 33 units and weirdly I feel fine. Then again, we're still just wrapping up week 1, so I'll have to rethink this entire post in 5-6 weeks :)