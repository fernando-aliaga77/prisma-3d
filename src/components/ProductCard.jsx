import { useState } from 'react';

function ProductCard({ nombre, precio, descripcion, imagenes, imagen }) {
  // Unificamos si viene una sola imagen o una lista de imágenes
  const listaImagenes = imagenes || (imagen ? [imagen] : []);
  
  // Estados para controlar si el modal está abierto y qué foto estamos viendo
  const [modalAbierto, setModalAbierto] = useState(false);
  const [fotoActual, setFotoActual] = useState(0);

  // Funciones para moverse por la galería
  const fotoSiguiente = (e) => {
    e.stopPropagation(); // Evita que se cierre el modal al hacer clic en la flecha
    setFotoActual((prev) => (prev === listaImagenes.length - 1 ? 0 : prev + 1));
  };

  const fotoAnterior = (e) => {
    e.stopPropagation();
    setFotoActual((prev) => (prev === 0 ? listaImagenes.length - 1 : prev - 1));
  };

  return (
    <>
      {/* 📇 TARJETA NORMAL DEL CATÁLOGO */}
      <div 
        onClick={() => listaImagenes.length > 0 && setModalAbierto(true)}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          margin: '15px',
          width: '260px',
          boxShadow: '0 10px 20px rgba(140, 130, 117, 0.08)',
          border: '1px solid #eae5db',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          cursor: listaImagenes.length > 0 ? 'pointer' : 'default',
          transition: 'transform 0.2s ease'
        }}
      >
        <div style={{ 
          width: '100%', 
          height: '180px', 
          backgroundColor: '#ffffff', 
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '15px',
          overflow: 'hidden'
        }}>
          {listaImagenes.length > 0 ? (
            <img 
              src={listaImagenes[0]} 
              alt={nombre} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} 
            />
          ) : (
            <span style={{ color: '#b3c7db', fontSize: '14px' }}>Sin foto aún 📸</span>
          )}
        </div>

        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#4a4a4a', fontWeight: '600' }}>
          {nombre}
        </h3>
        
        <p style={{ margin: '0 0 15px 0', fontSize: '13px', color: '#8c8275', lineHeight: '1.4', minHeight: '38px' }}>
          {descripcion}
        </p>
        
        <div style={{ 
          fontSize: '22px', 
          fontWeight: '700', 
          color: '#ff9273', 
          backgroundColor: '#fff5f2',
          padding: '6px 12px',
          borderRadius: '8px',
          display: 'inline-block',
          marginTop: 'auto'
        }}>
          ${precio}
        </div>
      </div>

      {/* 🖼️ VENTANA FLOTANTE (MODAL DE GALERÍA) */}
      {modalAbierto && (
        <div 
          onClick={() => setModalAbierto(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al tocar el centro
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '24px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
              textAlign: 'center'
            }}
          >            {/* Botón de cerrar con área de clic ampliada y centrada */}
            <button 
              onClick={() => setModalAbierto(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                
                /* 🎯 AMPLIAMOS EL ÁREA DEL POINTER: Hacemos la caja más grande para que sea facilísimo embocarle */
                width: '44px',
                height: '44px',
                cursor: 'pointer',
                
                /* Quitamos bordes y fondos del botón exterior */
                background: 'transparent',
                border: 'none',
                padding: '0',
                margin: '0',
                
                /* Centrado absoluto estricto con Grid */
                display: 'grid',
                placeItems: 'center',
                zIndex: 10
              }}
            >
              {/* ⚪ ESTE ES EL CÍRCULO VISUAL INTERNO */}
              <div style={{
                background: '#f0ede6',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'grid',
                placeItems: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#4a4a4a'
              }}>
                ✕
              </div>
            </button>

           
    

            {/* Contenedor de la foto gigante */}
            <div style={{ 
              width: '100%', 
              height: '320px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              marginBottom: '15px'
            }}>
              {/* Flecha Izquierda */}
              {listaImagenes.length > 1 && (
                <button onClick={fotoAnterior} style={estiloFlecha('left')}>◀</button>
              )}

              <img 
                src={listaImagenes[fotoActual]} 
                alt={`${nombre} - vista ${fotoActual + 1}`} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} 
              />

              {/* Flecha Derecha */}
              {listaImagenes.length > 1 && (
                <button onClick={fotoSiguiente} style={estiloFlecha('right')}>▶</button>
              )}
            </div>

            {/* Indicador de pelotitas abajo de la foto */}
            {listaImagenes.length > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '15px' }}>
                {listaImagenes.map((_, index) => (
                  <div 
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: index === fotoActual ? '#ff9273' : '#e0dbd1',
                      transition: 'background-color 0.2s'
                    }}
                  />
                ))}
              </div>
            )}

            <h2 style={{ color: '#4a4a4a', margin: '0 0 10px 0', fontSize: '22px' }}>{nombre}</h2>
            <p style={{ color: '#8c8275', fontSize: '14px', lineHeight: '1.5', margin: '0 0 20px 0' }}>{descripcion}</p>
            <div style={{ fontSize: '26px', fontWeight: '700', color: '#ff9273' }}>${precio}</div>
          </div>
        </div>
      )}
    </>
  );
}

// Estilo ayudante para las flechitas flotantes de la galería
const estiloFlecha = (lado) => ({
  position: 'absolute',
  top: '50%',
  [lado]: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  fontSize: '14px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
  zIndex: 10
});

export default ProductCard;
