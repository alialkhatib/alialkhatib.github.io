---
title: Downtime
author: Ali
layout: post
categories:
  - Uncategorized
---

This post got away from me, so I'll try and roadmap it:

- [(formally) CHI!][7]
- [Jure's Lab][6]
- [Mosh][8]

## <a name=""></a>(Formally,) CHI!(!!)
A while back the group I was working with found out that our paper for [CHI][9] had been tentatively accepted to the 2015 conference in Seoul. I won't pretend this was some trivial thing - this was a huge deal for me. I was really excited to get to work on [Dynamo][10], and it was incredibly validating not only to bring an Anthropological perspective to the research, but importantly to get approval for it from anonymous peer reviewers.

Can't believe I said that... Let's hope it's not the last time.

I'll post a link to this paper when it's available somewhere. If you can't find it, feel free to email me.

My research during Fall quarter extended on an idea within Dynamo, that workers online can(/perhaps should be able to) determine their own administrative issues. I figured 

## <a name='jureslab'></a>Jure's Lab
This quarter I've been rotating with [Jure][1]'s lab (which I'll call the *[InfoLab][2]* from here on out, since... that's its name). So far it's been an interesting experience:

- I wouldn't describe the HCI lab as "slow-paced" by any measure, but the InfoLab has a pace about it that's pretty intense. Every other day it seems like someone's talking about some new enormous dataset that boggles my mind, or some approach that I can hardly describe even after having it explained to me multiple times.
- Jure announced a little ahead of the formal announcement that it looked likely [Pinterest would be acquiring a startup][3] with which he was involved, and that was kinda dizzying at first. Maybe I'll talk about that later (ie after I've made my formal alignment).
- The data I'm working with weighs in at around 2TB. I could *technically* download all that to a recently acquired 3TB hard drive, but I wouldn't have much room for anything else, and I certainly wouldn't have 1TB of RAM to work with.
- Oh, did I not mention that? The InfoLab has like half a dozen machines with 1TB of RAM *each*. I find myself tip-toeing around, afraid that I'm hogging the resources available, only to remember later that I have no idea how to max out that much memory.

This post actually comes from that last bullet point, in a sense. I'm dealing with a lot of data, and certainly it's nice that I have access to a fairly fast computer with tons of memory and huge amounts of capacity (~20+ TB of hard drive space), but there's no getting around trying to load several hundred gigabytes of data from some non-local disk.

For a little while, I was just saving batches of tasks until I thought I was ready.

Then I wised up and pulled a `HEAD` of a hundred thousand or so records. That gave me enough data that I could see an exponential drop in usage (shocking! (no not really)), but little enough data that I wouldn't be sitting around for an hour hoping the script wouldn't crash because of some stupid oversight in my code.

After a little while, I got pretty confident that I knew what I was doing, and another student I met last quarter reminded me about [iPython][4], so I loaded that up (through `screen`, another tool you should learn about if you're not familiar) and started loading the data into memory.

Normally, this would be heinous. Loading all that data into memory would take a **ton** of memory!

... which is fine, because this machine has ~1TB and we have 6 more with an identical configuration.

Nevertheless, sometimes things crash, and that means quite a while sitting around looking for things to do.

## <a name="mosh"></a>Mosh

A while back I heard about this thing called [mosh][5], and now that I have more downtime I decided to check it out. If you're familiar with `ssh` dropping out when your WiFi network coughs loudly, you almost certainly hate how fussy `ssh` can be in general. mosh takes a decent stab at solving that problem. If you're curious about the technical details (and why shouldn't you be?!), you should check out the talk and the page in general. Otherwise, it's a neat (but not quite complete) project that's definitely worth keeping an eye on.


[1]: http://cs.stanford.edu/people/jure/
[2]: http://infolab.stanford.edu/
[3]: http://techcrunch.com/2015/01/21/facebook-past-google-present-pinterest-future/
[4]: http://ipython.org/
[5]: https://mosh.mit.edu/