

turn = 1;
tictactoe = $('.tictactoe');
score = $('.score');
var compScore = 0;
var playerScore = 0;
var draw = 0;
thinking = $('.thinking');
infomodal = $('.info-modal');
infocompwin = $('.infocompwin');
infoplayerwin = $('.infoplayerwin');
infodrawgame = $('.infodrawgame');
box = $('.box');
num1 = $('.num1');
num2 = $('.num2');
num3 = $('.num3');
num4 = $('.num4');
num5 = $('.num5');
num6 = $('.num6');
num7 = $('.num7');
num8 = $('.num8');
num9 = $('.num9');


$(document).ready(function(){
    tictactoe.hide();
    score.hide();
    thinking.hide();
    infocompwin.hide();
    infodrawgame.hide();
    infoplayerwin.hide();
});

function reset(){
    $('.box').empty();
    $('.box').removeClass('green');
    $('.box').removeClass('animated bounce');
}

function checkifempty(){
    if((num1.text()!= '')&&(num2.text()!= '')&&(num3.text()!= '')&&(num4.text()!= '')&&(num5.text()!= '')&&
      (num6.text()!= '')&&(num7.text()!= '')&&(num8.text()!= '')&&(num9.text()!= '')){
        
       drawgame = whoisthewinner();
        if(drawgame != 1){
        draw ++;
        $('.draw').text(draw);
        infodrawgame.fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
        }
        reset();
    }

}
function checkforwinners(mark){
    if((num1.text()== mark) && (num2.text()== mark) && (num3.text()== mark)){ $('.num1,.num2,.num3').addClass('green'); return 1 ;}
    if((num4.text()== mark) && (num5.text()== mark) && (num6.text()== mark)){ $('.num4,.num5,.num6').addClass('green'); return 1 ;}
    if((num7.text()== mark) && (num8.text()== mark) && (num9.text()== mark)){ $('.num7,.num8,.num9').addClass('green'); return 1 ;}
    
    if((num1.text()== mark) && (num4.text()== mark) && (num7.text()== mark)){ $('.num1,.num4,.num7').addClass('green'); return 1 ;}
    if((num2.text()== mark) && (num5.text()== mark) && (num8.text()== mark)){ $('.num2,.num5,.num8').addClass('green'); return 1 ;}
    if((num3.text()== mark) && (num6.text()== mark) && (num9.text()== mark)){ $('.num3,.num6,.num9').addClass('green'); return 1 ;}
    
    if((num1.text()== mark) && (num5.text()== mark) && (num9.text()== mark)){ $('.num1,.num5,.num9').addClass('green'); return 1 ;}
    if((num3.text()== mark) && (num5.text()== mark) && (num7.text()== mark)){ $('.num3,.num5,.num7').addClass('green'); return 1 ;}
}

function whoisthewinner(){
    playerwinner = checkforwinners(player);
    compwinner = checkforwinners(comp);
    
    if(playerwinner == 1){
        infoplayerwin.fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
        playerScore++;
       $('.playerwin').text(playerScore);
        reset();
        return 1; 
        
    }
    if(compwinner == 1){
        infocompwin.fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
        compScore ++;
        $('.compwin').text(compScore);
        reset();
        return 1;
    }
    
}
function compAI(playertext,comptext){
    
    move = checkWinOrBlock(comptext);
    
    
    if(move == null){
        move =  checkWinOrBlock(playertext);
        if(move == null){
            move = lookforcorners();
            if(move == null){
                move = lookforanyspace();
                move.text(comp);
            }else{
                move.text(comp);
            }
        }else{
            move.text(comp);
        }
    }else{
        move.text(comp);
    }
    checkifempty();
    whoisthewinner();
    turn = 1;
}

