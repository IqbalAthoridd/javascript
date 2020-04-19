var tinggiAndi = 167;
var tinggiBudi = 170;
var tinggiAgus = 165;


if (tinggiAndi > tinggiBudi)
{
    if (tinggiAndi < tinggiAgus)
    {
        console.log("Agus paling tinggi")
        console.log("tinggi Agus = ", tinggiAgus, "|", "tinggi Andi =", tinggiAndi, "|", "tinggi Budi", tinggiBudi, "|")
    } else
    {
        if (tinggiBudi > tinggiAgus)
        {
            console.log("Andi Paling tinggi")
            console.log("tinggi Andi = ", tinggiAndi, "|", "tinggi Budi =", tinggiBudi, "|", "tinggi Agus", tinggiAgus)
        } else
        {
            console.log("Andi Paling tinggi")
            console.log("tinggi Andi = ", tinggiAndi, "|", "tinggi Agus =", tinggiAgus, "|", "tinggi Budi", tinggiBudi)

        }
    }
} else if (tinggiBudi > tinggiAgus)
{
    if (tinggiAgus > tinggiAndi)
    {
        console.log("Budi yang paling tinggi")
        console.log("tinggi Budi = ", tinggiBudi, "|", "tinggi Agus = ", tinggiAgus, "|", "tinggiAndi = ", tinggiAndi)
    } else
    {
        console.log("Budi paling tinggi")
        console.log("tinggi Budi = ", tinggiBudi, "|", "tinggi Andi = ", tinggiAndi, "|", "tinggi Agus = ", tinggiAgus)
    }
} else
{
    console.log("Agus Paling tinggi")
    console.log("tinggi Agus = ", tinggiAgus, "|", "tinggi Budi = ", tinggiBudi, "|", "tinggi Andi =", tinggiAndi)
}