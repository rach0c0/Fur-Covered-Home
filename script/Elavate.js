alert ('Meoww Meow!');
alert('Tranlation: Welcome to our home!');

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


//info pannel toggle
//=====================================================
document.querySelector('.btn').addEventListener("click", () => {
    document.querySelector(".toggle-container").classList.toggle("Mance-open")
});

document.querySelector('.btn').addEventListener("click", () => {
    document.querySelector(".toggle-container").classList.toggle("Slayer-open")
});

document.querySelector('.btn').addEventListener("click", () => {
    document.querySelector(".toggle-container").classList.toggle("Walter-open")
});

document.querySelector('.btn').addEventListener("click", () => {
    document.querySelector(".toggle-container").classList.toggle("HM-open")
});