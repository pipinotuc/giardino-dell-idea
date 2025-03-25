function salvaDataESemeAttuale(seme) {
  const oggi = new Date().toLocaleDateString('it-IT', {
    day: '2-digit', month: 'long', year: 'numeric'
  });
  localStorage.setItem('lastSeedDate', oggi);
  localStorage.setItem('lastSeedName', seme);
}
