const city = "Algiers"
const celsius = 21.5
const fahrenheit=celsius*(9/5)+32
isWarm = false
if(celsius>21)
{
    isWarm=true
}


console.log('the temperature in ${ city } is ${ fahrenheit.toFixed(1) } °F}');