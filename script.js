// Visor de imágenes (usa <dialog>, sin librerías)
const dlg = document.getElementById('zoom');
const big = dlg.querySelector('img');
document.querySelectorAll('[data-zoom]').forEach(b => {
  b.addEventListener('click', () => {
    const i = b.querySelector('img');
    big.src = i.src;
    big.alt = i.alt;
    dlg.showModal();
  });
});
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
document.getElementById('y').textContent = new Date().getFullYear();
