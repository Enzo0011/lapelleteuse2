J'ai utilisé 3 Design Pattern :
Creation
Factory
Multiton

Le Design Pattern de Creation sert à créer tout simplement les machines avec leur type, on pourrait imaginer plusieurs caractéristiques comme un identifiant unique à la machine, ou un conducteur
mais dans ce cas on reste simple, mais on prévoit des améliorations.

Pour le Design Pattern Factory c'est la même chose, il peut être nécessaire dans le cadre d'améliorations, ici il sert à créer plusieurs type de machine
exemple : une Pelleteuse et un Tractopelle sont 2 machines différentes, donc pas la même Creation

Et enfin le Design Pattern Multiton permet de gérer les instances, ici on veut maximum 8 machines par box, un singleton n'est pas suffisant (1 instance pour lui) donc j'ai opté pour un Multiton
Il gère le Parc des machines en créer une nouvelle Box à chaque fois que ça dépasse 8 machines

On se retrouve avec une base de code très évolutive grace aux Design Pattern, cette base peut grandir, elle suivra toujours la même logique

Exemple d'un cas concret : un rouleau compresseur aura un attribut qu'une nacelle n'a pas par exemple, et dans ce cas le Factory et Creation seront très efficace pour différencier la cr"ation d'un rouleau compresseur à une nacelle
