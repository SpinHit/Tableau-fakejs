window.addEventListener("load",main);

function firstLine(a){
 var premiereLigne = document.createElement("tr");

 var nom = document.createElement("th");
 nom.innerHTML="Nom";
 premiereLigne.appendChild(nom);

 var prenom = document.createElement("th");
 prenom.innerHTML="Prenom";
 premiereLigne.appendChild(prenom);

 var metier = document.createElement("th");
 metier.innerHTML="Metier";
 premiereLigne.appendChild(metier);

 var adresse = document.createElement("th");
 adresse.innerHTML="Adresse";
 premiereLigne.appendChild(adresse);

 var phone = document.createElement("th");
 phone.innerHTML="Numero de telephone";
 premiereLigne.appendChild(phone)

 var age = document.createElement("th");
 age.innerHTML="Age";
 premiereLigne.appendChild(age);

 a.appendChild(premiereLigne);
 document.body.appendChild(a);
}

function main(event){
  // nombre de case
    var n = 50;
    var table = document.createElement("th");
    firstLine(table);
    for(x=0 ; x<n ; x++){
        var person = {
        first: faker.fake("{{name.firstName}}"),
            last: faker.fake("{{name.lastName}}"),
            age: randRange(18,90), // l'age minimum et l'age maximum
            job: faker.fake("{{name.jobTitle}}"),
            phone: faker.fake("{{phone.phoneNumber}}"),
            address: faker.fake("{{address.streetAddress}}")
        }
        var line = document.createElement("tr");
        for (var i = 0; i <1; i++) {

            var case1 = document.createElement("td");
            case1.innerHTML=person.first;
            line.appendChild(case1);

            var case2 = document.createElement("td");
            case2.innerHTML=person.last;
            line.appendChild(case2);

            var case3 = document.createElement("td");
            case3.innerHTML=person.job;
            line.appendChild(case3);

            var case4 = document.createElement("td");
            case4.innerHTML=person.address;
            line.appendChild(case4);

            var case5 = document.createElement("td");
            case5.innerHTML=person.phone;
            line.appendChild(case5);

            var case6 = document.createElement("td");
            case6.innerHTML=person.age;
            line.appendChild(case6);

        }
        table.appendChild(line);
}

}
// fonction nombre au hasard avec valeur max - min
function randRange(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
