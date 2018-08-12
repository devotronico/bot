



var botWord = ['benvenuto', 'arrivederci'];



// a ogni invio controlliamo ogni parola se è contenua nell' array botWord

var textarea = document.querySelector('textarea');



//textarea.addEventListener();


//'use strict';


const botAnswers = [
  'ciao cliente cosa desideri?',
  'che vestito vuoi in cambio?',
  'il pacco ti arriverà presto'
];





const paroleChiavi = [

  ['ciao', 'buongiorno', 'buonasera', 'arrivederci'],
  ['restituire', 'cambiare', 'rotto', 'stretto', 'largo', 'strappato'],
  ['quando', 'arriva', 'ritardo', 'tempo', 'aspettare']
]



var capture = '';
var index = 0;
var arrWords = [];
var arrPhrase = [];

document.addEventListener('keydown', function(event) {
 const keyName = event.key;
 //const keyName = event.keyCode;
//console.log(event.key);
//console.log(event.keyCode);


    switch (keyName) {

      case 'Enter':  

        arrWords[index] = capture.toLowerCase();

      

        var test = '<p class="cliente">';

        // document.querySelector('.chat').innerHTML += '<p class="cliente">'
        for ( var n=0; n<arrWords.length; n++ ){
          test += arrWords[n]+' ';
        
        } 
        test += '</p>';
        document.querySelector('.chat').innerHTML += test;
        document.querySelector('textarea').value = '';
        // for ( var n=0; n<arrWords.length; n++ ){
        //   if ( n==0 ) { document.querySelector('.chat').innerHTML += '<p class="cliente">' }
        //   document.querySelector('.chat').innerHTML += arrWords[n]+' '
        //   if ( n==arrWords.length -1 ) { document.querySelector('.chat').innerHTML += '</p>' }
        // } 
      
       //arrPhrase.push(arrWords);

        ciclo:
        for ( var x=0; x<paroleChiavi.length; x++ ){
          for ( var y=0; y<paroleChiavi[x].length; y++ ){ //console.log(paroleChiavi[x][y])
          
            if ( arrWords.includes(paroleChiavi[x][y]) ) {console.log(botAnswers[x]); 

              document.querySelector('.chat').innerHTML += '<p class="bot">'+botAnswers[x]+'</p>';
              break ciclo;
            }
            if (x == paroleChiavi.length-1 && y == paroleChiavi[x].length-1) {  console.log('puoi essere più chiaro?')
        
              document.querySelector('.chat').innerHTML += '<p class="bot">puoi essere più chiaro?</p>'
            }
          }
        }
        index = 0;
        arrWords = [];
        capture = '';
      break;


      case ' ':  

        arrWords[index] = capture.toLowerCase();
        index++;
        capture = '';
      break;


      case 'Backspace':
        capture = capture.substring(0, capture.length - 1); 
      break;


      default:

        const excludeKeys = [ 9, 16, 17, 18, 19, 20, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 96, 97, 98, 99, 100, 101, 102, 103];
        if ( !excludeKeys.includes(event.keyCode) ) { capture += keyName; }
    }

});
