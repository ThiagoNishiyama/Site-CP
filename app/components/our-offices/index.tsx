import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EscritoriosIcon } from '../ui/icons';

const OurOfficesSectionContent = {
  icon: <EscritoriosIcon className="size-12" fill="#393e91" />,
  title: {
    text: {
      'pt-br': 'Nossos escritórios',
    },
  },
  subtitle: {
    text: {
      'pt-br': 'Conheça nossos escritórios e saiba onde estamos localizados.',
    },
  },

  subContainer: {
    image: {
      src: 'https://www.bevioficial.com.br/image/molecules/card-page/image.png',
      alt: 'Imagem do nosso negócio',
    },
    title: {
      text: {
        'pt-br': 'Título do nosso negócio',
      },
    },
    subtitle: {
      text: {
        'pt-br':
          'lorem ipsum dolor sit amet, consectetur adipiscing elit essere do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    },
    cta: {
      text: {
        'pt-br': 'Saiba mais',
      },
    },
  },
};

const addresses = [
  {
    label: 'Santo Andre/SP',
    key: 'santo-andre',
    address: 'Rua Gertrudes de Lima, 53 3º andar, sala 34',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.441057441154!2d-46.52983622417379!3d-23.660180178732066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4288ecf7dd77%3A0x1dc8908562d39ba7!2sR.%20Gertr%C3%BAdes%20de%20Lima%2C%2053%20-%203%C2%BA%20andar%2C%20sala%2034%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009020-000!5e0!3m2!1spt-BR!2sbr!4v1738158640346!5m2!1spt-BR!2sbr',
  },
  {
    label: 'Taboão da Serra/SP',
    key: 'taboao-da-serra',
    address: 'Estrada São Francisco, 2008 - Sala 210',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3655.5765771005726!2d-46.773882017141375!3d-23.619513873235498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5468fd34534b%3A0x6298ef32865cbd4b!2sMetropolitan%20Empreendimento%20Comercial!5e0!3m2!1spt-BR!2sbr!4v1738360940594!5m2!1spt-BR!2sbr',
  },
  {
    label: 'Guarulhos/SP',
    key: 'guarulhos',
    address: 'Rua Otávio Forghieri, 72 sala 32 - Centro',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.814705386214!2d-46.53555712417885!3d-23.467147378864702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef55cfcb7487b%3A0xf4cf2ea9dd93961e!2sR.%20Ot%C3%A1vio%20Forghieri%2C%2072%20-%2032%20-%20Jardim%20Gumercindo%2C%20Guarulhos%20-%20SP%2C%2007090-070!5e0!3m2!1spt-BR!2sbr!4v1738159520716!5m2!1spt-BR!2sbr',
  },
  {
    label: 'Vila Matilde/SP',
    key: 'vila-matilde',
    address: 'Av Padres Olivetanos 735 Sala 5 - Vila Esperança',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1016145176095!2d-46.52952652417731!3d-23.528847378822192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e3d40ec3279%3A0x353cb497374a3648!2sAv.%20Padres%20Olivetanos%2C%20735%20-%205%20-%20Vila%20Esperan%C3%A7a%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003648-000!5e0!3m2!1spt-BR!2sbr!4v1738159560177!5m2!1spt-BR!2sbr',
  },
  {
    label: 'Porto Alegre/RS',
    key: 'porto-alegre',
    address: 'Rua sete de Setembro 1126 3 andar Sala 334',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36880.92081374336!2d-51.228496479386415!3d-30.045912308650763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519790e50b3eeab%3A0x9521308b78277788!2sR.%20Sete%20de%20Setembro%2C%201126%20-%203%20andar%20Sala%20334%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090010-191!5e0!3m2!1spt-BR!2sbr!4v1738159629706!5m2!1spt-BR!2sbr',
  },
  {
    label: 'Belém/PA',
    key: 'belem',
    address: 'TV Piedade, 469 3 Andar Sala 302 Reduto',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.541157207826!2d-48.49614182449595!3d-1.449759098536592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e9160604b69%3A0xaac6fa4b9f887b28!2sTv.%20Piedade%2C%20469%20-%203%20Andar%20Sala%20302%20-%20Reduto%2C%20Bel%C3%A9m%20-%20PA%2C%2066053-210!5e0!3m2!1spt-BR!2sbr!4v1738159659534!5m2!1spt-BR!2sbr',
  },
  {
    label: 'Belo Horizonte/MG',
    key: 'belo-horizonte',
    address: 'Rua General Clark, 35 - São Salvador',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.780846167144!2d-44.0148491!3d-19.8914738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696ac03e2e7c9%3A0x3a032ef1cd69baa4!2sR.%20Gen.%20Clark%2C%2035%20-%20S%C3%A3o%20Salvador%2C%20Belo%20Horizonte%20-%20MG%2C%2030881-643!5e0!3m2!1spt-BR!2sbr!4v1738158041602!5m2!1spt-BR!2sbr',
  },

  {
    label: 'Pindamonhangaba/SP',
    key: 'pindamonhangaba',
    address: 'R. Cap. Alfredo César, 37 - Centro',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.678211119402!2d-45.468679900000005!3d-22.9252369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf0387f83d60d%3A0xbbd29c6f539b82ca!2sR.%20Cap.%20Alfredo%20C%C3%A9sar%2C%2037%20-%20Centro%2C%20Pindamonhangaba%20-%20SP%2C%2012400-150!5e0!3m2!1spt-BR!2sbr!4v1738158137948!5m2!1spt-BR!2sbr',
  },
];

export function Addresses() {
  return (
    <div className="w-full container">
      <Tabs defaultValue="santo-andre">
        <TabsList className="grid grid-cols-2 h-full gap-2 sm:grid-cols-4 place-items-center justify-items-center">
          {addresses.map((address) => (
            <TabsTrigger
              key={address.key}
              value={address.key}
              className="shadow-sm border border-gray-300 p-2 rounded-lg w-full"
            >
              {address.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {addresses.map((address) => (
          <TabsContent key={address.key} value={address.key}>
            <Card>
              <CardHeader>
                <CardTitle>{address.label}</CardTitle>
                <CardDescription>{address.address}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <iframe
                  src={address.map}
                  className="w-full h-96"
                  style={{ border: 0 }}
                ></iframe>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export function OurOfficesSection() {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef);
  return (
    <section
      ref={componentRef}
      className="flex flex-col gap-8 bg-gray-100 py-20"
      id="nossos-escritorios"
    >
      <div className="flex flex-col gap-4 items-start px-8 container">
        <div className="flex gap-4 items-center self-start">
          <div className="bg-white rounded-lg p-2">
            {OurOfficesSectionContent.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-cptext-blue">
            {OurOfficesSectionContent.title.text['pt-br']}
          </h2>
        </div>
        <p className="text-gray-600">
          {OurOfficesSectionContent.subtitle.text['pt-br']}
        </p>
      </div>
      <Addresses />
    </section>
  );
}
