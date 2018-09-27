var fs = require('fs');
var cadena = "";
var pila = []
fs.readFile('parenthesis.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    cadena = data;
    console.log(cadena);
    console.log(parenthesis_value(cadena));

});

function parenthesis_value(cadena) 
{ 
    for (var i in cadena) 
    {
        if(cadena[i]==='('||cadena[i]==='['||cadena[i]==='{')
        {
            pila.push(cadena[i]);
        }
        if(cadena[i]===')'||cadena[i]===']'||cadena[i]==='}')
        {
            if(pila.length<=0)
            {
                return "parentesis no balanceados";
            }
            switch(cadena[i])
            {
                case ')':
                    if (pila.pop()==='('){}
                    else{return "parentesis no balanceados";}
                break;
                case ']':
                    if (pila.pop()==='['){}
                    else{return "parentesis no balanceados";}
                break;
                case '}':
                    if (pila.pop()==='{'){}
                    else{return "parentesis no balanceados";}
                break;

            }
        }
    }
    // pila.pop();
    if(pila.length===0)
    {
        return"parentesis estan balanceados";
    }
    else{return "parentesis no balanceados";}
} 


// var stdin = process.openStdin();

// stdin.addListener("data", function(d) {