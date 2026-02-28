import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export function LinuxCommandCard({ command, categoryColor }) {
  const [copiedExample, setCopiedExample] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedExample(index);
      setTimeout(() => setCopiedExample(null), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-shadow duration-200">
      {/* En-tête de la commande */}
      <div className={`${categoryColor} px-4 py-3`}>
        <h3 className="text-white font-mono text-lg font-bold">
          $ {command.command}
        </h3>
      </div>

      {/* Corps de la carte */}
      <div className="p-4">
        {/* Description */}
        <p className="text-gray-300 mb-4">
          {command.description}
        </p>

        {/* Bouton pour afficher/cacher les options */}
        {command.options && command.options.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              Options principales ({command.options.length})
            </button>
            
            {isExpanded && (
              <div className="mt-2 space-y-2 pl-4 border-l-2 border-blue-800">
                {command.options.map((option, idx) => (
                  <div key={idx} className="text-sm">
                    <code className="bg-gray-700 px-2 py-1 rounded text-blue-400 font-mono">
                      {option.flag}
                    </code>
                    <span className="text-gray-300 ml-2">
                      {option.description}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Exemples */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
            Exemples pratiques
          </h4>
          
          {command.examples.map((example, idx) => (
            <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden">
              {/* Code de l'exemple */}
              <div className="bg-black px-4 py-3 flex items-start justify-between gap-2">
                <code className="text-green-400 font-mono text-sm flex-1 break-all">
                  {example.code}
                </code>
                <button
                  onClick={() => copyToClipboard(example.code, idx)}
                  className="flex-shrink-0 p-1.5 rounded hover:bg-gray-800 transition-colors"
                  title="Copier la commande"
                >
                  {copiedExample === idx ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} className="text-gray-500 hover:text-gray-300" />
                  )}
                </button>
              </div>
              
              {/* Explication pédagogique */}
              <div className="bg-gray-700 px-4 py-3">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {example.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
