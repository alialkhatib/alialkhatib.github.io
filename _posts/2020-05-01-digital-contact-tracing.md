---
title: "We Need to Talk About Digital Contact Tracing"
---

Over the past few weeks, Apple & Google have floated the idea of developing and distributing a digital contact-tracing app that will inform people when they've been exposed to someone who's contracted COVID-19, and communicate to people that they've been exposed to *you* if you later test positive yourself (edit: since writing this, Apple has released a beta of iOS 13 that includes the SDK necessary to begin using this system). Writing this in late April and early May, it feels like we're desperate for information and weary from not knowing who's caught COVID-19, who's still vulnerable, who gets it worse or why, or even how to treat it. We're desperate for any information we can get our hands on. This proposal by Apple and Google promises to give us some information that we can finally start to work off of. This isn't going to work, and we need to stop this plan before it gets off the ground. I'll explain why in this post.

Last year I wrote about "[digital forests][]" and the harmful downstream effects of simplifying and reducing how we track and measure our messy world (and [earlier this year gave a working talk about it][digital forests talk]). I wrote about how we develop models to describe the world - and our lives within it - that are necessarily but also dangerously reductive. In James Scott's book _Seeing Like a State_, he writes about foresting in Europe, the Great Leap Forward, and other case studies of centralizing ideologies that ignore or trample on the delicate balances of our social and natural ecologies. During the Industrial Revolution it was difficult to reason about air pollution and so we wrote it off entirely; decades later, that came to haunt us in the form of acid rain and widespread deteriorating public health.

Digital contact tracing has all the hallmark characteristics of these case studies. If we're not careful, we're going to adopt these systems, and the facile, naive models of the world that these systems create will give us a dangerously incomplete picture of the world. Worse, if these systems become the principal drivers of our policies, we'll go from looking at an incomplete map of the world to navigating with one.

The schemes we're reading about - some from joint partnerships such as Apple & Google, others unilaterally presented by surveillance startups such as [Palantir][palantir proposal] and [Clearview AI][clearview proposal] - all offer their own flavors of omnipresent surveillance and differ in bits and pieces. I'm going to focus on the only credible proposal - the one Apple & Google have floated - because I hardly even know where to start with the other proposals. Let's just let it suffice to say that we shouldn't take Palantir's offer [to surveil us even more than they already do][palantir surveillance]; as for Clearview, [they scraped all of our images without our consent][clearview data] and subsequently endured [numerous embarrassing data breaches][clearview data breaches].

Let's talk about what digital contact tracing generally entails by using Apple & Google's system as a sort of model case. If you know what their proposal entails, feel free to skip ahead to [welcome back][], but chances are that in the time since I started writing this post something has changed, so if for no other reason than to date things, you should probably at least skim the description to know what the situation was at when I wrote this.

## What this scheme will do (more or less, at the time of writing)

The simplest, most direct way to implement digital contact tracing would be to track where you are at any given moment. If you spend 20 minutes at a coffee shop, somewhere there'll be a record that **you** were at **Starbucks** from **12:00pm-12:20pm**. Somewhere, theoretically, there would be records for everyone participating in this scheme, such that if someone wanted to ask the system "who was at Starbucks at 12:10pm?", a list would come back with your name on it. To be honest, Google probably already has the means to produce a list like this from Google Maps. You can even request a record of all the places Google Maps knows you've been over a certain timeline.

Instead of recording **where** you are the way Google Maps does or other location-tracking apps you're familiar with, under this scheme your phone records **who** you're near. To illustrate what this means, let's make up and walk through an example.

Under this program, your phone would send out a signal every 5 minutes with a unique word. So from 12pm to 1pm, your phone would send out messages like this:

> 12:00: `Apple`
> 
> 12:05: `Banana`
> 
> 12:10: `Orange`
> 
> 12:15: `Kiwi`
> 
> 12:20: `Potato`
> 
> 12:25: `Cherry`
> 
> 12:30: `Tomato`
> 
> 12:35: `Pear`
> 
> 12:40: `Coconut`
> 
> 12:45: `Orange`
> 
> 12:50: `Peach`
> 
> 12:55: `Eggplant`
> 
> 13:00: `Kumquat`

In this system, no other phone is sending out these exact words; if anyone ever hears `Kumquat`, it's because their phone was near your phone at 1pm. If my phone has `Kumquat` in its archive, it means that I was near you at 1pm.

