"use client"; // Add this directive to mark the file as a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleDoctorClick = () => {
    router.push("/doctor");
  };

  const handleDirectorClick = () => {
    router.push("/director");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
      {/* Contenido principal centrado */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexGrow: 1, padding: '1rem', gap: '2rem' }}>
        {/* Encabezado */}
        <h1
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: 300, color: 'var(--color-dark-text)' }}
        >
          Bienvenido a Administración Salus
        </h1>

        {/* Logo Salus Administración */}
        <Image
  src="/salus-admin-logo.png"
  alt="Salus Administración"
  width={220}
  height={220}
  style={{ objectFit: 'contain', width: 'clamp(10rem, 30vw, 14rem)' }}
  priority
/>

        {/* Frase de bienvenida */}
        <p
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 400, lineHeight: 1.5, maxWidth: '40rem', color: 'var(--color-dark-text)' }}
        >
          ¡Bienvenido a Salus, la nueva forma de acercar <br /> la salud a todos tus pacientes!
        </p>

        {/* Botones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '16rem' }}>
          <button
            onClick={handleDoctorClick}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              backgroundColor: '#ecfdf5',
              color: 'var(--color-green-primary)',
              border: '2px solid var(--color-green-primary)',
              fontSize: '1.125rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              outline: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d1fae5', e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ecfdf5', e.currentTarget.style.transform = 'scale(1)')}
          >
            Doctor
          </button>
          <button
            onClick={handleDirectorClick}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              backgroundColor: '#ecfdf5',
              color: 'var(--color-green-primary)',
              border: '2px solid var(--color-green-primary)',
              fontSize: '1.125rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              outline: 'none',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d1fae5', e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ecfdf5', e.currentTarget.style.transform = 'scale(1)')}
          >
            Director
          </button>
        </div>
      </div>

      {/* Logos inferiores */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(2rem, 5vw, 3rem)', padding: '2rem 0' }}>
        <Image
          src="/gobierno-logo.png"
          alt="Gobierno"
          width={90}
          height={90}
          style={{ objectFit: 'contain', width: 'clamp(5rem, 15vw, 6rem)' }}
        />
        <Image
          src="/logo-finalsoft.png"
          alt="Finalsoft"
          width={85}
          height={85}
          style={{ objectFit: 'contain', width: 'clamp(5rem, 15vw, 5.5rem)' }}
        />
        <Image
          src="/salus-logo.png"
          alt="Salus"
          width={85}
          height={85}
          style={{ objectFit: 'contain', width: 'clamp(5rem, 15vw, 5.5rem)' }}
        />
      </div>
    </div>
  );
}