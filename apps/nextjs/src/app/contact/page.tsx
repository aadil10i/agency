import ContactForm from "~/components/contact-form";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="container min-h-screen w-full md:py-8">
      <ContactForm />
    </div>
  );
}
