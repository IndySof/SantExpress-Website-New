import { useState, useEffect } from 'react';

export type Language = 'fr' | 'en' | 'de' | 'it';

interface TranslationStore {
  [key: string]: any;
}

const translations: Record<Language, TranslationStore> = {
  fr: {},
  en: {},
  de: {},
  it: {}
};

let currentLanguage: Language = 'fr';
const listeners: (() => void)[] = [];

export const useTranslation = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const listener = () => forceUpdate({});
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const t = (key: string, options?: { returnObjects?: boolean, defaultValue?: string }): any => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    // If translations not loaded yet, return fallback
    if (!value || Object.keys(value).length === 0) {
      return getFallbackText(key, options);
    }
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return getFallbackText(key, options);
      }
    }
    
    if (options?.returnObjects) {
      return Array.isArray(value) ? value : getFallbackArray(key);
    }
    
    return typeof value === 'string' ? value : getFallbackText(key, options);
  };

  const getFallbackText = (key: string, options?: { defaultValue?: string }): string => {
    if (options?.defaultValue) return options.defaultValue;
    
    // Provide French fallbacks for all texts
    const fallbacks: Record<string, string> = {
      'hero.title': 'Faciliter le transport sanitaire',
      'hero.titleHighlight': 'en France',
      'hero.subtitle': 'Solutions innovantes pour optimiser et sécuriser le transport des patients, en connectant tous les acteurs.',
      'hero.description': 'En alléger le coût, en réduire la durée et simplifier les formalités administratives',
      'hero.cta1': 'Notre Vision',
      'hero.cta2': 'Contactez-nous',
      'nav.market': 'Le Marché',
      'nav.actors': 'Les Acteurs',
      'nav.services': 'Services',
      'nav.vision': 'Notre Vision',
      'nav.contact': 'Contact',
      'market.title': 'Le marché',
      'market.description': 'Selon un rapport publié par la DREES en 2023, la consommation de transports sanitaires en ambulatoire s\'est élevée à 6 milliards d\'euros',
      'market.stats.consumption': 'Consommation annuelle',
      'market.stats.growth2021': 'Rebond post-crise',
      'market.stats.growth2022': 'Croissance continue',
      'market.coverage': 'Les dépenses sont prises en charge par l\'Assurance Maladie à plus de 90%',
      'actors.title': 'Les acteurs',
      'actors.subtitle': 'Tous les professionnels mobilisés autour du transport sanitaire',
      'actors.transporter.title': 'Transporteur sanitaire',
      'actors.healthcare.title': 'Établissements de santé',
      'actors.state.title': 'ÉTAT - Assurance maladie - ARS',
      'actors.patients.title': 'Les Patients',
      'vision.title': 'Notre vision',
      'vision.difficulties.title': 'Les difficultés',
      'vision.solution.title': 'Solution SantExpress',
      'services.title': 'Nos services',
      'services.subtitle': 'Une plateforme complète pour tous les acteurs du transport sanitaire',
      'contact.title': 'Contactez-nous',
      'contact.subtitle': 'Prêt à révolutionner votre activité de transport sanitaire ?',
      'contact.description': 'Rejoignez SantExpress et découvrez comment notre plateforme peut transformer votre façon de travailler.',
      'contact.form.firstName': 'Prénom',
      'contact.form.lastName': 'Nom',
      'contact.form.email': 'Email',
      'contact.form.userType': 'Vous êtes',
      'contact.form.userType.transporter': 'Transporteur sanitaire',
      'contact.form.userType.healthcare': 'Établissement de santé',
      'contact.form.userType.patient': 'Patient',
      'contact.form.userType.other': 'Autre',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Envoyer',
      'contact.form.success': 'Message envoyé avec succès !',
      'contact.form.error': 'Erreur lors de l\'envoi',
      'contact.info.address': 'Adresse',
      'contact.info.email': 'Email',
      'footer.description': 'Plateforme innovante pour optimiser et sécuriser le transport sanitaire en France. Connectons tous les acteurs pour un service de qualité.',
      'footer.services': 'Services',
      'footer.contact': 'Contact',
      'footer.rights': 'Tous droits réservés.',
      'services.transporter.title': 'Pour les transporteurs',
      'services.transporter.description': 'Optimisez vos trajets et augmentez votre rentabilité',
      'services.healthcare.title': 'Pour les établissements de santé',
      'services.healthcare.description': 'Simplifiez vos réservations et satisfaites vos patients',
      'services.patients.title': 'Pour les patients',
      'services.patients.description': 'Suivez votre transport en temps réel',
      'services.platform.title': 'Plateforme SantExpress',
      'services.platform.description': 'Une solution complète et innovante',
      'services.platform.intelligent.title': 'Gestion intelligente',
      'services.platform.fleet.title': 'Gestion de flotte',
      'services.platform.billing.title': 'Facturation automatisée',
      'partners.title': 'Nos partenaires',
      'partners.subtitle': 'Ils nous font confiance'
    };
    
    return fallbacks[key] || key;
  };

  const getFallbackArray = (key: string): string[] => {
    const fallbacks: Record<string, string[]> = {
      'actors.transporter.items': ['Taxis conventionnés', 'Ambulances', 'VSL (Véhicules Sanitaires Légers)'],
      'actors.healthcare.items': ['Hôpitaux', 'Cliniques', 'EPHAD'],
      'actors.state.items': ['Réglementation', 'Financement', 'Contrôle qualité'],
      'actors.patients.items': ['Bénéficiaires', 'Accompagnants', 'Familles'],
      'vision.difficulties.items': [
        'Améliorer la rentabilité',
        'Planification complexe des courses',
        'Réduire les 10-20% des courses qui se font à vide',
        'Répondre à l\'obligation du partage des courses (transport assis)',
        'En cas de panne, maintenir le transport pour le patient',
        'Traitement des Rejets des Caisses',
        'Démarches administratives complexes',
        'Répondre aux exigences de la CPAM (Convention & Avenant n°11)'
      ],
      'vision.solution.items': [
        'Répondre rapidement à une demande de transport',
        'Organiser la charge de travail',
        'Optimiser le trajet (navigation intégrée)',
        'Répondre à l\'obligation du partage des courses',
        'Système de backup et redirection automatique en cas de panne',
        'Gestion automatisée des rejets et relances CPAM',
        'Simplifier les formalités administratives (Facturation & Comptabilité)',
        'Accélérer les encaissements'
      ],
      'services.transporter.items': [
        'Répondre rapidement à une demande de transport',
        'Organiser la charge de travail',
        'Optimiser le trajet (navigation intégrée)',
        'Suivre le trajet des véhicules',
        'Réduire les trajets à vide'
      ],
      'services.healthcare.items': [
        'Libérer plus rapidement les lits',
        'Augmenter le taux d\'occupation',
        'Satisfaire les patients',
        'Réduire la charge de travail du personnel',
        'Harmoniser l\'organisation de la réservation'
      ],
      'services.patients.items': [
        'Application Mobile demandes centralisées',
        'Suivi du véhicule',
        'Gestion des retards',
        'Envoi de pièces justificatives',
        'Navigation intégrée'
      ],
      'services.platform.intelligent.items': [
        'Gestion des demandes assistée par IA',
        'Planification intelligente des trajets',
        'Partage de trajets optimisé'
      ],
      'services.platform.fleet.items': [
        'Suivi temps réel',
        'Optimisation des plannings',
        'Gestion des chauffeurs'
      ],
      'services.platform.billing.items': [
        'Télétransmission CPAM',
        'Gestion documents PMT',
        'Suivi des paiements',
        'Pré-Comptabilité'
      ],
      'footer.servicesList': ['Transport sanitaire', 'Gestion de flotte', 'Facturation CPAM', 'Application mobile'],
      'partners.items': ['Mutuelles', 'Assurance maladie', 'ARS', 'Établissements de santé', 'Transporteurs', 'Infirmiers/ères']
    };
    
    return fallbacks[key] || [];
  };

  const changeLanguage = (lang: Language) => {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    listeners.forEach(listener => listener());
  };

  return {
    t,
    language: currentLanguage,
    changeLanguage
  };
};

export const initializeI18n = async () => {
  // Load saved language or default to French
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang && ['fr', 'en', 'de', 'it'].includes(savedLang)) {
    currentLanguage = savedLang;
  }

  // Load translations
  try {
    const [fr, en, de, it] = await Promise.all([
      import('../locales/fr.json'),
      import('../locales/en.json'),
      import('../locales/de.json'),
      import('../locales/it.json')
    ]);

    translations.fr = fr.default;
    translations.en = en.default;
    translations.de = de.default;
    translations.it = it.default;

    // Notify all listeners that translations are loaded
    listeners.forEach(listener => listener());
  } catch (error) {
    console.error('Failed to load translations:', error);
  }
};
