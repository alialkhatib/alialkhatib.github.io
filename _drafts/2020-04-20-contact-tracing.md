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

Okay, let's talk about why this isn't going to work.

We need to talk about how millions of people in the United States - to say nothing of billions around the world - don't have recent Apple iPhones or flagship Android phones that these schemes call for. So even if people want to participate in the indefinite surveillance of their associations all around the world, this is only an option for people who are willing to pay up for expensive mobile devices.

If we don't even care that people already enduring poverty will struggle with decidedly sparser information, we still need to talk about the fact that these kinds of schemes won't give *wealthy people* a clear picture of what's going on around them; all we'll have a lagging indicator of other wealthy people, with an intentional gap in our knowledge of or interest in the people who serve us - the couriers, the food delivery workers, the restaurant workers, and more.

If we don't care that these schemes are skewed toward the affluent, we should still talk through the severe limitations of centering our tracking on proximity. Researchers have already fairly conclusively shown that COVID-19 spreads so easily that people downwind of an HVAC system at a restaurant can catch it from someone upwind. There's no contact tracing app that captures or describes this kind of spread, because sensing and making sense of the messy world just isn't how we've designed technology.

If none of that matters to us, then we should still talk about how this relative contact tracing system is still going to reveal the semantic relationships that are sensitive, that were the whole point we were trying to keep confidential. Apple and Google have designed and promoted a system that doesn't care about the fact that I spent an hour at 37.773860 latitude and -122.399170 longitude. That's great. That's also not the problem. The problem is that that location happens to be an STD clinic. What will we infer if a doctor at such a clinic pings the system to report having tested positive for COVID-19, and several dozen seemingly unconnected people receive push alerts? [Apps that reveal proximity to other users - like Grindr and Planet Romeo - have been used in Morocco to out dozens and potentially hundreds of gay men in the last few weeks][morocco]. The problem with location tracing isn't merely that it reveals where someone's been - it reveals the people that you might have spent time with. The risk we should be sensitive to isn't whether someone spent a substantial amount of time at 37.77 degrees north and -122.39 degrees west; the sensitive detail is that it places that person in the presence of doctors who work at an STD clinic, and the harms that might emerge if someone gets *outed by their associations*.

Still, if none of that matters to us, then we should talk about the trust Silicon Valley has absolutely not earned, but nevertheless seems to be leveraging to circumvent collective decisions about what information we're prepared to give up to tech companies that have - at best - a tangential interest in our wellbeing. Google's business model consists of selling data it collects from us; Apple's business is in selling things to us. To quote Arundhati Roy, "If we were sleepwalking into a surveillance state, now we are running toward it because of the fear that is being cultivated". Where's the public debate about whose privacy will be compromised or utterly sacrificed for this plan? Is this the kind of input we get?

I'll be the first to admit that I have a history with tech solutionism - I thought for some time that technologies could be decisive tools in empowering workers, and worked on building tech to facilitate worker-owned cooperatives for domestic workers and gig workers. It took years to come around to the realization that the problems we're dealing with, then and now, are essentially *social* problems, and need to be taken seriously as such.


#### What's up with COBOL
We seem to be fixated with the prospect of setting something and forgetting about it. No doubt that was the promise that was made when governments bought into COBOL systems that processed unemployment benefit applications. If you use this system, it'll automate all the work, and you'll never have to hire clerks or reconvene to discuss how to do this job ever again.

I imagine these systems worked well enough initially; but over time these systems clearly became stale and brittle. Without any mechanism to revisit the logic undergirding these systems, they became relics that couldn't be interrogated on any meaningful level - neither syntactically nor semantically. We can no sooner interrogate a line of code in these systems than we can interrogate the rationale motivating any of the higher level design decisions that were made. Not because it was written in COBOL, but because we were eager to accept any solution that someone promised wouldn't demand our attention anymore.

This thinking is wrongheaded, and will hurt us if we don't head it off.

#### back to digital forests
I wrote a while ago about how European foresters quantified and operationalized forests to better track timber production. In that post, I wrote about how they made decisions not to track wildlife or certain kinds of fauna - just this one particular kind of tree, and even then only tracked limited dimensions.

I wrote about how this worked for them initially for very specific reasons: first, they didn't care if any of the wildlife or other fauna suffered, as they were only concerned with the outcomes of the trees; second, the harm they were doing to the trees - the very things they were trying to favor - was totally unclear because the harms compounded and didn't land for decades.

That's not what's going to happen now. But rather than preferring Norway Spruce trees over other forms of fauna or life, we're preferring the wealthy and affluent over those who serve the wealthy and affluent. People are even talking about letting the poor, the elderly, and the immunocompromised die as some sort of noble self-sacrifice. And whereas it took decades for the harms to manifest in these forests, I'm worried the harms are going to manifest here terrifyingly quickly.

What we need isn't a technical system that claims to be all-knowing or even particularly comprehensive; what we need is to drastically and radically change the dynamic that motivates how we decide whether and when to go out and work. The problem isn't tracking Doordash drivers so that we can track down every person they made deliveries to while they might have been sick; the problem is that we've pushed people into situations where they can't even get tested, and even if they were tested - even if they got a notification that they were almost *certainly* exposed to someone with COVID-19 - they would still feel compelled to go out and work, lest they miss another rent payment or not be able to put food on their own table.

Our entire society is constructed to coerce people into economically productive behavior. That was cruel and abhorrent for centuries, but now it actively threatens to kill us.


That's a mistake. There are no free lunches with things that matter to us. If unemployment matters, we need to keep discussing it and revisiting the compromises we make; if healthcare matters to us, people need to be at the center of it. Digital tools can be that - tools - but these schemes that promise all-encompassing knowledge will fool those of us who think we can benefit from them while they harm those of us who don't.






Our fixation with devices and technologies that we can "set and forget" was what led to what we're seeing unfold with COBOL systems. It wasn't that someone made a decision to write everything in COBOL, precipitating an inevitable and unavoidable disaster; the problem was that tech advocates told governments that these systems wouldn't need to be revisited and reconsidered the way human committees would have to be; people wouldn't have to be hired every few years to keep the positions that processed unemployment requests filled.





----



Contact tracing has proven to be an important tool for countries that seem to have gotten a handle on the pandemic. We should seriously consider widespread contact tracing. But if we start this program with systemic gaps from the start, we're never going to come out the other side with anything but garbage data. The people doctors have expressed worry about are precisely the group of people who don't have the tools necessary to participate even if they wanted to be the subjects of constant surveillance.


## Notes
- Abebe tweet on Moroccan men outed
- Chinese labor statistics 70m unemployed migrant workers
- Restaurant study

[morocco]: https://www.nytimes.com/2020/04/26/world/middleeast/gay-morocco-outing.html