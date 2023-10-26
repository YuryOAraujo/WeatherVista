# Weather Vista - <a href="https://yuryoaraujo.github.io/WeatherVista/index.html">Acesse aqui!</a>

Este é um webapp responsivo que permite aos usuários consultar informações de previsão do tempo para cidades de sua escolha, utilizando a API do OpenWeatherMap. O projeto inclui uma série de recursos para fornecer informações detalhadas e uma experiência de usuário agradável. Abaixo, você encontrará instruções sobre como utilizar o aplicativo, bem como detalhes sobre sua implementação.

## Funcionalidades

- **Consulta de Tempo**: Os usuários podem inserir o nome de uma cidade e clicar no botão de pesquisa ou pressionar a tecla Enter para buscar informações de previsão do tempo para a cidade escolhida.

- **Opção de Unidade de Temperatura**: Os usuários podem alternar entre a exibição de temperaturas em graus Celsius e Kelvin, com um clique nos botões correspondentes.

- **Informações de Tempo**: O aplicativo exibe informações detalhadas, incluindo a temperatura atual, temperatura máxima e mínima, descrição textual da condição climática, uma imagem ilustrativa da condição do tempo, horário do nascer e pôr do sol, e a velocidade do vento.

- **Cores de Fundo Dinâmicas**: A cor de fundo da página muda de acordo com a temperatura atual, tornando a experiência mais imersiva e informativa.

- **Fontes e Ícones Personalizados**: O aplicativo utiliza uma fonte tipográfica externa do Google Fonts e ícones do Bootstrap Icons.

## Como Utilizar

1. **Inserir a Cidade**: Digite o nome da cidade desejada no campo de texto "Cidade".

2. **Pesquisar o Tempo**: Clique no ícone de lupa ou pressione a tecla Enter para buscar informações do tempo para a cidade especificada.

3. **Alternar Unidades**: Use os botões "Celsius" e "Kelvin" para alternar entre as unidades de temperatura.

## Implementação Técnica

### Tecnologias Utilizadas

- HTML5 e CSS3
- Bootstrap 4 para o layout e componentes
- JavaScript (jQuery) para interação com a API do OpenWeatherMap
- API do OpenWeatherMap para obter dados de previsão do tempo
- Google Fonts para a fonte tipográfica
- Bootstrap Icons para ícones

### Personalização de Cores

A cor de fundo da página é atualizada de acordo com a temperatura atual. Quanto mais quente, mais avermelhada a cor de fundo; quanto mais frio, mais azul. Foram utilizadas 10 variações de cores para representar diferentes temperaturas.

### Consulta à API do OpenWeatherMap

- A API do OpenWeatherMap é utilizada para obter informações de previsão do tempo com base na cidade inserida pelo usuário.
- Os dados da API são buscados e exibidos no aplicativo, incluindo temperatura, descrição da condição climática, imagem ilustrativa, horário do nascer e pôr do sol, e velocidade do vento.

### Fonte Tipográfica e Ícones

- O aplicativo utiliza a fonte tipográfica "Roboto" do Google Fonts.
- Ícones do Bootstrap Icons são usados para representar a barra de pesquisa, o nascer do sol e a velocidade do vento.

## Iniciando o Aplicativo

Para usar o aplicativo, você pode simplesmente abrir o arquivo `index.html` em seu navegador. Certifique-se de que você tenha uma conexão com a internet para permitir a busca de dados de previsão do tempo da API do OpenWeatherMap.

## Exemplos de Utilização
![image](https://github.com/YuryOAraujo/WeatherVista/assets/127779626/45417034-2219-4702-be14-10525c073494)

![image](https://github.com/YuryOAraujo/WeatherVista/assets/127779626/1e9c2047-2ec1-444d-8403-82b7bca5b839)

![image](https://github.com/YuryOAraujo/WeatherVista/assets/127779626/5d191448-3763-41c4-b629-852ae8252f3f)

![image](https://github.com/YuryOAraujo/WeatherVista/assets/127779626/cc93b216-499f-4bbf-b3bd-6a57d1b97ca9)





