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
        'UNICEF (2021). Entornos saludables para niños sanos. División de Programas Fondo de las Naciones Unidas para la Infancia. United Nations Plaza Nueva York, NY, 10017, Estados Unidos',
      link:
        'https://www.unicef.org/media/114181/file/SPANISH-Healthy-Environments-for-Healt',
    },
    {
      referencia:
        'REPÚBLICA DE COLOMBIA. (2019). Política Nacional de Infancia y Adolescencia Ruta Integral de Atenciones. Colombia.',
      link:
        'https://www.icbf.gov.co/system/file/politica_nacional_de_infancia_y_adolescencia_-_ria.pdf',
    },
    {
      referencia:
        'UNICEF. (2019). EL ESTADO MUNDIAL DE LA INFANCIA 2019 Crecer bien en un mundo en transformación.',
      link:
        'https://www.unicef.org/lac/sites/unicef.org.lac/files/2019-10/20191015_SOWC_2019_LACRO_e-version_SP.pdf',
    },
    {
      referencia:
        'MINISTERIO DE AGRICULTURA. (2013) Lineamientos estratégicos de política pública Agricultura Campesina, Familiar y Comunitaria ACFC. Colombia.',
      link: 'https://www.minagricultura.gov.co/lineamientos-acfc.pdf',
    },
    {
      referencia:
        'ARAYA, H. ET.AL. (1997). Producción y manejo de datos de composición química de alimentos en nutrición. Capítulo 2. Uso de tablas de composición de alimentos en las intervenciones alimentarias y nutricionales. Chile.',
      link: 'https://www.fao.org/4/ah833s/AH833S00.htm',
    },
    {
      referencia:
        'Bonilla Caballero, Y. (2012). Análisis detallado de las políticas de alimentación escolar en América Latina para el fortalecimiento del programa de alimentación escolar en Colombia. FAO. Colombia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/96510',
    },
    {
      referencia:
        'KATZ, D (2015). Nutrición Médica. 3ª edición. Wolters Kluwer.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/94658',
    },
    {
      referencia:
        'GALINDO, M. (2014). Efecto de la fortificación casera con micronutrientes en polvo, como una estrategia de intervención contra la deficiencia de micronutrientes en población infantil de 12 hasta 59 meses, de cuatro municipios del departamento del Atlántico, pertenecientes a programas de complementación alimentaria. Universidad Nacional. Colombia.',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/49656/52269643.2014.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura Campesina Familiar y Comunitaria',
      significado:
        'sistema de producción y organización gestionado y operado por mujeres, hombres, familias, y comunidades campesinas, indígenas, negras, afrodescendientes, raizales, y palenqueras que conviven en los territorios rurales del país.',
    },
    {
      termino: 'Dentición',
      significado:
        'proceso por el que los dientes de los bebés y niños pequeños crecen a través de las encías',
    },
    {
      termino: 'Entornos seguros y saludables',
      significado:
        'es aquel que promueve la salud y la seguridad de las personas, ya sea en el trabajo, en el hogar, en el estudio, en el esparcimiento, o en la comunidad para niños, niñas y adolescentes.',
    },
    {
      termino: 'Esquema de vacunación',
      significado:
        'guía que indica la forma en que se aplican las vacunas aprobadas en un país. En ella se especifica: La edad en la que se debe aplicar la vacuna, El número de dosis, La vía de aplicación, La cantidad de vacuna por dosis.',
    },
    {
      termino: 'Mercados campesinos y comunitarios',
      significado:
        'esquemas de comercialización de bienes y servicios agropecuarios a nivel local caracterizados por: Presencia y gestión, de manera exclusiva o principal, por parte de productores y organizaciones de agricultura campesina, familiar y comunitaria; ausencia o mínima intermediación (limitada a algunos productos no disponibles localmente); venta de productos frescos, de temporada y procesados; promoción de alimentos y productos propios del territorio; búsqueda de un precio justo tanto para el productor como para el consumidor; fomento de la agricultura limpia o agroecológica.',
    },
    {
      termino: 'Micronutrientes',
      significado:
        'sustancias que se encuentran en los alimentos y que el cuerpo necesita en pequeñas cantidades para realizar sus funciones celulares: vitaminas, minerales, aminoácidos, ácidos grasos y enzimas.',
    },
    {
      termino: 'Multimezclas',
      significado:
        'mezclas de alimentos que suelen combinar ingredientes locales, de fácil consecución y nutritivos para crear alimentos balanceados y cómodos de preparar,',
    },
    {
      termino: 'Rutas de Atención Integral',
      significado:
        'conjunto de servicios y atenciones universales y diferenciados dirigidos a la primera infancia (0 a 5 años) y se enfoca en garantizar la integralidad de la política y la articulación de las atenciones necesarias para el desarrollo óptimo de los niños.',
    },
    {
      termino: 'Soberanía alimentaria',
      significado:
        'derecho de un país a definir sus propias políticas y estrategias sustentables de producción, distribución y consumo de alimentos, que garanticen el derecho a la alimentación sana y nutritiva para toda la población, respetando sus culturas y la diversidad de los sistemas productivos, de comercialización y gestión de los espacios rurales.',
    },
    {
      termino: 'Sistema de Salud',
      significado:
        'estructura social que busca mejorar y mantener la salud de la población. Los sistemas de salud pueden ser públicos, privados o una combinación de ambos y permite la interacción con distintas entidades en función del cumplimiento y garantía del servicio',
    },
    {
      termino: 'Vacunas',
      significado:
        'las vacunas se obtienen inactivando o debilitando el microorganismo que causa la enfermedad, para que cuando se aplique a una persona, el cuerpo produzca defensas contra esa enfermedad, las cuales lo protegerán de padecerla.',
    },
  ],
}
