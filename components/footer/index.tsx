import { PiEnvelope, PiGithubLogo, PiLinkedinLogo} from 'react-icons/pi'
import { LanguageSwitcher } from '../language-switcher';
import { useTranslations } from 'next-intl';

export function Footer()
{
  const footerTranslations = useTranslations('footer')
  const genericTranslations = useTranslations()
    return (
      <footer className="flex flex-col">
        <div className="flex flex-col gap-6 justify-between p-4 border-t border-input sm:flex-row sm:py-8 sm:px-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold sm:text-2xl">
              {footerTranslations("contact")}
            </h1>

            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center sm:gap-2">
                <PiEnvelope size={20} />
                <a
                  className="text-xs sm:text-base hover:underline"
                  target="_blank"
                  href="mailto:carlos.saraiva.neto@gmail.com"
                >
                  carlos.saraiva.neto@gmail.com
                </a>
              </div>

              <div className="flex gap-1 items-center sm:gap-2">
                <PiLinkedinLogo size={20} />
                <a
                  className="text-xs sm:text-base hover:underline"
                  target="_blank"
                  href="https://www.linkedin.com/in/carlos-saraiva-neto/"
                >
                  Carlos Saraiva
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start gap-2 sm:items-end">
            <LanguageSwitcher />

            <div className="flex items-center gap-2 font-extralight text-xs sm:text-sm">
              <PiGithubLogo size={17} />
              <a
                href="https://github.com/Saraivinha1703/Portfolio"
                target="_blank"
                className="hover:underline"
              >
                {genericTranslations("source-code")}
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center font-light text-xs sm:text-sm">
          <span>
            © 2023-{new Date(Date.now()).getUTCFullYear()} Carlos Alberto
            Saraiva Neto
          </span>
        </div>
      </footer>
    );
}