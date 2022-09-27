const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img:document.querySelector('.rasm1'),
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: document.querySelector('.rasm2'),
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: document.querySelector('.rasm3'),
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: document.querySelector('.rasm4'),
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: document.querySelector('.rasm5'),
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: document.querySelector('.rasm6'),
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img:document.querySelector('.rasm7'),
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: document.querySelector('.rasm8'),
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: document.querySelector('.rasm9') ,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
let inp = document.querySelector('.input')
let p = document.querySelector('.place')
let p2 = document.querySelector('.place2')
let p3 = document.querySelector('.place3')
let p4 = document.querySelector('.place4')
let p5 = document.querySelector('.place5')
let btn =  document.querySelector('#btn').onclick = myf


function myf (){
menu.filter(item => {
    if ( inp.value == item.id ) {
      p.innerHTML = item.category
    } 
    if ( inp.value == item.id ) {
      p2.innerHTML = item.title
    }
    if ( inp.value == item.id ) {
      p3.innerHTML = item.price
    }
    if ( inp.value == item.id ) {
      p4.innerHTML = item.img
    }
    if ( inp.value == item.id ) {
      p5.innerHTML = item.desc
    }
  })
}