function lookforanyspace(){
   if((num2.text()== "")){return num2 ;}
   if((num4.text()== "")){return num4 ;}
   if((num6.text()== "")){return num6 ;}
   if((num8.text()== "")){return num8 ;}
}
function lookforcorners(){
    if((num1.text()== player)&&(num9.text()== player)){ return num4;}
    if((num3.text()== player)&&(num7.text()== player)){ return num4;}
    if((num5.text()== "")){return num5 ;}
    if((num3.text()== "")){return num3 ;}
    if((num1.text()== "")){return num1 ;}    
    if((num7.text()== "")){return num7 ;}
    if((num9.text()== "")){return num9 ;}
}
function checkWinOrBlock(mark){
     
     // horizontal 
     // first row 
    if((num1.text()== mark) && (num2.text()== mark) && (num3.text()== "")){  return num3 ;}
    if((num1.text()== mark) && (num3.text()== mark) && (num2.text()== "")){  return num2 ;}
    if((num3.text()== mark) && (num2.text()== mark) && (num1.text()== "")){  return num1 ;}
    
    // second row 
    if((num4.text()== mark) && (num5.text()== mark) && (num6.text()== "")){  return num6 ;}
    if((num4.text()== mark) && (num6.text()== mark) && (num5.text()== "")){  return num5 ;}
    if((num6.text()== mark) && (num5.text()== mark) && (num4.text()== "")){  return num4 ;}
    
    // third row 
    if((num7.text()== mark) && (num8.text()== mark) && (num9.text()== "")){  return num9 ;}
    if((num7.text()== mark) && (num9.text()== mark) && (num8.text()== "")){  return num8 ;}
    if((num9.text()== mark) && (num8.text()== mark) && (num7.text()== "")){  return num7 ;}
    
    //vertical
    //first row
    if((num1.text()== mark) && (num4.text()== mark) && (num7.text()== "")){  return num7 ;}
    if((num1.text()== mark) && (num7.text()== mark) && (num4.text()== "")){  return num4 ;}
    if((num7.text()== mark) && (num4.text()== mark) && (num1.text()== "")){  return num1 ;}
    
    //second row
    if((num2.text()== mark) && (num5.text()== mark) && (num8.text()== "")){  return num8 ;}
    if((num2.text()== mark) && (num8.text()== mark) && (num5.text()== "")){  return num5 ;}
    if((num8.text()== mark) && (num5.text()== mark) && (num2.text()== "")){  return num2 ;}
    
    //third row
    if((num3.text()== mark) && (num6.text()== mark) && (num9.text()== "")){  return num9 ;}
    if((num3.text()== mark) && (num9.text()== mark) && (num6.text()== "")){  return num6 ;}
    if((num9.text()== mark) && (num6.text()== mark) && (num3.text()== "")){  return num3 ;}
    
    //diagonal
    //first row
    if((num1.text()== mark) && (num5.text()== mark) && (num9.text()== "")){  return num9 ;}
    if((num1.text()== mark) && (num9.text()== mark) && (num5.text()== "")){  return num5 ;}
    if((num9.text()== mark) && (num5.text()== mark) && (num1.text()== "")){  return num1 ;}
    
    //second row
    if((num3.text()== mark) && (num5.text()== mark) && (num7.text()== "")){  return num7 ;}
    if((num3.text()== mark) && (num7.text()== mark) && (num5.text()== "")){  return num5 ;}
    if((num7.text()== mark) && (num5.text()== mark) && (num3.text()== "")){  return num3 ;}
}


$('.box').click(function(){
    if($(this).text()!= ""){
        return;
    }
    if(turn === 1){
        $(this).text(player); 
        $(this).addClass('animated bounce'); 
        checkifempty();
        whoisthewinner();
        turn = 0;
        thinking.show();
        setTimeout(function(){
            compAI(player,comp);
            thinking.hide();
        }, 800);
        
   }
});

$('.playerX').click(function(){
    $('.chooseletter').hide();
    tictactoe.show();
    score.show();
    player = 'X';
    comp = 'O';
});

$('.playerO').click(function(){
    $('.chooseletter').hide();
    tictactoe.show();
    score.show();
    player = 'O';
    comp = 'X';
});