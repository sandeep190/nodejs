function sum (a,b){
    return a+b;
}
    function subtract(a,b){
        return a-b;
    }

function div(a,b){
    return a/b;
}

function multi(a,b){
    return a*b;
}

function calculates(a,b,operations){
    switch(operations){
        case  "add" :
            return a+b;
            break;
        case "sub" :
            return a-b;
            break;
        case "mul" :
            return a*b;
            break;
        case "div" :
        return a/b;
        break;
    }
}
//module.exports.calc = calculates;

module.exports = {
    'calc' : calculates
}