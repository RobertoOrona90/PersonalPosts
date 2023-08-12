function copyCode(controlId) {
    var codigo = document.getElementById(controlId);
    var rango = document.createRange();
    rango.selectNode(codigo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rango);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }