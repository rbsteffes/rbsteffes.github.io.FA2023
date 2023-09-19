reviews = [
    {
      "name": "Mike Jefferson",
      "rating": 5,
      "imageSrc": "/images/RyanSteffesPhotographer_small.jpg",
      "review": "Oh, man! When I first heard about Fluffernutter Whizbang! from www.FunkyFluffernutterWhizbang.com, I thought it was a joke. But just one week in and my life is already on a new trajectory. I can't believe how much joy this product brings me every day. Can't recommend it enough!"
    },
    {
      "name": "Sarah Thompson",
      "rating": 3,
      "imageSrc": "/images/RyanSteffesPhotographer_small.jpg",
      "review": "Only three days and I'm sold! At first, I chuckled at the name - Fluffernutter Whizbang? But the results? Absolutely no joke. My mornings have been transformed. Thank you, www.FunkyFluffernutterWhizbang.com for this little miracle!"
    },
    {
      "name": "Jake Miller",
      "rating": 5,
      "imageSrc": "/images/RyanSteffesPhotographer_small.jpg",
      "review": "It's been two months with my Fluffernutter Whizbang, and honestly, I can't remember life before it. It's that essential. The name might sound silly, but the benefits are profoundly serious. www.FunkyFluffernutterWhizbang.com, you've got a lifelong customer!"
    },
    {
      "name": "Emily Roberts",
      "rating": 5,
      "imageSrc": "/images/RyanSteffesPhotographer_small.jpg",
      "review": "Okay, so I've only had the Fluffernutter Whizbang for a few hours, but I HAD to leave a review. It's already making waves in my day-to-day routine. If you haven't been to www.FunkyFluffernutterWhizbang.com yet, you're missing out. Big time."
    },
    {
      "name": "Chris Johnson",
      "rating": 4,
      "imageSrc": "/images/RyanSteffesPhotographer_small.jpg",
      "review": "A full year with the Fluffernutter Whizbang and every day feels like the first! Whenever someone asks me about the secret to my happiness, I just point them to www.FunkyFluffernutterWhizbang.com. This product is the epitome of 'Don't judge a book by its cover' (or name)!"
    },
    {
      "name": "Lisa Williams",
      "rating": 4,
      "imageSrc": "/images/RyanSteffesPhotographer_small.jpg",
      "review": "Just five days in, and I'm already wondering how I ever managed without the Fluffernutter Whizbang. I was skeptical given the quirky name, but it's safe to say I'm now a huge fan! For anyone on the fence, just visit www.FunkyFluffernutterWhizbang.com and take the leap. Life-changing, to say the least!"
    }
  ]

  var current_index = 0;
  load_review(current_index);

  //Function 1: load_review(#)
  function load_review(newIndex)
  {
    // Take current index from reviews
    // Store the current index for later
    current_index = (newIndex<reviews.length && newIndex >=0)? newIndex: 0;

    // Display on screen
    
    // Set img src to profile image
    // jQuery version -> $("#profilePicture").src = 
    document.getElementById("profilePicture").src = reviews[current_index].imageSrc;
    // name to name
    document.getElementById("reviewName").innerText = reviews[current_index].name;
    // rating to stars
    //document.getElementById("reviewStars").innerText = reviews[current_index].rating;
    document.getElementById('reviewStars').innerHTML = "";
    
    let counter=0;
    while(counter< reviews[current_index].rating) 
    {
      // Display a star for each point of rating
      let star = `<img src="images/wt-torch.png" height=25 width=25>`;
      document.getElementById('reviewStars').innerHTML += star;
      counter++
    }
    
    // Review Text to Review Text
    document.getElementById("reviewText").innerText = reviews[current_index].review;
  }

  //Function 2: next_review
  function next_review()
  {
    // Adds one to review index, 
    current_index++;
    // sees if it's in the list
    /// wraps list if necessary
    if(current_index == reviews.length)
      current_index = 0;
    
    // load_review(new number)
    load_review(current_index);
  }


  //Function 3: prev_review
  function prev_review()
  {
    // Subtract one from current index
    current_index--;
    // See if it's in the list
    // wrap list if necessary
    if(current_index < 0)
      current_index = reviews.length - 1;

    // load_review(new number)
    load_review(current_index);
  }

  //Function 4: random_review
  function random_review()
  {
    // get a random number
    let newIndex = Math.floor(Math.random()*reviews.length);
    // load_review(new number)
    load_review(newIndex);
  }
