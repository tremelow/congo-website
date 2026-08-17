+++
title = 'Linear backward error analysis'
date = 2024-03-01
draft = false
+++
{{< katex >}}

This post assumes you know the base idea behind backward error analysis. If you are not, you should first read my previous blog post.

As is often the case, a good preliminary simplification is the linear case. Let's consider here a one-dimensional linear ODE, which is, for \\(\lambda \in \mathbb{R}\\) or in \\(\mathbb{C}\\),
$$
  \dot{u} =\lambda u.
$$
In this case, the flow is the linear map \\((t, u_0) \mapsto \varphi_t(u_0) = e^{t\lambda}u_0\\), which also extends to higher dimensions when \\(\lambda\\) is a matrix.[^dimension]

[^dimension]: I won't discuss infinite dimension, i.e. PDEs, because everything is always more complicated for PDEs.

## Explicit Euler

The explicit Euler scheme can be summarily written
$$ \Phi_h = \operatorname{id} + h\lambda . $$
For this simple case, the modified vector field \\(\widetilde{\lambda}_h\\) and the corrected vector field \\(\mu_h\\) are found easily.

### Modified equations

For modified equations, we look for \\(\widetilde{\lambda}_h\\) such that 
$$ \widetilde{\varphi}_h = \Phi_h, \qquad\text{i.e.}\qquad\exp\bigl( h\widetilde{\lambda}_h \bigr) = \operatorname{id} + h\lambda . $$ 
Extending the logarithm to complex numbers,[^logarithm] we find
$$ \widetilde{\lambda}_h = \frac{1}{h} \log(1 + h\lambda) . $$
Therefore, the modified equation is
$$
\frac{\mathrm{d}}{\mathrm{d}t} \widetilde{u}_h = \frac{1}{h}\log(1 + h\lambda)\, \widetilde{u}_h .
$$
Note that \\(\widetilde{\lambda}_h = \lambda + \mathcal{O}(h)\\), which corresponds to the first order of convergence of the scheme: in finite time \\(\widetilde{u}_h(t) = u(t) + \mathcal{O}(h)\\).

[^logarithm]: In the multi-dimensional case \\(\dot u = \Lambda u\\), we may use the notation \\(\ln(\mathrm{id} + h\Lambda) = \sum\limits_{n \geq 1} \frac{(-1)^{n+1}}{n}(h \Lambda)^n\\), valid for \\(h \|\Lambda\| < 1\\). For other cases, see for instance [the Wikipedia page](https://en.wikipedia.org/wiki/Logarithm_of_a_matrix).

{{< alert "pencil" >}}
**Link with stability**  
In the real case, if \\(h\lambda < -1\\) then \\(\widetilde{\lambda}_h\\) is complex, we write \\(h\widetilde{\lambda}_h = \log|1 + h\lambda| + i\pi\\). If additionally \\(h\lambda < -2\\), then \\(\Re(\widetilde{\lambda}_h) > 0\\), so the method is unstable. Of course in the case \\(h\lambda > 0\\), the method is also "unstable" in the standard sense, but not more than the original problem. In fact it is more stable in some sense, \\(\widetilde{\lambda}_h < \lambda\\).
{{< /alert >}}

### Corrected equations / Modifying integrators

This time, we want the numerical solution of a corrected problem
$$ \dot v_h = \mu_h \dot{v}_h $$
to coincide with the exact solution of \\(\dot u = \lambda u\\). In other words, we want
$$ 1 + h\mu_h = e^{h\lambda}, \quad\text{i.e.}\quad \mu_h = \frac{1}{h} (e^{h\lambda} - 1). $$
Then applying the Euler method with time-step \\(h\\) to the problem in \\(v_h\\) produces the exact solution, \\(v_n = u(nh)\\).

Note that once the time-step is chosen for the corrected equation, it should not be changed! Look at the error of the method when correcting for \\(h = 0.1\\) and then simulating with a time-step \\(\tau = 0.01\\). Common belief would be that reducing the time-step increases accuracy. It does, but it increases accuracy *for a different problem*.

{{< figure
    src="linear-bea-convergence.svg"
    caption="Error as a function of time-step \\\\(\\\\tau\\\\) at time \\\\(T = 1\\\\) with \\\\(\\\\lambda = 1\\\\) {{< badge href=\"linear-bea-convergence.jl\" >}}code{{< /badge >}}"
    >}}

### Application to the harmonic oscillator

Here is a comparison of these two concepts applied to a harmonic oscillator,
$$ \dot{u} = \Lambda u, \qquad \Lambda = J := \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} . $$

