---
title: "Digital Contact Tracing Explainer"
author: "Ali"
layout: "post"
---

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

Okay, let's talk about why this is a bad idea.