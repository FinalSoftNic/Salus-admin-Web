"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Vuelve a la página anterior
  };

  const handleLogin = () => {
    // Redirige a la página de autenticación al hacer clic en "Iniciar"
    router.push("/doctor/autenticacion");
  };

  const handleRegister = () => {
    // Redirige a la nueva página de registro del doctor
    router.push("/doctor/registro");
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
          Bienvenido Doctor/a
        </h1>
      </div>

      {/* Contenido principal del formulario */}
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
        {/* Sección de inputs y logo */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center', 
            width: '100%', 
            maxWidth: '50rem',
            gap: '3rem',
          }}
        >
          {/* Inputs de Código y Contraseña */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              alignItems: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label htmlFor="codigoSalud" style={{ color: '#1a1a1a', fontSize: '1rem' }}>
                Código profesional de <br /> Salud:
              </label>
              <input 
                type="text" 
                id="codigoSalud" 
                style={{ 
                  border: '1px solid #ccc', 
                  borderRadius: '0.375rem', 
                  padding: '0.5rem 1rem', 
                  fontSize: '1rem', 
                  minWidth: '12rem',
                }} 
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label htmlFor="contrasena" style={{ color: '#1a1a1a', fontSize: '1rem' }}>
                Contraseña:
              </label>
              <input 
                type="password" 
                id="contrasena" 
                style={{ 
                  border: '1px solid #ccc', 
                  borderRadius: '0.375rem', 
                  padding: '0.5rem 1rem', 
                  fontSize: '1rem', 
                  minWidth: '12rem',
                }} 
              />
            </div>
          </div>

          {/* Logo del Gobierno y MINSA */}
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/gobierno-logo.png"
              alt="Logo del Gobierno y Ministerio de Salud" 
              width={200}
              height={150}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Botones de Iniciar y Registrarse */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '16rem' }}>
          <button
            onClick={handleLogin}
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
            Iniciar
          </button>
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

        {/* Mensaje de advertencia */}
        <p 
          style={{ 
            color: '#1a1a1a', 
            fontSize: '0.875rem', 
            textAlign: 'center', 
            maxWidth: '30rem', 
            marginTop: '2rem',
          }}
        >
          El acceso no autorizado o la divulgación de información sensible puede <br /> resultar en medidas disciplinarias o legales.
        </p>
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