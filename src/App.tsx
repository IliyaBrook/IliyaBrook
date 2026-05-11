import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';

function App() {
  const [theme, setTheme] = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="page">
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Suspense fallback={null}>
          <Outlet context={{ t, lang }} />
        </Suspense>
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
