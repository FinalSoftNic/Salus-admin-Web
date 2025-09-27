"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AutenticacionPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleVerify = () => {
    // Lógica para verificar el código
    console.log("Verificando código...");
  };

  const handleResendCode = () => {
    // Lógica para reenviar el código
    console.log("Enviando otro código...");
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        width: '100%', 
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, var(--color-bg-gradient-start), var(--color-bg-gradient-end))',
      }}
    >
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
            backgroundColor: 'var(--color-green-primary)', 
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
            color: 'var(--color-dark-text)', 
            textAlign: 'center',
          }}
        >
          Autentificación
        </h1>
      </div>
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
        <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-dark-text)', textAlign: 'center' }}>
          autentificación de 2 factores
        </h2>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label htmlFor="codigoVerificacion" style={{ color: 'var(--color-dark-text)', fontSize: '1rem' }}>
              Código de Verificación
            </label>
            <input 
              type="text" 
              id="codigoVerificacion" 
              style={{ 
                border: '1px solid #ccc', 
                borderRadius: '0.375rem', 
                padding: '0.5rem 1rem', 
                fontSize: '1rem', 
                minWidth: '12rem',
              }} 
            />
          </div>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '16rem' }}>
          <button
            onClick={handleVerify}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
              color: 'var(--color-green-primary)',
              border: '2px solid var(--color-green-primary)',
              fontSize: '1.125rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              outline: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d1fae5', e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white', e.currentTarget.style.transform = 'scale(1)')}
          >
            Verificar
          </button>
          <button
            onClick={handleResendCode}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
              color: 'var(--color-green-primary)',
              border: '2px solid var(--color-green-primary)',
              fontSize: '1.125rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              outline: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d1fae5', e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white', e.currentTarget.style.transform = 'scale(1)')}
          >
            Enviar otro Código
          </button>
        </div>
      </div>
      <div 
        style={{ 
          width: '100%', 
          backgroundColor: '#042a5c',
          padding: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          color: 'var(--color-light-text)', 
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