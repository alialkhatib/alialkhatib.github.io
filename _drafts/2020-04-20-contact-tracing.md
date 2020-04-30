Over the past few weeks, Apple & Google have floated the idea of developing and distributing a digital contact-tracing app that will inform people when they've been exposed to someone who's contracted COVID-19, and communicate to people that they've been exposed to *you* if you later test positive yourself (edit: since writing this, Apple has released a beta of iOS 13 that includes the SDK necessary to begin using this system). Writing this in late April, it feels like we're desperate for information and weary from not knowing who's caught COVID-19, who's still vulnerable, who gets it worse or why, or even how to treat it. We're desperate for any information we can get our hands on. This proposal by Apple and Google promises to give us some information that we can finally start to work off of. We need to stop this dumbass idea. I'll explain why in this post.

Last year I wrote about "[digital forests][]" and the harmful downstream effects of simplifying and reducing how we track and measure our messy world. I wrote about how we develop models to describe the world - and our lives within it - that are necessarily but also dangerously reductive. In James Scott's book _Seeing Like a State_, he writes about foresting in Europe, the Great Leap Forward, and other case studies of centralizing ideologies that ignore or trample on the delicate balances of our social and natural ecologies. During the Industrial Revolution it was difficult to reason about air pollution and so we wrote it off as a factor; decades later, that came to haunt us in the form of acid rain and widespread deteriorating public health. Digital contact tracing has all the hallmark characteristics of these case studies, and we should be more cautious about consenting to it.

The schemes we're reading about - some from joint partnerships such as Apple & Google, others unilaterally presented by surveillance startups such as [Palantir][palantir proposal] and [Clearview AI][clearview proposal] - all offer their own flavors of dehumanizing omnipresent surveillance. For this post, I'm going to focus on the only credible proposal - the one Apple & Google have floated - because I hardly even know where to start with the other proposals. Let's just let it suffice to say that we shouldn't take Palantir's offer [to surveil us even more than they already do][palantir surveillance], and taking up Clearview's proposal after [they scraped all of our images without our consent][clearview data] and after [numerous embarrassing data breaches][clearview data breaches] would put us in the stupidest of all the timelines. (ali: okay this is getting mean-spirited)

Let's talk about what digital contact tracing generally entails by using the system generally being described by Apple & Google as a model case. If you know what their proposal entails, feel free to skip ahead to "[welcome back][]", but chances are that in the time since I started writing this post something has changed, so if for no other reason than to date things, you should probably at least skim the description to know what the situation was at when I wrote this.

## What this scheme will do (more or less, at the time of writing)

First, let's say something good: it is **not** a central repository of immediately personally identifying information and GPS coordinates. This isn't like Snapchat's friends map scaled up to the whole world, or a database of where everyone's been like on Google Maps or Strava or whatever.

The way they're doing this is actually kind of indirect, and they're doing it in this indirect, un-obvious way for intentional reasons to protect people's privacy, so I want to get across the intuition about what this thing does (and what it doesn't) do. I think that there's room for some combination of pulling technology down from the sky so we can look at it at eye level, and elevating our understanding so that we're all empowered to make informed statements about what's actually going on here, and to judge this as peers, rather than deferring categorically to software engineers.

The one-sentence explanation is that *instead of recording **where** you are, your phone records **who** you're near*. To illustrate what this means, let's make up and walk through an example.

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

