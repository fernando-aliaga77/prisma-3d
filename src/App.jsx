import { useState } from 'react' // Traemos useState para manejar el filtro
import logoPrisma from './assets/logo-prisma.png'
import ProductCard from './components/ProductCard.jsx'
import './index.css'
import juegoFichas from './assets/juego-aprendizaje-nombre.jpeg'
import tetrisRompecabezas from './assets/tetris-rompecabeza.jpeg'
import geniusSquare from './assets/genius-square.jpeg'
import portaIncienzoAlien from './assets/porta-incienzo-alien.jpeg'
import silabario from './assets/silabario.jpeg'
import nombreLapices from './assets/nombre-para-lapices.jpeg'
import multiBase from './assets/multibase-matematica.jpeg'
import descomposicionNumeros from './assets/descomposicion-numeros.jpeg'
import abecedario from './assets/abecedario.png'
import lapiceroCapibara from './assets/lapicero-capibara.jpeg'
import llaveroRoblox from './assets/llavero-roblox.jpeg'
import masetaPulpito from './assets/macetita-pulpito.jpeg'
import numberBlocks from './assets/number-blocks.png'
import soporteJoystickAraña from './assets/soporte-joystick-hombre-araña.jpeg'
import portaInciensoMono from './assets/porta-incienso-mono.jpeg'
import portainciensoGeisha from './assets/porta-incienso-geisha.png'
import arcanoElTonto from './assets/arcano-el-tonto.jpeg'
import siPrometo from './assets/si-prometo-lapiz.png'
import agitadorePersonalizado from './assets/agitadores-personalizados-vasos.jpeg'
import tetrisEquilibrio from './assets/tetris-equilibrio.jpeg'
import cangrejoArticulado from './assets/cangrejo-articulado-llavero.png'
import delfinArticulado from './assets/delfin-articulado-llavero.png'
import estrellaArticulada from './assets/estrella-articulada-llavero.png'
import calabazaHalloween from './assets/calabaza-halloween-llavero.png'
import pulpitoArtiuldo from './assets/pulpito-articulado-llavero.png'
import lagartijaTom from './assets/lagartija-tom-hoppers.png'
import portaInciensoCanoa from './assets/porta-incienso-canoa.png'
import organizadorCosmeticos from './assets/porta-cosmeticos-cajon.jpeg'
import soporteCelularLlavero from './assets/soporte-celular-llavero.png'
import escarapelaVivaLaPatria from './assets/escarapela-viva-la-patria.png'
import pinEscarapela from './assets/pin-escarapela.png'
import lagartijaTomEscritorio from './assets/lagartija-tom-escritorio.jpeg'
import figurasGeometricas from './assets/figuras-geometricas-encastre.jpeg'
import ironManIa from './assets/iron-man-ia.png'
import ironManTaller from './assets/iron-man-taller.jpeg'
import angryBirdsIa from './assets/angry-birds-rojo-ia.png'
import angryBirdsTaller from './assets/angry-birds-rojo-taller.jpeg'
import arcanoLosAmantes from './assets/arcano-los-amantes.png'
import arcanoLaEstrella from './assets/arcano-la-estrella.png'
import arcanoSol from './assets/arcano-sol.png'
import arcanoLuna from './assets/arcano-la-luna.png'
import macetitaLibro from './assets/macetita-libro.jpeg'
import arcanoElColgado from './assets/arcano-el-colgado.jpeg'
import patricioLlavero from './assets/patricio-llavero.png'
import jackElPerro from './assets/jack-el-perro.png'
import jackElPerroMesa from './assets/jack-el-perro-mesa.png'
import jackElPerroPrimerPlano from './assets/jack-el-perro-primerplano.jpeg'
import jackElPerroLateral from './assets/jack-el-perro-lateral.png'
import jackElPerroAbajo from './assets/jack-el-perro-abajo.jpeg'
import angryBirdsCajon from './assets/angry-birds-red-cajon.jpeg'
import angryBirdsFrente from './assets/angry-birds-red-frente.jpeg'
import angryBirdsCerca from './assets/angry-birds-red-cerca.jpeg'
import formasGeometricasDoble from './assets/formas-geometricas-doble-encastre.png'
import arcangelMiguelIa from './assets/arcangel-miguel-ia.png'
import arcangelMiguel from './assets/arcangel-miguel.jpeg'
import arcangelMiguelTrasera from './assets/arcangel-miguel-trasera.jpeg'
import arcangelMiguelFrente from './assets/arcangel-miguel-frente.jpeg'
import rompeCabezasStegosaurus from './assets/rompe-cabezas-stegosaurus.jpeg'
import setRompecabezasDinos from './assets/set-rompecabezas-dinos.png'



