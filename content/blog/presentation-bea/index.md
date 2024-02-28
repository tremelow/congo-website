+++
title = 'A brief presentation of backward error analysis'
date = 2024-02-28T21:29:05+01:00
draft = false
+++
{{< katex >}}

I want to discuss an interpretation of *discrete* approximations \\(u_n \approx u(nh)\\) obtained from numerical schemes as the *continuous* (exact) solution \\(t \mapsto \widetilde{u}_h(t)\\) of modified differential equations. The discrete approximation would exactly match with the continuous equivalent at discrete times, which is tentatively illustrated in the following diagram

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

where \\(\varphi_h\\) represents the exact integration of the ODE and \\(\Phi_h\\) represents the application of a numerical method. The acronym "b.e.a." stands for *backward error analysis*, the name of the approach which consists in finding this modified vector field \\(\widetilde{u} \mapsto \widetilde{f}_h(\widetilde{u})\\).

As an illustration[^julia-bseries] here is the [Lotka-Volterra](https://en.wikipedia.org/wiki/Lotka-Volterra_equations) problem, simulated using the [explicit Euler method](https://en.wikipedia.org/wiki/Euler_method), overlaid with the exact solution and the exact *modified* solution.

[^julia-bseries]: These illustrations are possible thanks to the Julia package [B-Series](https://github.com/ranocha/BSeries.jl). Thanks to the devs!

{{< figure
    src="modif-eq.svg"
    alt="Exact and numerical trajectories for the Lotka-Volterra problem."
    caption="Exact and numerical trajectories (with the Euler method) for the Lotka-Volterra problem \\(\dot u = u(2-v),\ \dot v = v(u-1)\\) with initial condition \\(u(0) = v(0) = 2\\)."
    >}}

Here the dashed lines are the *exact* solutions of (for now unspecified) modified differential equations. Notice that for each method, the line exactly matches the markers which denote the numerical solution.

Historically, backward error analysis has been used to study the long-time properties of numerical integrators, such as symplecticity. More recently, however, it has also been used to "correct" the vector field in simulations and improve numerical convergence. Once again, let me try to illustrate this with a diagram:

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

Using the notations of the first diagram, we want to find \\(g\\) such that \\(\widetilde{g}_h = f\\), i.e. we want to somehow "invert" the backward error analysis. As it turns out, this corrected field \\(g\\)  will depend on the time-step \\(h\\), which is why I wrote it as \\(g_h\\) in the diagram.

{{< figure
    src="modif-integ.svg"
    alt="Exact and numerical trajectories for the Lotka-Volterra problem."
    caption="Exact and numerical trajectories (with the Euler method) for the Lotka-Volterra problem \\(\dot u = u(2-v),\ \dot v = v(u-1)\\) with initial condition \\(u(0) = v(0) = 2\\)."
    >}}

I will mostly use the Euler method for illustrative purposes, but the principle is true of any Runge-Kutta method. Many other methods can also be studied using variations of this principle.
