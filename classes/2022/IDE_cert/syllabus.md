## Intro to Data Ethics Syllabus
This course will give students a partial survey of ethical issues that arise in the practice of data science, and ways to navigate and competently advocate in those kinds of contexts.

This course considers two aspects of data: **collection**, and **application**: First, we will explore how ethical issues arise in the **collection** of data; Second, we will question some of the "myths" associated with the **applications** of data to try to come up with our own generative approach for interrogating applications of AI in any given setting.

Discussing the **collection** of data - including consent, surveillance, stewardship, and autonomy - will give us ways to bring into focus how the acquisition of data can implicate data scientists in transgressive and even harmful practices.

Interrogating myths surrounding the **applications** of data-driven systems - such as the claim that *AIs make more "objective" decisions* - will give students new ways to critically evaluate the promises and realities of algorithmic systems.

This class does not attempt to offer a comprehensive picture of the landscape of data ethics, nor will it provide a static checklist of considerations to refer to in the field; these approaches miss the reality that the nature of historical systematic marginalization makes a procedural approach to evaluating systems for bias fraught with gaps and omissions.

Instead, my hope is that you will emerge from this class with a generalizable mindset reflecting on the power dynamics, overarching social structures, and historical patterns that all serve to marginalize and render invisible groups of people in various contexts. With that skill ready to bring to any new project or system, I believe you will be vastly better-equipped to understand the myriad highly-varied and sometimes totally-novel harms that emerge in those unique projects.

# Class structure
This class only spans 6 weeks, so there will be a number of readings to do each week sometimes spanning a range of 2 or 3 related topics. I want us to be as prepared as possible to discuss these topics, so I'm asking you all to do a bit of advance preparation for the class so we can go into the Zoom session with everyone eager to talk about stuff.

## Deliverables
Each week will have 2 or 3 headline topics associated with them. Each topic will have **guiding questions** in italics and a handful of **selected readings** in bullet point format.

At a very high level, I'll generally want you to read something from each topic and post your thoughts about the guiding questions as informed by the reading you chose and from whatever else you bring to the class - be that personal experience, knowledge of another domain/topic, or whatever else.

### Realtime attendance

If you are planning on attending the class in "realtime", then I expect you to read at least 2 pieces from each topic (generally, this means 4 to 6 readings per week).

I'll also want you to post a few short thoughts reflecting on the guiding questions and how the pieces you chose speak to those prompts. I'm not judging these for how well they're written; I just want your shorthand notes from reading these pieces, so that if other people generally resonated in the same way to the reading, that'll become apparent. The ideal post is clear enough for you to read it right before class and be refreshed on what you were thinking about when you read the piece.

I want these "initial reflections" posted to the Canvas by **Tuesday night at 11:59pm (pacific time)**.

The due date is approximately 2 days before class for 2 reasons:

1. I want you all to be able to read each others posts and briefly discuss with each other in Canvas. Maybe multiple dichotomous perspectives will emerge about a given reading, or maybe different groups will have very subtly different readings. I want you all to have at least the opportunity to explore that.
2. I'm going to use your initial reflections to inform whether we need a lot more or less time to let you all discuss something. Or, if I feel like the piece landed for all of you in a totally different way than I expected, then I'll want time to figure out what that's about, and similarly revise my lecture plan.

### Asynchronous attendance

If you can't attend the class in "realtime" (in other words, on Zoom), that's okay. Whether you'll miss *one* class or *multiple* classes, I'll want you to do all of the same things as above, with the following modifications:

- I want you to read at least **1 additional reading** from each topic (this might mean reading all of the articles)
- I want you to **also** submit "provocations" related to the topic that week by **Monday night at 11:59pm (pacific time)** so that you and other students will have a little more time to discuss the provocations on Canvas and so students attending on Zoom can formulate a few thoughts in advance.

These provocations can be *specific* to a reading, or they can be *generally* about one of the topics for that week. The point is just to give people posting reflections a reasonable amount of time to read and reply.

---

# Topics

## Data Collection
How did the data come to be in the setting where you're using it? Understanding the context of the data you're working with is important for understanding not just whether you're using data collected under false or misleading pretexts, but also whether and to what extents the data you're using to draw inferences can be relied upon.

