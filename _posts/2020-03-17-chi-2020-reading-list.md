---
title: "A (tentative) CHI reading list"
author: "Ali"
layout: "post"
tags: [CHI 2020]
---

Academia is a difficult line of work to "succeed" in, where success is often defined as being noticed in a noisy field where people work for long hours in obscurity, sometimes feeling like you only surface to get smacked in the face with harsh rejections.
Conferences are a rare opportunity to be up on a stage talking about something you did that other people collectively decided the field should be proud of.
So it feels extra painful to imagine early career researchers who were looking forward to CHI, hoping for a rare opportunity to share their work and perhaps make themselves known to people they respect, only to have that opportunity taken away by a global pandemic.

I decided that something I could do to help early career researchers would be to spotlight a few papers that I probably would've tried to attend and tweet about if I were going to CHI.
After skimming the titles, I came up with around 90 papers that piqued my interest.
After looking online, I was able to find around half of them online.
I'll keep looking, but in the meantime, here's a list of papers that I found interesting from a quick glance, and that I hope to get to write about in the coming weeks.
If you're interested in following along, you can keep an eye on future posts [here][CHI 2020 link], where, posts about CHI 2020 will be grouped together (although I expect nearly all of my posts for the next few weeks or months will be about CHI...)

(Some of these papers have an obvious through-line; others might have gotten my interest for weird or arbitrary reasons. If you think I missed something, please point it out ([contact me][contact]) and I'll throw it on the reading list.)

### my (tentative) reading list


{% assign proceedings = site.data.chi_2020 | sort: 'authors' %}
<ul class="list-group-flush" style="padding-inline-start:0px">
{% for paper in proceedings %}
    <li class="list-group-item {% if paper.url == null or paper.url == false %} list-group-item-secondary {% endif %}">
    {% if paper.url == null or paper.url == false %}
    <span class="text-black"><span class="font-weight-bold">{{paper.title}}</span> by {{paper.authors| array_to_sentence_string }}</span>
    {% else %}
    <a class="stretched-link" target="_blank" href="{{paper.url}}"><span class="font-weight-bold title">{{paper.title}}</span> <span class="text-decoration-underline">by {{paper.authors| array_to_sentence_string }}</span></a>
    {% endif %}
    </li>
{% endfor %}
</ul>

--- 

*(When I started writing this post (a week ago, yikes), CHI was still tentatively going to happen, but I had announced [I wouldn't be attending][tweet]. Now all of that is kind of behind us, because CHI has been officially canceled due to the global pandemic that (I assume) I won't need to explain here. Also, Merrie Morris has apparently started doing [something similar][mm], and anything Merrie Morris is doing seems like a good bandwagon to join)*


[tweet]: https://twitter.com/_alialkhatib/status/1237065185673674756
[mm]: https://twitter.com/merrierm/status/1238499395764535297
[contact]: /contact
[CHI 2020 link]: /blog/chi2020