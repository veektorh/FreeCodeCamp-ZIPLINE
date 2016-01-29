users =  ["2dGamedev","NoCopyrightSounds","freecodecamp","medrybw", "storbeck","brunofin"];
var stat;
 $.each(users,function(index,value){
        url = 'https://api.twitch.tv/kraken/streams/'+value;
        url2 = 'https://api.twitch.tv/kraken/channels/'+value;

    var jqxhr = $.getJSON(url2, function() {

        })
    
      .fail(function() {
          $('.all').append('<li class="channel closed"><a target="_blank" href="http://www.twitch.tv/'+value+'">'+value+'</a> <span class="right">Account closed</span> <br></li>');
      })
     
      $.getJSON(url,function(twitchstream){   
            stream = twitchstream.stream;
            
               
            if(stream === null){
                status = 'offline';
                stream = 'offline';
            }else{
                
                status = 'online'
                stream = stream.game;
            }
                
            $('.all').append('<li class="channel '+status+' '+value+'"><a target="_blank" href="http://www.twitch.tv/'+value+'">'+value+'</a><span class="right '+status+'">'+stream+'</span><br></li>');
            
        });
     

     
});

$('.btnOnline').click(function(){
    $('.online').removeClass('hide');
    $('.offline,.closed').addClass('hide');
    
});

$('.btnOffline').click(function(){
    $('.offline').removeClass('hide');
    $('.online').addClass('hide');
});

$('.btnAll').click(function(){
    $('.online,.offline,.closed').removeClass('hide');
});