Let's say I was in line behind you at a coffee shop for 10 minutes from 12:12 to 12:22. Since I'd be close to you (let's say close enough to pair bluetooth headphones), I would get the messages `Kiwi` (at 12:15) and `Potato` (at 12:20), and my phone would hold on to that. I don't get your name, number, or any other information about you. Just the two words. We're each just sending out unique words every 5 minutes and keeping track of what we happen to hear. This app isn't keeping track of who we are or where we are - just what words it's hearing.

Now let's say that you feel sick at 1pm, so you go to the doctor and a PCR test comes back positive for COVID-19. You'll go into your phone and say "I just tested positive for COVID-19", and your phone will send the last several days' worth of words to some database. Something like `{Apple, Banana, Orange, Kiwi, Potato, Cherry, Tomato, Pear, Coconut, Orange, Peach, Eggplant, Kumquat}`, but thousands of words (since you might have had it for a few days before showing symptoms, all the words you had sent out for the last several days are relevant).

When my phone checks in with the database and downloads all the new words it has, it'll check and find that I had heard `{Apple, Banana}`, which means I must have been near enough for our phones to chat for something like **10 minutes**. Is 10 minutes a big deal? No, not really. But what if I had heard **all** of the words above **except** for `{Apple, Banana}`? That would mean that from 12:10pm to 1pm I was close enough to you that our phones were talking. The 10-minute example is something like standing behind someone in line at a coffee shop. This 50-minute example is more like having lunch at the table next to you at a restaurant.

Let's change the scenario from coffee shops and restaurants to something more sensitive: Let's say both of us were at an *STD clinic* at the same time for 45 minutes; what's relevant is that we were *someplace together* at the same time, not where that place was. This approach promises to give us the *someplace together* answer without revealing the *STD clinic* detail. All anyone knows is that you sent out a bunch of words, and I heard the words that put us in the same place for about 45 minutes. Where exactly were you when you sent `Tomato`? Doesn't matter. What was I doing when I received `Eggplant`? Don't worry about it.

Designing a system that goes out of its way like this to avoid knowing the literal location that you're at wasn't the simplest approach, and it's at least a little praiseworthy that this system is being developed in a slightly complicated and confusing way with the right *goal* in mind. If you look at Strava or Snapchat or some other location-tracking app, you can always see yourself as a dot on a map, moving around perhaps with other dots on the same map; this throws out that entire approach. In the context of COVID-19, all anyone really needs to know is that we were *near* each other. This approach strives to give us that *and nothing else*.

Okay, so long as we're clear on what this system does, let's talk about why this isn't going to work.

### welcome back

To quote Arundhati Roy, "If we were sleepwalking into a surveillance state, now we are running toward it because of the fear that is being cultivated". In some cases this is happening with little collective input; in others, virtually or literally none whatsoever. We ought to have a right to determine whether our freedom, our privacy, or indeed our dignity - should be traded away in exchange for a promise of safety, especially if that promise is as dubious as this.

And this is one hell of a dubious solution. Let's talk about why.

#### This system will exclude the poor. On this most basic requirement, it fails

In the description I made earlier, I pointed out that Apple & Google's plan calls for some sort of proximity detection, probably involving bluetooth and some of the fancier, newer technology that your smartphone may have if it was introduced in the last 1-2 years. This means that people without new smartphones won't be able to benefit from alerts to this system unless they upgrade to newer phones - something they almost certainly can't afford to do, nor should they be obligated to in order to receive necessary information about risk exposure. Ars Technica recently published a report that [several billion smartphones don't have the technology necessary to participate in the proximal location sensing scheme Apple & Google are talking about][2b phones].

I hate to underline the point, but we're specifically talking about people who are already enduring steep and crushing poverty. We're talking specifically about people who are disproportionately Black, Indigenous, or other people of color; we're talking specifically about people who are already under immense pressure to take whatever work they can find, including high-risk essential work like logistics for Amazon in their [obscenely dangerous warehouses][amazon warehouses], or delivering food and groceries to us despite receiving [basically or literally no functional personal protective equipment][instacart PPE], putting them in direct contact with potentially hundreds of people every day.

Every day we seem to get more data that shows that communities that have historically been excluded or maligned by our health care infrastructure are particularly vulnerable both in [contracting][covid19spread] COVID-19 and in [mortality][covid19mortality].
Any solution that disproportionately favors the wealthy to the point of excluding the poor will not work.

*This program so staggeringly misses the point of care that we should be most concerned with that it boggles the mind how it came to this.*

#### The exclusions that emerge from this system will decisively undermine its accuracy

Even if we don't care about the classist nature of this digital contact tracing scheme, and if all we care about is ourselves, we should at least be troubled by the implications of excluding the poor: if the people who serve many of us can't receive notifications or insight about their exposure to COVID-19 cases, then even the people with fancy smartphones and the contact tracing app will unwittingly leave a massive - and, crucially, non-random - gaps in their model.

