// Funções de cálculo para a Calculadora EcoTrip

/**
 * Calcula as emissões de CO2 e o custo dos créditos de carbono para uma viagem.
 * @param {number} distance - Distância em quilômetros (km)
 * @param {string} transportMode - Meio de transporte (bicicleta, carro, onibus, caminhao)
 * @returns {Object} Objeto contendo as emissões em kg e o custo de compensação em Reais
 */
function calculateTripImpact(distance, transportMode) {
    // Valida se o fator de emissão existe para o transporte escolhido
    const emissionFactor = CONFIG.emissionFactors[transportMode];
    
    if (emissionFactor === undefined) {
        throw new Error("Meio de transporte inválido.");
    }

    // Emissão total em kg de CO2 = Distância (km) * Fator de emissão (kg CO2/km)
    const totalEmissionsKg = distance * emissionFactor;
    
    // Converte para toneladas de CO2
    const totalEmissionsTon = totalEmissionsKg / 1000;

    // Custo para compensar (Preço por tonelada * toneladas)
    const offsetCost = totalEmissionsTon * CONFIG.carbonCreditPricePerTon;

    return {
        emissionsKg: totalEmissionsKg.toFixed(2),
        offsetCost: offsetCost.toFixed(2)
    };
}
