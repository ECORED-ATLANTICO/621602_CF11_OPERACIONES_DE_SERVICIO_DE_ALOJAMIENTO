export default {
  global: {
    Name: 'Procesos de facturación',
    Description:
      'Este componente formativo desarrolla los conocimientos y habilidades necesarios para gestionar los procesos financieros y operativos de la recepción hotelera. Aborda la normatividad tributaria, el manejo de caja, el registro de cargos y pagos, la administración de la cuenta huésped y los procesos de facturación, garantizando un control eficiente y una adecuada atención al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad tributaria',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Posteo de servicios hoteleros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Políticas de manejo de caja',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Operaciones matemáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cuenta huésped',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Facturación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF11_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<em>Check out</em>',
      significado:
        'es el proceso por el cual una persona después de estar hospedada en un hotel, al momento de retirarse debe dirigirse a la recepción para cancelar los pendientes.',
    },
    {
      termino: 'FOB',
      significado:
        'es el precio de venta de los bienes puestos en un medio de transporte marítimo, sin incluir valor de seguro y fletes.',
    },
    {
      termino: 'Gravamen',
      significado:
        'impuesto o carga que se aplica sobre un bien, riqueza o propiedad que pertenece a una persona y para indicar que se encuentra comprometido.',
    },
    {
      termino: 'Renta',
      significado:
        'utilidad o el beneficio que rinde algo o lo que de ello se cobra.',
    },
    {
      termino: 'Tela género',
      significado:
        'tela conocida como alegro o microfibra, es un textil suave y ancho.',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualícese. (2018). <em>Beneficio tributario para hoteles en municipios con menos de 200.000 habitantes no necesita decreto</em>. Actualícese.',
      link:
        'https://actualicese.com/beneficio-tributario-para-hoteles-en-municipios-con-menos-de-200-000-habitantes-no-necesita-decreto/',
    },
    {
      referencia:
        'DECRETO 2755 DE 2003. [Ministro del Interior y de Justicia de la República de Colombia]. Por medio del cual de reglamenta el artículo 207-2 del Estatuto Tributario. Artículo 10. Septiembre 30 de 2003. (Colombia)',
      link: '',
    },
    {
      referencia: 'DIAN. (s.f.). <em>Obligados a facturar</em>. Impuestos.',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/Paginas/obligadosfacturar.aspx',
    },
    {
      referencia:
        'Gerencie.com. (2020). <em>Requisitos de la factura de venta</em>. Gerencie.com.',
      link: 'https://www.gerencie.com/requisitos-de-la-factura.html',
    },
    {
      referencia:
        'Ministerio de Hacienda. (2016). <em>Tabla IVA Canasta familiar</em>. DIAN.',
      link:
        'https://www.dian.gov.co/impuestos/Reforma%20Tributaria%20Estructural/Listado%20completo%20IVA%20Canasta%20Familiar.pdf',
    },
    {
      referencia:
        'Peña, A. (2010). <em>Contabilidad hotelera, de restaurantes y de gestión</em>. Cartagena: Universidad Libre.',
      link: '',
    },
    {
      referencia:
        'Scheel, A. (1992). <em>Control de alojamiento y contabilidad de huéspedes</em>. Bogotá: Edinter.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
