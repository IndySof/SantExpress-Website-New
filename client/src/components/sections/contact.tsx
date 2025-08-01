import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@/lib/schema";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Contact() {
  const { t, language } = useTranslation();
  const { toast } = useToast();

  // Pre-load translations for select options with fallbacks
  const userTypeOptions = {
    transporter: t("contact.form.userTypes.transporter") || "Transporteur sanitaire",
    healthcare: t("contact.form.userTypes.healthcare") || "Établissement de santé",
    patient: t("contact.form.userTypes.patient") || "Patient",
    other: t("contact.form.userTypes.other") || "Autre"
  };

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      userType: "transporter",
      message: "",
      language: language,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'a6d78bf1-78a0-4f4f-8034-8b61d57614e7';
      formData.append('access_key', accessKey);
      formData.append('name', `${data.firstName} ${data.lastName}`);
      formData.append('email', data.email);
      formData.append('subject', `Contact SantExpress - ${userTypeOptions[data.userType as keyof typeof userTypeOptions]}`);
      formData.append('message', `Type d'utilisateur: ${userTypeOptions[data.userType as keyof typeof userTypeOptions]}\n\nMessage: ${data.message}`);
      formData.append('language', language);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast({
          title: t("contact.form.success"),
          description: t("contact.form.success"),
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-medical-gray-600">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="w-full h-64 bg-gradient-to-br from-medical-blue to-medical-green rounded-xl mb-8 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-2">SantExpress</h3>
                <p className="text-lg opacity-90">Transport sanitaire innovant</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <span className="text-3xl">🚑</span>
                  <span className="text-3xl">📱</span>
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-medical-gray-900">{t("contact.info.email")}</p>
                  <p className="text-medical-gray-600">contact@santexpress.fr</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-medical-gray-900">{t("contact.info.address")}</p>
                  <p className="text-medical-gray-600">535 Route des Lucioles, Valbonne (06560)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-medical-gray-50 rounded-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.firstName") || "Prénom"}</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder={t("contact.form.firstName") || "Prénom"} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.lastName") || "Nom"}</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder={t("contact.form.lastName") || "Nom"} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.email") || "Email"}</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} placeholder={t("contact.form.email") || "Email"} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="userType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.userType") || "Vous êtes"}</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contact.form.userTypePlaceholder") || "Sélectionnez votre profil"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="transporter">{userTypeOptions.transporter}</SelectItem>
                          <SelectItem value="healthcare">{userTypeOptions.healthcare}</SelectItem>
                          <SelectItem value="patient">{userTypeOptions.patient}</SelectItem>
                          <SelectItem value="other">{userTypeOptions.other}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message") || "Message"}</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} placeholder={t("") || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-medical-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : t("contact.form.submit")}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
