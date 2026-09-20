/** Client-side form delivery via FormSubmit (email notifications). */
export async function submitSiteForm(
  form: HTMLFormElement,
  options: { subject: string; replyTo?: string },
): Promise<{ ok: boolean; message?: string }> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent("info@atlantisps.com.au")}`;
  const data = new FormData(form);
  data.set("_subject", options.subject);
  data.set("_template", "table");
  data.set("_captcha", "false");
  if (options.replyTo) data.set("_replyto", options.replyTo);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { message?: string } | null;
      return { ok: false, message: body?.message || "Could not send right now. Please try again or email us." };
    }
    return { ok: true };
  } catch {
    return { ok: false, message: "Could not send right now. Please try again or email us directly." };
  }
}
