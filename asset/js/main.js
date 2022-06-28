const bold = document.getElementById("bold");
const ita = document.getElementById("ita");
const col = document.getElementById("col")
const para = document.getElementById("para");
const select = document.getElementById("select");
const html = document.getElementById("html");
const css = document.getElementById("css");
const styl = document.getElementById("styl");
const js = document.getElementById("js");
const max = 200;
const progress_bar = document.getElementById("progress_bar");
const load = document.getElementById("img"); 

html.addEventListener("input", () => {
    load.style.visibility = "visible";
});

document.addEventListener("mouseover", () => {
    load.style.visibility = "hidden";
});

bold.addEventListener('click', () => {
    html.value +="<strong></strong>";
});

ita.addEventListener('click', () => {
    html.value +="<em></em>";
});

col.addEventListener('click', () => {
    css.value +="{ color: };";
});

para.addEventListener('click', () => {
    html.value +="<p></p>";
});

select.addEventListener('click', () => {
    html.value +="<span></span>";
});


function add_color(){
    const col = document.querySelector("#col");
    col.addEventListener("click", () => {
        css.value += "{color: ;}";
    })
}
add_color();


html.onkeyup = html.onkeydown = function(){
    document.getElementById("live").innerHTML = this.value;

    let counting = html.value.length; 
    let count = max-live.textContent.length;
    document.getElementById("char_count").innerHTML = count; 
        if (count == 0) {
            html.setAttribute('maxlength', counting)
        } else {
            html.setAttribute('maxlength', '')
        }

        const percent = 100*live.textContent.length/max;

        progress_bar.style.setProperty('width', percent+'%');
            if (percent >= 0 && percent < 50) {
                progress_bar.style.backgroundColor = "forestgreen"; 
            }
            if (percent >= 50 && percent < 80) {
                progress_bar.style.backgroundColor = "lightsalmon"; 
            }
            if (percent >= 80 && percent < 100) {
                progress_bar.style.backgroundColor = "Red"; 
            }
};
