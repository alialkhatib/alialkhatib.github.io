---
title: Recording Workflow
---

I've been recording a lot more videos for classes and talks lately (like a lot of academics, I'm guessing), and I've begun to accumulate a ton of annoying trivia. With [the video of my Utopia CHI talk][utopia youtube video] behind me, I wanted to mentally unpack and run through what I do to record talks and classes and stuff. I'll cover some gear, some process, and some software, but I haven't outlined how this post will go, so I have no idea if it'll make sense. Anyway, let's begin.


[utopia youtube video]: #

# meetings with no later recording
Most of the stuff involving a camera is for a meeting that won't be recorded. The stakes are generally lowest here, because it's for a private audience and there won't be a record for posterity, so if you screw up, who's going to remember? Not me. I promise.

I use most of the same gear for this as for the next parts, so here's what the base setup looks like:

- DSLR/mirrorless camera
- some telephoto lens
- lots of light
- tripod
- dynamic microphone
- audio interface


## gear
Gear is the easiest thing to run through and give advice about, but I really want to encourage you to use whatever you have access to and try to draw out the underlying principles here rather than replicate a gear bag. I was stupid when I was younger and wasted so much money on garbage just because I saw other people buying and using it - stuff that wasn't right for my uses, and I want to think I've gotten better about that, but that realization came at a massive (literal, financial) cost.

In general, I try to go as cheap as I can without foreclosing on future options. I'll give examples as they come up to help show what I mean.

### video
let's talk about video stuff because everyone always asks what camera i'm using.

#### camera
When the pandemic started, I had a Canon 6D that I'd bought used off of craigslist a little over 5 years ago. If you have a camera from 2011 or later, you can probably use it as a webcam with a USB cable and an app called "[Camera Live][cameraLiveGithub]". If you don't have a camera, I probably *wouldn't* recommend buying one unless someone else is paying for it. This is a lot of money (we haven't gotten to the lens and other gear yet!) and honestly most of the difference in my video quality comes from light, which we'll get to later. But everyone wants to know what camera and stuff I got, so: I started with a Canon 6D.

A month or so ago, I got a Canon R6. I said I wouldn't recommend buying a Canon 6D before; I would *strongly* discourage buying a new mirrorless camera unless you're getting it because it makes you happy to go around taking photos and stuff, and it just so happens to satisfy this task (and even then, try and get your work to pay for stuff if you can).

The things that mattered about both of these cameras - for me, anyway - were two things:

- the ability to set exposure and leave it as-is
- the ability to use nicer lenses

My laptop's webcam would see the light on the wall behind me change when a cloud passed in front of the sun, and suddenly try to compensate for the exposure change. I looked everywhere for something that would let me lock the exposure settings (even if it meant blowing out highlights or something), but I couldn't find any software that could take control of my MBP's webcam that way. If you know of one, please [let me know][contact] - I'd be super keen to hear about it.

The R6 does a few nice things - one of them is that it records in 4k, but zoom maxes out at 720p unless you're paying the company a fortune for enterprise service, and even then they drop the quality at any hint of network trouble, so you'll absolutely never get that level of quality in your zooms. The other nice thing it does that the 6D didn't do is continuous autofocus. If I leaned back in my chair or leaned forward onto my desk, the camera pulls focus to follow my eyes. It's honestly better practice to try to stay in one place for microphone placement, but I'm dumb, so what are ya gonna do?


##### camera technique
I have my camera set at

- ISO 400
- 1/50 second shutter speed
- 4k resolution at 24fps
- f/2.8 or f/3.2

Modern cameras produce so little noise at ISO 400 that it just seems sensible. At 1/50" and 24fps you shouldn't get weird sync issues. 4k is way more resolution than anyone on zoom can use, but it's nice to have when I'm recording for later (1080p is totally sufficient; CHI downscaled my video to 720p when they reuploaded it to YouTube, so even 1080p is more than most people will get to enjoy). And f/2.8 or f/3.2 gives me enough light without compromising my depth of field too much. The camera's continuous eye-detect autofocus does a lot of work, though (and sometimes you'll see it doing that if you watch my videos lately).


