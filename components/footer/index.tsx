import {PiDiscordLogo, PiEnvelope} from 'react-icons/pi'
import { LanguageSwitcher } from '../language-switcher';
import { useTranslations } from 'next-intl';

export function Footer()
{
  const footerTranslations = useTranslations('footer')
    return (
      <footer className="flex justify-between p-4 border-t border-input sm:p-8">
        <div className='flex flex-col gap-2'>
            <h1 className="text-xl font-semibold sm:text-2xl">{footerTranslations('contact')}</h1>
            <div className='flex flex-col gap-1'>
                <div className="flex gap-1 items-center sm:gap-2">
                  <PiEnvelope size={20} />
                  <a className='text-sm sm:text-base hover:underline' href='mailto:carlos.saraiva.neto@gmail.com'>Email: carlos.saraiva.neto@gmail.com</a>
                </div>
                <div className="flex gap-1 items-center sm:gap-2">
                  <PiDiscordLogo size={20} />
                  <span className='text-sm sm:text-base hover:underline'>Discord: carlos</span>
                </div>
            </div>
        </div>
         <LanguageSwitcher />
      </footer>
    );
}