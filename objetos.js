var taco1 = {
    "tortilla": "tortilla suave de maíz", 
    "nombres_de_tortillas":["tortilla 1", "tortila_maiz", "toritillas chilena", "tortilla_mexicana" ],
    "protein":  "tinga de pollo",
    "cheese":   "queso cotija",
    "toppings": ["lechuga", "pico de gallo", "guacamole"],
    "salsas": {"tomate":56, "salsa_picante":["aji", 30, true]},
    "funcion_para_hacer_tortillas": function hacer_tortillas(){
        console.log(this.nombres_de_tortillas);
        return "Tortilla Lista!!!!!"
    }
}


// console.log(taco1);
let info_objeto_tortillas = taco1.funcion_para_hacer_tortillas();
console.log(info_objeto_tortillas);