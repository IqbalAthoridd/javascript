let angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function pakeForBiasa() {
    for (var i = 0; i < angka.length; i++)
    {
        console.log(angka[i])
    }
    console.log("=======================================")
}

function pakeForOf() {
    for (let y of angka)
    {

        console.log(y)
    }
}


pakeForBiasa()
pakeForOf()