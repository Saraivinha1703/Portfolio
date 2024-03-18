import {PiDiscordLogo, PiEnvelope} from 'react-icons/pi'
import { LanguageSwitcher } from '../language-switcher';
import { useTranslations } from 'next-intl';

export function Footer()
{
  const footerTranslations = useTranslations('footer')
    return (
      <footer className="flex justify-between p-8 border-t border-input">
        <div className='flex flex-col gap-2'>
            <h1 className="text-2xl font-semibold">{footerTranslations('contact')}</h1>
            <div className='flex flex-col gap-1'>
                <div className="flex gap-2 items-center">
                  <PiEnvelope size={20} />
                  <a className='hover:underline' href='mailto:carlos.saraiva.neto@gmail.com'>Email: carlos.saraiva.neto@gmail.com</a>
                </div>
                <div className="flex gap-2 items-center">
                  <PiDiscordLogo size={20} />
                  <span>Discord: carlos</span>
                </div>
            </div>
        </div>
         <LanguageSwitcher />
      </footer>
    );
}