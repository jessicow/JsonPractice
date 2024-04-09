
let contentGridElement = document.getElementById('contentGrid');

// Parallax library
var rellax;

let jsonDatabase = [
  {
    "title" : "Basic Bow",
    "picture_url" : "https://i.pinimg.com/564x/79/3c/0e/793c0e7205f7685307158cfba92880ea.jpg",
    "color" : "white",
    "description" : "a classic bow, not much to say",
   },
  {
    "title" : "Double Loop Bow",
    "picture_url" : "https://i.pinimg.com/736x/75/f0/62/75f0626fce0df318279465e7201aafb8.jpg",
    "color" : "white",
    "description" : "a bow...but it has two loops",
  },
  {
    "title" : "Extra Long Bow",
    "picture_url" : "https://i.pinimg.com/564x/a9/7f/da/a97fda3c5ca4748f028777198ec2f4a1.jpg",
    "color" : "white",
    "description" : "this bow's uneven length might trigger you",
  },
  {
    "title" : "Gingham Bow",
    "picture_url" : "https://i.pinimg.com/564x/d2/91/be/d291be8a34d0d7de735f8f5125eccbf2.jpg",
    "color" : "white",
    "description" : "picnic-core? either way this bow is liked by all",
  },
  {
    "title" : "Baby Bows",
    "picture_url" : "https://i.pinimg.com/736x/81/4f/ac/814fac9b6054fef5d91b80c57e5d66cb.jpg",
    "color": "white",
    "description" : "this bow was born yesterday",
  },
  {
    "title" : "Ballet Slipper Bows",
    "picture_url" : "https://i.pinimg.com/564x/bd/c8/f6/bdc8f6569d926ee8a8d630a6f4b57248.jpg",
    "color": "white",
    "description" : "quintessential coquette everything about it",
  },
  {
    "title" : "Pet The Dog Bow",
    "picture_url" : "https://i.pinimg.com/564x/9a/cc/3e/9acc3e7f72a93923368ca12dad352c1f.jpg",
    "color": "white",
    "description": "forget gingham, this is the best type of bow",
  },
  {
    "title" : "Cucumber Bow",
    "picture_url" : "https://i.pinimg.com/564x/aa/0d/a7/aa0da7715f7a0131be2944ffc3b95638.jpg",
    "color": "white",
    "description" : "somebody had too much time on their hands type bow"
  },
  {
    "title" : "Crunchy Bow",
    "picture_url" : "https://i.pinimg.com/736x/86/ff/ee/86ffee878e626703bb5d7d60e4ebd986.jpg",
    "color": "white",
    "description" : "somebody had EVEN MORE time on their hands type bow"
  },
  {
    "title" : "French Bow",
    "picture_url" : "https://i.pinimg.com/564x/2b/a4/67/2ba467d134707ba60d9d98a88f354224.jpg",
    "color": "white",
    "description" : "this one is impressive"
  },
  {
    "title" : "Cash Money Flow Type Bow",
    "picture_url" : "https://i.pinimg.com/736x/17/e9/8d/17e98d17cc6eebe8960ed39bb26c1c43.jpg",
    "color": "white",
    "description" : "this bow is universally loved"
  },
  {
    "title" : "Furball Bow",
    "picture_url" : "https://i.pinimg.com/736x/cd/0b/19/cd0b1925a0a15dfd614d04c233796ec7.jpg",
    "color": "white",
    "description" : "funny cat"
  },
  {
    "title" : "Tyler the Creator Bow",
    "picture_url" : "https://i.pinimg.com/736x/4a/a9/7f/4aa97fab54c6d8777d5f06dc8021cf34.jpg",
    "color": "white",
    "description" : "he really rocks this look"
  },
  {
    "title" : "Kanye West Bow",
    "picture_url" : "https://i.pinimg.com/736x/4d/da/eb/4ddaeb21fef35836300cbb7e4edd2f22.jpg",
    "color": "white",
    "description" : "he reall rocks this look too"
  },
  {
    "title" : "Cute Rat Bow",
    "picture_url" : "https://i.pinimg.com/736x/86/b8/75/86b87588029342c5a82eca261f5e1c5b.jpg",
    "color": "white",
    "description" : "I'm just a girl type bow"
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);  

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentSubhead = document.createElement("H4"); 
  newContentSubhead.classList.add('contentTitle');
  newContentSubhead.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentSubhead); 


  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}