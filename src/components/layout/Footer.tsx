'use client';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '40px 5%', borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
      background: '#101010', color: '#888', display: 'flex', 
      justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', 
      gap: '20px', fontSize: '13px' 
    }}>
      <div>
        <span>© 2026 G Projects. All rights reserved.</span>
        <span style={{ margin: '0 10px' }}>·</span>
        <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Πολιτική Απορρήτου: Τα στοιχεία που υποβάλλετε στη φόρμα χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας.'); }} style={{ color: '#aaa', textDecoration: 'underline' }}>
          Πολιτική Απορρήτου
        </a>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#c7a86b', textDecoration: 'none' }}>Instagram ↗</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#c7a86b', textDecoration: 'none' }}>Facebook ↗</a>
      </div>
    </footer>
  );
}