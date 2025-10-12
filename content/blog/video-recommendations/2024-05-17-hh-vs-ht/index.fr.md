+++
title = 'Mihai Nica - Alice HH vs Bob HT'
date = 2024-05-15
draft = false
+++
{{< katex >}}

Une vidéo est apparue qui discute d'un jeu très similaire à ce que j'avais proposé à des collégien-ne-s pour [MATh.en.JEANS](https://www.mathenjeans.fr/).

## Le jeu de MATh.en.JEANS

Le jeu était le suivant :

> Émilie et Manon jouent à « pile ou face » (`P` ou `F`), mais au lieu de parier sur `P` ou `F`, elles parient chacune sur un motif. Émilie parie sur `PFP` et Manon sur `PFF`. Chaque fois que l'un de leurs motifs apparaît (avec chevauchement), la joueuse qui l'a choisie marque un point. Le jeu se termine lorsqu'une joueuse atteint 3 points.

Par exemple, en indiquant le motif d'Émilie en _italique_ et celui de Manon en **gras**, voici une partie aléatoire :

<i>PF<b>P</b></i><b>FF</b><b>PFF</b>FPP<b>PFF</b>

Ici, le jeu s'arrête car Manon gagne. Cependant, après avoir simulé un million de parties, il semble qu'Émilie gagne beaucoup plus souvent. Comment l'expliquer ?

Le but n'était pas que j'apporte une solution à ce problème, je n'y ai donc pas trop réfléchi, mais les élèves l'ont trouvé amusant et stimulant. Ils n'ont pas réussi à le résoudre, même après un certain temps. Mon rôle était de pointer les potentielles failles dans leurs conjectures (par exemple « le motif d'Émilie peut avoir des chevauchements, pas celui de Manon »).

## Le jeu PP-PF

Dans la vidéo, l'idée de départ est la même : chaque joueur choisit un motif et les compte avec chevauchement. Sauf que les motifs sont plus courts et que le nombre de tours est fixe : les points sont comptés après 100 lancers. Qui gagne le plus entre `PP` et `PF` ?

Mihai Nica prend le temps de prouver que `PF` gagne plus, de combien, et comment le nombre de tours peut affecter le résultat. Bien que l'explication soit un peu technique pour des élèves du secondaire, les visualisations sont excellentes et je l'ai trouvée très intéressante ! Son code est également disponible dans un Google Colab en description.

{{< youtube BAiuFOwhAWw >}}

Comment est-ce que ce travail pourrait servir de tremplin pour comparer `PFF` et `PFP` ?