// creation du moadel 
let smartphone_model = document.createElement('div');
smartphone_model.id = 'phone-model';
document.body.append(smartphone_model);

// creation content

let info = document.createElement('div');
info.id = 'info_model';


let hour = document.createElement('p');
hour.innerHTML = '10:02';

let others = document.createElement('p');
others.innerHTML = 'wifi notifs';

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
display.append(output);
smartphone_model.append(display);

// creastion des controlers

let controlers_box = document.createElement('div');
controlers_box.id = 'controlers';

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
btn1.innerHTML = '()';
btn2.innerHTML = '%';
btn3.innerHTML = 'mod';
btn4.innerHTML = '7';
btn5.innerHTML = '8';
btn6.innerHTML = '9';
btn7.innerHTML = 'x';
btn8.innerHTML = '4';
btn9.innerHTML = '5';

btn10.innerHTML = '6';
btn11.innerHTML = '-';
btn12.innerHTML = '1';
btn13.innerHTML = '2';
btn14.innerHTML = '3';
btn15.innerHTML = '+';
btn16.innerHTML = '0';
btn17.innerHTML = '.';
btn18.innerHTML = '<';
btn19.innerHTML = '=';

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
btn19.classList.add('btn_style');

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

btns = document.getElementsByClassName('btn_style');
btns.forEach(btn => {
    btn.addEventListener('click',function(){
        
    })
});
