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


## board games we have in 3B

If you think the HCI group should buy a board game, please head to #game-night (or DM me - @al2) and suggest it. The "criteria" I try to use is:

- can groups play it? (ideally, 4 or more people)
- is it easy to explain the rules and get someone "onboarded" quickly?


{% assign games = site.data.games | where: 'accounted_for',true | sort: 'name' %}
{% assign missing_games = site.data.games | where: 'accounted_for',false | sort: 'name' %}

| game title |  players | notes |
| - | :- | :- |
{% for board_game in games %}| {{board_game.name}} ([instructions]({{board_game.game_info}}){:target="_blank"}) | {{board_game.players}} | {{board_game.notes}} |
{% endfor %}| **MISSING GAMES** | | Please [contact me](/contact) if you have them! | 
{% for board_game in missing_games %}| {{board_game.name}} ([instructions]({{board_game.game_info}}){:target="_blank"}) | {{board_game.players}} | {{board_game.notes}} |
{% endfor %}{: .tablelines}