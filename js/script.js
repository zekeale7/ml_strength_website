fetch("/html/component_nav.html")
    .then(response => response.text())
    .then(componentHTML => {
        document.getElementById("nav-component").innerHTML = componentHTML
    })

fetch("/html/component_footer.html")
    .then(response => response.text())
    .then(componentHTML => {
        document.getElementById("footer-component").innerHTML = componentHTML
    })

function toggleNavItems() {
    let navItems = document.getElementsByClassName("nav-item")
    for (const navItem of navItems) {
        navItem.classList.toggle("nav-shown")
    }
    document.getElementById("nav-component").classList.toggle("expand")
}