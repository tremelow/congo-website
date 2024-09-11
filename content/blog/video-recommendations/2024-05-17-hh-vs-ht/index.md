+++
title = 'Mihai Nica - Alice HH vs Bob HT'
date = 2024-05-15
draft = false
+++
{{< katex >}}

A video popped up in my feed this week. It discusses a game which really piqued my attention. See, I actually submitted a very similar game to young students for [MATh.en.JEANS](https://www.mathenjeans.fr/) this year.

## The MATh.en.JEANS game

The game was the following:

> Émilie and Manon play "heads or tails" (`H` or `T`) but instead of betting on `H` or `T`, they each bet on a pattern. Émilie bets on `HTH` and Manon bets on `HTT`. Every time one of their a pattern appears (with overlap), the player who chose it gets a point. The game ends when a player reaches 3 points.

For instance, denoting Émilie's pattern in _italics_ and Manon's pattern in **bold**, here's a random game:

<i>HT<b>H</b></i><b>TT</b><b>HTT</b>THH<b>HTT</b>

Here the game stops because Manon wins. After simulating a million games, though, it seems that Émilie wins far more often. How can we explain this?

The point is not for me to give solutions to this problem, so I haven't thought about the problem too much, but the students found it fun and challenging. They weren't able to crack it, even after a while. As for my part, poking holes in their conjectures (e.g. "Émilie can overlap, not Manon") was interesting.

## The HH-HT game

In the video, the initial idea is the same: each player chooses a pattern and counts them with overlap. Except the patterns are shorter and the number of rounds is fixed: the points are counted after 100 flips. Who wins more between `HH` and `HT`?

Mihai Nica takes his time to prove that `HT` wins more, by how much, and how the number of rounds may affect the result. While, the explanation is a bit technical for high-schoolers, the visualisations are great and I found it super engaging! His code is available in a Google Colab in the description, as well.

{{< youtube BAiuFOwhAWw >}}

Any ideas how this can serve as a stepping stone to compare `HTT` with `HTH`?
