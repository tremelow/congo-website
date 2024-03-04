+++
title = 'Daria Ivanova - Affording a planet with geometry'
date = 2024-03-04
draft = false
+++
{{< katex >}}

For my first video recommendation, it seemed obvious to me to spotlight Daria Ivanova's SoME3 submission. The topic is light-hearted, the explanations are clear, and of course the presentation style is *so* amazing and original.

{{< youtube jSYX6pN_sAs >}}

## Bonus: gravity at the other pole

Now, we know that the gravity at one pole is equal to \\(g\\), and that the volume is approximately 92.6% of a sphere with the same gravity. But what's the gravity at the other pole?

{{< figure
    src="dewdrop-planet.svg"
    alt="Shape of the planet and notations from the other pole."
    default=true
    width=100%
    class="center w-2/5"
    >}}

Using the law of cosines, \\(\cos(\varphi') = 1 + r(\varphi)^2 -2r(\varphi) \cos(\varphi)\\), and since by definition, \\(r(\varphi)\cos(\varphi) + \cos(\varphi')^{3/2} = 1\\), we find
\\[ 1 - r(\varphi)\cos(\varphi) = \bigl( 1 + r(\varphi)^2 - 2r(\varphi)\cos(\varphi) \bigr)^{3/2} \\]
Therefore, at fixed angle \\(\varphi\\), we're looking for the smallest positive root of the parametric function, for \\(\varphi \in (0, \pi/2)\\),
\\[ \rho \mapsto f(\rho, \varphi) := \bigl(1 - \rho\cos(\varphi) \bigr)^2 - \bigl( 1 + \rho^2 - 2\rho\cos(\varphi) \bigr)^3 \\]

{{< figure
    src="dewdrop-planet-radius.svg"
    alt="Plot of the parametric function for equally spaced angles from 0 to π/2."
    caption="Parametric function for equally spaced angles \\(\\varphi \\in [0, \\pi/2]\\). Smaller angles are darker and larger angles are lighter. {{< badge href=\"dewdrop-planet-radius.jl\" >}}code{{< /badge >}}"
    >}}

At first, I was surprised to see that for small angles, the root was greater than 1, but that actually holds up with the drawing. Also, it seems that \\(\rho = 1\\) would be a good initial condition for root finding.

To compute the force, we use the formula from the video,
$$ F = \int_{\theta = 0}^{2\pi} \int_{\varphi=0}^{\pi/2} \int_{\rho=0}^{r(\varphi)} \underbrace{\frac{Gm\delta}{\rho^2}}\_{\text{force}} \underbrace{ \cos(\varphi)}\_{\substack{\text{project on}\\\\ \text{vertical}\\\\ \text{component}} } \underbrace{ \rho^2 \sin(\varphi) {\rm d}\rho {\rm d}\varphi {\rm d}\theta }\_{ \text{infinitesimal volume} } $$
This simplifies into
\\[ F = \underbrace{2\pi G m \delta}_{\frac{5}{2}mg} \int _0^{\pi/2} r(\varphi)\cos(\varphi)\sin(\varphi) \, {\rm d}\varphi . \\]
A numerical computation {{< badge href="dewdrop-planet-gravity.jl" >}}code{{< /badge >}} yields
\\[ \frac{F}{mg} \approx \frac{5}{2} \cdot 0.3949 \approx 98.7\%. \\]
Therefore, if this is indeed the minimal spot, the gravity is off by at most 1.3% on this planet. That seems very manageable.

{{< alert "pencil" >}}
This could make a cool undergrad project in scientific computing. Just computing this final quantity without leveraging pre-defined modules is a bit of work. One could even consider non-standard quadrature rules involving the derivative of the integrand. Owing to the [implicit function theorem](https://en.wikipedia.org/wiki/Implicit_function_theorem#Statement_of_the_theorem):
\\[ r'(\varphi) = -\frac{\partial_\varphi f\bigl(r(\varphi), \varphi\bigr)}{\partial_\rho f\bigl(r(\varphi),\varphi\bigr)} \\]
Such methods could be based on [Hermite interpolation](https://en.wikipedia.org/wiki/Hermite_interpolation), or be modified quadratures using the [Euler--Maclaurin formula](https://en.wikipedia.org/wiki/Euler%E2%80%93Maclaurin_formula#Approximation_of_integrals). See also [NC-m-2 methods (in French)](https://fr.wikipedia.org/wiki/Calcul_num%C3%A9rique_d%27une_int%C3%A9grale#Formules_faisant_intervenir_la_d%C3%A9riv%C3%A9e).
{{< /alert >}}
