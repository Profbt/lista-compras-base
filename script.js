const form = document.getElementById('form');
const input = document.getElementById('itemInput');
const lista = document.getElementById('listaCompras');

// Backend provisório local, trocar pela URL do Render futuramente
const API_URL = 'https://SEU-BACKEND.onrender.com';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = input.value.trim();
  if (nome) {
    await fetch(API_URL + '/add-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome })
    });
    input.value = '';
    carregarLista();
  }
});

async function carregarLista() {
  const res = await fetch(API_URL + '/items');
  const data = await res.json();
  lista.innerHTML = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.nome;
    lista.appendChild(li);
  });
}
carregarLista();