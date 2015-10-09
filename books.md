---
layout: shorty
title: Books
---
It's come to my attention that I have a lot of books.
I realize most of the people I know have access to a library,
but some people prefer to borrow books from friends for lots of good reasons.
Or alternatively, sometimes you want to know what books someone else has read
(e.g. to see where they're coming from intellectually; what influences them)

Either way, I don't really care. I figure you have your reasons,
and I thought it might come in handy to start tracking the books I *do* own,
so here it is:

A few notes:
1. This list isn't organized. It also might not be complete (but mostly it is).
If you really want me to organize something differently, either have a really good reason or be one of the authors.
2. I've thought about embedding images and whatnot,
  but I'm not sure what the legal implications of hosting a bunch of book cover images is in terms of copyright
  (copyright law is ridiculous)
  and I *really* don't want to force you to send a bunch of unencrypted queries to Amazon or whatever to grab cover images.

{% for book in site.data.books %}
- *{{book.title}}* by **{{book.authors| array_to_sentence_string }}**
{% endfor %}