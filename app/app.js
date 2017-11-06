// Code goes here

(function() {
  var app = angular.module('comicStore', ['store-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.currentImageChange = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = comics;
  });


  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  var comics = [{
    name: 'Avengers #1',
    description: "CGC 6.5 Signed by Stan Lee (1st Print)",
    publisher: 'Marvel Comics',
    price: 2036,
    createdby: 'Stan Lee | Jack Kirby',
    artist: 'Jack Kirby',
    firstappearance: 'The Avengers',
    date: 'September 1963',
    images: [
      "img/avengersStanLeesigned.JPG",
      "img/avengersStanback.jpg",
      "img/s-l1600.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "I'll wait for Cap in #4!",
      author: "steve@nobuckyno.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Thor is lame.",
      author: "tim@hater.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Uncanny X-Men #94',
    description: "CGC 8.5 Signed by Stan Lee",
    publisher: 'Marvel Comics',
    price: 3800,
    createdby: 'X-Men: Stan Lee | Jack Kirby New X-Men: Chris Claremont | Len Wein',
    artist: 'Chris Claremont | Dave Cockrum',
    firstappearance: 'The New X-Men',
    date: 'August 1975',
    images: [
      "img/x-men94crop.jpg",
      "img/x-men94backcrop.jpg",
      "img/x-men94Stansign_crop.jpg",
    ],
    reviews: [{
      stars: 3,
      body: "At least they tried to make it diverse. Then everyone who wasn't white split.",
      author: "stanwho?@dc.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Yaaas...Bansheee!",
      author: "irisheyes@sonicscream.com",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Incredible Hulk #181',
    description: "CGC 9.8 Signed by Stan Lee and Len Wein ",
    publisher: 'Marvel Comics',
    price: 24995,
    createdby: 'Hulk: Stan Lee | Jack Kirby   Wolverine: Roy Thomas | Len Wein | John Romita Sr.',
    artist: 'John Romita Sr. | Herb Trimpe',
    firstappearance: 'Wolverine',
    date: 'October 1974',
    images: [
      "img/hulk_wolverine.jpg",
      "img/hulk_wolverine2.jpg",
      "img/hulk_wolverine_signature.jpg",
    ],
    reviews: [{
      stars: 3,
      body: "Nice book bub.",
      author: "logan@hurtseverytime.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "That suit is ridiculous.",
      author: "hjackman@tootallfortherole.com",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Fantastic Four #52',
    description: "CGC 9.0 Signed by Stan Lee and Joe Sinnott",
    publisher: 'Marvel Comics',
    price: 4994,
    createdby: 'Stan Lee | Jack Kirby',
    artist: 'Jack Kirby | Joe Sinnott',
    firstappearance: 'Black Panther',
    date: 'July 1966',
    images: [
      "img/ff_blackpanther_cover.jpg",
      "img/ff_blackpanther_back.jpg",
      "img/ff_blackpanther_cover_signatures.jpg",
    ],
    reviews: [{
      stars: 3,
      body: "Ok, I take back what I said about trying.",
      author: "lukecage@wasborderlineexploitataionthough.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "BP rocks.",
      author: "kickedcapsarse@invisiblecity.com",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Daredevil #158',
    description: "CGC 9.0 Signed by Stan Lee",
    publisher: 'Marvel Comics',
    price: 471.99,
    createdby: 'Stan Lee | Jack Kirby | Bill Everett',
    artist: 'Frank Miller',
    firstappearance: 'Artwork from Frank Miller',
    date: 'May 1979',
    images: [
      "img/daredevil.jpg",
      "img/daredevil_Stan.jpg",
      "img/daredeviltop.jpg"
    ],
    reviews: [{
      stars: 1,
      body: "Ben Affleck. No.",
      author: "scarredforlife@mattm.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Frank. Effin. Miller.",
      author: "artguy@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "How the eff did he not hear him coming...",
      author: "supersenses@airdevil.com",
      createdOn: 1397490980837
    }]
  }];

})();
