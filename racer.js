populateTrack(document.getElementById("player1_strip"));
populateTrack(document.getElementById("player2_strip"));


function populateTrack(player_strip) {
  for (var i=0; i<20; i++) {
    var td = document.createElement('td');
    td.classList.add('inactive');
    player_strip.appendChild(td);
  }
}

var track1 = document.getElementById('player1_strip')
var track2 = document.getElementById('player2_strip')
var racer1 = track1.children;
var racer2 = track2.children;
var i_1 = 0
var i_2 = 0
var number = document.querySelector("#counter");
function move(e) {
  if (number.innerHTML === "0") {

    if (e.keyCode === 80) {
      racer1[i_1].className = 'inactive';
      racer1[i_1+1].className = 'active';
      i_1 += 1
    }
    if (e.keyCode === 81) {
      racer2[i_2].className = 'inactive';
      racer2[i_2+1].className = 'active';
      i_2 += 1
    }
    finish()
  }
}

var finish = function() {
  if (racer1[20].className == 'active') {
    alert("racer 1 Wins");
  }

  else if (racer2[20].className == 'active') {
    alert("racer 2 Wins");
  }
}

var reload = function() {
  location.reload();
}

var update_countdown = function() {
    var number = document.querySelector("#counter");
    number.innerHTML -= 1;
  }


var countdown = function() {
    setTimeout(update_countdown, 1000);
    setTimeout(update_countdown, 2000);
    setTimeout(update_countdown, 3000);
}

window.addEventListener("keyup", move)
document.querySelector("input").addEventListener("click", reload)
countdown()


