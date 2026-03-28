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
- un switch de theme `light` / `dark`

  ##########################################
 #########Technologies utilisees ##########
##########################################

- HTML
- Tailwind CSS
- DaisyUI
- JavaScript
- Tailwind CLI
- npm

  ##########################################
 ######### Structure ######################
##########################################

- `index.html` : structure principale du portfolio
- `package.json` : scripts et dependances du projet
- `package-lock.json` : verrouillage exact des dependances
- `assets/css/input.css` : point d'entree Tailwind + DaisyUI
- `assets/css/output.css` : CSS compile genere au build
- `assets/css/style.css` : styles personnalises
- `assets/js/script.js` : comportements interactifs
- `assets/images/` : images et icones

  ##########################################
 ######### Lancer le projet ###############
##########################################

## Installation

Installez les dependances avec :

- `npm ci`

Sous PowerShell, si `npm` est bloque, utilisez :

- `npm.cmd ci`

Puis generez le CSS avec :

- `npm run build:css`

Sous PowerShell, vous pouvez aussi utiliser :

- `npm.cmd run build:css`

Pour recompiler automatiquement le CSS pendant le developpement :

- `npm run watch:css`

Sous PowerShell, vous pouvez aussi utiliser :

- `npm.cmd run watch:css`

Ensuite, ouvrez `index.html` dans un navigateur.

## Deploiement

Pour un hebergement statique comme o2switch, le plus simple est de generer le CSS en local puis d'envoyer les fichiers deja buildes.

Workflow recommande :

- `npm ci`
- `npm run build:css`

Puis envoyez en ligne :

- `index.html`
- `assets/`

Notes :

- `node_modules/` n'est pas versionne
- `assets/css/output.css` est versionne et envoye en production
- il n'est pas necessaire de lancer `npm` sur o2switch si Node.js / npm n'est pas disponible dans le terminal

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

### Compilation Tailwind

Le projet utilise Tailwind CLI avec DaisyUI en local.

Le fichier source principal est :

- `assets/css/input.css`

Le fichier genere est :

- `assets/css/output.css`

## Auteur

Edouard
