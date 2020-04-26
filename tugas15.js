function sisiSegitiga(ab, bc, ac) {
    console.log("Nilai AB : ", ab)
    console.log("Nilai BC : ", bc)
    ac = Math.pow(ab, 2) + Math.pow(bc, 2)
    ac = Math.sqrt(ac)

    return ac
}
var hasil = sisiSegitiga(8, 6);

console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah :", hasil, "cm")