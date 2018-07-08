console.log("enter the calculation part")

function areacalculate(a,b,action){
    try{
    switch(action){
        case "square" :
            return a*b;
            break;
        case "tringle" :
            return 1/2*(a*b);
        break
        case "rectangle" :
            return a*b;
            break;
        default :
            return "Invalid Action";
            break;
    }
} catch(err){
    console.log("error section called")
    console.log(err)
}
}
module.exports = {
    "arcal":areacalculate,
}