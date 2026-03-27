  #############################################
 ######### Portfolio - Edouard ###############
#############################################

Portfolio personnel d'Edouard, developpeur web.

  ############################################
 ######### Apercu ###########################
############################################
Ce projet presente :

- une section d'introduction
- une section "A propos"
- une section "Stacks"
- une section "Soft Skills"
- un switch de theme `winter` / `dark`

  ##########################################
 #########Technologies utilisees ##########
##########################################

- HTML
- Tailwind CSS
- DaisyUI
- JavaScript

  ##########################################
 ######### Structure ######################
##########################################

- `index.html` : structure principale du portfolio
- `assets/css/style.css` : styles personnalises
- `assets/js/script.js` : comportements interactifs
- `assets/images/` : images et icones

  ##########################################
 ######### Lancer le projet ###############
##########################################

Il suffit d'ouvrir `index.html` dans un navigateur.

  ##########################################
 ######### Fonctionnalites ################
##########################################

- design responsive
- navigation desktop et mobile
- changement de theme clair / sombre
- cartes de competences techniques

  ##########################################
 ######### Personnalisation rapide ########
##########################################

### Enlever le letter spacing global

Pour supprimer l'espacement entre les lettres sur tout le site, recherchez et retirez `tracking-wide` dans les balises du fichier `index.html`.

Exemple :

- avant : `class="min-h-screen bg-base-200 text-base-content tracking-wide"`
- apres : `class="min-h-screen bg-base-200 text-base-content"`

### Changer la taille de police globale

Les tailles globales sont dans `assets/css/style.css`.

- desktop :
  `html { font-size: 17px; }`
- mobile :
  `@media (max-width: 450px) { html { font-size: 15px; } }`

Augmenter ou reduire ces valeurs selon le rendu souhaite.

### Modifier les couleurs des icones SVG selon le theme

Le fichier `assets/css/style.css` contient la classe :

- `.theme-icon`

et la variante dark :

- `[data-theme="dark"] .theme-icon`

Cela permet de garder certaines icones lisibles sur fond clair et sombre.

## Auteur

Edouard
