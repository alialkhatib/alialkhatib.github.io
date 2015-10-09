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

{% for book in site.data.books %}
  ![{{book.title}}](http://images.amazon.com/images/P/{{book.ISBN}}.01.LZ.jpg)
  *{{book.title}}* by **{{book.authors| array_to_sentence_string }}**
{% endfor %}