##### Figure for the harmonic oscillator with both the modified and corrected equations, \\(h = 0.1\\) (CODE)

{{< figure
    src="linear-bea-convergence.svg"
    caption="Error as a function of time-step \\\\(\\\\tau\\\\) at time \\\\(T = 1\\\\) with \\\\(\\\\lambda = 1\\\\) {{< badge href=\"linear-bea-convergence.jl\" >}}code{{< /badge >}}"
    >}}

## Application to other schemes

This result may be extended to any standard Runge-Kutta method in a fairly straightforward manner using the stability function. For a method of [Butcher tableau](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods#Implicit_Runge%E2%80%93Kutta_methods) \\(\\begin{array}{c|c} c & A \\\\ \\hline & b^{\\sf T} \\end{array}\\) the stability function is given by the formula[^HW1996]
$$
  r(z) = 1 + z b^{\sf T} (\mathrm{id} - zA)^{-1} \mathbb{1}
$$
where \\(\mathbb{1} = (1, \dots,1)^{\sf T}\\).

[^HW1996]: See e.g. E. Hairer, G. Wanner, *Solving ordinary differential equations II. Stiff and Differential-Algebraic Problems* (1996) -- Sec. IV.3

### Modified and corrected equations

For a Runge-Kutta method of stability function \\(z \mapsto r(z)\\), the numerical scheme is exactly
$$ \Phi_h = r(h\lambda) , $$
and \\(\widetilde{\lambda}_h\\) is such that for all \\(n \in \mathbb{N}\\), \\(e^{nh\\,\\widetilde{\\lambda}\_h} = (\Phi_h)^n = r(h\\lambda)\^n\\). Evidently,
$$
  \widetilde{\lambda}_h = \frac{1}{h} \log\bigl( r(h\lambda) \bigr), \quad\text{i.e.}\quad
  \frac{\mathrm{d}}{\mathrm{d}t} \widetilde{u}\_{n}(t) = \frac{1}{h} \log\bigl( r(h\lambda) \bigr) \widetilde{u}\_{n}(t) .
$$
As for corrected equations, \\(\mu_h\\) may be obtained through the implicit relation
$$
\frac{1}{h} \ln(r(h\mu_h)) = \lambda
\quad\text{i.e.}\quad
r(h\mu_h) = e^{h\lambda}
$$
Here are two specific methods,

- *Implicit Euler:* \\(\widetilde{\lambda}_h = -\frac{1}{h}\ln(1 - h\lambda)\\), \\(\mu_h = \frac{1}{h}(1 - e^{-h\lambda})\\).
- *Midpoint or Crank-Nicolson:* \\(\widetilde{\lambda}_h = \frac{1}{h}\ln\left(\frac{1 + \frac{h}{2} \lambda}{1-\frac{h}{2}\lambda} \right)\\), \\(\mu_h = \frac{2}{h} \frac{e^{h\lambda} - 1}{e^{h\lambda} + 1}\\)

{{< alert "puzzle-piece-solid" >}}
If the ODE on \\(\widetilde{u}_n\\) is well-posed, the following statements are equivalent:

- The method is of order \\(q\\) for linear problems;
- The modified vector field matches the initial one up to order \\(q\\), i.e. \\(\frac{1}{h} \ln\bigl(r(h\lambda)\bigr) = \lambda + \mathcal{O}(h^q)\\);
- The \\(q\\)-th first derivatives of \\(\widetilde{u}_h\\) at \\(t = 0\\) match those of the original equation.
{{< /alert >}}

<!--  -->

{{< alert "search" >}}
**Investigate**

1. Check that these three properties are indeed satisfied for the above examples.
2. For a two-stage explicit method of order 2, find the order condition \\(b_1 + b_2 = 1\\) and \\(b_2 a_{12} = 1/2\\).
3. Try to prove this proposition!
{{< /alert >}}

<details>
<summary>Proof of the second property</summary>
For the second property, a direct calculation yields
$$ r(z) = 1 + z\begin{pmatrix} b_{1} & b_{2} \end{pmatrix} \begin{pmatrix} 1 & 0 \\ z a_{12} & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = 1 + z(b_1 + b_2) + z^2 b_2 a_{12}, $$
from which we obtain the truncated series expansion
$$ \frac{1}{h}\ln\bigl(r(h\lambda)\bigr) = \lambda(b_{1}+b_{2}) + h\lambda b_{2}a_{12} - \frac{h\lambda}{2}(b_{1}+b_{2}) + \mathcal{O}(h^2). $$
For the method to be of order 2, we need for all \(\lambda\)
$$ \begin{cases}  \lambda(b_1 + b_2) = \lambda, \\ \lambda b_2 a_{12} - \frac{\lambda}{2}(b_1 + b_2) = 0, \end{cases} $$
i.e. \(b_1 + b_2 = 1\) and \(b_2 a_{12} = 1/2\).
</details>

### The harmonic oscillator

In case of real data, i.e. \\(u \in \mathbb{R}^2\\), the previous multi-dimensional example involving \\(J = \begin{pmatrix} 0 & -1 \\ 0 & 1 \end{pmatrix}\\) may be identified with the complex problem \\(\dot z = iz\\) with \\(z = u_1 + {\rm i} u_2\\). Applying the previous identities with \\(\lambda = {\rm i}\\), we find

- *Explicit Euler:* \\(\widetilde{\lambda}_h = \frac{1}{2h} \log(1 + h^2) + \frac{\rm i}{h}\arctan(h)\\)
- *Implicit Euler:* \\(\widetilde{\lambda}_h = \frac{-1}{2h} \log(1 + h^2) + \frac{\rm i}{h}\arctan(h)\\),
- *Midpoint:* \\(\widetilde{\lambda}_h = \frac{2{\rm i}}{h} \arctan(h/2)\\).

For explicit Euler, \\(\Re(\widetilde{\lambda}_h) > 0\\), therefore the method *gains energy*, meaning in this case that the module increases over time. For implicit Euler, \\(\Re(\widetilde{\lambda}_h) < 0\\) so the method *dissipates* energy. For the midpoint method \\(\Re(\widetilde{\lambda}_h) = 0\\), which indicates that energy is preserved.[^non-linear] The method is said to be *symplectic*.

[^non-linear]: In the generic non-linear case, the energy would be preserved up to a \\(\mathcal{O}(h^2)\\) term.

We can also find the corrected coefficients, respectively \\(\mu_h = \frac{1}{h}(e^{{\rm i}h}-1)\\), \\(\mu_h = \frac{1}{h}(1 - e^{-{\rm i}h})\\) and \\(\mu_h = \frac{2{\rm i}}{h} \tan(h/2)\\). Again, only the midpoint method generates an imaginary coefficient.

### The multi-dimensional case

If \\(Z := h\Lambda\\) is an operator of a \\(d\\)-dimensional space, a correct way to write the stability function would be
$$
  r(Z) = I_d + (I_d \otimes b^{\sf T}) \left( I_d \otimes I_s - Z \otimes A \right)^{-1} (Z \otimes \mathbb{1}_s)
$$
where \\(\otimes\\) is the Kronecker product, a useful tensor product for matrices.

{{< alert "pencil" >}}
**Why the tensor product?**  
Given a Butcher tableau, the associated Runge-Kutta method is
$$
\begin{cases}
  k_1 = h \Lambda \left( u_n + a_{11} k_1 + \dots + a_{1s} k_s \right) \\\\
  \quad\vdots \\\\
  k_s = h \Lambda \left( u_n + a_{s1} k_1 + \dots + a_{ss} k_s \right)
\end{cases}
$$
along with \\(u_{n+1} = u_n + b_1 k_1 + ... + b_s k_s\\).
The vectors \\(k_i \in \mathbb{R}^d\\) may be collected in a tensor \\(\mathbf{k} \in \mathbb{R}^d \otimes \mathbb{R}^s\\), and the fixed-point may then be written \\((I_d \otimes I_s - h\Lambda \otimes A){\bf k} = (h\Lambda u_n) \otimes \mathbb{1}\_s\\). The second part contracts the \\(\mathbb{R}^s\\) part with \\(u_{n+1} = u_n + (I_d \otimes b^{\sf T}) {\bf k}\\), where \\((I_d \otimes b^{\sf T}){\bf k}\\) is identified from \\(\mathbb{R}^d \otimes \mathbb{R}\\) to \\(\mathbb{R}^d\\).
{{< /alert >}}

This is cumbersome, so you'll hopefully understand why I suck with the simple 1d notations. Just in case, here are the expressions for some common methods.
$$
\begin{aligned}
&\text{Exp. midpoint} && r(Z) = \operatorname{id} + Z \left( \operatorname{id} + {\textstyle\frac{1}{2}}Z \right) . \\\\ \\\\
&\text{Imp. midpoint} && r(Z) = \left( \operatorname{id} - {\textstyle\frac{1}{2}} Z \right)^{-1} (\operatorname{id} + {\textstyle\frac{1}{2}} Z) \\\\ \\\\
& \text{RK4} && r(Z) = \operatorname{id} + {\textstyle\frac{1}{6}}(K_1 + 2K_2 + 2K_3 + K_4 ) \\\\
&&& K_1 = Z,\ K_2 = Z \left( \operatorname{id} + {\textstyle\frac{1}{2}} K_1 \right),\ \\\\ &&& K_3 = Z \left( \operatorname{id} + {\textstyle\frac{1}{2}} K_2 \right), K_4 = Z \left( \operatorname{id} + K_3 \right)
\end{aligned}
$$

## Reality check

### The non-linear case

For a non-linear vector field, we must replace the exponential by the flow (morally, \\(\varphi_h = e^{hf}\\)), and there are now additional terms in the power series,
$$
\begin{aligned}
  \varphi_h &= \operatorname{id} + hf + \frac{h^2}{2}f'f + \frac{h^3}{6}\bigl[ f''(f,f) + f'f'f \bigr] \\\\
  &+ \frac{h^4}{4!} \left[ f^{(3)}(f, f, f) + 3f''(f, f'f) + f'f''(f,f) + f'f'f'f \right] + \mathcal{O}(h^5) .
\end{aligned}
$$
The computations become much more complex, and in general these series are purely formal, meaning that they diverge even for very small \\(h\\). Therefore the modified vector field \\(\widetilde{f}_h\\) and the corrected vector field \\(g_h\\) can only be computed up to some power of \\(h\\), and the methods may be inaccurate for large time-steps.

### We're not supposed to know the flow

Of course these are only examples to explain the reasoning of the method and why it has a chance to work. In practice, we do not know \\(e^{h\lambda}\\) (or its equivalent, the flow \\(\varphi_h\\) or \\(e^{h\Lambda}\\)), because if we did there would be no need for numerical methods. In the linear case, there is actually a lot of literature (which I'm not familiar with) on computing accurate high-order approximation of matrix exponentials. I don't know if symplecticity is important for these applications.
