import {dados} from './db.js';
import {montarLayout,cardProduto,esc,perks} from './ui.js';
async function iniciar(){
 const {cfg,categorias}=await montarLayout({ativo:'home'});
 document.querySelector('#banner').src=cfg.heroImagem||'img/banner.jpeg';
 for(const [id,key] of [['heroTitulo','heroTitulo'],['heroTexto','heroTexto'],['heroKicker','slogan']]) document.getElementById(id).textContent=cfg[key]||'';
 const descriptions={'muay-thai':'Luvas · Shorts · Caneleiras','fightwear':'Camisetas · Regatas · Shorts','fitness':'Leggings · Tops · Conjuntos','acessorios':'Bolsas · Bandagens · Protetores'};
 document.querySelector('#destaques').innerHTML=categorias.map((c,i)=>`<a class="category-tile" href="categoria.html?c=${esc(c.slug)}"><span class="category-art category-art--${i%4}"></span><div><h2>${esc(c.nome)}</h2><p>${esc(descriptions[c.slug]||'Explore a coleção')}</p><span class="category-arrow">→</span></div></a>`).join('');
 const {itens}=await dados.produtos({destaque:true,limite:5});
 document.querySelector('#produtos').innerHTML=itens.length?itens.map(p=>cardProduto(p,cfg)).join(''):'<p>Novos produtos em breve. Confira nosso catálogo.</p>';
 document.querySelector('#faixaPerks').outerHTML=perks;
}
iniciar().catch(e=>{document.querySelector('#produtos').textContent='Não foi possível carregar a loja. Tente novamente.';console.error(e)});
