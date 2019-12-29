var new_user_score = 0
var new_comp_score = 0
var rps_list = ['Rock', 'Paper', 'Scisors']

function UsrPlayed(input) {
  document.getElementById("usr_played").innerHTML = 'You played: ' + input.fontcolor('#f5e97f')

  var random_rps = rps_list[Math.floor(Math.random() * rps_list.length)];
  document.getElementById("comp_played").innerHTML = 'And the computer played: ' + random_rps.fontcolor('#f5e97f')

  if (input == random_rps) {
    document.getElementById("win_lose").innerHTML = 'Its a draw';
  }

  else if (input == 'Rock' && random_rps == 'Scisors') {
    document.getElementById("win_lose").innerHTML = ('You Won').fontcolor('green');
    new_user_score += 1
    document.getElementById("user_score").innerHTML = new_user_score;
  }

  else if (input == 'Rock' && random_rps == 'Paper') {
    document.getElementById("win_lose").innerHTML = ('You Lost').fontcolor('red');
    new_comp_score += 1
    document.getElementById("comp_score").innerHTML = new_comp_score;
  }

  else if (input == 'Scisors' && random_rps == 'Paper') {
    document.getElementById("win_lose").innerHTML = ('You Won').fontcolor('green');
    new_user_score += 1
    document.getElementById("user_score").innerHTML = new_user_score;
  }

  else if (input == 'Scisors' && random_rps == 'Rock') {
    document.getElementById("win_lose").innerHTML = ('You Lost').fontcolor('red');
    new_comp_score += 1
    document.getElementById("comp_score").innerHTML = new_comp_score;
  }

  else if (input == 'Paper' && random_rps == 'Scisors') {
    document.getElementById("win_lose").innerHTML = ('You Lost').fontcolor('red');
    new_comp_score += 1
    document.getElementById("comp_score").innerHTML = new_comp_score;
  }

  else if (input == 'Paper' && random_rps == 'Rock') {
    document.getElementById("win_lose").innerHTML = ('You Won').fontcolor('green');
    new_user_score += 1
    document.getElementById("user_score").innerHTML = new_user_score;
  }
}
