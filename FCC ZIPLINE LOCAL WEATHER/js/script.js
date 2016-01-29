var url = 'http://ip-api.com/json';
var lat,lon,city;

$.getJSON(url,function(ipaddress){
        lat = ipaddress.lat;
        lon = ipaddress.lon;
        url2 = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=2de143494c0b295cca9337e1e96b00e0';
        console.log(ipaddress.status);
        console.log(url2);
        
        $.getJSON(url2,function(openweather){
            city = (openweather.name);
            description = (openweather.weather[0].description);
            icon = (openweather.weather[0].icon);
            tempKelvin = parseInt(openweather.main.temp);
            tempCelsius = parseInt(tempKelvin - 273.15);
            tempFahrenheit = parseInt(tempCelsius * 1.8 + 32);
            console.log(tempKelvin);
            console.log(openweather.main.temp);            
            S_icon = icon.substring(0,2);
            
            if((S_icon === '01')){
                $('body').css('background','url(/images/sunny.jpg)');
            }else if((S_icon === '02')||(S_icon === '03')||(S_icon === '04')){
                $('body').css('background','url(/images/cloudy.jpg);');
            }else if((S_icon === '09')||(S_icon === '10')){
                $('body').css('background','url(/images/rainy.jpg);');
            }else if((S_icon === '11')){
                $('body').css('background','url(/images/thunder.jpg)');
            }else if((S_icon === '13')||(S_icon === '50')){
                $('body').css('background','url(/images/snow.jpg)');
            }
            
            $('.city').text(city);
            $('.temp').text(tempCelsius + ' degrees celsius');
            $('.description').text(description);
            $('.information img').attr('src','http://openweathermap.org/img/w/'+icon+'.png')
            
            $('.convert').on('click',function(){
                btntext = $(this).html();
                console.log(btntext);
                if(btntext === 'Convert to Fahrenheit'){
                    $('.temp').text(tempFahrenheit + ' degrees Fahrenheit');
                    $(this).html('Convert to Celsius');
                }else if(btntext === 'Convert to Celsius'){
                    $('.temp').text(tempCelsius + ' degrees Celsius');
                    $(this).html('Convert to Fahrenheit');
                }
            })
        });
    
});


