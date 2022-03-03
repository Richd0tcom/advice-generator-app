const dice = document.querySelector('.dice');
const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');



async function fetchAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    console.table(data.slip);
    const { id, advice} = data.slip;
    adviceId.textContent = `ADVICE #${id}`;
    adviceText.textContent = `"${advice}"`;

};



dice.addEventListener('click', fetchAdvice);


// //Promise
// function fetchAdvice() {
//     fetch('https://api.adviceslip.com/advice')
//         .then(res => res.json())
//         .then(data => {
//             const { id, advice } = data.slip;
//             adviceId.textContent = `ADVICE #${id}`;
//             adviceText.textContent = `"${advice}"`;

//         });
// }
