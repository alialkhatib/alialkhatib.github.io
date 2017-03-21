---
title: Interior Decorating via the Crowd
author: Ali
layout: post
---

Let's cut to the chase: I have a ton of photos and while I like taking pictures and some people like some of them, I flat out can't pick a good candidate to print and hang up in my apartment for the life of me. I just get analysis paralysis and, at best, I end up with 5-10 photos that I just can't winnow down any further.

After a while ruminating on this (seriously, you don't want to know how long this stuff knocks around in my head), I realized that what I *really* wanted was for other people to look at photos I've selected (mostly by whatever represented a focal point in a story of my life) and pick whichever ones they thought would look nicest on a wall. I know, that went from kind of deep to super shallow in 0 seconds, but this is my life, okay?

Enter crowdsourcing.

After several attempts, I realized that it wasn't fair (read: feasible) to persuade friends to look at a handful of my photos and pick a favorite, much less rank them. But I could **pay** crowdworkers to do it. So I made up [a little static page][], listed the task on Amazon Mechanical Turk, and asked Turkers to complete it for $0.10

If you're not interested in taking a look at the task, the gist is that they saw 8 landscape photos from places kind of all over the world (San Francisco, Florence, a few in Seoul, Seattle, London, and various places around Ecuador). These images were loaded and then their order was randomly shuffled so that Turkers weren't seeing the same images first, second, third, etc...

Turkers could open the images in new tabs, where they'd see an optimized (under 1MB) higher resolution version of the image, but they could drag and drop the images without looking more closely if they didn't want to (and I didn't bother to check, which we'll probably agree later wouldn't have been necessary anyway).

On the side, I gave Turkers a textarea box that they could use to give feedback on the task along with their submission. For instance, if the pay rate was way off, or if instructions were awkwardly worded, that text box would be one way to reach me. Another way would be to email me, since my email address was on the page as well, which would be helpful if the task was broken in a more serious way. All in all, I think I made myself pretty accessible and the task reasonably priced and easy to do.

I might as well take an aside and mention that I didn't use attention checks or any of that other obnoxious stuff that seems to trip up and antagonize Turkers. I figured this was fairly priced and straightforward, and Turkers would respect that (spoiler alert: they did). I found out later that there was a bug in my code that made the page send an empty form response if the Turker didn't move any of the photos around to change rankings, but it turned out not to be a big deal. All told, I spent about $7 on the task for the labor, and nothing on hosting the task, photos, etc... (thanks, Amazon S3!)

# nobody cares, get to the results
Okay but first let me explain how I came up with the results. The process is pretty simple, actually, but there are other ways to run this count so I want you to know before you go and accidentally re-implement the same idea.

I went through each participant's ranking, for example `img_3358,img_5936,img_3844,img_6463,img_6889,img_7497,img_5881,img_6480` (where `img_3358` was that person's first choice, and `img_6480` was their last), and gave them points according to ranking. First place got `len(votes)-i` where `i` was the position in the list (0-indexed), so the first-place vote would get 8 points in this case, and the last-place vote would get 8-7 or 1 "point".

Then I just summed up the values accordingly; the winner was whoever had the most points.

There are problems with this arrangement (for example, I have no sense of whether the first and second-ranked images were *way* better than the rest, or if it was all neck-and-neck), but I honestly don't care. At this point I've written so much for this blog post that I'm definitely going to have to defend my thoroughness on this rather than, say, my real work.

So with that, here were the results:
```
got 69 valid votes
 image   count // pretty representation
img_6480  200  // ****************************************
img_5881  240  // ************************************************
img_6889  287  // *********************************************************
img_3844  291  // **********************************************************
img_5936  324  // ****************************************************************
img_6463  342  // ********************************************************************
img_7497  389  // *****************************************************************************
img_3358  411  // **********************************************************************************
```
You might be thinking to yourself "is that statistically significant, though?" and in the case yep. If everyone had just randomly moved blocks around, you would've seen them all getting votes between 276 and 345

There wasn't really any context to the photos as far as they could tell, but these photos are at the center of something that was going on in my life. I could tell a story about them.

[a little static page]: https://s3-us-west-2.amazonaws.com/mturkuploads/photos/task.html