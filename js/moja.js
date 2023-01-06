let pozvo = false;
$(window).scroll(function() {

        var hT = $('#polaznici').offset().top,
        hH = $('#polaznici').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
       if (wS > (hT+hH-wH)){
            zapocniPovecavanje1();
        }

    var hT = $('#predmeti').offset().top,
        hH = $('#predmeti').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && !pozvo){
        zapocniPovecavanje2();
        pozvo=!pozvo;
    }

    var hT = $('#casovi1').offset().top,
        hH = $('#casovi1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        zapocniPovecavanje3();
    }

});
let int1, int2, int3;
function zapocniPovecavanje1() {
    let br_polaznika = $("#br_polaznika").text();
    let granica = 500;
    let za_izvrsiti = 2.5;
    let deltaTime = za_izvrsiti/granica;
    if(br_polaznika == 0){
        int1 = setInterval(uradi_nesto, deltaTime*1000);
    }
}

function zapocniPovecavanje2() {
    let br_predmeta = $("#br_predmeta").text();
    let granica = 15;
    let za_izvrsiti = 0.5;
    let deltaTime = za_izvrsiti/granica;
    if(br_predmeta == 0){
        int2 = setInterval(uradi_nesto2, deltaTime*1000);
    }
}

function zapocniPovecavanje3() {
    let br_casova = $("#br_casova").text();
    let granica = 3000;
    let za_izvrsiti = 3;
    let deltaTime = za_izvrsiti/granica;
    console.log(deltaTime)
    if(br_casova == 0){
        int3 = setInterval(uradi_nesto3, deltaTime);
    }
}

function uradi_nesto() {
    let granica = 500;
    let br_polaznika = parseInt($("#br_polaznika").text());
    $("#br_polaznika").text(br_polaznika+1);
    if(br_polaznika+1 >= granica){

        clearInterval(int1);
        $("#br_polaznika").text((br_polaznika+1) +"+")
    }
}

function uradi_nesto2() {
    let granica = 15;
    let br_predmeta = parseInt($("#br_predmeta").text());
    $("#br_predmeta").text(br_predmeta+1);

    if(br_predmeta+1 >= granica){
        console.log("Stop")
        clearInterval(int2);
        $("#br_predmeta").text((br_predmeta+1) +"+")
    }
}
function uradi_nesto3() {
    let granica = 3000;
    let br_casova = parseInt($("#br_casova").text());
    $("#br_casova").text(br_casova+3);

    if(br_casova+3 >= granica){

        clearInterval(int3);
        $("#br_casova").text((br_casova+3) +"+")
    }
}