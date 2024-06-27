import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from '@headlessui/react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [enabled, setEnabled] = useState(i18n.language === 'en');

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setEnabled(language === 'en');
  };

  return (
    <div className="flex items-center">
      <Switch
        checked={enabled}
        onChange={() => changeLanguage(enabled ? 'es' : 'en')}
        className={`${
          enabled ? 'bg-blue-700' : 'bg-red-600'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
      <span className="ml-3 text-white">
        {enabled ? 'EN' : 'ES'}
      </span>
    </div>
  );
};

export default LanguageSwitcher;
