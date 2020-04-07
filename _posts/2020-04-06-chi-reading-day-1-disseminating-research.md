---
title: "Disseminating Research News in HCI"
author: "Ali"
layout: "post"
date: 2020-04-06 11:54:00
tags: [CHI 2020]
---

{% assign paper = site.data.chi_2020[29] %}
In statistical terms, "significant" approximately means "this probably didn't happen by random chance"; in everyday language, "significant" means something more like "that's a big deal". Don't speed past that sentence - it's important. In academia we put untold numbers of hours into communicating our work to the people who have similar technical backgrounds to us - and use language in the same way - so when something we do pulls in huge numbers and garners public attention, we're rarely well-prepared for it. I lost track of the number of times students and even professors expressed apprehension about journalists asking about their work when I was in grad school. There are unique, complicating factors in that case, but I think everyone's anxious that they'll say something and it'll get misquoted, or quoted but out of context, or the audience of everyday intelligent people will read something like "significant" and take it in a direction we didn't mean. One of the papers I read today - 
"[{{paper.title}}]({{paper.url}})" by {{paper.authors | array_to_sentence_string }} - 
offers a sort of taxonomy of pitfalls, and how to try to avoid them.


I guess I'm realizing right now that an ultimate irony would be if I was misrepresenting their work from misunderstanding it. Let's not dwell on that.

In the paper, Smith et al. write about how they interviewed a pretty substantial number of HCI researchers from the US and the UK and came up with a few categories of issues that arise during reporting and other publicizing in different contexts:

1. Press releases
- **Fabrication**: information that just wasn't true gets reported as a fact, or the bit of press frames the work in an unintended way. I don't have very deep thoughts on this.
- **Cherry picking**: the article or press release takes one tiny take-away, maybe not "the hill you wanted to die on", and talks about just that, so now your paper has become "the paper that says all algorithms are bad" or something.
- **Motivation portrayed as result**: if I understood this correctly, this looks like when you write about a concept and offer an example to illustrate it, and someone takes the example and runs with it as a literal application or literal argument. I actually think people in general must have really direct experience with this - I can think of at least one time in the last few weeks that I illustrated a point by drawing an example and the person on the other end of the internet seemed to read it as a literal exhortation. If I understood this correctly (big if!), I think this is along those lines.


2. Interviews
- **Pre-constructed narrative**: researchers reported journalists pushing for a conclusion that matched their assumptions. Some comedian (I honestly forget who at the moment) talks about how they'll go searching "WWW dot I'm right dot com" and find whatever they need to agree with them. I think we could write whole papers about the biases we introduce in our inquiry - a computer scientist looking into oppressive working conditions for gig workers will almost certainly think about systems they can build to change that situation. If I had found success down that road, would I not have published a paper about it? I'm not sure to what extent that differs from a journalist seeking to confirm a hunch they have - maybe there isn't a difference.
- **Omission of scientific detail**: sometimes journalists don't bother to talk about the limitations of the sampling methodology you spent half a page writing about, and that causes problems downstream when people are pointing out these issues you acknowledged and really deeply thought about in the paper.

3. Media incentives and formats
- **Political propaganda**: sometimes work gets appropriated to make a political argument. The first example that came to mind reading this was the "[shrimp on a treadmill][shrimp]" scandal, which politicians tried to point to as a waste of money. The principle investigator fought back, showing how the point of the study was to see how marine wildlife react when pollution in the water makes it hard for them to breathe. But the criticism of the shrimp treadmill wasn't a goodfaith inquiry into the purpose of the research; it was more of a drive-by to try and dunk on academics.
- **Sensationalization**: Smith et al. wrote about this issue with some mixed feelings; the gist is that reporting sometimes injects emotionally evocative qualities to research, escalating the stakes in what might feel like an unfair or unreasonable way. But they write that they found some researchers accept that a bit of this is necessary. I think another aspect to this - though maybe not common *per se* - would emerge if the person reporting on the topic was representing a more vulnerable community than the researcher was. One example that comes to mind is when graphics researchers developed "deepfake" tools and reporters expressed concern about the implications for politicians and (more insightfully) the implications for people who are already marginalized and disempowered. A graphics researcher whose work is covered as "making deepfakes of scorned ex's easier" might write that coverage off as a "hit piece", but I would argue the journalist is just thinking about vulnerable communities that the researcher didn't bother to.<br>
All this is to say that this, like many of the other issues, could be a whole ongoing discussion longer than 10 pages all on its own.
- **Inaccurate claims**: sometimes a carefully hedged claim will get flattened into something like "X CAUSES Y; ALSO, THE SUN IS GOING TO EXPLODE".
- **Tone**: this seems to come up more often in sensitive research topics, but probably happens everywhere. Someone might be doing work to study something like sex work and a reporter will report a quote or juxtapose some stuff in a way that makes the researcher seem much more flippant and cavalier than the researcher intended.
- **Misattribution**: sometimes (okay, often), collaborators will get dropped or someone's role will get downplayed or exaggerated. In my experience it was easy for people to point to a "Stanford-led experiment about ..." when in reality the project was a collaboration with stakeholders that took months of work earning trust and confidence.

4. Web 2.0 affordances
- **Unintended identity disclosure**: this post is getting long and this is not that novel, but *anonymized data is more readily deanonymized than you think*.
- **Rapid re-publishing of incorrect information**: this extends an earlier point about fabricated information, but if something gets out there that's wrong, you'll spend 10x as much energy and time chasing down all the republications and retweets and shit.



The paper goes *further* into further depth on all of these, and specifically talks about how to avoid these risks (which I was careful not to spoil). You should read the paper if you're interested. It's an easy read (maybe because it hits home).
I think one salient feeling that I have is that we should have way more of these kinds of discussions about how to have rewarding conversations with people about the kind of work we do, why we do it, what the limitations are, etc... because this work *does* matter, and the whole point is to share what we learn, right?

In that spirit: if you have an experience to share or lessons you've learned struggling to navigate these open waters, and if you feel comfortable sharing, I'd love to hear about it.




[shrimp]: https://web.archive.org/web/20191003060315/https://www.chronicle.com/blogs/conversation/2014/11/13/how-a-47-shrimp-treadmill-became-a-3-million-political-plaything/
