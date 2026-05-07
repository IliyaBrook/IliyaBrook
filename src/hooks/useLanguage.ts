import { useEffect, useState } from 'react';
import { SITE_COPY } from '@/i18n/copy';
import type { Lang, SiteCopy } from '@/i18n/types';

const KEY = 'iliyabrook.lang';

function readInitial(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(KEY);
  if (stored === 'en' || stored === 'ru' || stored === 'he') return stored;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('he') || nav.startsWith('iw')) return 'he';
  return 'en';
}

export function useLanguage(): {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: SiteCopy;
} {
  const [lang, setLangState] = useState<Lang>(readInitial);
  const t = SITE_COPY[lang];

  const setLang = (l: Lang) => {
    localStorage.setItem(KEY, l);
    setLangState(l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  return { lang, setLang, t };
}
