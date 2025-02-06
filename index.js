
















































// //Number gussing Game
// const min = 1;
// const max = 100;
// const result = Math.floor(Math.random() * (max - min + 1));

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a Number between ${min} - ${max}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.prompt('Please enter a Valid Number');
//     }

//     else if(guess < min || guess > max){
//         window.prompt('Please enter a Valid Number');
//     }
//     else{
//         attempts++;
//         if(guess < result){
//             window.alert('Too Low! Try Again');
//         }
//         else if(guess > result){
//             window.alert('Too High! Try again');
//         }
//         else{
//             window.alert(`Correct the answer was ${result}.It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
   
// }