document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
  
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})

function handleClick(event) {

   let square = event.target;
   let position = square.id;

  if (handleMove(position)){

    setTimeout(() => {
        alert("O Jogo Acabou \n O vencedor foi " + playerTime);
    }, 10);

  };

   updateSquares(position);

}


// updateSquares aqui ele só está fazendo atualização só naquele quadrado que está recebendo o click.
function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


// BOTÃO RESTART

let btn = document.querySelector("#btn")
btn.addEventListener('click', restart)


function restart(){
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.innerHTML = ""
    }) 

    board = ['', '', '', '', '', '', '', '', '']
    gameOver = false
}


// ou aqui ele vai receber em todos porém também funciona

// function updateSquares(){

//     let square = document.querySelectorAll(".square")
  
//     square.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if(symbol != ''){
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }
       

//     })

// }
