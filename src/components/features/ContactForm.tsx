"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input, Textarea, Button } from "@/components/ui";
import { useTheme } from "@/contexts/ThemeContext";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const { isGeek } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setStatusMessage("Message sent successfully!");
      reset();
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
    }
  };

  const StatusMessage = () =>
    status !== "idle" ? (
      <div
        role="alert"
        aria-live="polite"
        className={`flex items-center gap-2 text-sm ${
          status === "success"
            ? "text-[var(--accent-success)]"
            : "text-[var(--accent-error)]"
        }`}
      >
        {status === "success" ? (
          <CheckCircle size={16} />
        ) : (
          <AlertCircle size={16} />
        )}
        <span>{statusMessage}</span>
      </div>
    ) : null;

  // Regular mode: Standard form layout
  if (!isGeek) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Name"
          placeholder="Your name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <Textarea
          label="Message"
          placeholder="Your message..."
          rows={5}
          {...register("message")}
          error={errors.message?.message}
        />

        <div className="flex items-center gap-4 pt-2">
          <Button type="submit" isLoading={isSubmitting}>
            <span className="flex items-center gap-2">
              <Send size={14} />
              <span>Send Message</span>
            </span>
          </Button>

          <StatusMessage />
        </div>
      </form>
    );
  }

  // Geek mode: Code-style form
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Form code-style header */}
      <div className="space-y-1">
        <p>
          <span className="text-[var(--syntax-keyword)]">async function</span>
          <span className="text-[var(--syntax-function)]"> sendMessage</span>
          <span className="text-[var(--text-primary)]">{"(data)"}</span>
          <span className="text-[var(--text-primary)]">{" {"}</span>
        </p>
      </div>

      <div className="pl-4 space-y-4">
        <Input
          label="name:"
          placeholder="Your name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="email:"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <Textarea
          label="message:"
          placeholder="Your message..."
          rows={5}
          {...register("message")}
          error={errors.message?.message}
        />

        <div className="flex items-center gap-4">
          <Button type="submit" isLoading={isSubmitting}>
            <span className="flex items-center gap-2">
              <Send size={14} />
              <span>execute()</span>
            </span>
          </Button>

          <StatusMessage />
        </div>
      </div>

      <p>
        <span className="text-[var(--text-primary)]">{"}"}</span>
      </p>
    </form>
  );
}
