function dataArray() {
    var data = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("Sebelumnya :", data.toString())

    data = data.sort()
    console.log("Ascending  :", data.toString())

    data = data.reverse()
    console.log("Descending :", data.toString())
}

dataArray()