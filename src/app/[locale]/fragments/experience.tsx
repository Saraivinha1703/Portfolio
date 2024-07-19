import { Paragraph } from "@/components/paragraph";
import { Timeline } from "@/components/timeline";
import { format, parseISO } from "date-fns";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function Experience() {
  const [
    genericTranslation,
    stepTranslations,
    essaTranslations,
    listoTranslations,
  ] = await Promise.all([
    getTranslations(),
    getTranslations("landing-page.experience.step"),
    getTranslations("landing-page.experience.essa"),
    getTranslations("landing-page.experience.listo"),
  ]);

  return (
    <Timeline.Root>
      <Timeline.Item
        date={`${format(
          parseISO(new Date(2023, 8, 1).toISOString()),
          "dd/MM/yyyy"
        )} - ${genericTranslation("work-state")}`}
        title="Step Ahead Consulting"
        subtitle={stepTranslations("position")}
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
          <Timeline.ListItem
            title="DGAV Candidaturas"
            subtitle={stepTranslations("dgav.candidaturas.position")}
          >
            <Paragraph>
              {"\n\n"}
              {stepTranslations("dgav.candidaturas.description")}
            </Paragraph>
            <div className="pt-2">
              <h1 className="w-full font-semibold">{genericTranslation("technologies")}</h1>
              <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                {stepTranslations.raw("dgav.candidaturas.technologies")
                  .map((s: string, i: number) => 
                    <li className="text-sm sm:text-base" key={i}>{s}</li>
                )}
              </ul>
            </div>
          </Timeline.ListItem>
          <Timeline.ListItem
            title="Pedidos Online"
            subtitle={stepTranslations("palop.pedidos-online.position")}
            >
            <Paragraph>
              {stepTranslations("palop.pedidos-online.description")}
            </Paragraph>

            <div className="pt-2">
            <h1 className="w-full font-semibold">{genericTranslation("technologies")}</h1>
              <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                {stepTranslations.raw("palop.pedidos-online.technologies")
                  .map((s: string, i: number) => 
                    <li className="text-sm sm:text-base" key={i}>{s}</li>
                )}
              </ul>
            </div>
          </Timeline.ListItem>
          <Timeline.ListItem
            title="Jurista Virtual Mobile"
            subtitle={stepTranslations("dgav.jurista-mobile.position")}
            >
            <Paragraph>
              {stepTranslations("dgav.jurista-mobile.description")}
            </Paragraph>

            <div className="pt-2">
              <h1 className="w-full font-semibold">{genericTranslation("technologies")}</h1>
              <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                {stepTranslations.raw("dgav.jurista-mobile.technologies")
                  .map((s: string, i: number) => 
                    <li className="text-sm sm:text-base" key={i}>{s}</li>
                )}
              </ul>
            </div>
          </Timeline.ListItem>
        </Timeline.List>
      </Timeline.Item>

      <Timeline.Item
        title="Escola Secundária de Santo André"
        subtitle={essaTranslations("position")}
        className="bg-emerald-500"
        date={`${format(
          parseISO(new Date(2020, 8, 16).toISOString()),
          "dd/MM/yyyy"
        )} - ${format(
          parseISO(new Date(2023, 6, 20).toISOString()),
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
          <Timeline.ListItem
            title="NinjaRMM"
            subtitle={essaTranslations("ninja.position")}
          >
            <Paragraph>{essaTranslations("ninja.description")}</Paragraph>

            <span>{genericTranslation("activities")}</span>
            <ul className="list-disc pl-4 md:pl-8">
              {essaTranslations.raw("ninja.activities")
                .map((s: string, i: number) => (
                  <li key={i}>{s}</li>
                )
              )}
            </ul>
          </Timeline.ListItem>
        </Timeline.List>
      </Timeline.Item>

      <Timeline.Item
        title="Listo Tecnologias S.A"
        subtitle={listoTranslations("position")}
        date={`${format(
          parseISO(new Date(2019, 8, 25).toISOString()),
          "dd/MM/yyyy"
        )} - ${format(
          parseISO(new Date(2020, 1, 19).toISOString()),
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
          {listoTranslations.raw("activities")
            .map((s: string, i: number) => (
              <li key={i}>{s}</li>
            )
          )}
        </ul>
      </Timeline.Item>
    </Timeline.Root>
  );
}
