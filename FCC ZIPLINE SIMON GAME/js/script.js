var wrongaudio = new Audio('/js/buzzer.mp3');
var localaudio1 = new Audio('/js/simonSound1.mp3');
var localaudio2 = new Audio('/js/simonSound3.mp3');
var localaudio3 = new Audio('/js/simonSound4.mp3');
//startaudio.play();
//sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
//sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
//sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
//sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
tempo = 800;
interval = 2000;
userclicks = [];
var counter = 0;
var Arr = [];
strictmode = 0;
startbtn = $('.startbtn');
strictbtn = $('.strictbtn');
stricton = $('.stricton');
screen = $('.screen');
red = $('.red');
green = $('.green');
yellow = $('.yellow');
blue = $('.blue');
resetbtn = $('.resetbtn');
colorbtn = $('.inner');
colorbtn.css('pointer-events','none');
                  
function reset(){
    userclicks = [];
    Arr=[];
    counter = 0;
    screen.text('00');
    startbtn.css('pointer-events','auto');
    colorbtn.css('pointer-events','none');
    strictmode = 0;
    stricton.removeClass('green');
}

function patternBlink(simon) {
		setTimeout(function() {																		
			for(var i = 0; i < simon.length; i++) {									
				(function(i) { 
					setTimeout(function() {
                        var c = (simon[i]);
                       if(c === 4){localaudio1.play(); red.fadeOut(150).fadeIn(150); }
                        if(c === 3){localaudio2.play(); green.fadeOut(150).fadeIn(150); }
                        if(c === 2){localaudio3.play(); yellow.fadeOut(150).fadeIn(150); }
                        if(c === 1){localaudio1.play(); blue.fadeOut(150).fadeIn(150); }
					}, i * tempo);
				})(i);																
			}		
		}, interval);}
    

red.click(function(){
    red.fadeOut(150).fadeIn(150);
    localaudio1.play();
    userclicks.push(4);    
    ul = userclicks.length;
    al = Arr.length;
    userClickString = userclicks.toString();
    ArrString = Arr.toString();

    if(ul === al){ 
        if(ArrString===userClickString){
            interval = 2000;
            userclicks = [];
            startgame();
        }else{
            userclicks = [];            
            wrongaudio.play();
            interval = 3000;
            if(strictmode === 1){
                reset();
                startgame();
            }else{
                patternBlink(Arr);    
            }          
        }
        
    }
});

blue.click(function(){
    blue.fadeOut(150).fadeIn(150);
    localaudio1.play();
    userclicks.push(1);
    ul = userclicks.length;
    al = Arr.length;
    userClickString = userclicks.toString();
    ArrString = Arr.toString();

    if(ul === al){ 
        if(ArrString===userClickString){
            interval = 2000;
            userclicks = [];
            startgame();
        }else{
            userclicks = [];
            wrongaudio.play();
            interval = 3000;
            if(strictmode === 1){
                reset();
                startgame();
            }else{
                patternBlink(Arr);    
            }
        }
        
    }
});
green.click(function(){
    green.fadeOut(150).fadeIn(150);
    localaudio3.play();
    userclicks.push(3);
    ul = userclicks.length;
    al = Arr.length;
    userClickString = userclicks.toString();
    ArrString = Arr.toString();

    if(ul === al){ 
        if(ArrString===userClickString){
            interval = 2000;
            userclicks = [];
            startgame();
        }else{
            userclicks = [];
            wrongaudio.play();
            interval = 3000;
            if(strictmode === 1){
                reset();
                startgame();
            }else{
                patternBlink(Arr);    
            }
        }
        
    }
});
yellow.click(function(){
    yellow.fadeOut(150).fadeIn(150);
    localaudio2.play();
    userclicks.push(2);
    ul = userclicks.length;
    al = Arr.length;
    userClickString = userclicks.toString();
    ArrString = Arr.toString();

    if(ul === al){ 
        if(ArrString===userClickString){
            interval = 2000;
            userclicks = [];
            startgame();
        }else{
            userclicks = [];
            wrongaudio.play();
            interval = 3000;
            if(strictmode === 1){
                reset();
                startgame();
            }else{
                patternBlink(Arr);    
            }
            
        }
        
    }
});

function increaseTempo(){
      if((counter >4)&& (counter <9)){tempo = 700;}
        else if((counter >8)&& (counter <13)){tempo = 600;}
        else if((counter >13)){tempo = 500;}
}
       
function checkforWin(){
            if(counter > 19){
                alert('winner!! You win the game');
                reset();
                startgame();
            }
            
    }
function startgame(){
    colorbtn.css('pointer-events','auto');
    increaseTempo();
    rnd = Math.floor(Math.random() * 4) + 1;
    Arr.push(rnd);
    counter++;
    checkforWin();
    if(counter < 10){screen.text("0"+counter);}else{screen.text(counter);}
    patternBlink(Arr);
}
startbtn.click(function(){
   startgame();
    startbtn.css('pointer-events','none');
});

strictbtn.click(function(){
    if(strictmode === 0){ 
        strictmode = 1;
        stricton.addClass('green');
    }
    else{
        strictmode = 0;
        stricton.removeClass('green');
    }
});

resetbtn.click(function(){
    reset();
});