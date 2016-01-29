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
    if(num_length > 26){
        number = number.substr(num_length-26,num_length);
    }
    display.text(number);
}

$('.numbers > button').not('#null,#off,#percentage').click(function(){
    if(number === '0'){
        number = '';
        return;
    }
    number += $(this).text();
    testNumLength(number);
});

$('.operators > button').not('#equals,#clearall,#clear').click(function(){
    number = display.text() ;
    if(number != ''){

        number = checklastchar(number);
            number+= $(this).text();
            testNumLength(number);
    }   
    
});


$('#equals').click(function(){
    if(number != ''){        
        number = checklastchar(number);
        number = eval(number);
        testNumLength(number);
        } 
    });

$('#on').click(function(){
    $('#clearall').trigger('click'); 
    
});

$('#off').click(function(){
    number = "";  
    display.text("");    
});

$('#clearall').click(function(){
        number = "";
        display.text('0');
});

$('#clear').click(function(){
    if(number.length<2){
        number = '0';
        display.text('0')
    }else{
        number = number.slice(0, -1);
        testNumLength(number);
    }
        
});

function checklastchar(newnumber){
    var lastchar = newnumber.charAt(number.length - 1);
    if ((lastchar === '+')||(lastchar === '*')||(lastchar === '-')||(lastchar === '*')){
        newnumber = newnumber.slice(0, -1);
    }
    return newnumber;
}