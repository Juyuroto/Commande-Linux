export const categories = [
  { id: 'files', name: 'Fichiers & Répertoires', color: 'bg-blue-500' },
  { id: 'packages', name: 'Paquets DNF/RPM', color: 'bg-green-500' },
  { id: 'processes', name: 'Processus', color: 'bg-purple-500' },
  { id: 'network', name: 'Réseau', color: 'bg-orange-500' },
  { id: 'users', name: 'Utilisateurs & Groupes', color: 'bg-pink-500' },
  { id: 'system', name: 'Système', color: 'bg-yellow-500' },
  { id: 'archives', name: 'Archives & Compression', color: 'bg-indigo-500' },
];

export const linuxCommands = [
  // Gestion des fichiers et répertoires
  {
    id: 1,
    category: 'files',
    command: 'ls',
    description: 'Liste le contenu d\'un répertoire',
    keywords: ['lister', 'afficher', 'voir', 'fichiers', 'répertoires', 'dossiers', 'list', 'contenu', 'directory'],
    options: [
      { flag: '-l', description: 'Affichage détaillé (permissions, propriétaire, taille, date)' },
      { flag: '-a', description: 'Affiche tous les fichiers, y compris les fichiers cachés (commençant par .)' },
      { flag: '-h', description: 'Tailles lisibles par l\'homme (Ko, Mo, Go)' },
      { flag: '-R', description: 'Liste récursive de tous les sous-répertoires' },
      { flag: '-t', description: 'Trie par date de modification (plus récent en premier)' },
    ],
    examples: [
      {
        code: 'ls -lah',
        explanation: 'Affiche tous les fichiers (même cachés) avec détails et tailles lisibles. Utilisez cette commande pour avoir une vue complète d\'un répertoire, incluant les permissions et propriétaires.'
      },
      {
        code: 'ls -lt /var/log',
        explanation: 'Liste les fichiers de log triés par date de modification. Très utile pour identifier rapidement les logs les plus récents lors d\'un dépannage.'
      },
      {
        code: 'ls -lR /etc | less',
        explanation: 'Liste récursivement tout le contenu de /etc avec pagination. Pratique pour explorer la hiérarchie complète de configuration système.'
      },
    ]
  },
  {
    id: 2,
    category: 'files',
    command: 'cd',
    description: 'Change le répertoire courant',
    keywords: ['changer', 'naviguer', 'aller', 'déplacer', 'répertoire', 'dossier', 'directory', 'move'],
    options: [
      { flag: '~', description: 'Retourne au répertoire personnel de l\'utilisateur' },
      { flag: '-', description: 'Retourne au répertoire précédent' },
      { flag: '..', description: 'Remonte au répertoire parent' },
    ],
    examples: [
      {
        code: 'cd ~',
        explanation: 'Retourne instantanément à votre répertoire personnel (/home/utilisateur), peu importe où vous êtes dans le système.'
      },
      {
        code: 'cd /etc/systemd/system',
        explanation: 'Navigue vers le répertoire des services systemd. Utilisé QUAND vous devez configurer ou consulter des services système.'
      },
      {
        code: 'cd -',
        explanation: 'Bascule entre le répertoire actuel et le précédent. Très pratique pour naviguer rapidement entre deux emplacements lors du travail.'
      },
    ]
  },
  {
    id: 3,
    category: 'files',
    command: 'mkdir',
    description: 'Crée un nouveau répertoire',
    keywords: ['créer', 'nouveau', 'dossier', 'répertoire', 'directory', 'make', 'folder'],
    options: [
      { flag: '-p', description: 'Crée les répertoires parents si nécessaire, sans erreur si existe déjà' },
      { flag: '-m', description: 'Définit les permissions du répertoire créé' },
    ],
    examples: [
      {
        code: 'mkdir -p ~/projets/mon-app/src/components',
        explanation: 'Crée toute l\'arborescence en une seule commande, même si les dossiers parents n\'existent pas. INDISPENSABLE pour initialiser rapidement une structure de projet.'
      },
      {
        code: 'mkdir -m 755 /tmp/data',
        explanation: 'Crée un répertoire avec des permissions spécifiques (rwxr-xr-x). Utilisez cette option QUAND la sécurité nécessite des permissions précises dès la création.'
      },
    ]
  },
  {
    id: 4,
    category: 'files',
    command: 'rm',
    description: 'Supprime des fichiers ou répertoires',
    keywords: ['supprimer', 'effacer', 'détruire', 'enlever', 'delete', 'remove', 'fichier', 'dossier'],
    options: [
      { flag: '-r', description: 'Suppression récursive (pour les répertoires)' },
      { flag: '-f', description: 'Force la suppression sans confirmation' },
      { flag: '-i', description: 'Demande confirmation avant chaque suppression' },
      { flag: '-v', description: 'Mode verbeux, affiche ce qui est supprimé' },
    ],
    examples: [
      {
        code: 'rm -i fichier.txt',
        explanation: 'Supprime avec confirmation. TOUJOURS recommandé pour éviter les suppressions accidentelles de données importantes.'
      },
      {
        code: 'rm -rf /tmp/old-data',
        explanation: 'Supprime un répertoire et tout son contenu sans confirmation. ATTENTION: Cette commande est irréversible et dangereuse. Utilisez-la UNIQUEMENT quand vous êtes absolument certain du contenu à supprimer.'
      },
      {
        code: 'rm -v *.log',
        explanation: 'Supprime tous les fichiers .log en affichant chaque suppression. Le mode verbeux permet de suivre l\'opération en temps réel.'
      },
    ]
  },
  {
    id: 5,
    category: 'files',
    command: 'cp',
    description: 'Copie des fichiers ou répertoires',
    keywords: ['copier', 'dupliquer', 'copy', 'duplicate', 'fichier', 'dossier', 'backup'],
    options: [
      { flag: '-r', description: 'Copie récursive des répertoires' },
      { flag: '-p', description: 'Préserve les permissions, propriétaire et horodatage' },
      { flag: '-u', description: 'Copie uniquement si le fichier source est plus récent' },
      { flag: '-v', description: 'Mode verbeux' },
    ],
    examples: [
      {
        code: 'cp -p config.conf config.conf.bak',
        explanation: 'Crée une sauvegarde exacte en préservant tous les attributs. TOUJOURS faire ceci AVANT de modifier un fichier de configuration critique.'
      },
      {
        code: 'cp -r /home/user/data /backup/',
        explanation: 'Copie récursivement un répertoire entier. Utilisez pour créer des backups manuels de vos données.'
      },
      {
        code: 'cp -u source.txt destination.txt',
        explanation: 'Ne copie que si le fichier source est plus récent que la destination. Économise du temps lors de synchronisations répétées.'
      },
    ]
  },
  {
    id: 6,
    category: 'files',
    command: 'mv',
    description: 'Déplace ou renomme des fichiers',
    keywords: ['déplacer', 'renommer', 'move', 'rename', 'fichier', 'dossier'],
    options: [
      { flag: '-i', description: 'Demande confirmation avant d\'écraser' },
      { flag: '-n', description: 'N\'écrase jamais de fichiers existants' },
      { flag: '-v', description: 'Mode verbeux' },
    ],
    examples: [
      {
        code: 'mv ancien-nom.txt nouveau-nom.txt',
        explanation: 'Renomme un fichier dans le répertoire actuel. Simple et efficace pour corriger un nom de fichier.'
      },
      {
        code: 'mv -i fichier.txt /autre/repertoire/',
        explanation: 'Déplace un fichier vers un autre emplacement avec confirmation si le fichier existe déjà. Le flag -i évite d\'écraser accidentellement.'
      },
      {
        code: 'mv *.pdf ~/Documents/',
        explanation: 'Déplace tous les PDF du répertoire actuel vers Documents. Idéal pour organiser rapidement des fichiers.'
      },
    ]
  },
  {
    id: 7,
    category: 'files',
    command: 'chmod',
    description: 'Modifie les permissions d\'un fichier ou répertoire',
    keywords: ['permissions', 'droits', 'accès', 'chmod', 'sécurité', 'rights'],
    options: [
      { flag: '-R', description: 'Applique récursivement aux sous-répertoires' },
      { flag: 'u+x', description: 'Syntaxe symbolique: u(user), g(group), o(others), a(all)' },
      { flag: '755', description: 'Syntaxe octale: rwxr-xr-x' },
    ],
    examples: [
      {
        code: 'chmod +x script.sh',
        explanation: 'Rend un script exécutable pour tout le monde. Utilisez ceci AVANT de lancer un script que vous venez de télécharger ou créer.'
      },
      {
        code: 'chmod 600 ~/.ssh/id_rsa',
        explanation: 'Définit les permissions de clé SSH privée (lecture/écriture pour le propriétaire uniquement). OBLIGATOIRE pour la sécurité SSH - sinon la clé sera rejetée.'
      },
      {
        code: 'chmod -R 755 /var/www/html',
        explanation: 'Applique récursivement les permissions standard pour un serveur web (propriétaire: tout, autres: lecture+exécution). Utilisé lors du déploiement web.'
      },
    ]
  },
  {
    id: 8,
    category: 'files',
    command: 'chown',
    description: 'Change le propriétaire d\'un fichier ou répertoire',
    keywords: ['propriétaire', 'owner', 'changer', 'utilisateur', 'groupe', 'ownership'],
    options: [
      { flag: '-R', description: 'Applique récursivement' },
      { flag: 'user:group', description: 'Change propriétaire et groupe simultanément' },
    ],
    examples: [
      {
        code: 'sudo chown user:user fichier.txt',
        explanation: 'Change le propriétaire et le groupe d\'un fichier. Nécessite sudo car seul root peut changer le propriétaire. Utilisez QUAND vous devez donner la propriété à un utilisateur spécifique.'
      },
      {
        code: 'sudo chown -R www-data:www-data /var/www/html',
        explanation: 'Donne récursivement la propriété au serveur web Apache/Nginx. ESSENTIEL après avoir copié des fichiers web pour qu\'ils soient accessibles par le serveur.'
      },
      {
        code: 'sudo chown $(whoami) fichier.txt',
        explanation: 'Récupère la propriété d\'un fichier pour vous-même. Pratique après avoir créé des fichiers en tant que root.'
      },
    ]
  },
  {
    id: 9,
    category: 'files',
    command: 'find',
    description: 'Recherche des fichiers dans une arborescence',
    keywords: ['rechercher', 'trouver', 'chercher', 'find', 'search', 'fichier', 'localiser'],
    options: [
      { flag: '-name', description: 'Recherche par nom (sensible à la casse)' },
      { flag: '-iname', description: 'Recherche par nom (insensible à la casse)' },
      { flag: '-type f/d', description: 'Filtre par type (f=fichier, d=répertoire)' },
      { flag: '-size', description: 'Recherche par taille' },
      { flag: '-mtime', description: 'Recherche par date de modification' },
    ],
    examples: [
      {
        code: 'find /home -name "*.conf"',
        explanation: 'Trouve tous les fichiers de configuration dans /home. Utilisez pour localiser rapidement des fichiers config éparpillés.'
      },
      {
        code: 'find /var/log -type f -mtime +30 -delete',
        explanation: 'Trouve et supprime les fichiers de log de plus de 30 jours. ATTENTION: Testez d\'abord sans -delete! Utilisé pour nettoyer automatiquement les vieux logs.'
      },
      {
        code: 'find . -name "*.tmp" -size +100M',
        explanation: 'Trouve les fichiers temporaires de plus de 100Mo dans le répertoire actuel. Idéal pour identifier les fichiers qui consomment de l\'espace disque.'
      },
    ]
  },
  {
    id: 10,
    category: 'files',
    command: 'grep',
    description: 'Recherche un motif dans des fichiers',
    keywords: ['rechercher', 'chercher', 'texte', 'contenu', 'pattern', 'search', 'find'],
    options: [
      { flag: '-r', description: 'Recherche récursive dans les sous-répertoires' },
      { flag: '-i', description: 'Insensible à la casse' },
      { flag: '-n', description: 'Affiche les numéros de ligne' },
      { flag: '-v', description: 'Inverse la recherche (lignes ne contenant PAS le motif)' },
      { flag: '-c', description: 'Compte le nombre d\'occurrences' },
    ],
    examples: [
      {
        code: 'grep -rn "error" /var/log/',
        explanation: 'Recherche récursivement le mot "error" dans tous les logs avec numéros de ligne. ESSENTIEL pour le dépannage - permet de localiser rapidement les erreurs.'
      },
      {
        code: 'grep -i "failed" /var/log/secure',
        explanation: 'Recherche "failed" (insensible à la casse) dans le log de sécurité. Utilisez pour détecter les tentatives de connexion échouées.'
      },
      {
        code: 'ps aux | grep nginx',
        explanation: 'Filtre la sortie de ps pour ne montrer que les processus nginx. Combinaison pipe+grep très courante pour filtrer des sorties volumineuses.'
      },
    ]
  },
  {
    id: 11,
    category: 'files',
    command: 'cat',
    description: 'Affiche le contenu d\'un fichier',
    keywords: ['afficher', 'voir', 'lire', 'contenu', 'fichier', 'display', 'show', 'read'],
    options: [
      { flag: '-n', description: 'Affiche les numéros de ligne' },
      { flag: '-A', description: 'Affiche tous les caractères spéciaux' },
    ],
    examples: [
      {
        code: 'cat /etc/fedora-release',
        explanation: 'Affiche la version de Fedora. Commande rapide pour vérifier quelle version du système vous utilisez.'
      },
      {
        code: 'cat -n script.sh',
        explanation: 'Affiche un script avec numéros de ligne. Pratique pour référencer des lignes spécifiques lors de discussions ou débogage.'
      },
      {
        code: 'cat fichier1.txt fichier2.txt > combined.txt',
        explanation: 'Concatène plusieurs fichiers en un seul. Le nom "cat" vient de "concatenate" - c\'est son usage premier.'
      },
    ]
  },
  {
    id: 12,
    category: 'files',
    command: 'touch',
    description: 'Crée un fichier vide ou met à jour l\'horodatage',
    keywords: ['créer', 'fichier', 'vide', 'nouveau', 'timestamp', 'create'],
    options: [
      { flag: '-t', description: 'Définit une date/heure spécifique' },
      { flag: '-c', description: 'Ne crée pas le fichier s\'il n\'existe pas' },
    ],
    examples: [
      {
        code: 'touch nouveau-fichier.txt',
        explanation: 'Crée un fichier vide. Méthode la plus rapide pour créer un nouveau fichier avant de l\'éditer.'
      },
      {
        code: 'touch fichier1.txt fichier2.txt fichier3.txt',
        explanation: 'Crée plusieurs fichiers vides en une seule commande. Gain de temps lors de l\'initialisation de projet.'
      },
    ]
  },
  {
    id: 13,
    category: 'packages',
    command: 'dnf search',
    description: 'Recherche un paquet dans les dépôts Fedora',
    keywords: ['dnf', 'paquet', 'package', 'rechercher', 'search', 'fedora'],
    options: [
      { flag: '--all', description: 'Recherche plus large sur les noms et descriptions' },
    ],
    examples: [
      { code: 'dnf search nginx', explanation: 'Recherche les paquets liés à Nginx disponibles dans les dépôts configurés.' },
    ]
  },
  {
    id: 14,
    category: 'packages',
    command: 'dnf install',
    description: 'Installe un ou plusieurs paquets',
    keywords: ['installer', 'install', 'dnf', 'package', 'paquet'],
    options: [
      { flag: '-y', description: 'Répond automatiquement oui aux confirmations' },
    ],
    examples: [
      { code: 'sudo dnf install -y git', explanation: 'Installe Git sans demande de confirmation interactive.' },
    ]
  },
  {
    id: 15,
    category: 'packages',
    command: 'dnf remove',
    description: 'Désinstalle un paquet',
    keywords: ['remove', 'supprimer', 'désinstaller', 'dnf', 'package'],
    options: [
      { flag: '-y', description: 'Confirme automatiquement la suppression' },
    ],
    examples: [
      { code: 'sudo dnf remove -y nano', explanation: 'Supprime le paquet nano et ses dépendances inutilisées.' },
    ]
  },
  {
    id: 16,
    category: 'packages',
    command: 'dnf update',
    description: 'Met à jour les paquets installés',
    keywords: ['update', 'upgrade', 'mettre à jour', 'dnf', 'packages'],
    options: [
      { flag: '--refresh', description: 'Force le rafraîchissement des métadonnées' },
    ],
    examples: [
      { code: 'sudo dnf update --refresh', explanation: 'Met à jour le système avec des métadonnées fraîches.' },
    ]
  },
  {
    id: 17,
    category: 'packages',
    command: 'dnf list installed',
    description: 'Affiche tous les paquets déjà installés',
    keywords: ['list', 'installed', 'dnf', 'packages', 'inventaire'],
    options: [
      { flag: '', description: 'Peut être combiné avec grep pour filtrer les résultats' },
    ],
    examples: [
      { code: 'dnf list installed | grep python', explanation: 'Filtre les paquets installés contenant python.' },
    ]
  },
  {
    id: 18,
    category: 'packages',
    command: 'dnf info',
    description: 'Affiche les informations détaillées d\'un paquet',
    keywords: ['info', 'dnf', 'paquet', 'version', 'détails'],
    options: [
      { flag: '', description: 'Prend le nom du paquet en argument' },
    ],
    examples: [
      { code: 'dnf info curl', explanation: 'Affiche version, dépôt et description du paquet curl.' },
    ]
  },
  {
    id: 19,
    category: 'packages',
    command: 'rpm -qa',
    description: 'Liste tous les paquets RPM installés',
    keywords: ['rpm', 'list', 'installed', 'packages', 'qa'],
    options: [
      { flag: '| grep', description: 'Filtre la sortie selon un mot-clé' },
    ],
    examples: [
      { code: 'rpm -qa | grep kernel', explanation: 'Liste les paquets noyau actuellement installés.' },
    ]
  },
  {
    id: 20,
    category: 'packages',
    command: 'rpm -qi',
    description: 'Affiche les détails d\'un paquet RPM installé',
    keywords: ['rpm', 'info', 'package', 'installed', 'details'],
    options: [
      { flag: '', description: 'Requiert le nom exact du paquet' },
    ],
    examples: [
      { code: 'rpm -qi bash', explanation: 'Affiche version, mainteneur et résumé du paquet bash.' },
    ]
  },
  {
    id: 21,
    category: 'processes',
    command: 'ps aux',
    description: 'Affiche tous les processus en cours',
    keywords: ['process', 'ps', 'liste', 'running', 'processus'],
    options: [
      { flag: '| grep', description: 'Filtre sur un nom de processus' },
    ],
    examples: [
      { code: 'ps aux | grep sshd', explanation: 'Vérifie si le service sshd tourne et identifie son PID.' },
    ]
  },
  {
    id: 22,
    category: 'processes',
    command: 'top',
    description: 'Surveille les processus en temps réel',
    keywords: ['top', 'monitoring', 'cpu', 'memory', 'processus'],
    options: [
      { flag: '-u', description: 'Filtre par utilisateur' },
    ],
    examples: [
      { code: 'top -u alain', explanation: 'Affiche les processus actifs de l\'utilisateur alain.' },
    ]
  },
  {
    id: 23,
    category: 'processes',
    command: 'htop',
    description: 'Moniteur interactif des processus',
    keywords: ['htop', 'monitoring', 'interactive', 'process'],
    options: [
      { flag: '', description: 'Nécessite le paquet htop installé' },
    ],
    examples: [
      { code: 'htop', explanation: 'Lance une vue interactive colorée de l\'activité système.' },
    ]
  },
  {
    id: 24,
    category: 'processes',
    command: 'kill',
    description: 'Envoie un signal à un processus',
    keywords: ['kill', 'arrêter', 'signal', 'pid', 'process'],
    options: [
      { flag: '-9', description: 'Forcer l\'arrêt immédiat (SIGKILL)' },
    ],
    examples: [
      { code: 'kill -9 1234', explanation: 'Force l\'arrêt du processus ayant le PID 1234.' },
    ]
  },
  {
    id: 25,
    category: 'processes',
    command: 'pkill',
    description: 'Tue des processus par nom',
    keywords: ['pkill', 'kill', 'nom', 'process', 'arrêter'],
    options: [
      { flag: '-f', description: 'Recherche sur la ligne de commande complète' },
    ],
    examples: [
      { code: 'pkill -f node', explanation: 'Arrête tous les processus Node.js correspondant au motif.' },
    ]
  },
  {
    id: 26,
    category: 'processes',
    command: 'pgrep',
    description: 'Trouve les PID d\'un processus par nom',
    keywords: ['pgrep', 'pid', 'trouver', 'process', 'nom'],
    options: [
      { flag: '-a', description: 'Affiche aussi la commande complète' },
    ],
    examples: [
      { code: 'pgrep -a nginx', explanation: 'Liste les PID et commandes des processus nginx.' },
    ]
  },
  {
    id: 27,
    category: 'processes',
    command: 'nice',
    description: 'Lance un processus avec une priorité CPU donnée',
    keywords: ['nice', 'priorité', 'cpu', 'process', 'scheduling'],
    options: [
      { flag: '-n', description: 'Définit la valeur de niceness' },
    ],
    examples: [
      { code: 'nice -n 10 tar -czf backup.tar.gz /data', explanation: 'Lance une compression en priorité basse pour limiter l\'impact.' },
    ]
  },
  {
    id: 28,
    category: 'processes',
    command: 'renice',
    description: 'Modifie la priorité d\'un processus existant',
    keywords: ['renice', 'priorité', 'pid', 'process'],
    options: [
      { flag: '-n', description: 'Nouvelle valeur de niceness' },
    ],
    examples: [
      { code: 'sudo renice -n -5 -p 1234', explanation: 'Augmente la priorité CPU du PID 1234.' },
    ]
  },
  {
    id: 29,
    category: 'network',
    command: 'ip a',
    description: 'Affiche les interfaces et adresses IP',
    keywords: ['ip', 'address', 'interface', 'réseau', 'network'],
    options: [
      { flag: 'show', description: 'Sous-commande explicite pour affichage' },
    ],
    examples: [
      { code: 'ip a', explanation: 'Affiche toutes les interfaces réseau et leurs adresses.' },
    ]
  },
  {
    id: 30,
    category: 'network',
    command: 'ip route',
    description: 'Affiche la table de routage',
    keywords: ['route', 'gateway', 'ip', 'network', 'routing'],
    options: [
      { flag: '', description: 'Montre la route par défaut et les réseaux connus' },
    ],
    examples: [
      { code: 'ip route', explanation: 'Vérifie la passerelle par défaut et les routes actives.' },
    ]
  },
  {
    id: 31,
    category: 'network',
    command: 'ping',
    description: 'Teste la connectivité vers un hôte',
    keywords: ['ping', 'réseau', 'network', 'connectivité', 'latence'],
    options: [
      { flag: '-c', description: 'Nombre de paquets à envoyer' },
    ],
    examples: [
      { code: 'ping -c 4 8.8.8.8', explanation: 'Envoie 4 paquets ICMP pour tester Internet.' },
    ]
  },
  {
    id: 32,
    category: 'network',
    command: 'curl',
    description: 'Effectue des requêtes HTTP/HTTPS',
    keywords: ['curl', 'http', 'api', 'download', 'web'],
    options: [
      { flag: '-I', description: 'Affiche uniquement les en-têtes HTTP' },
    ],
    examples: [
      { code: 'curl -I https://example.com', explanation: 'Vérifie rapidement la réponse HTTP d\'un site.' },
    ]
  },
  {
    id: 33,
    category: 'network',
    command: 'wget',
    description: 'Télécharge des fichiers via HTTP/HTTPS/FTP',
    keywords: ['wget', 'download', 'télécharger', 'fichier', 'web'],
    options: [
      { flag: '-O', description: 'Définit le nom du fichier de sortie' },
    ],
    examples: [
      { code: 'wget -O image.iso https://example.com/image.iso', explanation: 'Télécharge un fichier en forçant son nom local.' },
    ]
  },
  {
    id: 34,
    category: 'network',
    command: 'ss -tulpen',
    description: 'Affiche les sockets réseau ouverts',
    keywords: ['ss', 'ports', 'listen', 'socket', 'network'],
    options: [
      { flag: '-tulpen', description: 'TCP/UDP en écoute avec PID et infos étendues' },
    ],
    examples: [
      { code: 'sudo ss -tulpen | grep :80', explanation: 'Vérifie quel processus écoute sur le port 80.' },
    ]
  },
  {
    id: 35,
    category: 'network',
    command: 'nmcli',
    description: 'Gère NetworkManager en ligne de commande',
    keywords: ['nmcli', 'networkmanager', 'wifi', 'connexion', 'réseau'],
    options: [
      { flag: 'device status', description: 'Affiche l\'état des interfaces' },
    ],
    examples: [
      { code: 'nmcli device status', explanation: 'Montre les interfaces et leur état de connexion.' },
    ]
  },
  {
    id: 36,
    category: 'users',
    command: 'whoami',
    description: 'Affiche l\'utilisateur courant',
    keywords: ['user', 'utilisateur', 'whoami', 'identity'],
    options: [
      { flag: '', description: 'Aucune option nécessaire' },
    ],
    examples: [
      { code: 'whoami', explanation: 'Permet de confirmer rapidement l\'identité utilisée dans le shell.' },
    ]
  },
  {
    id: 37,
    category: 'users',
    command: 'id',
    description: 'Affiche UID, GID et groupes',
    keywords: ['id', 'uid', 'gid', 'groupes', 'utilisateur'],
    options: [
      { flag: '-nG', description: 'Affiche uniquement les noms de groupes' },
    ],
    examples: [
      { code: 'id -nG', explanation: 'Liste les groupes dont fait partie l\'utilisateur courant.' },
    ]
  },
  {
    id: 38,
    category: 'users',
    command: 'useradd',
    description: 'Crée un nouvel utilisateur',
    keywords: ['useradd', 'utilisateur', 'créer', 'admin'],
    options: [
      { flag: '-m', description: 'Crée aussi le répertoire home' },
    ],
    examples: [
      { code: 'sudo useradd -m devops', explanation: 'Crée l\'utilisateur devops avec un home dédié.' },
    ]
  },
  {
    id: 39,
    category: 'users',
    command: 'passwd',
    description: 'Change le mot de passe d\'un utilisateur',
    keywords: ['passwd', 'mot de passe', 'password', 'user'],
    options: [
      { flag: '', description: 'Sans argument: mot de passe de l\'utilisateur courant' },
    ],
    examples: [
      { code: 'sudo passwd devops', explanation: 'Définit ou réinitialise le mot de passe de devops.' },
    ]
  },
  {
    id: 40,
    category: 'users',
    command: 'usermod',
    description: 'Modifie un compte utilisateur',
    keywords: ['usermod', 'user', 'groupe', 'modification', 'admin'],
    options: [
      { flag: '-aG', description: 'Ajoute l\'utilisateur à un groupe' },
    ],
    examples: [
      { code: 'sudo usermod -aG wheel devops', explanation: 'Ajoute devops au groupe wheel pour sudo.' },
    ]
  },
  {
    id: 41,
    category: 'users',
    command: 'groupadd',
    description: 'Crée un nouveau groupe',
    keywords: ['groupadd', 'groupe', 'créer', 'permissions'],
    options: [
      { flag: '', description: 'Prend le nom du groupe en argument' },
    ],
    examples: [
      { code: 'sudo groupadd appteam', explanation: 'Crée le groupe appteam pour gérer des permissions partagées.' },
    ]
  },
  {
    id: 42,
    category: 'users',
    command: 'groups',
    description: 'Affiche les groupes d\'un utilisateur',
    keywords: ['groups', 'groupes', 'utilisateur', 'permissions'],
    options: [
      { flag: '', description: 'Peut prendre un nom d\'utilisateur en argument' },
    ],
    examples: [
      { code: 'groups devops', explanation: 'Affiche tous les groupes associés à devops.' },
    ]
  },
  {
    id: 43,
    category: 'system',
    command: 'uname -a',
    description: 'Affiche les informations noyau du système',
    keywords: ['uname', 'kernel', 'système', 'version', 'linux'],
    options: [
      { flag: '-a', description: 'Affichage complet' },
    ],
    examples: [
      { code: 'uname -a', explanation: 'Donne version noyau, architecture et hôte.' },
    ]
  },
  {
    id: 44,
    category: 'system',
    command: 'hostnamectl',
    description: 'Affiche ou modifie le nom de machine',
    keywords: ['hostname', 'hostnamectl', 'machine', 'systemd'],
    options: [
      { flag: 'set-hostname', description: 'Change le nom d\'hôte' },
    ],
    examples: [
      { code: 'hostnamectl status', explanation: 'Affiche le hostname statique, transitoire et système.' },
    ]
  },
  {
    id: 45,
    category: 'system',
    command: 'timedatectl',
    description: 'Affiche et configure date/heure/fuseau',
    keywords: ['time', 'date', 'timezone', 'timedatectl', 'system'],
    options: [
      { flag: 'set-timezone', description: 'Définit le fuseau horaire' },
    ],
    examples: [
      { code: 'timedatectl status', explanation: 'Vérifie l\'heure système, NTP et fuseau horaire.' },
    ]
  },
  {
    id: 46,
    category: 'system',
    command: 'df -h',
    description: 'Affiche l\'utilisation des systèmes de fichiers',
    keywords: ['df', 'disque', 'espace', 'filesystem', 'storage'],
    options: [
      { flag: '-h', description: 'Format lisible humain' },
    ],
    examples: [
      { code: 'df -h', explanation: 'Affiche la capacité et l\'espace libre des partitions montées.' },
    ]
  },
  {
    id: 47,
    category: 'system',
    command: 'du -sh',
    description: 'Affiche la taille d\'un dossier',
    keywords: ['du', 'taille', 'dossier', 'disk usage', 'storage'],
    options: [
      { flag: '-sh', description: 'Résumé, format lisible humain' },
    ],
    examples: [
      { code: 'du -sh /var/log', explanation: 'Affiche la taille totale du dossier /var/log.' },
    ]
  },
  {
    id: 48,
    category: 'system',
    command: 'free -h',
    description: 'Affiche l\'utilisation de la mémoire',
    keywords: ['free', 'memory', 'ram', 'swap', 'système'],
    options: [
      { flag: '-h', description: 'Unités lisibles humain' },
    ],
    examples: [
      { code: 'free -h', explanation: 'Montre RAM et swap utilisées/disponibles.' },
    ]
  },
  {
    id: 49,
    category: 'system',
    command: 'journalctl',
    description: 'Consulte les logs systemd',
    keywords: ['journalctl', 'logs', 'systemd', 'erreurs', 'diagnostic'],
    options: [
      { flag: '-xe', description: 'Affiche les erreurs récentes avec contexte' },
    ],
    examples: [
      { code: 'journalctl -xe', explanation: 'Affiche les derniers événements système utiles au dépannage.' },
    ]
  },
  {
    id: 50,
    category: 'system',
    command: 'systemctl status',
    description: 'Vérifie l\'état d\'un service systemd',
    keywords: ['systemctl', 'service', 'status', 'systemd', 'daemon'],
    options: [
      { flag: '', description: 'Ajoute le nom du service en argument' },
    ],
    examples: [
      { code: 'systemctl status nginx', explanation: 'Affiche l\'état et les derniers logs du service nginx.' },
    ]
  },
  {
    id: 51,
    category: 'system',
    command: 'systemctl restart',
    description: 'Redémarre un service systemd',
    keywords: ['systemctl', 'restart', 'service', 'systemd'],
    options: [
      { flag: '', description: 'Nécessite généralement sudo' },
    ],
    examples: [
      { code: 'sudo systemctl restart sshd', explanation: 'Redémarre le service SSH pour appliquer une configuration.' },
    ]
  },
  {
    id: 52,
    category: 'system',
    command: 'systemctl enable',
    description: 'Active un service au démarrage',
    keywords: ['systemctl', 'enable', 'boot', 'startup', 'service'],
    options: [
      { flag: '--now', description: 'Active et démarre immédiatement le service' },
    ],
    examples: [
      { code: 'sudo systemctl enable --now nginx', explanation: 'Active nginx au boot et le démarre tout de suite.' },
    ]
  },
  {
    id: 53,
    category: 'archives',
    command: 'tar -czf',
    description: 'Crée une archive compressée gzip',
    keywords: ['tar', 'archive', 'compression', 'gzip', 'backup'],
    options: [
      { flag: '-czf', description: 'Créer archive gzip et nommer le fichier de sortie' },
    ],
    examples: [
      { code: 'tar -czf sauvegarde.tar.gz /etc', explanation: 'Archive et compresse le dossier /etc.' },
    ]
  },
  {
    id: 54,
    category: 'archives',
    command: 'tar -xzf',
    description: 'Extrait une archive gzip',
    keywords: ['tar', 'extract', 'archive', 'gzip', 'décompresser'],
    options: [
      { flag: '-C', description: 'Choisit le dossier de destination' },
    ],
    examples: [
      { code: 'tar -xzf sauvegarde.tar.gz -C /tmp', explanation: 'Extrait le contenu de l\'archive dans /tmp.' },
    ]
  },
  {
    id: 55,
    category: 'archives',
    command: 'zip',
    description: 'Crée une archive ZIP',
    keywords: ['zip', 'archive', 'compress', 'compression'],
    options: [
      { flag: '-r', description: 'Ajoute récursivement les sous-dossiers' },
    ],
    examples: [
      { code: 'zip -r projet.zip projet/', explanation: 'Crée une archive ZIP complète d\'un dossier.' },
    ]
  },
  {
    id: 56,
    category: 'archives',
    command: 'unzip',
    description: 'Extrait une archive ZIP',
    keywords: ['unzip', 'zip', 'extract', 'décompression'],
    options: [
      { flag: '-d', description: 'Dossier de destination' },
    ],
    examples: [
      { code: 'unzip projet.zip -d /tmp/projet', explanation: 'Décompresse le ZIP dans un dossier spécifique.' },
    ]
  },
  {
    id: 57,
    category: 'archives',
    command: 'gzip',
    description: 'Compresse un fichier avec gzip',
    keywords: ['gzip', 'compression', 'fichier', 'archive'],
    options: [
      { flag: '-k', description: 'Conserve le fichier source' },
    ],
    examples: [
      { code: 'gzip -k gros-fichier.log', explanation: 'Compresse le fichier tout en gardant l\'original.' },
    ]
  },
  {
    id: 58,
    category: 'archives',
    command: 'gunzip',
    description: 'Décompresse un fichier .gz',
    keywords: ['gunzip', 'gzip', 'décompression', 'extract'],
    options: [
      { flag: '-k', description: 'Conserve le fichier compressé original' },
    ],
    examples: [
      { code: 'gunzip -k gros-fichier.log.gz', explanation: 'Décompresse un .gz sans supprimer l\'archive source.' },
    ]
  },
  {
    id: 59,
    category: 'files',
    command: 'sed',
    description: 'Transforme du texte en flux ou dans un fichier',
    keywords: ['sed', 'texte', 'remplacer', 'édition', 'pipeline'],
    options: [
      { flag: '-i', description: 'Modifie le fichier directement en place' },
    ],
    examples: [
      { code: "sed 's/http:/https:/g' config.txt", explanation: 'Remplace toutes les occurrences de http: par https: dans la sortie.' },
      { code: "sed -i 's/DEBUG=false/DEBUG=true/g' .env", explanation: 'Met à jour la variable directement dans le fichier .env.' },
    ]
  },
  {
    id: 60,
    category: 'files',
    command: 'awk',
    description: 'Extrait et formate des colonnes de texte',
    keywords: ['awk', 'colonnes', 'texte', 'analyse', 'logs'],
    options: [
      { flag: '{print $N}', description: 'Affiche la colonne N d\'une ligne' },
    ],
    examples: [
      { code: "df -h | awk '{print $1, $5}'", explanation: 'Affiche le système de fichiers et le pourcentage d\'utilisation.' },
      { code: "ps aux | awk '{print $1, $2, $11}'", explanation: 'Affiche utilisateur, PID et commande de chaque processus.' },
    ]
  },
  {
    id: 61,
    category: 'files',
    command: 'cut',
    description: 'Découpe des champs ou des caractères dans du texte',
    keywords: ['cut', 'champs', 'csv', 'texte', 'parsing'],
    options: [
      { flag: '-d', description: 'Définit le séparateur de champs' },
      { flag: '-f', description: 'Sélectionne les champs à afficher' },
    ],
    examples: [
      { code: "cut -d: -f1 /etc/passwd", explanation: 'Affiche la première colonne (nom utilisateur) du fichier passwd.' },
    ]
  },
  {
    id: 62,
    category: 'files',
    command: 'sort',
    description: 'Trie des lignes de texte',
    keywords: ['sort', 'tri', 'ordre', 'texte', 'fichier'],
    options: [
      { flag: '-n', description: 'Tri numérique' },
      { flag: '-r', description: 'Tri inversé' },
    ],
    examples: [
      { code: 'sort -nr notes.txt', explanation: 'Trie numériquement du plus grand au plus petit.' },
    ]
  },
  {
    id: 63,
    category: 'files',
    command: 'uniq',
    description: 'Filtre ou compte les doublons de lignes adjacentes',
    keywords: ['uniq', 'doublons', 'comptage', 'texte', 'logs'],
    options: [
      { flag: '-c', description: 'Compte le nombre d\'occurrences' },
    ],
    examples: [
      { code: 'sort access.log | uniq -c | sort -nr', explanation: 'Compte les lignes identiques et affiche les plus fréquentes.' },
    ]
  },
  {
    id: 64,
    category: 'files',
    command: 'xargs',
    description: 'Construit des commandes à partir d\'une entrée standard',
    keywords: ['xargs', 'pipeline', 'batch', 'commande', 'automation'],
    options: [
      { flag: '-I {}', description: 'Place l\'élément courant à l\'emplacement {}' },
    ],
    examples: [
      { code: "find . -name '*.log' | xargs rm -f", explanation: 'Supprime les fichiers trouvés via pipeline.' },
      { code: "cat hosts.txt | xargs -I {} ping -c 1 {}", explanation: 'Lance un ping sur chaque hôte listé dans le fichier.' },
    ]
  },
  {
    id: 65,
    category: 'files',
    command: 'tee',
    description: 'Écrit la sortie à la fois à l\'écran et dans un fichier',
    keywords: ['tee', 'stdout', 'log', 'pipeline', 'fichier'],
    options: [
      { flag: '-a', description: 'Ajoute au fichier sans l\'écraser' },
    ],
    examples: [
      { code: 'journalctl -u nginx | tee logs-nginx.txt', explanation: 'Affiche les logs et les enregistre en même temps dans un fichier.' },
    ]
  },
  {
    id: 66,
    category: 'files',
    command: 'rsync',
    description: 'Synchronise efficacement fichiers et répertoires',
    keywords: ['rsync', 'sync', 'backup', 'copie', 'répertoire'],
    options: [
      { flag: '-avh', description: 'Mode archive, verbeux, tailles lisibles' },
      { flag: '--delete', description: 'Supprime à destination les fichiers absents à la source' },
    ],
    examples: [
      { code: 'rsync -avh ~/Documents/ /mnt/backup/Documents/', explanation: 'Synchronise un dossier local vers un backup.' },
    ]
  },
  {
    id: 67,
    category: 'network',
    command: 'ssh',
    description: 'Ouvre une session distante sécurisée',
    keywords: ['ssh', 'remote', 'connexion', 'serveur', 'sécurisé'],
    options: [
      { flag: '-i', description: 'Utilise une clé privée spécifique' },
      { flag: '-p', description: 'Spécifie un port SSH personnalisé' },
    ],
    examples: [
      { code: 'ssh -i ~/.ssh/id_ed25519 user@192.168.1.10', explanation: 'Connexion à un hôte distant avec une clé privée dédiée.' },
    ]
  },
  {
    id: 68,
    category: 'network',
    command: 'scp',
    description: 'Copie des fichiers via SSH',
    keywords: ['scp', 'copie', 'ssh', 'transfert', 'remote'],
    options: [
      { flag: '-r', description: 'Copie récursive des dossiers' },
      { flag: '-P', description: 'Port SSH personnalisé' },
    ],
    examples: [
      { code: 'scp -r ./site user@server:/var/www/html', explanation: 'Transfère un dossier local vers un serveur distant.' },
    ]
  },
  {
    id: 69,
    category: 'network',
    command: 'dig',
    description: 'Interroge DNS pour diagnostiquer la résolution de noms',
    keywords: ['dig', 'dns', 'résolution', 'network', 'diagnostic'],
    options: [
      { flag: '+short', description: 'Affiche une sortie courte' },
    ],
    examples: [
      { code: 'dig +short github.com', explanation: 'Retourne rapidement les adresses IP associées à un domaine.' },
    ]
  },
  {
    id: 70,
    category: 'network',
    command: 'traceroute',
    description: 'Trace le chemin réseau jusqu\'à une destination',
    keywords: ['traceroute', 'réseau', 'latence', 'hops', 'diagnostic'],
    options: [
      { flag: '-n', description: 'Évite la résolution DNS pour accélérer la sortie' },
    ],
    examples: [
      { code: 'traceroute -n 8.8.8.8', explanation: 'Affiche les routeurs traversés jusqu\'à la destination.' },
    ]
  },
  {
    id: 71,
    category: 'network',
    command: 'nc',
    description: 'Teste des ports et établit des connexions TCP/UDP',
    keywords: ['nc', 'netcat', 'port', 'tcp', 'udp', 'test'],
    options: [
      { flag: '-zv', description: 'Mode scan sans envoi de données avec sortie verbeuse' },
    ],
    examples: [
      { code: 'nc -zv 127.0.0.1 22', explanation: 'Vérifie rapidement si le port 22 est ouvert.' },
    ]
  },
  {
    id: 72,
    category: 'system',
    command: 'firewall-cmd',
    description: 'Gère le pare-feu firewalld sous Fedora',
    keywords: ['firewall-cmd', 'firewalld', 'pare-feu', 'ports', 'sécurité'],
    options: [
      { flag: '--add-service', description: 'Autorise un service dans la zone active' },
      { flag: '--permanent', description: 'Rend la règle persistante après redémarrage' },
    ],
    examples: [
      { code: 'sudo firewall-cmd --add-service=http --permanent && sudo firewall-cmd --reload', explanation: 'Ouvre HTTP de façon persistante puis recharge la configuration.' },
    ]
  },
  {
    id: 73,
    category: 'system',
    command: 'sestatus',
    description: 'Affiche l\'état de SELinux',
    keywords: ['sestatus', 'selinux', 'sécurité', 'fedora', 'policy'],
    options: [
      { flag: '', description: 'Commande sans option pour un état global' },
    ],
    examples: [
      { code: 'sestatus', explanation: 'Vérifie rapidement si SELinux est actif et en mode enforcing/permissive.' },
    ]
  },
];
