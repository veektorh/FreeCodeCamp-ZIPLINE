
function generate(){
    var allQuotes = [
"Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.- victor",
"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies. - C.A.R. Hoare",
"Programming is like sex: one mistake and you have to support it for the rest of your life.- Michael Sinz",
"Measuring programming progress by lines of code is like measuring aircraft building progress by weight - Bill Gates",
"The computing scientist’s main challenge is not to get confused by the complexities of his own making. -  E. W. Dijkstra",
"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Braina W.Kernighan",
"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.  - Rick Osborne",
 "Some people, when confronted with a problem, think I know, I'll use regular expressions. Now they have two problems. - Jamie Zawinski",
 "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. -Tom Cargill",
"If Java had true garbage collection, most programs would delete themselves upon execution.  -Robert Sewell ",
 "Computer Science is no more about computers than astronomy is about telescopes -Edsger Dijkstra",
"If debugging is the process of removing software bugs, then programming must be the process of putting them in.—Edsger Dijkstra","There are only two kinds of languages: the ones people complain about and the ones nobody uses -Bjarne Stroustrup",
"It's all talk until the code runs. - Ward Cunningham",
  "Commenting your code is like cleaning your bathroom, you never want to do it, but it really does create a more pleasant experience for you and your guests. -  Ryan Campbell"
 
                     ]
var number = Math.floor(Math.random()*allQuotes.length);
var quote = allQuotes[number].split("-");
var quoteText = quote[0];
var quoteAuthor = quote[1];
    $('.text').text(quoteText);
    $('.author').text("~"+quoteAuthor);
    $('.test').text();
    
    if(quoteText.length > 135){
        var reducedQuote = quoteText.slice(0,136);
        reducedQuote+= "..."
        quoteText = reducedQuote;
    }
    $('#tweet').attr("href","https://twitter.com/intent/tweet?text="+quoteText+"")
}


$('#displayQuote').click(function(){
    generate();
});

$('a').attr('target', '_blank');