#### lens
On the R6 (and previously the 6D) I've had a 100mm f/2 lens. There's a macro lens out there; that's *not* what I'm using. I'm using the little prime lens that does nothing special except punch above its weight in terms of optical quality. It's an amazing lens and it's a shame Canon recently announced they're discontinuing it. I also used to use a Sigma 35mm f/1.4, but the perspective was a bit wide for framing my face.

The things that mattered here are:

- focal length
- aperture

Focal length determines the field of view. Depending on how much of your body you want in the shot, you'll probably want a longer focal length, but be warned that you need quite a bit of distance between you and the camera the longer the focal length. I have a 200mm prime that required me to put the camera at the very opposite end of the room and it *still* framed my head uncomfortably tightly, making it feel too enclosed and uncomfortable.

Aperture is important because it determines how much light gets in and (crucially) how much stuff is in focus at any one time. At the widest aperture, you'll get the most light (which is great if you don't like grainy video), but at f/2 or f/1.4 so much stuff will be out of focus that it'll be distracting. A little like someone turned the zoom virtual background setting on and turned it to max.

You'll want to find a happy balance where you have more than a razor's edge "depth of field" and enough light to look normal.

In general, I think any lens with a focal length equivalent between 50mm and 100mm will give your facial features much more flattering perspective than a camera webcam as-is. But you can probably get a cheap little plastic lens that attaches to your laptop webcam to make it a longer focal length. I'm guessing the optical quality will be poor, but again, zoom maxes out at like 480p, so it might not even matter.

##### lens technique
I dunno what to say here. If I had all the lenses in the world and all the space, I would probably go with a 70-200mm f/2.8 lens. f/2.8 gives you plenty of light; 70mm is about as wide as I would want to get, and 200mm is about as long as I'd want to get before it feels like I'm looking into another room.

#### Light
I bought a ton of super bright LED shop lights. For 6 of them I think I paid $85. I think this is where people should consider spending more money on the video side of things. $100 on good, bright light will give you a better video than ten times as much money on camera gear. Seriously.

You probably don't need to spend $100 on light, though; if you're sitting in front of a white wall, get a very bright light bulb (seriously bright, like brighter than 2000 lumens) and point it at the wall. The light will diffuse as it bounces off the wall, and the bright wall of light will give you a flattering, smooth gradient of soft light. Soft light makes skin look much more pleasant, and a *ton* of steady light will give your laptop webcam something consistent to expose for - potentially even preventing it from freaking out when a cloud passes by.

