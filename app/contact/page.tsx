import Contact from "@/components/contact/contact";
import { getContactOffices, getContactSettings } from "@/lib/db/queries/contact";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const settings = getContactSettings();
  const offices = getContactOffices();

  return <Contact settings={settings} offices={offices} />;
}