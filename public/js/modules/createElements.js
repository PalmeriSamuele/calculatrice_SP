// creation du moadel 
let smartphone_model = document.createElement('div');
smartphone_model.id = 'phone-model';
document.body.append(smartphone_model);

// creation content

let info = document.createElement('div');
info.id = 'info_model';

let newDate = new Date();
let min = newDate.getMinutes();
let _min = String(min);
if (_min.length == 1){
    _min += '0';
    _min = reverseString(_min);

}

// methode aui retourne l'inverse d'une chaine de caractere
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
}

let hour = document.createElement('p');
hour.innerHTML = `${newDate.getHours()}:${_min}`;

let others = document.createElement('p');
others.innerHTML = `<i class="fa-solid fa-wifi"></i> <i class="fa-solid fa-comment-dots"></i> <i class="fa-solid fa-phone"></i>`;

hour.classList.add('ml-2');
others.classList.add('mr-2');

info.append(hour);
info.append(others);

smartphone_model.append(info);
// creation display 
let display = document.createElement('div');
display.id = 'display_calc';

let output = document.createElement('div');
output.id = 'output_display';
// output.textContent = '0';
output.classList.add('mr-2');
display.append(output);
smartphone_model.append(display);

// creastion des controlers

let controlers_box = document.createElement('div');
controlers_box.id = 'controlers';
// on cree tous les btns
let btn0 = document.createElement('div');
let btn1 = document.createElement('div');
let btn2 = document.createElement('div');
let btn3 = document.createElement('div');
let btn4 = document.createElement('div');
let btn5 = document.createElement('div');
let btn6 = document.createElement('div');
let btn7 = document.createElement('div');
let btn8 = document.createElement('div');
let btn9 = document.createElement('div');

let btn10 = document.createElement('div');
let btn11 = document.createElement('div');
let btn12 = document.createElement('div');
let btn13 = document.createElement('div');
let btn14 = document.createElement('div');
let btn15 = document.createElement('div');
let btn16 = document.createElement('div');
let btn17 = document.createElement('div');
let btn18 = document.createElement('div');
let btn19 = document.createElement('div');

btn0.innerHTML = 'AC';
btn0.addEventListener('click',function(){
    output.innerHTML = '';
})
btn1.innerHTML = 'x²';
btn1.addEventListener('click',function(){
    output.innerHTML =  (Number(output.innerHTML.toString().replaceAll(',','.')) **2).toFixed(2).toString().replaceAll('.',',');  // supp
})
btn2.innerHTML = '/';
btn3.innerHTML = '%';

btn4.innerHTML = '7';
btn5.innerHTML = '8';
btn6.innerHTML = '9';
btn7.innerHTML = '*';
btn8.innerHTML = '4';
btn9.innerHTML = '5';

btn10.innerHTML = '6';
btn11.innerHTML = '-';
btn12.innerHTML = '1';
btn13.innerHTML = '2';
btn14.innerHTML = '3';
btn15.innerHTML = '+';
btn16.innerHTML = '0';
btn17.innerHTML = ',';
btn18.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;

btn18.addEventListener('click',function(){
    output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length-1);  // supprime le dernier caractere
})
btn19.innerHTML = '=';
btn19.addEventListener('click',function(){
    let vals,val;
    output.innerHTML = output.innerHTML.replaceAll(',','.');   // on change les virgules par des points pour les  calcules
    if (output.innerHTML.split('*').length > 1){   // si le output est une multiplication
        
        vals = output.innerHTML.split('*');
        val = vals[0]*vals[1];
        
    }
    else if (output.innerHTML.split('+').length > 1){ // si le output est une addition
        vals = output.innerHTML.split('+');
        val = Number(vals[0])+ Number(vals[1]);
  
    }
    else if (output.innerHTML.split('-').length > 1){ // si le output est une soustraction
        vals = output.innerHTML.split('-');
        val = vals[0]-vals[1];
     
    }
    else if (output.innerHTML.split('/').length > 1){  // si le output est une division
        vals = output.innerHTML.split('/');
        val = vals[0]/vals[1];
     
    }
    else if (output.innerHTML.split('%').length > 1){  // si le output est un modulo
        vals = output.innerHTML.split('%');
        val = vals[0]%vals[1];
       
    }

    output.innerHTML = val.toFixed(2).toString().replaceAll('.',',');   // on remet la virgule quand on affiche la reponse

})


btn0.classList.add('btn_style');
btn1.classList.add('btn_style');
btn2.classList.add('btn_style');
btn3.classList.add('btn_style');
btn4.classList.add('btn_style');
btn5.classList.add('btn_style');
btn6.classList.add('btn_style');
btn7.classList.add('btn_style');
btn8.classList.add('btn_style');
btn9.classList.add('btn_style');

btn10.classList.add('btn_style');
btn11.classList.add('btn_style');
btn12.classList.add('btn_style');
btn13.classList.add('btn_style');
btn14.classList.add('btn_style');
btn15.classList.add('btn_style');
btn16.classList.add('btn_style');
btn17.classList.add('btn_style');
btn18.classList.add('btn_style');
btn18.id = 'del_btn';
btn19.classList.add('btn_style');
btn19.id = 'enter_btn';
controlers_box.append(btn0);
controlers_box.append(btn1);
controlers_box.append(btn2);
controlers_box.append(btn3);
controlers_box.append(btn4);
controlers_box.append(btn5);
controlers_box.append(btn6);
controlers_box.append(btn7);
controlers_box.append(btn8);
controlers_box.append(btn9);

controlers_box.append(btn10);
controlers_box.append(btn11);
controlers_box.append(btn12);
controlers_box.append(btn13);
controlers_box.append(btn14);
controlers_box.append(btn15);
controlers_box.append(btn16);
controlers_box.append(btn17);
controlers_box.append(btn18);
controlers_box.append(btn19);


smartphone_model.append(controlers_box);

let btns = document.getElementsByClassName('btn_style');
for (let i = 0; i < btns.length; i++) {
    if (btns[i].innerHTML != 'x²' &&  btns[i].innerHTML != 'AC' &&  btns[i].innerHTML != '=' &&  btns[i].innerHTML != `<i class="fa-solid fa-delete-left"></i>`){
        btns[i].addEventListener('click',function(){
        
            output.innerHTML += btns[i].innerHTML;

        })
    }
};

document.addEventListener('keydown',function(e){
    console.log(e.key)
    if ('0123456789/%+-*'.includes(e.key)){
      
        output.innerText += e.key;
    }
    else if (e.key =='Backspace'){
        output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length-1);
    }
    
})