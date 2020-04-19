var tinggiAndi = 198;
var tinggiBudi = 173;
var tinggiAgus = 172;

if (tinggiAndi > tinggiBudi)
{
    if (tinggiAndi > tinggiAgus)
    {
        console.log("Andi paling tinggi")
        console.log("tinggi Andi = ", tinggiAndi, "|", "tinggi Agus =", tinggiBudi, "|", "tinggi Budi", tinggiAgus, "|")
    } else
    {
        if (tinggiAgus > tinggiAndi)
        {
            console.log("Agus paling tinggi")
            console.log("tinggi Agus = ", tinggiAgus, "|", "tinggiAndi = ", tinggiAndi, "|", "tinggi Budi =", tinggiBudi)
        } else
        {
            if (tinggiBudi > tinggiAgus)
            {
                console.log("Budi Paling tinggi")
                console.log("tinggi Budi = ", tinggiBudi, "|", "tinggi Agus = ", tinggiAgus, "|", "tinggi Andi = ", tinggiAndi)
            }
        }
    }
} else
{
    if (tinggiBudi > tinggiAgus)
    {
        console.log("Budi Paling tinggi")
        console.log("tinggi Budi = ", tinggiBudi, "|", "tinggi Agus = ", tinggiAgus, "|", "tinggi Andi = ", tinggiAndi)
    } else
    {
        console.log("Agus Paling tinggi")
        console.log("tinggi Agus = ", tinggiAgus, "|", "tinggi Budi = ", tinggiBudi, "|", "tinggi Andi =", tinggiAndi)
    }
}



