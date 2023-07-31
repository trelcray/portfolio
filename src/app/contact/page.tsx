"use client";

import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { toast } from "@/hooks/use-toasts";
import { sendContactForm } from "@/lib/api";
import { fadeIn } from "@/utils/variants";

export default function Contact() {
  const sendMessageFormSchema = z.object({
    name: z
      .string()
      .nonempty("The name is required!")
      .min(3, "Minimum 3 characters"),
    email: z
      .string()
      .nonempty("The email is required!")
      .email("Format of email invalid!"),
    subject: z.string().nonempty("The subject is required!"),
    message: z.string().nonempty("The message is required!"),
  });

  type SendMessageFormData = z.infer<typeof sendMessageFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendMessageFormData>({
    resolver: zodResolver(sendMessageFormSchema),
  });

  const sendMessage = async (data: SendMessageFormData) => {
    try {
      await sendContactForm(data);
      toast({
        title: "Thank you for your trust!",
        description: (
          <p className="text-white">
            I will return your contact as soon as possible. <br />
            Sincerely, Thalis Zambarda.
          </p>
        ),
      });
    } catch (error) {
      toast({
        title: "Ops, an error occurred!",
        description: (
          <p>
            Sorry occurred an fail to send the message. <br />
            Please check your connection, Sincerely, Thalis Zambarda.
          </p>
        ),
      });
    }
  };

  return (
    <PageWrapper className="bg-primary/30">
      <div
        className="container mx-auto flex h-full items-center justify-center 
        text-center xl:text-left"
      >
        <div className="flex w-full max-w-[43.75rem] flex-col">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12 text-center"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit(sendMessage)}
            className="mx-auto flex w-full flex-1 flex-col gap-6"
          >
            <div className="flex w-full gap-x-6">
              <fieldset className="flex w-full flex-col">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="mt-1 flex items-center gap-1">
                    <FiAlertCircle className="h-5 w-5 text-accent" />
                    {errors.name.message}
                  </span>
                )}
              </fieldset>
              <fieldset className="flex w-full flex-col">
                <input
                  type="email"
                  placeholder="email"
                  className="input"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="mt-1 flex items-center gap-1">
                    <FiAlertCircle className="h-5 w-5 text-accent" />
                    {errors.email.message}
                  </span>
                )}
              </fieldset>
            </div>
            <fieldset className="flex w-full flex-col">
              <input
                type="text"
                placeholder="subject"
                className="input"
                {...register("subject")}
              />
              {errors.subject && (
                <span className="mt-1 flex items-center gap-1">
                  <FiAlertCircle className="h-5 w-5 text-accent" />
                  {errors.subject.message}
                </span>
              )}
            </fieldset>
            <fieldset className="flex w-full flex-col">
              <textarea
                placeholder="message"
                className="textarea"
                {...register("message")}
              />
              {errors.message && (
                <span className="mt-1 flex items-center gap-1">
                  <FiAlertCircle className="h-5 w-5 text-accent" />
                  {errors.message.message}
                </span>
              )}
            </fieldset>
            <Button
              disabled={isSubmitting}
              isLoading={isSubmitting}
              variant="outline"
              type="submit"
              className="btn group flex max-w-[10.625rem] items-center 
              justify-center overflow-hidden rounded-full border
              border-white/50 px-8 transition-all duration-300 
              hover:border-accent"
            >
              <span
                className="transition-all duration-500 
                group-hover:-translate-y-120 group-hover:opacity-0"
              >
                Let's talk
              </span>
              <BsArrowRight
                className="absolute -translate-y-120 text-[1.375rem]
                opacity-0 transition-all duration-300 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100"
              />
            </Button>
          </motion.form>
        </div>
      </div>
    </PageWrapper>
  );
}
