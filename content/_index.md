---
title: "Website of Léopold Trémant"
description: "Gathering my thoughts and publications."
---

{{< icon "calendar-regular" >}} 2023--now postdoc in the Inria team Macaron (previously TONUS)

I am a post-doc in the Inria team Macaron (previously TONUS) in Strasbourg, under the supervision of Emmanuel Franck. Before that, I was a graduate assistant at Ensimag as a member of the Laboratoire Jean Kuntzmann in Grenoble. I completed my PhD in December 2021 in Rennes under the supervision of P. Chartier and M. Lemou.

My research focuses on multi-scale and geometric methods in a numerical context. More specifically, I study the properties of asymptotic expansions and use them to obtain better numerical convergence in stiff problems. During my PhD, I worked on relaxation problems such as the linear Boltzmann equation, and more recently I worked on the Bloch equation. For my post-doc, I study the properties of geometric machine learning when reconstructing vector fields based on trajectories.

{{< icon "email" >}} `tremant-research <at> pm.me`

{{< tikz >}}
\begin{document}
  \begin{tikzpicture}
    \draw (0,0) circle (1in);
  \end{tikzpicture}
\end{document}
{{< /tikz >}}

<script type="text/tikz">
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
</script>


<script type="text/tikz">
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
    T
    \arrow[drr, bend left, "x"]
    \arrow[ddr, bend right, "y"]
    \arrow[dr, dotted, "{(x,y)}" description] & & \\
    K & X \times_Z Y \arrow[r, "p"] \arrow[d, "q"]
    & X \arrow[d, "f"] \\
    & Y \arrow[r, "g"]
    & Z
\end{tikzcd}
\end{document}
</script>

{{< tikz >}}
\usepackage{tikz-cd}
\usepackage{amsmath}
\usepackage{amssymb}
\begin{document}
	\begin{tikzcd}[font = \footnotesize, column sep = 5em, row sep = small]
        \dot u = f(u)
		\arrow[dr, "\Phi_h" description]
		\arrow[dd, dashed, "\text{\tiny b.e.a.}"] & \\
        & \vphantom{\int} u_n = \widetilde{u}(nh) \\
        \dot{\widetilde{u}}_h = \widetilde{f}_h \left( \widetilde{u}_h \right)
		\arrow[ur, "\varphi_h" description] &
    \end{tikzcd}
\end{document}
{{< /tikz >}}

<!-- <div class="flex px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900"> -->
<!--   <span class="flex items-center pe-3 text-primary-400"> -->
<!--     {{< icon "triangle-exclamation" >}} -->
<!--   </span> -->
<!--   <span class="flex items-center justify-between grow dark:text-neutral-300"> -->
<!--     <span class="prose dark:prose-invert">This is a demo of the <code id="layout">page</code> layout.</span> -->
<!--     <button -->
<!--       id="switch-layout-button" -->
<!--       class="px-4 !text-neutral !no-underline rounded-md bg-primary-600 hover:!bg-primary-500 dark:bg-primary-800 dark:hover:!bg-primary-700" -->
<!--     > -->
<!--       Switch layout &orarr; -->
<!--     </button> -->
<!--   </span> -->
<!-- </div> -->

