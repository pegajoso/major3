// creates a navbar and appends it to the HTML
// navbar style base is from
//   30Oct2022: https://getbootstrap.com/docs/4.0/examples/product/

document.body.onload = addNavbar;
const files = ["Welcome", "Glossary", "Gallery", "Citations"];

// creates elements and appends to beginning of body
// code base is from example in
//   30Oct2022: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// for attaching elements together
//   30Oct2022: https://stackoverflow.com/a/5677816
function addNavbar() {
    const newNav = document.createElement("nav");
    newNav.setAttribute("class", "site-header sticky-top py-1 navbar-expand-md navbar-info bg-info mb-4");

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "container d-flex flex-column flex-md-row justify-content-between");
    newNav.appendChild(newDiv);

    files.forEach(file => {
        const newA = document.createElement("a");
        newA.setAttribute("class", "py-2 d-none d-md-inline-block nav-link");
        newA.setAttribute("href", file.toLowerCase() + ".html");
        newDiv.appendChild(newA);

        const newText = document.createTextNode(file);
        newA.appendChild(newText);
    });

    const h1 = document.body.childNodes[0];
    document.body.insertBefore(newNav, h1);
}