Let's say I was in line behind you at a coffee shop for 10 minutes from 12:12 to 12:22. Since I'd be close to you, I'd get the messages `Kiwi` (at 12:15) and `Potato` (at 12:20), and my phone would hold on to that. I don't get your name, number, or any other information about you. Just the two words. We're each just sending out unique words every 5 minutes and keeping track of what we happen to hear from all the things around us. This app isn't keeping track of who we are, or where we are - just what words it's hearing.

Now let's say that you feel sick at 1pm, so you go to the doctor and a PCR test comes back positive for COVID-19. You'll go into your phone and say "I just tested positive for COVID-19", and your phone will send the last several days' worth of words to some database. Something like `{Apple, Banana, Orange, Kiwi, Potato, Cherry, Tomato, Pear, Coconut, Orange, Peach, Eggplant, Kumquat}`, but spanning several days or weeks, so we're talking about thousands of these words.

When my phone checks in with the database and downloads all the new words it has, it'll check and find that I had heard `{Apple, Banana}`, which means I must have been near enough for our phones to chat for something like **10 minutes**. Is 10 minutes a big deal? No, not really. But what if I had heard **all** of the words above **except** for `{Apple, Banana}`? That would mean that from 12:10pm to 1pm I was close enough to you that our phones were talking. The 10-minute example is something like standing behind someone in line at a coffee shop. This 50-minute example is more like having lunch at the table next to you at a restaurant.

Let's change the scenario from coffee shops and restaurants to something more sensitive: Let's say both of us were at an *STD clinic* at the same time for 45 minutes; what's relevant is that we were *someplace together* at the same time, not where that place was. This approach promises to give us the *someplace together* answer without revealing the *STD clinic* detail. All anyone knows is that you sent out a bunch of words, and I heard the words that put us in the same place for about 45 minutes. Where exactly were you when you sent `Tomato`? Doesn't matter. What was I doing when I received `Eggplant`? Don't worry about it.

Designing a system that goes out of its way like this to avoid knowing the literal location that you're at wasn't the simplest approach, and it's at least a little praiseworthy that this system is being developed in a slightly complicated and confusing way with the right *goal* in mind. If you look at Strava or Snapchat or some other location-tracking app, you can always see yourself as a dot on a map, moving around perhaps with other dots on the same map; this throws out that entire approach. In the context of COVID-19, all anyone really needs to know is that we were *near* each other. This approach strives to give us that *and nothing else*.

I think it's important that we understand what this system does so we can talk meaningfully about what it doesn't achieve, and what it doesn't even bother to try and do. And there's a lot.

### welcome back

Quoting Arundhati Roy, "If we were sleepwalking into a surveillance state, now we are running toward it because of the fear that is being cultivated". We're gearing up to sacrifice substantial amounts of our privacy and anonymity in the world in exchange for a woefully dubious solution to our uncertainty. Let's talk about why: first, this system isn't going to give us a better sense of the world in the most crucial places; and second, this system is going to undermine our privacy and dignity in ways that we can only begin to imagine right now.

Let's start with why this system won't work.

#### Digital contact tracing will exclude the poor, children, and myriad other uncounted groups

In the description I made earlier, I pointed out that Apple & Google's plan calls for some sort of proximity detection, probably involving Bluetooth and some of the fancier, newer technology that your smartphone may have if it was introduced in the last few years. Some of the technical requirements of this system preclude older devices from working, meaning the people with older smartphones won't be able to benefit from alerts to this system unless they upgrade to newer phones - something they almost certainly can't afford to do, nor should they be obligated to in order to receive necessary information about risk exposure. Ars Technica recently published a report that [several billion smartphones don't have the technology necessary to participate in the proximal location sensing scheme Apple & Google are talking about][millions of phones - ars]. To quote the article:

> The particular kind of Bluetooth "low energy" chips that are used to detect proximity between devices without running down the phone’s battery are absent from a quarter of smartphones in active use globally today, according to analysts at Counterpoint Research. A further 1.5 billion people still use basic or "feature" phones that do not run iOS or Android at all.
> 
> ...
> 
> "most of these users with the incompatible devices hail from the lower-income segment or from the senior segment which actually are more vulnerable to the virus" [according to Neil Shah, analyst at Counterpoint]


