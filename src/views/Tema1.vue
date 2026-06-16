<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad tributaria

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La industria turística y hotelera ha pasado por varios periodos de crisis o bonanzas, acorde con esto se han promulgado normas específicas desde un marco normativo tributario. En general un negocio hotelero está obligado a pagar impuestos nacionales (Impuesto al Valor Agregado - IVA, e Impuesto sobre la renta) Impuestos departamentales (Impuesto al consumo – Impoconsumo) Impuestos locales (Industria y Comercio - ICA) y en algunos lugares sobretasas a la explotación turística y hotelera. Conozcamos sobre ellos.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Impuesto al Valor Agregado (IVA)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El impuesto al valor agregado o impuesto a las ventas, IVA es un gravamen que se cobra cuando los colombianos compran un producto o pagan un servicio. Para este impuesto existe una tarifa general del 19 % que se aplica a bienes y servicios, los cuales pueden ser gravados, excluidos o exentos. Tributariamente a este impuesto se da la categoría de impuesto indirecto, porque se liquida sobre los costos de producción y sobre las ventas de la empresa, tiene una característica especial: es un impuesto plurifásico o en cascada, esto quiere decir que grava de manera sucesiva las ventas en todas las fases del proceso productivo desde la producción hasta el consumo final y es descontable entre dichas fases.
        p.mb-0 Para comprender mejor el funcionamiento de este impuesto y su aplicación en la operación hotelera, analicemos el siguiente ejemplo práctico:

    LineaTiempoD.color-primario.variante-secundario.mb-4
      .row.align-items-center.justify-content-center(numero="a" titulo="Cálculo del IVA sobre la venta de una tela")
        .col-lg-9
          p Un comerciante de telas vende el metro de tela genero a $9.100 y aplica el 19 % del IVA.
          p $9.100 x 19 % = $1.729
          p.mb-4.mb-lg-0 $9.100 + $1.729 = $10.829
        .col-sm-6.col-lg-3
          figure
            img.w-130(src="@/assets/curso/tema1/3.svg", alt="" data-aos="zoom-in-down")
      .row.align-items-center.justify-content-center(numero="b" titulo="Ejemplo de la cadena comercial")
        .col-lg-9
          p.mb-0 Un fabricante de sábanas le compra 3 metros de genero por un total de $32.487 IVA incluido.
          p.mb-4.mb-lg-0 Luego de confeccionar los juegos de cama los vende a un hotel por $75.000 IVA incluido. Finalmente, el hotel utiliza las sábanas y vende su servicio de alojamiento por $150.000 + IVA.
        .col-sm-6.col-lg-3
          figure
            img.w-130(src="@/assets/curso/tema1/4.svg", alt="" data-aos="zoom-in-down")
      .row.align-items-center.justify-content-center(numero="c" titulo="Aplicación del IVA en cada etapa de la cadena productiva")
        .col-lg-9
          p En este caso, hay tres momentos del impuesto (en cascada)
          p.mb-0 El comerciante debe declarar todo el IVA cobrado, a menos que tenga otros rubros sobre los cuales cruzar.
          p.mb-0 El fabricante debe pagar el IVA, pero puede descontar el valor que pago al comerciante.
          p.mb-0 El hotel que es el usuario final también debe pagar IVA por los servicios que presta, en su caso puede descontar el IVA que pagó por los tendidos.
        .col-sm-6.col-lg-3
          figure
            img.w-130(src="@/assets/curso/tema1/5.svg", alt="" data-aos="zoom-in-down")
      .row.align-items-center.justify-content-center(numero="d" titulo="Determinación del IVA a declarar por cada actor económico")
        .col-lg-9
          p Si llevamos esto a la matemática veremos que:
          ul.checklist.ms-3
            li
              p.mb-0 El comerciante declara $5.187.
            li
              p.mb-0 El fabricante de lencería declara $6.788, que es la diferencia entre los $11.975 que cobró al hotel y los $5.187 de IVA que le pago al comerciante.
            li
              p.mb-0 El hotel luego de su cierre contable declarará el IVA recaudado, descontando el IVA pagado. Es decir $16.525.
        .col-sm-6.col-lg-3
          figure
            img.w-130(src="@/assets/curso/tema1/6.svg", alt="" data-aos="zoom-in-down")
      .row.align-items-center.justify-content-center(numero="e" titulo="Impuesto al Valor agregado - IVA")
        .col-lg-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Impuesto al Valor agregado - IVA
          .tabla-a.color-acento-contenido.tabla-a--text-left
            table
              caption Nota. SENA, (2026).
              thead
                tr(style="background-color: #F0F6F9")
                  th(colspan="2") Plurifasico acumulativo o en cascada
                  th Costo
                  th Unidad 30 %
                  th PVP
                  th IVA 19 %
                  th PVP + IVA
                  th Declara
              tbody
                tr(style="background-color: #FFFFFF")
                  td(colspan="2") Industria productora telas
                  td $7.000
                  td $2.100
                  td $9.100
                  td $1.729
                  td $10.829
                  td $1.729
                tr(style="background-color: #FFFFFF")
                  td(colspan="2") Comerciante de tela
                  td $10.829
                  td $3.249
                  td $14.078
                  td $2.675
                  td $16.752
                  td $946
                tr(style="background-color: #FFFFFF")
                  td(colspan="2") Confeccionista (fabrica sabanas)
                  td $16.752
                  td $5.026
                  td $21.778
                  td $4.138
                  td $25.916
                  td $1.463
                tr(style="background-color: #FFFFFF")
                  td(colspan="2") Hotel (usa la sabana, pero vende un servicio)
                  td $25.916
                  td $0
                  td $150.000
                  td $28.500
                  td $178.500
                  td $24.362

    .p-4.py-3.rounded-4.bg-acento-botones-a5.mb-5
      p.mb-0 Existe una tarifa diferencial en el IVA, del 5 %, esta solo aplica para algunos productos de la canasta familiar y algunos servicios como los de protección. Adicionalmente hay una serie de productos, la mayoría de ellos de la canasta básica familiar (arroz, papa, leche, huevos, etc.) y de servicios básicos (educación, salud, entre otros.) que están exentos de IVA, es decir tiene tasa 0 %. (DIAN, 2021).

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/common/newspaper.png", class="img-fluid cita-decorada__imagen-flotante-4 cita-decorada__imagen-flotante-4--bigger")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                h5.mb-1 IVA canasta familiar
                p.mb-0.text-center.text-lg-start Conoce en este documento el listado de productos de la canasta familiar con la tarifa del IVA que aplica en Colombia.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/1_Limpieza_y_desinfeccion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Principios de biomecánica aplicada

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema1/7.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow.bg-secundario-s5
            p.mb-0 El impuesto al consumo, también conocido como impoconsumo, es un gravamen que se aplica a determinados bienes y servicios de acuerdo con lo establecido en el Estatuto Tributario. Este impuesto recae sobre productos y servicios que no hacen parte de la canasta básica familiar o que se consideran de consumo especial, por lo que están sujetos a una carga tributaria adicional.

    .p-4.py-3.rounded-4.bg-acento-contenido-a5.mb-5
      p.mb-0 Dependiendo del tipo de bien o servicio gravado, las tarifas del impuesto al consumo pueden variar entre el 16 %, 8 % y 4 %. Conocer estas tarifas y su aplicación es fundamental para comprender las obligaciones tributarias de los establecimientos hoteleros y gastronómicos. A continuación, se presentan los principales bienes y servicios sujetos a este impuesto según cada tarifa:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-4
      .row.justify-content-center.align-items-center(titulo="Tarifa impoconsumo 16 %")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Pick-up cuyo valor FOB (valor free on board) o el equivalente del valor FOB estén en el rango de precio de alguna de las dos tarifas para las que pueden aplicar.
          p Motocicletas con motor de émbolo (pistón) alternativo de cilindraje superior a 200 c.c.
          p Yates, barcos y embarcaciones de recreo o deporte; barcas (botes) de remo y canoas.
          p Globos, dirigibles, planeadores y demás aeronaves, no propulsados con motor de uso privado.
          p.mb-4.mb-lg-0 Aeronaves (por ejemplo: helicópteros, aviones); vehículos espaciales (incluidos los satélites), sus vehículos de lanzamiento y vehículos suborbitales, de uso privado.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema1/8.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Tarifa impoconsumo 8 %")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Vehículos automóviles de tipo familiar y los camperos cuyo valor FOB (o el equivalente del valor FOB) sea menor de USD $30.000, incluyendo sus accesorios.
          p Las Pick-up cuyo valor FOB (o el equivalente del valor FOB) sea menor de USD $30.000, incluyendo sus accesorios.
          p Motocicletas con motor de émbolo alternativo de cilindrada mayor a 200 c.c.
          p Yates y otras embarcaciones o barcos de recreo o uso deportivo, incluyendo botes de remo y canoas.
          p Servicios de comidas y bebidas en restaurantes y bares.
          p.mb-4.mb-lg-0 Nota: Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema1/9.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Tarifa impoconsumo 4 %")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p La prestación de servicios de telefonía móvil, internet y navegación móvil.
          p.mb-4.mb-lg-0 Servicio de datos.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema1/10.png", alt="")

    .p-4.py-3.rounded-4.bg-secundario-s5.mb-5
      p.mb-0.text-center Nos vamos a centrar en el ítem servicios de comidas y bebidas en restaurantes y bares, profundicemos en él:

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema1/11.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow.bg-secundario-s5
            p.mb-0 Las comidas preparadas en un hotel o establecimiento de expendio de alimentos y bebidas tienen una tarifa general de impuesto al consumo del 8 %. Hay que tener en cuenta la nota que dice “Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias”. Esto quiere decir es que si el hotel o restaurante funciona bajo el modelo de franquicia (normalmente marcas reconocidas como: Marriott, Hilton, GHL) al expendio de comidas y bebidas en estos establecimientos no se les aplica el 8 % de impoconsumo, sino el 19 % de la tarifa general del IVA.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Impuesto a la renta

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Es el impuesto que se genera cuando el patrimonio de una persona tiene un incremento a lo largo de un año. Este tributo rige en todo el país y se cobra sobre los ingresos de las personas naturales y jurídicas. Este gravamen se compone de la renta, las ganancias ocasionales y las remesas, su liquidación es anual y la declaración de renta del año anterior.
        p.mb-0 La base gravable o de liquidación del impuesto se denomina renta líquida gravable, esta renta hace referencia a lo que el contribuyente gana en un año, determinado por los ingresos, a los que se restan costos y gastos, y algunos beneficios tributarios.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-img.bg-img--10.rounded-4.p-4.h-100
          p.mb-0 La tarifa general del impuesto de renta es de 31 % para el año 2021 (ingresos del año 2020) En el caso del impuesto de renta hay también algunas tarifas diferenciales y algunas rentas exentas.
      .col-lg-6.mb-3.mb-lg-0
        .bg-img.bg-img--10.rounded-4.p-4.h-100
          p.mb-0 Podemos mencionar que los hoteles que construyan o remodelen tendrán una tarifa de renta especial.

    .p-4.py-3.rounded-4.bg-secundario-s5.mb-4
      .row.justify-content-center
        .col-xl-10
          p.mb-0 Con la expedición de la reforma tributaria estructural se contempló la tarifa especial en renta del 9 %, para las siguientes actividades: los servicios que se presten en nuevos hoteles, siempre y cuando se construyan en municipios de hasta 200.000 habitantes, y dentro de los diez años siguientes, es decir, hasta 2026.
  
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p La tarifa del 9 % la podrán aplicar por un término de 20 años. Este beneficio también aplica para los servicios prestados en hoteles ubicados en municipios de hasta 200.000 habitantes, y que se remodelen o amplíen entre 2017 y 2026. La tarifa del 9 % podrá ser aplicada durante 20 años, pero solo sobre la proporción que represente la remodelación o ampliación del costo fiscal del inmueble. (Actualícese, 2018).
        p.mb-4.mb-lg-0 Los requisitos que deberán cumplir los nuevos hoteles son los que se encuentran señalados en el artículo 5 del Decreto 2755 de septiembre 30 de 2003, recopilado en el artículo 1.2.1.22.11 del DECRETO 1625 de 2016:
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/13.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.py-3.rounded-4.bg-acento-botones-a5.mb-2
          p.mb-0 Debe estar inscrito en el registro nacional de turismo del Ministerio de Comercio, Industria y Turismo (MinCIT). 
        .p-4.py-3.rounded-4.bg-acento-botones-a5.mb-2
          p.mb-0 Contar con un certificado expedido por el MinCIT, en el que conste la prestación de servicios hoteleros por parte del nuevo hotel.
        .p-4.py-3.rounded-4.bg-acento-botones-a5.mb-2
          p.mb-0 Certificado expedido por la Curaduría Urbana, Secretaría de Planeación o por la entidad que haga sus veces del domicilio del inmueble. En este, debe constar la aprobación del proyecto de construcción del nuevo hotel.
        .p-4.py-3.rounded-4.bg-acento-botones-a5.mb-2
          p.mb-0 Certificado expedido por el representante legal y el revisor fiscal o contador público, en el que conste que los servicios hoteleros están debidamente autorizados y que se lleva una contabilidad separada para los ingresos por servicios hoteleros.


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p.mb-4.mb-lg-0 Por otra parte, sobre los beneficios tributarios a las rentas hoteleras, específicamente los que otorgan los numerales 3 y 4 del artículo 207-2 del Estatuto Tributario (ET) es válido mencionar que, con la modificación que sufrió el artículo 240 del ET, los servicios hoteleros prestados en nuevos hoteles y en hoteles remodelados y/o ampliados de personas jurídicas pasaron de ser rentas exentas para ser gravadas con la tarifa del 9 %. En el caso de las personas naturales, la DIAN ha manifestado que dichas rentas deberán tratarlas como gravadas y tributar con las tarifas del artículo 241 del Estatuto Tributario. De cualquier manera, es importante mencionar que la normatividad tributaria cambia constantemente y que debe ser revisada y actualizada.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/15.png", alt="")
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
