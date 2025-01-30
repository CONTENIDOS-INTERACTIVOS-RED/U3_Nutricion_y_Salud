<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ambientes saludables'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p(data-aos="fade-left").mb-4 Los hábitos y entornos saludables contribuyen a la salud física de los niños, su bienestar mental, la interacción social, ayudándolos a crecer de manera integral y feliz.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Alimentación, higiene y descanso

    p(data-aos="fade-left").mb-4 Dentro de los hábitos saludables, están:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/1.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Alimentación balanceada
                p.mb-0 Según la edad y los requerimientos, incluyendo una diversidad de alimentos, lo más naturales posibles y con los micro y macronutrientes necesarios.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Actividad física
                p.mb-0 A diario es fundamental y puede generarse a través de los juegos, la interacción con entornos naturales al aire libre o en parques, practicar deportes o realizar actividades físicas en familia.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Limpieza a diario
                p.mb-0 El correcto lavado de manos antes de cada comida y después de estar en contacto con superficies sucias e ir al baño y el cepillado de los dientes, hace parte de la higiene personal.


    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Para mantener la salud, también es preciso asegurar que los niños descansen y duerman las horas necesarias, según su edad para un desarrollo óptimo, teniendo precaución sobre las condiciones de la habitación y con la supervisión para prevenir la repentina e inexplicable situación de fallecimientos de bebés a causa del síndrome de muerte súbita del lactante o "muerte en la cuna”. 


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Revisiones médicas periódicas y las vacunas


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left").mb-4 Las revisiones médicas periódicas y las vacunas son importantes para la salud de los niños y niñas, permiten detectar enfermedades de manera temprana y hacer un seguimiento de la salud. 

        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Las vacunas son sustancias que se administran para permitir que el sistema inmunitario pueda reconocer y defenderse de gérmenes (microorganismos) dañinos, como virus o bacterias. Pueden presentarse en inyecciones, líquidos, pastillas o aerosoles nasales. Las vacunas contienen fragmentos del microorganismo que causa la enfermedad o las instrucciones (ADN) para crear esos fragmentos, además de otros componentes químicos para garantizar su efectividad.

    p(data-aos="fade-left").mb-4 Las vacunas son una de las herramientas más importantes para prevenir enfermedades, junto con el agua potable, logrando salvar millones de vidas anualmente. El sistema de salud colombiano promueve un esquema de vacunación dirigido a todos los niños menores de cinco (5) años; el esquema de vacunación es una guía de inmunizaciones, técnicamente diseñada, que indica las vacunas aprobadas en el país, las edades de aplicación, el número de dosis, la vía de aplicación y la cantidad de vacuna por dosis. 

    p(data-aos="fade-right").mb-5 Estos elementos aseguran que SanoDelight  opere dentro del marco legal, protegiendo tanto a los consumidores como a la empresa.


    .bg-color-white.shadow-soft.py-4.px-lg-5.mb-5
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Esquema de vacunación de Colombia
              p Para el caso de Colombia, el esquema correspondiente, lo puede encontrar en el siguiente enlace: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ET/ficha-esquema-vacunacion-vf2.pdf" target="_blank")
                span Ir al sitio
                i.fas.fa-arrow-right


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Entornos seguros y saludables 


    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Dentro de los entornos seguros y saludables, están los que hacen parte del hogar (habitación, baño, comedor, cocina, etc.), los del medio circundante (calle, parque, jardín) y los que corresponden con los escenarios médicos, educativos y familiares - sociales, donde permanecen o transitan los infantes. Todos ellos han de ser ambientes saludables frente a la calidad del aire y el agua, la protección frente a sustancias tóxicas o contaminantes, el cuidado y protección física y mental, de allí que los componentes sociales, ambientales y culturales, son claves en el momento de determinarlo o evaluarlo. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/6.png', alt='')

    p(data-aos="fade-left").mb-4 Teniendo en cuenta lo anterior, el rol de los padres, familias y cuidadores está en asegurar entornos seguros y saludables, con las siguientes cualidades:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-info.p-4.mb-2
          p.mb-0 Hogar y entornos seguros y limpios.
        .bg-color-info.p-4.mb-2
          p.mb-0 Prevención de posibles peligros.
        .bg-color-info.p-4.mb-2
          p.mb-0 Libres de agentes contaminantes.
        .bg-color-info.p-4.mb-2
          p.mb-0 Acceso al agua potable y medidas de higiene.
        .bg-color-info.p-4.mb-2
          p.mb-0 Protección frente a la violencia y el abuso.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-info.p-4.mb-2
          p.mb-0 Espacios verdes, recreativos para la exploración.
        .bg-color-info.p-4.mb-2
          p.mb-0 Cuidado permanente de adultos responsables.
        .bg-color-info.p-4.mb-2
          p.mb-0 Elementos para la exploración y el juego, de acuerdo con la edad.
        .bg-color-info.p-4.mb-2
          p.mb-0 Acondicionados a la edad.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Rutas de atención primaria

    p(data-aos="fade-left").mb-4 Las rutas de atención primaria en la niñez son esenciales para asegurar el desarrollo integral y la protección de los derechos de los niños y niñas. Es un conjunto de servicios y atenciones universales y diferenciados dirigidos a la primera infancia (0 a 5 años) y se enfoca en garantizar la integralidad de la política y la articulación de las atenciones necesarias para el desarrollo óptimo de los niños.

    p(data-aos="fade-left").mb-4 Dentro de las dimensiones de atención, las rutas se centran en:


    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src="@/assets/curso/tema1/info1.svg", alt="", style="max-width: 710px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="27%" y="50%" numero="+")
                  h5 Salud y nutrición
                  p Incluye el cumplimiento del esquema de vacunación, control de crecimiento y desarrollo, prevención de enfermedades y los programas de nutrición para asegurar una alimentación adecuada.


                .bg-color-white.box-shadow.p-3(x="45%" y="15%" numero="+")
                  h5 Educación y cuidados
                  p Está asociado a la garantía de la educación inicial y cuidados en entornos seguros y estimulantes, tanto en el hogar como en centros educativos.

                .bg-color-white.box-shadow.p-3(x="73%" y="50%" numero="+")
                  h5 Protección
                  p Contempla las medidas de protección frente a la violencia, el abuso y la explotación, asegurando un entorno seguro y protector.
                  
                .bg-color-white.box-shadow.p-3(x="52%" y="82.5%" numero="+")
                  h5 Bienestar
                  p Corresponde a los servicios que promuevan el bienestar emocional y social de los niños, incluyendo apoyo psicológico y actividades recreativas.
                    

    .row.mb-4
      .col-lg-8
        p(data-aos="fade-left") La implementación de la Ruta Integral de Atenciones (RIA) en Colombia, se encuentra dentro de la Política Nacional de Infancia y Adolescencia, herramienta que presenta las acciones necesarias para organizar y garantizar la atención integral de las niñas, niños y adolescentes se reconoce como la Ruta Integral de Atenciones – RIA. 

        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-left
          p.mb-2 “Este instrumento contribuye a ordenar la gestión de la atención integral en el territorio de manera articulada, consecuente con la situación de derechos de los niños y las niñas, con la oferta de servicios disponible y con características de las niñas y los niños en sus respectivos contextos. Como herramienta de gestión intersectorial convoca a todos los actores del Sistema Nacional de Bienestar Familiar con presencia, competencias y funciones en el territorio”.  
          span -  (Congreso de la República, 2016. En Presidencia de la República, 2018)
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in").d-none.d-lg-block


    p(data-aos="fade-left").mb-4 De manera particular, la ruta explica la manera como los sujetos Estado, Familia y entornos, deben generar respuestas organizadas para atender la niñez y adolescencia; además de los componentes de educación, protección, bienestar y cuidados, integra:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Construcción de identidad, participación y ejercicio de la ciudadanía.

      .col-lg-4
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Disfrute, exploración y expresión de intereses, vocaciones y talentos.

      .col-lg-4
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Vinculación afectiva y relaciones de cuidado.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
