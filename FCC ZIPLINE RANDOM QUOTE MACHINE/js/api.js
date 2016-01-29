var url = 'http://quotes.stormconsultancy.co.uk/quotes.json';
var quoteAuthor;
var quoteText;

function getQuote(){
    $.ajax({
                     url:'https://jsonp.afeld.me/?url=http%3A%2F%2Fquotes.stormconsultancy.co.uk%2Frandom.json',                        
                     dataType: 'jsonp',
                     type:'get',
                     cache:true,
                     success: function(data){
                          quoteAuthor = data.author;
                          quoteText = data.quote;
                 }
                 });
}

function setTweet(){
    if(quoteText.length > 137){
        var reducedTweet  = quoteText.slice(0,137);
        reducedTweet+= "...";
        quoteText = reducedTweet;
    }
    $('#tweet').attr('href','https://twitter.com/intent/tweet?text='+quoteText)
}
				 
$('#displayQuote').click(function(){
    getQuote();
    $('.text').text(quoteText);
    $('.author').text("~"+quoteAuthor);
    setTweet();
});

$('a').attr('target','_blank');