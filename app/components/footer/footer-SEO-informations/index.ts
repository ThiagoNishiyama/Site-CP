export const footersInformations = {
  infos: {
    address: 'Rua 0, nº 0 - Centro - São Paulo - SP - CEP: 00000-000 -',
    copyright: 'Todos os direitos reservados',
    main: [
      {
        label: 'Consignado',
        links: [
          {
            label: 'Consignado Público',
            link: '/produto/consignado/consignado-publico',
          },
          {
            label: 'Consignado Federal',
            link: '/produto/consignado/consignado-federal',
          },
          {
            label: 'Consignado Privado',
            link: '/produto/consignado/consignado-privado',
          },
          {
            label: 'Consignado INSS',
            link: '/produto/consignado/consignado-inss',
          },
        ],
      },
      {
        label: 'Imobiliário',
        links: [
          {
            label: 'Financiamento de Imóvel',
            link: '/produto/imobiliario/financiamento-imovel',
          },
          {
            label: 'Home Equity/Crédito com garantia de Imóvel',
            link: '/produto/imobiliario/home-equity',
          },
        ],
      },
      {
        label: 'Cartões',
        links: [
          {
            label: 'Cartão Consignado',
            link: '/produto/cartao/cartao-consignado',
          },
          {
            label: 'Cartão Benefício Consignado',
            link: '/produto/cartao/cartao-beneficio-consignado',
          },
          {
            label: 'Cartão Credcesta',
            link: '/produto/cartao/cartao-credcesta',
          },
        ],
      },
    ],
    secondary: [
      {
        label: 'Crédito',
        links: [
          {
            label: 'Crédito Pessoal',
            link: '/produto/credito/credito-pessoal',
          },
          {
            label: 'FGTS',
            link: '/produto/credito/fgts',
          },
          {
            label: 'Financiamento / Refinanciamento de Veículos',
            link: '/produto/credito/financiamento-refinanciamento-veiculos',
          },
        ],
      },
      {
        label: 'Consórcio/Seguros',
        links: [
          {
            label: 'Consórcio',
            link: '/produto/consorcio',
          },
          {
            label: 'Seguros CPCréditos',
            link: '/produto/seguros',
          },
        ],
      },
      {
        label: 'Institucional',
        links: [
          {
            label: 'Nossa História',
            link: '/sobre',
          },
          {
            label: 'Nossa Equipe',
            link: '/equipe',
          },
          {
            label: 'Trabalhe Conosco',
            link: import.meta.env.VITE_LINKEDIN,
          },
          {
            label: 'Seja Parceiro',
            link: import.meta.env.VITE_LINKEDIN,
          },
          {
            label: 'Privacidade e Compliance',
            link: '/privacidade',
          },
        ],
      },
      {
        label: 'Escritórios',
        links: [
          {
            label: 'Nossos Escritórios',
            link: '/escritorios',
          },
          {
            label: 'Fale Conosco',
            link: import.meta.env.VITE_WHATSAPP,
          },
        ],
      },
    ],
  },
};
