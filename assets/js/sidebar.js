function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");

    if (sidebar.style.width === "224px") {
        sidebar.style.width = "0"
    } else {
        sidebar.style.width = "224px";
    }
}