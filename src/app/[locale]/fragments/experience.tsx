import { Paragraph } from "@/components/paragraph";
import { Timeline } from "@/components/timeline";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Experience(){
    const genericTranslation = useTranslations()

    const stepTranslations = useTranslations('landing-page.experience.step')

    const essaTranslations = useTranslations('landing-page.experience.essa')
    const ninjaKeys = ['0', '1', '2'] as const;
    
    const listoTranslations = useTranslations('landing-page.experience.listo')
    const listoKeys = ['0', '1', '2', '3'] as const;

    return (
        <Timeline.Root>
            <Timeline.Item 
                date={genericTranslation('work-state')}
                title="Step Ahead Consulting"
                icon={<Image fill sizes="(max-width: 114px)" alt="step-ahead-logo" className="p-2 sm:p-3" src="/images/step-logo.png"/>}>
                <Timeline.List>
                    <Timeline.ListItem title="DGAV Candidaturas">
                        <Paragraph>{stepTranslations('dgav.candidaturas')}</Paragraph>
                    </Timeline.ListItem>
                    <Timeline.ListItem title="Jurista Virtual Mobile">
                        <Paragraph>{stepTranslations('dgav.jurista-mobile')}</Paragraph>
                    </Timeline.ListItem>
                </Timeline.List>
            </Timeline.Item>
        
            <Timeline.Item
                title="Escola Secundária de Santo André" 
                className="bg-emerald-500" 
                date={`${new Date(2020, 9, 16).toLocaleDateString()} - ${new Date(2023, 7, 20).toLocaleDateString()}`}
                icon={<Image fill sizes="(max-width: 101px)" alt="aesa-logo" className="p-1 sm:p-2" src="/images/aesa-logo.png"/>}>
                <Timeline.List>
                    <Timeline.ListItem title="NinjaRMM">
                        <Paragraph>{essaTranslations('ninja.description')}</Paragraph>

                        <span>{genericTranslation('activities')}</span>
                        <ul className="list-disc pl-4 md:pl-8">
                            {ninjaKeys.map(key => (
                            <li key={key}>{essaTranslations(`ninja.activities.${key}`)}</li>
                            ))}
                        </ul>
                    </Timeline.ListItem>
                </Timeline.List>
            </Timeline.Item>

            <Timeline.Item 
                title="Listo Tecnologias S.A"
                date={`${new Date(2019, 8, 25).toLocaleDateString()} - ${new Date(2020, 2, 19).toLocaleDateString()}`}
                className="bg-white"
                icon={<Image fill alt="aesa-logo" className="p-1 sm:p-2" src="/images/listo-logo.svg"/>}>
                <Paragraph>{listoTranslations('description')}</Paragraph>
                <span>{genericTranslation('activities')}</span>
                <Timeline.List>
                    {listoKeys.map(key => (
                        <Timeline.ListItem key={key}>{listoTranslations(`activities.${key}`)}</Timeline.ListItem>
                    ))}
                </Timeline.List>
            </Timeline.Item>
      </Timeline.Root>
    )
}