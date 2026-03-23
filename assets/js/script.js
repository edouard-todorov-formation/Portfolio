 /**************************************************************************************************
 *** Fonction pour la flèche d'indication visible uniquement quand on est tout en haut de page*****
**************************************************************************************************/
function setupScrollTopHint() {
  const hint = document.getElementById("scrollTopHint");
  if (!hint) return;

  function updateHintOpacity() {
    const atTop = window.scrollY <= 2;
    hint.classList.toggle("opacity-0", !atTop);
    hint.classList.toggle("opacity-100", atTop);
  }
  // Première initialisation
  updateHintOpacity();
  // Mise à jour pendant le scroll
  window.addEventListener("scroll", updateHintOpacity, { passive: true });
}
// Appel de la fonction
setupScrollTopHint();

 /**********************************************************************
 *** Fonction pour désactiver le clic droit sur la photo d'Edouard*****
***********************************************************************/
function setupDisableEdouardRightClick() {
  const images = document.querySelectorAll('img[src$="edouard.png"]');
  if (!images || images.length === 0) return;

  images.forEach((img) => {
    img.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
}

setupDisableEdouardRightClick();

