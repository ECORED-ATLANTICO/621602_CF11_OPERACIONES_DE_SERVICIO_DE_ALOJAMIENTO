<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cuenta huésped

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Se denomina cuenta huésped al resumen de las operaciones que se realizan durante el día, detallando número de habitación o folio, monto del movimiento y su origen, es decir en dónde se realizó y si fue débito o crédito.

    .row.justify-content-center.mb-4
      .col-md-8.col-lg-6
        .p-3.bg-acento-contenido-a70.rounded-top-4
          h5.mb-0.text-white.text-center Los saldos se calculan así:
        .p-3.bg-acento-contenido-a10.rounded-bottom-4
          h5.mb-0.text-center 
            span.text-acento-contenido Inicial + 
            span Débitos - 
            span.text-acento-contenido Créditos 
            span.text-black = Saldo final

    .p-4.rounded-5.bg-secundario-s5.mb-4
      p.mb-0 En la recepción se da inicio al ciclo de la cuenta huésped desde el registro y se va alimentando con los movimientos que se registran en el sistema PMS, ya sea desde allí mismo o desde otras dependencias o ambientes.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Naturaleza de los cargos

    p.mb-4 La afectación de la cuenta huésped se da por los débitos y créditos que origina el movimiento diario del hotel, de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-lg-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/2.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-start Débitos
            p.mb-0.text-start Registra los cargos a cuenta huésped que se realizan durante el día, es decir, la venta de alojamiento, alimentos, bebidas, teléfonos y lavandería entre otros.
    
      .col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/3.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-start Créditos
            p.mb-0.text-start Relaciona los descargos a la cuenta huésped como efecto de la cancelación de facturas, considerando básicamente efectivo, tarjetas de crédito o débito, divisas y particulares. Las columnas de descuento y depósito aplican como crédito al aplicarles dichas situaciones. (Scheel, 1992).

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Tipos de cuentas huésped

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p Los cargos corresponden a los diferentes movimientos financieros que pueden registrarse dentro de una operación, cuenta o sistema de gestión. Cada tipo de cargo cumple una función específica y permite llevar un control adecuado de los ingresos, salidas de dinero, ajustes y transacciones realizadas por los usuarios o clientes. Conocer la finalidad de cada uno facilita el registro correcto de las operaciones y contribuye a mantener la trazabilidad y exactitud de la información financiera.
        p.mb-0 A continuación, se presentan los principales tipos de cargos utilizados en el proceso:
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")
    
    .row.justify-content-center.align-items-center
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Abonos")
            .col-auto
              p.mb-0 Un abono hace referencia al pago que registra un huésped para disminuir el saldo de la cuenta a su cargo, es decir que, si el monto adeudado es superior al pagado, se genera este tipo de movimiento.
          .row(numero="2" titulo="Anticipos")
            .col-auto
              p.mb-0 El anticipo es una cantidad de dinero que el huésped entrega al hotel antes de iniciar su estancia y que luego se aplicará a la cuenta del huésped.
          .row(numero="3" titulo="Depósitos")
            .col-auto
              p.mb-0 Estos corresponden a dineros dejados por el huésped en prenda por el préstamo de un servicio. Este dinero posteriormente se devuelve al huésped, por tanto, no se registra en el movimiento de la cuenta del huésped. Solo se entrega un comprobante de recibo de estos y los valores se depositan en una caja segura.
          .row(numero="4" titulo="Anticipos")
            .col-auto
              p.mb-0 El anticipo es una cantidad de dinero que el huésped entrega al hotel antes de iniciar su estancia y que luego se aplicará a la cuenta del huésped.
          .row(numero="5" titulo="<em>Paid Out</em>")
            .col-auto
              p.mb-0 Es el desembolso realizado por caja de recepción para cubrir un servicio externo que el huésped autoriza le sea cargado a su cuenta y por lo tanto afecta el balance del cajero en turno. Generalmente los hoteles aplican un cargo adicional a título de comisión por este servicio, sobre el cual se cobra IVA por ser un ingreso para el hotel, si se da este caso:
          .row(numero="6" titulo="Registro de <em>Paid Out</em>")
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Tabla 3.
                span Registro de Paid Out
              .tabla-a.color-acento-contenido.mb-5.tabla-a--text-left
                table
                  caption Nota. SENA, (2026).
                  tbody
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") Monto de la transacción autorizada por el huésped
                      td $ 20.000
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") Comisión del 10 % por el servicio
                      td $ 2.000
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") IVA sobre la comisión, que es lo que cobra el hotel
                      td $ 380
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") Total a cargo del huésped
                      td $ 22.380







</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