The theme of this entire class is "power" and more precisely "power disparities"; *these readings follow that theme*. As you read these articles, ask yourself what roles you'll be playing in the solicitation of data from people. Are people *opting into* or *out of* this data collection plan? In either case, is the option made clear to them? Are the people whose data you're collecting **fully informed** about *what* data you're collecting, and *why*? What are your data storage and retention policies? Are you preserving data for longer than you need them? Do participants know what your data practices are?

### Consent
[Informed] Consent in data ethics and academic research more broadly draws substantially from the period of time after revelations of galling experiments and procedures conducted on unwitting and unwilling subjects of human experimentation came to light. The underlying spirit of this concept is that we as researchers must treat other people with the dignity of asking for consent, fully informed of the procedure and potential harms, and without undue coercion leveraged upon them.

We'll talk briefly about different kinds of ways of evaluating consent (in academic, versus legal, versus personal terms), and think about a few cases where consent was ambiguous, if not obviously transgressed.

*Were laws violated in these instances? Were people's expectations violated? Was this collection, use, or sharing of data explicitly what the people represented by the data wanted? What mechanisms exist to adjudicate the details of this story (if that's clear from the reading)? What mechanisms should exist? What kinds of issues do you see arise in these cases, that you might see yourself needing to keep in mind as you solicit consent from participants?*

#### Readings

