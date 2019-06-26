---
title: Digital Forests
layout: post
---

I've been reading about trees and forestry lately, and something about this story James Scott tells in his book _Seeing Like a State_ has me thinking a lot about online advertising (and, more generally, the design of sociotechnical systems). It's a story about the exploitation of a complex resource and the delayed, but ultimately devastating, toll that this exploitation took.

At the turn of the 18th century, people in Europe were desperate for timber. They were harvesting vast tracts of forests to meet a demand that seemingly couldn't be satisfied, and after some time people began to realize that there was no way this could keep going. So people became experts at estimating how much timber a forest could yield without irreparably harming the forest, starting by doing things like figuring out a tree's productivity from its size, or sampling a plot of a forest to infer the whole forest's capacity.

In one story, this guy Johann Gottlieb Beckmann traced squares on a map that he was confident were representative chunks of the forest, and sent people out to measure the sizes of the trees in their survey area. They'd hammer a color-coded nail into each tree they found, and when they got back Johann would just count up how many nails of each color were _missing_. If you sent someone out with 10 red nails and they came back with 4, then you could guess they found 6 of whatever kind of tree called for a red nail. You could work out from there a rough, but _actionable_, estimate of how many trees of varying sizes there were in the forest.

People in Europe took this idea and really ran with it. A field (hah, sorry) called "scientific forestry" emerged, and people thought about how to optimize forests for more productivity (it's a whole point that Scott makes that literally all anyone cared about was how many planks of wood you could get from a tree, but _we don't have time for that_ (and we _really_ don't have time for this post on [data carpentry][carpentry], which is a whole other thing)). A German school of thought took hold - one that called for a whole system of maintaining forests with careful, absolute precision: they removed the underbrush, the fallen leaves, the fungus, the wildlife; they removed and replanted the trees in a literal grid, like a pristine garden, with a single species of tree that they found was most productive - creating a **monoculture** ecosystem.

Scott writes that, for the first several decades, everything was going fine. But after 70 or 80 years - that is, after a generation of trees had run its full course - things went off the rails. Pests that thrived on Norway spruce (the tree species of choice) overwhelmed the forest, making thick clouds of insects through which people could hardly see. And all the things that contribute to soil production - birds, insects, animals, etc... - had no place to go when foresters aggressively managed them out. All the trees being the same approximate age also made them all roughly equally vulnerable when storms came through - there were no larger trees to protect the smaller, younger trees. Something like 20-30% of the forest's productivity vanished in the second generation, with some doing far worse; a word entered the German vocabulary around that time: "_waldsterben_", or "_forest death_".

What people realized was that **diversity is what makes the ecosystem strong**. They began a process, spanning decades, to reintroduce spiders, ant colonies, fungi, birds, and other life back to the forests they had (metaphorically, although almost literally) hollowed out.

Europe narrowly averted an ecological disaster. Slowly, the forests recovered.

## _What went wrong?_

It was one thing when people who engaged in _scientific forestry_ simplified the world as a means to _interpret_ it. It was necessary for them - and perhaps still is for all of us - to filter out things that aren't relevant to the decisions we make. We can't take it all in - it'll overwhelm us. If you trace a square on a map and hammer a nail into all the trees in that square according to how big those trees are, it's reductive but doesn't interfere too badly (granted, that nail probably didn't help).

But it was a whole other thing when they turned that simplifying function back onto the world, now _shaping_ the world according to the reductive functions they used to interpret it.
When you reshape the world to reflect the square you drew, you invade and disrupt all of the lives that interact with that forest - not just the birds and insects that make homes in those trees, but the people that live nearby and hunt (or live, or just hang out) in that area as well.

So I've read a lot about trees _and now so have you_, and you might (rightfully) be asking yourself why I took you on this ramble.

I wonder if there's a useful parallel to draw between this history and the phenomena we're seeing today with advertising, data mining, quantification, etc... that data scientists and engineers rely upon to make sense of the digital worlds they create and manage.

We're not clickthrough machines, but that's how analytical systems often seem to read us. And it's not necessarily calamitous when we build systems that help us interpret the world in simplified ways, but it _might_ become a problem when those systems begin to reshape the world according to the simple, digestible, but hollowed out metrics that we developed initially to _interpret_ the world.

Scott is careful to carve out (sorry again) that he's _not_ saying that a simplifying function for interpreting the world is bad. I want to be very careful - almost as careful as Scott was in the book - to stress that reductive functions are okay. We experience a world that's way, way too rich for us to make sense of it all at once. We think about narrower slices of life to help make sense of life more broadly. "Do you have a healthy lifestyle?" becomes "are you getting enough exercise?" becomes "are you hitting 10,000 steps?" because it's hard for me to answer whether my lifestyle is healthy just on those terms, and it's hard for an algorithm to quantify how much exercise is "enough", but it can count steps and tell me that I've taken 6,555 steps today.

[![6,555 steps at this point in the day; apparently I average 10,460 steps by this point in the day.][steps]][steps]
_6,555 steps at this point in the day; apparently I average 10,460 steps by this point in the day._

I don't think anyone thought that clicking on links was this _perfect_ way of understanding how we think about and engage intellectually with stuff we encounter on the web, but it was one way that designers could make sense of things in these populated ecosystems. And that's fine when you're just trying to nail down some ideas and get a grasp on how people _exist_ on your site.

### But when reductive functions stopped being lenses to make sense of the world as it was, and started being references for how the world _should_ be, pests like clickbait became swarms, and the digital forest started to die.

The point of the book is that states look for ways to make the world "legible" as Scott puts it, as messy and unorganized and complicated as it is, by thinking about things in very narrow, simplified contexts; and sometimes they _impose_ those simplified models back onto the world with disastrous consequences. And those disastrous consequences are typically the result of _forcing_ those reductive functions on the world, and the result of an ideology that this reductive model of the world is part of some end goal with moral weight attached to it. These kinds of ingredients create disasters of epic scales, Scott argues.

Scott's book is about governments and the mistakes they make trying to make the world legible. But are we sure Facebook, Twitter, YouTube, Google, and all of these other companies aren't, in their own ways, cultivating digital **monoculture** forests that are barreling toward disaster in the process of making the world digital?



If this sparks any thoughts, I'd love to hear about it. Maybe I'm barking up the wrong tree (okay _really_ sorry, and I'm done).


addendum: I was listening to podcasts this morning (one of these mornings) and might have been scooped; on [the latest episode of Recode Decode][rd], Kara Swisher interviewed Joi Ito and he apparently wrote a book about the reductive functions that digitally mediated systems impose on us. It sounded, especially near the end, like he's come to some of the same ideas that I was just noodling around with. So... maybe this thought has been more fully explored by that book. We'll see (after I read this one I'm currently on)!

[rd]: https://overcast.fm/+QLdueBi1w
[carpentry]: http://www.mimno.org/articles/carpentry/
[steps]: /content/steps.png