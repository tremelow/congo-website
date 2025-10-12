+++
title = 'Daria Ivanova - Affording a planet with geometry'
date = 2024-03-04
draft = false
+++
{{< katex >}}

Pour ma première recommandation de vidéo, le choix m’a semblé évident : je voulais mettre en lumière la participation de Daria Ivanova au concours SoME3. Le sujet est à la fois léger et amusant, les explications sont limpides, et surtout, la présentation est vraiment originale et captivante.

{{< youtube jSYX6pN_sAs >}}

## Bonus : la gravité à l’autre pôle

On sait que la gravité à un pôle vaut \(g\), et que le volume de la planète en question correspond à environ 92,6 % de celui d’une sphère ayant la même gravité. Mais du coup, que se passe-t-il à l’autre pôle ? Quelle y est la valeur de la gravité ?

{{< figure
    src="dewdrop-planet.svg"
    alt="Forme de la planète et notations vues depuis l’autre pôle."
    default=true
    width=100%
    class="center w-2/5"
    >}}

En appliquant la loi des cosinus \(\cos(\varphi') = 1 + r(\varphi)^2 - 2r(\varphi)\cos(\varphi)\), et en utilisant la relation définissant la forme de la planète,
on obtient : 
\\[ 1 - r(\varphi)\cos(\varphi) = \bigl( 1 + r(\varphi)^2 - 2r(\varphi)\cos(\varphi) \bigr)^{3/2} \\] 
Autrement dit, pour chaque angle \\(\varphi\\), il faut trouver la plus petite racine positive de la fonction paramétrique (pour \\(\varphi \in (0, \pi/2)\\)) : 
\\[ \rho \mapsto f(\rho, \varphi) := \bigl(1 - \rho\cos(\varphi) \bigr)^2 - \bigl( 1 + \rho^2 - 2\rho\cos(\varphi) \bigr)^3 \\]

{{< figure src="dewdrop-planet-radius.svg" 
    alt="Tracé de la fonction paramétrique pour des angles également espacés de 0 à π/2." 
    caption="Fonction paramétrique pour des angles espacés uniformément dans \\(\\varphi \\in [0, \\pi/2]\\). Les angles plus petits sont plus foncés et les plus grands plus clairs. {{< badge href=\"dewdrop-planet-radius.jl\" >}}code{{< /badge >}}"
    >}}

Au début, j’ai été surpris de constater que, pour les petits angles, la racine était supérieure à 1. Mais en y regardant de plus près, ça correspond bien au dessin.D’ailleurs, \\(\rho = 1\\) semble être une bonne valeur initiale pour commencer la recherche numérique de racines. 

Pour calculer la force gravitationnelle, on reprend la formule donnée dans la vidéo : 
$$ F = \int_{\theta = 0}^{2\pi} \int_{\varphi=0}^{\pi/2} \int_{\rho=0}^{r(\varphi)} \underbrace{\frac{Gm\delta}{\rho^2}}\_{\text{force}} \underbrace{ \cos(\varphi)}\_{\substack{\text{projection sur}\\\\ \text{l’axe vertical}} } \underbrace{ \rho^2 \sin(\varphi) {\rm d}\rho {\rm d}\varphi {\rm d}\theta }\_{\text{volume infinitésimal}} $$ 
Ce qui se simplifie en : 
\\[ F = \underbrace{2\pi G m \delta}_{\frac{5}{2}mg} \int _0^{\pi/2} r(\varphi)\cos(\varphi)\sin(\varphi) \, {\rm d}\varphi . \\] 
Un calcul numérique ({{< badge href="dewdrop-planet-gravity.jl" >}}code{{< /badge >}}) donne : 
\\[ \frac{F}{mg} \approx \frac{5}{2} \cdot 0.3949 \approx 98.7\%. \\]
Autrement dit, la gravité diffère d’à peine **1,3 %** entre les deux pôles de cette planète. C’est une variation tout à fait négligeable ! 

{{< alert "pencil" >}}
Ça pourrait faire un bon **projet de licence** en calcul scientifique. Rien que le calcul de cette valeur finale, sans utiliser de modules tout prêts, demande déjà pas mal de travail. On pourrait même imaginer des méthodes de quadrature non standards, prenant en compte la dérivée de l’intégrande. D’après le [théorème des fonctions implicites](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_des_fonctions_implicites) : 
\\[ r'(\varphi) = -\frac{\partial_\varphi f\bigl(r(\varphi), \varphi\bigr)}{\partial_\rho f\bigl(r(\varphi),\varphi\bigr)} \\]
Ces méthodes pourraient s’appuyer sur l’[interpolation d’Hermite](https://fr.wikipedia.org/wiki/Interpolation_d%27Hermite), ou encore sur des quadratures modifiées fondées sur la [formule d’Euler–Maclaurin](https://fr.wikipedia.org/wiki/Formule_d%27Euler-Maclaurin#Approximation_des_int%C3%A9grales). On pourra aussi jeter un œil aux [méthodes NC-m-2 (en français)](https://fr.wikipedia.org/wiki/Calcul_num%C3%A9rique_d%27une_int%C3%A9grale#Formules_faisant_intervenir_la_d%C3%A9riv%C3%A9e). 
{{< /alert >}}
