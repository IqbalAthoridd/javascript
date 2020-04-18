function getData(x) {
    console.log("sebelum di rubah", x);
    var x = 20;
    return x;
}
getData(50);

var ambilData = getData();

console.log(ambilData)