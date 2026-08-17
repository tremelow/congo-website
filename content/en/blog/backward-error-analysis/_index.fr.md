---
title: "[EN] A gentle introduction to backward error analysis"
date: 2024-02-28
draft: false
reverseChronological: false
cascade:
  # showSummary: true
  showPagination: true
---
{{< katex >}}

I want to discuss an interpretation of *discrete* approximations \\(u_n \approx u(nh)\\) obtained from numerical schemes with time-step \\(h\\) as the *continuous* (exact) solution \\(t \mapsto \widetilde{u}_h(t)\\) of modified differential equations. This interpretation, called *backward error analysis* (BEA) is useful for long-time properties of numerical integrators, or even just their order of accuracy. Additionally, this relationship can be somehow "reversed" to improve numerical accuracy, which I'll illustrate in this post.

My goal here is to present some ideas and to illustrate the results with some simple test cases, to share my initial wonder for BEA. I find that most of the literature quickly gets into the technical details of the how and why this works. There are elegant algebraic structures hidden here, with lots of applications and extensions and great maths---all of which deserve this technicality! But it can also be a stumbling block for the understanding of the idea behind BEA. Readers who want to go further can peruse the following works:

- Lecture notes of Ernst Hairer {{< badge href="https://www.unige.ch/~hairer/poly_geoint/week3.pdf" >}}PDF{{< /badge >}}
- Chartier, Hairer, Vilmart, "Numerical integrators based on modified differential equations" in *Math. of Comp.* (2007) {{< badge href="https://doi.org/10.1090/S0025-5718-07-01967-9" >}}DOI{{< /badge >}}
- Chartier, Hairer, Vilmart, "Algebraic Structures of B-series" in *FoCM* (2010) {{< badge href="https://doi.org/10.1007/s10208-010-9065-1" >}}DOI{{< /badge >}}
- Hairer, Lubich, Wanner, *Geometric Numerical Integration* (2006) {{< badge href="https://doi.org/10.4171/owr/2006/14" >}}DOI{{< /badge >}}
