/* Milestone 1
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */


$(document).ready(function(){

 // Milestone 1
  const arrCats = [
    {
      name: 'Asparago',
      age: 1.5,
      color: '#DC143C',
      gender: 'male'
    },
    {
      name: 'Fuffy',
      age: 2,
      color: '#006400',
      gender: 'female'
    },
    {
      name: 'Swiffer',
      age: 3.5,
      color: '#CE8580',
      gender: 'male'
    },
    {
      name: 'Chicca',
      age: 5,
      color: '#8A2BE2',
      gender: 'female'
    },
    {
      name: 'Pallino',
      age: 7,
      color: '#7FFF00',
      gender: 'male'
    }
  ];

  arrCats.forEach((cat) => {
    $('#milestone-1').append(utilityList(cat.name, cat.color));
  });
  // /Milestone 1 

  // Milestone 2
  const arrRibbonCats = arrCats.map((cat) => {
    const opacity = cat.age / 6.5;
    const lightpink = '#FFB6C1';
    const lightazure = '#87CEFA';
    let color = (cat.gender === 'female') ? lightpink : lightazure;
    return {
      ...cat,
      ribbon: {
        color,
        opacity
      }

    }

  }); 
  
  const arrCatsFemale = arrRibbonCats.filter((cat) => cat.gender === 'female');
  const arrCatsMale = arrRibbonCats.filter((cat) => cat.gender === 'male');

  arrCatsFemale.forEach((cat) => {
    $('#milestone-2-female').append(utilityList(cat.name, cat.color, cat.ribbon.color, cat.ribbon.opacity));
  }) 

  arrCatsMale.forEach((cat) => {
    $('#milestone-2-male').append(utilityList(cat.name, cat.color, cat.ribbon.color, cat.ribbon.opacity));
  })
  // /Milestone 2 

  // Milestone 3
  const arrCatsOrder = [...arrCatsFemale, ...arrCatsMale];
  const arrTargetCats = arrCatsOrder.map((cat) => {
    const {name, color, ribbon} = cat;

    $('#milestone-3').append(utilityList(name, color, ribbon.color, ribbon.opacity));
    return {
      name,
      color,
      ribbon
    };

  }); 
  // /Milestone 3

}); 

/* FUNCTION */

function utilityList(name, color, ...ribbon) {
  let ribbonTag = "";
  if (ribbon.length > 0) {
    ribbonTag = 
    `
      <i class="fas fa-ribbon" style="color: ${ribbon[0]}; opacity: ${ribbon[1]};"></i>
    `;
  }
  let html = 
  `
    <li>
      <i class="fas fa-cat" style="color: ${color}"></i>
      ${ribbonTag}
      <span>${name}</span>
    </li>
  `;

  return html;

} 