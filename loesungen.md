# Aufgaben

## Aufgabe 1 Variablen
Deklariere eine Variable vorname und initialisiere sie mit dem Wert 'Franz'. 

### Lösung
    let vorname = 'Franz';

## Aufgabe 2 Was ist x
Welchen Wert hat x nach Ausführung des folgenden Codes?

        let x = 'Josefine';
### Lösung
    'Josefine'

## Aufgabe 3 Mehrere Variablen
Möchte man mehrere Variablen deklarieren und initialisieren, so kann man das in zwei Programmzeitel tun:

    let stadt = 'Prag';
    let  land = 'Tschechien';
In jeder ZEile steht eine Anweisung. Jede Anweisung sollte mit einem Semikolon abgeschlossen werden.

Deklariere eine Variable *blume* und weise ihr den Wert 'Rose' zu. Deklariere eine zweite Variable *tier* und weise ihr den Wert 'Käfer' zu. 
### Lösung
    let blume ='Rose;
    let tier = 'Käfer';

## Aufgabe 4 Neuzuweisung
Eine Variable kann man jederzeit mit dem Gleichheitszeichen einen neuen Wert zuweisen. DAs Schlüsselwort *let* wird dabei *nicht nochmal* verwendet.

    let farbe = 'rot';
    farbe = 'grün';
Die Variable farbe wird mit dem Wert 'rot' initialisiert. Danach erhält sie den Wert 'grün'

Welchen Wert hat x nach Ausführung des folgenden Codes?

    let x = 'Georg';
    x = 'Karl';
    x = 'Gregor';
### Lösung

    'Gregor'

## Aufgabe 5 Variablen zuweisen:

Einer Variablen kann man auch den Wert einer anderen Variablen zuweisen:

    let name1 = 'Olga';
    let name2 = name1;
    name1 ='Clara';
In der zweiten Codezeile wird der Variablen name2 der Wert der VAriablen name1 zugewiesen. name2 erhält den Wert 'Olga'. Diesen Wert behält name2 bei, auch wenn anschließend name1 einen neuen Wert erhält.

Welchen Wert hat x nach Ausführung des folgenden Codes?

    let x = 'rot';
    let y = 'grün';
    let z = y;
    y = x;
    x = z;
### Lösung

    'grün'

## Aufgabe 6 Funktionen
Definiere eine Funktion  hallo, die 'Hallo Welt!' zurückgibt
### Lösung

    function hallo(){
    return 'Hallo Welt!';   
    }

## Aufgabe 7 Mehrere Funktionen
Wir definieren nun mehr als eine Funktion. Zur Erinnerung: So wird eine Funktion mit Namen farbe definiert, die den Wert 'rot' zurückgibt:

    function farbe(){
        return 'rot';
    }
Definiere zwei Funktionen. Die erste Funktion *a* soll *'Hallo a!'* zurückgeben. Die zweite Funktion *b* soll *'Hallo b!'* zurückgeben.
### Lösung

    function a(){
        return 'Hallo a!';
    }
    function b(){
        return 'Hallo b!'
    }

## Aufgabe 8 Funktionsaufruf
1. Definiere eine Funktion *begruesse*, die den Wert *'Moin!'* zurückgibt.
2. Deklariere eine Variable *begruessung*. Rufe die Funktion *begruesse* auf und weise der Variablen *begruessung* die Rückgabe des Aufrufs zu.
### Lösung
```js
    function begruesse(){
        return 'Moin!';
    }
    let begruessung = begruesse();
```

## Aufgabe 9 Was ist x?
Welchen Wert hat **x** nach Ausführung des folgenden Codes?
```js
function hello (){
    return 'Hi!';
}
let x = hello();
```
### Lösung
``` js
'Hi!'
```

## Aufgabe 10 Parameter
Schreibe eine Funktion **echo**, die ebenfalls den übergebenen Parameter wieder zurückgibt.

### Lösung:
``` js
function echo(ton){
    return ton;
}
```

## Aufgabe 11 Was ist x?
Welchen Wert hat x nach Ausführung des folgenden Codes?
```js
function reply(phrase){
    return phrase;
}
let x =reply('How do you do?');
```

### Lösung
```js
'How do you do?'
```

## Aufgabe 12 Parametername
Schreibe eine Funktion **ping**, die einen Parameter hat und dessen Wert einfach zurückgibt. Achte darauf, dass der Parameter anders heißt als die Funktion selbst.

