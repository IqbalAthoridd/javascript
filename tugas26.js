function mencariInfinite() {
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log(data)

    data.forEach((x, y, z) => {
        var result = x.toString;
        result = Number(result);
        result = isFinite(result)


        if (result == false)
        {
            console.log("Angka", x, "Not Infinity")
        } else
        {
            console.log("Angka", x, "Is Infinity")
        }
    });


}

mencariInfinite()