function performSearch() {
    var searchTerm = document.getElementById('search-input').value;
    alert('Você pesquisou por: ' + searchTerm);
    // Adicione aqui a lógica para lidar com a pesquisa (enviar para um servidor, etc.).
}
// Importa o módulo 'http' do Node.js
const http = require('http');

// Configurações do servidor
const hostname = '127.0.0.1'; // Endereço IP do servidor (localhost)
const port = 3000; // Porta do servidor

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
  // Configura o cabeçalho da resposta HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Envia uma resposta ao cliente
  res.end('Hello, world!\n');
});

// Inicia o servidor e ouve as conexões na porta e endereço especificados
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

