/* CONFIG: misma URL que en index.html */
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyXMFxSScjXfXNU7MnSuy3psCOKWyRh9UEZ2P7WmMDRabYA-jkqz665CGKDe';

/* EXPERIMENTOS */
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

/* CARGAR DATOS Y PINTAR */
(async () => {
  const raw = await fetch(SCRIPT_URL + '?action=ver');   // devuelve CSV simple
  const rows  = (await raw.text()).trim().split('\n').slice(1); // sin cabecera
  const equipos = {};          // {1:[nombres], 2:[nombres], ...}
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