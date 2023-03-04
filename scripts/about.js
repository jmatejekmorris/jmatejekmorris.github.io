window.cube_one_rotation = 0;
window.cube_two_rotation = 0;
window.cube_three_rotation = 0;
window.cube_four_rotation = 0;
window.cube_five_rotation = 0;
window.cube_six_rotation = 0;


/* shuffle array used Fisher-Yates (aka Knuth) Shuffle */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



window.onload = function() {

  /* randomly assign images and texts to each cube face */
  cube_one_images = shuffle(["/images/about/Photo1A.jpeg", "/images/about/Photo1B.jpeg", "/images/about/Photo1C.jpeg", "/images/about/Photo1D.jpeg"]);

  cube_one_descriptions = {
    "/images/about/Photo1A.jpeg": "Posing with my siblings",
    "/images/about/Photo1B.jpeg": "Captured by a dragon",
    "/images/about/Photo1C.jpeg": "Playing at my grandparents’ house",
    "/images/about/Photo1D.jpeg": "Dreaming",
  };

  cube_one_alt = {
    "/images/about/Photo1A.jpeg": "Jimmy as a small child sitting on a bench between his brother Michael and sister Megan. All three are wearing matching overalls.",
    "/images/about/Photo1B.jpeg": "Jimmy around age seven in the arms of a dragon statue.",
    "/images/about/Photo1C.jpeg": "Jimmy at approximately four years old. Dressed in khaki overalls and running across his grandparents' lawn with a Donald Duck toy above his head.",
    "/images/about/Photo1D.jpeg": "A young Jimmy rests his head on his hands with a large grin on his face. He sits on his father's lap as his sister Megan and brother Michael look on from either side.",
  };

  var cube_one_face_one = document.getElementById('cube_one_face_one');
  cube_one_face_one.src = cube_one_images[0];
  cube_one_face_one.alt = cube_one_alt[cube_one_images[0]];
  cube_one_face_one.title = cube_one_descriptions[cube_one_images[0]];

  var cube_one_face_two = document.getElementById('cube_one_face_two');
  cube_one_face_two.src = cube_one_images[1];
  cube_one_face_two.alt = cube_one_alt[cube_one_images[1]];
  cube_one_face_two.title = cube_one_descriptions[cube_one_images[1]];

  var cube_one_face_three = document.getElementById('cube_one_face_three');
  cube_one_face_three.src = cube_one_images[2];
  cube_one_face_three.alt = cube_one_alt[cube_one_images[2]];
  cube_one_face_three.title = cube_one_descriptions[cube_one_images[2]];

  var cube_one_face_four = document.getElementById('cube_one_face_four');
  cube_one_face_four.src = cube_one_images[3];
  cube_one_face_four.alt = cube_one_alt[cube_one_images[3]];
  cube_one_face_four.title = cube_one_descriptions[cube_one_images[3]];



  cube_two_images = shuffle(["/images/about/Photo2A.jpeg", "/images/about/Photo2B.jpeg", "/images/about/Photo2C.jpeg", "/images/about/Photo2D.jpeg"]);

  cube_two_descriptions = {
    "/images/about/Photo2A.jpeg": "First Day of School pose",
    "/images/about/Photo2B.jpeg": "Joy",
    "/images/about/Photo2C.jpeg": "New Year, 2000!",
    "/images/about/Photo2D.jpeg": "Lost Boy in Peter Pan"
  };

  cube_two_alt= {
    "/images/about/Photo2A.jpeg": "A young Jimmy stands by the front door of his house wearing a pair of overall shorts. He clutches the door handle and strikes a pose for his traditional First Day of School photo.",
    "/images/about/Photo2B.jpeg": "A young Jimmy sits on the stairs with his brother Michael and sister Megan. They are wearing swimsuits and have huge grins on their faces.",
    "/images/about/Photo2C.jpeg": "A photo of Jimmy and his family taken at exactly midnight on January 1, 2000. His family are all celebrating as they watch the TV. Shown from left to right are Jimmy, his father, brother Brian, his mother, brother Michael, sister Megan, and brother Robert.",
    "/images/about/Photo2D.jpeg": "Jimmy from a middle school play, Peter Pan. He is dressed as a Lost Boy in a ragged outfit with messy hair and dirt smudged across his face."
  };

  var cube_two_face_one = document.getElementById('cube_two_face_one');
  cube_two_face_one.src = cube_two_images[0];
  cube_two_face_one.alt = cube_two_alt[cube_two_images[0]];
  cube_two_face_one.title = cube_two_descriptions[cube_two_images[0]];

  var cube_two_face_two = document.getElementById('cube_two_face_two');
  cube_two_face_two.src = cube_two_images[1];
  cube_two_face_two.alt = cube_two_alt[cube_two_images[1]];
  cube_two_face_two.title = cube_two_descriptions[cube_two_images[1]];

  var cube_two_face_three = document.getElementById('cube_two_face_three');
  cube_two_face_three.src = cube_two_images[2];
  cube_two_face_three.alt = cube_two_alt[cube_two_images[2]];
  cube_two_face_three.title = cube_two_descriptions[cube_two_images[2]];

  var cube_two_face_four = document.getElementById('cube_two_face_four');
  cube_two_face_four.src = cube_two_images[3];
  cube_two_face_four.alt = cube_two_alt[cube_two_images[3]];
  cube_two_face_four.title = cube_two_descriptions[cube_two_images[3]];



  cube_three_images = shuffle(["/images/about/Photo3A.jpeg", "/images/about/Photo3B.jpeg", "/images/about/Photo3C.jpeg", "/images/about/Photo3D.jpeg"]);

  cube_three_descriptions = {
    "/images/about/Photo3A.jpeg": "Heidi",
    "/images/about/Photo3B.jpeg": "Brothers!",
    "/images/about/Photo3C.jpeg": "Budgies at the Franklin Park Zoo",
    "/images/about/Photo3D.jpeg": "Wedding photo by John LoConte"
  };

  cube_three_alt = {
    "/images/about/Photo3A.jpeg": "Jimmy in a winter coat standing in a patch of evergreen trees with his parents' beloved dog, a Boston Terrier named Heidi.",
    "/images/about/Photo3B.jpeg": "Jimmy, his husband, and his brothers are dressed in tuxedos and holding drinks in celebration of his sister's wedding. Pictured are brother Robert, brother Brian, Jimmy, husband Scott, and brother Michael, in that order.",
    "/images/about/Photo3C.jpeg": "Jimmy looking very excited and maybe a little afraid as a yellow and green budgie bird has landed on his hand as part of the interactive exhibit at the Franklin Park Zoo.",
    "/images/about/Photo3D.jpeg": "Jimmy and Scott at their wedding at the Hotel Marlowe on January 23, 2016. The photo shows Jimmy and Scott facing one another standing outside in the snow in front of an ornate sculpture that shines a blue light onto the scene. Photo taken by John LoConte."
  };

  var cube_three_face_one = document.getElementById('cube_three_face_one');
  cube_three_face_one.src = cube_three_images[0];
  cube_three_face_one.alt = cube_three_alt[cube_three_images[0]];
  cube_three_face_one.title = cube_three_descriptions[cube_three_images[0]];

  var cube_three_face_two = document.getElementById('cube_three_face_two');
  cube_three_face_two.src = cube_three_images[1];
  cube_three_face_two.alt = cube_three_alt[cube_three_images[1]];
  cube_three_face_two.title = cube_three_descriptions[cube_three_images[1]];

  var cube_three_face_three = document.getElementById('cube_three_face_three');
  cube_three_face_three.src = cube_three_images[2];
  cube_three_face_three.alt = cube_three_alt[cube_three_images[2]];
  cube_three_face_three.title = cube_three_descriptions[cube_three_images[2]];

  var cube_three_face_four = document.getElementById('cube_three_face_four');
  cube_three_face_four.src = cube_three_images[3];
  cube_three_face_four.alt = cube_three_alt[cube_three_images[3]];
  cube_three_face_four.title = cube_three_descriptions[cube_three_images[3]];



  cube_four_images = shuffle(["/images/about/Photo4A.jpeg", "/images/about/Photo4B.jpeg", "/images/about/Photo4C.jpeg", "/images/about/Photo4D.jpeg"]);

  cube_four_descriptions = {
    "/images/about/Photo4A.jpeg": "Hawaiian rainforest",
    "/images/about/Photo4B.jpeg": "Lady and the Tramp (and the plate of spaghetti)",
    "/images/about/Photo4C.jpeg": "Sibling happy hour",
    "/images/about/Photo4D.jpeg": "Reindeer hug at Disney"
  };

  cube_four_alt = {
    "/images/about/Photo4A.jpeg": "Jimmy and Scott in a Hawaiian rainforest. This picture, from their honeymoon in January 2016, shows lush green foliage and a waterfall trickling in the background.",
    "/images/about/Photo4B.jpeg": "Jimmy and his husband Scott dressed as Lady and the Tramp for Halloween. Jimmy (as the Tramp) holds their dog, a Poodle Pomeranian named Rudy who is dressed as a plate of spaghetti. A piece of yarn spaghetti extends from Rudy's costume to the mouths of both Jimmy and Scott.",
    "/images/about/Photo4C.jpeg": "Jimmy and his four siblings at Baseball Tavern in Boston sharing a drink. Shown from left to right brothers Robert, Brian, Michael, sister Megan, and Jimmy.",
    "/images/about/Photo4D.jpeg": "A very excited Jimmy is hugging a reindeer costumed character from the Walt Disney World Christmas party."
  };

  var cube_four_face_one = document.getElementById('cube_four_face_one');
  cube_four_face_one.src = cube_four_images[0];
  cube_four_face_one.alt = cube_four_alt[cube_four_images[0]];
  cube_four_face_one.title = cube_four_descriptions[cube_four_images[0]];

  var cube_four_face_two = document.getElementById('cube_four_face_two');
  cube_four_face_two.src = cube_four_images[1];
  cube_four_face_two.alt = cube_four_alt[cube_four_images[1]];
  cube_four_face_two.title = cube_four_descriptions[cube_four_images[1]];

  var cube_four_face_three = document.getElementById('cube_four_face_three');
  cube_four_face_three.src = cube_four_images[2];
  cube_four_face_three.alt = cube_four_alt[cube_four_images[2]];
  cube_four_face_three.title = cube_four_descriptions[cube_four_images[2]];

  var cube_four_face_four = document.getElementById('cube_four_face_four');
  cube_four_face_four.src = cube_four_images[3];
  cube_four_face_four.alt = cube_four_alt[cube_four_images[3]];
  cube_four_face_four.title = cube_four_descriptions[cube_four_images[3]];



  cube_five_images = shuffle(["/images/about/Photo5A.jpeg", "/images/about/Photo5B.jpeg", "/images/about/Photo5C.jpeg", "/images/about/Photo5D.jpeg"]);

  cube_five_descriptions = {
    "/images/about/Photo5A.jpeg": "Pride 2019",
    "/images/about/Photo5B.jpeg": "Dogs on the 4th",
    "/images/about/Photo5C.jpeg": "Meeting a Velociraptor",
    "/images/about/Photo5D.jpeg": "Blizzard in Boston"
  };

  cube_five_alt = {
    "/images/about/Photo5A.jpeg": "Jimmy and his husband Scott at the 2019 Boston Pride parade. Jimmy and Scott wear purple custom t-shirts featuring Mr. Ratburn and his husband from Arthur. In the background, there is a rainbow arch of balloons.",
    "/images/about/Photo5B.jpeg": "Jimmy and Scott on the 4th of July holding a pair of dogs, their poodle-Pomeranian Rudy and Jimmy's sister's dog, Bentley, a yellow lab.",
    "/images/about/Photo5C.jpeg": "Jimmy and his friends greet a screaming velociraptor at Universal Studios in Orlando. Shown from left to right are Jimmy's friend Courtney, Jimmy, the velociraptor, husband Scott, and friend Marie.",
    "/images/about/Photo5D.jpeg": "A selfie of Jimmy and his husband outside in a blizzard. Their eyebrows are frozen with snow, but they smile through the cold."
  };

  var cube_five_face_one = document.getElementById('cube_five_face_one');
  cube_five_face_one.src = cube_five_images[0];
  cube_five_face_one.alt = cube_five_alt[cube_five_images[0]];
  cube_five_face_one.title = cube_five_descriptions[cube_five_images[0]];

  var cube_five_face_two = document.getElementById('cube_five_face_two');
  cube_five_face_two.src = cube_five_images[1];
  cube_five_face_two.alt = cube_five_alt[cube_five_images[1]];
  cube_five_face_two.title = cube_five_descriptions[cube_five_images[1]];

  var cube_five_face_three = document.getElementById('cube_five_face_three');
  cube_five_face_three.src = cube_five_images[2];
  cube_five_face_three.alt = cube_five_alt[cube_five_images[2]];
  cube_five_face_three.title = cube_five_descriptions[cube_five_images[2]];

  var cube_five_face_four = document.getElementById('cube_five_face_four');
  cube_five_face_four.src = cube_five_images[3];
  cube_five_face_four.alt = cube_five_alt[cube_five_images[3]];
  cube_five_face_four.title = cube_five_descriptions[cube_five_images[3]];



  cube_six_images = shuffle(["/images/about/Photo6A.jpeg", "/images/about/Photo6B.jpeg", "/images/about/Photo6C.jpeg", "/images/about/Photo6D.jpeg"]);

  cube_six_descriptions = {
    "/images/about/Photo6A.jpeg": "Book launch day!",
    "/images/about/Photo6B.jpeg": "Poolside",
    "/images/about/Photo6C.jpeg": "Zion National Park",
    "/images/about/Photo6D.jpeg": "Finishing a marathon"
  };

  cube_six_alt = {
    "/images/about/Photo6A.jpeg": "Jimmy stands in the Harvard book store holding up a copy of his debut novel, My Ex-Imaginary Friend on its release date. He is masked and wearing a red plaid coat. Hard to see behind the mask, but he is very proud.",
    "/images/about/Photo6B.jpeg": "A selfie of Jimmy wearing sunglasses with windswept hair. It is a clear sunny day. In the background is a beautiful pool surrounded by a stone floor.",
    "/images/about/Photo6C.jpeg": "A photo of Jimmy, husband Scott, and brother Brian in Zion National Park. The picture shows our full bodies standing in front of lush green foliage with a rocky mountaintop far in the distance.",
    "/images/about/Photo6D.jpeg": "A photo of Jimmy crossing the finish line at the Charles River Marathon. The number pinned to his chest is 2221 (the release date of My Ex-Imaginary Friend). He holds a water bottle. He is very tired."
  };

  var cube_six_face_one = document.getElementById('cube_six_face_one');
  cube_six_face_one.src = cube_six_images[0];
  cube_six_face_one.alt = cube_six_alt[cube_six_images[0]];
  cube_six_face_one.title = cube_six_descriptions[cube_six_images[0]];

  var cube_six_face_two = document.getElementById('cube_six_face_two');
  cube_six_face_two.src = cube_six_images[1];
  cube_six_face_two.alt = cube_six_alt[cube_six_images[1]];
  cube_six_face_two.title = cube_six_descriptions[cube_six_images[1]];

  var cube_six_face_three = document.getElementById('cube_six_face_three');
  cube_six_face_three.src = cube_six_images[2];
  cube_six_face_three.alt = cube_six_alt[cube_six_images[2]];
  cube_six_face_three.title = cube_six_descriptions[cube_six_images[2]];

  var cube_six_face_four = document.getElementById('cube_six_face_four');
  cube_six_face_four.src = cube_six_images[3];
  cube_six_face_four.alt = cube_six_alt[cube_six_images[3]];
  cube_six_face_four.title = cube_six_descriptions[cube_six_images[3]];




  /* css code for cube one */
  var cube_one = document.getElementById('cube_one');

  cube_one.onclick = function() {

    window.cube_one_rotation += 90;

    var cube_one_container = document.getElementById('cube_one_container');

    var t_str = 'rotateY(' + window.cube_one_rotation + 'deg)';

    cube_one.classList.add('spin');

    cube_one.style.transform = t_str;
    cube_one.style.webkitTransform = t_str;
    cube_one.style.mozTransform = t_str;

    cube_one_container.classList.add('blur');

    setTimeout(function() {
      cube_one_container.classList.remove('blur');
    }, 250);
  };

  /* css code for cube two */
  var cube_two = document.getElementById('cube_two');

  cube_two.onclick = function() {

    window.cube_two_rotation += 90;

    var cube_two_container = document.getElementById('cube_two_container');

    var t_str = 'rotateY(' + window.cube_two_rotation + 'deg)';

    cube_two.classList.add('spin');

    cube_two.style.transform = t_str;
    cube_two.style.webkitTransform = t_str;
    cube_two.style.mozTransform = t_str;

    cube_two_container.classList.add('blur');

    setTimeout(function() {
      cube_two_container.classList.remove('blur');
    }, 250);
  };

  /* css code for cube three */
  var cube_three = document.getElementById('cube_three');

  cube_three.onclick = function() {

    window.cube_three_rotation += 90;

    var cube_three_container = document.getElementById('cube_three_container');

    var t_str = 'rotateY(' + window.cube_three_rotation + 'deg)';

    cube_three.classList.add('spin');

    cube_three.style.transform = t_str;
    cube_three.style.webkitTransform = t_str;
    cube_three.style.mozTransform = t_str;

    cube_three_container.classList.add('blur');

    setTimeout(function() {
      cube_three_container.classList.remove('blur');
    }, 250);
  };

  /* css code for cube four */
  var cube_four = document.getElementById('cube_four');

  cube_four.onclick = function() {

    window.cube_four_rotation += 90;

    var cube_four_container = document.getElementById('cube_four_container');

    var t_str = 'rotateY(' + window.cube_four_rotation + 'deg)';

    cube_four.classList.add('spin');

    cube_four.style.transform = t_str;
    cube_four.style.webkitTransform = t_str;
    cube_four.style.mozTransform = t_str;

    cube_four_container.classList.add('blur');

    setTimeout(function() {
      cube_four_container.classList.remove('blur');
    }, 250);
  };

  /* css code for cube five */
  var cube_five = document.getElementById('cube_five');

  cube_five.onclick = function() {

    window.cube_five_rotation += 90;

    var cube_five_container = document.getElementById('cube_five_container');

    var t_str = 'rotateY(' + window.cube_five_rotation + 'deg)';

    cube_five.classList.add('spin');

    cube_five.style.transform = t_str;
    cube_five.style.webkitTransform = t_str;
    cube_five.style.mozTransform = t_str;

    cube_five_container.classList.add('blur');

    setTimeout(function() {
      cube_five_container.classList.remove('blur');
    }, 250);
  };

  /* css code for cube six */
  var cube_six = document.getElementById('cube_six');

  cube_six.onclick = function() {

    window.cube_six_rotation += 90;

    var cube_six_container = document.getElementById('cube_six_container');

    var t_str = 'rotateY(' + window.cube_six_rotation + 'deg)';

    cube_six.classList.add('spin');

    cube_six.style.transform = t_str;
    cube_six.style.webkitTransform = t_str;
    cube_six.style.mozTransform = t_str;

    cube_six_container.classList.add('blur');

    setTimeout(function() {
      cube_six_container.classList.remove('blur');
    }, 250);
  };

};
