---
title: Highlighty
author: Ali
layout: post
categories:
  - Uncategorized
---
When I started working on grad school apps I found myself using a lot of the same words, terms, phrases et al. pretty frequently. In some cases, it was justified (it&#8217;s awfully hard to get around the word &#8220;qualitative&#8221; and &#8220;quantitative&#8221;), but in other cases it was just me being lazy and repetitive (you can call &#8220;qualitative and quantitative methods&#8221; something else, like &#8220;mixed methods&#8221;).

Anyway, this poses a problem because I don&#8217;t want to come off as lazy and repetitive, so I started thinking about ways I could solve that problem. This posed some challenges:

1.  I *am* lazy. Everyone is. I defy you to prove me wrong, which you won&#8217;t do because it would take too much effort. Lazy*.
2.  I was on a bit of a deadline; I couldn&#8217;t necessarily acquire a vocabulary of significantly greater size than the one I already had in my head (and to be honest, I don&#8217;t think that&#8217;s the problem as much as it is that certain words sort of bubble to the top of my head, and those form a sort of go-to vocabulary list of &#8220;Ali&#8217;s favorite words&#8221;).

So I needed something that could do the checking for me, would be consistent and fair, and didn&#8217;t mind doing some extra work *at all*. Often this would fall to a friend (or an acquaintance) who would review writing for me. I had considered asking some friends (and did at one point!) but I needed friends who could be as obsessive as me. That&#8217;s a tall order.

So I thought about using something like Mechanical Turk. I don&#8217;t know if you&#8217;ve ever been to MT but I&#8217;ll save you the exploration and tell you that it would be folly to trust people there with proofreading important documents. And besides, I trust *myself* to do the proofreading, I just needed **something** to point out where I needed to think harder about my word choice.

## something

I&#8217;ll cut to the chase: I wrote a little web app in Javascript &#8211; a language I *mostly* learned last quarter (but had been hacking around with since last year) to identify and highlight words I was using too often. You can play with it [here][1].  
![screenshot of highlighty][2]

It&#8217;s still very much in progress, but I like the general thrust of its outcome. There are still some things I&#8217;d really like it to do:

*   compare word usage against Google 1-grams (and maybe arbitrary n-grams?) for commonness (&#8220;of&#8221; is a naturally common word, so it shouldn&#8217;t skew results if it shows up a lot in my writing)
*   overlapping UI &#8211; I originally thought it&#8217;d be nice if writing in Google Drive could be augmented by this, but as it turns out the implementation for that is somewhat clunky and heavy. I don&#8217;t mind doing it, I just want to come up with a cleverer solution first. As an extended example, the highlighting feature in Facebook when you @link someone&#8217;s name (and it provides you with a blue background around the name itself) is a good illustration of what I&#8217;d someday like to see (variable levels of red highlighting the text in the textbox into which you&#8217;re typing).
*   stemming &#8211; I know, it doesn&#8217;t do this and that&#8217;s kind of a big deal.
*   phrase-finding &#8211; while using the word &#8220;precipitate&#8221; (or various tenses of it) is itself kind of bad, I&#8217;d be *seriously* alarmed if the entire phrase &#8220;precipitated this outcome&#8221; showed up even twice. I want to spot those phrases and bring **those** to the attention of a writer right away. That example would require 3-gram analysis, but this script only deals with 1-grams. Obviously, I&#8217;d want to go up as high as 5-gram or more (dependent on how intensive this is on the processor (partly dependent on how efficiently I code it)).

This has been kind of an interesting endeavor, not the least of which because it substantively took away from time I should have spent working on my last grad app (due January 1st), but also because it turned out I would be writing a text analysis engine in [an Informatics course this quarter][3].

## Long term

I&#8217;ll be putting this project on Github at some point when it&#8217;s slightly more fleshed out, but for now I don&#8217;t feel ready with it. It&#8217;s funny that I worry more about my public profile on Github than my public profile on Twitter or Facebook (maybe because Github is much more intentionally deliberate, whereas some slack is given for social networking gaffes).

## Other things

I need to write a post about the workload I&#8217;ve unwisely taken on. Long story short, it&#8217;s 33 units and weirdly I feel fine. Then again, we&#8217;re still just wrapping up week 1, so I&#8217;ll have to rethink this entire post in 5-6 weeks :)

 [1]: http://ali-alkhatib.com/projects/highlighty
 [2]: http://ali-alkhatib.com/projects/highlighty/thumb.png
 [3]: http://www.ics.uci.edu/~djp3/classes/2014_01_INF141/structure.html
