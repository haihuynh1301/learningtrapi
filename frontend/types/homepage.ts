export interface LinkItem {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

export interface StatItem {
  id: number;
  number: string;
  text: string;
}

export interface InstrumentItem {
  id: number;
  instrumentTag: string;
}

export interface HomepageData {
  header: {
    logoLink: {
      text: string;
      href: string;
    };

    link: LinkItem[];

    cta: {
      href: string;
      text: string;
    };
  };

  heroSection: {
    heroTag: string;
    heroTitle: string;
    heroSub: string;

    heroCta: LinkItem[];

    stats: StatItem[];

    instrument: InstrumentItem[];
  };
}