Every day we get more data that shows that communities that have historically been excluded or deliberately untreated by our health care infrastructure are particularly vulnerable both in contracting COVID-19 and in mortality. As [Gina Neff has written][gina tweets], [the locations linked to new COVID-19 cases are prisons, food processing facilities (specifically meatpacking), and nursing homes][nyt stats]. These are settings in which people are under immense pressure to take whatever work they can find, including high-risk essential work like logistics for Amazon in their [obscenely dangerous warehouses][amazon warehouses], or delivering food and groceries to us despite receiving [basically or literally no functional personal protective equipment][instacart PPE], putting them in direct contact with potentially hundreds of people every day.

The lines don't divide just along class; digital contact tracing omits children, substantially problematizing the picture we get as soon as families are involved. These aren't minor issues; they're major gaps that will lead to systematically and unaccountably poor data.
The spaces and the people we should be most concerned for, and paying the most attention to, won't show up in a digital contact tracing system like any of the ones proposed so far.


*Digital contact tracing staggeringly misses the point of care that we should be most concerned with.*

#### This system's exclusions will decisively undermine its accuracy and endanger everyone

The risks of acting on bad data - the result of excluding the poor, excluding children, and excluding other high-risk groups - are unspeakably high. This is different from working with a small sample size or even from working with no data. Building a dataset that excludes entire categories of people - as [we're beginning to do with Native American COVID-19 patients][native american data] - skews our vision of the world in ways we won't be able to account for, and with confidence that's unearned, ultimately steamrolling the groups that we leave out. This is why the CDC employs "[sentinel surveillance][]" to track the flu - because acting only on the data we get from people who are wealthy enough to go to a doctor for the flu would give them a *dangerously* misleading picture of its spread every year. Everyone needs access to the same level of care, with no omissions, or we risk lulling ourselves into oblivious complacence while this virus and others like it sweep through our communities.

*We should care that the gaps in our knowledge will be consequential and non-random, sabotaging our efforts to understand what's actually going on in the world and undermining our response.*


#### Proximity is a dangerously simplistic way to model COVID transmission

There are issues inherent to proximity-based contact tracing that have nothing to do with access to the technology, as well. Recent studies have shown that people don't need to be in proximity to someone with COVID-19 to catch it - [they can just be *downwind* of that person][restaurant study]. It's not just that *people's access to technology* is messy and more complicated than people living in Silicon Valley tend to think (as evidenced by [the unfathomably ignorant push for bandwidth and device-intensive education tech][education tech access]) - the world doesn't model particularly easily, and certainly doesn't fit the bubble of what's within range of a Bluetooth module on your smartphone.

I wrote about this in my paper about [street-level algorithms][]; people are constantly finding new ways to exist and make their ways through the world, so algorithmic systems that try to model our behavior and interactions will always be a step behind. We'll have to constantly follow up on the errors these systems make, struggling to fix the damage it does in its false positives and false negatives, all in this hopeless chase to automate what essentially needs humans.

*Digital contact tracing systems that render the world as normally distributed space with spheres of influence and contact characterized by radio waves will consistently leave us with dangerously wrong pictures of our exposure.*

#### Proximal tracing doesn't maintain privacy the way advocates seem to think it does

We also need to talk about what proximal contact tracing offers and what it doesn't, especially since we're adopting this contrived system to avoid "absolute" locations. I said earlier how absolute location tracking might say that we were both at some GPS coordinates. Or it might offer a street address. In either case, it would reveal that we were both at some semantically meaningful place from 8pm to 10pm, which could potentially be embarrassing or even damaging. Proximal tracking promises instead to reveal only that we were *together* between 8pm and 10pm.

The problem is that neither of these approaches is particularly helpful to me when I'm trying to maintain privacy about where I *meaningfully* am. While there are unique risks associated with my absolute location being revealed (for instance, revealing where I live by showing where I tend to be every night), a revelation that I was *among* many people who are under investigation or otherwise suspected of some socially improper behavior is potentially just as damning as if there's a record that puts us all at the same mailing address for that time - like if all of us have `Kumquat` on our phones.

The details of whether this data is held in centralized or decentralized locations doesn't matter much if the notification that I've been exposed to COVID-19 forces me to surface to seek care, revealing my association with that group. [Proximal location tracking has already recently been used to out dozens, perhaps hundreds, of gay men in Morocco][morocco]. It didn't help that their exact locations were obscured; they were "nearby". They were outed by their *associations*, not by their *coordinates*.

This isn't to say that absolute location tracking is the right approach, or that proximal tracking is a misstep, but that this distinction misses the point and fails to address the concern - we need laws that guarantee against the use of any data we collect for anything other than the confidential care of COVID-19. And we need to earn the trust of people giving us that data - something Clearview, Palantir, and arguably tech companies in general are inherently incapable of doing, given their business models of advertising and data mining that motivate their very existence.

*We need real guarantees of protection against the use of this data for any purpose beyond the containment of COVID-19, and we need to commit to those principles.*

### These are just the beginning of the issues

The decisions we make now are going to follow us around for generations. It's important that we move quickly, but it's as important that we don't run headfirst into a surveillance state that offers nothing but oppression and more uncertainty.

I spent 5 years at Stanford studying Computer Science and noticed an insight among tech folks that I hadn't observed as much elsewhere. It was that if you have a complex mathematical problem that you can restate as another problem, or as a collection of other problems, then you might find down the road you can solve one of those problems and dramatically simplify the original task. Suddenly something that takes hundreds or thousands of hours to compute can be done virtually instantly.

I saw this kind of thinking applied to social problems all the time. Social problems are sticky and entangled and don't seem to reduce very well. But if you can perform a kind of problem space arbitrage and convert the social problem into a technical one, you might find an insight in mathematics or computation later on that collapses the problem into something more manageable, or even trivial. It's enticing.

It's also wrongheaded. It's unproductive because it doesn't solve either the old social problems or the new technical ones, and it's dangerous because it obscures the real problems that we need to address - the ones we all recognize and otherwise feel entitled to engage with as fellow humans.

There are technical problems that need to be solved in this pandemic, but this isn't one of them. There are so many issues of uncertainty that digital contact tracing introduces, and so many gaps in whom it protects, that we need to reject it now before it gets off the ground, before we get lured into a false sense of certainty that everyone is covered and protected when in reality all we're accomplishing is deepening an existing divide between the empowered, the wealthy, the influential; and the people holding all of them up.

We need certainties in our life. Systematizing contact tracing into a digital system won't give us what it offers, and won't give us this. If we need some certainties, here are a few:

- We need more personal protective equipment for everyone. If we want people working in warehouses, nursing homes, and meat processing facilities, we need to give them the means to avoid getting infected.
- We need more tests. We need so many tests for so many people that the cost becomes zero and the hurdle disappears. [Los Angeles recently announced that every resident will get free tests][LA tests] whether they get referred for a test or not. We need more of this.
- We need to train human contact tracers. Algorithms will never be able to adequately model the world we live in and construct, and will never be able to keep up with all the weird quirky qualities of the spaces we build and occupy. This job calls for human intelligence.
- This is such a given that it's almost not worth saying, but we need to change our relationship with labor. A year ago, if someone at a coffee shop felt sick, they might not have bothered to see a doctor. They almost certainly would have tried to work through it (at least at first). I think we all appreciate now how dangerous that is, but the threat of crushing medical debt and homelessness coerce people into work.

  That culture of coercive labor needs to end, or the rest of our lives will be punctuated by pandemics fueled and ultimately spread by workers who were compelled to continue working.

There's already so much we need to do, and so much that needs to change, for us to have anything resembling lives we appreciated before this pandemic. We don't also need to build and subject ourselves to omnipresent digital surveillance via personal devices. We need to reject digital contact tracing. We need to care for one another.



##### Some addenda

I've gotten questions while drafting this and I could probably weave these points into the draft, but that'd take time, so here they are in list form:

- **What about DP3T?**
  
  DP3T (Decentralized Privacy-Preserving Proximity Tracing) suffers a lot of the issues raised above. It still essentially requires tech and will leave out the sites of super-spreading (prisons, nursing homes, meat processing facilities); it still mostly avoids the public health policy changes that need to happen; it still goes for proximity versus absolute location tracking, which I outlined earlier isn't addressing the problem. In the intro paragraph of [their readme file][dp3t readme], they describe the project as seeking to "provide a technological foundation to help slow the spread of the SARS-CoV-2 virus". Like I said before, we don't need to center technology in coming up with solutions, and in fact this will only deepen divides in care that are already staggering.

  There's also a point to be made that "technological foundation" usually means something more like "the political decisions were baked into the code and you can't do anything about them unless you have a Github account and file an issue or make a pull request". But I'll leave that to people who aren't yet completely exhausted making this point.

- **What about Taiwan and South Korea? They adopted digital contact tracing and it seems to have worked.**
  
  There are a few issues to this: first is there *were* substantial issues with Taiwan's and [South Korea][SK contact tracing privacy]'s deployments of digital contact tracing, stemming from [uncomfortable revelations about peoples' private lives][Guardian SK]. The second is that the way the US has cleaved a boundary between wealthy and poor - informed by slavery and white supremacy and urbanization and housing policies - *really* complicates any effort to translate tech-centric policies and programs from other cultures.

  It's also worth saying that in Taiwan and South Korea, people can go see a doctor without worrying about crushing medical debt. Paid sick leave is a guarantee. People use masks and when the government tells them what to do, they generally trust their political leadership not to be corrupt or incompetent. America enjoys almost none of these advantages. Digital contact tracing wasn't a silver bullet (even in the context that more people in Taiwan and South Korea have smartphones); it was one of *many* more decisive characteristics of their economies, politics, and cultures that made it possible for people to get tested when they needed to get tested; to stay home when they needed to stay home; and to listen to the local and national leaders who were themselves advised by credible medical and epidemiological experts.


[dp3t readme]: https://github.com/DP-3T/documents/blob/master/README.md
[Guardian SK]: https://www.theguardian.com/world/2020/mar/06/more-scary-than-coronavirus-south-koreas-health-alerts-expose-private-lives
[SK contact tracing privacy]: https://www.nytimes.com/2020/03/23/technology/coronavirus-surveillance-tracking-privacy.html
[welcome back]: #welcome-back
[detainment by ICE]: https://www.theguardian.com/world/2020/apr/28/iran-scientist-us-detention-coronavirus-sirous-asgari
[watched and still dying]: https://www.odbproject.org/2020/04/26/watched-and-still-dying/
[AA infection rates]: https://www.nytimes.com/2020/04/07/us/coronavirus-race.html
[AA death rates]: https://www.theguardian.com/world/2020/apr/08/its-a-racial-justice-issue-black-americans-are-dying-in-greater-numbers-from-covid-19
[native american data]: https://www.theguardian.com/us-news/2020/apr/24/us-native-americans-left-out-coronavirus-data
[the Marshall Project]: https://www.themarshallproject.org/2020/04/24/tracking-the-spread-of-coronavirus-in-prisons
[prison rates]: https://www.inquirer.com/news/coronavirus-testing-montgomery-county-jail-asymptomatic-philadelphia-prisons-20200428.html
[prison coronavirus death]: https://www.theguardian.com/world/2020/apr/29/coronavirus-andrea-circle-bear-federal-prison-death
[new jersey prisons]: https://theintercept.com/2020/04/28/coronavirus-new-jersey-prisons/
[millions of phones - ars]: https://arstechnica.com/tech-policy/2020/04/2-billion-phones-cannot-use-google-and-apple-contract-tracing-tech/
[sentinel surveillance]: https://www.cdc.gov/vaccines/pubs/surv-manual/chpt19-enhancing-surv.html
[education tech access]: https://blogs.microsoft.com/on-the-issues/2019/04/08/its-time-for-a-new-approach-for-mapping-broadband-data-to-better-serve-americans/
[street-level algorithms]: /papers/chi/street-level_algorithms/street-level_algorithms.pdf
[nyt stats]: https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html#clusters
[digital forests]: https://ali-alkhatib.com/blog/digital-forests
[amazon warehouses]: https://jewishcurrents.org/amazon-workers-say-warehouse-health-precautions-are-insufficient/
[instacart PPE]: https://www.wired.com/story/instacart-delivery-workers-still-waiting-safety-kits/
[restaurant study]: https://wwwnc.cdc.gov/eid/article/26/7/20-0764_article
[morocco]: https://www.nytimes.com/2020/04/26/world/middleeast/gay-morocco-outing.html
[palantir proposal]: https://www.bloomberg.com/news/articles/2020-04-02/coronavirus-news-palantir-gives-away-data-mining-tools
[clearview proposal]: https://www.buzzfeednews.com/article/carolinehaskins1/senator-markey-clearview-ai-covid-contact-tracing
[clearview data]: https://www.wired.com/story/clearview-ai-scraping-web/
[palantir surveillance]: https://www.vox.com/recode/2020/2/26/21154606/clearview-ai-data-breach
[clearview data breaches]: https://www.vox.com/recode/2020/2/26/21154606/clearview-ai-data-breach
[LA tests]: https://www.npr.org/sections/coronavirus-live-updates/2020/04/30/848144570/los-angeles-city-and-county-offer-free-coronavirus-testing-to-all-residents
[digital forests talk]: https://www.youtube.com/watch?v=upU-_ECq80Y
[gina tweets]: https://twitter.com/ginasue/status/1255847973797462016