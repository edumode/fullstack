const displayCurrency = (num) => {
    const formatter = new Intl.NumberFormat('es-GT',{
        style : "currency",
        currency : 'GTQ',
        minimumFractionDigits : 2
    })

    return formatter.format(num)
}

export default displayCurrency