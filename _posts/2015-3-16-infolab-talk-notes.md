---
title: InfoLab Talk Notes
author: Ali
layout: post
---
Quantified Self, Azumio, Argus, etc... Talk

## Background
- Did my undergrad thesis on Quantified Self
- Lots of cool stuff [here][QS presentation][ppt], more thoroughly [here][QS Thesis][pdf]

## Depression, emotional well-being, and the psych research
- Interest in things like depression, quality of life, etc...
    - Depression is a significant problem (est. 350m people according to WHO)
- Depression is particularly common among new mothers and others whose lifestyles change dramatically and abruptly [1]
- Some research suggests physical activity can help mitigate and even cure depression [2,3,4,5]
    - Ultimately, however, "studies attempting to investigate this relationship have yielded equivocal results." [6]

### It would be great if we could study people's well-being at large scale and report on the relationships of things like physical activity and emotional well-being - especially depression and anxiety.

## Finding sentiment (and depression!) in status updates
- Sentiment analysis still has some work ahead, but we've made huge progress:
    - We're not bad at determining certain characteristics from text-based communication. [7]
    - We can identify mood and emotion from tweets! [8,1,9,10]
- Some sentiment analysis tools are quite good (LIWC, Vader, [11])

## What I've been up to
With a data dump from Azumio, we were able to look into the activity data of upwards of 5 million people. After filtering our dataset to look only at users with active, public Twitter accounts and activity entries, we started crawling and cleaning data, and we can now share some preliminary reports. Our dataset consists of more than 3 million activity entries ranging daily step counts to dragonboating, as well as more than 5 million tweets spanning some 50k users in total. We also have about 60 million edges representing all the followers and friends these users have on Twitter.

Cleaning a lot of this data up took some time, so I'm not as far as I'd like to be, but now that we have the data organized nicely I'm looking forward to running sentiment analysis on users' tweets, correlating them with relative activity (for now looking strictly at whether people logged any activity that day, but later looking at relative activity within activity types (e.g. z scores of daily step counts for users with sample sizes greater than 30)).

Ultimately, there are a few outcomes that would be great (and would not be mutually exclusive):

1. Finding anything that correlates strongly with depression, anxiety, etc... would help us identify these trends
2. Identifying what to look for among people who may have been depressed but have largely *avoided* it
3. Learning about "failure" (to meet goals, to lose weight, etc...) and how various types of people deal with failure.

#### Some citations totally out of order:

1. De Choudhury, Munmun, Scott Counts, and Eric Horvitz. "Predicting postpartum changes in emotion and behavior via social media." *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems*. ACM, 2013.
2. Folkins, Carlyle H., and Wesley E. Sime. "Physical fitness training and mental health." American Psychologist 36.4 (1981): 373.
3. Yeung, Robert R. "The acute effects of exercise on mood state." Journal of psychosomatic research 40.2 (1996): 123-141.
4. Salmon, Peter. "Effects of physical exercise on anxiety, depression, and sensitivity to stress: a unifying theory." Clinical psychology review 21.1 (2001): 33-61.
5. Dunn, Andrea L., et al. "Exercise treatment for depression: efficacy and dose response." American journal of preventive medicine 28.1 (2005): 1-8.
6. Lichtman, Sharla, and Ernest G. Poser. "The effects of exercise on mood and cognitive functioning." Journal of Psychosomatic Research 27.1 (1983): 43-52.
7. Hancock, Jeffrey T., Christopher Landrigan, and Courtney Silver. "Expressing emotion in text-based communication." Proceedings of the SIGCHI conference on human factors in computing systems. ACM, 2007.
8. Bollen, Johan, Alberto Pepe, and Huina Mao. "Modeling public mood and emotion: Twitter sentiment and socio-economic phenomena." arXiv preprint arXiv:0911.1583 (2009).
9. De Choudhury, Munmun, Scott Counts, and Eric Horvitz. "Social media as a measurement tool of depression in populations." Proceedings of the 5th Annual ACM Web Science Conference. ACM, 2013.
10. De Choudhury, Munmun, et al. "Predicting Depression via Social Media." ICWSM. 2013.
11. Mohammad, Saif M., and Peter D. Turney. "Crowdsourcing a word–emotion association lexicon." Computational Intelligence 29.3 (2013): 436-465.

[QS presentation]:/media/presentations/QS.ppt
[QS Thesis]: /media/presentations/QSThesisFinal.pdf
