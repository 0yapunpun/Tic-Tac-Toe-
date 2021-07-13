// Called when any square is clicked
function clickSquare(square){

  // Comprobar movimiento del jugador es valido y luego lo escribe en el elemento
  if (document.querySelector("#square"+square).textContent == ""){
    document.querySelector("#square"+square).textContent = "x";
  } else {
    return
  }

  // Set a timeout for the call of each function for a better experience 
  // Calc computer move and the end of the round
   computer_func(square);
  
  // Called after each movement the evaluate if there is a winner or a tie
  setTimeout(function() {
    calc_winner();
  },100) 
}

// Called to clean display
function cleanDisplay() {
  for (var i = 1; i < 10; i++) {
    document.querySelector("#square"+i).textContent = "";
  }
}

// Called to calculate if there is any winner or its a tie
function calc_winner() {
  
  let s1 = document.querySelector("#square1").textContent,
      s2 = document.querySelector("#square2").textContent,
      s3 = document.querySelector("#square3").textContent,
      s4 = document.querySelector("#square4").textContent,
      s5 = document.querySelector("#square5").textContent,
      s6 = document.querySelector("#square6").textContent,
      s7 = document.querySelector("#square7").textContent,
      s8 = document.querySelector("#square8").textContent,
      s9 = document.querySelector("#square9").textContent;

  if ((s1 == "x" && s2 == "x" && s3 == "x")||
      (s2 == "x" && s5 == "x" && s8 == "x")||
      (s1 == "x" && s4 == "x" && s7 == "x")||
      (s7 == "x" && s8 == "x" && s9 == "x")||
      (s9 == "x" && s6 == "x" && s3 == "x")||
      (s4 == "x" && s5 == "x" && s6 == "x")||
      (s1 == "x" && s5 == "x" && s9 == "x")||
      (s3 == "x" && s5 == "x" && s7 == "x")) {
        alert("player X win!!!");
        cleanDisplay();

  } else if ((s1 == "o" && s2 == "o" && s3 == "o")||
             (s2 == "o" && s5 == "o" && s8 == "o")||
             (s1 == "o" && s4 == "o" && s7 == "o")||
             (s7 == "o" && s8 == "o" && s9 == "o")||
             (s9 == "o" && s6 == "o" && s3 == "o")||
             (s4 == "o" && s5 == "o" && s6 == "o")||
             (s1 == "o" && s5 == "o" && s9 == "o")||
             (s3 == "o" && s5 == "o" && s7 == "o")){
        alert("player O win!!!");
        cleanDisplay();
  } else {
  
  // Calc if its a tie
    if (s1 != "" && s2 != "" && s3 != "" && s4 != "" && s5 != "" && s6 != "" && s7 != "" && s8 != "" && s9 != "" ) {
      alert("Its a tie");
      cleanDisplay();
    }  
  }
}

// Called to write pseudo ramdon computer choice
function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computer_func(square) {
  // Calc computer choice
  let count = 0;
  while (true) {
    count += 1;
    let computer_choice = getRandomInt();
    // alert(computer_choice)
    if (document.querySelector("#square"+computer_choice).textContent == ""){
      document.querySelector("#square"+computer_choice).textContent = "o";
      break;
    // Necesario para matar el ciclo en la ultima iteracion luego de comprobar 30 veces si hay espacio disponible
    // Podría generar un bug, pero la probabilidades son bajisimas.
    } else if (count == 30){
      break
    }
  }
}