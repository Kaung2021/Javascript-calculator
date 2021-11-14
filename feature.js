//first,clear the result when we click the button
function clearscreen() {
    document.getElementById('result').value = ""
};
//Display the value on result
function getdata(value) {
    var res = document.getElementById('result');
    if (res.value == "underfined") {
        res.value = ""
    }
    res.value += value;
}
//theme
let lighttheme = "light.css";
let darktheme = "dark.css";
//making Swap
function changetheme() {
    let darkmode = document.getElementById('darkmode');
    let theme = document.getElementById('theme');
    if (theme.getAttribute('href') == lighttheme) {
        theme.href = darktheme;
        darkmode.innerHTML = "Light Mode"
    } else {
        theme.href = lighttheme;
        darkmode.innerHTML = "Dark Mode"
    }

}