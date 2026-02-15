import React, { useState } from "react";

// IMPORTANT: replace the placeholder below with your Formspree form URL
// Example: const FORMSPREE_ENDPOINT = "https://formspree.io/f/mayformid";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzbaljq";
const FORMSPREE_CONFIGURED = !FORMSPREE_ENDPOINT.includes("your-form-id") && FORMSPREE_ENDPOINT.trim() !== "";


export default function ContactForm({ lang = 'en' }: { lang?: 'en'|'pt' }): JSX.Element {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;

    // If Formspree isn't configured, open user's email client as a fallback.
    if (!FORMSPREE_CONFIGURED) {
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
      const subject = encodeURIComponent(`Contact from website — ${name}`);
      const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
      // open mail client
      window.location.href = `mailto:renatabels@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
      return;
    }

    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // surface any status code errors in console for debugging
        console.error("Formspree response status:", res.status);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!FORMSPREE_CONFIGURED && (
        <div className="p-3 bg-yellow-50 border-l-4 border-yellow-300 text-yellow-700 rounded">
          {lang === 'pt' ? (
            <>
              Formulário não configurado — as mensagens abrirão seu cliente de email. Para envio direto do site crie um formulário em <a className="underline" href="https://formspree.io" target="_blank" rel="noreferrer">Formspree</a> e substitua <code>FORMSPREE_ENDPOINT</code> em <code>ContactForm.tsx</code>.
            </>
          ) : (
            <>
              Form not configured — submissions will open your email client. To enable in-site sending create a form at <a className="underline" href="https://formspree.io" target="_blank" rel="noreferrer">Formspree</a> and replace <code>FORMSPREE_ENDPOINT</code> in <code>ContactForm.tsx</code>.
            </>
          )}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-700">{lang === 'pt' ? 'Nome' : 'Name'}</label>
        <input name="name" required className="mt-1 block w-full rounded border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">{lang === 'pt' ? 'Email' : 'Email'}</label>
        <input name="email" type="email" required className="mt-1 block w-full rounded border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">{lang === 'pt' ? 'Mensagem' : 'Message'}</label>
        <textarea name="message" required rows={5} className="mt-1 block w-full rounded border px-3 py-2" />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="accent-bg px-4 py-2 rounded"
        >
          {status === "sending" ? (lang === 'pt' ? 'Enviando...' : 'Sending...') : (lang === 'pt' ? 'Enviar mensagem' : 'Send message')}
        </button>
        {status === "success" && <div className="text-sm text-green-600">{lang === 'pt' ? 'Obrigada — responderei em breve.' : 'Thanks — I will reply soon.'}</div>}
        {status === "error" && <div className="text-sm text-red-600">{lang === 'pt' ? 'Erro ao enviar a mensagem. Tente novamente mais tarde.' : 'Error sending message. Try again later.'}</div>}
      </div>
    </form>
  );
}
