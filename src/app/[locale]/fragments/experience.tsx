import { Paragraph } from "@/components/paragraph";
import { Timeline } from "@/components/timeline";
import { format, parseISO } from "date-fns";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function Experience(){
    const genericTranslation = await getTranslations()

    const stepTranslations = await getTranslations('landing-page.experience.step')

    const essaTranslations = await getTranslations('landing-page.experience.essa')
    const ninjaKeys = ['0', '1', '2'] as const;
    
    const listoTranslations = await getTranslations('landing-page.experience.listo')
    const listoKeys = ['0', '1', '2', '3'] as const;

    return (
      <Timeline.Root>
        <Timeline.Item
          date={genericTranslation("work-state")}
          title="Step Ahead Consulting"
          icon={
            <Image
              fill
              sizes="(max-width: 114px)"
              alt="step-ahead-logo"
              className="p-2 sm:p-3"
              src="/images/step-logo.png"
            />
          }
        >
          <Timeline.List>
            <Timeline.ListItem title="DGAV Candidaturas">
              <Paragraph>{stepTranslations("dgav.candidaturas")}</Paragraph>
            </Timeline.ListItem>
            <Timeline.ListItem title="Jurista Virtual Mobile">
              <Paragraph>{stepTranslations("dgav.jurista-mobile")}</Paragraph>
            </Timeline.ListItem>
          </Timeline.List>
        </Timeline.Item>

        <Timeline.Item
          title="Escola Secundária de Santo André"
          className="bg-emerald-500"
          date={`${format(
            parseISO(new Date(2020, 9, 16).toISOString()),
            "dd/MM/yyyy"
          )} - ${format(
            parseISO(new Date(2023, 7, 20).toISOString()),
            "dd/MM/yyyy"
          )}`}
          icon={
            <Image
              fill
              sizes="(max-width: 101px)"
              alt="aesa-logo"
              className="p-1 sm:p-2"
              src="/images/aesa-logo.png"
            />
          }
        >
          <Timeline.List>
            <Timeline.ListItem title="NinjaRMM">
              <Paragraph>{essaTranslations("ninja.description")}</Paragraph>

              <span>{genericTranslation("activities")}</span>
              <ul className="list-disc pl-4 md:pl-8">
                {ninjaKeys.map((key) => (
                  <li key={key}>
                    {essaTranslations(`ninja.activities.${key}`)}
                  </li>
                ))}
              </ul>
            </Timeline.ListItem>
          </Timeline.List>
        </Timeline.Item>

        <Timeline.Item
          title="Listo Tecnologias S.A"
          date={`${format(
            parseISO(new Date(2019, 8, 25).toISOString()),
            "dd/MM/yyyy"
          )} - ${format(
            parseISO(new Date(2020, 2, 19).toISOString()),
            "dd/MM/yyyy"
          )}`}
          className="bg-white"
          icon={
            <Image
              fill
              alt="aesa-logo"
              className="p-1 sm:p-2"
              src="/images/listo-logo.svg"
            />
          }
        >
          <Paragraph>{listoTranslations("description")}</Paragraph>
          <span>{genericTranslation("activities")}</span>
          <ul className="list-disc pl-4 md:pl-8">
            {listoKeys.map((key) => (
              <li key={key}>{listoTranslations(`activities.${key}`)}</li>
            ))}
          </ul>
        </Timeline.Item>
      </Timeline.Root>
    );
}