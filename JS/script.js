// Select Elements
const Start = document.querySelector('#start');
const Again = document.querySelector('#again');
const Reset = document.querySelector('#reset');
const Check = document.querySelector('main button');
const h2 = document.querySelector('main h2');
const section = document.querySelector('section');
let Score = document.querySelector('#score-number');

let test = Math.floor(Math.random() * 40 ) + 1;
let i = 0;
let j = 0;
let Random;

// Functions
function New_Game() {
    let again = Math.floor(Math.random() * 40 ) + 1;
    Random = again;
    Start.style.display = 'inline';
    section.innerHTML = '&#10068';
}
// Create Objects
const Start_Game = {
    Start : function(){
        Random = test;
        Start.style.display = 'none';
        k = 1;
    },
    Check : function(){
        if ( j == 1 ) {
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
            else if ( x < Random ) {
                h2.innerHTML = 'خیلی کمه';
                h2.style.color = '#fff';
            }   
        }
        else{
            alert ('هنوز بازی رو شروع نکردی');
        }
    },
    Reset : function(){
        Score.innerHTML = 0;
        Start.style.display = 'inline';

    }
};

// Add Events
Start.addEventListener('click', Start_Game.Start);
Again.addEventListener('click', New_Game);
Check.addEventListener('click', Start_Game.Check);
Reset.addEventListener('click', Start_Game.Reset);
