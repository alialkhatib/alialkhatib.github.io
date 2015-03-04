---
title: Reassigning (Update: and Pausing/Resuming!) Tasks
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

Edit (March 4): Later I found that I would want to *pause* and *continue* my tasks occasionally (in this case, our disk I/O was severely limited for some unknown reason, but 80 separate processes hitting the disk weren't helping). You can easily do that with the following run-on sentence one-liner:

    ps -u $(whoami) | awk '{ print $1 }' | xargs kill -STOP

will *pause* all of your processes. If you're thinking ahead, you might realize that your ssh session involves a process or two, so you might want to filter for just your python scripts, for example:

    ps -u $(whoami) | grep python2.7 | awk '{ print $1 }' | xargs kill -STOP

This gets all of your processes, filters for just `python2.7` processes (e.g. doesn't grab the `iPython` instance you have running :), and throws the first cluster of non-whitespace text into `kill -STOP`.

I usually find that once I've done that, looking at `htop [-u $(whoami)]` makes it easy to monitor tasks as I reenable them by using

    kill -CONT pid

Hope that helps people

[1]: http://linux.die.net/man/1/taskset