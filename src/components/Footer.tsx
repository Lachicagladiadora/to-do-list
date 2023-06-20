

export const Footer = () => {

  return (
  <footer
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: "10px",
      background: '#0B0E0D',
      alignItems: 'center',
      padding: '20px',
      color:'#d772a3',
    }}
  >
    <a
      href="https://github.com/Lachicagladiadora"
      target="_blank"
      style={{ background: '#0B0E0D',}}
    >
      <img src="../../public/github-logo.svg" alt="github" height={'28px'} style={{ background: '#0B0E0D',}} />
    </a>

    <p style={{ 
        background: '#0B0E0D', 
        color:'#e6e6e6',
      }}>
      by Lachicagladiadora
    </p>
    <p style={{ 
        background: '#0B0E0D', 
        color:'#e6e6e6',
      }}>
    
      2023 
    </p>
  </footer>)
}