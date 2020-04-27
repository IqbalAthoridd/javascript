function mencariArray() {
    var data = "Saya ingin belajar bersama";

    data = data.split(" ")

    data.forEach((x, y) => {
        console.log("Item :", x, "Index ke", y)
    })
}

mencariArray()