If you want to spend more, then we can start talking about lights designed for video recording. Video lights have higher color rendering indices (color rendering index - or CRI - is the metric that broadly tells you whether colors will appear correctly when that light is turned on; something below 85 is probably not great, anything above 95 is *extremely* good; the sun is considered the index against which lights are compared, so it's definitionally 100). A higher CRI means colors will look nicer, but this is getting into nitpicking that probably won't be particularly noticeable on a zoom call that's not even being recorded for later.

Color temperature and a few other dimensions are probably worth getting into, but I'm getting a headache and this post isn't even close to done, so let's speed this up: color temperature exists. Lower color temperature makes it look like you're sitting in front of a campfire; higher makes it look like you're sitting in a doctor's office. Your camera can probably set white balance to make almost any light look pretty neutral, but lots of different light bulbs in the same room might force some lights to look warmer or colder than others. Some lights let you adjust the white balance to be warmer or cooler to bring them in line with the other lights. This is the kind of stuff professionals are paying for when they spend hundreds of dollars on lights - the ability to set a value and get repeatable results. That matters if you're filming a movie, but maybe doesn't for us human beings trying to survive a pandemic and also update our bosses about the numbers we entered into a spreadsheet the other day.

##### lighting technique
I talked a bit about this, but the goal is to get a large, soft light. If you have a very bright light, you can bounce it against a wall, and if you're getting too much light on one side but not enough on the other, you can hang up a white sheet on the opposite side (on the dark side of your face). The light will bounce back and fill out the shadows on your face a bit. You'll want the lights and reflectors and stuff as close to you as possible because the inverse square law means that you'll lose light *drastically* as the distance of the light gets greater.

In other words, if you double the distance between the light source and you, you'll get *one quarter* of the light hitting your face. The more you diffuse the light and bounce it around, the more drastically light will fall off. Some people use multiple lighting sources (hi, I do, I use multiple lights) to get a 2-point or 3-point lighting setup. This can be really nice because it gives you a lot of options to make your space appear to have more depth.


#### tripod
Oh my god we're only this far? Okay, get a stable tripod. A nice tripod should let you adjust all sorts of stuff. If you're really lucky, you'll have space to just *leave* the tripod; do that if you can, so you don't have to worry about framing the shot and all that nonsense.

Oh, a really nice tripod will have a sneaky little hook at the bottom of the center column. get a heavy bag and hang it from there for a much, much more stable tripod. Probably not necessary for a tripod in your bedroom, but it's a nice bit of insurance.

##### tripod technique
I have my tripod set up in front of me so that the camera is just a little above eye level. That's about all there is to say about the tripod. Don't splurge on this; it needs to not be defective, but all the neat stuff that expensive tripods offer are probably not necessary for a tripod that'll never go outdoors.

## audio
I buried the lede, because I think the audio is the most underrated aspect of this, and I kind of wish I hadn't exhausted myself talking about photography and video nonsense. But here we are, having played myself.

There's no microphone in the world that'll inherently overcome kids and dogs in the other room barking at each other, or the echo of your own voice bouncing against the hard walls. Sound treatment would be nice, but that is some *expensive* stuff, and all the DIY videos seem to suggest a fair amount of woodworking and stuff, which... I'm a renter. I don't have the tools for that, let alone the interest.

If you can put up some blankets or even just record in a room with lots of furniture like a couch and stuff, you're honestly way ahead of the pack. If you can set the gain level on your microphone, that's a great next step. If you can get a microphone right up near your mouth, then that's even better.


### XLR vs USB
You can either get a USB microphone or a microphone that plugs in over an audio cable. There are the regular 3.5mm audio cables, and then there are XLR cables. Most higher-end microphones use XLR, for which you'll need an audio interface. There are good USB microphones, but if you ever want to upgrade or just get a different kind of microphone, you'll have to buy several other things to make it work. For that reason, people online seem to suggest going with XLR if you think you'll ever buy other gear, because you can just plug in a different microphone to the XLR cable and use that.

I'm really selling XLR hard here because I have no idea what USB microphones are good. I hear Blue Yeti makes decent microphones? I have no idea. Go check out reviews.

##### XLR technique(???)
I didn't know where else to put this, so I'll just say "don't go buy the longest cables you can find". Longer cables that coil around just end up with more interference.

#### microphone

I use a Shure 58A Beta because I tried to buy an SM58 on ebay and the seller sent the wrong item. Oops.

There are dynamic microphones and there are condenser microphones. The 58A is a dynamic microphone. The pros of dynamic microphones are kind of also the cons: dynamic microphones are less sensitive than condenser microphones, so you really need to speak directly into them, but they also reject noise much more than condenser microphones. If you have a room with almost no echo or outside noise, a condenser microphone might sound better and more natural. If, on the other hand, you don't live in a recording studio, you might be better off with a dynamic microphone.

The 58A costs about $100 used; the SM58 costs about $60 used. The SM58 is literally the one you'll see on concert stages. That's where you're getting yours from if you buy a used SM58 on ebay from a seller who's got more than 10 left to sell - that's almost definitely a concert venue selling old microphones. These are sturdy, reliable, competent microphones that professionals use all the time. They're absolutely good enough for the audio quality that zoom ends up sending over the internet (zoom really undermines everything, huh).

I can't compare the SM58 to the 58A from firsthand experience, but from what I've read and listened to I've come to understand that the 58A is a tiny bit brighter (a little more clarity at higher frequencies) and records a little hotter, so you can set the gain a little lower. It seems as though the SM58 *might* sound a little muddled if you have a deep voice, but we're probably not talking about a night and day difference here.

##### microphone technique
There's a lot to say about microphone technique. I'd suggest that you watch a few YouTube videos, like [this one][mic technique]. The gist is pretty straightforward technique stuff, rather than "buy more stuff": shut off noisy things (or put them somewhere out of the room), get the microphone close to you, etc...

In general, I try to find the group of people who have to become experts in a subject for their job - in this context, it's podcasters and voice actors. There are tons of voice actors giving aspiring voice actors advice on how to do things like narrate audiobooks, etc... and there's nothing saying you can't watch those and draw out lessons from them. Their expertise is totally relevant even if you're not making a career out of it the way they are.

[mic technique]: https://www.youtube.com/watch?v=Ty8YLqOmbV4


#### audio interface
If you're getting an XLR microphone, you'll need an audio interface to connect it to the computer. With an audio interface you'll be able to set the gain level and leave it at that setting. This is another of those times - like with the camera and the lighting - where professional gear gives you repeatability and consistency so you get the same volume and other qualities from one recording to the next, as long as you sit in the same place, speak the same way, and for god's sake don't mess with the dials.

The downside is that if you screw things up and set the gain too high, you might clip the audio, and you can't recover audio that clips. It's just maxed out data and if you pull it down you'll just see flat lines. In general, it's safer to set the gain a little low and do some post processing so you can pull the volume up (which is easy to do).

I have a Scarlett 2i2. I like it a lot. I think you could get by happily with the Scarlett Solo, which has 1 input. I got the 2i2 because when I saw it was on sale used the seller was offering it for about the same price as I could've gotten a Solo. Get whatever works for you.

I have a Y splitter cable from my microphone to the 2i2 so that the microphone goes into both inputs. Each input has a different gain setting, with the first input being the level that mostly works for me, and the second input being set much lower. I only do this in case I inadvertently start a sentence too loudly or laugh or do something that causes the audio to clip. With an identical recording on the second track (except at a much lower gain), the chances that the second channel will have also clipped are basically nil. This way I can mix in the section of audio that otherwise would've clipped.

In meetings, people only ever hear the first input in mono mode (so they hear it in both the left and right speakers). The second channel only goes into a separate file as a backup, and usually gets deleted once I can confirm I didn't clip in the mainline recording.

This has caused me issues, so you might want to do a dry run (or a few dry runs) to make sure you have the workflow down and that things will work.


##### audio interface technique
There's not a lot to say about the audio interface besides what's already been said. I usually record at 48kHz because that's the norm (192kHz is more samples than you probably need, and it won't match up with anything else you're getting).


## software
I use a few things that don't fit in as hardware gear and don't really count as part of the process, but they do *come up* in the process section, so this has to go here.

### OBS
Open Broadcast Studio is an open source program

### Audio Hijack
### Zoom
### Davinci Resolve


## process
Okay, you've made it to the process section. Congratulations. If you're tired reading this, imagine how I feel writing it.



### For zooms with no later recording
There's not a lot going on here. 
### For zooms with later recording/upload
### For interviews
### For prepared talks




<!-- # pre-recorded talks -->
<!-- The CHI talk was probably the easiest - write a script, memorize it in parts, deliver to the camera, do some editing. That sounds like a lot, and it may be a little overwhelming at first, but I think it's worth most of the effort. -->



[cameraLiveGithub]: #
[contact]: #