If you talk to any statistician (including epidemiologists), they'll tell you that you can't possibly know the circumstances of every person in a population. We take random samples - smaller subsets chosen randomly in the hope that its approximately representative of the whole group - to try to paint an approximate picture. It's not ideal, but neither is waiting for every single person to report back with their PCR test results. So we make it work. But it doesn't work if we know we're sampling only the wealthy; we don't only ask Palo Alto residents or homeowners in San Francisco how much housing costs them, because that's a non-representative sample of the state (to say nothing of the country).

*Even if we don't care about the people who are most at risk, we should care that the gaps in our knowledge will be decisive and non-random, sabotaging any hope of knowing the vectors and other risks we've been exposed to.*


#### Proximity is turning out to be a dangerously simplistic way to model transmission

There are issues inherent to proximity-based contact tracing that have nothing to do with access, as well. Recent studies have shown that people don't need to be in proximity to someone with COVID-19 to catch it - [they can just be *downwind* of that person][restaurant study]. The reality is that the world is messy and confusing and doesn't model well according to the bubble of what's within range of a Bluetooth module on your smartphone. These don't represent one-off errors; they're sweeping categories representing gaps in our knowledge about potential exposures.

*Digital contact tracing systems that render the world as normally distributed space with spheres of influence characterized by radio waves will consistently leave us with dangerously wrong pictures of our exposure.*

#### Proximal tracing doesn't preserve privacy the way advocates seem to think it does

We also need to talk about what proximal contact tracing offers and what it doesn't, especially in contrast to "absolute" locations. I illustrated earlier how absolute location tracking might say that we were both at <GPS coordinates>. Or it might offer a street address, like &lt;mailing address&gt;. In either case, it would reveal that we were both at &lt;semantic place&gt; from 8pm to 10pm, which could potentially be embarrassing or even damaging. Proximal tracking promises instead to reveal *only* that we were together between 8pm and 10pm.

Neither of these approaches is particularly helpful to me when I'm trying to maintain privacy about where I am. While there are unique risks associated with my absolute location being revealed (for instance, revealing where I live by showing where I am every night), the revelation that I was among many people who are under investigation or otherwise suspected of some socially improper behavior is just as damning as if there's a record that puts us all at the same mailing address for that time - like if all of us have `Kumquat` on our phones.

This isn't to say that proximal tracking is a bad idea, but it misses the point of the concern. [Proximal location tracking has already recently been used to out dozens, perhaps hundreds, of gay men in Morocco][morocco]. It didn't help that their exact locations were obscured; they were "nearby". They were outed by their *associations*, not by their *coordinates*.

*The things we want to keep private are the associations we maintain with one another, which digital contact tracing exclusively tracks.*

#### These are just the beginning of the issues

I haven't talked about any of the other deeper issues here: these kind of personal surveillance schemes are demeaning, and [marginalized communities that have had to endure them for decades could tell you that][combsthepoet via Rachel]. That we should get to decide whether we're okay with this, rather than waiting and watching as countries like Germany and France - panicked and overwhelmed by the virus to one side and technocrats on the other - give in to whatever someone tells them with enough confidence. But this is the problem; we're overwhelmed and terrified, and we want answers. Answers to anything. Any kind of certainty.

The decisions we make now are going to follow us around for generations. It's important that we move quickly, but it's as important that we don't 

#### What can we say with certainty?

There's a great deal that I can offer with certainty, but none of it calls for computer scientists to center their work in this problem:

