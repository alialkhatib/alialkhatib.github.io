---
title: Twitter call limits and sad faces
author: Ali
layout: post
posterous_aef3040f45df4620aa487475e2845672_post_id:
  - 168502720
posterous_aef3040f45df4620aa487475e2845672_permalink:
  - http://ali-alkhatib.posterous.com/twitter-call-limits-and-sad-faces
categories:
  - Uncategorized
---
Good news: I've managed to pull the last tweets of people a user is following:

<div class='p_embed p_image_embed'>
  <a href="http://ali-alkhatib.com/content/Screen_Shot_2012-11-13_at_12.39.46_AM.png.scaled1000.png"><img alt="Screen_shot_2012-11-13_at_12"  src="http://ali-alkhatib.com/content/Screen_Shot_2012-11-13_at_12.39.46_AM.png.scaled1000-300x150.png" /></a>
</div>

<div>
  <div>
    <em>Deal with it, protected friends.</em>
  </div>
  
  <p />
  
  <div>
    Bad news: I hit some nasty call limits when I try to deal with any significant number of individuals. It's not a big deal for my paltry ~40 friends (and I'm making a distinction between <strong>friend</strong> and <strong>follower</strong> here; the former is someone whose tweets I read, while the latter is someone who reads my tweets), but it quickly becomes a more serious issue as it scales up.
  </div>
  
  <p />
  
  <div>
    To understand why this is a problem, I need to explain. Twitter has an API call limit, which is kind of like saying that you can only ask Twitter for something a certain number of times per hour. Twitter allows up to 350 calls per hour (per user, per application), which means that you could use this app to do 350 distinct things. What Twitter considers a "thing" is where this gets annoying.
  </div>
  
  <p />
  
  <div>
    Pulling up your timeline/feed/whatever - the thing that tells you what people have been saying lately (see pic below) - is <strong>one</strong> call.
  </div>
  
  <div>
    <div class='p_embed p_image_embed'>
      <a href="http://ali-alkhatib.com/content/Screen_Shot_2012-11-13_at_12.48.29_AM.png.scaled1000.png"><img alt="Screen_shot_2012-11-13_at_12"  src="http://ali-alkhatib.com/content/Screen_Shot_2012-11-13_at_12.48.29_AM.png.scaled1000-257x300.png" /></a>
    </div>
  </div>
  
  <div>
    But what if you want to pull all of the tweets that Bill Nye has made? That's <strong>1</strong> call as well. It's a completely separate call.
  </div>
  
  <div>
    <div class='p_embed p_image_embed'>
      <a href="http://ali-alkhatib.com/content/Screen_Shot_2012-11-13_at_1.08.37_AM.png.scaled1000.png"><img alt="Screen_shot_2012-11-13_at_1"  src="http://ali-alkhatib.com/content/Screen_Shot_2012-11-13_at_1.08.37_AM.png.scaled1000-300x256.png" /></a>
    </div>
  </div>
  
  <div>
    <em>Frustratingly, that single call brings me all of this (and more) data, much of which is superfluous to my needs.</em>
  </div>
  
  <p />
  
  <div>
    And if you have 40 people you follow? That would require <strong>40</strong> calls.
  </div>
  
  <div>
    And if you have 200 people you follow? <strong>200 calls</strong>.
  </div>
  
  <p />
  
  <div>
    So that's only kind of annoying <em>until</em> you start coming closer to that magic number, 350. Once a user hits that, they get blocked from making any further calls with the specific app which hit that limit. They can still tweet from a web browser or their mobile device, but they have to take a break from your app. 
  </div>
  
  <p />
  
  <div>
    That's kinda bad because some friends - the ones for whom this app would be <strong>perfect</strong>, follow hundreds of people, which would trip the call limiter.
  </div>
  
  <p />
  
  <div>
    I could keep going with the current implementation I have, but there would be no point. I have a well-pruned friend list, so it wouldn't benefit me anymore. I've made a <a>discussion</a> on Twitter's dev forum, and maybe someone will chime in with a suggestion for a different implementation. If that happens, I might as well not get entrenched in this approach.
  </div>
  
  <p />
  
  <div>
    No, I'm not depressed. But it sure feels like it.
  </div>
  
  <p />
  
  <div>
    Oh, right: sad faces. :(
  </div>
</div>
