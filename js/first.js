

// Triangle math function hard
document.getElementById('card-1-btn').addEventListener('click' , function(){
    const base = document.getElementById('card-1-input1');
    const baseValue = base.value;
    const height = document.getElementById('card-1-input2');
    const heightValue = height.value
    const result = (0.5 * baseValue * heightValue);
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4"></p>
    `;
    newP.innerText =  result;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    base.value = "";
    height.value = "";
})












// Triangle math function hard
// document.getElementById('card-1-btn').addEventListener('click' , function(){
//     const base = document.getElementById('card-1-input1');
//     const baseValue = base.value;
//     const height = document.getElementById('card-1-input2');
//     const heightValue = height.value
//     const result = (0.5 * baseValue * heightValue);
//     // make new p
//     const newP = document.createElement('p');
//     newP.innerHTML =`
//         <p class="my-4">1. Triangle 
//                     <span class="triangle-result"></span>cm<sup>2</sup>
//                     <button id="1-Covert-m-button" class="ml-2 px-3 py-1 bg-[#69C7F0] border rounded-md">Covert to meter Squair</button>
//                 </p>
//     `;
//     // push result
//     const resultDisplaySection = document.getElementById('result-display-section');
//     resultDisplaySection.appendChild(newP);
//     // result
//     const triangleResult = document.getElementsByClassName('triangle-result');
//     triangleResult[0].innerText = result;
//     // clean input field
//     base.value = "";
//     height.value = "";
//     // console.log(baseValue);
//     console.log(triangleResult[0]);
// })







