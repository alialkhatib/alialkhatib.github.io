---
title: Crowd Markets
author: Ali
layout: post
---
I've been meaning to write this post for a while, but the impetus to prepare a presentation on my work thus far (and expected work over the next ~2 months) gave me a good kick into writing more about what I'm working on and maybe to put real notes down on where I'm coming from, intellectually, and where I want things to be in a few years.

Over the past several weeks we (in the FUSE Labs) have been thinking about some of the most prominent - or at least visible - changes in the labor market lately. I'm talking about what's been called the peer, or sharing, economy, but these terms suggest things I don't think are accurate. Workers are not viewed as peers, and the sharing is (in many markets) relatively one-sided. Uber drivers don't typically use Uber when they need a ride for themselves (Lyft drivers we've talked to *do*). Let's put these terms and critiques about them aside for now and call this "collaborative consumption".

What I've been thinking about has boiled down to a worrying trend of what might best be described as exploiting workers and, as the [Department of Labor points out][DoL], misclassification of employees as contractors for the purpose of shirking codified obligations that employers share.

But there's more to it than this. Admittedly, this style of work differs in some ways from the kinds of jobs & careers you might have imagined having as you grew up (unless you imagined driving around in a car with a pink mustache on it, giving people rides). I don't think this is a blip in the history of labor trends, but rather that it's the first signal of what may be a potential future of work - some kind of amorphous crowd, transiently working small jobs that the rest of us don't want to (or can't) do. In that case, we might need to think about how "[The Future of *Crowd* Work][future]" might look.

I don't see any profoundly compelling reason that workers should feel exploited in markets like these, but I do think that without any input on the trajectory of markets like the ones we see today, there's a serious risk that the future of crowd work will be a bleak one.

Okay, so I need to admit to two things at this point:

1. We've been thinking about this for longer than a few weeks. Some of us for more than a year. In my case, I've been thinking about this ever since I got started working on [Dynamo][dynamo] to ameliorate problems we found in existing platforms like Amazon Mechanical Turk.
2. This is all motivation, but not really much of a plan on execution. Here's our plan.

We're working to build a labor market that benefits workers rather than renders them commodities. In the last several weeks we've talked to workers and leaders of worker organizations across a handful of industries, and in the next few weeks we hope to build something that provably illustrates the viability of a worker-centric market.

I realize that this is a really ambitious goal, but being at MSR has had this weird effect of making me pretty confident that even the most outrageously ambitious goal to better the world *might* in fact be doable. Far more importantly, a handful of  partners have not only been incredibly informative in our fieldwork, but profoundly supportive. This has made the task seem more achievable, but moreover it's validating that we're not just getting worked up over a trend nobody else thinks is real; these developments are in fact troubling to workers across industries.

So far we've mostly done exploratory fieldwork and made a handful of paper prototypes, but our goal is to learn more as we build a real system (or several) that both workers and customers will want to use - one that empowers workers as first-class citizens in the marketplace to make meaningful decisions collectively.

In this space, I'm drawing on several years of experience as a trained Anthropologist; I earned my BA in Anthropology from UC Irvine, and I've done fieldwork ranging from Central and South America to digital cultures (the Quantified Self was the subject of my undergraduate honors thesis).

Longer term, we want to put this system into the world as a code base, allowing people that want to make a marketplace together to spin up an instance like a Heroku App or a WordPress blog. More importantly, we're thinking about how we can make technologically enabled markets which:

- give workers locus of control
- benefit workers as well as consumers
- facilitate worker organization and communication, and
- brings workers together, enabling collective action

We're working on how to make that work technically, legally, and logistically, and culturally, and working with people from a handful of service industries to figure out what makes sense for them - and if there are common themes that we can identify and rely on. I'm also drawing on technical skills here; as a PhD student in CS at Stanford with studying collective action on the Internet, I believe I can contribute something valuable to these longer term goals.

If you have some input, or if you represent a group with interest in this kind of project (and especially if you're based in or around Seattle, but not strictly necessary), feel free to email me at t-alalkh@microsoft.com so we can get in touch. I'd love to hear from you.

[dynamo]: http://www.wearedynamo.org/
[future]: http://www2.cs.siu.edu/~dche2/files/futureofcrowdwork-cscw2013.pdf
[DoL]: https://s3.amazonaws.com/s3.documentcloud.org/documents/2166621/interpretmisclass.pdf