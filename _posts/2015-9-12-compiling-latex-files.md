---
title: Compile LaTeX Files Without Tearing Your Hair Out
author: Ali
layout: post
---
I actually think that's extremely optimistic (you'll probably still hate LaTeX no matter what), but I wrote a little shell function that does the repetitive crap that you usually have to do when you want to compile a latex file with references (especially if the references are updated).

So here's the file:
{% gist alialkhatib/35bba9fec12a63fcd5f1 %}

The things you should know (and I should document on Github) are:

- You should be in the same directory as the `.tex` file itself.
- The first argument is just the prefix for the file name. So if you're writing a document you've called `proceedings.tex`, then just say `compile proceedings`. I'll consider doing some parsing/splitting stuff, but there are reasons for dropping the suffix.
- If your references (`.bib` file) are in the same directory and the same name, then you're good. Run `compile proceedings` and it'll compile everything in order and then open the file for you to take a look at (it'll be called `proceedings.pdf` or whatever the `.tex` file was).
- If you have a more elaborate setup, then I don't know what to say. Don't get all fancy unless you know what you're doing (kidding, but right now I don't have the time to support use cases that don't conform to my own).

Okay, hope that helps