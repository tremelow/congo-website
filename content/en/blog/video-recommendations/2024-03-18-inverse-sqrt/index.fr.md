+++
title = 'Nemean - Fast Inverse Square Root — A Quake III Algorithm'
date = 2024-03-18
draft = false
+++
{{< katex >}}

Si vous vous baladez en ligne et que vous êtes intéressé-e par les maths, la programmation ou les jeux-vidéos, vous avez probablement vu passer le code d'« inverse de la racine carrée » de Quake III.

```c
float q_rsqrt(float number)
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = * ( long * ) &y;                       // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
  y  = * ( float * ) &i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
  // y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

  return y;
}
```

Ce snippet est parfait : chaque ligne est complètement incompréhensible, les commentaires sont super descriptifs, et c'est du vrai code dans un vrai jeu. En 20 minutes, cette vidéo de [Nemean](https://www.youtube.com/@Nemean) l'explique en détail, en allant de l'implémentation des nombres flottants jusqu'à la justification mathématique de pourquoi ça marche (que je ne divulgâcherai pas).

{{< youtube p8u_k2LIZyo >}}
