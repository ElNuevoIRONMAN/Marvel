document.addEventListener("DOMContentLoaded", () => {
    const gems = document.querySelectorAll(".gem");
    const gauntletButton = document.getElementById("gauntletButton");
    const resetButton = document.getElementById("resetButton");
    let collectedGems = JSON.parse(localStorage.getItem("collectedGems")) || [];

    // Ajusta el tamaño del botón resetButton
    gauntletButton.style.width = "24px";  // Ajusta el ancho según sea necesario
    gauntletButton.style.height = "24px";  // Ajusta la altura según sea necesario

    function updateGauntletButton() {
        if (collectedGems.length === 6) {
            gauntletButton.style.display = "block";
            gauntletButton.innerHTML = ` `;
        } else {
            gauntletButton.style.display = "none";
        }
    }

    function updateGemVisibility() {
        gems.forEach(gem => {
            if (collectedGems.includes(gem.id)) {
                gem.style.display = "none";
            } else {
                gem.style.display = "block";
            }
        });
    }

    gems.forEach(gem => {
        gem.addEventListener("click", () => {
            if (!collectedGems.includes(gem.id)) {
                collectedGems.push(gem.id);
                localStorage.setItem("collectedGems", JSON.stringify(collectedGems));
                gem.style.display = "none";
                updateGauntletButton();
            }
        });
    });

    gauntletButton.addEventListener("click", () => {
        if (collectedGems.length === 6) {
            window.location.href = "choose.html"; // La página donde eliges entre "Eres inevitable" o "Eres Ironman"
        }
    });

    resetButton.addEventListener("click", () => {
        collectedGems = [];
        localStorage.setItem("collectedGems", JSON.stringify(collectedGems));
        updateGemVisibility();
        updateGauntletButton();
    });

    // Inicializa la visibilidad de las gemas y el estado del botón del guantelete
    updateGemVisibility();
    updateGauntletButton();
});
