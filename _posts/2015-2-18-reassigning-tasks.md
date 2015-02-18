---
title: Reassigning Tasks
author: Ali
layout: post
---

Recently I did something rude and hogged a compute server of ~96 cores. Unsurprisingly, I got an email from someone in the lab asking if I could do something about it. At first I assumed I'd have to kill the tasks that were running on the cores he needed, but then I realized Linux would probably just reassign other tasks into those newly-freed cores (a feature in most cases, but in this one instance a bit of a nuisance).

For whatever reason, I didn't immediately remember that you could set affinity for a task. Great, right? Yes!

Kinda.

The problem is that if you've already started the threads, and in my case if you have 200+ tasks queued and running, reassigning core affinity manually is ridiculous. A simple bash function will help though:

{% gist alialkhatib/148a15f2cf76ed3c1efe %}

The way this works is pretty simple: it creates a list of all the tasks you're running and returns just the pid's:

    ps -u $(whoami) -o pid | tail -n +2

and in a for loop calls `taskset` and reassigns the core affinity on that `n` (which refers to each line in the `for` loop)

    taskset -pc $1 $n;

`taskset` is kind of cool because it lets you reassign core affinity according to a pretty [open-ended syntax][1].

What you get is a pretty neat allocation (in this case I used 15-96 as my range):

![jerk move](/media/jerkmove.png)

[1]: http://linux.die.net/man/1/taskset