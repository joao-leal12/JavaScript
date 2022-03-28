//inicio 

let Global = null 
function calc(tipo, valor) {

    if(tipo === 'acao') {

        if(valor === 'c') {

            document.getElementById('Entrada').value = ''



        }

        if (valor === '*' || valor === '/' || valor === '+' || valor === '-'|| valor === '.') {


            document.getElementById('Entrada').value += valor 



        } 


        if(valor === '='  ) {




            var resposta = eval(document.getElementById('Entrada').value)

            document.getElementById('Entrada').value = resposta 
            Global = 'J'
        }

    

    }else if (tipo === 'valor') {


        document.getElementById('Entrada').value += valor 



    }


    if(tipo === 'valor' && Global === 'J') {


        document.getElementById('Entrada').value = valor


        Global = null


    }
    

}