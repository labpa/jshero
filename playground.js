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
 




