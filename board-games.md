---
title: Board Games the HCI group has in 3B
layout: listicle
---

## Board games we have in 3B

{% assign games = site.data.games | where: 'accounted_for',true | sort: 'name' %}
{% for board_game in games %}
#### [{{board_game.name}}]({{board_game.game_info}}){:target="_blank"} ({{board_game.players}} players)
{% endfor %}


### games that seem to be missing!
If you know where one of these games is, please [contact me](/contact)

{% assign missing_games = site.data.games | where: 'accounted_for',false | sort: 'name' %}
{% for board_game in missing_games %}
#### [{{board_game.name}}]({{board_game.game_info}}){:target="_blank"} ({{board_game.players}} players)
{% endfor %}