---
title: Board Games the HCI group has in 3B
layout: listicle
---
<style>
.tablelines table, .tablelines td, .tablelines th {
        border-bottom: 1px dotted black;
        padding-right:1em;
        }

table {
  width:100%!important;
}
</style>


## Board games we have in 3B




{% assign games = site.data.games | where: 'accounted_for',true | sort: 'name' %}
{% assign missing_games = site.data.games | where: 'accounted_for',false | sort: 'name' %}

| game title |  players | notes |
| - | :- | :- |
{% for board_game in games %}| {{board_game.name}} ([instructions]({{board_game.game_info}}){:target="_blank"}) | {{board_game.players}} | {{board_game.notes}} |
{% endfor %}| **MISSING GAMES** | | Please [contact me](/contact) if you have them! | 
{% for board_game in missing_games %}| {{board_game.name}} ([instructions]({{board_game.game_info}}){:target="_blank"}) | {{board_game.players}} | {{board_game.notes}} |
{% endfor %}{: .tablelines}