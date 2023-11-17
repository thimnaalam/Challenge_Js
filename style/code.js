// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR

let oldH1 = document.getElementById("heading");

let newH1 = document.createElement("h1");

newH1.innerHTML ="JavaScript";
oldH1.parentElement.replaceChild(newH1, oldH1);



/* 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself.
 I complished this because I believed in myself'*/
 
 let paragraph = document.getElementsByClassName('paragraph');
 let replacement = document.replace('p');
 replacement.innerHTML ="This is a language I have mastered and I am proud of myself. I complished this because I believed in myself";
paragraph.parentElement.replaceChild(replacement, paragraph);

