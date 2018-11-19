function incrementPlayerScore(player, opponent){
              let scoresArray = [0, 15, 30, 40, 'advantage', 'winner']
              let currentScore = scoresArray.indexOf(player.points);
              let newScore = scoresArray[currentScore + 1];
              player.points = newScore;
              //console.log(newScore);

              if (player.points == 40 && opponent.points == 40 ){
                return 'Both players have 40 points, the result of this match is deuce!';
              }

            if (player.points == 'winner'){
                return player.name + ' is the winner!';
              }

              if (opponent.points == 'winner'){
                return opponent.name + ' is the winner!';
              }

              if (player.points == 'advantage' && opponent.points !== 40){
                let newScore = scoresArray[currentScore + 1];
                player.points = newScore;
                console.log(firstPlayer, secondPlayer);
                return player.name + ' is the winner!';
              }

              if (opponent.points == 'advantage'){
                opponent.points = scoresArray[3]
                return player.name + ' now has ' + player.points + ' points and ' + opponent.name + ' has ' + opponent.points + ' points!';
              }

              else {
                return player.name + ' now has ' + player.points + ' points and ' + opponent.name + ' has ' + opponent.points + ' points!';
              }
  }

function testResultMatchesExpected(expected, result){
    console.log(result);

    if (result === expected){
      return 'Pass';
    }

    else {
      return 'Fail';
    }
  }

function testWhenFirstPlayerScores(){
  var firstPlayer = {points: 0, name: 'First Player'};
  var secondPlayer = {points: 0, name: 'Second Player'};

  return testResultMatchesExpected('First Player now has 15 points and Second Player has 0 points!', incrementPlayerScore(firstPlayer, secondPlayer));
}

function testWhenSecondPlayerScores(){
  var firstPlayer = {points: 0, name: 'First Player'};
  var secondPlayer = {points: 0, name: 'Second Player'};

  return testResultMatchesExpected('Second Player now has 15 points and First Player has 0 points!', incrementPlayerScore(secondPlayer, firstPlayer));
}


function testWhenPlayersBothHaveForty(){
  var firstPlayer = { points: 30, name: 'First Player'};
  var secondPlayer = {points: 40, name: 'Second Player'};

  return testResultMatchesExpected('Both players have 40 points, the result of this match is deuce!', incrementPlayerScore(firstPlayer, secondPlayer));
}

function testWhenFirstPlayerWins(){
  var firstPlayer = { points: 'advantage', name: 'First Player'};
  var secondPlayer = {points: 0, name: 'Second Player'};

  return testResultMatchesExpected(firstPlayer.name + ' is the winner!', incrementPlayerScore(firstPlayer, secondPlayer));
}

function testWhenSecondPlayerWins(){
  var firstPlayer = { points: 0 , name: 'First Player'};
  var secondPlayer = {points: 'advantage', name: 'Second Player'};

  return testResultMatchesExpected(secondPlayer.name + ' is the winner!', incrementPlayerScore(secondPlayer, firstPlayer));
}


function runAllTests(){
testWhenFirstPlayerScores();
testWhenSecondPlayerScores();
testWhenPlayersBothHaveForty();
testWhenFirstPlayerWins();
testWhenSecondPlayerWins();
}

runAllTests();
