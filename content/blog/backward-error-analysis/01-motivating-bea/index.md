+++
title = 'Motivating backward error analysis'
date = 2024-02-28T21:29:05+01:00
draft = false
+++
{{< katex >}}

There are two main areas in backward error analysis (b.e.a.), which are modified equations and modifying integrators. The first serve to study the properties of integrators, while the second improves the convergence of such integrators. Let's have a look!

## Modified equations

As mentioned previously, backward error analysis serves to find a so-called "modified" vector field for which the exact solution matches the numerical solution at discrete times. This is tentatively illustrated in the following diagram

{{< tikz >}}
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\tikzcdset{scale cd/.style={every label/.append style={scale=#1},
    cells={nodes={scale=#1}}}}
\begin{document}
    \begin{tikzcd}[scale cd=1.7, font = \footnotesize, column sep = 5em, row sep = small]
        \dot u = f(u) \arrow[dr, "\Phi_h" description] \arrow[dd, dashed, "\text{\tiny b.e.a.}"] & \\
        & \vphantom{\int} u_n = \widetilde{u}(nh) \\
        \dot{\widetilde{u}}_h = \widetilde{f}_h \left( \widetilde{u}_h \right) \arrow[ur, "\varphi_h" description] &
    \end{tikzcd}
\end{document}
{{< /tikz >}}

where \\(\varphi_h\\) represents the exact integration of the ODE and \\(\Phi_h\\) represents the application of a numerical method. The vector field \\(u \mapsto f(u)\\) is the original vector field on which the numerical method is applied and \\(u \mapsto \widetilde{f}_h(u)\\) is the aforementioned *modified* vector field.

As an illustration[^julia-bseries] here is a [Lotka-Volterra](https://en.wikipedia.org/wiki/Lotka-Volterra_equations) problem
\\[\begin{cases}\dot u_1 = u_1(2 - u_2), \quad \& u_1(0) = 2, \\\\ \dot u_2 = u_2(u_1 - 1), \& u_2(0) = 2 . \end{cases} \\]
simulated using the [explicit Euler method](https://en.wikipedia.org/wiki/Euler_method), overlaid with the exact solutions of both the original problem and the modified problem, in phase-space.

[^julia-bseries]: These illustrations are possible thanks to the Julia package [B-Series](https://github.com/ranocha/BSeries.jl). Thanks to the devs!

{{< figure
    src="modif-eq.svg"
    alt="Exact and numerical trajectories for the Lotka-Volterra problem."
    caption="Exact and numerical trajectories (with the Euler method) for the Lotka-Volterra problem \\(\dot u = u(2-v),\ \dot v = v(u-1)\\) with initial condition \\(u(0) = v(0) = 2\\)."
    >}}

Here the dashed lines are the *exact* solutions of (for now unspecified) modified differential equations. Notice that for each method, the line exactly[^series-truncature] matches the markers which denote the numerical solution.

[^series-truncature]: In reality, the curves do not *exactly* match: the modified vector field \\(\widetilde{f}_h\\) is computed as a truncated power series in \\(h\\), which induces a small error.

## Modifying integrators / Corrected equations

More recently, it has also been used to "correct" the vector field in simulations and improve numerical convergence. Once again, let me try to illustrate this with a diagram:

{{< tikz >}}
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\tikzcdset{scale cd/.style={every label/.append style={scale=#1},
    cells={nodes={scale=#1}}}}
\begin{document}
    \begin{tikzcd}[scale cd=1.7, font = \footnotesize, column sep = 5em, row sep = small]
        \dot{v} = g_h \left( v_h \right) \arrow[dr, "\Phi_h" description] \arrow[dd, dashed, "\text{\tiny b.e.a.}"] & \\
        & v_n = u(nh) \\
        \dot u = f(u) \arrow[ur, "\varphi_h" description] &
    \end{tikzcd}
\end{document}
{{< /tikz >}}

Using the notations of the first diagram, we want to find \\(g_h\\) such that \\(\widetilde{g}_h = f\\), i.e. we want to somehow "invert" the backward error analysis. Unsurprisingly, this corrected field \\(g_h\\)  depends on the time-step \\(h\\).

Considering again the Lotka-Volterra problem \\(\dot u_1 = u_1(2-u_2)\\), \\(\dot u_2 = u_2(u_1-1)\\), \\(u_1(0)= u_2(0) = 2\\) and the explicit Euler method, let's look at the numerical solution of the *corrected* vector field and compare it with the exact solutions of both the original problem and the corrected problem.

{{< figure
    src="modif-integ.svg"
    alt="Exact and numerical trajectories for the Lotka-Volterra problem."
    caption="Exact and numerical trajectories (with the Euler method) for the Lotka-Volterra problem \\(\dot u = u(2-v),\ \dot v = v(u-1)\\) with initial condition \\(u(0) = v(0) = 2\\)."
    >}}

This time, the numerical solution perfectly matches the exact solution at the discrete times! The error of the scheme is compensated by choosing the right corrected vector field.

## Why should you care?

While there are many uses for both methods, here are two common use cases for each approach.

**Modified equations**

- find the order of convergence of a numerical scheme
- study the long-time properties of integrators (such as energy preservation)

**Corrected equations:**

- improve the order of convergence of integrators (obviously)
- appears in machine learning of differential equations

If this is all too abstract, you may read the next post with examples in the case of linear differential equations.
