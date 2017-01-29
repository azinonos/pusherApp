// Initialize an App Object with our App ID
var app = new PusherPlatform.App({
  appId: '4eec28f2-70df-4cbd-a65a-ef8198cad300',
});

// Subscribe to a feed
var myFeed = app.feed('playground');

myFeed.subscribe({
  onOpen: () => console.log('Connection established'),
  onItem: item => {
  	console.log('Item:', item)
  	if (item.body.user != "" && item.body.comment != ""){
  		document.getElementById("error").innerHTML = "";
	  	var feed = document.getElementById("feed-field");
	  	feed.innerHTML += "<div class=\"newEntry\"><p><strong>" + item.body.user + ": </strong>";
	  	feed.innerHTML += item.body.comment + "</p></div>";
  	} else {
  		document.getElementById("error").innerHTML = "<p>Are you forgetting something?</p>";
  	}
  },
  onError: error => console.error('Error:', error),
});

// Apend a new item to the feed
var button = document.getElementById("submit-button");
button.onclick = function() {
   var user =  document.getElementById("username-field").value;
   var comment =  document.getElementById("comment-field").value;
   var post = {"user":user, "comment":comment};
   
   // Clear fields
   document.getElementById("username-field").value = "";
   document.getElementById("comment-field").value = "";

   // Send Post
   myFeed.append(post)
  .then(response => console.log('Success:', response))
  .catch(err => console.error('Error:', err));
}