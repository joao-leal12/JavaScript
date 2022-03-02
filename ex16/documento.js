/*

var data = new Date()



document.write(data.getDate() + '/' + (data.getMonth() + 1 ) + '/' + data.getFullYear() + ' São ' +  data.getHours () + ' horas' + ' e ' + data.getMinutes()  + ' Minutos '    )

document.write('</br> </br>')

data.setDate(data.getDate() + 700 )

document.write(data.toString ())


document.write('</br> </br>')

data.setMonth(data.getMonth() + 3 )

document.write(data.toString ())

document.write('</br> </br> ')


data.setFullYear(data.getFullYear() + 6 )


document.write(data.toString()) */



var data1 = new Date(2024 , 5, 28 )
var data2 = new Date (2024, 5, 20)


document.write(data1.toString())
document.write('</br> </br> ')
document.write(data2.toString(  ))


document.write('</br> </br> ')


document.write(data1.getTime( ) )
document.write('</br>'  )
document.write(data2.getTime())
document.write('</br>   ')
document.write(Math.abs(data2.getTime ( ) - data1.getTime()) ) 