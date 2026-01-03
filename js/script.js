function toggleMenu() {
    // Trova l'elemento sidebar
    var sidebar = document.getElementById("mySidebar");
    
    // Se ha la classe "open", la toglie. Se non ce l'ha, la mette.
    sidebar.classList.toggle("open");
}
