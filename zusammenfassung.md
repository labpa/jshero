# Operatoren

## Warheitswerte
Wahrheitswerte werden auch boolesche Werte genannt. Boolesche Werte kennen nur zwei Zustände: **true** und **false**.  

In JavaScript gibt es drei boolesche Operatoren:

UND
```JS
&&
```

ODER 
```JS
||
```
NICHT
```JS
!
```

Das Ergebnis dieser Operationen ist wieder ein boolescher wert. 

Beispiel:

NAND

```JS
function nand(a,b){
    let und = a && b;
    return !und;
}
```

NOR
```JS
function nor(a,b){
    return !(a||B);
}
```
XOR
```JS
function xor(a,b){
    return a && !b || !a && b;
}
```

## Zahlen vergleichen
größer
```JS 
>
```
größer gleich
```JS
>= 
```
kleiner
```JS
<
```
kleiner gleich
```JS
<=
```
## Arrays
```JS
[]
```