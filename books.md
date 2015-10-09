---
title: Books
layout: longy
blurb: | 
    *some weird kind of sharing thing.*
---


Some people have brought up that I have a fair number of books.
I realize most of the people I know have access to a library,
but some people prefer to borrow books from friends for lots of good reasons.
Or alternatively, sometimes you want to know what books someone else has read
(e.g. to see where they're coming from intellectually; what influences them)

Either way, I don't really care. I figure you have your reasons,
and I thought it might come in handy to start tracking the books I *do* own,
so here's a list of the books I have. If you want to borrow one (or several),
or talk about something in one of these books,
feel free to [contact](/contact) me.

A few notes:

1. This list ~~isn't organized~~ is organized by publication date! Which is something! It also might not be complete (but mostly it is).
If you really want me to organize something differently, either have a really good reason or be one of the authors.
2. I've thought about embedding images and whatnot,
  but I'm not sure what the legal implications of hosting a bunch of book cover images is in terms of copyright
  (copyright law is ridiculous)
  and I *really* don't want to force you to send a bunch of unencrypted queries to Amazon or whatever to grab cover images.

For reference, there are {{ site.data.books.size }} books. Okay here we go!

{% assign books = site.data.books | sort: 'publicationDate' %}
{% for book in books %}
- *{{book.title}}* by **{{book.authors| array_to_sentence_string }}**
{% endfor %}