function calcular() {
  var n1 = document.getElementById("n1");
  var n2 = document.getElementById("n2");
  var n3 = document.getElementById("n3");
  var res = document.getElementById("res");
  var n1 = Number.parseFloat(n1.value);
  var n2 = Number.parseFloat(n2.value);
  var n3 = Number.parseFloat(n3.value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    res.innerHTML = `<p>[ERRO!]</p>`;
    res.innerHTML += `<p>Digite o valor das notas</br> entre 0 e 10</p>`;
  } else if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0 || n3 > 10 || n3 < 0) {
    res.innerHTML = `<p>[ERRO!]</p>`;
    res.innerHTML += `<p>Digite o valor das notas</br> entre 0 e 10</p>`;
  } else {
    if (n3 == 0) {
      s = (n1 + n2) * 0.25;
      f = (6 - s) / 0.5;
      res.innerHTML = `<p>A sua nota atualmente será: <strong>${s}</strong>.<p>`;
      res.innerHTML += `<p>Para chegar a média de 6.0.</br> Ainda é preciso tirar <strong>${f}</strong> na prova final.</p>`;
    } else {
      var nf = n1 * 0.25 + n2 * 0.25 + n3 * 0.5;
      res.innerHTML = `Sua média final será <strong>${nf}</strong></br> + a nota Bônus`;
    }
  }
}
