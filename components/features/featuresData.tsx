import { Feature } from './features.types';
import Image from "next/image";
// Importando o lucide-react apenas para os mini-ícones dos tópicos internos do pop-up
import {
  Lightbulb, ShieldCheck, Clock, Map, Filter, Crosshair, FileText,
  UserPlus, Shield, Search, Contact, Link, Share2, Megaphone,
  PlusCircle, TrendingUp, FileCheck, Smartphone, CheckSquare, Users2,
  AlertTriangle, Zap, Folder, BarChart3, Car
} from 'lucide-react';

export const featuresData: Feature[] = [
  {
    id: 'ia-eleitoral',
    icon: <Image src="/icons/ia.webp" alt="Ícone IA Eleitoral" width={28} height={28} />,
    title: 'IA Eleitoral',
    shortDescription: 'Seu assistente virtual para estratégias, discursos e dúvidas eleitorais.',
    fullDescription: 'A inteligência artificial exclusiva da NIX trabalhando para a sua campanha.',
    mockupImage: '/mockups/placeholder.png', // Espaço para o seu print no futuro
    details: [
      { icon: <Lightbulb color="#94a3b8" size={20} />, title: 'Estratégia e Análise', description: 'Receba insights sobre cenários políticos e descubra as melhores táticas de mobilização.' },
      { icon: <Megaphone color="#94a3b8" size={20} />, title: 'Marketing e Discursos', description: 'Tenha apoio instantâneo para criar argumentos, roteiros e textos engajadores.' },
      { icon: <ShieldCheck color="#94a3b8" size={20} />, title: 'Legislação Descomplicada', description: 'Tire dúvidas rápidas sobre as regras eleitorais brasileiras e evite erros na campanha.' },
      { icon: <Clock color="#94a3b8" size={20} />, title: 'Apoio 24/7', description: 'Um assistente virtual sempre pronto para orientar assessores e lideranças nas ruas.' }
    ],
  },
  {
    id: 'mapa-calor',
    icon: <Image src="/icons/mapa-de-calor.webp" alt="Ícone Mapa de Calor" width={28} height={28} />,
    title: 'Mapa de Calor',
    shortDescription: 'Visualize a força da sua campanha e localize seus eleitores geograficamente.',
    fullDescription: 'Visualize áreas estratégicas, identifique concentração de apoio e tome decisões precisas.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <Map color="#94a3b8" size={20} />, title: 'Geolocalização', description: 'Veja no mapa exatamente onde estão seus eleitores, lideranças e instituições parceiras.' },
      { icon: <Crosshair color="#94a3b8" size={20} />, title: 'Forças e Fraquezas', description: 'Descubra bairros onde você tem forte aceitação e áreas que precisam de mais atenção.' },
      { icon: <Filter color="#94a3b8" size={20} />, title: 'Filtros Inteligentes', description: 'Segmente a visualização por perfil de cadastro para análises mais profundas da sua base.' },
      { icon: <FileText color="#94a3b8" size={20} />, title: 'Decisões Baseadas em Dados', description: 'Otimize a logística de carreatas, panfletagens e eventos presenciais.' }
    ],
  },
  {
    id: 'gestao-contatos',
    icon: <Image src="/icons/cadastrar.webp" alt="Ícone Gestão de Contatos" width={28} height={28} />,
    title: 'Gestão de Contatos',
    shortDescription: 'Cadastre e organize eleitores, lideranças e instituições em um só lugar.',
    fullDescription: 'Organize, segmente e gerencie toda a sua base de apoiadores em uma interface simples.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <UserPlus color="#94a3b8" size={20} />, title: 'Cadastros Segmentados', description: 'Separe seus contatos em categorias claras: Eleitores, Instituições e Parceiros Políticos.' },
      { icon: <Shield color="#94a3b8" size={20} />, title: 'Perfis de Liderança', description: 'Níveis de acesso e perfis próprios para organizar a hierarquia da sua equipe de trabalho.' },
      { icon: <Search color="#94a3b8" size={20} />, title: 'Busca Avançada', description: 'Encontre qualquer apoiador na "Consulta por Lista" de forma rápida e intuitiva.' },
      { icon: <Contact color="#94a3b8" size={20} />, title: 'Fichas Detalhadas', description: 'Tenha em mãos a zona eleitoral, contatos e dados profissionais de cada pessoa cadastrada.' }
    ],
  },
  {
    id: 'marketing-whatsapp',
    icon: <Image src="/icons/marketing-whatsapp.webp" alt="Ícone Marketing WhatsApp" width={28} height={28} />,
    title: 'Marketing no WhatsApp',
    shortDescription: 'Gerencie seus grupos e potencialize a comunicação direta com sua base.',
    fullDescription: 'Potencialize sua comunicação direta e engaje sua base de forma organizada.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <Link color="#94a3b8" size={20} />, title: 'Gestão de Grupos', description: 'Cadastre e centralize todos os links dos grupos de WhatsApp da campanha no aplicativo.' },
      { icon: <Share2 color="#94a3b8" size={20} />, title: 'Distribuição Ágil', description: 'Facilite o acesso dos seus assessores e lideranças aos canais oficiais de comunicação.' },
      { icon: <Users2 color="#94a3b8" size={20} />, title: 'Mobilização de Base', description: 'Crie um fluxo organizado para que seus multiplicadores repassem as mensagens aos eleitores.' }
    ],
  },
  {
    id: 'controle-gastos',
    icon: <Image src="/icons/gastos.webp" alt="Ícone Controle de Gastos" width={28} height={28} />,
    title: 'Controle de Gastos',
    shortDescription: 'Registre e acompanhe o fluxo de caixa da campanha de forma simples.',
    fullDescription: 'Transparência e organização financeira diária na palma da sua mão.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <PlusCircle color="#94a3b8" size={20} />, title: 'Registro Simplificado', description: 'Adicione as despesas rotineiras da campanha de forma rápida e descomplicada.' },
      { icon: <TrendingUp color="#94a3b8" size={20} />, title: 'Fluxo de Caixa Visível', description: 'Saiba exatamente para onde estão indo os recursos e evite surpresas financeiras.' },
      { icon: <FileCheck color="#94a3b8" size={20} />, title: 'Apoio à Prestação de Contas', description: 'Mantenha os dados internos organizados para facilitar o trabalho da sua equipe contábil.' }
    ],
  },
  {
    id: 'agenda-sincronizada',
    icon: <Image src="/icons/agenda.webp" alt="Ícone Agenda" width={28} height={28} />,
    title: 'Agenda Sincronizada',
    shortDescription: 'Controle seus eventos com integração direta ao calendário do seu celular.',
    fullDescription: 'Nunca perca um compromisso importante e mantenha a logística alinhada.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <Smartphone color="#94a3b8" size={20} />, title: 'Integração com o Celular', description: 'Sincronização automática dos eventos do app direto com o calendário pessoal do candidato.' },
      { icon: <CheckSquare color="#94a3b8" size={20} />, title: 'Confirmação de Status', description: 'Marque presença e informe à equipe de rua se você comparecerá ao evento ou não.' },
      { icon: <Users2 color="#94a3b8" size={20} />, title: 'Alinhamento de Equipe', description: 'Permite que os assessores saibam exatamente onde o candidato estará a cada hora do dia.' }
    ],
  },
  {
    id: 'notificacoes-massa',
    icon: <Image src="/icons/notificacoes.webp" alt="Ícone Notificações" width={28} height={28} />,
    title: 'Notificações em Massa',
    shortDescription: 'Mobilize sua equipe e assessores enviando alertas instantâneos pelo app.',
    fullDescription: 'Mobilização instantânea e comunicação direta com todos os usuários do app.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <AlertTriangle color="#94a3b8" size={20} />, title: 'Alertas em Tempo Real', description: 'Envie avisos urgentes sobre reuniões, mudanças de rota ou eventos de última hora.' },
      { icon: <Zap color="#94a3b8" size={20} />, title: 'Comunicação Direta', description: 'As mensagens chegam diretamente na tela do celular de quem tem o app instalado.' },
      { icon: <Megaphone color="#94a3b8" size={20} />, title: 'Engajamento Contínuo', description: 'Mantenha sua equipe, assessores e lideranças sempre motivados, ativos e informados.' }
    ],
  },
  {
    id: 'hub-campanha',
    icon: <Image src="/icons/minha-campanha.webp" alt="Ícone Minha Campanha" width={28} height={28} />,
    title: 'Hub da Campanha',
    shortDescription: 'Centralize propostas, jingles, fotos e links de pesquisas com segurança.',
    fullDescription: 'O quartel-general digital com todos os arquivos e mídias da sua candidatura.',
    mockupImage: '/mockups/placeholder.png',
    details: [
      { icon: <Folder color="#94a3b8" size={20} />, title: 'Materiais Oficiais', description: 'Centralize as propostas políticas, jingles e fotos oficiais em um só lugar para fácil download.' },
      { icon: <BarChart3 color="#94a3b8" size={20} />, title: 'Links Estratégicos', description: 'Acesse com segurança pastas externas com os resultados das suas pesquisas eleitorais.' },
      { icon: <Car color="#94a3b8" size={20} />, title: 'Controle Logístico', description: 'Gerencie a Frota Veicular da campanha e mapeie o posicionamento dos seus parceiros.' }
    ],
  }
];