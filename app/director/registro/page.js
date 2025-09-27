"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DirectorRegistroPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleRegister = () => {
    // Lógica para registrar el director
    console.log("Registrando director...");
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        width: '100%', 
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)',
      }}
    >
      {/* Encabezado con flecha de regreso */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '1rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          position: 'relative',
          width: '100%',
          height: '4rem',
        }}
      >
        <button 
          onClick={handleBackClick}
          style={{ 
            position: 'absolute', 
            left: '1rem', 
            backgroundColor: '#10b981', 
            borderRadius: '50%', 
            width: '2.5rem', 
            height: '2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="white" 
            style={{ width: '1.5rem', height: '1.5rem' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 500, 
            color: '#1a1a1a', 
            textAlign: 'center',
          }}
        >
          Registro de administrador de hospital
        </h1>
      </div>

      {/* Contenido principal del formulario de registro */}
      <div 
        style={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '2rem', 
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', width: '100%', maxWidth: '30rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="cedula" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Cédula</label>
            <input type="text" id="cedula" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="nombreCompleto" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Nombre Completo</label>
            <input type="text" id="nombreCompleto" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="fechaNacimiento" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="direccion" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Dirección</label>
            <input type="text" id="direccion" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="correoInstitucional" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Correo Institucional</label>
            <input type="email" id="correoInstitucional" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="titulo" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Título o cargo dentro del hospital</label>
            <input type="text" id="titulo" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="hospital" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Hospital que administra</label>
            <input type="text" id="hospital" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="contrasena" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Contraseña</label>
            <input type="password" id="contrasena" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
            <label htmlFor="confirmarContrasena" style={{ color: '#1a1a1a', fontSize: '1rem' }}>Confirmar Contraseña</label>
            <input type="password" id="confirmarContrasena" style={{ border: '1px solid #ccc', borderRadius: '0.375rem', padding: '0.5rem 1rem', fontSize: '1rem', flexGrow: 1 }} />
          </div>
        </div>

        {/* Botón de registrarse */}
        <div style={{ width: '100%', maxWidth: '16rem', marginTop: '2rem' }}>
          <button
            onClick={handleRegister}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
              color: '#10b981',
              border: '2px solid #10b981',
              fontSize: '1.125rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              outline: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d1fae5', e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white', e.currentTarget.style.transform = 'scale(1)')}
          >
            Registrarse
          </button>
        </div>
      </div>

      {/* Pie de página */}
      <div 
        style={{ 
          width: '100%', 
          backgroundColor: '#042a5c',
          padding: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          color: '#ffffff', 
          fontSize: '1rem',
        }}
      >
        <p>FinalSoft@gmail.com</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#ccc', borderRadius: '4px' }}></div>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#ccc', borderRadius: '4px' }}></div>
        </div>
      </div>
    </div>
  );
}