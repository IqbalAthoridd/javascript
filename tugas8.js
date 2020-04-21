function dataObject() {
    var handphone = {
        type: 'samsung',
        chipset: 'snap dragon',
        camera: '48 mp',
        harga: 5000000,
    }
    console.log(handphone)
    handphone.type = 'Asus ROG';
    console.log("====== sesudah di ubah ======")
    console.log(handphone)
}

dataObject()