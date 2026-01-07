import { ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  phone: '+506 8403 9580',
  whatsapp: '50684039580',
  email: 'crtripsgreen@gmail.com',
  address: 'Operaciones en todo el territorio nacional, Costa Rica',
  hours: {
    week: '08:00 – 17:00 (L–V)',
    weekend: '08:00 – 16:00 (S–D)'
  }
};

export const TRANSLATIONS = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      expeditions: 'Expediciones',
      consult: 'Consultar',
      consultWhatsapp: 'Consultar por WhatsApp'
    },
    hero: {
      subtitle: 'Guías Naturalista',
      description: 'Organizamos recorridos naturales y visitas personalizadas. Conozca el país de la mano de guías certificados por el ICT.',
      puraVida: 'Pura Vida.'
    },
    about: {
      tag: 'Expediciones Naturalistas',
      title: 'Quiénes somos',
      years: 'Años de Experiencia',
      p1: 'Somos tus asesores, para ese viaje tan deseado que has anhelado, cuéntanos cuál experiencia deseas vivir y con todo gusto la hacemos realidad.',
      p2: 'Nos esforzamos por servirle con sencillez, procurando que su estancia sea segura y tranquila.',
      security: 'Seguridad',
      securityTag: 'Certificado ICT',
      attention: 'Atención',
      attentionTag: 'Soporte Local'
    },
    mission: {
      tag: 'Nuestro Propósito',
      title: 'Misión',
      content: 'Somos una empresa de viajes dedicada a crear experiencias auténticas e inolvidables para viajeros nacionales e internacionales. A través de nuestros servicios en turismo receptivo, rural e inclusivo, ofrecemos conexiones genuinas con la riqueza cultural, gastronómica y folclórica de Costa Rica. Comprometidos con los más altos estándares de calidad, buscamos que cada visitante descubra nuestros destinos de manera significativa, promoviendo un turismo sostenible y accesible para todos.'
    },
    vision: {
      tag: 'Nuestra Proyección',
      title: 'Visión',
      content: 'Convertirnos en una empresa de viajes y tour operador en Costa Rica, especializados en Parque Nacional Corcovado y otros parques naturales, aguas termales y el único río celeste de Centroamérica, reconocidos por catalizar experiencias únicas a través del turismo, de bienestar y accesible-inclusivo, contribuyendo al desarrollo sostenible y posicionando nuestras propuestas como modelos de excelencia en el ámbito nacional.'
    },
    values: {
      tag: 'Nuestra Base Ética',
      title: 'Valores',
      v1: '1. Ética Profesional',
      v2: '2. Inclusión',
      v3: '3. Trabajo en equipo',
      v4: '4. Responsabilidad social y empresarial',
      v5: '5. Compromiso',
      v6: '6. Integridad'
    },
    trust: {
      tag: 'Confianza',
      title: 'Acreditaciones',
      official: 'Oficiales.'
    },
    audience: {
      tag: 'Inclusión',
      title: 'Para cada',
      visitor: 'Visitante.',
      description: 'Organizamos viajes que se adaptan a las necesidades de cada persona. Nos hemos asegurado de que todos puedan disfrutar la experiencia.',
      items: {
        ninos: 'Niños',
        jovenes: 'Jóvenes',
        adultosMayores: 'Adultos mayores',
        discapacidad: 'Personas con discapacidad',
        familias: 'Familias',
        parejas: 'Parejas',
        grupos: 'Grupos turísticos',
        instituciones: 'Instituciones públicas y privadas',
        internacionales: 'Turistas de todos los países'
      },
      captions: {
        ninos: 'Diversión y seguridad para los pequeños',
        familias: 'Aventuras compartidas en el paraíso',
        jovenes: 'Aventura y descubrimiento sin límites',
        adultosMayores: 'Comodidad y serenidad en la naturaleza',
        parejas: 'Momentos inolvidables juntos',
        instituciones: 'Logística integral para organizaciones',
        grupos: 'Logística profesional para grupos',
        internacionales: 'Bienvenidos al corazón de Centroamérica',
        default: 'Logística dedicada'
      }
    },
    biodiversity: {
      tag: 'Datos Interesantes',
      title: 'Santuario',
      life: 'de Vida.',
      quote: '"En apenas el 0.03% de la superficie terrestre, Costa Rica resguarda casi el 6% de la biodiversidad mundial."',
      fact1: 'Más de 500,000 especies habitan este territorio, convirtiéndolo en uno de los lugares más biológicamente densos del planeta.',
      fact2: 'El 26% del país está protegido por Parques Nacionales y Reservas, un compromiso histórico con la conservación.',
      fact3: 'Somos el hogar de más de 900 especies de aves y servimos como puente biológico esencial para las migraciones de todo el continente.',
      fact4: 'Contamos con muchas de las cataratas más altas del país con sus aguas naturales, además de volcanes y selvas tropicales en distancias cortas.'
    },
    services: {
      tag: 'Servicios',
      title: 'Nuestra',
      offer: 'Oferta.',
      arrival: 'Llegada',
      arrivalDesc: 'Le recibimos en el aeropuerto el primer día para iniciar su viaje.',
      mobility: 'Movilidad',
      mobilityDesc: 'Contamos con transporte privado y coordinación local profesional.',
      items: [
        "Transporte turístico privado",
        "Hospedaje en cabinas o hoteles",
        "Alimentación (desayuno, almuerzo y cena típica costarricense)",
        "Tours con guía profesional certificado por el ICT",
        "Atención personalizada durante toda su estadía en Costa Rica",
        "Descanso en playas, Bosques y ríos"
      ]
    },
    tours: {
      tag: 'Nuestras Expediciones',
      title: 'Descubra',
      paradise: 'el Paraíso de Costa Rica.',
      explore: 'Explorar Actividades',
      categories: [
        {
          category: "🌴 Naturaleza y Vida Silvestre",
          items: ["Tours de playa", "Caminatas en senderos de bosque y montaña", "Avistamiento de animales", "Avistamiento de aves", "Tours nocturnos", "Safari accesible"]
        },
        {
          category: "🐎 Cultura y Tradición",
          items: ["Cabalgatas", "Tours culturales indígenas", "Tours del café", "Tours del chocolate", "City tours"]
        },
        {
          category: "🌋 Aventura",
          items: ["Volcanes", "Cataratas", "Canopy y tirolesa", "Rappel", "Escalada de árboles", "Tarzan swing", "Bungee"]
        },
        {
          category: "🌊 Actividades Acuáticas",
          items: ["Pesca deportiva", "Tours de delfines", "Avistamiento de ballenas", "Snorkel", "Buceo", "Kayak", "Tours de ríos", "Surf"]
        },
        {
          category: "🐢 Experiencias Especiales",
          items: ["Tours de tortugas", "Bioluminiscencia", "Tours familiares", "Relajación y masajes"]
        }
      ]
    },
    plans: {
      tag: 'Nuestros Planes',
      title: 'Planes de Viaje',
      cr: 'a Costa Rica.',
      subtitle: 'Experiencias diseñadas para todo tipo de viajeros',
      description: 'Organizamos su visita a Costa Rica de forma personalizada, según su presupuesto, estilo de viaje y destinos que desee conocer.',
      labels: {
        from: 'Desde',
        perPerson: 'por persona / día',
        inquiry: 'Consulta'
      },
      economic: {
        name: 'Plan Económico',
        price: '100',
        desc: 'Ideal para viajeros que buscan una experiencia auténtica y accesible.',
        includes: [
          'Hospedaje en cabina o casa de alquiler',
          'Ventilador o aire acondicionado',
          'Alimentación completa (desayuno, almuerzo y cena)',
          'Transporte público hacia la zona elegida'
        ],
        notIncludes: 'No incluye tours ni guía',
        optionalTours: 'Tours opcionales: Desde $55 USD hasta $250 USD por persona / día.'
      },
      regular: {
        name: 'Plan Regular',
        price: '195',
        desc: 'Comodidad y mejor movilidad para disfrutar más del país.',
        includes: [
          'Hospedaje con aire acondicionado',
          'Cocina equipada',
          'Alimentación completa (desayuno, almuerzo y cena)',
          'Transporte terrestre privado'
        ],
        notIncludes: 'No incluye tours',
        optionalTours: 'Tours opcionales: Desde $55 USD hasta $250 USD por persona / día.'
      },
      premium: {
        name: 'Plan Premium',
        price: '5,500',
        desc: 'Una experiencia exclusiva y cómoda.',
        includes: [
          'Transporte privado al aeropuerto',
          'Hotel 5 estrellas o casa privada con piscina',
          'Servicio de mesero y bebidas incluidas',
          'Tours con guía certificado y transporte privado',
          'Traslados en avión a destinos lejanos'
        ]
      },
      family: {
        name: 'Plan Familiar',
        price: 'Variable',
        desc: 'Diseñado para familias que viajan juntas.',
        options: [
          '🏡 Familiar económico: alquiler de casas',
          '🏨 Familiar medio: hoteles familiares',
          '🌟 Familiar premium: suites familiares'
        ]
      },
      closing: 'Usted elige el plan, el destino y las actividades. Nosotros nos encargamos de todo.',
      yourWay: 'Tu viaje, a tu manera'
    },
    final: {
      tag: 'Pura Vida',
      title: 'Dejando una',
      happiness: 'huella de felicidad.',
      quote: '"Cada rincón de Costa Rica cuenta una historia de vida. Permítanos ser su guía profesional en este viaje hacia lo extraordinario."',
      exploration: 'Exploración',
      explorationTag: 'Rutas Directas',
      nature: 'Naturaleza',
      natureTag: 'Biodiversidad Pura',
      excellence: 'Excelencia',
      excellenceTag: 'Servicio Certificado'
    },
    agenda: {
      tag: 'Contacto Directo',
      title: 'Agendar',
      consult: 'Consulta.',
      name: 'Nombre',
      namePlaceholder: 'Su nombre...',
      desc: 'Descripción breve',
      descPlaceholder: 'Cuéntenos qué experiencia desea...',
      submit: 'Enviar Consulta',
      orWrite: 'O escriba directamente a:'
    },
    footer: {
      quote: '"Agencia turística comprometida con la excelencia y la sostenibilidad en cada rincón de nuestra hermosa Costa Rica."',
      rights: '© 2026 Costa Rica Trips Green | ICT Certified Guide'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      expeditions: 'Expeditions',
      consult: 'Consult',
      consultWhatsapp: 'Consult via WhatsApp'
    },
    hero: {
      subtitle: 'Naturalist Guides',
      description: 'We organize nature tours and personalized visits. Explore the country with ICT-certified local guides.',
      puraVida: 'Pure Life.'
    },
    about: {
      tag: 'Naturalist Expeditions',
      title: 'Who We Are',
      years: 'Years of Experience',
      p1: 'We are your advisors for that long-awaited dream trip. Tell us what experience you want to live and we will make it happen.',
      p2: 'We strive to serve you with simplicity, ensuring your stay is safe and peaceful.',
      security: 'Safety',
      securityTag: 'ICT Certified',
      attention: 'Attention',
      attentionTag: 'Local Support'
    },
    mission: {
      tag: 'Our Purpose',
      title: 'Mission',
      content: 'We are a travel company dedicated to creating authentic and unforgettable experiences for national and international travelers. Through our receptive, rural, and inclusive tourism services, we offer genuine connections with Costa Rica\'s cultural, gastronomic, and folkloric richness. Committed to the highest quality standards, we seek for every visitor to discover our destinations meaningfully, promoting sustainable and accessible tourism for all.'
    },
    vision: {
      tag: 'Our Projection',
      title: 'Vision',
      content: 'To become a leading travel company and tour operator in Costa Rica, specialized in Corcovado National Park and other natural parks, recognized for catalyzing unique experiences through wellness and accessible-inclusive tourism, contributing to sustainable development and positioning our proposals as models of excellence nationwide.'
    },
    values: {
      tag: 'Our Ethical Basis',
      title: 'Values',
      v1: '1. Professional Ethics',
      v2: '2. Inclusion',
      v3: '3. Teamwork',
      v4: '4. Social & Business Responsibility',
      v5: '5. Commitment',
      v6: '6. Integrity'
    },
    trust: {
      tag: 'Trust',
      title: 'Official',
      official: 'Accreditations.'
    },
    audience: {
      tag: 'Inclusion',
      title: 'For Every',
      visitor: 'Visitor.',
      description: 'We organize trips adapted to each person\'s needs. We ensure everyone can enjoy the experience.',
      items: {
        ninos: 'Children',
        jovenes: 'Youth',
        adultosMayores: 'Seniors',
        discapacidad: 'People with disabilities',
        familias: 'Families',
        parejas: 'Couples',
        grupos: 'Tour groups',
        instituciones: 'Public & Private Institutions',
        internacionales: 'Tourists from all countries'
      },
      captions: {
        ninos: 'Fun and safety for the little ones',
        familias: 'Shared adventures in paradise',
        jovenes: 'Adventure and discovery without limits',
        adultosMayores: 'Comfort and serenity in nature',
        parejas: 'Unforgettable moments together',
        instituciones: 'Comprehensive logistics for organizations',
        grupos: 'Professional logistics for groups',
        internacionales: 'Welcome to the heart of Central America',
        default: 'Dedicated logistics'
      }
    },
    biodiversity: {
      tag: 'Interesting Facts',
      title: 'Sanctuary',
      life: 'of Life.',
      quote: '"In just 0.03% of the earth\'s surface, Costa Rica shelters almost 6% of the world\'s biodiversity."',
      fact1: 'More than 500,000 species inhabit this territory, making it one of the most biologically dense places on the planet.',
      fact2: '26% of the country is protected by National Parks and Reserves, a historic commitment to conservation.',
      fact3: 'We are home to more than 900 bird species and serve as an essential biological bridge for migrations across the continent.',
      fact4: 'From active volcanoes to tropical jungles and reefs, the country offers 12 distinct climate zones in short distances.'
    },
    services: {
      tag: 'Services',
      title: 'Our',
      offer: 'Offer.',
      arrival: 'Arrival',
      arrivalDesc: 'We greet you at the airport on the first day to begin your journey.',
      mobility: 'Mobility',
      mobilityDesc: 'We have private transportation and professional local coordination.',
      items: [
        "Private tourist transportation",
        "Cabin or hotel accommodation",
        "Meals (breakfast, lunch, and typical Costa Rican dinner)",
        "Tours with ICT-certified professional guides",
        "Personalized attention during your stay in Costa Rica",
        "Relaxation on beaches, Forests and rivers"
      ]
    },
    tours: {
      tag: 'Our Expeditions',
      title: 'Discover',
      paradise: 'the Paradise of Costa Rica.',
      explore: 'Explore Activities',
      categories: [
        {
          category: "🌴 Nature & Wildlife",
          items: ["Beach tours", "Forest & mountain trail hikes", "Wildlife spotting", "Bird watching", "Night tours", "Accessible safari"]
        },
        {
          category: "🐎 Culture & Tradition",
          items: ["Horseback riding", "Indigenous cultural tours", "Coffee tours", "Chocolate tours", "City tours"]
        },
        {
          category: "🌋 Adventure",
          items: ["Volcanoes", "Waterfalls", "Canopy & zipline", "Rappelling", "Tree climbing", "Tarzan swing", "Bungee"]
        },
        {
          category: "🌊 Water Activities",
          items: ["Sport fishing", "Dolphin tours", "Whale watching", "Snorkeling", "Diving", "Kayaking", "River tours", "Surfing"]
        },
        {
          category: "🐢 Special Experiences",
          items: ["Turtle tours", "Bioluminescence", "Family tours", "Relaxation & massages"]
        }
      ]
    },
    plans: {
      tag: 'Our Packages',
      title: 'Travel Plans',
      cr: 'to Costa Rica.',
      subtitle: 'Experiences designed for all types of travelers',
      description: 'We organize your visit to Costa Rica in a personalized way, according to your budget, travel style, and chosen destinations.',
      labels: {
        from: 'From',
        perPerson: 'per person / day',
        inquiry: 'Inquiry'
      },
      economic: {
        name: 'Economic Plan',
        price: '100',
        desc: 'Ideal for travelers looking for an authentic and accessible experience.',
        includes: [
          'Cabin or rental house accommodation',
          'Fan or air conditioning',
          'Full board (breakfast, lunch, and dinner)',
          'Public transportation to chosen area'
        ],
        notIncludes: 'Does not include tours or guide',
        optionalTours: 'Optional tours: From $55 USD to $250 USD per person / day.'
      },
      regular: {
        name: 'Regular Plan',
        price: '195',
        desc: 'Comfort and better mobility to enjoy more of the country.',
        includes: [
          'Accommodation with air conditioning',
          'Equipped kitchen',
          'Full board (breakfast, lunch, and dinner)',
          'Private land transportation'
        ],
        notIncludes: 'Does not include tours',
        optionalTours: 'Optional tours: From $55 USD to $250 USD per person / day.'
      },
      premium: {
        name: 'Premium Plan',
        price: '5,500',
        desc: 'An exclusive and comfortable experience.',
        includes: [
          'Private airport transportation',
          '5-star hotel or private house with pool',
          'Waiter service and drinks included',
          'Tours with certified guide and private transport',
          'Domestic flights to distant destinations'
        ]
      },
      family: {
        name: 'Family Plan',
        price: 'Variable',
        desc: 'Designed for families traveling together.',
        options: [
          '🏡 Economic Family: rental of family houses',
          '🏨 Regular Family: family hotels',
          '🌟 Premium Family: family suites'
        ]
      },
      closing: 'You choose the plan, the destination, and the activities. We take care of everything.',
      yourWay: 'Your trip, your way'
    },
    final: {
      tag: 'Pura Vida',
      title: 'Leaving a',
      happiness: 'mark of happiness.',
      quote: '"Every corner of Costa Rica tells a story of life. Let us be your professional guide on this journey to the extraordinary."',
      exploration: 'Exploración',
      explorationTag: 'Direct Routes',
      nature: 'Nature',
      natureTag: 'Pure Biodiversity',
      excellence: 'Excelencia',
      excellenceTag: 'Certified Service'
    },
    agenda: {
      tag: 'Direct Contact',
      title: 'Book a',
      consult: 'Consultation.',
      name: 'Name',
      namePlaceholder: 'Your name...',
      desc: 'Short description',
      descPlaceholder: 'Tell us what experience you desire...',
      submit: 'Send Inquiry',
      orWrite: 'Or write directly to:'
    },
    footer: {
      quote: '"Travel agency committed to excellence and sustainability in every corner of our beautiful Costa Rica."',
      rights: '© 2026 Costa Rica Trips Green | ICT Certified Guide'
    }
  }
};

export const TOUR_CATEGORIES = TRANSLATIONS.es.tours.categories;

export const AUDIENCE = [
  "Niños", "Jóvenes", "Adultos mayores", "Personas con discapacidad", 
  "Familias", "Parejas", "Grupos turísticos", "Instituciones públicas y privadas", "Turistas de todos los países"
];

export const INCLUDED_SERVICES = TRANSLATIONS.es.services.items;