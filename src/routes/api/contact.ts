import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(4000),
  business: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  _gotcha: z.string().optional().default(""),
});

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid JSON" }, 400);
        }
        const parsed = ContactSchema.safeParse(raw);
        if (!parsed.success) {
          return json(
            { ok: false, error: "Validation failed", issues: parsed.error.issues },
            400,
          );
        }
        const data = parsed.data;
        // Honeypot — silently accept
        if (data._gotcha) return json({ ok: true });

        // Log the submission. When an email provider is connected (e.g. Resend),
        // wire it here. For now we record the lead server-side.
        console.log("[contact] new enquiry", {
          name: data.name,
          email: data.email,
          business: data.business,
          phone: data.phone,
          service: data.service,
          message: data.message.slice(0, 500),
          at: new Date().toISOString(),
        });

        return json({ ok: true });
      },
    },
  },
});
