<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Aprovechamiento del medio: cosechas, alimentos locales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .bg-color-8.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Parte de los problemas de la nutrición, están asociados al acceso y disponibilidad de los alimentos en el entorno (barrio, municipio, localidad) y que las condiciones ambientales, las oportunidades del suelo y las garantías agrícolas son claves para lograr la seguridad alimentaria, de la mano con las condiciones de transporte de los alimentos y la situación política y económica del territorio.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')


      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Agricultura local y familiar


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Una estrategia efectiva y sostenible para reducir la malnutrición infantil es el aprovechamiento de las cosechas y alimentos locales a partir de la promoción de la agricultura local y familiar fomentando los mecanismos financieros y tecnológicos para que se logre la sostenibilidad.

          p(data-aos="fade-left") Los mercados campesinos y comunitarios son modelos de comercialización de bienes y servicios agropecuarios a nivel local que se caracterizan por: 



      .bg-full-width.bg-color-3.mb-5
        .px-lg-5.pt-5.pt-lg-0

          .row.justify-content-center.align-items-center

            .col-lg-6(data-aos="fade-left")
              ul.lista-ul
                li.mt-4
                  i.fas.fa-check-circle
                  | La presencia y gestión por parte de productores y organizaciones de agricultura campesina, familiar y comunitaria.
                li.mb-1
                  i.fas.fa-check-circle
                  | Ausencia o mínima intermediación.
                li.mb-1
                  i.fas.fa-check-circle
                  | Venta de productos frescos y de temporada.
                li.mb-1
                  i.fas.fa-check-circle
                  | Promoción de alimentos y productos propios del territorio.
                li.mb-1
                  i.fas.fa-check-circle
                  | Búsqueda de un precio justo tanto para el productor como para el consumidor.
                li.mb-1
                  i.fas.fa-check-circle
                  | Fomento de la agricultura limpia o agroecológica. 

            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/tema2/4.svg", style="max-width:505px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mt-4.mt-lg-0

      p(data-aos="fade-left") En Colombia se cosecha una gran variedad de productos alimenticios, dentro de los que se destacan: 

      .bg-full-width.bg-fondo-2.mb-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center Frutas como mango, pera, tangelo, patilla, manzana, guanábana, durazno, banano, papaya, curuba, maracuyá y tomate de árbol.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center Tubérculos, raíces y plátanos como ñame, plátano y yuca.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Palma de aceite
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Arroz
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Caña de azúcar
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Cacao
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Hortalizas

      .bg-full-width.bg-color-8.mb-4
        .px-lg-5.py-4
          p.mb-0(data-aos="fade-left") El país es un importante productor de frutas y frutas exóticas. En el año 2021, la producción nacional de frutas frescas alcanzó los 12,4 millones de toneladas. En cuanto a las hortalizas, Antioquia, Boyacá y Cundinamarca, son las regiones que concentran el 58 % del volumen producido. 


	
      .row.mb-4
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in").mb-4.mt-lg-0
        .col-lg-7
          p(data-aos="fade-right") Por otro lado, expertos en nutrición y alimentación plantean la importancia de tomar en cuenta la región en que el alimento se produce, cuando se informa sobre la composición química de los alimentos. Este tema ha adquirido relevancia, especialmente cuando se trata de la composición de microminerales en un alimento, pues la concentración de estos nutrientes depende en gran parte de la concentración de micro minerales del suelo en que se ha cultivado o producido el alimento. 
          p(data-aos="fade-right") A continuación, se presentan los cultivos, de acuerdo con el tipo de tierras en Colombia:

      .bg-color-info.mb-5.p-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            figure
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 1030px").mx-auto.mb-3

      .titulo-figura.mb-4
        h5 Figura 1. 
        span Productos que se cosechan en el país por todo el año y, según el clima.

      figure.mb-3
        img(src="@/assets/curso/tema2/figura1.png", style="max-width: 1240px").mx-auto.mb-3

      .bg-color-info.mb-5.p-4
        p(data-aos="fade-left").mb-0 #[b Nota.] Tomado y adaptado de #[a(href="https://www.agronegocios.co/agricultura/cuales-son-las-mejores-condiciones-para-la-temporada-de-siembras-en-colombia-3126135" target="_blank" rel="noopener noreferrer") https://www.agronegocios.co/agricultura/cuales-son-las-mejores-condiciones-para-la-temporada-de-siembras-en-colombia-3126135]

      p(data-aos="fade-left") Para asegurar el suministro constante de alimentos frescos y nutritivos a partir de la agricultura local y familiar, es posible promover estrategias como:

      .titulo-figura.mb-4
        h5 Tabla 1. 
        span Algunas acciones y estrategias locales con impacto en la nutrición y alimentación infantil

      .tabla-a.mb-5
        table
          thead
            tr
              th Acción o estrategia
              th Posibles aliados
          tbody
            tr
              td Fomentar la construcción y mantenimiento de huertas escolares y comunitarias.
              td Familias, comunidades, asociatividades, líderes barriales o comunitarios (Juntas de Acción Comunal y Local)
            tr
              td Brindar capacitaciones en tecnologías aplicadas al agro, que sean fáciles, ágiles y económicas
              td Instituciones de educación superior, empresarios, Servicio de Aprendizaje SENA.
            tr
              td Diversificar alimentos locales a partir del consumo de diversos tipos de alimentos y, según la cosecha.
              td Gobierno local, entidad a cargo de los recursos naturales del territorio, secretarías de ambiente y de desarrollo económico.
            tr
              td Promover la siembra de alimentos locales, ricos en nutrientes, incluso alimentos nativos. Incorporar una variedad de alimentos locales en la dieta diaria puede mejorar la nutrición infantil.
              td Familias, comunidades, asociatividades, líderes barriales o comunitarios (Juntas de Acción Comunal y Local).
            tr
              td Rescatar y promover recetas tradicionales que utilizan ingredientes locales nutritivos.
              td Familias, comunidades, asociatividades, líderes barriales o comunitarios.
            tr
              td Educar a las familias sobre la importancia de una dieta balanceada y cómo aprovechar los alimentos locales.
              td Entidades del sistema de salud y establecimientos educativos.
            tr
              td Organizar talleres sobre nutrición y preparación de alimentos saludables.
              td Entidades del sistema de salud y establecimientos educativos.
            tr
              td Distribuir folletos y guías con información sobre los beneficios de los alimentos locales y cómo incorporarlos en la dieta.
              td Entidades del sistema de salud y establecimientos educativos.
            tr
              td Asegurar que las comunidades tengan acceso constante a alimentos nutritivos.
              td Gobierno local, entidad a cargo de los recursos naturales del territorio, secretarías de ambiente y de desarrollo económico.
            tr
              td Crear bancos de alimentos que almacenen y distribuyan productos locales en tiempos de escasez.
              td Fundaciones, entidades eclesiásticas y sector empresarial, Gobierno local.
            tr
              td Establecer redes de comercio que faciliten el intercambio de productos entre comunidades.
              td Gobierno local, entidad a cargo de los recursos naturales del territorio, secretarías de ambiente y de desarrollo económico.
            tr
              td Implementar políticas que apoyen la producción y el consumo de alimentos locales.
              td Gobierno local, entidad a cargo de los recursos naturales del territorio, secretarías de ambiente y de desarrollo económico.
            tr
              td Ofrecer subsidios a pequeños agricultores y productores locales.
              td Gobierno local, entidad a cargo de los recursos naturales del territorio, secretarías de ambiente y de desarrollo económico.
            tr
              td Crear regulaciones que favorezcan la producción sostenible y la comercialización de alimentos locales.
              td Gobierno local, entidad a cargo de los recursos naturales del territorio, secretarías de ambiente y de desarrollo económico.

      p(data-aos="fade-left").mb-4 Estas estrategias ayudan a mitigar la malnutrición infantil (familiar y comunitaria), también fortalecen la economía local, dinamizan la sostenibilidad ambiental y suma a la soberanía alimentaria.

      .row.mb-5
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          p(data-aos="fade-left").mb-0 Los Programas de alimentación escolar hacen parte de las políticas y programas de los países en las escalas regionales y locales. Al respecto, hay experiencias que promueven cambios desde la producción y el consumo, el acceso y la alimentación nutritiva para estas etapas de los escolares. 

          p(data-aos="fade-left").mb-4 Al respecto, en el siguiente enlace se visualiza parte del curso "La alimentación escolar como estrategia educativa para una vida saludable", que aborda las innovaciones en los programas de alimentación escolar como política estratégica de seguridad alimentaria y nutricional; presenta el Programa Nacional de Alimentación Escolar de Brasil (PNAE).

          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 INNOVACIONES EN LOS PROGRAMAS DE ALIMENTACIÓN 
                    p.mb-0 Antes de abordar Innovaciones en los programas de alimentación, lo invitamos a ver el siguiente cuento.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=q7nHjSuVohw" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right

      .bg-full-width.bg-color-3.p-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Según la Estrategia de Desarrollo Rural Integral con Enfoque Territorial en Colombia, la economía campesina, familiar y comunitaria, es el sistema de producción, transformación, distribución, comercialización y consumo de bienes y servicios; organizado y gestionado por hombres, mujeres, familias, y comunidades campesinas, indígenas, negras, afrodescendientes, raizales y palenqueras, que conviven en los territorios rurales del país.


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.agronegocios.co/agricultura/cuales-son-las-mejores-condiciones-para-la-temporada-de-siembras-en-colombia-3126135" target="_blank" rel="noopener noreferrer") MONTES, S. (2021) ¿Cuáles son las mejores condiciones para la temporada de siembras en Colombia? AGRONEGOCIOS. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=xsebAjTmM1o&t=2533s" target="_blank" rel="noopener noreferrer") IMQ Prevention (2021, 26 mayo). Webinar 'Nutrición: Clave para conseguir un entorno saludable'.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
