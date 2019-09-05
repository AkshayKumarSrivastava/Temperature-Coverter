const c=document.querySelector('#celsius>input');
const f=document.querySelector('#fahrenheit>input');
const k=document.querySelector('#kelvin>input');

function roundnum(n){
    return Math.round(n*100)/100;
}

function ctofandk(){
    var ct=parseFloat(c.value);
    var ft=(ct*9)/5+32;
    var kt=(ct+273.15);
    f.value=roundnum(ft);
    k.value=roundnum(kt);
}
function ftocandk(){
    var ft=parseFloat(f.value);
    var ct=(ft-32)*(5/9);
    var kt=(ct+273.15);
    c.value=roundnum(ct);
    k.value=roundnum(kt);
}
function ktocandf(){
    var kt=parseFloat(k.value);
    var ct=kt-273.15;
    var ft=(ct*9)/5+32;
    f.value=roundnum(ft);
    c.value=roundnum(ct);
}
function main(){
    c.addEventListener('input',ctofandk);
    f.addEventListener('input',ftocandk);
    k.addEventListener('input',ktocandf);
}

main();