- We need so much more personal protective equipment that it becomes worthless. We need to be making more of it. No matter what number or factor you're thinking, think *more*.
- We need tests. We need so many more tests that literally every business and every public place can test every person that wanders through. Every homeless person without any documents or identification should be able to get tested anywhere with no drama. This needs to be such a given, so easy and so inconsequential that nobody feels obliged to avoid or seek out certain places based on the availability of tests.
- We need people to be trained as contact tracers. I'm not talking about drones or AIs or any of this nonsense; I'm talking people with brains and feet and pencils and little notepads to take notes and shit. We need an army the likes of which we've never seen before to be able to individually navigate all the weird quirks when someone says they went to a coffee shop and sat in the corner, and we show up and find out they were sitting just underneath the HVAC system blowing on them. We need humans to use their brains and their discretion and their judgment as they track down all these vectors. Now's not the time for pet projects in mass surveillance.
- We need a radical change in how we look at labor. When the cashier at the coffee shop feels sick, they need to take time off immediately. If 90% of sick leave becomes exploitative of generous policies, the other 10% represents another global pandemic averted because a cashier at a coffee shop took time off rather than spreading a disease to a thousand or more people in just a day. The only way this can happen is if sick leave policies became sensible, if we guarantee living wages so people don't end up coerced to work, and housing guarantees so that people don't end up on the street where they're at even more risk of getting sick. We've tried this stupid game of capitalism where we coerce people into doing things they don't want to do. That has now become toxic and dangerous for everyone around the person being coerced, including us. If we want to live, we have to stop this nonsense.


---

*note from ali: this is a pretty mediocre conclusion but i hate to end on bullet points*

The problems we're struggling with right now are social and medical in nature. I realize it's tempting to try to offer solutions to the problems we're dealing with, but engineers have a terrible track record of offering fixes to things that only complicate the problem we originally set out to address. And the common thread to all of it is a tendency to promise that the technical solution will resolve the social problem; it never does, and I'm not sure that it ever can.
States across the country aren't experiencing catastrophic failures with welfare programs written in COBOL because of anything to do with COBOL - the problem came from tech advocates promising that these algorithmic systems would "once and for all" resolve all the problems of administrating the welfare programs that once called for clerks. The people in that system - constantly reconvening and discussing and reevaluating the implementation and rationale of the logic that motivated these bureaucracies - were capable of constant iterative changes given new and developing circumstances. COBOL programs are not.

What we need is to reevaluate our values and implement them. In some limited contexts, algorithmic systems can be beneficial tools to get some sense of what's happening; but as central or decisive agents that motivate and execute services that we mean for all people to enjoy, they will almost certainly cause unimaginable harms.



---
some notes:

- there's a lot more to point to that can help illustrate the disproportionate death toll that's happening along class, race, and gendered lines. my head's spinning to bring it all together, but some notes that i'm aware of off the top of my head:
  + [African American patients are dying at a much higher rate than white patients][AA death rates]. [infection rates][AA infection rates] tell a similar story
  + [Lois Beckett has written about the first US inmate to die of coronavirus - a woman who had just given birth while on a ventilator][prison coronavirus death]
  + [coronavirus contraction rates are substantially higher in prisons (appx 18% in one prison) vs outside prison][prison rates]. in other prisons, where testing is happening at a much lower rate, [the death rate suggests an unimaginably rampant pandemic inside][new jersey prisons]
  + [the Marshall Project][] is tracking this
  + there are also immigrants being [detained by ICE testing positive for COVID-19][detainment by ICE]
  + [Native American tribes are being left out of pandemic response][native american data]
- Tawana Petty has written about her observations of [how the US handled the AIDS epidemic][watched and still dying], specifically pointing out "Those who test positive for HIV and AIDS, remain among some of the most tracked people in the United States. Their surveillance has not led to a feeling of safety for survivors I have spoken with, nor has it led to a cure".

  i want to bring this point up, but it seems like i need to pick a point to make - are historically marginalized groups going to get ignored by this technocentric scheme, or are they going to be scrutinized and watched while they die? the nuanced claim would be that the wealthy and powerful will get to benefit from the knowledge of the system, but the poor will be subjected to it as data inputs, but not necessarily privy to the results that come out of it. e.g. maybe they need to check in before they start their shifts using a device maintained by the company for which they work, but that device won't communicate back to them the way it would if it was their personal device. threading the needle this way would be a risky prediction because it seems awfully precise in predicting the dynamics that'll take shape, and i'm not sure i have evidence to go here.

  i could narrate it as speculative fiction, and in that context i think it wouldn't be that far-fetched, but this post is awfully long as it is, without a section describing a potential future world.
