var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("halo");
console.log(body);
function backgroundColor() {
  body.style.background = `linear-gradient(to right, ${color1.value}   ,   ${color2.value}  )`; 
  css.textContent= body.style.background + ";"  
}
color1.addEventListener("input", backgroundColor);
color2.addEventListener("input", backgroundColor );
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(`Moooo I'm ${this.name} and I'm a ${this.type} ${this.color}`);
    console.log(`Meow I'm ${this.name} and I'm a ${this.type} ${this.color}`);
    
  }
}

const cow = new Mamal("Shelly", "cow", "brown");
const cat = new Mamal("Wildan","Lion" ,"White")
console.log(cow.sound());
console.log(cat.sound());