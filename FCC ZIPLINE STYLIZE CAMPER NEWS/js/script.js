url = 'http://www.freecodecamp.com/news/hot';

$.getJSON(url,function(data){
    NumberOfHotStories = (data.length);
    
    
    for(var a=0; a<100; a++){        
        headlineLength = data[a].headline.length;
        headline = data[a].headline;
        if(headlineLength > 49){
            headline = headline.slice(0,46);
            headline+= '...';
        }
        rank = data[a].rank;
        dateP = new Date(data[a].timePosted);
        Localdate = dateP.toDateString();
        author = data[a].author.username;
        userimage = data[a].author.picture;
        storyimage = data[a].image;
        if(storyimage === ""){
            if(userimage != ""){
                    storyimage = userimage; 
                }else{
                    storyimage = 'http://brianemory.com/wp-content/uploads/2015/08/free-code-camp.png';
                }                
            }
        upvotesNumber = data[a].upVotes.length;
        storylink = data[a].link;
        $('.stories').append('<div class="story left">   <div class="storyImage">    <img src="'+storyimage+'" alt="story image" ></div> <h1><a target="_blank" href="'+storylink+'">'+headline+'</a></h1>   <div class="userdetails"><p class="user">By '+author+'</p><img class="user2" src="'+userimage+'" alt="user image"></div><p>Posted on '+Localdate+'</p><hr>   <div class="icons"><i data-toggle="tooltip" title="User Rank" class="fa fa-user">'+rank+'</i><i data-toggle="tooltip" title="Number Of Upvotes" class="fa fa-thumbs-o-up">'+upvotesNumber+'</i></div>     </div>');
    }
});