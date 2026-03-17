//npm install leaflet react-leaflet react-router-dom
/*
Pontos Importantes para o Funcionamento:

CSS do Leaflet: É obrigatório importar o leaflet.css (conforme mostrado no código) para que o mapa não apareça quebrado.
Configuração de Rotas: No seu arquivo App.js, utilize o BrowserRouter para ligar as duas páginas.
Customização: Você pode alterar o valor de radius no CircleMarker para tornar os círculos ainda maiores ou dinâmicos.
*/

// data/locations.js
export const hardRockLocations = [
  {
    id: "curitiba",
    name: "Hard Rock Cafe Curitiba",
    city: "Curitiba",
    neighborhood: "Batel",
    lat: -25.4439,
    lng: -49.2816,
    funFact: "É a maior unidade da marca no Brasil e possui um layout circular único."
  },
  {
    id: "gramado",
    name: "Hard Rock Cafe Gramado",
    city: "Gramado",
    neighborhood: "Planalto",
    lat: -29.3797,
    lng: -50.8747,
    funFact: "O prédio foi construído com pedras e madeira, seguindo a arquitetura típica da Serra Gaúcha."
  },
  {
    id: "fortaleza",
    name: "Hard Rock Cafe Fortaleza",
    city: "Fortaleza",
    neighborhood: "Papicu",
    lat: -3.7419,
    lng: -38.4737,
    funFact: "Localizado no Shopping RioMar, é um dos principais pontos de rock do Nordeste."
  },
  {
    id: "ribeirao-preto",
    name: "Hard Rock Cafe Ribeirão Preto",
    city: "Ribeirão Preto",
    neighborhood: "Santa Cruz",
    lat: -21.2052,
    lng: -47.7985,
    funFact: "Fica dentro da Arena Nicnet (Estádio do Botafogo-SP)."
  }
];
