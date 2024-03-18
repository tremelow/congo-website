+++
title = 'Nemean - Fast Inverse Square Root — A Quake III Algorithm'
date = 2024-03-18
draft = false
+++
{{< katex >}}

If you're online and interested in the intersection of maths, programming and video games, you've probably seen the Quake III "fast inverse square root" snippet.

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

This made the rounds a while ago, because not only is it funny to see professional code with such incredibly descriptive comments, but also because every line of this short code is perfectly incomprehensible. In twenty minutes, this video by [Nemean](https://www.youtube.com/@Nemean) explains this snippet, from the implementation of floating point numbers to a very smart implementation of mathematical functions (which I won't spoil).

{{< youtube p8u_k2LIZyo >}}
