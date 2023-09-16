var alertedCat = false;
var alerted = false;

function welcomeMessage (alertedCat) {
     if (alertedCat === false) {
       alert ('Meoww Meow!')
        alertedCat = true;
     //   return alert('Meoww Meow!');
   }
   else if (alertedCat === true){
        alertedCat = false
   }
}

function translation (alerted) {
    if (alerted === false) {
      
       alerted = true;
       return alert('Tranlation: Welcome to our home!');
  }
}

//<script type="text/javascript">
//    var alerted = localStorage.getItem('alerted') || '';
//    if (alerted != 'yes') {
//     alert("Meoww Meow!");
//     localStorage.setItem('alerted','yes');
//    }
//</script>