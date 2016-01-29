var number = "";
var number2,number3;
var operation1 ="";
var operation2 = "";
var display;
display = $('.display');

$(document).ready(function(){
    
});

function testNumLength(number){
    var num_length = number.length;
    if(num_length > 9){
        number = number.substr(num_length-9,num_length);
    }
    display.text(number);
}

$('.numbers > button').not('#null,#sqrt,#percentage').click(function(){
    if(number === '0'){
        number = '';
        return;
    }
    number += $(this).text();
    testNumLength(number);
});

$('.operators > button').not('#equals,#clearall,#clear').click(function(){
    operation1 = $(this).text();
    
    if(number != ''){
        
        number2 = number;
        number = "";
    }
    
   
    
});

$('#equals').click(function(){
    if(number != ''){
        if(operation1 === '+'){
        number = parseInt(number);
        number2 = parseInt(number2);
        number = number + number2;
        testNumLength(number);
    }
    if(operation1 === '-'){
        number = parseInt(number);
        number2 = parseInt(number2);
        number = number2 - number;
        testNumLength(number);
    }
    if(operation1 === '*'){
        number = parseInt(number);
        number2 = parseInt(number2);
        number = number * number2;
        testNumLength(number);
    }
    if(operation1 === '/'){
        number = parseInt(number);
        number2 = parseInt(number2);
        number = number2 / number;
        testNumLength(number);
    } 
    }
    
});

$('#sqrt').click(function(){
    number = Math.sqrt(number);
    testNumLength(number);
    
});

$('#percentage').click(function(){
    number =number/100;
    testNumLength(number);
    
});

$('#clearall').click(function(){
        number = "";
        number2 = "";
        operation1="";
        operation2="";
        display.text('0');
});

$('#clear').click(function(){
        number = "";
        display.text('0');
});