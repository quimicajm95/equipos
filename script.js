/* CONFIG */
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyXMFxSScjXfXNU7MnSuy3psCOKWyRh9UEZ2P7WmMDRabYA-jkqz665CGKDe'; // <-- misma URL

const experimentos = [
  "Humo de brujas",
  "Identificación de iones hierro con tiosianato",
  "Amoníaco con sulfato de cobre",
  "Amoníaco con cloruro de cobalto",
  "Camaleón químico",
  "Botella azul",
  "Volcán de dicromato",
  "Cinta de magnesio",
  "Permanganato con etanol con y sin catalizador",
  "Serpiente del faraón",
  "Galvanoplastia",
  "Electrolisis y pH"
];

/* LEER SHEET Y PINTAR */
(async () => {
  const raw = await fetch(SCRIPT_URL + '?action=ver');
  const txt = await raw.text();
  const rows = txt.trim().split('\n').slice(1); // sin cabecera
  const equipos = {};
  for (let i = 1; i <= 12; i++) equipos[i] = [];
  rows.forEach(r => {
    const [nombre, eq] = r.split('\t');
    if (nombre && eq) equipos[eq].push(nombre);
  });
  const div = document.getElementById('resultados');
  for (let i = 1; i <= 12; i++) {
    const miembros = equipos[i].join(', ');
    div.innerHTML += `
      <h2>Equipo ${i} – Experimento: ${experimentos[i-1]}</h2>
      <p><strong>Miembros:</strong> ${miembros}</p>
    `;
  }
})();
