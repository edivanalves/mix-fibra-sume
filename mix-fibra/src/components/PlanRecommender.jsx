// Caminho: src/components/PlanRecommender.jsx

import React, { useState, useEffect, useRef } from 'react';

const PlanRecommender = () => {
    const [usageInput, setUsageInput] = useState('');
    const [recommendationOutput, setRecommendationOutput] = useState('');
    const [llmLoading, setLlmLoading] = useState(false);
    const debounceRef = useRef();

    useEffect(() => {
        // A função foi movida para dentro do useEffect, resolvendo a dependência.
        const handleRecommendation = async () => {
            setLlmLoading(true);
            // Simulação de chamada de API
            setTimeout(() => {
                if (!usageInput.trim()) {
                    setRecommendationOutput('<p class="text-red-400">Por favor, descreva seu uso da internet.</p>');
                } else {
                     setRecommendationOutput('<div class="text-blue-100">Para uma recomendação personalizada, fale com nosso atendimento pelo WhatsApp.</div>');
                }
                setLlmLoading(false);
            }, 1500);
        };

        if (!usageInput.trim()) {
            setRecommendationOutput('');
            setLlmLoading(false); // Garante que o loading pare se o input for limpo
            return;
        }

        // Limpa o timeout anterior e cria um novo
        if (debounceRef.current) clearTimeout(debounceRef.current);
        
        // Inicia o loading imediatamente ao digitar
        setLlmLoading(true); 
        debounceRef.current = setTimeout(handleRecommendation, 1500);

        // Função de limpeza para quando o componente for desmontado
        return () => clearTimeout(debounceRef.current);

    }, [usageInput]); // A lista de dependências está correta, pois só depende de 'usageInput'

    return (
        <div className="bg-blue-800/80 glass rounded-2xl p-8 shadow-xl mt-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Descubra o melhor plano para você</h3>
            <textarea
                className="w-full p-4 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 h-32 resize-y"
                placeholder="Ex: 'Somos 4 pessoas em casa, gostamos de assistir filmes em 4K, jogar online e fazer videochamadas de trabalho.'"
                value={usageInput}
                onChange={(e) => setUsageInput(e.target.value)}
            ></textarea>

            {llmLoading && (
                <div className="flex items-center justify-center mt-6">
                    <div className="loader"></div>
                    <p className="ml-4 text-lg text-blue-200">Buscando a melhor recomendação...</p>
                </div>
            )}

            <div
              className={`mt-6 p-4 bg-blue-900 rounded-lg text-left text-blue-100 ${recommendationOutput && !llmLoading ? '' : 'hidden'}`}
              dangerouslySetInnerHTML={{ __html: recommendationOutput }}
            ></div>
        </div>
    );
}

export default PlanRecommender;