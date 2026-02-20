# 📋 App do Tempo - Weather App

O App do Tempo é uma aplicação web moderna e intuitiva que permite aos usuários consultar informações meteorológicas precisas de qualquer cidade do mundo. Desenvolvido como parte do meu portfólio de desenvolvedor front-end, este projeto nasceu da necessidade de criar uma ferramenta prática e visualmente atraente para acesso rápido a dados climáticos.

Com uma interface limpa e responsiva, o aplicativo oferece não apenas a temperatura atual, mas também informações detalhadas como sensação térmica, umidade, velocidade do vento, pressão atmosférica, horários de nascer e pôr do sol, além de uma previsão estendida para os próximos 5 dias. O objetivo era proporcionar uma experiência completa e agradável para quem precisa de informações meteorológicas confiáveis no dia a dia.


## 🛠️ Tecnologias que Usei

### Frontend:

⚛️ React 18 - Biblioteca principal para construção da interface com componentes reutilizáveis

⚡ Vite 4 - Build tool extremamente rápida para desenvolvimento e otimização de produção

🎨 CSS3 Puro - Estilização componentizada com variáveis CSS para temas dinâmicos

🧭 Context API - Gerenciamento de estado global para o tema dark/light

🔌 Axios - Cliente HTTP para requisições à API do OpenWeatherMap

🖱️ Font Awesome - Biblioteca de ícones para melhor experiência visual

### Backend:

🟢 Node.js - Ambiente de execução JavaScript (apenas para desenvolvimento)

🚂 Express - Framework para servidor local de desenvolvimento

🗄️ LocalStorage API - Persistência de dados das buscas recentes no navegador

🔗 OpenWeatherMap API - API pública gratuita para dados meteorológicos

🔐 Variáveis de Ambiente - Proteção de chaves de API com arquivo .env

🔒 Vercel - Plataforma de deploy com suporte a variáveis de ambiente


## ✨ Recursos / O que o usuário pode fazer

✅ Busca por Cidade - Pesquise o clima atual de qualquer cidade do mundo
✅ Geolocalização Automática - Obtenha o clima da sua localização atual com um clique
✅ Previsão de 5 Dias - Visualize a previsão do tempo para os próximos dias
✅ Informações Detalhadas - Acesse dados como umidade, vento, pressão e sensação térmica
✅ Horários do Sol - Consulte os horários precisos de nascer e pôr do sol
✅ Tema Dark/Light - Alterne entre temas claro e escuro com persistência de preferência
✅ Histórico de Buscas - Acesse rapidamente cidades pesquisadas anteriormente
✅ Design Responsivo - Experiência otimizada em celulares, tablets e desktops
✅ Ícones Dinâmicos - Ícones que refletem as condições climáticas atuais
✅ Atualização em Tempo Real - Dados sempre atualizados via API


## 🔧 Processo / Como o construí

O desenvolvimento começou com a estruturação do projeto utilizando Vite + React, priorizando uma arquitetura limpa e componentizada. A primeira etapa foi configurar o consumo da API do OpenWeatherMap, criando serviços dedicados no diretório services para encapsular toda a lógica de requisições HTTP com Axios. Implementei tratamento de erros robusto e estados de loading para garantir uma experiência fluida mesmo em condições de rede adversas.

Um dos principais desafios foi gerenciar o estado global do tema dark/light. Optei por utilizar a Context API do React, que se mostrou perfeita para esse caso de uso simples, evitando a complexidade desnecessária de bibliotecas externas. A persistência do tema no localStorage foi implementada para lembrar a preferência do usuário em visitas futuras.

A interface foi cuidadosamente pensada para ser intuitiva. Organizei as informações em cards visuais, com hierarquia clara de informações: temperatura em destaque, detalhes em grid e previsão em carrossel horizontal. O maior desafio técnico foi garantir que todos os componentes CSS funcionassem harmoniosamente com o sistema de temas, utilizando variáveis CSS para todas as cores e estilos.

O deploy na Vercel apresentou desafios interessantes de permissão e configuração de variáveis de ambiente. Após alguns ajustes no vercel.json e na configuração do build, o projeto foi finalmente implantado com sucesso, com a API Key devidamente protegida.

## 📚 O que aprendi

Gerenciamento de Estado Global - Aprofundei meus conhecimentos na Context API do React, entendendo quando e como utilizá-la de forma eficiente sem cair em over-engineering
Consumo de APIs REST - Aprendi a lidar com requisições assíncronas, tratamento de erros e limites de taxa em APIs públicas
Sistemas de Tema com CSS Variables - Dominei a técnica de criar temas dinâmicos usando variáveis CSS, permitindo mudanças instantâneas sem re-renderização pesada
Persistência com LocalStorage - Implementei armazenamento local para preferências do usuário e histórico de buscas, melhorando a experiência
Geolocalização no Navegador - Utilizei a API de geolocalização do navegador para obter coordenadas do usuário de forma segura
Deploy e CI/CD - Aprendi na prática como configurar deploy contínuo na Vercel, incluindo variáveis de ambiente e solução de problemas de build
Segurança com Variáveis de Ambiente - Entendi a importância de nunca expor chaves de API no código fonte e como proteger informações sensíveis
Performance com Vite - Descobri como o Vite otimiza o bundle de produção e como interpretar métricas de build
UX em Aplicações Meteorológicas - Aprendi a organizar informações complexas de forma hierárquica e intuitiva para o usuário
Debugging Avançado - Desenvolvi habilidades para diagnosticar e resolver problemas de permissão e configuração em ambientes de deploy


## 🚀 Como ele pode ser melhorado

TypeScript - Migrar o código para TypeScript para maior segurança de tipos e melhor experiência de desenvolvimento
Testes Automatizados - Implementar testes unitários e de integração com Jest e Testing Library
Gráficos Climáticos - Adicionar gráficos interativos mostrando variação de temperatura ao longo do dia
PWA - Transformar em Progressive Web App para funcionamento offline e instalação no dispositivo
Múltiplas APIs - Adicionar fallback com APIs alternativas (WeatherAPI, MetaWeather) para redundância
Unidades de Medida - Permitir alternância entre Celsius e Fahrenheit
Mapa Interativo - Integrar mapa mostrando a localização da cidade consultada
Alertas Meteorológicos - Implementar notificações para condições climáticas extremas


## 💻 Como executar o projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta gratuita no OpenWeatherMap para obter uma API Key

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/devSelso/app-tempo
cd app-tempo

# Configure as variáveis de ambiente
.env

# Adicione no arquivo .env:
VITE_WEATHER_API_KEY=sua_chave_api_aqui

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
Como obter uma API Key
Acesse OpenWeatherMap

Crie uma conta gratuita

Vá para o dashboard e gere uma nova API Key

Copie a chave e cole no arquivo .env
```

📸 Visite

https://app-tempo-react.vercel.app/
