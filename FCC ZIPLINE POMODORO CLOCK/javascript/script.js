    
    var clock,time,session,sessionInt,breaktime,breakInt,time2,audio;
        session = $('.session_time');
        breaktime = $('.break_time');
		 audio = new Audio('http://scambuster.info/audio/time_up.wav');
		$(document).ready(function() { 
            
			clock = $('.clock').FlipClock({
		        clockFace: 'MinuteCounter',
		        autoStart: false,
                countdown: true,
		        callbacks: {
		        	interval: function() {
                        time = clock.getTime().time;
                        if(time === 0){
                            $('.session_clock').hide();
                            $('.break_clock').show();
                            clock2.setTime(parseInt(breaktime.text())*60);
                            audio.play();
                            clock2.start();
                                }
		        		
		        	}
		        }
		    });
            
            clock2 = $('.clock2').FlipClock({
		        clockFace: 'MinuteCounter',
		        autoStart: false,
                countdown: true,
		        callbacks: {
		        	interval: function() {
                        time = clock2.getTime().time;
                        if(time === 0){
                            $('.break_clock').hide();
                            $('.session_clock').show();
                            clock.setTime(parseInt(session.text())*60);
                            audio.play();                            
                            clock.start();
                                }
		        		
		        	}
		        }
		    });
            
            $('.break_clock').hide();
            $('.div_settings').hide();
            $('.div_faq').hide();
            clock.setTime(parseInt(session.text())*60);
            clock2.setTime(parseInt(breaktime.text())*60);
            
            

		});
        
        $('.start').click(function(){     
            time = clock.getTime().time;
            time2 = clock2.getTime().time;
            if(time ===0){
                clock2.start();
            }else{
                clock.start();
            }
			     
                    
            });
            
        $('.pause').click(function(){
                clock.stop();
                clock2.stop();
            });
        
        $('.reset').click(function(){
                clock.setTime(parseInt(session.text())*60);
                clock2.setTime(parseInt(breaktime.text())*60);
                clock.stop();
                clock2.stop();
            });

        $('.btn_session_time').click(function(){
            sessionInt = parseInt(session.text());
            sessionInt += 1
            session.text(sessionInt.toString());
            clock.setTime(parseInt(session.text())*60);
        });

        $('.btn_reduce_session_time').click(function(){
            sessionInt = parseInt(session.text());
            if(sessionInt <= 1){
                sessionInt = 1;
            }else{
                sessionInt -= 1;
            }
            
            session.text(sessionInt.toString());
            clock.setTime(parseInt(session.text())*60);
        });

        $('.btn_break_time').click(function(){
            breakInt = parseInt(breaktime.text());
            breakInt += 1
            breaktime.text(breakInt.toString());
            clock2.setTime(parseInt(breaktime.text())*60);
        });

        $('.btn_reduce_break_time').click(function(){
            breakInt = parseInt(breaktime.text());
            if(breakInt <= 1){
                breakInt = 1;
            }else{
                breakInt -= 1;
            }
            
            breaktime.text(breakInt.toString());
            clock2.setTime(parseInt(breaktime.text())*60);
        });

        $('.btn_settings').click(function(){
            $('.div_settings').toggle(1000);
        });

        $('.btn_faq').click(function(){
            $('.div_faq').toggle(1000);
        });

        $('.btn_close_faq').click(function(){
            $('.div_faq').hide('slow') ;
        });

        $('.btn_close_settings').click(function(){
            $('.div_settings').hide('slow') ;
        });