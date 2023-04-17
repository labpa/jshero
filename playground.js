Aufgabe 57

function addiereMitZuschlag(eins, zwei){
    let zuschlag = 0;
       if (eins <= 10){
          zuschlag = zuschlag + 1;
        } else if (eins >10 && eins <=20){
          zuschlag = zuschlag + 2; 
        } else {
        zuschlag = zuschlag + 3;
        }
    
       if (zwei <= 10){
          zuschlag = zuschlag + 1;
        } else if (zwei >10 && zwei <=20){
          zuschlag = zuschlag + 2; 
        } else {
        zuschlag = zuschlag + 3;
        }
    
    return eins + zwei + zuschlag;
    
    
    }


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



function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else (eins < zwei && zwei > drei){
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












function sortiere([eins, zwei, drei]){
    eins =[1,2,3];
    return eins;  
 }