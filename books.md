---
layout: shorty
title: Books
---
I have some books! You can see them here:

<ul>
{% for book in site.data.books %}
  <li>
    {% for key in book %}
      {{key}} {{book[key]}}
    {% endfor %}
    }
  </li>
  {% endfor %}
</ul>