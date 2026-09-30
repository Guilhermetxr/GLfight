export const CATEGORIAS_DEMO = ["Muay Thai", "Fightwear", "Fitness", "Acessórios"].map((nome,i)=>({id:["muay-thai","fightwear","fitness","acessorios"][i],slug:["muay-thai","fightwear","fitness","acessorios"][i],nome,ordem:i,ativa:true,linha:i===2?"beauty":"looks"}));
export const PRODUTOS_DEMO = [
 ["Luva de Muay Thai GL Fight Premium",349.9,"muay-thai"],
 ["Short Muay Thai GL Fight Tradicional",159.9,"fightwear"],
 ["Caneleira Muay Thai GL Fight",189.9,"muay-thai"],
 ["Top Fitness GL Fight",99.9,"fitness"],
 ["Legging Fitness GL Fight",119.9,"fitness"]
 ].map(([nome,preco,categoria],i)=>({id:"demo-"+i,nome,preco,categoria,thumb:"img/reference.jpeg#p"+i,tamanhos:i===0?["10 oz","12 oz","14 oz"]:["P","M","G"],descricao:"Produto ilustrativo para apresentação da loja. Cadastre os produtos, fotos e valores reais pelo painel administrativo.",destaque:true,ativo:true,ordem:i}));
