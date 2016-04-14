var products = [

  {
    name: "BazooK-9",
    description: "The BazooK-9 launches your dogs ball so you don't have to throw your arm out.",
    price: "$19.99",
    URL: "images/bazooK-9.jpg"
  },

  {
    name: "101 Dog Tricks",
    description: "101 tricks that your dog can do to make your life easier.",
    price: "$9.99",
    URL: "images/dogtricks101.jpg"
  },

  {
    name: "Dog toys for humans",
    description: "Tired of watching your dog have fun with his toys? This line of products allows you to play like your dog.",
    price: "$5.99",
    URL: "images/humans.jpg"
  },

  {
    name: "Dog to Japanese",
    description: "With this handy dandy little translator teach your dog to speak Japanse.",
    price: "$39.99",
    URL: "images/japanese.jpg"
  },

  {
    name: "Dog Lips",
    description: "Does your dog give you wet kisses? Give them a new set of lips so your face doesn't have to have slobber all over it.",
    price: "$7.99",
    URL: "images/lips.jpg"
  },

  {
    name: "Dog Moustache",
    description: "Does your dog need a handlebar 'stache? Here's your answer!",
    price: "$12.99",
    URL: "images/moustache.jpg"
  },

  {
    name: "The Pony",
    description: "The pony is for any small dog that wants to ride bareback.",
    price: "$39.99",
    URL: "images/pony.jpg"
  },

  {
    name: "The Tongue",
    description: "Ever want your dog to stick his tongue out at you, well now you can with 'The Tongue'",
    price: "$16.99",
    URL: "images/tongue.jpg"
  }
];

var productsElements =  document.getElementById("product-content");

for (var i = 0; i < products.length; i++) {
  var currentProduct = products[i];

  productsElements.innerHTML +=
  '<div class="single-card">' +
    "<img src=\"" + currentProduct.URL + "\">" +
    "<div class=\"product-details\"><h2>" + currentProduct.name + "</h2>" +
    "<div class=\"product-desc\"><p>" + currentProduct.description + "</p></div>" +
    "<p class=\"product-price\">" + currentProduct.price + "</p></div>" +
  "</div>";
}
