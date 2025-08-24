---
title: La desestructuración de arrays y objetos
description: ""
date: 2021-07-19T15:51:10.769Z
preview: ""
draft: true
tags:
  - Echo
  - ES6
categories: []
image: /post_images/artificial-photography-S_bbqW4yQZA-unsplash.jpg
excerpt: Es algo muy sencillo y aunque al principio puede no parecer muy útil, provee una forma de escribir código que resulta más rápida y legible.
---

Suena terrible. **Desestructuración**. Pero en realidad es algo muy sencillo y aunque al principio puede no parecer muy útil, provee una forma de escribir código que resulta más rápida y legible. Y si has leído algún otro artículo mío, sabrás que para mí la legibilidad no sólo es importante: es lo más importante.

1. ¿Qué significa desestructurar?
2. ¿Cómo se desestructura un array?
3. ¿Cómo se desestructura un objeto?
4. El parámetro «rest»
5. Y ahora todo junto

## ¿Qué significa desestructurar?

Pues es muy sencillo. Básicamente es **extraer posiciones o propiedades de un _array_ o de un objeto respectivamente**, para poder gestionarlo más cómodamente. Imagina que el array es la caja que ilustra el post – que no está puesta al azar aunque lo parezca – y quieres tener acceso a un disco en concreto así como mantener acceso al resto de discos y también a la colección al completo. Eso podrías hacerlo desestructurando.

## ¿Cómo se desestructura un array?

Imagina que tienes el _array_ `[1, 2, 3, 4]{:js}`. Imagina que quieres obtener el valor de la primera posición. Normalmente escribirías `array[0]{:js}` y ya lo tendrías, y si quieres almacenarlo escribirías `const primera = array[0];{:js}`. Desestructurando sería así:

```javascript
const array = [1, 2, 3, 4];

// Declara la constante "primera" con el valor 1
const [primera] = array;

// Similar a lo anterior, declara dos constantes
const [primera, segunda] = array;

// Declara las constantes segunda y cuarta, mientras que
// obvia la primera y la tercera posición.
const [, segunda, , cuarta] = array;
```

¿Y para qué ibas a liarte con esto si no aportan nada nuevo y son cosas que ya podías hacer de formas que ya conocías? **No te estreses: ambas opciones conviven**. Para mí, la ventaja de poder escribirlo de diferentes formas es fundamentalmente que en ocasiones ayuda a generar un código más legible. En efecto, no te van a permitir hacer nada nuevo, pero sí ser más elegante. Puedes hacer cosas complejas de una forma tan sencilla que a veces parece magia.

## ¿Cómo se desestructura un objeto?

Muy parecido a cómo se hace con un _array_. Si en el primero usamos los caracteres `[]{:js}`, en el objeto usamos `{}{:js}`. Además obviamente en lugar de utilizar posiciones utilizamos nombres, razón por la cual es más entendible y se suele aprovechar más en objetos que en _arrays_.

Imagina que tienes el siguiente objeto:

```javascript
const animal = {
  name: "Coda",
  age: 10,
  kind: "Dog",
};
```

Imagina ahora que quieres guardar el nombre en una constante, podrías hacerlo de estas dos formas:

```javascript
const name = animal.name; // La tradicional
const { name } = animal; // Desestructurando
```

Esas dos lineas se comportan exactamente igual, no hay una ventaja aparente en ninguna de las dos. Pero ¿qué pasaría si quieres hacer lo mismo con dos valores?

```javascript
// La tradicional:
const name = animal.name;
const kind = animal.kind;

// Desestructurando:
const { name, kind } = animal;
Ahí sí vemos una mejora, tanto al escribirlo como al leerlo. Piensa además, que es algo que se puede utilizar en cualquier lugar. ¿Que tu función recibe un objeto como parámetro? También es un lugar adecuado para desestructurar:

const helloDog = (animal) => { // Sin desestructurar
  const name = animal.name;
  console.log(`Hello ${name}`);
}

const helloDog = ({ name }) => { // Desestructurando
  console.log(`Hello ${name}`);
}
```

En el segundo ejemplo, pese a que el método `helloDog` recibe un objeto completo, sólo está utilizando una propiedad. El código del método está de hecho «desconociendo» el resto, algo interesante en cuestiones de encapsulación.

## El parámetro «rest»

El parámetro `rest` es una parte muy importante del la desestructuración. Lo he separado en un punto a parte en lugar de explicarlo en la parte de los _arrays_ o los objetos porque es algo similar en los dos casos. Y de igual forma también es un concepto sencillo.

La traducción de `rest` es resto, y para eso es básicamente para lo que sirve, para guardar en esa constante el valor del resto. Unos ejemplos rápidos:

```javascript
// Aquí tenemos un array
const fruits = ["🍐", "🍎", "🍌", "🍉"]; // ¿Por qué uso emojis?

// ...y aquí un objeto
const animal = {
  name: "Coda",
  age: 10,
  kind: "🐶", // Porque se puede 🤓
};

const [pear, apple, ...rest] = fruits;
console.log(pear); // "🍐"
console.log(apple); // "🍎"
console.log(rest); // ["🍌", "🍉"]

const { name, ...rest } = animal;
console.log(name); // "Coda"
console.log(rest); // { age: 10, kind: "🐶" };
```

\* Incluso podría usarlos en los nombres de las propiedades.

## Y ahora todo junto

Algo sencillo, un objeto como los anteriores, un método que desestructura el parámetro y retorna un _array_ con una respuesta simple y otra compleja, para poder desestructurar la respuesta.

```javascript
const animal = {
  name: "Coda",
  age: 10,
  kind: "🐶",
};

// 🚨 Otra opción de las funciones flecha, es que podemos
// retornar directamente sin utilizar llaves, muy útil
// en funciones sencillas:
const helloDog = ({ name, kind }) => [
  `Hello ${name}`,
  `Hello ${name}, you're a good ${kind}`,
];

const [simple, complex] = helloDog(animal);

console.log(simple); // Hello Coda
console.log(complex); // Hello Coda, you're a good 🐶
```

Espero que el concepto se haya entendido y si no acabas de ver las ventajas, te animo a que lo pruebes poco a poco y que empieces a integrarlo en lugares concretos que controles y conozcas bien.

Photo by Artificial Photography on Unsplash.
