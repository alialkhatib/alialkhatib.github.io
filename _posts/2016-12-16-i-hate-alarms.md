---
title: I hate alarms
author: Ali
layout: post
---

This is way off topic, so I'm sorry if you're seriously disappointed after reading this post.

I've always had a bit of trouble waking up.
Whether I get to sleep early or late,
whether I sleep with my phone nearby or far away,
whether I sleep in a comfortable warm bed or in a cold hard chair,
it's generally hard to be sure that my alarm will work.

The only thing that's ever really worked consistently has been the fear of letting down or bothering people.
I can give some examples:

*Sleeping in a room with other people (barracks style), like when I was in Ecuador?*
Definitely gonna wake up on time.

*Planning on making a flight or something like that?*
Almost certainly going to be awake on time (or rather, won't sleep, but that counts).

So lately I've been thinking that if I could trick my sleeping brain into thinking that someone's waiting on me,
I might be able to wake up more consistently.
One approach is to call my apartment phone, since that's almost exclusively used by
delivery people who are literally waiting outside
(these days, in the biting cold)
for me to pick up the phone and buzz them in.

That's some pretty intense social pressure.

So on I went to Twilio, setting everything up and playing around with the API, and
20 minutes later I had a working python script that places a call to my apartment phone every morning at 7:30am.

And here it is:

{% github_sample_ref /alialkhatib/lifehacks/blob/6b8fa3ca3d860c43dbe2b712d141ae3ba05200d7/wake_me_up_before_you_go_go.py %}
