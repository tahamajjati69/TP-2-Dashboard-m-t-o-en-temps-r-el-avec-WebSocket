const WebSocketServer = require("ws").Server;
const CSVToJSON = require("csvtojson");

const wss = new WebSocketServer({ port: 5002 });
console.log(" Serveur WebSocket actif sur ws://localhost:5002");

wss.on("connection", async function (ws) {
  console.log(" Client connecté");

  try {
    const data = await CSVToJSON().fromFile("temp.csv");
    let i = 0;

    const timer = setInterval(function () {
      if (i < data.length) {
        // On transforme l'objet JS en texte (JSON) pour l'envoyer
        ws.send(JSON.stringify(data[i]));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 3000); // 3000ms = 3 secondes

    ws.on("close", () => {
      clearInterval(timer);
      console.log(" Client déconnecté");
    });

  } catch (err) {
    console.error("Erreur serveur :", err);
  }
});