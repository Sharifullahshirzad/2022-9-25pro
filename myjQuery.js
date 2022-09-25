
// $(document).ready()(()=>{

//     jQuery('p')


// })


// $('p').on('click',function(){

//     alert('p element has been clicked')
// // })


// $('p').on({

// click: function(){


//     alert('p element is clicked')
// },

// dblclick: function(){

//     alert('p element is double clicked')
// },
// mouseenter: function(){

//     alert('mouse is enter in p element')
// },
// MouseEvent: function(){

//     alert('p element is  mouseevent')
// },
// dblclick: function(){

//     alert('p element is double clicked')
// },
// dblclick: function(){

//     alert('p element is double clicked')
// },


// })


// $('h1').click(function(){

// $('p').hide();

// })


// $('small').click(()=>{


//     $('p').show()
// })



// $('h1').click(()=>{



// })
// $('span').click(()=>{

// $('b').toggle(30)

// })


// $('h1').click(()=>{

// $('p').fadeOut();

// })


// $('small').click(()=>{

//     $('p').fadeOut();
    
//     })
// $('button').click(()=>{

// $('p').fadeToggle(4000);



// })


// $('button').click(()=>{

//     $('p').fadeToggle('fast');


// })


// $('button').click(()=>{

// $('p').fadeTo('slow')

// })
// $('button').click(()=>{
// $('.myslide').slideToggle();
// })
// $('button').click(()=>{

//     $('#myslide').slideToggle();
    
//     })

// $('#dd').mouseenter(()=>{

//     $('p').slideToggle();
// })


// $('#demo').mouseenter(()=>{

// $('b').slideToggle();

// })






// This is the place of piano?????????



// document.addEventListener('keypress', (e)=>{
//  buttonPressed(e.key)
//     switch('a'){
//         case "a":
//              var sound = new Audio('./pianoSound/key01.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "b":
//     var sound = new Audio('./pianoSound/key02.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "c":
//     var sound = new Audio('./pianoSound/key03.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "d":
//     var sound = new Audio('./drum/drum4.wav')
// sound.play();
// console.log(e.key)
// break;
// case "e":
//     var sound = new Audio('./pianoSound/key02.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "f":
//     var sound = new Audio('./drum/drum1.wav')
// sound.play();
// console.log(e.key)
// break;
// case "g":
//     var sound = new Audio('./pianoSound/key01.mp3')
// sound.play();
// console.log(e.key)
// break;  
//      case "h":
// var sound = new Audio('./pianoSound/key04.mp3')
// sound.play();
// console.log(e.key)
// break;  
//      case "i":
// var sound = new Audio('./drum/drum7.wav')
// sound.play();
// console.log(e.key)
// break;    
//    case "j":
// var sound = new Audio('./pianoSound/key05.mp3')
// sound.play();
// console.log(e.key)
// break;    
//    case "k":
// var sound = new Audio('./pianoSound/key06.mp3')
// sound.play();
// console.log(e.key)
// break;    
//    case "l":
// var sound = new Audio('./pianoSound/key07.mp3')
// sound.play();
// console.log(e.key)
// break;    
//    case "m":
// var sound = new Audio('./pianoSound/key08.mp3')
// sound.play();
// console.log(e.key)
// break;   
//     case "n":
// var sound = new Audio('./pianoSound/key09.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "o":
//     var sound = new Audio('./pianoSound/key10.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "p":
//     var sound = new Audio('./pianoSound/key11.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "q":
//     var sound = new Audio('./pianoSound/key12.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "r":
//     var sound = new Audio('./pianoSound/key13.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "s":
//     var sound = new Audio('./pianoSound/key14.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "t":
//     var sound = new Audio('./pianoSound/key15.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "u":
//     var sound = new Audio('./pianoSound/key16.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "v":
//     var sound = new Audio('./pianoSound/key17.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "w":
//     var sound = new Audio('./pianoSound/key18.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "x":
//     var sound = new Audio('./pianoSound/key19.mp3')
// sound.play();
// console.log(e.key)
// break;
// case "z":
//     var sound = new Audio('./pianoSound/key20.mp3')
// sound.play();
// console.log(e.key)
// break;

//         default:
//             alert('plzz press the A key')
//     }
// })

// function buttonPressed(currenKey){

// var activeBtn = document.querySelector('.'+ currenKey)


// activeBtn.classList.add('pressed')

// setTimeout(() => {
//     activeBtn.classList.remove('pressed')

// },100);

// }



// $('.thekey').click(()=>{

// $('.thekey').animate({left: '250px'})

// })