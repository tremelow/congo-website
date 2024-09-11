+++
title = 'sudgylacmoe -  A Swift Introduction to Geometric Algebra '
date = 2024-03-11
draft = false
+++
{{< katex >}}

This week, I'm suggesting this video by [sudgylacmoa](https://www.youtube.com/@sudgylacmoe).

{{< youtube 60z_hpEAtD8 >}}

This has been **so** useful to me, it really helped shape my intuition about the cross product. The identification between pseudo-vectors and vectors makes so much sense, and for me it really illustrates why, in finite elements, the magnetic field needs [face (or Raviart--Thomas) elements](https://docu.ngsolve.org/latest/i-tutorials/unit-2.3-hcurlhdiv/hcurlhdiv.html) which are basically bivectors---just like the magnetic field!

Also, this can be used to interpret the determinant as (crudely) the volume of the image, with \\( f(e_1 \wedge ... \wedge e_n) = f(e_1) \wedge ... \wedge f(e_n) \\) and \\( {\rm det}(f) = \frac{f(e_1 \wedge ... \wedge e_n)}{e_1 \wedge ... \wedge e_n} \\), which is just lovely.
