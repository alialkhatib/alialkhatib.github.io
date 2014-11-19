---
title: Twitter call limits and sad faces
author: Ali
layout: post
posterous_aef3040f45df4620aa487475e2845672_post_id:
  - 168502720
posterous_aef3040f45df4620aa487475e2845672_permalink:
  - //ali-alkhatib.posterous.com/twitter-call-limits-and-sad-faces
categories:
  - Uncategorized
---
Good news: I've managed to pull the last tweets of people a user is following:

![ugh](/content/Screen_Shot_2012-11-13_at_12.39.46_AM.png.scaled1000.png)

*Deal with it, protected friends.*

Bad news: I hit some nasty call limits when I try to deal with any significant number of individuals. It's not a big deal for my paltry ~40 friends (and I'm making a distinction between **friend** and **follower** here; the former is someone whose tweets I read, while the latter is someone who reads my tweets), but it quickly becomes a more serious issue as it scales up.

To understand why this is a problem, I need to explain. Twitter has an API call limit, which is kind of like saying that you can only ask Twitter for something a certain number of times per hour. Twitter allows up to 350 calls per hour (per user, per application), which means that you could use this app to do 350 distinct things. What Twitter considers a "thing" is where this gets annoying.

Pulling up your timeline/feed/whatever - the thing that tells you what people have been saying lately (see pic below) - is **one** call.
![](/content/Screen_Shot_2012-11-13_at_12.48.29_AM.png.scaled1000.png)

But what if you want to pull all of the tweets that Bill Nye has made? That's **1** call as well. It's a completely separate call.
![](/content/Screen_Shot_2012-11-13_at_1.08.37_AM.png.scaled1000.png)

*Frustratingly, that single call brings me all of this (and more) data, much of which is superfluous to my needs.*

And if you have 40 people you follow? That would require **40** calls.

And if you have 200 people you follow? **200 calls**.

So that's only kind of annoying *until* you start coming closer to that magic number, 350. Once a user hits that, they get blocked from making any further calls with the specific app which hit that limit. They can still tweet from a web browser or their mobile device, but they have to take a break from your app. 

That's kinda bad because some friends - the ones for whom this app would be **perfect**, follow hundreds of people, which would trip the call limiter.

I could keep going with the current implementation I have, but there would be no point. I have a well-pruned friend list, so it wouldn't benefit me anymore. I've made a <a>discussion</a> on Twitter's dev forum, and maybe someone will chime in with a suggestion for a different implementation. If that happens, I might as well not get entrenched in this approach.

No, I'm not depressed. But it sure feels like it.

Oh, right: sad faces. :(