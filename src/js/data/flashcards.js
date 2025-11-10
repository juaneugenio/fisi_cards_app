// Estructura: array de objetos de tema, cada uno con su propio array de tarjetas (cards)

export const flashcardsData = [
  {
    topic: "Redes",
    cards: [
      {
        front: "¿Qué es una dirección IP?",
        back: "Es un identificador único para cada dispositivo en una red que utiliza el protocolo IP."
      },
      {
        front: "¿Para qué sirve una máscara de subred?",
        back: "Permite definir qué parte de la dirección IP corresponde a la red y cuál a los hosts."
      }
    ]
  },
  {
    topic: "Programación Python",
    cards: [
      {
        front: "¿Qué es una lista en Python?",
        back: "Es una colección ordenada y mutable de elementos que pueden ser de cualquier tipo."
      },
      {
        front: "¿Cómo creas una función en Python?",
        back: "Usando la palabra clave 'def', por ejemplo: def mi_funcion():"
      }
    ]
  }
];
