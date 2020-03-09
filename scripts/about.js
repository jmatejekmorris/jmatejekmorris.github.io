window.COOLROTATION = 0;

window.TICKLEOFFSET = 1000;

window.onload = function() {

  var phone_one_cube = document.getElementById('phone_one_cube');

  phone_one_cube.onclick = function() {

    clearTimeout(window.TICKLEINTERVAL_A);
    clearTimeout(window.TICKLEINTERVAL_B);
    clearTimeout(window.TICKLEINTERVAL_C);
    clearInterval(window.TICKLEINTERVAL);

    window.COOLROTATION += 90;

    phone_one_cube.classList.add('spin');

    var photo_one_container = document.getElementById('photo_one_container');

    var t_str = 'translateX(40px) rotateY(' + window.COOLROTATION + 'deg) translateX(-40px)';
    phone_one_cube.style.transform = t_str;
    phone_one_cube.style.webkitTransform = t_str;
    phone_one_cube.style.mozTransform = t_str;

    photo_one_container.classList.add('blur');

    setTimeout(function() {
      photo_one_container.classList.remove('blur');
    }, 250);

  };

  window.TICKLEINTERVAL = setInterval(function() {

    window.TICKLEINTERVAL_A = setTimeout(function(){
      var t_str = 'translateX(40px) rotateY(7deg) translateX(-40px)';
      phone_one_cube.style.transform = t_str;
      phone_one_cube.style.webkitTransform = t_str;
      phone_one_cube.style.mozTransform = t_str;


    },TICKLEOFFSET+1000);

    window.TICKLEINTERVAL_B = setTimeout(function(){

      var t_str = 'translateX(40px) rotateY(0deg) translateX(-40px)';
      phone_one_cube.style.transform = t_str;
      phone_one_cube.style.webkitTransform = t_str;
      phone_one_cube.style.mozTransform = t_str;            

    },TICKLEOFFSET+1500);

    window.TICKLEINTERVAL_C = setTimeout(function(){
      
      var t_str = 'translateX(40px) rotateY(0deg) translateX(-40px)';
      phone_one_cube.style.transform = t_str;
      phone_one_cube.style.webkitTransform = t_str;
      phone_one_cube.style.mozTransform = t_str;            

    },TICKLEOFFSET+2000);        

  }, 30000);


};