---
title: Introduction au deep learning
date: 2024-06-11
lastmod: 2024-09-11
draft: false
---

Le cours *R5.A.12 - Modélisation mathématique* de 2024-2025 de l'IUT d'Informatique de Lens s'intéresse à l'apprentissage. 
L'objectif est d'introduire les outils mathématiques nécessaires à la bonne compréhension des bases de ces méthodes, [à travers trois composantes](https://ml-course.github.io/master/notebooks/01%20-%20Introduction.html#learning-representation-evaluation-optimization) :

1. **Représentation :** Un modèle qui peut être implémenté (l'architecture, le nombre de paramètres...) ;
2. **Évaluation :** Une *loss*, une fonction objectif ou de score ;
3. **Optimisation :** Une manière *efficace* d'ajuster les paramètres.

On ne considère que l'apprentissage supervisé, ce qui permet de se concentrer sur les parties 1 et 3. 
On commence par une représentation simple d'approximation affine et régression linéaire pour se concentrer sur l'optimisation.
Une fois le *pipeline* d'optimisation en PyTorch est assimilé sur cet exemple, on introduit les perceptrons multi-couches, puis les transformeurs.

Les aspects théoriques sont illustrés par des TPs, disponibles dans la liste suivante, fréquemment mise à jour :

- TP1.1 - Régression linéaire {{< badge href="TP1.1 - Régression linéaire.ipynb" >}}ipynb{{< /badge >}}
- TP1.2 - Descente de gradient {{< badge href="TP1.2 - Descente de gradient.ipynb" >}}ipynb{{< /badge >}}
- TP1.3 - Optimisation en PyTorch {{< badge href="TP1.3 - Optimisation en PyTorch.ipynb" >}}ipynb{{< /badge >}}


Les vidéos inaccessibles sur le réseau de l'IUT :
- [Deepmath - Tenseurs](Deepmath-Tenseurs.mp4)