### Lösung
```js
function ping(pong){
    return pong;
}
```

## Aufgabe 13 Strings
Schreibe eine Funktion **welcome**, die einen Parameter entgegennimmt und die **'Hallo <Parameter>!'** zurückgibt.

Beispiel: Übergibt man der Funktion **welcome** den Wert **'Ada'**, so sollte die Funktion **'Hallo Ada!'** zurückgeben.

### Lösung
```js
function welcome(Ada){
    return 'Hallo ' + Ada + '!';
}
```

## Aufgabe 14 Was ist x?
Welchen Wert hat x nach Ausführung des folgenden Codes?
```js
function WoIst(name){
    return 'wo ist ' + name + '?';
}
let x = WoIst('Fred');
```

## Aufgabe 15 Was ist x?
Welchen Wert hat x nach Ausführung folgenden Codes?

```js
function hi(name) {
return 'Hi ' + name + '!';
}
let h1 = hi('Selva');
let h2 = hi('Pola');
let x = h1 + ' ' + h2;
```
### Lösung 
```js
'Hi Selva! Hi Pola!'
```

## Aufgabe 16 Logging
Schreibe eine Funktion **logge**, die den String **'Hallo Konsole!'** loggt. Arbeitest du mit einem Desktop-Browser öffne zusätzlich die Entwickler-Tools, um auch dort die Ausgabe zu sehen.

```js
function logge(){
    console.log('Hallo Konsole!');
}
```

## Aufgabe 17 Variablen loggen
Schreibe eine Funktion **logge*, die einen Parameter entgegennimmt und diesen Parameter loggt.

Beispiel: Der Aufruf **logge('Ken Thompson')** sollte **'Ken Thompson'** loggen.

### Lösung
```js
function logge(Pferd){
    console.log(Pferd);
}
```

## Aufgabe 18 Loggen und Strings
Schreibe eine Funktion **rufe**, die einen String als Parameter entgegennimmt und diesen String verdoppelt zurückgibt. Gleichzeitig soll die Rückgabe geloggt werden.

### Lösung
```js
function rufe(Werder){
    let ruf = Werder + Werder;
    console.log(ruf);
    return ruf;
}
```

## Aufgabe 19 Silent Teacher
Welchen Wert hat x nach Ausführung des folgenden Codes?
```js
function bleiben(name){
    return name + ' bleibt ' + name;
}
let x = bleiben('Mainz');
```

### Lösung
```js
'Mainz bleibt Mainz'
```

## Aufgabe 20 String: length
```JS
function laenge(Franz){
return Franz.length
}
```
## Aufgabe 21 String: toUpperCase()
```JS
function toCase(ida){
let klein = ida.toLowerCase();
let gross = ida.toUpperCase();
return klein + '-' + gross;
}
```
## Aufgabe 22 String: charAt()
```JS
function abkuerzung(Hansestadt, Bremen){
 let erste = Hansestadt.charAt(0);
 let zweite = Bremen.charAt(0);
return erste + zweite;
}
```
## Aufgabe 23 String: trim()
```JS
function firstChar(Rosa){
let trim = Rosa.trim();
return trim.charAt(0);
}
```
## Aufgabe 25 String: indexOf(), 2. Parameter
```JS
function secondIndexOf(eins, zwei){
 let n1 = eins.indexOf(zwei);

return eins.indexOf(zwei, n1 +1);
}
```
## Aufgabe 26 String: substr()
```JS
function firstWord(der){
 let fred = der.indexOf(' ');
 return der.substr(0, fred);
}
```
## Aufgabe 27 String: replace()
```JS
function convert(DatumEnglisch) {
 let DatumDeutsch = DatumEnglisch.replace('-', '.');
 DatumDeutsch = DatumDeutsch.replace('-', '.');
 DatumDeutsch = DatumDeutsch.replace('/', '.');
 DatumDeutsch = DatumDeutsch.replace('/', '.');
 return DatumDeutsch;
}
```
## Aufgabe 28 Zahlen
```JS
function add(eins, zwei){
return eins + zwei;
}
```
## Aufgabe 29 Inkrement
```JS
7
```
## Aufgabe 30 Fahrenheit
```JS
function toFahrenheit(celsius){
return 1.8 * celsius + 32;
}
```
## Aufgabe 31 Modulo
```JS
function einer(plus){
   return plus % 10;
}
``
## Aufgabe 32
## Aufgabe 34