/* Retorno ao topo independente do menu e da rota atual. */
(function () {
    "use strict";

    const button = document.getElementById("back-to-top");
    if (!button) return;

    const visibilityThreshold = 320;
    function refreshVisibility() {
        button.hidden = window.scrollY <= visibilityThreshold;
    }

    button.addEventListener("click", () => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
    });

    window.addEventListener("scroll", refreshVisibility, { passive: true });
    window.addEventListener("pageshow", refreshVisibility);
    window.addEventListener("load", refreshVisibility);
    refreshVisibility();
})();
