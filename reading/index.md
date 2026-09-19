---
title: reading groups
layout: longy
image: /reading/reading_group_image.png
---

I run a couple of reading groups, and in the interest of keeping them disambiguated, here's a quick summary of each reading group. You're welcome to join one or both if you'd like.

## Thought Soup
In January 2025, I started a reading group to read through books from the [Workshops4Gaza][] section of the [Open Books store][Open Books]. Buying books from the Open Books store raises money for Palestinians through [The Sameer Project][], which has been a critical instrument in keeping Palestinians alive by sourcing and delivering basic human needs to Palestinians in Gaza.

"Thought Soup" is a riff on a joke about how, as we read all of these books, it really felt like our thoughts were simmering in this soup of thoughts. It's not that deep, but it charmed me and felt apt.

You don't have to buy books from [Open Books][] (in fact, you can't if you're not in the US); if you have the means to donate to [The Sameer Project][] directly, that would make a huge difference for Palestinians. However you can get the books, you're welcome to join the community.

Here are (most, if not all of) the books we've read since we've started. The current book is listed first:


[Open Books]: https://open-books-a-poem-emporium.myshopify.com/
[Workshops4Gaza]: https://www.workshops4gaza.com/
[The Sameer Project]: https://chuffed.org/project/113222-tent-campaign-the-sameer-project

<div class="row row-cols-md-2 row-cols-lg-4 row-cols-2">
{% for book in site.data.thoughtSoupBooks reversed %}
<div class="col mb-2">
  <a href="{{book.url}}" target="_blank"><img
{% if book.finished %}
class="finished"
alt="'{{book.title}}' by {{book.author}} (finished)"
{% else %}
alt="'{{book.title}}' by {{book.author}}"
{% endif %}
    src="{{book.cover}}"></a>
</div>{% endfor %}
</div>

<br>
<br>

**If you'd like to join "Thought Soup", please [click here to join the "Thought Soup" Reading Group][Thought Soup].**

---

## AI Skeptics
In September 2025, I started a reading group working with some organizers in Ann Arbor and Ypsilanti, Michigan. Our goal as a group is to organize folks in the area to push back against the University of Michigan's proposed datacenter project with the Los Alamos National Laboratory, which is principally involved in monitoring and maintaining the nuclear weapons arsenal for future use.

We figured it might be useful to help guide interested participants in reading through books about AI and datacenter projects, and use those readings as opportunities for education and to talk through our frustrations about AI projects in the workplace, in education, and in society.

You don't need to be in the immediate area or even in Michigan to join the reading group. A lot of people from all over the world have signed up and participate in the reading group every week, but the UM-LANL datacenter project is an anchoring subject that we talk about a lot (and I also bring guests and make decisions about the meeting time based on what's reasonable for people in my local community).

Here are (most, if not all of) the books we've read since we've started. The current book is listed first:


<div class="row row-cols-md-2 row-cols-lg-4 row-cols-2">
{% for book in site.data.AI_skeptics reversed %}
<div class="col mb-2">
  <a href="{{book.url}}" target="_blank"><img
{% if book.finished %}
class="finished"
alt="'{{book.title}}' by {{book.author}} (finished)"
{% else %}
alt="'{{book.title}}' by {{book.author}}"
{% endif %}
    src="{{book.cover}}"></a>
</div>{% endfor %}
</div>

<br>
<br>


**If you'd like to join the AI Skeptics Reading Group, please [click here to join the "AI Skeptics Reading Group"][AI Skeptics].**


[Thought Soup]: https://buttondown.com/al2
{:target="_blank"}
[AI Skeptics]: https://buttondown.com/ai-skeptics-reading-group
{:target="_blank"}
