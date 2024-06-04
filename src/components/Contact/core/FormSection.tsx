import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useCreateContact } from "@/query/emailApi";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "@/utils/LoadingButton";
import { Button } from "@/components/ui/button";
import AnimatedCharacters from "@/utils/AnimatedCharacters";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().optional(),
});

const FormSection = () => {
  const { createRestaurant, isLoading } = useCreateContact();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    createRestaurant(values);
  };

  return (
    <div className="flex flex-col lg:w-1/2 space-y-5">
      <p>Contact</p>
      <AnimatedCharacters
        className="text-4xl font-bold"
        type="heading1"
        text="Prenez Contact"
      />
      <p className="font-light text-[0.9rem]">
        Actuellement à la recherche de nouvelles opportunités professionnelles,
        je suis prêt à m'engager dans des projets où je peux contribuer et
        évoluer. N'hésitez pas à me contacter, je vous répondrai dès que
        possible.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom" {...field} />
                  </FormControl>
                  <FormDescription>
                    Veuillez entrer votre prénom comme vous souhaitez que nous
                    vous appelions dans notre correspondance.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de famille</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom de famille" {...field} />
                  </FormControl>
                  <FormDescription>
                    Veuillez inclure votre nom de famille pour une communication
                    plus formelle.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  Veuillez fournir votre adresse email afin que nous puissions
                  répondre à votre demande rapidement.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message ici"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Votre message est important pour nous. Veuillez partager vos
                  réflexions, questions ou opportunités potentielles que vous
                  avez en tête. Au plaisir de vous contacter!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button className="bg-gradient-to-r from-[#b53c2a] via-[#b53c2a] dark:via-[#b53c2a] to-[#000] dark:to-[#fff]" type="submit">Soumettre</Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default FormSection;