- the COBOL point ~~feels like~~ is a stretch now. once i get over it, i'll delete it. but for now i want to see if i can bring some of these phenomena together so that i feel like things wrap up neatly. otherwise it just feels like everything is on fire all at the same time for totally independent reasons.

  if anyone's thinking of workshopping it, the basic feeling i want to get to is that we've bought into a narrative about automating things in our life to make things simpler, and they *can* make things simpler, but the kernel of work - the stuff that went into coding the COBOL systems in the first place - needed to be revisited and debated and reaffirmed. code can potentially help with some aspects of that, but we can't set it on autopilot and then take a nap.

- i ran the explanation of digital contact tracing by some people who don't work in tech and they seemed to understand the basic idea. at the other end of the spectrum are a few questions:
  1. is this a good-faith, reasonably accurate technical description?
  2. is this description totally unnecessary for the audience?
 
  i think a case could be made that i shouldn't waste 5 minutes of people's time building up the thing i'm about to knock down, except that 1. i feel it helps prove that i know what i'm talking about (and not just brandishing a pitchfork); and 2. i do have some sort of moral feeling about defeating this proposal in its most potent form, to prevent people from trying to shore up the issues with patchy fixes to try and squeak by.

- the big issue that i'm still afraid to ask is whether the meta thesis is clear. i've raised a few points that i think are valid (the people that will be left out, the blind spot that'll leave us with, etc...), but the underlying argument that (tentatively, that solutions that center and elevate technology are doomed to fool us into ignoring people who don't manage to read as "legible" to the systems we designed for wealthy people with fancy smartphones) might need to be hammered home repeatedly, or stated in big bold letters at the top, or something. i think when i look at this with fresh eyes i'll feel more comfortable about being less subtle, but writing it i think i felt uncertain making such a bold claim.
- i don't know why, but the cartoon show _The Jetsons_ kept coming to mind, and i found myself wondering "what if there were people living below the houses above the clouds, so far below the protagonists that nobody on our level even knew they existed". something about that visual metaphor feels salient and unsettling, but a reference to a cartoon that originally aired in the 60s and then again in the 80s seems like asking for trouble.
- i know we said perfect is the enemy of good, so if it comes down to it i'll drop all these notes (except the ones that will take a minute to incorporate into the post), fix up the links, and then post it; but these are all reasonably low-hanging fruit. i don't think i need to do a ton of internal reflection or seeking out new information here.


[welcome back]: #welcome-back

[detainment by ICE]: https://www.theguardian.com/world/2020/apr/28/iran-scientist-us-detention-coronavirus-sirous-asgari
[watched and still dying]: https://www.odbproject.org/2020/04/26/watched-and-still-dying/
[AA infection rates]: https://www.nytimes.com/2020/04/07/us/coronavirus-race.html
[AA death rates]: https://www.theguardian.com/world/2020/apr/08/its-a-racial-justice-issue-black-americans-are-dying-in-greater-numbers-from-covid-19
[native american data]: https://www.theguardian.com/us-news/2020/apr/24/us-native-americans-left-out-coronavirus-data
[the Marshall Project]: https://www.themarshallproject.org/2020/04/24/tracking-the-spread-of-coronavirus-in-prisons
[prison rates]: https://www.inquirer.com/news/coronavirus-testing-montgomery-county-jail-asymptomatic-philadelphia-prisons-20200428.html
[prison coronavirus death]: https://www.theguardian.com/world/2020/apr/29/coronavirus-andrea-circle-bear-federal-prison-death
[new jersey prisons]: https://theintercept.com/2020/04/28/coronavirus-new-jersey-prisons/
[digital forests]: #
[palantir surveillance]: #
[clearview data breaches]: #
[2b phones]: #
[amazon warehouses]: #
[instacart PPE]: #
[restaurant study]: #
[morocco]: #
[combsthepoet via Rachel]: #
[palantir proposal]: #
[clearview proposal]: #
[clearview data]: #