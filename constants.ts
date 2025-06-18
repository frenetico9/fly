
import { AircraftData, ConflictData, AlertData, NewsItem } from './types';

export const MOCK_AIRCRAFT_DATA: AircraftData[] = [
    // Existing Data
    { id: 'f16-ua-1', type: 'fighter', country: 'Ucrânia', lat: 48.3, lng: 31.1, altitude: 25000, speed: 650, heading: 90, model: 'F-16 Fighting Falcon' },
    { id: 'rivet-us-1', type: 'recon', country: 'EUA', lat: 50.5, lng: 20.2, altitude: 45000, speed: 450, heading: 110, model: 'RC-135 Rivet Joint' },
    { id: 'drone-ir-1', type: 'drone', country: 'Irã', lat: 26.5, lng: 55.0, altitude: 15000, speed: 120, heading: 180, model: 'Shahed 136' },
    { id: 'c130-uk-1', type: 'transport', country: 'Reino Unido', lat: 34.8, lng: 33.2, altitude: 22000, speed: 300, heading: 270, model: 'C-130 Hercules' },
    { id: 'su34-ru-1', type: 'fighter', country: 'Rússia', lat: 47.9, lng: 37.8, altitude: 18000, speed: 700, heading: 250, model: 'Su-34 Fullback' },

    // New Data
    { id: 'su25-ua-2', type: 'fighter', country: 'Ucrânia', lat: 47.5, lng: 37.0, altitude: 15000, speed: 450, heading: 70, model: 'Su-25 Frogfoot' },
    { id: 'mq9-us-2', type: 'drone', country: 'EUA', lat: 33.0, lng: 44.0, altitude: 25000, speed: 200, heading: 120, model: 'MQ-9 Reaper' },
    { id: 'globalhawk-us-3', type: 'recon', country: 'EUA', lat: 37.2, lng: -115.8, altitude: 60000, speed: 310, heading: 300, model: 'RQ-4 Global Hawk (Nevada)' },
    { id: 'mohajer6-ir-2', type: 'drone', country: 'Irã', lat: 30.0, lng: 58.0, altitude: 18000, speed: 110, heading: 200, model: 'Mohajer-6' },
    { id: 'typhoon-uk-2', type: 'fighter', country: 'Reino Unido', lat: 55.0, lng: 5.0, altitude: 35000, speed: 800, heading: 45, model: 'Eurofighter Typhoon (North Sea)' },
    { id: 'tu95-ru-2', type: 'recon', country: 'Rússia', lat: 69.0, lng: 100.0, altitude: 38000, speed: 400, heading: 180, model: 'Tu-95 Bear (Arctic Patrol)' },
    { id: 'a50-ru-3', type: 'recon', country: 'Rússia', lat: 46.5, lng: 39.0, altitude: 33000, speed: 420, heading: 220, model: 'Beriev A-50 Mainstay (AWACS)' },

    { id: 'j20-cn-1', type: 'fighter', country: 'China', lat: 25.0, lng: 120.0, altitude: 40000, speed: 900, heading: 160, model: 'Chengdu J-20' },
    { id: 'wz7-cn-2', type: 'recon', country: 'China', lat: 15.0, lng: 115.0, altitude: 55000, speed: 350, heading: 270, model: 'WZ-7 Soaring Dragon (South China Sea)' },
    { id: 'y20-cn-3', type: 'transport', country: 'China', lat: 34.3, lng: 108.9, altitude: 28000, speed: 470, heading: 30, model: 'Xian Y-20' },

    { id: 'tejas-in-1', type: 'fighter', country: 'Índia', lat: 34.0, lng: 77.0, altitude: 30000, speed: 750, heading: 310, model: 'HAL Tejas' },
    { id: 'c17-in-2', type: 'transport', country: 'Índia', lat: 22.0, lng: 78.0, altitude: 26000, speed: 450, heading: 100, model: 'C-17 Globemaster III' },
    { id: 'netra-in-3', type: 'recon', country: 'Índia', lat: 28.6, lng: 77.2, altitude: 30000, speed: 300, heading: 50, model: 'DRDO Netra AEW&CS' },
    
    { id: 'rafale-fr-1', type: 'fighter', country: 'França', lat: 17.0, lng: 0.0, altitude: 38000, speed: 850, heading: 200, model: 'Dassault Rafale (Sahel Ops)' },
    { id: 'a400m-fr-2', type: 'transport', country: 'França', lat: 48.0, lng: 2.0, altitude: 24000, speed: 420, heading: 150, model: 'Airbus A400M Atlas' },
    
    { id: 'typhoon-de-1', type: 'fighter', country: 'Alemanha', lat: 56.0, lng: 23.0, altitude: 36000, speed: 820, heading: 80, model: 'Eurofighter Typhoon (Baltic Air Policing)' },
    { id: 'p3c-de-2', type: 'recon', country: 'Alemanha', lat: 57.0, lng: 15.0, altitude: 22000, speed: 300, heading: 350, model: 'P-3C Orion (Baltic Sea Patrol)' },

    { id: 'tb2-tr-1', type: 'drone', country: 'Turquia', lat: 36.0, lng: 36.0, altitude: 20000, speed: 100, heading: 10, model: 'Bayraktar TB2 (Syria)' },
    { id: 'akinci-tr-2', type: 'drone', country: 'Turquia', lat: 37.0, lng: 43.0, altitude: 30000, speed: 150, heading: 290, model: 'Bayraktar Akinci (Iraq Border)' },
];

