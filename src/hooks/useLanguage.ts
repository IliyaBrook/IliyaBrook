import { useEffect, useState } from 'react';
import { SITE_COPY } from '@/i18n/copy';
import type { Lang, SiteCopy } from '@/i18n/types';

const KEY = 'iliyabrook.lang';

function readInitial(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(KEY);
  if (stored === 'en' || stored === 'ru' || stored === 'he') return stored;
  return 'en';
}

export function useLanguage(): {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: SiteCopy;
} {
  const [lang, setLang] = useState<Lang>(readInitial);
  const t = SITE_COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    localStorage.setItem(KEY, lang);
  }, [lang, t.dir]);

  return { lang, setLang, t };
}
