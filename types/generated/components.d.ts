import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    ages: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    showsub: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sub: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCardspricing extends Struct.ComponentSchema {
  collectionName: 'components_elements_cardspricings';
  info: {
    displayName: 'cardspricing';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    featureitems: Schema.Attribute.Component<'elements.items-instrument', true>;
    headingcard: Schema.Attribute.Component<'elements.heading', false>;
    lablepopular: Schema.Attribute.String;
    popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsHeading extends Struct.ComponentSchema {
  collectionName: 'components_elements_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    showsub: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sub: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsIconBox extends Struct.ComponentSchema {
  collectionName: 'components_elements_icon_boxes';
  info: {
    displayName: 'iconBox';
  };
  attributes: {
    icon: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsItemText extends Struct.ComponentSchema {
  collectionName: 'components_elements_item_texts';
  info: {
    displayName: 'itemText';
  };
  attributes: {
    description: Schema.Attribute.Text;
    text: Schema.Attribute.String;
  };
}

export interface ElementsItemsInstrument extends Struct.ComponentSchema {
  collectionName: 'components_elements_items_instruments';
  info: {
    displayName: 'instrument';
  };
  attributes: {
    instrumentTag: Schema.Attribute.String;
  };
}

export interface ElementsItemsStat extends Struct.ComponentSchema {
  collectionName: 'components_elements_items_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsQuotes extends Struct.ComponentSchema {
  collectionName: 'components_elements_quotes';
  info: {
    displayName: 'quotes';
  };
  attributes: {
    author: Schema.Attribute.Component<'elements.icon-box', false>;
    icon: Schema.Attribute.String;
    mark: Schema.Attribute.String;
    showauthor: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showmark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsRepeatertext extends Struct.ComponentSchema {
  collectionName: 'components_elements_repeatertexts';
  info: {
    displayName: 'repeatertext';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.items-instrument', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    item: Schema.Attribute.Component<'elements.repeatertext', true>;
    leftbottom: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo-link', false>;
    rightbottom: Schema.Attribute.String;
  };
}

export interface LayoutHerosection extends Struct.ComponentSchema {
  collectionName: 'components_layout_herosections';
  info: {
    displayName: 'Herosection';
  };
  attributes: {
    heroCta: Schema.Attribute.Component<'elements.link', true>;
    heroSub: Schema.Attribute.Text;
    heroTag: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    instrument: Schema.Attribute.Component<'elements.items-instrument', true>;
    stats: Schema.Attribute.Component<'elements.items-stat', true>;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
  };
}

export interface SectionsAbhero extends Struct.ComponentSchema {
  collectionName: 'components_sections_abheroes';
  info: {
    displayName: 'abhero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    item: Schema.Attribute.Component<'elements.icon-box', true>;
  };
}

export interface SectionsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    item: Schema.Attribute.Component<'elements.item-text', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    hero_badge: Schema.Attribute.String;
    hero_buttons: Schema.Attribute.Component<'elements.link', true>;
    hero_description: Schema.Attribute.Text;
    hero_title: Schema.Attribute.String;
    instrument: Schema.Attribute.Component<'elements.items-instrument', true>;
    stats: Schema.Attribute.Component<'elements.items-stat', true>;
  };
}

export interface SectionsInstructors extends Struct.ComponentSchema {
  collectionName: 'components_sections_instructors';
  info: {
    displayName: 'instructors';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.cards', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.cardspricing', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionsProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_processes';
  info: {
    displayName: 'process';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    steps: Schema.Attribute.Component<'elements.icon-box', true>;
  };
}

export interface SectionsPrograms extends Struct.ComponentSchema {
  collectionName: 'components_sections_programs';
  info: {
    displayName: 'programs';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.cards', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionsStory extends Struct.ComponentSchema {
  collectionName: 'components_sections_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    badge: Schema.Attribute.String;
    bigClef: Schema.Attribute.String;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    values: Schema.Attribute.Component<'elements.icon-box', true>;
  };
}

export interface SectionsTechnique extends Struct.ComponentSchema {
  collectionName: 'components_sections_techniques';
  info: {
    displayName: 'technique';
  };
  attributes: {
    box: Schema.Attribute.Component<'elements.icon-box', true>;
    button: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    quotes: Schema.Attribute.Component<'elements.quotes', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.cards': ElementsCards;
      'elements.cardspricing': ElementsCardspricing;
      'elements.heading': ElementsHeading;
      'elements.icon-box': ElementsIconBox;
      'elements.item-text': ElementsItemText;
      'elements.items-instrument': ElementsItemsInstrument;
      'elements.items-stat': ElementsItemsStat;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'elements.quotes': ElementsQuotes;
      'elements.repeatertext': ElementsRepeatertext;
      'layout.footer': LayoutFooter;
      'layout.herosection': LayoutHerosection;
      'layout.top-nav': LayoutTopNav;
      'sections.abhero': SectionsAbhero;
      'sections.banner': SectionsBanner;
      'sections.contact': SectionsContact;
      'sections.faqs': SectionsFaqs;
      'sections.hero': SectionsHero;
      'sections.instructors': SectionsInstructors;
      'sections.pricing': SectionsPricing;
      'sections.process': SectionsProcess;
      'sections.programs': SectionsPrograms;
      'sections.story': SectionsStory;
      'sections.technique': SectionsTechnique;
      'sections.testimonials': SectionsTestimonials;
    }
  }
}
