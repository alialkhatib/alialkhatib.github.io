---
title: Board Games the HCI group has in 3B
layout: listicle
---

## Board games we have in 3B

{% assign games = site.data.games | where: 'accounted_for',true | sort: 'publicationDate' | reverse %}
{% for board_game in games %}
#### [{{board_game.name}}]({{board_game.game_info}}){:target="_blank"} ({{board_game.players}} players)
{% endfor %}