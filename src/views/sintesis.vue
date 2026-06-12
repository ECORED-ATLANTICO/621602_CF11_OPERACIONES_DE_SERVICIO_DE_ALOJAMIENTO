<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La gestión financiera en los establecimientos hoteleros constituye un proceso fundamental para garantizar el control, la transparencia y la correcta administración de los recursos. Esta gestión involucra el conocimiento de la normatividad tributaria aplicable al sector, el manejo adecuado de impuestos como el IVA, el impuesto al consumo y el impuesto de renta, así como la comprensión de los procesos de posteo, control de caja y registro de operaciones en la cuenta huésped. Para ello, los hoteles se apoyan en sistemas de gestión hotelera (PMS) que facilitan el registro, seguimiento y control de los movimientos financieros generados durante la estadía de los clientes.
        p.mb-0 Adicionalmente, el personal encargado de la recepción y caja debe dominar aspectos relacionados con los tipos de cargos, documentos de soporte, arqueos de caja, facturación y operaciones matemáticas básicas que permitan validar y controlar las transacciones realizadas. Estos conocimientos son esenciales para asegurar una adecuada trazabilidad de los movimientos, cumplir con las obligaciones tributarias y ofrecer un servicio eficiente, confiable y alineado con las políticas operativas y financieras del establecimiento hotelero.
    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
