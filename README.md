# GL Fight
Adaptação independente do catálogo amira-closet. HTML, CSS e JavaScript, Firestore e Firebase Authentication. Pedidos por WhatsApp; sem checkout ou processamento de pagamento.

## Abrir localmente
`npm run dev` e acesse http://localhost:5173.
Para prévia com produtos ilustrativos: http://localhost:5173/?demo=1. A prévia fica ativa nessa aba; use `?demo=0` para voltar ao Firebase. Login da prévia: qualquer e-mail válido e senha `glfight123`. Somente localhost aceita essa opção.

## Firebase
Configuração web do projeto glfight em js/config.js. Ative Firestore e Authentication por e-mail/senha no console. Cadastre o administrador no Authentication e crie o documento admins/UID no Firestore. Publique as regras e índices com `firebase deploy --only firestore --project glfight`. Não foi feita publicação automática.

O painel em /admin.html permite cadastrar produtos/categorias e alterar foto do banner, título, texto e quatro cores em Dados da loja. Imagens são comprimidas e armazenadas em documentos Firestore; banner limitado a 650 KB de dados codificados. Sem dependência do Storage. Informe também o WhatsApp com DDD.

O banco real inicia com seu conteúdo, sem inserir produtos demonstrativos automaticamente. As fotos dos produtos da demonstração são exibidas a partir da referência fornecida via enquadramento CSS e devem ser substituídas por fotos reais. Logo tipográfico provisório inspirado na referência. Foto original do banner preservada em img/banner.jpeg.

Para publicar no Firebase Hosting: `firebase deploy --only hosting --project glfight` depois de conferir regras, administrador, contatos e catálogo real.

## Validação realizada
Sintaxe de todos os módulos verificada. Navegação inicial e login demonstrativo verificados no navegador, assim como salvamento das cores. A leitura do projeto real respondeu `Missing or insufficient permissions`: publique firestore.rules e configure o administrador para liberar o uso real.
