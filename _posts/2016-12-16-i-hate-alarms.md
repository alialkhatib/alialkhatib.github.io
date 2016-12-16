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
10 or 20 minutes later I had a working python script that places a call to my apartment phone every morning at 7:30am.

And here it is:

{% gist 114ee62c75d826254181de9d8fafb29c %}

That's just a gist. If you're interested in seeing if there are any significant changes,
check out [the actual repository's code page].
You'll want to make sure you set a few environment variables
(as of this writing, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `APARTMENT_NUMBER`, and `TWILIO_CELL_NUMBER`),
but hopefully that's not **too** much work. You should be able to get them all from Twilio in various places.
Just a quick note on the phone numbers:

- The `APARTMENT_NUMBER` variable is the number that's going to get the call.
- The `TWILIO_CELL_NUMBER` variable is really the phone number Twilio will use to call you.
- I have no idea why I used the snippet I chose in the `url` field.
  I only cared about the phone ringing.
  It might as well be empty.

A lot of that is (hopefully) obvious;
the Twilio Python tools are really pleasantly straightforward, and
it was actually kind of fun to play around with it!

On the thread of quirky hacky things I've done lately,
I've been meaning to write up a summary of the time I crowdsourced my apartment's interior design.
Specifically, I got Turkers to vote on which travel photo I should get printed and hung in my studio.
Spoiler alert: they **nailed** it and I'm in love with the print.

But more urgently, I'm working on revising my CHI submission for the "camera ready" deadline (Jan 6).
I've been circling drafts to a few people to get their feedback on it, so
if you see this and it's before January 6th,
there's a chance I'll ask you for your thoughts after skimming or reading the paper
(whatever you have time to do).

[the actual repository's code page]: https://github.com/alialkhatib/lifehacks/blob/master/wake_me_up_before_you_go_go.py