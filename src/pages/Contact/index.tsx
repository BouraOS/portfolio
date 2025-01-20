import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
}
