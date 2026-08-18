+++
title = 'The standard Gaussian is Fourier natural'
date = 2026-03-23
draft = true
+++
{{< katex >}}

Today, an after-lunch conversation surrounding [exponential families of distributions](https://en.wikipedia.org/wiki/Exponential_family) between colleagues ended with a philosophical question about the normal distribution: 

> What makes the standard Gaussian natural?

This central limit theorem (CLT) involves the [moments](https://en.wikipedia.org/wiki/Moment_(mathematics)) of the distribution, but [3b1b's beautiful illustrations](https://www.youtube.com/playlist?list=PLU87NQUY1t0obIt_cy2bamDZ62pLkioEY) focus on convolutions and the Fourier space.
My goal here is to wonder how natural the Gaussian is when linked to Fourier.

## The central limit theorem

<!-- As beautifully shown by [3b1b's video series on convolutions](https://www.youtube.com/playlist?list=PLU87NQUY1t0obIt_cy2bamDZ62pLkioEY), the standard distribution arises naturally in the central limit theorem (CLT). -->

The CLT states that for independent and identically distributed variables \\((X_n)\_{n \geq 1}\\) with a well-defined mean \\(\mu\in\mathbb{R}\\) and a finite standard deviation \\(\sigma > 0\\), then the mean outcome \\(M_n = \frac{1}{n}(X_1 + ... + X_n)\\) can be shifted and rescaled to converge in distribution to a normal,

\\[\sqrt{n}\\ \frac{M_n - \mu}{\sigma} \quad\underset{n \to \infty}{\overset{\mathcal{D}}{\longrightarrow}}\quad \mathcal{N}(0, 1) .\\]

This is easily extended [in multiple dimensions](https://en.wikipedia.org/wiki/Central_limit_theorem#Multidimensional_CLT).

The link with Fourier space comes from the fact that the distribution of the sum of variables  \\(q_n\\) of \\(M_n\\) is given by the normalized convolution of the distribution \\(p\\) of \\(X_k\\) with itself \\(n\\) times, \\(q_n = \frac1n p^{*n}\\).
This is easily checked with two variables, by independence and total probabilities: setting \\(Z = \tfrac{1}{\sqrt{2}} (X+Y)\\),
\\(p_Z(z) \mathrm{d}z = p_{X+Y}(2z) \mathrm{d}(2z) = \int_{-\infty}^\infty p_X(x) p_Y(z - x) \mathrm{d}x = (p_X * p_Y)(z)\\).
Additionally, \\(p_{\frac12(X+Y)}(z) = \int_{-\infty}^\infty p_X(2x) p_Y(z - 2x) \mathrm{d}x \\)

## Fourier natural

A particular focus of the, it can be seen as a fixed point when iterating convolutions of the 

\\[ \varphi(x) = \frac{1}{\sqrt{2\pi}} \exp(-\tfrac12 x^2) \\]

Since the goal is to find a correspondence between the physical space and the frequency space, an obvious Fourier normalization is

\\[ \mathcal{F}\[f\](\xi) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty e^{-i\xi x} f(x) \mathrm{d}x.\\]



### As the solution of a differential equation

\\[\varphi^{\prime\prime}(x) = (x^2 - 1) \varphi(x)\\]

Using \\(\mathcal{F}\[f^\prime\](\xi) = -i\xi \hat{f}(\xi)\\) and \\(\mathcal{F}^{-1}\[\hat{f}^\prime\](x) = -i x f(x)\\), the Fourier transform \\(\hat{\varphi}\\) is solution to the same equation.


### Using ordinary frequencies

If using the "ordinary frequency" Fourier formula

\\[\mathcal{F}\[f\](\xi) = \int_{-\infty}^{\infty} e^{-2i\pi\xi x} f(x) \mathrm{d}x ,\\]

the Parseval identity is \\(\\|\mathcal{F}\[f\]\\|\_{L^2\_\xi} = \\|f\\|\_{L^2\_x}\\) and the convolution formula writes \\(\mathcal{F}[f*g] = \mathcal{F}[f] \mathcal{F}[g]\\) (owing to [CLE's quick reference](https://www2.math.upenn.edu/~cle/m584/FTnormalizations.pdf)).

The fixed point distribution such that \\(\mathcal{F}\[\varphi\](x) = \varphi(x)\\) is now

\\[ \varphi(x) = e^{-\pi x^2} . \\]

## Natural-ness on manifolds

Our naive goal was to better understand statistics on manifolds. 
Especially, we hoped to find a straightforward equivalent of the normal distribution on manifolds.
However, a manifold is not a vector space, so the CLT formula cannot hold.
Defining the mean [is already complicated](https://en.wikipedia.org/wiki/Fr%C3%A9chet_mean), without mentioning the standard deviation.

Interestingly, extending the CLT to manifolds seems to be an active topic. A basic web search conjurs papers from 2019 [on high-dimensional spheres](https://projecteuclid.org/journals/annals-of-statistics/volume-47/issue-6/A-smeary-central-limit-theorem-for-manifolds-with-application-to/10.1214/18-AOS1781.full) and from 2024 [on compact Riemannian manifolds](https://link.springer.com/article/10.1007/s00440-024-01291-3).
It is possible that more basic methods exist [using a median](https://stats.stackexchange.com/questions/45124/central-limit-theorem-for-sample-medians) and strong assumptions.

A more natural approach might involve the heat kernel.
This appears from Brownian motion

The normal distribution is also the "natural" additional noise when considering regressions with the \\(L^2\\) norm. Due to the duality with Fourier in \\(L^2\\), this is perhaps unsurprising.

As such, the best way to interpret the standard Gaussian might be _via_ a heat kernel. 

https://web.math.ku.dk/~grubb/notes/heat.pdf
