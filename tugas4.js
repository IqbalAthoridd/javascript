var tinggiAndi = 155;
var tinggiBudi = 170;
var tinggiAgus = 165;

if (tinggiAndi > tinggiBudi)
{
    if (tinggiAndi > tinggiAgus)
    {
        console.log("andi Paling tinggi")
    } else
    {
        if (tinggiAgus > tinggiAndi)
        {
            console.log("Agus paling tinggi")
        } else
        {
            if (tinggiBudi > tinggiAgus)
            {
                console.log("Budi Paling tinggi")
            }
        }
    }
} else
{
    if (tinggiBudi > tinggiAgus)
    {
        console.log("budi Paling tinggi")
    } else
    {
        console.log("Agus yang paling tinggi")
    }
}



