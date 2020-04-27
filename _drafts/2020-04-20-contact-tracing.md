---
title: "Digital Contact Tracing, or 'Are We Learning Literally Nothing?'"
author: "Ali"
layout: "post"
---

Okay, fine, I guess we need to talk about digital contact tracing. But I want to stress that I'm doing this reluctantly, because this is bananas and because some of you should know better.

I don't think I need to tell anyone about the COVID-19 pandemic and how it's swept across the planet, upending all of our lives. One of the pressing issues we haven't yet resolved - that we need to resolve in some way before people can safely return to work or even any semblance of normal life - is that **we just don't know who has COVID-19** (let alone who *has* had it and has gotten better). There are lots of reasons here, but one of them is that COVID-19 is remarkably transmissible, so it's entirely possible that being in proximity of a stranger could be enough to expose someone. Tech advocates have proposed that a networked system of smartphones can tell us whether we've been in the vicinity of someone who later tested positive for COVID-19, warranting testing. Digital contact tracing, they promise, could seamlessly allow us to live our lives again (albeit cautiously).

It's a very tempting proposition: without my having to think about it, my smartphone can tell me that someone I was around recently has subsequently tested positive for COVID-19. It could be the person in front of me at the supermarket checkout line; it could be someone at a concert; it could be someone who sat at the table adjacent to mine at a restaurant. But I could trivially go to supermarkets again; I could go to concerts again; I could go to restaurants again. I could go back to living.

Digital contact tracing promises to answer the question of whether we might be sick, and thus offers a solution to the problem of our lives being frozen in place right now. Digital contact tracing is not the answer, and not even a suitable partial answer, to this question. It will exacerbate the problems we already have, and we should reject it wholesale. I'll explain why, but first, let's make sure we're on the same page about the leading effort so we're not just talking about "what if *technology*?"

#### Wherein an anthropologist (clumsily) describes a technical system

Apple and Google are working on a cross-platform system to track who may be sick and how it may be spreading.
First, let's say something good: it is **not** a central repository of everyone's personal identifiers and GPS coordinates. This isn't like Snapchat's friends map scaled up to the whole world, or a database of where everyone's been like on Google Maps or Strava or whatever.

The way they're doing this is actually kind of indirect, and they're doing it in this indirect, un-obvious way for intentional reasons to protect people's privacy, so I want to make sure we have a reasonable intuition about what this thing does (and what it can't) do.

The one-sentence explanation is that *instead of recording **where** you are and **when**, your phone records **who** you're near*. To illustrate what this means, let's make up and walk through an example.

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

In this system, no other phone is sending out these exact words; if anyone ever hears `Kumquat`, it's because their phone was near your phone at 1pm.
Let's say I was in line behind you at the supermarket for 10 minutes from 12:12 to 12:22. Since I'd be close to you (let's say close enough to pair bluetooth headphones), I would get the messages `Kiwi` (at 12:15) and `Potato` (at 12:20), and my phone would hold on to that. I don't get your name, number, or any other information about you. Just the two words. We're each just sending out unique words every 5 minutes and keeping track of what we happen to hear. This app isn't keeping track of who we are or where we are - just what words it's hearing.

Now let's say that you feel sick at 1pm, so you go to the doctor and a PCR test comes back positive for COVID-19. You'll go into your phone and say "I just tested positive for COVID-19", and your phone will send the last several days' worth of words to some database. Something like `{Apple, Banana, Orange, Kiwi, Potato, Cherry, Tomato, Pear, Coconut, Orange, Peach, Eggplant, Kumquat}`, but thousands of words (since you might have had it for a few days before showing symptoms, all the words you had sent out for the last several days are relevant).

When my phone checks in with the database and downloads all the new words it has, it'll check and find that I had heard `{Apple, Banana}`, which means I must have been near enough for our phones to chat for something like **10 minutes**. Is 10 minutes a big deal? No, not really. But what if I had heard **all** of the words above **except** for `{Apple, Banana}`? That would mean that from 12:10pm to 1pm I was close enough to you that our phones were exchanging words. The 10-minute example is something like standing behind someone in line at the grocery store. This 50-minute example is more like having lunch at the table next to you at a restaurant.

Let's change the scenario from grocery stores and restaurants to something more sensitive: Let's say both of us were at an *STD clinic* at the same time for 45 minutes; what's relevant is that we were *someplace together* at the same time, not where that place was. This approach claims to give us the *someplace together* answer without revealing the *STD clinic* detail. All anyone knows is that you sent out a bunch of words, and I heard like 45 minutes' worth of that stuff. Where exactly were you when you sent `Tomato`? Doesn't matter. What was I doing when I received `Eggplant`? Not relevant.


A system sensitive to this kind of nuance was absolutely necessary, but designing it in this way wasn't, and it's at least a little praiseworthy that this system is being developed in a slightly complicated and confusing way with the right *goal* in mind. If you look at Strava or Snapchat or some other location-tracking app, we always think in terms of dots or lines on a Cartesian grid-like system; this throws out that cartography. In the context of COVID-19, all anyone really needs to know is that we were *near* each other. This approach strives to give us that *and nothing else*.

Okay, let's talk about *a few of the* reasons this approach is limited, flawed, or straight-up missing the mark it claims to aim for. The major themes are the following:

- Many people don't have the technical means for the digital contact tracing system Apple and Google are developing; the people excluded by this scheme are specifically the people who are at the most risk.
- Digital contact tracing gives us an incomplete picture of our situation, and not merely a stochastically or arbitrarily spotty picture, but a picture that systematically leaves out the people most at risk.
- I don't give a shit about the GPS coordinates (you damned idiots)
- People in the US in particular (but also in places where colonialism has left a deep imprint on the culture of marginalized people - ie everywhere?) have very little reason to trust corporate parties like Google and Apple; in the US we have similarly little reason to trust that a Trump administration will even bother to try to regulate or manage their behavior.



#### Many people don't have the technical means to participate in this scheme
This has shown up most recently on Ars Technica/Forbes. There's not much more to say to this, except that billions of people won't be able to benefit from either side of this scheme; they won't be able to participate in adding to the contact-tracing network, nor will they be notified or warned in any meaningful way when someone close to them tests positive for COVID-19.

#### Digital contact tracing that operates on personal technical devices will give us a dangerously incomplete picture
We're seeing reports from hospitals and the CDC about the demographics of the people who tend to die from COVID-19. People of color, people working in the service industry, 



Contact tracing has proven to be an important tool for countries that seem to have gotten a handle on the pandemic. We should seriously consider widespread contact tracing. But if we start this program with systemic gaps from the start, we're never going to come out the other side with anything but garbage data. The people doctors have expressed worry about are precisely the group of people who don't have the tools necessary to participate even if they wanted to be the subjects of constant surveillance.

#### The GPS coordinates were never the problem; the relationships with people were.

#### Silicon Valley has virtually no earned trust



---




#### Digital contact tracing gives us an incomplete picture of our situation, and a false sense of certainty



#### The ways that digital contact tracing will be wrong will not be random the way a PCR test will be random



#### COVID-19 is dramatically more transmissible than we want to admit; digital contact tracing cannot capture this risk profile


#### People without the means to own a new smartphone don't need us layering on more substantive disadvantages to their lives


## We need to talk about tech solutions