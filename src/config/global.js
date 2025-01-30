export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Hábitos y entornos saludables',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ambientes saludables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Alimentación, higiene y descanso',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Revisiones médicas periódicas y las vacunas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Entornos seguros y saludables',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Rutas de atención primaria',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aprovechamiento del medio: cosechas, alimentos locales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Agricultura local y familiar',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Preparación de multimezclas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Prevención de enfermedades con covalentes con la desnutrición u obesidad infantil',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fortificación de los alimentos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Fortalezas de la lactancia materna en el proceso de crecimiento y desarrollo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Dentición',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Consejo Nacional de Política Económica Social República de Colombia Departamento Nacional de Planeación (2007). Documento CONPES social 113. POLÍTICA NACIONAL DE SEGURIDAD ALIMENTARIA Y NUTRICIONAL. ',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Conpes/Conpes%20113%20de%202008.pdf ',
    },
    {
      referencia: 'Declaración de Roma Sobre la Seguridad Alimentaria.',
      link: 'https://www.oda-alc.org/documentos/1341937156.pdf ',
    },
    {
      referencia:
        'Deutsche Wlthungerhife e.V. y Concern Worldwode (2021). El mapa del hambre en el mundo. ',
      link:
        'https://elordenmundial.com/mapas-y-graficos/el-mapa-del-hambre-en-el-mundo/',
    },
    {
      referencia:
        'Gobierno de Colombia. (2018). POLÍTICA NACIONAL DE INFANCIA Y ADOLESCENCIA 2018-2030.',
      link:
        'https://www.icbf.gov.co/sites/default/files/politica_nacional_de_infancia_y_adolescencia.pdf ',
    },
    {
      referencia:
        'Bonilla Caballero, Y. (2012).  Análisis detallado de las políticas de alimentación escolar en América Latina para el fortalecimiento del programa de alimentación escolar en Colombia. FAO. Colombia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/96510 ',
    },
    {
      referencia:
        'Correa Restrepo, M. (2010). Apuesta por la infancia en Colombia: (ed.). Barranquilla, Colombia: Universidad del Norte. Universidad del Valle, Fundación Fesco, Fundación Caminos de Identidad, Fundación Cultural Genninnndo, Fundación Bernard van Leen, Barranqujlla: Ediciones Uninorte, 20107.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/85292?page=6. ',
    },
    {
      referencia:
        'KATZ, D (2015). Nutrición Médica. 3ª edición. Wolters Kluwer. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/94658',
    },
  ],
  glosario: [
    {
      termino: 'Acceso a la alimentación ',
      significado:
        'posibilidad de todas las personas de alcanzar una alimentación adecuada y sostenible. Se refiere a los alimentos que puede obtener o comprar una familia, una comunidad o un país. Sus determinantes básicos son el nivel de ingresos, la condición de vulnerabilidad, las condiciones socio-geográficas, la distribución de ingresos y activos (monetarios y no monetarios) y los precios de los alimentos.',
    },
    {
      termino: 'Aprovechamiento o utilización biológica de los alimentos',
      significado:
        'se refiere a cómo y cuánto aprovecha el cuerpo humano los alimentos que consume y cómo los convierte en nutrientes para ser asimilados por el organismo. Sus principales determinantes son: el medio ambiente, el estado de salud de las personas, los entornos y estilos de vida, la situación nutricional de la población, la disponibilidad, la calidad y el acceso a los servicios de salud, agua potable, saneamiento básico y fuentes de energía.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'se refiere al conjunto de características de los alimentos que garantizan que sean aptos para el consumo humano, que exigen el cumplimiento de una serie de condiciones y medidas necesarias durante la cadena agroalimentaria hasta el consumo y el aprovechamiento de estos, asegurando que una vez ingeridos no representen un riesgo (biológico, físico o químico) que menoscabe la salud. No se puede prescindir de la inocuidad de un alimento al examinar la calidad, dado que la inocuidad es un atributo de la calidad. Sus determinantes básicos son: la normatividad (elaboración, promoción, aplicación, seguimiento); la inspección, vigilancia y control; los riesgos biológicos, físicos y químicos, y la manipulación, conservación y preparación de los alimentos.',
    },
    {
      termino: 'Carbohidratos',
      significado:
        'los carbohidratos son uno de los macronutrientes y la principal fuente de energía del cuerpo. Existen dos tipos principales de carbohidratos: los azúcares (presente en la leche, las frutas, el azúcar de mesa y los dulces) y los almidones, que se encuentran principalmente en los cereales, tubérculos, panes, galletas y pastas.',
    },
    {
      termino: 'Consumo',
      significado:
        'se refiere a los alimentos que comen las personas y está relacionado con la selección de estos, las creencias, las actitudes y las prácticas. Sus determinantes son: la cultura, los patrones y los hábitos alimentarios, la educación alimentaria y nutricional, la información comercial y nutricional, el nivel educativo, la publicidad, el tamaño y la composición de la familia.',
    },
    {
      termino: 'Desnutrición',
      significado:
        'corresponde a la condición que se produce cuando el cuerpo no recibe los nutrientes necesarios para mantenerse sano. Puede ser causada por una mala alimentación, inanición, trastornos alimentarios, o por problemas para digerir o absorber los nutrientes. ',
    },
    {
      termino: 'Disponibilidad de alimentos',
      significado:
        'cantidad de alimentos con que se cuenta a nivel nacional, regional y local. Está relacionada con el suministro suficiente de estos frente a los requerimientos de la población y depende de la producción y la importación. Está determinada por: la estructura productiva (agropecuaria, agroindustrial), los sistemas de comercialización internos y externos, los factores productivos (tierra, crédito, agua, tecnología, recurso humano), las condiciones ecosistémicas (clima, recursos genéticos y biodiversidad), las políticas de producción y comercio, y las tensiones sociopolíticas (relaciones económicas, sociales y políticas entre actores).',
    },
    {
      termino: 'Entorno saludable ',
      significado:
        'un entorno saludable es aquel que brinda los elementos necesarios para la salud física y espiritual, el bienestar cultural y la felicidad de las personas. Estos entornos se encuentran en los lugares donde viven las personas, como el hogar, el barrio, la localidad, los sitios de estudio, los lugares de trabajo y esparcimiento.',
    },
    {
      termino: 'Emaciación',
      significado:
        'tipo de desnutrición que se caracteriza por un peso insuficiente en relación con la altura, causado por una pérdida de peso repentina, ya sea por una alimentación insuficiente o por una enfermedad infecciosa y en paralelo.',
    },
    {
      termino: 'Grasas',
      significado:
        'son nutrientes que el cuerpo utiliza para generar energía, hormonas, membranas celulares y tejido nervioso. También ayudan a absorber las vitaminas A, D, E y K. Provienen de origen animal y vegetal, principalmente de nueces, aceites vegetales, el aguacate y el coco. Pueden ser saturadas o insaturadas, y la mayoría de los alimentos contienen ambos tipos. Sin embargo, es importante consumirlas con moderación, ya que el exceso de grasa puede ser poco saludable.',
    },
    {
      termino: 'Hambre',
      significado:
        'es la sensación física que además de parecer incómoda es dolorosa, causada por un consumo insuficiente de energía alimentaria. Es crónica cuando la persona no consume una cantidad suficiente de calorías de forma regular para llevar una vida normal, activa y saludable, según su edad, estilo de vida y requerimientos nutricionales.',
    },
    {
      termino: 'Inseguridad alimentaria',
      significado:
        'es la falta de acceso regular a los alimentos nutritivos e inocuos, o la incapacidad de pagarlos.',
    },
    {
      termino: 'Minerales',
      significado:
        'los minerales son clasificados como macrominerales y microminerales, según la cantidad que debe de ser ingerida por persona. El cuerpo humano necesita una mayor cantidad de calcio, fósforo, magnesio, sodio, potasio, cloro y azufre, que son considerados macrominerales. Se encuentran en una gran cantidad de alimentos como frutas y verduras, lácteos, leguminosas, productos de origen animal y cereales por lo que la importancia de llevar una dieta balanceada contribuye a alcanzar los niveles adecuados de estos nutrimentos. ',
    },
    {
      termino: 'Proteínas',
      significado:
        'son macromoléculas formadas por cadenas de aminoácidos, provienen principalmente de origen animal y en menor proporción y diversidad de aminoácidos, de origen vegetal. Su importancia en la alimentación radica en que son necesarias para la estructura, función y regulación de los tejidos y órganos del cuerpo.',
    },
    {
      termino: 'Sistema de salud',
      significado:
        'es una estructura social que reúne a personas y acciones para mejorar y mantener la salud de la población. En Colombia, el sistema de salud está regulado por el Ministerio de la Salud y Protección Social y es parte del Sistema de Seguridad Social.',
    },
    {
      termino: 'Vitaminas',
      significado:
        'son sustancias orgánicas que el cuerpo necesita para crecer, desarrollarse y funcionar correctamente. Son esenciales para el funcionamiento celular y se obtienen principalmente a través de la alimentación',
    },
  ],
}