function App() {
  // 1. Estado para saber qué categoría seleccionó el usuario (empieza en "Todos")
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  // 2. Tu lista real de categorías
  const categorias = [
    'Todos',
    'Juegos didacticos',
    'Juegos educativos',
    'Llaveros',
    'Articulos de bazar',
    'Figuras 3d',
    'Accesorios de tecnologia',
    'Arcanos',
    'Articulos escolares',
    'Perzonalizacion de fiestas y eventos',
  ]

  // 3. Lista de productos de muestra asignados a tus categorías reales
  const misProductos = [
    {
      id: 1,
      nombre: "Nombre en fichas",
      precio: "28000",
      descripcion: "Juego de aprendizaje de nombre con fichas.",
      categoria: "Juegos educativos",
      imagen: [ juegoFichas ]
    },
    {
      id: 2,
      nombre: "Tetris Rompecabezas",
      precio: "15000",
      descripcion: "Rompecabezas estilo tetris con base y tapa",
      categoria: "Juegos didacticos",
      imagen: [ tetrisRompecabezas ]
    },
    {
      id: 3,
      nombre: "Genius Square",
      precio: "30000",
      descripcion: "Juego ludico con piezas tipo tetris dados y un tablero",
      categoria: "Juegos didacticos",
      imagen: [ geniusSquare ] 
    },
    {
      id: 4,
      nombre: "Alien porta incienso",
      precio: "12000",
      descripcion: "Divertido Porta incienzo alien fumando ",
      categoria: "Articulos de bazar",
      imagen: [ portaIncienzoAlien ]
    }, 
    {
      id: 5,
      nombre: "Silabario",
      precio: "30000",
      descripcion: "Bloques de silabas ideales para armar palabras",
      categoria: "Juegos educativos",
      imagen: [ silabario ]

    }, 
     {
      id: 6,
      nombre: "Nombre para lapices",
      precio: "1000 x unid.",
      descripcion: "Identificador de lapices por unidad",
      categoria: "Articulos escolares",
      imagen: [ nombreLapices ] 

    },
       {
      id: 7,
      nombre: "Nombre para lapices",
      precio: "700 x unid.",
      descripcion: "Identificador de lapices 10 unidades o más",
      categoria: "Articulos escolares",
      imagen: [ nombreLapices ] 

    },
       {
      id: 8,
      nombre: "Multibase matemática",
      precio: "1000",
      descripcion: "Recurso educativo para aprender el sistema de numeracion decimal y operaciones",
      categoria: "Juegos educativos",
      imagen: [ multiBase ]

    },
       {
      id: 9,
      nombre: "Descomposición de números",
      precio: "18000",
      descripcion: "Descomposicion de numeros con unidades, decenas, centenas y mil",
      categoria: "Juegos educativos",
      imagen: [ descomposicionNumeros ]

    },
       {
      id: 10,
      nombre: "Abecedario",
      precio: "14000",
      descripcion: "Juego de fichas de 25x25 con las letras del alfabeto mas base",
      categoria: "Juegos educativos",
      imagen: [ abecedario ] 

    },
     {
      id: 11,
      nombre: "Lapicero Capibara",
      precio: "6000",
      descripcion: "Lapicero con divertida forma de capibara",
      categoria: "Aticulos de bazar",
      imagen: [ lapiceroCapibara ]

    },
      {
      id: 12,
      nombre: "Llavero Roblox",
      precio: "1500",
      descripcion: "Llavero Roblox monocromático",
      categoria: "Llaveros",
      imagen: [ llaveroRoblox ]

    },
    {
      id: 13,
      nombre: "Maceta Pulpito",
      precio: "3800",
      descripcion: "Masetita-porta objetos con forma de pulpito para escritorio",
      categoria: "Articulos de bazar",
      imagen: [ masetaPulpito ]

    },
     {
      id: 14,
      nombre: "Number Blocks",
      precio: "25000",
      descripcion: "Figuras Number Blocks del 1 al 5",
      categoria: "Juegos educativos",
      imagen: [ numberBlocks ]

    },
     {
      id: 15,
      nombre: "Soporte Joystick Hombre Araña",
      precio: "4800",
      descripcion: "Soporte para Joystick play 5",
      categoria: "Accesorios de tecnologia",
      imagen: [ soporteJoystickAraña ] 

    },
      {
      id: 16,
      nombre: "Porta incienso Mono",
      precio: "14000",
      descripcion: "Porta incienso con forma de mono sentado fumando",
      categoria: "Articulos de bazar",
      imagen: [ portaInciensoMono ]

    },
         {
      id: 17,
      nombre: "Porta incienso Geisha",
      precio: "14000",
      descripcion: "porta incienso geisha sentada",
      categoria: "Articulos de bazar",
      imagen: [ portainciensoGeisha ]

    },
      {
      id: 18,
      nombre: "Arcano mayor el Loco",
      precio: "10000",
      descripcion: "Figura Arcano mayor de 12 cm de altura",
      categoria: "Arcanos",
      imagen: [ arcanoElTonto ]

    },
      {
      id: 19,
      nombre: "Porta lapiz SI PROMETO x 10 unid.",
      precio: "5000",
      descripcion: "Souvenir ideal para la jura a la bandera",
      categoria: "Articulos escolares",
      imagen: [ siPrometo ]

    },
      {
      id: 20,
      nombre: "Agitadores para vasos personalizados x 100",
      precio: "16000",
      descripcion: "Agitadoes 18cm de largo x 35 mm espesor",
      categoria: "Perzonalizacion de fiestas y eventos",
      imagen: [ agitadorePersonalizado ]

    },
      {
      id: 21,
      nombre: "Tetris de Equilibrio",
      precio: "15000",
      descripcion: "40 Piezas tipo tetris con una base y un dado",
      categoria: "Juegos didacticos",
      imagen: [ tetrisEquilibrio ]

    },
      {
      id: 22,
      nombre: "Llavero Cangrejo articuldo",
      precio: "2800",
      descripcion: "Llavero articulado de cangrejo varios colores",
      categoria: "Llaveros",
      imagen: [ cangrejoArticulado ]

    },
      {
      id: 23,
      nombre: "Llavero Delfin articuldo",
      precio: "2800",
      descripcion: "Llavero articulado de delfin varios colores",
      categoria: "Llaveros",
      imagen: [ delfinArticulado ]

    },
      {
      id: 24,
      nombre: "Llavero Estrella articulda",
      precio: "1800",
      descripcion: "Llavero articulado de Estrella de mar varios colores",
      categoria: "Llaveros",
      imagen: [ estrellaArticulada ]

    },
      {
      id: 25,
      nombre: "Llavero Calabaza de Halloween ",
      precio: "1200",
      descripcion: "Simpático llavero con la cabeza calabaza de Hallowen ",
      categoria: "Llaveros",
      imagen: [ calabazaHalloween ]

    },
      {
      id: 26,
      nombre: "Llavero Pulpito articulado",
      precio: "3800",
      descripcion: "Llavero articulado de Pulpito ojos kawaii",
      categoria: "Llaveros",
      imagen: [ pulpitoArtiuldo ]

    },
      {
      id: 27,
      nombre: "Lagartija Tom de Hoppers",
      precio: "4800",
      descripcion: "Figura de 9 cm de altura de la simpática lagartija de Hopers",
      categoria: "Figuras 3d",
      imagenes: [ lagartijaTom, lagartijaTomEscritorio]

    },
      {
      id: 28,
      nombre: "Porta incienso El Pescador Oriental",
      precio: "4800",
      descripcion: "Porta incienso de 33 cm de largo varios colores",
      categoria: "Articulos de bazar",
      imagen: [ portaInciensoCanoa ]

    },
      {
      id: 29,
      nombre: "Organizador de cosmeticos con cajón",
      precio: "28600",
      descripcion: "Organizador de 1 cm de alto y 20cmx15cm de base ",
      categoria: "Articulos de bazar",
      imagen: [ organizadorCosmeticos ]

    },
     {
      id: 30,
      nombre: "Soporte celular/Llavero",
      precio: "2500",
      descripcion: "Soporte tipo llavero varios colores ",
      categoria: "Accesorios de tecnologia",
      imagen: [ soporteCelularLlavero ]

    },
     {
      id: 31,
      nombre: "Escarapela Viva la Patria!!!!",
      precio: "1200",
      descripcion: "Escarpela con textura y leyenda ",
      categoria: "Articulos escolares",
      imagen: [ escarapelaVivaLaPatria ]

    },
     {
      id: 32,
      nombre: "Pin de escarapela",
      precio: "1000",
      descripcion: "Pin tipo escarapela con ribetes dorados",
      categoria: "Articulos escolares",
      imagen: [ pinEscarapela ]

    },
      {
      id: 33,
      nombre: "Cuerpos geometricos para encastrar",
      precio: "16000",
      descripcion: "Juego de encastre ideal para el aprendizaje matemático y la motricidad fina",
      categoria: "Juegos educativos",
      imagen: [ figurasGeometricas ]

    },
      {
      id: 34,
      nombre: "Figura de Iron Man",
      precio: "16000",
      descripcion: "Figura de accion monocromatica Iron Man de 15 cm",
      categoria: "Figuras 3d",
      imagenes: [ ironManIa, ironManTaller ]

    },
      {
      id: 35,
      nombre: "Angry Bird Red",
      precio: "14000",
      descripcion: "figura de Angry Birds 9 cm",
      categoria: "Figuras 3d",
      imagenes: [ angryBirdsIa, angryBirdsTaller, angryBirdsCajon, angryBirdsCerca, angryBirdsFrente  ]

    },
      {
      id: 36,
      nombre: "Arcano mayor Los Amantes",
      precio: "10000",
      descripcion: "Figura de Arcao mayor de 12 cm",
      categoria: "Arcanos",
      imagen: [ arcanoLosAmantes ]

    },
       {
      id: 37,
      nombre: "Arcano mayor La Estrella",
      precio: "10000",
      descripcion: "Figura de Arcao mayor de 12 cm",
      categoria: "Arcanos",
      imagen: [ arcanoLaEstrella ]

    },
        {
      id: 38,
      nombre: "Arcano mayor Sol",
      precio: "10000",
      descripcion: "Figura de Arcano mayor de 12 cm",
      categoria: "Arcanos",
      imagen: [ arcanoSol ]

    },
         {
      id: 39,
      nombre: "Arcano mayor Luna",
      precio: "10000",
      descripcion: "Figura de Arcao mayor de 12 cm",
      categoria: "Arcanos",
      imagen: [ arcanoLuna ]

    },
         {
      id: 40,
      nombre: "Macetita Lectura",
      precio: "3800",
      descripcion: "Macetita y porta objetos para esritorio y/o decoración",
      categoria: "Articulos de bazar",
      imagen: [ macetitaLibro ]

    },
          {
      id: 41,
      nombre: "Arcano El Colgado",
      precio: "10000",
      descripcion: "Figura d arcano mayor 12 cm",
      categoria: "Arcanos",
      imagen: [ arcanoElColgado ]

    },
          {
      id: 42,
      nombre: "Llavero Patricio",
      precio: "1800",
      descripcion: "Divertido llavero de Patricio",
      categoria: "Llaveros",
      imagen: [ patricioLlavero ]

    },
          {
      id: 43,
      nombre: "Jake el Perro",
      precio: "12000",
      descripcion: "Muñeco de Jake el Perro del progrma Hora de aventura de 13 cm de altura",
      categoria: "Figuras 3d",
      imagenes: [ jackElPerro, jackElPerroLateral, jackElPerroMesa, jackElPerroPrimerPlano, jackElPerroAbajo ]

    },
        {
      id: 44,
      nombre: "Arcágel Miguel",
      precio: "8500",
      descripcion: "Figura del arcángel Miguel d 11.5 cm de altura",
      categoria: "Figuras 3d",
      imagenes: [ arcangelMiguelIa, arcangelMiguelFrente, arcangelMiguel, arcangelMiguelTrasera ]

    },
         {
      id: 45,
      nombre: "Figuras geométricas doble encastre",
      precio: "12000",
      descripcion: "Set de fiuras geométricas con doble encastre y base",
      categoria: "Juegos educativos",
      imagenes: [ formasGeometricasDoble ]

    },
       {
      id: 46,
      nombre: "Rompecabezas de Stegosaurus",
      precio: "4200",
      descripcion: "Rompecabezas de dinosaurio con base para encastre",
      categoria: "Juegos didacticos",
      imagenes: [ rompeCabezasStegosaurus ]

    },
      {
      id: 47,
      nombre: "Set de rompecabezas de Dinos",
      precio: "18000",
      descripcion: "Cinco rompecabezas de dinosaurios con base para encastre",
      categoria: "Juegos didacticos",
      imagenes: [ setRompecabezasDinos ]

    }

  ]
 
  // 4. Filtrar los productos según la categoría que toque el usuario
  const productosFiltrados = categoriaActiva === 'Todos'
    ? misProductos
    : misProductos.filter(p => p.categoria === categoriaActiva)

  return (
    <div>
      {/* Encabezado */}
      <header className="header-prisma">
        <div className="logo-contenedor">
          <img src={logoPrisma} alt="Logo Prisma 3D" className="logo-img" />
        </div>
        <h1 className="titulo-prisma">
          PRISMA <span className="destaque-naranja">3D</span>
        </h1>
        <p className="subtitulo-prisma">Taller de Impresión & Catálogo Amigable</p>
      </header>
  {/* BARRA DE TEXTO EN MOVIMIENTO (TICKER) */}
      <div className="barra-corrediza">
        <div className="texto-movimiento">
          <span>✨ Llaveros Personalizados</span>
          <span>⚡ Souvenirs para Eventos</span>
          <span>🎨 Diseños a Pedido</span>
          <span>🚀 Souveniers Escolares</span>
          <span>🎁 Personalizacion para eventos y fiestas</span>
          <span>✨ Llaveros Personalizados</span>
          <span>⚡ Souvenirs para Eventos</span>
          <span>🎨 Diseños a Pedido</span>
          <span>🚀 Juegos Educaticos Personalizados</span>
          <span>🎁 Regalos Empresariales</span>
        </div>
      </div>

      {/* Contenedor de la distribución de la página (Barra lateral + Productos) */}
  <div className="contenedor-layout">
        
        {/* BARRA DE NAVEGACIÓN LATERAL IZQUIERDA */}
        <aside className="sidebar-categorias" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="titulo-sidebar">Categorías</h3>
          <ul className="lista-sidebar">
            {categorias.map((cat, index) => (
              <li key={index}>
                <button 
                  className={`btn-categoria ${categoriaActiva === cat ? 'activo' : ''}`}
                  onClick={() => setCategoriaActiva(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* 📱 BLOQUE DE CONTACTO FIJO ABAJO EN EL MENÚ */}
          <div style={{
            marginTop: 'auto',       /* Truco de Flexbox: empuja el bloque bien abajo de todo */
            padding: '20px 15px 10px 15px',
            borderTop: '1px solid #eae5db', /* Línea fina pastel divisoria */
            textAlign: 'center'
          }}>
            <p style={{ 
              margin: '0 0 6px 0', 
              fontSize: '12px', 
              color: '#8c8275', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Numeros de contacto 🚀
            </p>
                      <div style={{
            backgroundColor: '#fff5f2', /* Fondo salmón suave */
            padding: '10px 14px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '700',
            color: '#ff9273', /* Naranja de Prisma 3D */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px' /* Separa el logo del texto de forma perfecta */
          }}>
            {/* 🟢 LOGO OFICIAL DE WHATSAPP VECTORIZADO */}
            <svg 
              viewBox="0 0 448 512" 
              style={{ width: '18px', height: '18px', fill: '#25D366' }} /* Color verde oficial de WhatsApp */
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>

            {/* Tu número de teléfono */}
            <span>11 5738 8436</span> <p>ó</p> <span>11 3365 2989</span>
            
          </div>

      
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL (TARJETAS) */}
        <main className="contenido-productos">
         {/* <h2 className="titulo-seccion">
            {categoriaActiva === 'Todos' ? 'Catalogo de productos' : categoriaActiva}
          </h2>*/}
          
          <div className="grilla-productos">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => (
                <ProductCard 
                  key={producto.id}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  descripcion={producto.descripcion}
                  imagenes={producto.imagenes} 
                  imagen={producto.imagen}
                />
              ))
            ) : (
              <p className="sin-productos">Próximamente cargaremos productos en esta categoría 🛠️</p>
            )}
          </div>

                  {/* CONTENIDO PRINCIPAL (TARJETAS) */}
        <main className="contenido-productos" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          <div className="grilla-productos" style={{ flex: 1 }}>
            {/* Acá adentro está tu mapeo de productos actual... */}
          </div>

                 {/* 🐾 PIE DE PÁGINA PROFESIONAL - ALINEADO A LA IZQUIERDA */}
          <footer style={{
            marginTop: '40px',
            padding: '20px 30px', /* Más aire a los costados para que respire */
            borderTop: '1px solid #eae5db',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 -4px 12px rgba(140, 130, 117, 0.03)',
            
            /* 🎯 TRUCO DE ALINEACIÓN HORIZONTAL */
            display: 'flex',
            flexDirection: 'row',       /* Los elementos se ponen uno al lado del otro */
            alignItems: 'center',       /* Centrado vertical perfecto de ambos elementos */
            justifyContent: 'space-between', /* Envía el logo al extremo izquierdo y el texto al derecho */
            flexWrap: 'wrap',           /* Si la pantalla es muy chica (celular), se acomodan solos */
            gap: '20px'
          }}>
            
                    {/* 🎨 LOGO CON MÁXIMA PRESENCIA CONTRA LA IZQUIERDA */}
            <img 
              src={logoPrisma} 
              alt="Logo Prisma 3D" 
              style={{ 
                height: '120px', /* ◀ ¡SUBIMOS DE 45PX A 85PX PARA QUE DESTAQUE! */
                width: 'auto',
                objectFit: 'contain'
              }} 
            />


            {/* 📝 TEXTOS DE CRÉDITOS CONTRA EL MARGEN DERECHO */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 2px 0', fontSize: '18px', fontWeight: '600', color: '#4a4a4a' }}>
                © 2026 Prisma 3D
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#8c8275', letterSpacing: '0.3px' }}>
                Impresiones 3D en Alta Definición • Buenos Aires, Argentina 🇦🇷
              </p>
            </div>

          </footer>


        </main>

        </main>

      </div>
    </div>
  )
}


export default App
