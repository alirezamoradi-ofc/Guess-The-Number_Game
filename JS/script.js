// Select Elements
const Start = document.querySelector('#start');
const Again = document.querySelector('#again');
const Reset = document.querySelector('#reset');
const Check = document.querySelector('main button');
const h2 = document.querySelector('main h2');
const section = document.querySelector('section');
let Score = document.querySelector('#score-number');

let Random = Math.floor(Math.random() * 40 ) + 1;
let i = 0;

// Functions
function New_Game() {
    let again = Math.floor(Math.random() * 40 ) + 1;
    Random = again;
    Start.style.display = 'grid';
    section.innerHTML = '&#10068';
}
// Create Objects
const Start_Game = {
    Start : function(){
        Start.style.display = 'none';
    },
    Check : function(){
        let x = document.forms['form']['x'].value;
        if ( x > 40 ){
            h2.innerHTML = '&#128545' + 'از حد مجاز بیشتره';
            h2.style.color = '#f00';
        }
        else if ( x == Random) {
            alert('برنده شدی');
            h2.innerHTML = '';
            i += 1;
            Score.innerHTML = i;
            section.innerHTML = Random;
        }
        else if ( x > Random){
            h2.innerHTML = 'خیلی زیاده';
            h2.style.color = '#fff';
        }
        else{
            h2.innerHTML = 'خیلی کمه';
            h2.style.color = '#fff';
        }
    },
    Reset : function(){
        Score.innerHTML = 0;
    }
};

// Add Events
Start.addEventListener('click', Start_Game.Start);
Again.addEventListener('click', New_Game);
Check.addEventListener('click', Start_Game.Check);
Reset.addEventListener('click', Start_Game.Reset);
