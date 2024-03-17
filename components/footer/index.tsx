import {PiDiscordLogo, PiEnvelope} from 'react-icons/pi'
export function Footer()
{
    return (
      <footer className="p-2 border-t border-input">
        <div className='flex flex-col gap-2'>
            <h1 className="text-2xl font-semibold">Contact</h1>
            <div className='flex flex-col gap-1'>
                <div className="flex gap-2 items-center">
                  <PiEnvelope size={20} />
                  <span>Email: carlos@gmail.com</span>
                </div>
                <div className="flex gap-2 items-center">
                  <PiDiscordLogo size={20} />
                  <span>Discord: carlos</span>
                </div>
            </div>
        </div>
      </footer>
    );
}