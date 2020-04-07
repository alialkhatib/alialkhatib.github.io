---
title: "Do I Look Like a Criminal?"
author: "Ali"
layout: "post"
date: 2020-04-06 11:54:00
tags: [CHI 2020]
---

{% assign paper = site.data.chi_2020[30] %}
One of the busier intersections in the study of algorithmic bias has been in automatic judgments along race and gender, but decisions about how to frame and present information to *people* making decisions are immensely important, and from what I understand it seems that the evidence from studies isn't consistent about whether something like a photo of the person involved in a given context helps or harms them. I've also been thinking about what the human component of AI-training systems might look like (for people evaluating appeals, or for people doing labeling tasks, for instance), and this paper seemed to approach that topic pretty directly.
In this paper -
"[{{paper.title}}]({{paper.url}})" by {{paper.authors | array_to_sentence_string }} - Mallari et al. replicate an important study (and I think come up with problematizing findings, but offer some context to help it make sense), and go further by thinking about what this might mean when we design systems.

To set the stage a bit: In 2018 Julia Dressel & Hany Farid published [a study with lots of findings, but the key one here being that people are more likely to predict that a Black defendant will commit a crime again if released on bail][2018study].
This paper replicated the study but found the *opposite* at least in some circumstances. The details get a little confusing because there are lots of pieces, so I'm kinda working through this as I describe it:

So **study 1** had male defendants and female defendants, and male judges and female judges. In some cases, they just gave the case info of the defendant - age, charge, etc... - but in other cases, they either shared:

- race (mentioned in the text, as in "defendant is a Black male, 38, etc...")
- race (as a photo of the defendant)
- both (photo and text)

What they found was that, among the male judges, nothing seemed to significantly change their predictions about recidivism (will the person commit a crime again). But among female judges, predictions ticked up a bit when they saw both the text and photo of Black male defendants (but not female defendants). They didn't tick down for white male defendants, if you're wondering.

So that was curious. Then they ran the same study and only varied race to isolate just that dimension. What they found in **study 2** was that, when they accounted for everything else, showing the text label (eg "defendant is a Black male aged 38") along with a photo yielded *lower* prediction rates.

**That was really curious**. The authors write about why they think that might have been the case - "photos may have a humanizing effect on the task, making users less likely to predict that a defendant will recidivate" - and I'm inclined to think that might be part of it. I also wonder whether this is psychologically activating people to think about race in a critical way - identifying that race is such a central factor in this defendant's circumstances - and accounting for that in their judgment.

Ultimately I'm not sure what to take away from this. There are a lot of factors outside of the control of the researchers, that will almost certainly shift over the next few years, and that will be hard to measure, let alone account for. But this underscores how important it is to think about this stuff and at least try to reason about the impact of what you're doing. Something as "trivial" as a photo of the person involved in a case might bear heavily in a direction we want - prompting us to think about the consequences on this person's life that we're deciding about, for instance - or in a direction we don't want (giving people the easy, cheap signal they need to be bigoted).

But replication studies like this are immensely valuable. Just triangulating the change over time, thinking about whether these small changes to the research protocol changed outcomes, etc... gives us a really rich language to talk about how brittle our studies can be despite (or because of) how much we curate the parameters of our experimental studies.

Anyway, I'd love it if people engaged with this topic and this paper. It's complicated, but the world is complicated.


[2018study]: https://advances.sciencemag.org/content/4/1/eaao5580
[papertitle]: {{site.data.chi_2020[30].url}}