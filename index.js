

function ispisidanundelji(danuNedelji) {
    let broj = +danuNedelji
    if(!isNaN(broj)){
        if (broj === 1) console.log("ponedeljak");
        else if (broj === 2) console.log("utorak");
        else if (broj === 3) console.log("sreda");
        else if (broj === 4) console.log("cetvrtak");
        else if (broj === 5) console.log("petak");
        else if (broj === 6) console.log("subota");
        else if (broj === 7) console.log("nedelja");
        else console.log('ima samo 7 dana a nema ', broj);

    } else console.log('sine unesi broj a ne string');
    
}


let dayOfWeek = prompt('Unesi dan u nedelji');
ispisidanundelji(dayOfWeek);







// let globalLet = 'global Let';
// // Vidi sa Srdjanom  zasto ovo ne radi!
// function fizzBuzz(input) {
   
    
//     // if((input % 2) === 0 ){
//     //      return 'paran broj'; 
//     //     }        
//     // else if((input % 2) !== 0) return 'neparan broj';        
//     // else {
//     //     return 'this is not a number';
//     // }
//     if(isNaN(input)){

//         // if((input % 2) === 0 ){
//         //     console.log('paran broj'); 
//         //     }        
//         // else  console.log('neparan broj');   
//         (input % 2) === 0 ? console.log('paran broj') : console.log('neparan broj');

//     }
//     else {
//         console.log('this is not a number');
//     }
// }



// fizzBuzz('sdf');

// isNaN()

// {
//     var varVariableFN = 'varFN'
//     let fnVariable = 'fnVar'
//     console.log(globalLet);
// }
// console.log(this);
// varVariableFN = 34;
// console.log(varVariableFN);
// console.log(fnVariable);
// console.log(output);
// const output = fizzBuzz(3);
// console.log(nistaVar);
// var nistaVar;
// console.log(nista);
// let nista;



// function checkSpeed(speed) {
//     const speedLimit = 70;
//  if(speed < speedLimit)
//  console.log("ok");
// }





let x = 3;
let y = 7;
let z = 10;

(x * 3 + 1) === 10 || (y === z) ?  console.log('tacno') : console.log('netacno');















// Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise: good evning!

// let hour= 9;

// if (hour >= 6 && hour <12) {
//     console.log('Good morning');
// }

// else if (hour >=12 && hour <6) {
//     console.log('Good afternoon');
// }
// else 
//   console.log('Good evening');

//   let prvi=document.getElementById('prvi');
//   let drugi=document.getElementById('drugi');
//   drugi.onchange=function(event){
//      let value=(event.target.value);
    
//     //  let slova=value.split(",");
//     //  for (const key of slova) {
//     //      console.log(key);
//     let checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//         let li=document.createElement('li');
//         li.appendChild(checkbox);
//         li.innerHTML+=value;
//         prvi.appendChild(li);
//     //     // prvi.removeChild(li);
//     //  }

//     event.target.value = '';
    
//   }

//   const dugme = document.getElementById('dugme');
//   dugme.onclick = function() {
//       const skriven = document.getElementById('skriven');
//       document.getElementsByClassName('asdf');
//         skriven.style.display = 'block';
//   }