const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Chiudi il menu' : 'Apri il menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Apri il menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const fields = [
    'Buongiorno DE.MA Antincendio, vorrei richiedere informazioni/preventivo.',
    '',
    `Nome: ${form.get('nome')}`,
    `Azienda: ${form.get('azienda') || 'Non indicata'}`,
    `Telefono: ${form.get('telefono')}`,
    `Email: ${form.get('email') || 'Non indicata'}`,
    `Richiesta: ${form.get('richiesta')}`,
    `Dettagli: ${form.get('messaggio') || 'Nessun dettaglio aggiuntivo'}`
  ];
  const whatsappUrl = `https://wa.me/393290261683?text=${encodeURIComponent(fields.join('\n'))}`;
  document.getElementById('formFeedback').textContent = 'Si sta aprendo WhatsApp. Controlla il messaggio e premi Invia per inoltrare la richiesta.';
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
