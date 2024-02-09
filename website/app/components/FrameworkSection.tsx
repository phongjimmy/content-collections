import { allIntegrations } from "content-collections";
import { Content, Section, Title } from "./Section";
import { BrandIcon } from "@/components/BrandIcon";
import Link from "next/link";
import clsx from "clsx";

export function FrameworkSection() {
  return (
    <Section>
      <Content className="space-y-10 text-center">
        <Title center>Support</Title>
        <p className="text-lg max-w-2xl text-center mx-auto">
          Content Collection offers a variety of adapters that seamlessly
          integrate with popular web frameworks. This ensures a smooth
          integration process, allowing you to easily incorporate Content
          Collection into your application. If we don&apos;t have an adapter
          available for your specific framework, don&apos;t worry. You can
          utilize our CLI tool to integrate Content Collection into your
          framework of choice.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-20 pt-10 mx-auto max-w-60 sm:max-w-xs md:max-w-lg justify-items-center">
          {allIntegrations
            .filter((integration) => integration.name !== "cli")
            .map((integration) => (
              <li key={integration.name}>
                <Link
                  title={integration.description}
                  href={`/docs/integrations/${integration.name}`}
                  className="block rounded-md"
                >
                  <BrandIcon
                    icon={integration.icon || integration.name}
                    className={clsx(
                      "size-24 md:size-32",
                      "grayscale contrast-50",
                      "hover:grayscale-0 hover:contrast-100",
                      "active:grayscale-0 active:contrast-100",
                      "hover:drop-shadow-[0_25px_25px_rgb(255_255_255/0.15)]",
                      "active:drop-shadow-[0_25px_25px_rgb(255_255_255/0.15)]",
                      "transition-all duration-500"
                    )}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </Content>
    </Section>
  );
}