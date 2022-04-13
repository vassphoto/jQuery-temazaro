// function clear(){
//     document.getElementById('kijelzo').value = ''
//     document.getElementById("kijelzo").innerHTML = torles;
// }

// function eredmeny(kattintva){
//     document.getElementById('kijelzo').value += kattintva
//     return kattintva
// }

// function calculate(){
//     let x = document.getElementById('kijelzo').value
//     let y = eval(x)
//     document.getElementById('kijelzo').value = y       
//     return y    
// }

const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function () {
        const kattintva = buttons[i].innerText;

        if (kattintva == 'C') {
            //törlés
            document.getElementById("kijelzo").value = ''; 
        }
        
        else if (kattintva == '=') {
            //kiszámol
            document.getElementById("kijelzo").value = eval (document.getElementById("kijelzo").value);
            
        }

        else {
            //hozzáfűzés
            document.getElementById("kijelzo").value += buttons[i].innerHTML;
        }
    }
}


