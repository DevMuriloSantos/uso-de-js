function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero."); // criar um erro personalizado se caso b = 0
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (erro) { // capturar o erro
  console.error("Erro:", erro.message); // exibir a mensagem de erro
}
