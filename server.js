import http from 'http';

const PORT = 3000;

// Cria um servidor HTTP que responde com um texto simples
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

// O servidor local recebe conexões na porta 3000
server.listen(PORT, () => {
    console.log("Servidor escutando na porta 3000...");
});
