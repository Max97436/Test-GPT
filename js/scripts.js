// Script personnalisé pour le backoffice
// Pour l'instant, ce fichier est vide mais prêt à recevoir du code.

console.log('Backoffice chargé');
// Gestion du bouton hamburger pour réduire la sidebar
const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}
