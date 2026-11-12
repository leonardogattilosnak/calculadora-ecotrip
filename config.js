// Configurações e dados simulados para a Calculadora EcoTrip

const CONFIG = {
    // Preço estimado por tonelada de CO2 compensada (em Reais)
    carbonCreditPricePerTon: 50.00,

    // Fatores de emissão em kg de CO2 por quilômetro (kg CO2 / km)
    emissionFactors: {
        bicicleta: 0.0,
        carro: 0.12,
        onibus: 0.04,
        caminhao: 0.85
    },

    // Base de rotas simuladas (origem e destino em minúsculas para facilitar a busca)
    routes: [
        { origin: "bauru", destination: "sao paulo", distance: 326 },
        { origin: "bauru", destination: "campinas", distance: 260 },
        { origin: "sao paulo", destination: "rio de janeiro", distance: 430 },
        { origin: "campinas", destination: "sao paulo", distance: 95 }
    ]
};
