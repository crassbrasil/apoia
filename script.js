function gerarPix(valor) {
  const chave = '00020126360014BR.GOV.BCB.PIX0113+556199999999520400005303986540' + valor.toString().padStart(2, '0') + '5802BR5920Ana Laura da Silva6009SAO PAULO62110514AjudeAnaLaura6304';
  document.getElementById('pixCode').value = chave;
  document.getElementById('qrCode').src = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(chave);
  document.getElementById('pixModal').style.display = 'flex';
}
function fecharPopup() {
  document.getElementById('pixModal').style.display = 'none';
}
function copiarPix() {
  const textarea = document.getElementById('pixCode');
  textarea.select();
  document.execCommand('copy');
  alert('Código Pix copiado!');
}
