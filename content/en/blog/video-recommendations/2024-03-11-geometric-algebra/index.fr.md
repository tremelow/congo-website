+++
title = 'sudgylacmoe -  A Swift Introduction to Geometric Algebra '
date = 2024-03-11
draft = false
+++
{{< katex >}}

Cette semaine, je recommande cette vidéo de [sudgylacmoa](https://www.youtube.com/@sudgylacmoe).

{{< youtube 60z_hpEAtD8 >}}

Cette vidéo m'a été **tellement** utile, surtout pour façonner mon intuition sur le produit vectoriel. L'identification entre les pseudo-vecteurs et les vecteurs est très logique, et pour moi, ça illustre vraiment pourquoi, dans les éléments finis, le champ magnétique a besoin d'éléments [face (ou Raviart-Thomas)](https://docu.ngsolve.org/latest/i-tutorials/unit-2.3-hcurlhdiv/hcurlhdiv.html) qui sont essentiellement des bivecteurs, comme le champ magnétique !

On peut également (grossièrement) interpréter le déterminant comme le volume d'une image, avec \\( f(e_1 \wedge ... \wedge e_n) = f(e_1) \wedge ... \wedge f(e_n) \\) et \\( {\rm det}(f) = \frac{f(e_1 \wedge ... \wedge e_n)}{e_1 \wedge ... \wedge e_n} \\), ce qui est tout juste beau.
