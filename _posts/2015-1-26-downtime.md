---
title: Downtime
author: Ali
layout: post
categories:
  - Uncategorized
---

This post got away from me, so I'll try and roadmap it:

- [(formally) CHI!][7]
- [Fall Research][12]
- [Jure's Lab][6]
- [Winter Research][13]
- [Mosh][8]
- [Down the Road][15]

## <a name="formallychi"></a>(Formally,) CHI!(!!)
A while back the group I was working with found out that our paper for [CHI][9] had been tentatively accepted to the 2015 conference in Seoul. I won't pretend this was some trivial thing - this was a huge deal for me. I was really excited to get to work on [Dynamo][10], and it was incredibly validating not only to bring an Anthropological perspective to the research, but importantly to get approval for it from anonymous peer reviewers.

Can't believe I said that... Let's hope it's not the last time.

I'll post a link to this paper when it's available somewhere. If you can't find it, feel free to email me.

## <a name="fallresearch"></a>Fall Research

My research during Fall quarter extended on an idea within Dynamo, that workers online can(/perhaps should be able to) determine their own administrative issues. I figured one good model for such an online market would be like a worker cooperative, and with that spark in mind I started exploring how workers would organize and manage themselves.

Things were a bit challenging at first; getting people organized is an endeavor in itself, but it was worth reminding myself that people don't just naturally order themselves and form coherent groups. People benefit from (but don't naturally seem to form) groups.

For a while, I found myself going down this rabbit hole where I thought about the things that one needed to do to maintain an online community. [Kraut et al.][11] (and others) talk about how to establish a lively community, but they don't talk much about the *inherently changing* nature of communities. This raises the stakes and complicates things enormously, in my mind: when you consider that nurturing an online community is a constantly moving target of responsibilities and qualities, it's really no wonder that communities so often die quickly.

In the limited scope of what I was studying, I was able to get people to agree to some basic rules for how people would interact with each other, and I was reasonably happy with that outcome. What's next is to turn those guidelines into something that people actually live and operate by - something that people take to *heart*. Ultimately, I want to see people turning online work into something people take seriously and not as a side-hobby you do for a few bucks a month (becuase certainly it's not just a side hobby for many people, and importantly those people can't afford for it to yield just a few bucks a month; they - and we - need this market to support skilled laborers).

I digress. I'll (hopefully) be at CHI this Spring, so I'll be looking forward to attending my first real academic conference, especially as a co-author on a paper. But long-term, I'm looking forward to bringing the topics involved in both papers together.

## <a name='jureslab'></a>Jure's Lab
This quarter I've been rotating with [Jure][1]'s lab (which I'll call the *[InfoLab][2]* from here on out, since... that's its name). So far it's been an interesting experience:

- I wouldn't describe the HCI lab as "slow-paced" by any measure, but the InfoLab has a pace about it that's pretty intense. Every other day it seems like someone's talking about some new enormous dataset that boggles my mind, or some approach that I can hardly describe even after having it explained to me multiple times.
- Jure announced a little ahead of the formal announcement that it looked likely [Pinterest would be acquiring a startup][3] with which he was involved, and that was kinda dizzying at first. Maybe I'll talk about that later (ie after I've made my formal alignment).
- The data I'm working with weighs in at around 2 TB. I could *technically* download all that to a recently (and coincidentally!) acquired 3 TB hard drive, but I wouldn't have much room for anything else, and I certainly wouldn't have 1 TB of RAM to work with.
- Oh, did I not mention that? The InfoLab has like half a dozen machines with 1 TB of RAM *each*. I find myself tip-toeing around, afraid that I'm hogging the resources available, only to remember later that I have no idea how to max out that much memory.

This post actually comes from that last point, in a sense.

## <a name="winterresearch"></a>Winter Research

This quarter, at a very high level, I'm looking at how to correlate Quantified Self data to quality of life (hey look at that, it's almost like my undergrad thesis is informing my graduate research!). In some sense, this is trying to rationalize about QS by mapping it onto qualitative measures. My game plan at the moment is to try and map quantitative data (e.g. steps) to emotional status, and I'm doing that by wrangling data from [Azumio][14] (who's doing some collaborative work with us) with Facebook, Twitter, and other social networking sites. I'm rather broad about social networking sites because we'll have to mine for that, and it's not entirely clear what will work (and more importantly what won't).

I'm dealing with a lot of data, and certainly it's nice that I have access to a fairly fast computer with tons of memory and huge amounts of hard drive capacity (~20+ TB), but there's no getting around trying to load several hundred gigabytes of data from a remote disk. The way the system is set up maps some places to what I imagine is a rat's nest of disks half a mile away (I doubt it's that awful, but when I sit around waiting for a large file to read I can only imagine bad things).

For a little while, I was just saving batches of tasks until I thought I was ready.

Then I wised up and pulled a `HEAD` of a hundred thousand or so records. That gave me enough data that I could see an exponential drop in usage (shocking! (no not really)), but little enough data that I wouldn't be sitting around for an hour hoping the script wouldn't crash because of some stupid oversight in my code.

After a little while, I got pretty confident that I knew what I was doing, and another student I met last quarter reminded me about [iPython][4], so I loaded that up (through `screen`, another tool you should learn about if you're not familiar) and started loading the data into memory.

Normally, this would be heinous. Loading all that data into memory would take a **ton** of memory!

... which is fine, because this machine has ~1 TB and we have 6 more with an identical configuration.

Nevertheless, sometimes things crash, and that means quite a while sitting around looking for things to do.

## <a name="mosh"></a>Mosh

A while back I heard about this thing called [mosh][5], and now that I have more downtime I decided to check it out. If you're familiar with `ssh` dropping out when your WiFi network coughs loudly, you almost certainly hate how fussy `ssh` can be in general. mosh takes a decent stab at solving that problem. If you're curious about the technical details (and why shouldn't you be?!), you should check out the talk and the page in general. Otherwise, it's a neat (but not quite complete) project that's definitely worth keeping an eye on.

## <a href="downtheroad"></a>Down the road

I'm looking into research internships this summer and have an interview lined up this week, so I'm actually pretty excited about that. In the meantime, I'm just working diligently on the stuff I've got on my plate, and trying not to overthink things that may or may not happen. Who would've thought I'd develop such a healthy mindset about the future?

This was a much longer post than intended or desired. Future posts will be more bite-sized and frequent, but if you have any questions or interest in a specific topic mentioned here, tweet/email/charge at me in the hallways if you see me*.

*please don't charge at me that'd be weird.

[1]: http://cs.stanford.edu/people/jure/
[2]: http://infolab.stanford.edu/
[3]: http://techcrunch.com/2015/01/21/facebook-past-google-present-pinterest-future/
[4]: http://ipython.org/
[5]: https://mosh.mit.edu/
[6]: #jureslab
[7]: #formallychi
[8]: #mosh
[9]: http://www.sigchi.org/conferences
[10]: http://chi2015.acm.org/
[11]: http://www.amazon.com/Building-Successful-Online-Communities-Evidence-Based/dp/0262016575
[12]: #fallresearch
[13]: #winterresearch
[14]: https://www.azumio.com/
[15]: #downtheroad