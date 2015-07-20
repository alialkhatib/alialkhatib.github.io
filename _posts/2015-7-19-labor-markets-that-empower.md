---
title: Labor Markets that Empower Workers
author: Ali
layout: post
---
In the 1700s a man named Wolfgang von Kempelen invented a machine seemingly capable of beating any human at chess. If your memory is *really* good, you might know offhand that it took IBM until [1996 (or arguably maybe 1997)][chessmasters] to recreate that accomplishment with something called "Deep Blue". Obviously Kempelen didn't construct a computer the way IBM did; instead, Kempelen constructed a box which gave the illusion of calculating potential moves, but in reality housed a person. So effective was this illusion that Kempelen traveled the world demonstrating the Automaton Chess-player to the likes of Benjamin Franklin and Napoleon Bonaparte. You may know this machine simply as "The Turk" - a reference to the false humanoid automaton which seemingly made each move.

![Illustration of what The Turk probably looked like][cross-section]

As far as we can tell, the real person who worked out of the box was an excellent chess player, knew at least three languages, and ... that's about it. We know virtually nothing about the human who actually made the machine move, communicate, and (reportedly) trounce Napoleon. Thrice.

Roughly 10 years ago, Amazon publicly launched a platform called "Mechanical Turk". Its users, by which I mean the workers inside the proverbial box, call it "AMT". That platform, a labor market of sorts, turned the idea of jobs and careers on its head by offering workers money for completing *individual tasks* rather than *hours of work*. Instead of a single worker doing data entry involving hundreds of receipts, hundreds of workers would each transcribe a single receipt. Or better yet, *thousands* of workers would transcribe just a few lines from receipts. If your memory is *exceptionally* good (like, better than mine), you may know a bit about DialAmerica and the scheme they came up with to pay people to do work out of their homes (or you may have read about it more recently on [Ars Technica][fedsArticle]).

The experience on Mechanical Turk is that you might think you're dealing with an utterly powerful supercomputer, but in reality you're working opposite hundreds of thousands of "Turkers" scrambling to claim and complete tasks as they arrive.

By parallelizing human tasks and selling access to this pool of workers as some sort of computational human intelligence, Amazon recreated the magic of "The Turk" in modern times, a feat even I admit is rather amazing. By obfuscating the human in the black box, Amazon even recreated the relationship between the system's maker and the system's worker. This feat I find less inspiring.

In the 10 years since AMT launched to the public, our notions of the labor economy and of work itself have changed so dramatically that [violent cultural clashes][rioting] have ensued. But the riots were not over AMT, nor did "microwork" show up on any signs; the riots were over conflicts between traditional cab drivers and ride-sharing drivers who have turned that market into their primary source of income, competing directly with taxicabs on fundamentally different terms.

For their parts, drivers in these new markets like Uber and Lyft are responding naturally to market pressures; many of the drivers with whom I've spoken in fieldwork have been quick to point out that they used to drive for yellow cab companies, but that the requirements were onerous and they found it unappealing. These were not the totality of cases - I certainly met a number of people with other primary means of income, and drivers and customers in Uber, Lyft, and other markets all differ from one another (have you heard of Wingz? They're their own kind of culture, different from Lyft, which is different in turn from Uber). Nevertheless, the general feeling of these markets affording them an ability to do work that they value, that they couldn't have done otherwise, seems common.

The argument so far unstated is that there's a connection between the kind of information work that Turkers do on AMT and the kind of work done for Uber, Lyft, TaskRabbit, and others. The underlying connection I'm using is the focus on each task - each "gig" - as a work unit rather than hours. Rather than being a taxicab driver, you own a car and you happen to pick people up for rides when you're in town. Which you are, for 12+ hours a day. One driver told me he worked throughout the weekend by napping for a bit in his car between hails during off-peak hours.

In some ways, the relationship "gig economy" markets have made between workers and customers has paralleled the relationships Amazon and Kempelen instantiated with their Turks. That is, workers are seen as exchangeable, if as distinct things at all (let alone as people). More importantly, they're not stakeholders in the way we usually think of them. Employees of conventional companies are recognized for having an interest in the organizations for which they work; some form labor unions, others make the organization worker-run (these are called co-ops, and full disclosure: I'm really into them lately).

This summer, I'm hoping to demonstrate that this isn't how it has to be. At MSR we're working on building a labor market that's worker-centric, meaning that it benefits workers as well as consumers. We think that participants in a market don't need to be exploited for the market to succeed.

To this end, we've been interviewing people from something like half a dozen distinct industries. Some of those industries have been "Uberized", but many haven't. We're pretty sure we're not looking to compete with Uber on driving - not yet, anyway - while we *also* try to prove that a totally different kind of market than the ones we often see can thrive.

I'm earnestly looking forward to telling more about the partnerships we've made in the last few weeks, but the next steps now that we've made something like half a dozen mock-ups and had dozens of hours of meetings with stakeholders is to get started prototyping something tangible. Medium-term, we're trying to build systems that enable workers to work flexibly the way "gig economy" markets allow, but with these workers as first-class citizens rather than as the commodity being traded.

Our longer term plan is to put something into the world that other markets and industries could spin off if they wanted to organize collectively to make a marketplace. This is a challenging proposition, because it means needing to abstract constructs to the point that non-technical people can make meaningful changes (otherwise we risk simply creating a technocracy where the people savvy enough to make substantive changes to code-bases get to make all the decisions), but I think we can get something together that proves it's possible. A "Minimum Viable Product", if you will. So look forward to that.

This is all fairly high level and more about motivation than implementation. I'll be writing a few slightly more technical posts as time goes on, and maybe give a vignette or two of the people I interview. As always (but especially now), I'll point out that I'm open to feedback, criticism, questions, or commentary. Please don't hesitate to ping me.

[chessmasters]: http://arstechnica.com/gaming/2011/08/force-versus-heuristics-the-contentious-rise-of-computer-chess/2/
[cross-section]: https://upload.wikimedia.org/wikipedia/commons/2/22/Tuerkischer_schachspieler_racknitz3.jpg
[fedsArticle]: http://arstechnica.com/tech-policy/2015/07/watch-out-sharing-economy-the-feds-are-watching-this-whole-contractor-thing/
[rioting]: http://www.independent.co.uk/news/world/europe/uber-row-in-france-president-hollande-condemns-lowcost-firm-after-violent-taxi-driver-protests-in-paris-10346909.html
