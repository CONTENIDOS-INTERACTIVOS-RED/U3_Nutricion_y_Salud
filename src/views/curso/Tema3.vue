<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Preparación de multimezclas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .row.mb-4
        .col-lg-8
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-0 Las preparaciones multimezclas son una opción culinaria para mejorar la nutrición infantil, especialmente en comunidades donde los recursos pueden ser limitados. Se trata de mezclas que suelen combinar ingredientes locales, de fácil consecución y nutritivos para crear alimentos balanceados y cómodos de preparar, en distintos contextos como las instituciones educativas, los hogares o los lugares de protección y cuidado de los menores. Además, ayudan a introducir a los niños a una variedad de sabores y texturas, promoviendo hábitos alimenticios saludables desde temprana edad.
          p(data-aos="fade-left").mb-4 Las preparaciones multimezclas son importantes durante el proceso de suplementación o alimentación complementaria en la lactancia, también es parte de la transición en la dentición infantil y por supuesto, a lo largo de la infancia. De allí que en adelante se tratarán en detalle estas condiciones y oportunidades nutricionales
          p(data-aos="fade-left").mb-4 Las cualidades de las multimezclas incluyen:
        .col-lg-4
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mt-4.mt-lg-0

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7
                p Utilizar una variedad de ingredientes locales para asegurar un aporte equilibrado de nutrientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7.order-lg-1
                p Ajustar la textura de las preparaciones, según la edad y capacidad de masticación del infante, así que es muy adecuado, de acuerdo con el momento de dentición, es decir, el proceso por el que los dientes de los bebés y niños pequeños crecen a través de las encías. 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-3.png")
              .col-lg-7.order-lg-1
                p Asegurar el lavado adecuado de todos los ingredientes y utensilios antes de la preparación para evitar contaminación.


      p(data-aos="fade-left").mb-4 Si se preparan grandes cantidades de la mezcla, esta se almacena en recipientes herméticos en la nevera y se deben consumir en un plazo de 24 horas.

      p(data-aos="fade-left").mb-4 Algunos ejemplos sobre la preparación de multimezclas, son: 


      .titulo-figura.mb-4
        h5 Tabla 2. 
        span Algunos ejemplos de preparaciones multimezclas.

      .tabla-a.mb-5
        table
          thead
            tr
              th Mezcla
              th Ingredientes
              th Preparación
          tbody
            tr
              td Avena con frutas y legumbres.
              td Avena, plátano, zanahoria rallada, leche (puede ser materna, de fórmula o vegetal).
              td Cocine la avena con agua hasta que esté suave. Añada el plátano machacado y la zanahoria rallada. Mezcle con la leche hasta obtener una consistencia adecuada para el bebé.
            tr
              td Puré de verduras y legumbres.
              td Papa, zanahoria, espinaca, lentejas cocidas.
              td Cocine las verduras y las lentejas hasta que estén suaves. Triture todo junto hasta obtener un puré homogéneo. Puede añadir un poco de aceite de oliva para mejorar la textura y el aporte nutricional.
            tr
              td Arroz con pollo y vegetales.
              td Arroz, pollo desmenuzado, calabacín, zanahoria, guisantes.
              td Cocine el arroz y los vegetales por separado. Mezcle el arroz con el pollo desmenuzado y los vegetales cocidos. Triture ligeramente si es necesario, para adaptarlo a la capacidad de masticación del bebé.


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Prevención de enfermedades con covalentes con la desnutrición u obesidad infantil

      p(data-aos="fade-left").mb-4 Una nutrición infantil de alta calidad, es necesaria para combatir la desnutrición y la obesidad, ambos problemas sanitarios en todo el mundo.  A continuación, se listan los componentes de una nutrición adecuada, que en esencia vincularía que:

      .bg-full-width.bg-fondo-2.mb-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center
            .col-lg-8
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/2.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center La lactancia materna es imprescindible durante los dos primeros años de vida del infante.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center Es clave integrar diversidad y abundancia de frutas y hortalizas, cereales integrales, fibra, frutos secos y semillas a la dieta diaria.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Desarrollar un análisis efectivo sobre el consumo de proteína animal.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Es necesario consumir cantidades mínimas de carne procesada y de alimentos y bebidas de alto contenido calórico.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Al máximo debe evitarse el consumo de productos a los que se haya añadido azúcar, grasa saturada, grasa trans y sal.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')


      .bg-color-8.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/8.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Por lo anterior, es preciso que educadores, familias, cuidadores y líderes en las comunidades, puedan cuestionar los mercados actuales en donde los sistemas alimentarios han incrementado la disponibilidad de productos ultraprocesados vinculados a un mayor aumento de peso; han disminuido la oferta de mercados con alimentos frescos y han reducido el control de la cadena de suministro de los supermercados.

      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left").mb-4 Finalmente, el panorama infantil debe ser atendido con detalle ante la evidente exposición a la desnutrición en varias regiones del país durante los primeros años de vida, seguida por el sobrepeso a partir de la niñez a partir de la ingesta inadecuada de alimentos, incrementando a su vez el riesgo de padecer diferentes enfermedades no transmisibles como: diabetes tipo 2, hipertensión, accidentes cerebrovasculares y padecimientos cardiovasculares. 
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            p.mb-0 Los efectos negativos pueden transmitirse de una generación a otra, por ejemplo, el efecto de la obesidad materna en la probabilidad que el niño sea obeso puede exacerbarse si la madre estuvo subalimentada en las primeras etapas de su vida.

        .col-lg-4
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in").mt-4.mt-lg-0


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Fortificación de los alimentos

      .bg-full-width.bg-color-3.mb-5
        .px-4.pt-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src="@/assets/curso/tema3/10.svg", data-aos="zoom-in", style="max-width: 610px;")
            .col-lg-5
              p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Fortificación de los alimentos"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )

      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Fortalezas de la lactancia materna en el proceso de crecimiento y desarrollo

      p(data-aos="fade-left").mb-4 Como se ha mencionado en unidades anteriores, la leche materna es el alimento ideal para los bebés desde los 0 años y al menos durante los primeros 6 meses, aunque se recomienda extender este período hasta los 24 meses de vida. La lactancia materna ofrece múltiples beneficios para el crecimiento y desarrollo de los bebés, dentro de las que se destacan:

      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h4.mb-4 Nutrición óptima
                p La leche materna contiene todos los nutrientes necesarios para el crecimiento y desarrollo adecuado del bebé durante los primeros seis meses de vida.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-1-2.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-lg-1
                h4.mb-4 Desarrollo del sistema inmunológico
                p La lactancia materna fortalece el sistema inmunológico del bebé, protegiéndolo contra infecciones y enfermedades. La leche materna tiene todos los nutrientes necesarios para que el bebé pueda defenderse de cualquier enfermedad, Los bebés amamantados tienen un menor riesgo de desarrollar enfermedades crónicas como la obesidad, diabetes tipo 2 y enfermedades cardiovasculares en el futuro.
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-2-2.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-lg-1
                h4.mb-4 Vínculo emocional
                p Amamantar fomenta un vínculo emocional fuerte entre la madre y el bebé, lo cual es crucial para el desarrollo emocional y psicológico del niño.
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-3-2.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7.order-lg-1
                h4.mb-4 Desarrollo cognitivo
                p Estudios han demostrado que la lactancia materna está asociada con un mejor desarrollo cognitivo y un coeficiente intelectual más alto en los niños.
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-4-2.png")

      .bg-full-width.bg-color-info.mb-5.p-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            figure
              img(src="@/assets/curso/tema3/11.svg", data-aos="zoom-in")


      p(data-aos="fade-left").mb-4 Los gobiernos locales e internacionales han abanderado campañas de leche materna a través de iniciativas para promover y apoyar la lactancia materna. Estas campañas suelen tener varios objetivos:

      div.row.justify-content-center.align-items-stretch.mb-5
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema3/12.svg"
              alt=""
              style="width: 90px"
            )
            h4 Informar y educar
            p.mb-0.text-center Proporcionar información sobre los beneficios de la lactancia materna tanto para el bebé como para la madre.
        
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema3/12.svg"
              alt=""
              style="width: 90px"
            )
            h4 Apoyo comunitario
            p.mb-0.text-center Crear redes de apoyo para madres lactantes, incluyendo grupos de apoyo y recursos en la comunidad.
        
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema3/12.svg"
              alt=""
              style="width: 90px"
            )
            h4 Políticas y legislación
            p.mb-0.text-center Promover políticas y leyes que protejan y faciliten la lactancia materna en lugares públicos y en el trabajo.

        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema3/12.svg"
              alt=""
              style="width: 90px"
            )
            h4 Concienciación pública
            p.mb-0.text-center Aumentar la visibilidad y aceptación de la lactancia materna en la sociedad.


      .bg-full-width.bg-color-8.mb-4
        .px-lg-5.py-4
          p.mb-0(data-aos="fade-left") En la #[b Semana Mundial de la Lactancia Materna], que se celebra a nivel global cada año del 1 al 7 de agosto, con el apoyo de la OMS y UNICEF, se busca crear entornos propicios para la lactancia materna y compartir información sobre sus beneficios.


      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Dentición
      

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 Uno de los factores claves en la alimentación y nutrición infantil es la aparición de los dientes en los primeros meses de vida y luego en la infancia, la pérdida de los primeros dientes con la futura aparición de los dientes permanentes.

          .bg-color-info.p-4(data-aos="fade-left")
            p.mb-0 La #[b dentición infantil] es el proceso en el que los dientes del bebé comienzan a salir de las encías. Este proceso puede empezar tan pronto como a los 3 meses de edad, aunque es más común que los primeros dientes aparezcan entre los 4 y 7 meses.
          
          p(data-aos="fade-left").mb-4 Conocer las fases de la dentición es importante y guarda relación con el tránsito de la leche materna y la inclusión de nuevos alimentos a la ingesta de los infantes; de allí que resulte clave el desarrollo de multimezclas, según la etapa y momento de la dentición. 


      .bg-full-width.bg-color-3.mb-5
        .p-4.p-md-5

          .row.justify-content-center.align-items-center

            .col-lg-6(data-aos="fade-left")

              p(data-aos="fade-left").mb-3 Las fases de la dentición infantil se resumen a continuación:
              ul.lista-ul
                li.mt-4
                  i.fas.fa-check-circle
                  | #[b Incisivos centrales inferiores]. Generalmente son los primeros dientes en aparecer, alrededor de los 6 meses.
                li.mb-1
                  i.fas.fa-check-circle
                  | #[b Incisivos centrales superiores]. Siguen a los inferiores, entre los 8 y 12 meses.
                li.mb-1
                  i.fas.fa-check-circle
                  | #[b Incisivos laterales]. Aparecen entre los 9 y 13 meses.
                li.mb-1
                  i.fas.fa-check-circle
                  | #[b Primeros molares]. Emergen entre los 13 y 18 meses.
                li.mb-1
                  i.fas.fa-check-circle
                  | #[b Caninos]. Salen entre los 16 y 23 meses.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Segundos molares]. Aparecen alrededor de los 2 años.


            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/tema3/14.svg", style="max-width:505px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mt-4.mt-lg-0


      .titulo-figura.mb-4
        h5 Figura 2. 
        span Comparación de la composición dental de niños, teniendo como referente la dentición temporal y la permanente.

      .bg-color-info.p-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            figure
              img(src="@/assets/curso/tema3/figura2.png", data-aos="zoom-in", style="max-width: 817px;").mx-auto
      figcaption.mb-5(style="background-color: #DCE8FA;") Nota. Tomado y adaptado de https://www.ilerna.es/blog/denticion-temporal-permanente 

      .bg-full-width.bg-color-5.p-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los síntomas más comunes relacionados con la aparición de dientes en los bebés, son: babeo excesivo, irritabilidad y llanto, deseo de morder objetos, encías inflamadas y sensibles. Para aliviar dichas molestias, se sugiere frotar las encías del bebé con un dedo limpio o una gasa húmeda, ofrecer mordedores fríos puede ayudar a aliviar el dolor, limpiar la cara del bebé para evitar irritaciones por el exceso de baba. 


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://news.un.org/es/story/2019/12/1466721" target="_blank" rel="noopener noreferrer") ONU. (2019). Desnutrición y obesidad, dos caras de la mala alimentación que afectan a un tercio de los países pobres 

  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Preparación de multimezclas',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: 'Las vacunas son:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'sustancias que se administran para permitir que el sistema inmunitario pueda reconocer y defenderse de gérmenes (microorganismos) dañinos, como virus o bacterias.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Inyecciones con complejos multivitamínicos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Líquidos, pastillas o aerosoles nasales que contienen nutrientes y macronutrientes',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Fragmentos de medicamentos para mejorar la calidad de vida de los infantes.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Es una guía de inmunizaciones, técnicamente diseñada, que indica las vacunas aprobadas en el país, las edades de aplicación, el número de dosis y la vía de aplicación:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Guía alimentarias',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Esquema de vacunación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Documento CONPES',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Vademécum Médico',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Las vacunas y refuerzos asociados con la edad infantil están relacionadas con las enfermedades:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Polio, Difteria, Tosferina, Sarampión, Rubéola y paperas.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Polio, Gripe, Rabia, VIH, Papiloma Humano',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sarampión, rubéola, influenza y paperas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Tosferina, Sarampión, Rubéola y VIH',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'No es una característica de las preparaciones multimezclas:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Son una opción culinaria para mejorar la nutrición infantil, especialmente en comunidades donde los recursos pueden ser limitados.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Son mezclas que suelen combinar ingredientes locales, de fácil consecución y nutritivos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Crean alimentos balanceados y cómodos de preparar, en distintos contextos como las instituciones educativas, los hogares o los lugares de protección y cuidado de los menores.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Suple la lactancia materna en entornos de alta pobreza',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'La fortificación de alimentos es importante cuando:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No se requiere solución al déficit de micronutrientes y de calcio, existentes en la población',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Se requiere aumentar la ingesta de un nutriente para prevenir las enfermedades crónicas no transmisibles.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'No se demanda una solución de bajo costo, rápida y eficiente',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Se requiere usar y aprovechar rápidamente los productos de cosecha.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
