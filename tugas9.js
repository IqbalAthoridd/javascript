function forinObjek() {
    var laptop = {
        type: 'ASUS ROG',
        procesor: 'mediatek helio p22',
        harga: 30000000000,
        warna: 'hitam merah',
        ram: '18 GB',
    }
    for (x in laptop)
    {
        console.log(laptop[x])
    }
}

forinObjek()