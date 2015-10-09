---
layout: shorty
title: Books
---
I have some books! You can see them here:

<ul>
{% for book in site.data.books %}
  <li>
      <span class="booktitle">{{book.title}}</span> by {{book.author}}
  </li>
  {% endfor %}
</ul>