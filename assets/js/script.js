 /*#########################################################
 # Fonction pour la flèche d'indication visible uniquement quand on est tout en haut de page
 #########################################################*/
function setupScrollTopHint() {
    const hint = document.getElementById("scrollTopHint");
    if (!hint) return;

    // Fonction pour mettre à jour l'opacité de la flèche d'indication
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

 /*#########################################################
 # Fonction pour désactiver le clic droit sur la photo d'Edouard
#########################################################*/
function setupDisableEdouardRightClick() {
    const images = document.querySelectorAll('img[src$="edouard.png"]');
    if (!images || images.length === 0) return;

    images.forEach((img) => {
        img.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    });
}
// Appel de la fonction
setupDisableEdouardRightClick();

 /*#########################################################
 # Fonction pour alterner entre les themes light et dark
#########################################################*/
function toggleTheme() {
    const toggleBtn = document.getElementById("themeToggle");
    const iconImage = document.getElementById("themeIconImage");
    const page = document.documentElement;
    const defaultTheme = page.getAttribute("data-theme") || "light";
    const storageKey = "portfolio-theme";
    const savedTheme = localStorage.getItem(storageKey);

    // Vérifie si le bouton de toggle existe
    if (!toggleBtn) return;

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        const nextTheme = theme === "dark" ? "dark" : "light";
        page.setAttribute("data-theme", nextTheme);
        if (iconImage) {
            iconImage.src = nextTheme === "dark" ? "assets/images/icon-sun.svg" : "assets/images/icon-moon.svg";
            iconImage.alt = nextTheme === "dark" ? "light theme icon" : "dark theme icon";
        }
    }
    // Application du thème sauvegardé ou du thème par défaut
    applyTheme(savedTheme || defaultTheme);

    // Écouteur d'événement pour le bouton de toggle
    toggleBtn.addEventListener("click", () => {
        const currentTheme = page.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem(storageKey, nextTheme);
    });
}
// Appel de la fonction
toggleTheme();
