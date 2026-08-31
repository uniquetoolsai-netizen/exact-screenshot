import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { submitContactForm } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FunBlast | Book Tickets & Party Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with FunBlast for bookings, party enquiries, school trips and corporate events. Call, email or fill in the enquiry form.",
      },
      { property: "og:title", content: "Contact FunBlast Gaming Zone" },
      {
        property: "og:description",
        content: "Book tickets, plan parties and reach the FunBlast team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone must be less than 20 characters" })
    .regex(/^[0-9+\-\s()]*$/, {
      message: "Phone can only contain numbers, spaces, +, -, (, )",
    })
    .optional()
    .or(z.literal("")),
  enquiryType: z.enum(["general", "birthday", "school", "corporate", "feedback"], {
    message: "Please select an enquiry type",
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      enquiryType: "general",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      toast.success(result.message);
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Say hello, plan a"
        accent="blast"
        body="Reach out for bookings, party enquiries, school trips and corporate events."
      />

      <section className="mx-auto max-w-[112rem] px-5 pb-16 md:px-10">
        <div className="grid gap-5 sm:grid-cols-3">
          <Reveal from="up" delay={0}>
            <div className="glass rounded-3xl p-6">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-display text-xl">Call us</h2>
              <a
                href="tel:+916358055050"
                className="mt-1 block text-sm text-muted-foreground hover:text-primary"
              >
                +91 63580 55050
              </a>
            </div>
          </Reveal>
          <Reveal from="up" delay={50}>
            <div className="glass rounded-3xl p-6">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-display text-xl">Email</h2>
              <a
                href="mailto:funblast2007@gmail.com"
                className="mt-1 block text-sm text-muted-foreground hover:text-primary"
              >
                funblast2007@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal from="up" delay={100}>
            <div className="glass rounded-3xl p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-display text-xl">Head office</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                SBR Complex, SG Highway, Ahmedabad, Gujarat
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[112rem] px-5 pb-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <div>
              <h2 className="font-display text-4xl leading-[0.92] md:text-5xl">
                Send us a <span className="text-blast">message</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Fill in the form and our team will reply within 24 hours. For urgent bookings,
                call your nearest branch directly.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/funblastindia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FunBlast on Instagram"
                  className={iconLink}
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com/@funblast_india?si=jddapXzFFIGXzb7k"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FunBlast on YouTube"
                  className={iconLink}
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={100}>
            <div className="glass neon-ring rounded-3xl p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="enquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enquiry type</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select one" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General enquiry</SelectItem>
                              <SelectItem value="birthday">Birthday party</SelectItem>
                              <SelectItem value="school">School trip</SelectItem>
                              <SelectItem value="corporate">Corporate event</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your visit, party plans or questions..."
                            className="min-h-[140px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="btn-blast w-full sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    {mutation.isPending ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </Form>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
