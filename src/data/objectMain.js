export const objectMain = {
  postre: {
    icon: "/src/img/postre.png",
    name: "Postre",
    alt: "Ícono de postres",
    description: "Disfruta de nuestros deliciosos postres, perfectos para endulzar tu día.",
    route: "/postres",
    active: true,
    items: [
      {
        name: "Tarta de Queso",
        price: 5.99,
        description: "Clásica tarta de queso con base de galleta y mermelada de frutas.",
        image: "/src/img/tartaQueso.jpg",
        status: "available"
      },
      {
        name: "Brownie con Helado",
        price: 6.49,
        description: "Delicioso brownie de chocolate servido con una bola de helado.",
        image: "/src/img/brownieHelado.jpg",
        status: "available"
      },
      {
        name: "Frutas Frescas",
        price: 4.99,
        description: "Una selección fresca de frutas de temporada.",
        image: "/src/img/frutasFrescas.jpg",
        status: "available"
      }
    ]
  },

  pizza: {
    icon: "/src/img/pizza.png",
    name: "Pizza",
    alt: "Ícono de pizza",
    description: "Pizzas caseras con masa artesanal y sabores irresistibles.",
    route: "/pizzas",
    active: true,
    items: [
      {
        name: "Muzzarella",
        price: 8.99,
        description: "Pizza clásica con salsa de tomate, muzzarella y orégano.",
        image: "/src/img/pizza-muzz.jpg",
        status: "available"
      },
      {
        name: "Napolitana",
        price: 9.49,
        description: "Muzzarella, tomate fresco, ajo y albahaca.",
        image: "/src/img/pizza-napo.jpg",
        status: "available"
      },
      {
        name: "Fugazzeta",
        price: 9.99,
        description: "Pizza de cebolla, muzzarella y un toque de parmesano.",
        image: "/src/img/pizza-fuga.jpg",
        status: "available"
      }
    ]
  },

  bebidas: {
    icon: "/src/img/bebidas.png",
    name: "Bebidas",
    alt: "Ícono de bebidas",
    description: "Refrescos, jugos y bebidas calientes para acompañar tus comidas.",
    route: "/bebidas",
    active: true,
    items: [
      {
        name: "Agua Mineral",
        price: 1.99,
        description: "Agua sin gas, fresca y purificada.",
        image: "/src/img/agua.jpg",
        status: "available"
      },
      {
        name: "Coca-Cola",
        price: 2.49,
        description: "Refresco clásico en lata de 350ml.",
        image: "/src/img/cocaCola.jpg",
        status: "available"
      },
      {
        name: "Jugo de Naranja",
        price: 2.99,
        description: "Jugo natural exprimido, sin azúcar agregada.",
        image: "/src/img/jugoNaranja.jpg",
        status: "available"
      }
    ]
  },

  ensaladas: {
    icon: "/src/img/ensalada.png",
    name: "Ensaladas",
    alt: "Ícono de ensaladas",
    description: "Opciones frescas y saludables para todos los gustos.",
    route: "/ensaladas",
    active: true,
    items: [
      {
        name: "Ensalada César",
        price: 6.99,
        description: "Lechuga romana, croutons, queso parmesano y aderezo césar.",
        image: "/src/img/ensaladaCesar.jpg",
        status: "available"
      },
      {
        name: "Ensalada Caprese",
        price: 5.99,
        description: "Mozzarella, tomate fresco y albahaca con aceite de oliva.",
        image: "/src/img/ensaladaCaprese.jpg",
        status: "available"
      },
      {
        name: "Ensalada Mixta",
        price: 5.49,
        description: "Lechuga, zanahoria, tomate, huevo duro y aceitunas.",
        image: "/src/img/ensaladaMixta.jpg",
        status: "available"
      }
    ]
  },

  hamburguesas: {
    icon: "/src/img/hamburguesa.png",
    name: "Hamburguesas",
    alt: "Ícono de hamburguesa",
    description: "Jugosas hamburguesas con ingredientes de primera calidad.",
    route: "/hamburguesas",
    active: true,
    items: [
      {
        name: "Clásica con Queso",
        price: 7.99,
        description: "Hamburguesa de carne con queso cheddar, lechuga y tomate.",
        image: "/src/img/hamburguesaClasica.jpg",
        status: "available"
      },
      {
        name: "Bacon Burger",
        price: 8.99,
        description: "Con panceta crocante, doble queso y salsa BBQ.",
        image: "/src/img/hamburguesaBacon.jpg",
        status: "available"
      },
      {
        name: "Veggie Burger",
        price: 7.49,
        description: "Hamburguesa de garbanzo y vegetales con palta y rúcula.",
        image: "/src/img/hamburguesaVeggie.jpg",
        status: "available"
      }
    ]
  },

  empanadas: {
    icon: "/src/img/empanada.png",
    name: "Empanadas",
    alt: "Ícono de empanadas",
    description: "Una variedad de empanadas tradicionales argentinas, horneadas o fritas.",
    route: "/empanadas",
    active: true,
    items: [
      {
        name: "Carne Suave",
        price: 2.00,
        description: "Rellenas de carne picada, cebolla, huevo y condimentos suaves.",
        image: "/src/img/empanadaCarne.jpg",
        status: "available"
      },
      {
        name: "Jamón y Queso",
        price: 2.20,
        description: "Clásica combinación derretida dentro de una masa crujiente.",
        image: "/src/img/empanadaJamonQueso.jpg",
        status: "available"
      },
      {
        name: "Humita",
        price: 2.30,
        description: "Relleno cremoso de maíz, cebolla y queso.",
        image: "/src/img/empanadaHumita.jpg",
        status: "available"
      }
    ]
  },

  sandwiches: {
    icon: "/src/img/sandwich.png",
    name: "Sándwiches",
    alt: "Ícono de sándwiches",
    description: "Sándwiches artesanales con panes frescos y rellenos abundantes.",
    route: "/sandwiches",
    active: true,
    items: [
      {
        name: "Sándwich de Milanesa",
        price: 6.99,
        description: "Milanesa de carne, tomate, lechuga y mayonesa en pan francés.",
        image: "/src/img/sandwichMilanesa.jpg",
        status: "available"
      },
      {
        name: "Sándwich Vegetariano",
        price: 6.49,
        description: "Verduras grilladas, queso y palta en pan integral.",
        image: "/src/img/sandwichVeggie.jpg",
        status: "available"
      },
      {
        name: "Sándwich de Pollo",
        price: 6.79,
        description: "Pollo a la plancha, lechuga, tomate y salsa tártara.",
        image: "/src/img/sandwichPollo.jpg",
        status: "available"
      }
    ]
  },

  pastas: {
    icon: "/src/img/pasta.png",
    name: "Pastas",
    alt: "Ícono de pastas",
    description: "Platos de pasta casera con salsas tradicionales italianas.",
    route: "/pastas",
    active: true,
    items: [
      {
        name: "Fideos con Tuco",
        price: 7.99,
        description: "Fideos caseros con salsa de tomate, carne y especias.",
        image: "/src/img/pastaTuco.jpg",
        status: "available"
      },
      {
        name: "Ravioles de Ricota",
        price: 8.49,
        description: "Ravioles rellenos con ricota y espinaca, bañados en salsa blanca.",
        image: "/src/img/raviolesRicota.jpg",
        status: "available"
      },
      {
        name: "Ñoquis de Papa",
        price: 7.49,
        description: "Ñoquis suaves de papa con salsa fileto o pesto.",
        image: "/src/img/noquisPapa.jpg",
        status: "available"
      }
    ]
  }
};
