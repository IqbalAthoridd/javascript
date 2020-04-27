function dataArray() {
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya :", data.toString())

    var data1 = data.sort()
    console.log("Ascending :", data1.toString())

    var data2 = data.reverse()
    console.log("Descending :", data2.toString())

    var data3 = data.filter(data => {
        return data > 10
    })
    console.log("Filter > 10 :", data3.toString())
}

dataArray()