- [Google face scanning technology](https://www.theverge.com/2019/10/2/20896181/google-contractor-reportedly-targeted-homeless-people-for-pixel-4-facial-recognition)  getting training data from homeless people to improve the quality of face-unlock technology with people of color
- [Crisis Text Line](https://www.politico.com/news/2022/01/28/suicide-hotline-silicon-valley-privacy-debates-00002617) sharing data from crisis counseling with for-profit parent company Loris.ai
- [Clearview AI](https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html) collects billions of photos of people from the internet
- [United Nations](https://www.hrw.org/news/2021/06/15/un-shared-rohingya-data-without-informed-consent) shared data of Rohingya people

- For some light reading material...
  - [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) (EU legislation)
  - See also [California Consumer Privacy Act](https://en.wikipedia.org/wiki/California_Consumer_Privacy_Act)
  - See also Virginia's Consumer Data Protection Act

  ### Surveillance
Surveillance shows up in lots of different literal and metaphorical places, eliciting issues adjacent to consent along with a handful of others. We'll talk about surveillance in workplaces, in public, in areas where people have little choice to leave, and a number of ways that surveillance grows.

*What is surveillance? What is mass surveillance? and why is it harmful? What are the individual harms? What societal harms exist? What kinds of surveillance regimes and policies exist today, and what kinds of alternatives to such regimes could exist instead?*

#### Readings
* [Ring building a network of cameras of public spaces](https://www.makeuseof.com/ring-doorbell-invading-privacy/)
  - see also [landlords installing Ring cameras](https://www.nytimes.com/2021/08/28/realestate/my-neighbors-door-camera-faces-my-apartment-is-that-legal.html)
  - see also [recruiting police officers to use and tap into Ring network](https://www.latimes.com/business/technology/story/2021-06-17/ring-influencer-marketing-los-angeles-police-department)
- [Prison phone calls](https://www.vice.com/en/article/7kbbey/prison-phone-companies-are-recording-attorney-client-calls-across-the-us) have been recorded by private companies for years, including ostensibly confidential conversations between clients and their attorneys
- [Amazon workers surveillance](https://www.nytimes.com/2022/02/11/arts/amazon-tiktok-box-delivery.html) and coercion to dance, do funny bits, etc... for the amusement of viewers
  - See also [remote work surveillance](https://www.washingtonpost.com/technology/2021/09/24/remote-work-from-home-surveillance/)
  - See also [more on workplace surveillance](https://www.thenation.com/article/society/surveillance-wages-amazon-labor/)

### Context
The context around which data were collected are crucial to understanding how far you can take the data you're working with. The previous sections got you to think about whether people were fully informed, whether people had ways to opt out of the system (if it wasn't opt-in in the first place), what effect ubiquitous surveillance does to people, and more. In this section I want you to think about the repurposing and remixing of data, and how data collected for one purpose gets reused for other purposes, sometimes clearly exceeding (for example) original affirmations of consent.

*Think about a recent project you've worked on that leveraged data; who collected that data? What was the setting for the collection of that data? Was it collected for the specific purpose that you're now using it, or was it collected for other purposes, or for no particular purpose? Are you juxtaposing data from different sources in a way that could endanger or harm people?*

#### Readings
- [Using WiFi to track people's locations](https://www.media.mit.edu/publications/see-through-walls-with-wifi/)
- ["Gaydar" machine](https://www.nytimes.com/2017/10/09/science/stanford-sexual-orientation-study.html), trained on data collected from dating apps
- [Sentenced for a selfie: Middle East police target LGBTQ+ phones](https://news.trust.org/item/20220306173655-sewt8/)
- [Datasheets for Datasets](https://arxiv.org/abs/1803.09010), a first step toward documenting myriad pieces of context surrounding the data we use in data driven applications
- [Ethical Considerations for Research Involving (Speculative) Public Data](https://cmci.colorado.edu/~cafi5706/group2020_designfiction_fiesler.pdf)

---

## Promises of AI and data-driven applications

### "AI will understand the world better than we can"

What decisions or classifications are being made in the article I'm reading?

#### Readings
- [Zillow's AI](https://www.wired.com/story/zillow-ibuyer-real-estate/) made wildly wrong decisions and cost the company billions of dollars
- [training AI to identify criminality from faces](https://www.technologyreview.com/2016/11/22/107128/neural-network-learns-to-identify-criminals-by-their-faces/)
- pro-ana users are [getting around word bans with misspellings](https://www.insider.com/tiktok-bans-six-accounts-posting-eating-disorder-content)
- [GPS detours into dangerous roads](https://www.nytimes.com/2021/12/31/us/google-maps-waze-sierra-nevada-snow.html)
- [facebook labels Black men as primates](https://www.nytimes.com/2021/09/03/technology/facebook-ai-race-primates.html)
  - [Google did too](https://www.wired.com/story/when-it-comes-to-gorillas-google-photos-remains-blind/)
- [To Live in Their Utopia: Why Algorithmic Systems Create Absurd Outcomes](https://ali-alkhatib.com/papers/chi/utopia/utopia.pdf) (also available [here as an HTML page](https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445740)?)
- [Working with Machines: The Impact of Algorithmic and Data-Driven Management on Human Workers](https://dl.acm.org/doi/10.1145/2702123.2702548)

### "AI can make more objective or fairer decisions than people can"
*What is objectivity? What is fairness?*

#### Readings
- [Twitter image cropping algorithm debrief](https://blog.twitter.com/engineering/en_us/topics/insights/2021/sharing-learnings-about-our-image-cropping-algorithm) after discovering and investigating why Twitter's saliency algorithm consistently preferred white faces
- [UK grading algorithm](https://www.theverge.com/2020/8/17/21372045/uk-a-level-results-algorithm-biased-coronavirus-covid-19-pandemic-university-applications) shown to be biased against students from poorer schools
- [Bail recommendation algorithm](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) repeatedly gives Black defendants steeper bail recommendations than white defendants
- [AI used to identify ethnic Uyghur people](https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html)
- [surveillance education tech fails students of color](https://www.theverge.com/2021/4/8/22374386/proctorio-racial-bias-issues-opencv-facial-detection-schools-tests-remote-learning)
- [algorithm for matching organ donors to recipients blocks donations to Black patients](https://www.wired.com/story/how-algorithm-blocked-kidney-transplants-black-patients/)

### "AI will replace [tedious] human labor (eg driving)"
#### Readings
- *Ghost Work* chapter by Mary Gray?

### "AI is the only way to scale systems for social good"
#### Readings
- [youtube kids videos have been bad for years](https://www.polygon.com/2017/12/8/16737556/youtube-kids-video-inappropriate-superhero-disney)
- apropos of earlier point, [amazon warehouse injury rates](https://revealnews.org/article/amazon-injury-rates/)
- ["Oracle" of ethics trained on Reddit Data](https://www.theverge.com/2021/10/20/22734215/ai-ask-delphi-moral-ethical-judgement-demo)
- [cop abuses copyright enforcement systems to prevent realtime livestreaming](https://www.vice.com/en/article/bvxb94/is-this-beverly-hills-cop-playing-sublimes-santeria-to-avoid-being-livestreamed)
- [computer vision system evaluates amazon courier "performance"](https://www.vice.com/en/article/88npjv/amazons-ai-cameras-are-punishing-drivers-for-mistakes-they-didnt-make)
- [Amazon product recommendations encourage consumers to buy products bought together to commit suicide](https://www.nytimes.com/2022/02/04/technology/amazon-suicide-poison-preservative.html)
- [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜](https://dl.acm.org/doi/10.1145/3442188.3445922)

---

## Pushing for better futures
If we have time, we'll get to this!