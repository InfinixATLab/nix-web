export const PLAN_FEATURES_MAP = [
    {key: 'has_register', label: 'Cadastros'},
    {key: 'has_agenda', label: 'Agenda'},
    {key: 'has_data', label: 'Dados Políticos'},
    {key: 'has_campaign', label: 'Minha Campanha'},
    {key: 'has_ia', label: 'IA Eleitoral'},
    {key: 'has_maps', label: 'Mapa de Calor'},
    {key: 'has_whatsapp', label: 'Marketing no WhatsApp'},
    {key: 'has_whatsapp_campaign', label: 'Campanha WhatsApp'},
    {key: 'has_research', label: 'Pesquisas Eleitorais'},
    {key: 'has_courses', label: 'Cursos'},
    {key: 'has_consultation', label: 'Consultas'},
];

export const PLANS = [
    {
        name: 'Pré-Pago',
        profiles: '1 Perfil',
        support: 'Apenas Email',
        oldPrice: '499,00',
        price: '329,80',
        features: {
            has_register: true,
            has_agenda: true,
            has_campaign: true,
            has_maps: false,
            has_data: true,
            has_research: false,
            has_consultation: false,
            has_courses: false,
            has_whatsapp: true,
            has_whatsapp_campaign: true,
            has_ia: false
        }
    },
    {
        name: 'Básico',
        profiles: '5 Perfis',
        support: 'Apenas Email',
        oldPrice: '1.389,00',
        price: '499,00',
        features: {
            has_register: true,
            has_agenda: true,
            has_campaign: true,
            has_maps: false,
            has_data: true,
            has_research: false,
            has_consultation: false,
            has_courses: false,
            has_whatsapp: false,
            has_whatsapp_campaign: false,
            has_ia: false
        }
    },
    {
        name: 'Médio',
        profiles: '10 Perfis',
        support: 'Apenas Email',
        oldPrice: '2.489,00',
        price: '789,00',
        features: {
            has_register: true,
            has_agenda: true,
            has_campaign: true,
            has_maps: true,
            has_data: true,
            has_research: false,
            has_consultation: false,
            has_courses: false,
            has_whatsapp: false,
            has_whatsapp_campaign: false,
            has_ia: true
        }
    },
    {
        name: 'Avançado',
        profiles: '25 Perfis',
        support: 'WhatsApp',
        oldPrice: '4.895,00',
        price: '1.499,00',
        features: {
            has_register: true,
            has_agenda: true,
            has_campaign: true,
            has_maps: true,
            has_data: true,
            has_research: true,
            has_consultation: false,
            has_courses: true,
            has_whatsapp: true,
            has_whatsapp_campaign: true,
            has_ia: true
        }
    },
    {
        name: 'Premium',
        profiles: '60 Perfis',
        support: 'WhatsApp',
        oldPrice: '7.695,00',
        price: '2.875,00',
        features: {
            has_register: true,
            has_agenda: true,
            has_campaign: true,
            has_maps: true,
            has_data: true,
            has_research: true,
            has_consultation: true,
            has_courses: true,
            has_whatsapp: true,
            has_whatsapp_campaign: true,
            has_ia: true
        }
    },
    {
        name: 'NIX Full',
        profiles: 'Ilimitados',
        support: 'Prioridade',
        oldPrice: '9.980,00',
        price: '5.000,00',
        features: {
            has_register: true,
            has_agenda: true,
            has_campaign: true,
            has_maps: true,
            has_data: true,
            has_research: true,
            has_consultation: true,
            has_courses: true,
            has_whatsapp: true,
            has_whatsapp_campaign: true,
            has_ia: true
        }
    }
];