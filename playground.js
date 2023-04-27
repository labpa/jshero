Aufgabe 57

/* erste "Lösung" */
function sortiere([eins, zwei, drei]){
    eins =[1,2,3];
    return eins;  
 }

 /* zweiter Versuch */
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei > drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei < eins && eins < drei){
        ausgabe = [zwei, eins, drei];
    }else if (zwei < eins && eins > drei){
        ausgabe = [zwei, drei, eins ];
    } else if (drei < eins && eins < zwei){
        ausgabe = [ drei, eins, zwei];
    } else ausgabe = [drei, zwei, eins];
    return ausgabe;
}


/* 
1,2,3 geht
1,3,2 geht
2,1,3 geht
231
312
321
*/
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei > drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei < eins && eins < drei){
        ausgabe = [zwei, eins, drei];
    }else if ( eins > drei && zwei < drei){
        ausgabe = [zwei, drei, eins];
    }
    return ausgabe;
}


/* dritter Versuch */
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei < drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei < eins && eins > drei){
        ausgabe = [zwei, eins, drei];
    }else if (zwei < eins && eins > drei){
        ausgabe = [zwei, drei, eins ];
    } else if (drei < zwei && zwei < eins){
        ausgabe = [ drei, zwei, eins];
    } else ausgabe = [drei, eins, zwei];
    return ausgabe;
}


/* vierter Versuch */
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei > drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei > eins && drei > eins){
        ausgabe = [zwei, eins, drei];
    }else if (zwei > eins && drei < eins){
        ausgabe = [zwei, drei, eins ];
    } else if (drei > zwei && zwei > eins){
        ausgabe = [ drei, zwei, eins];
    } else ausgabe = [drei, eins, zwei];
    return ausgabe;
}


/*fünfter Versuch*/
function sortiere([eins, zwei, drei]){
   let ausgabe = [];
   if ((eins < zwei) && (zwei < drei)){
    ausgabe = [eins, zwei, drei];
   } else if ((eins < zwei)&& (zwei > drei)){
    ausgabe = [eins, drei, zwei];
   } else if ((zwei > eins) && (eins > drei)){
    ausgabe = [zwei, eins, drei];}

   return ausgabe;
}

/*sechster Versuch*/

function sortiere([eins, zwei, drei]){
    let ausgabe = [];
    if (eins > zwei){
        if (zwei > drei){
            ausgabe = [eins, zwei, drei]
        }
    }
    return ausgabe;
 }
 




 function sortiere([eins, zwei, drei]){
    if (eins>zwei){
     if (drei>eins){
         console.log("fall 1")
         return [zwei, eins, drei]
     } else{
         console.log("fall 2")
        return [drei, zwei, eins]
      }
   } else {
        
    if (drei>zwei){
       console.log("fall 3")
         
   } else {
     console.log("fall 4")

   }
  }
 }

sortiere([1,3,2]);

function sortiere([a, b, c]){
    // 321
    if(c>b && b>a){ return[c, b, a]}
    // 312
    if(c>b && b<a){return[c, a, b]} 
    // 231
    if(b>c && c>a){return[b,c,a]} 
    // 213
    if(b>c && c<a){return[b, a, c]} 
    // 132
    if (a<b && b>c){return[a, c, b]} 
    // 123
    if (a>b && b<c){return[a, b, c]} 
}
321
312
231
213
132
123

function sortiere([a,b,c]){
    //123
    if(a<b && b<c){return[a,b,c]}
    //132
    if(a<b && b>c){return[a, c, b]}
    //213
    if(b>a && c<b){return[b, a, c]}
    //231
    if(b>a && c<b){return[b,c,a]}
    //312
    //321
}

/* Ansatz mit Math.min und Math.max*/
function sortiere([a,b,c]){
    let min = Math.min[a,b,c];
    let max = MAth.max[a,b,c]
    let middle = (min + max) /2


}


< kleiner
> größer
</kleiner>
/*
function sortiere2([eins, zwei, drei]){
    if (eins>zwei){
     if (drei>eins){
         console.log("fall 1")
         return [zwei, eins, drei]
     } else{
         console.log("fall 2")
        return [drei, zwei, eins]
      }
   } else {
        
    if (drei>zwei){
       console.log("fall 3")
         return [eins, zwei, drei ]
   } else {
     console.log("fall 4")
     return [drei, eins, zwei]
   }
  }
 }






function sortiere([eins, zwei, drei]){
    if (eins>zwei){
     if (drei>eins){
         console.log("fall 1")
         return [zwei, eins, drei]
     } else{
         console.log("fall 2")
        return [drei, zwei, eins]
      }
   } else {
        
    if (drei>zwei){
       console.log("fall 3")
         return [eins, zwei, drei ]
   } else {
   
     console.log("fall 4")
     return [drei, eins, zwei]
   
   }
  }
 }
 
let x = sortiere([2,3,1]);
console.log("Ergebnis:"+ x);

let y = sortiere([1,3,2]);
console.log("Ergebnis:"+ y);

*/