export const MOCK_CONFLICT_DATA: ConflictData[] = [
    // Existing Data
    { id: 'gaza-1', type: 'airstrike', location: 'Cidade de Gaza', lat: 31.5, lng: 34.46, details: 'Ataques aéreos reportados no norte da Faixa de Gaza.', source: 'Liveuamap' },
    { id: 'kharkiv-1', type: 'artillery', location: 'Kharkiv, Ucrânia', lat: 50.0, lng: 36.23, details: 'Duelo de artilharia pesada na linha de frente.', source: 'ACLED' },
    { id: 'redsea-1', type: 'clash', location: 'Mar Vermelho', lat: 14.5, lng: 42.5, details: 'Confronto naval entre forças Houthis e coalizão internacional.', source: 'Relato local' },
    { id: 'sudan-1', type: 'clash', location: 'Cartum, Sudão', lat: 15.5, lng: 32.5, details: 'Combates urbanos entre facções rivais.', source: 'ACLED' },

    // New Data
    { id: 'nagorno-karabakh-1', type: 'artillery', location: 'Nagorno-Karabakh', lat: 40.0, lng: 46.8, details: 'Bombardeios de artilharia relatados na linha de contato.', source: 'Crisis Group' },
    { id: 'myanmar-1', type: 'clash', location: 'Estado de Kayin, Myanmar', lat: 17.0, lng: 97.5, details: 'Confrontos entre militares e grupos étnicos armados.', source: 'Al Jazeera' },
    { id: 'sahel-1', type: 'clash', location: 'Fronteira Mali-Níger', lat: 15.0, lng: 2.0, details: 'Atividade insurgente e confrontos com forças de segurança.', source: 'UN News' },
    { id: 'ethiopia-tigray-1', type: 'airstrike', location: 'Região do Tigray, Etiópia', lat: 13.5, lng: 39.0, details: 'Relatos de ataques aéreos em áreas contestadas.', source: 'Reuters' },
    { id: 'colombia-narco-1', type: 'clash', location: 'Cauca, Colômbia', lat: 2.5, lng: -76.9, details: 'Confrontos entre grupos armados ilegais e forças estatais.', source: 'Insight Crime' },
];

export const MOCK_ALERT_DATA: AlertData[] = [
    // Existing Data
    { id: 'nk-missile-1', type: 'missile-launch', location: 'Coreia do Norte', lat: 39.0, lng: 125.7, severity: 'Alta', details: 'Lançamento de míssil balístico detectado.' },
    
    // New Data
    { id: 'taiwan-strait-exercise-1', type: 'military-exercise', location: 'Estreito de Taiwan', lat: 23.5, lng: 119.5, severity: 'Média', details: 'Grandes exercícios militares em andamento, aumentando a tensão regional.' },
    { id: 'cyber-europe-1', type: 'cyber-attack', location: 'Infraestrutura Crítica - Leste Europeu', lat: 50.45, lng: 30.52, severity: 'Alta', details: 'Ataque cibernético sofisticado detectado contra redes de energia e comunicação.' },
    { id: 'gulf-oman-blockade-1', type: 'naval-activity', location: 'Golfo de Omã', lat: 25.0, lng: 58.0, severity: 'Alta', details: 'Atividade naval incomum sugere possível interrupção de rotas marítimas.' },
    { id: 'arctic-sub-activity-1', type: 'submarine-patrol', location: 'Oceano Ártico', lat: 80.0, lng: 10.0, severity: 'Baixa', details: 'Aumento detectado na atividade de patrulha submarina.' },
];

export const MOCK_NEWS_DATA: NewsItem[] = [
    // Existing Data
    { title: 'Tensões aumentam no Mar da China Meridional', source: 'Reuters', timestamp: 'Há 5 min' },
    { title: 'Ucrânia recebe novo lote de equipamentos militares', source: 'Associated Press', timestamp: 'Há 25 min' },
    { title: 'IAEA inicia inspeção no Irã', source: 'IAEA', timestamp: 'Há 1 hora' },
    { title: 'Exercício militar conjunto entre Japão e EUA no Pacífico', source: 'Kyodo News', timestamp: 'Há 2 horas' },

    // New Data
    { title: 'Negociações de paz estagnam no conflito do Iêmen', source: 'UN Dispatch', timestamp: 'Há 10 min' },
    { title: 'Cúpula de emergência da OTAN convocada sobre segurança europeia', source: 'NATO News', timestamp: 'Há 15 min' },
    { title: 'Novas ameaças cibernéticas identificadas visando sistemas governamentais globais', source: 'CyberWire', timestamp: 'Há 45 min' },
    { title: 'Crise humanitária se agrava na região do Sahel', source: 'OCHA', timestamp: 'Há 1h 30 min' },
    { title: 'ONU pede cessar-fogo imediato na Etiópia', source: 'UN News', timestamp: 'Há 3 horas' },
    { title: 'Importante acordo de armas anunciado entre Índia e Rússia', source: 'Defense News', timestamp: 'Há 4 horas' },
    { title: 'Relatório aponta aumento de atividade de pirataria no Golfo da Guiné', source: 'IMB', timestamp: 'Há 5 horas' },
];
