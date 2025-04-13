import { useEffect } from 'react';

export const AccessibilityWidget = () => {
  useEffect(() => {
    // Проверяем, не загружены ли скрипты ранее
    if (!document.getElementById('lidrekon-jquery')) {
      const script1 = document.createElement('script');
      script1.id = 'lidrekon-jquery';
      script1.src = 'https://lidrekon.ru/slep/js/jquery.js';
      script1.async = true;
      document.head.appendChild(script1);
    }

    if (!document.getElementById('lidrekon-uhpv')) {
      const script2 = document.createElement('script');
      script2.id = 'lidrekon-uhpv';
      script2.src = 'https://lidrekon.ru/slep/js/uhpv-full.min.js';
      script2.async = true;
      document.head.appendChild(script2);
    }
  }, []);

  return (
    <img
      id="specialButton"
      style={{
        cursor: 'pointer',
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
      }}
      src= "/images/Accessibility/AccessibilityWidget.png"
      alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
      title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
    />
  );
};