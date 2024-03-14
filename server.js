import http from 'http';

const PORT = 3000;
const rotas = {
    "/": "Rota da página inicial",
    "/livros": "Rota da página de livros2",
    "/autores": "Rota da página de autores"
};

// Cria um servidor HTTP que responde com um texto simples
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
});

// O servidor local recebe conexões na porta 3000
server.listen(PORT, () => {
    console.log("Servidor escutando na porta 3000...");
});
