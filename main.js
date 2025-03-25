// 🌟 Seme Speciale: ogni 10 semi
const semiSpecialiBonus = [
  "🌌 Riflessione: Qual è l'idea che ti guida oggi?",
  "🎯 Sfida: Metti in pratica un pensiero del tuo diario.",
  "💡 Ispirazione: Prendi un’idea già piantata e immagina cosa potrebbe diventare.",
  "🧭 Domanda: Dove stai andando con le tue scoperte?",
  "🎨 Invito: Illustra una delle tue idee.",
  "📚 Ricordo: C'è qualcosa che hai dimenticato e vuoi ritrovare?",
  "🪞 Specchio: Scrivi ciò che pensi di te in questo momento.",
  "💌 Messaggio: Cosa vorresti dire al tuo futuro?",
  "🌈 Visione: Descrivi il tuo giardino tra un anno.",
  "✨ Sorpresa: Torna domani e scopri cosa fiorirà..."
];

function plantSeed() {
  const box = document.getElementById('seed-content');

  if (planted >= seeds.length) {
    box.textContent = "🌸 Tutti i semi sono già stati piantati!";
    return;
  }

  const seme = seeds[planted];
  const oggi = new Date().toLocaleDateString('it-IT');
  const isSpecial = isSemeSpeciale(planted);

  const messaggio = isSpecial
    ? `🌟 Seme Speciale! ${seme.emoji} ${seme.titolo}: “${seme.descrizione}” 🌟`
    : `${seme.emoji} ${seme.titolo}: “${seme.descrizione}”`;

  box.textContent = messaggio;

  // Aggiunge il bonus se seme speciale
  if (isSpecial) {
    const bonus = semiSpecialiBonus[(planted / 10 - 1) % semiSpecialiBonus.length];
    seme.bonus = bonus;

    const bonusBox = document.createElement('p');
    bonusBox.textContent = bonus;
    bonusBox.className = 'bonus-speciale';
    box.appendChild(bonusBox);

    animateSpecialSeed();
    playSound('special');
  } else {
    playSound('seme');
  }

  // Salva data
  seedDates[planted] = `📅 ${oggi}`;
  localStorage.setItem('seedDates', JSON.stringify(seedDates));

  // Salva posizione
  planted++;
  localStorage.setItem('plantedSeeds', planted);

  currentEntry = planted - 1;

  // Aggiorna tutto
  updateDiario();
  updateTree();
  updateCalendario();
  updateMappa();
  updateZainetto();
}

function animateSpecialSeed() {
  const anim = document.createElement('div');
  anim.textContent = '✨';
  anim.className = 'seme-speciale-animazione';
  document.body.appendChild(anim);
  setTimeout(() => anim.remove(), 1500);
}

function playSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
}

<audio id="special" src="suoni/speciale.mp3" preload="auto"></audio>
<audio id="seme" src="suoni/pop.mp3" preload="auto"></audio>


.bonus-speciale {
  margin-top: 10px;
  padding: 8px 12px;
  background: #fff3e0;
  border-left: 4px solid #ffb300;
  border-radius: 6px;
  color: #bf360c;
  font-style: italic;
  animation: fadeInBonus 0.6s ease-in;
}

@keyframes fadeInBonus {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.seme-speciale-animazione {
  position: fixed;
  top: 40%;
  left: 50%;
  font-size: 3em;
  transform: translate(-50%, -50%);
  animation: sparkle 1.5s ease-out forwards;
  pointer-events: none;
  z-index: 1000;
}

@keyframes sparkle {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -60%) scale(1.2); }
  100% { opacity: 0; transform: translate(-50%, -80%) scale(0.3); }
}


