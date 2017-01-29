// Initialize an App Object with our App ID
var app = new PusherPlatform.App({
  appId: '4eec28f2-70df-4cbd-a65a-ef8198cad300',
});

// Subscribe to a feed
var myFeed = app.feed('playground');

myFeed.subscribe({
  onOpen: () => console.log('Connection established'),
  onItem: item => console.log('Item:', item),
  onError: error => console.error('Error:', error),
});

// Apend a new item to the feed
myFeed.append('Hello, world!')
  .then(response => console.log('Success:', response))
  .catch(err => console.error('Error:', err));

// You’re not limited to appending string values;
// you can also append objects, arrays and numbers.
myFeed.append({ yourKey: 'your value' })
  .then(response => console.log('Success:', response))
  .catch(err => console.error('Error:', err));