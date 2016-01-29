

url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=';
callback = '&callback=?';
results = $('.results');
searchbox = $('.searchbox');

$(document).ready(function(){
    $('a').attr('target','_blank');
    searchbox.focus();
});
	
$(".searchbox").autocomplete({
    source: function(request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function(data) {
                response(data[1]);
            }
        });
    }
});

$('.searchbox').keydown(function(e){
    if(e.which === 13){
        searchword = $(this).val();
        results.empty();
        searchwiki();
        searchbox.blur();
    }
});

function searchwiki(){
    completeUrl = url+searchword+callback;
    $.getJSON(completeUrl,function(data){
        info = data[1].length;
        
        if(info < 1){
            results.append('<div class="result"><a target="_blank" href=""><h4>No Result Found</h4></a><hr><p>no result found</p></div>');
            return;
        }
        for(var a=0; a<data[1].length; a++){
            
            headline = data[1][a];
            description =  data[2][a];
            link = data[3][a];
            
            if(description === ""){
                description = "No description available on this subject";
            }
            
            results.append('<div class="result"><a target="_blank" href="'+link+'"><h2>'+headline+'</h2></a><hr><p>'+description+'</p></div>');
        }
    });
}
