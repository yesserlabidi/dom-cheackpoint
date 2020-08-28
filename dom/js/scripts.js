let plus = Array.from(document.getElementsByClassName("fas fa-plus-circle"));
let minus = Array.from(document.getElementsByClassName("fas fa-minus-circle"));
let qte = Array.from(document.getElementsByClassName("qt"));
let price = Array.from(document.getElementsByClassName("total"));
let aprice = Array.from(document.getElementsByClassName("prc"));
let heart = Array.from(document.querySelectorAll(".fa-heart"));
let trash = Array.from(document.querySelectorAll(".fa-trash"));
// var my_div = document.querySelectorAll(".card mb-3");
//plus
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        qte[i].innerHTML++;
        totale();
    });
}

//minus
for (let i = 0; i < plus.length; i++) {
    minus[i].addEventListener("click", function() {
        if (qte[i].innerHTML > 1) {
            qte[i].innerHTML--;
            totale();
        }
    });
}
//total*

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function() {
        if (heart[i].classList.contains("fas")) {
            heart[i].classList.remove("fas");
            heart[i].classList.add("far");
        } else {
            heart[i].classList.remove("far");
            heart[i].classList.add("fas");
        }
    });
}
// remouve

for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function(e) {
        e.preventDefault();
        trash[
            i
        ].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        console.log(trash);
        totale();
    });
}

function totale() {
    let p = Array.from(document.getElementsByClassName("prc"));
    let q = Array.from(document.getElementsByClassName("qt"));

    let somme = 0;
    for (let i = 0; i < p.length; i++) {
        somme = somme + q[i].innerHTML * p[i].innerHTML;
    }
    document.querySelector(".total").innerHTML = somme;
}