/* alert ('Meoww Meow!');
alert('Tranlation: Welcome to our home!'); */

//var alertedCat = false;
//var alerted = false;

//function welcomeMessage (alertedCat) {
//     if (alertedCat === false) {
//       alert ('Meoww Meow!');
//        alertedCat = true;
     
//   }
//   else if (alertedCat === true){
//        alertedCat = false;
//   }
//}

//function translation (alerted) {
//    if (alerted === false) {
//      
//       alerted = true;
//       return alert('Tranlation: Welcome to our home!');
//  }
//}

//<script type="text/javascript">
//    var alerted = localStorage.getItem('alerted') || '';
//    if (alerted != 'yes') {
//     alert("Meoww Meow!");
//     localStorage.setItem('alerted','yes');
//    }
//</script>

//cat fact top banner
const placeHolder = document.getElementById("generateFact");

const getFact = fetch("https://catfact.ninja/fact")
    getFact.then((response) => response.json())
    .then((json) => placeHolder.innerHTML = json.fact);




//info pannel toggle
//=====================================================
document.querySelector('.btn-m').addEventListener("click", () => {
    document.querySelector(".toggle-m-container").classList.toggle("Mance-open")
});

document.querySelector('.btn-s').addEventListener("click", () => {
    document.querySelector(".toggle-s-container").classList.toggle("Slayer-open")
});

document.querySelector('.btn-w').addEventListener("click", () => {
    document.querySelector(".toggle-w-container").classList.toggle("Walter-open")
});

document.querySelector('.btn-hm').addEventListener("click", () => {
    document.querySelector(".toggle-hm-container").classList.toggle("HM-open")
});