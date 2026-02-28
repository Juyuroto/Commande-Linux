import { useState, useMemo, useEffect } from 'react';
import { Search, Terminal, Filter } from 'lucide-react';
import { LinuxCommandCard } from './components/LinuxCommandCard';
import { linuxCommands, categories } from './data/linuxCommands';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Force le thème sombre au document
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Fonction de normalisation du texte pour la recherche
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Retire les accents
  };

  // Filtrage et recherche des commandes
  const filteredCommands = useMemo(() => {
    let filtered = linuxCommands;

    // Filtre par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cmd => cmd.category === selectedCategory);
    }

    // Recherche intelligente
    if (searchQuery.trim()) {
      const normalizedQuery = normalizeText(searchQuery);
      const queryWords = normalizedQuery.split(/\s+/);

      filtered = filtered.filter(cmd => {
        const searchableText = normalizeText([
          cmd.command,
          cmd.description,
          ...cmd.keywords,
          ...cmd.options.map(opt => `${opt.flag} ${opt.description}`),
          ...cmd.examples.map(ex => `${ex.code} ${ex.explanation}`)
        ].join(' '));

        // La commande correspond si tous les mots de la requête sont trouvés
        return queryWords.every(word => searchableText.includes(word));
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black transition-colors duration-200">
      {/* En-tête */}
      <header className="bg-gradient-to-r from-blue-900 to-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <Terminal size={40} />
              <h1 className="text-4xl font-bold">
                Guide Linux pour Fedora
              </h1>
            </div>
          </div>
          <p className="text-blue-100 text-lg">
            Référence complète des commandes Linux essentielles avec exemples pédagogiques
          </p>
        </div>
      </header>

      {/* Barre de recherche et filtres */}
      <div className="bg-gray-800 shadow-md sticky top-0 z-10 transition-colors duration-200">
        <div className="container mx-auto px-4 py-6">
          {/* Barre de recherche */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Rechercher une commande... (ex: "lister les fichiers", "installer un paquet", "voir les processus")'
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-gray-100 bg-gray-700 placeholder-gray-500 transition-colors duration-200"
            />
          </div>

          {/* Filtres par catégorie */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={18} className="text-gray-400" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Toutes ({linuxCommands.length})
            </button>
            {categories.map(category => {
              const count = linuxCommands.filter(cmd => cmd.category === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? `${category.color} text-white`
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Résultats de recherche */}
        <div className="mb-6">
          <p className="text-gray-400">
            {filteredCommands.length === linuxCommands.length ? (
              <>
                <span className="font-semibold">{filteredCommands.length}</span> commandes disponibles
              </>
            ) : (
              <>
                <span className="font-semibold">{filteredCommands.length}</span> résultat{filteredCommands.length > 1 ? 's' : ''} trouvé{filteredCommands.length > 1 ? 's' : ''}
              </>
            )}
          </p>
        </div>

        {/* Grille de commandes */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCommands.map(command => {
              const category = categories.find(c => c.id === command.category);
              return (
                <LinuxCommandCard
                  key={command.id}
                  command={command}
                  categoryColor={category?.color || 'bg-gray-500'}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Aucune commande trouvée
            </h3>
            <p className="text-gray-500">
              Essayez avec d'autres mots-clés ou changez de catégorie
            </p>
          </div>
        )}
      </main>

      {/* Pied de page */}
      <footer className="bg-black text-white mt-16 transition-colors duration-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              Guide de référence Linux pour Fedora
            </p>
            <p className="text-gray-500 text-sm">
              {linuxCommands.length} commandes essentielles avec exemples pédagogiques
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
