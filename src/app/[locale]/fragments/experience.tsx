import { Paragraph } from "@/components/paragraph";
import { Timeline } from "@/components/timeline";
import { format, parseISO } from "date-fns";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function Experience() {
  const [
    genericTranslation,
    agrosigTranslations,
    pangoUiTranslations,
    uabTranslations,
    logicaColossalTranslations,
    stepTranslations,
    essaTranslations,
    listoTranslations,
  ] = await Promise.all([
    getTranslations(),
    getTranslations("landing-page.experience.agrosig"),
    getTranslations("landing-page.experience.pango-ui"),
    getTranslations("landing-page.experience.uab"),
    getTranslations("landing-page.experience.logica-colossal"),
    getTranslations("landing-page.experience.step"),
    getTranslations("landing-page.experience.essa"),
    getTranslations("landing-page.experience.listo"),
  ]);

  return (
    <Timeline>
      <Timeline.Item
        title="Pango UI"
		subtitle={pangoUiTranslations("position")}
		className="from-black border-pango"
        itemClassName="border-pango bg-linear-to-br from-background to-pango/20 from-50% sm:bg-linear-to-br sm:from-popover sm:to-pango/20 sm:from-50% sm:hover:ring-pango"
        date={`${format(parseISO(new Date(2026, 1, 7).toISOString()), "dd/MM/yyyy")} - ${genericTranslation("work-state")}`}
        icon={
          <Image
            fill
            sizes="(max-width: 114px)"
            alt="logo-pango-ui"
            src="/images/logo-pango-ui.svg"
          />
        }
      >
        <Timeline.List className="list-none">
          <Timeline.ListItem>
            <Paragraph>
              {pangoUiTranslations.rich("description", {
                shad: (chunks) => (
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    className="underline text-pango italic"
                  >
                    {chunks}
                  </a>
                ),
                pango: (chunks) => (
                  <a
                    href="https://kallebysantos.github.io/pango-ui/"
                    target="_blank"
                    className="underline text-pango italic"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </Paragraph>
          </Timeline.ListItem>
        </Timeline.List>
      </Timeline.Item>
      <Timeline.Item
        title="Universidade Aberta"
        subtitle={uabTranslations("position")}
        itemClassName="bg-linear-to-br from-background to-primary/20 from-50% sm:bg-linear-to-br sm:from-popover sm:to-primary/30 sm:from-50% sm:hover:ring-primary"
        date={`${format(parseISO(new Date(2026, 1, 13).toISOString()), "dd/MM/yyyy")} - ${genericTranslation("work-state")}`}
        icon={
          <Image
            fill
            sizes="(max-width: 114px)"
            alt="logo-uab"
            src="/images/logo-uab.jpg"
          />
        }
      >
        <Timeline.List>
          <Timeline.ListItem title={uabTranslations("title")}>
            <Paragraph>{uabTranslations("description")}</Paragraph>
          </Timeline.ListItem>
        </Timeline.List>
      </Timeline.Item>
      <Timeline.Item
        title="Lógica Colossal"
		className="border-emerald-500"
        itemClassName="border-emerald-500 bg-linear-to-br from-background to-emerald-500/20 from-50% sm:bg-linear-to-br sm:from-popover sm:to-emerald-500/20 sm:from-50% sm:hover:ring-emerald-500"
        date={`${format(
          parseISO(new Date(2024, 8, 1).toISOString()),
          "dd/MM/yyyy",
        )} - ${genericTranslation("work-state")}`}
        subtitle={logicaColossalTranslations("position")}
        icon={
          <Image
            fill
            sizes="(max-width: 114px)"
            alt="logica-colossal-logo"
            className="p-1 sm:p-2"
            src="/images/colossus-colored.svg"
          />
        }
      >
        <Timeline.List>
          <div className="text-emerald-500">
            <Timeline.ListItem title="MAYOM (Manage Your Own Money)">
              <Paragraph>
                {logicaColossalTranslations("mayom.description")}
              </Paragraph>
              <div className="pt-2">
                <h1 className="w-full font-semibold">
                  {genericTranslation("technologies")}
                </h1>
                <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                  {logicaColossalTranslations
                    .raw("mayom.technologies")
                    .map((s: string, i: number) => (
                      <li className="text-sm sm:text-base" key={i}>
                        {s}
                      </li>
                    ))}
                </ul>
              </div>
            </Timeline.ListItem>
          </div>
        </Timeline.List>
      </Timeline.Item>
      <Timeline.Item
        date={`${format(
          parseISO(new Date(2023, 8, 1).toISOString()),
          "dd/MM/yyyy",
        )} - ${format(
          parseISO(new Date(2024, 7, 31).toISOString()),
          "dd/MM/yyyy",
        )}`}
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
              <h1 className="w-full font-semibold">
                {genericTranslation("technologies")}
              </h1>
              <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                {stepTranslations
                  .raw("dgav.candidaturas.technologies")
                  .map((s: string, i: number) => (
                    <li className="text-sm sm:text-base" key={i}>
                      {s}
                    </li>
                  ))}
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
              <h1 className="w-full font-semibold">
                {genericTranslation("technologies")}
              </h1>
              <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                {stepTranslations
                  .raw("palop.pedidos-online.technologies")
                  .map((s: string, i: number) => (
                    <li className="text-sm sm:text-base" key={i}>
                      {s}
                    </li>
                  ))}
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
              <h1 className="w-full font-semibold">
                {genericTranslation("technologies")}
              </h1>
              <ul className="list-disc pl-4 md:pl-8 grid grid-cols-2 gap-1">
                {stepTranslations
                  .raw("dgav.jurista-mobile.technologies")
                  .map((s: string, i: number) => (
                    <li className="text-sm sm:text-base" key={i}>
                      {s}
                    </li>
                  ))}
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
          "dd/MM/yyyy",
        )} - ${format(
          parseISO(new Date(2023, 6, 20).toISOString()),
          "dd/MM/yyyy",
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
              {essaTranslations
                .raw("ninja.activities")
                .map((s: string, i: number) => (
                  <li key={i}>{s}</li>
                ))}
            </ul>
          </Timeline.ListItem>
        </Timeline.List>
      </Timeline.Item>

      <Timeline.Item
        title="Listo Tecnologias S.A"
        subtitle={listoTranslations("position")}
        date={`${format(
          parseISO(new Date(2019, 8, 25).toISOString()),
          "dd/MM/yyyy",
        )} - ${format(
          parseISO(new Date(2020, 1, 19).toISOString()),
          "dd/MM/yyyy",
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
          {listoTranslations.raw("activities").map((s: string, i: number) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Timeline.Item>
    </Timeline>
  );
}
