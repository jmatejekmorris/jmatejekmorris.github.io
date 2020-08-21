window.cube_one_rotation = 0;
window.cube_two_rotation = 0;
window.cube_three_rotation = 0;

window.onload = function() {

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


};
