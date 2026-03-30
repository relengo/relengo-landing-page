import { NextRequest, NextResponse } from "next/server";

function buildEmailHtml(locale: "de" | "en", name: string, unsubscribeUrl: string): string {
  const isDE = locale === "de";
  const greeting = isDE
    ? `Hallo${name ? ` ${name}` : ""}`
    : `Hi${name ? ` ${name}` : " there"}`;
  
  const content = isDE ? {
    badge: "Du bist dabei",
    headline: "Warteliste bestätigt!",
    subtext: "Wir haben deine E-Mail. Du wirst als Erster erfahren, wenn Relengo startet.",
    stepsLabel: "Was als nächstes passiert",
    step1title: "Wir legen die letzten Hand anleget",
    step1body: "Eingebettete Versicherung, verifizierte Nutzer, reibungslose Vermietungen — wir stellen sicher, dass es das Warten wert ist.",
    step2title: "Du bekommst eine Early-Access-E-Mail",
    step2body: "Als Abonnent hörst du als Erster von uns, sobald die App live geht — vor der breiten Öffentlichkeit.",
    step3title: "Leihen oder verdienen ab Tag eins",
    step3body: "Leihe, was du brauchst, oder liste, was du nicht benutzt. Der Kreislauf beginnt, sobald du die App öffnest.",
    comingSoon: "Demnächst verfügbar",
    appTitle: "Sieh, was in der App auf dich wartet",
    appBody: "Entdecke Artikel in deiner Nähe, buche sofort und verdiene mit dem, was du besitzt.",
    cta: "Relengo besuchen",
    tagline: "Zugang statt Besitz. Wert bleibt in Bewegung.",
    footerText: `Du erhältst diese E-Mail, weil du dich auf <strong>relengo.app</strong> angemeldet hast.`,
    unsubscribe: "Abmelden",
    privacy: "Datenschutz",
    privacyUrl: "https://relengo.app/de/datenschutz",

  } : {
    badge: "You're in",
    headline: "Waitlist confirmed!",
    subtext: "We've got your email. You'll be among the first to know when Relengo launches.",
    stepsLabel: "What happens next",
    step1title: "We're putting the finishing touches on the app",
    step1body: "Embedded insurance, verified users, smooth rentals — we're making sure it's worth the wait.",
    step2title: "You'll get an early access email",
    step2body: "As a subscriber, you'll hear from us the moment the app goes live — before the general public.",
    step3title: "Start renting or earning from day one",
    step3body: "Borrow what you need, or list what you're not using. The cycle starts the moment you open the app.",
    comingSoon: "Coming soon",
    appTitle: "See what's waiting for you in the app",
    appBody: "Browse items near you, book instantly, and earn from what you own.",
    cta: "Visit relengo",
    tagline: "Access over ownership. Value keeps moving.",
    footerText: `You're receiving this because you signed up at <strong>relengo.app</strong>.`,
    unsubscribe: "Unsubscribe",
    privacy: "Privacy Policy",
    privacyUrl: "https://relengo.app/en/datenschutz",
    
  };

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${isDE ? "Dein Platz im Kreislauf ist gesichert — Relengo" : "Your spot in the cycle is saved — Relengo"}</title>
</head>
<body style="margin:0;padding:0;background-color:#F7F6F0;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F7F6F0;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;border-radius:20px;overflow:hidden;background-color:#FFFFFF;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#FDD35B;padding-top:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#FFFFFF;border-radius:16px 16px 0 0;padding:22px 32px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/rentloop-e9d37.firebasestorage.app/o/emailAssets%2Frelengo_logo_logo_2.png?alt=media&token=fa855d2c-f6ac-432d-85b8-38c11a392cd4" alt="relengo" width="140" height="auto" style="display:block;border:0;height:auto;max-width:140px;"/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO -->
          <tr>
            <td style="padding:0;background-color:#FDD35B;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="60%" valign="top" style="background-color:#FDD35B;padding:32px 16px 36px 32px;vertical-align:top;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:600;color:#66615D;text-transform:uppercase;letter-spacing:1.5px;">${content.badge}</p>
                    <h1 style="margin:0 0 14px;font-size:22px;font-weight:700;color:#1E1E1E;line-height:1.25;">${content.headline}</h1>
                    <p style="margin:0;font-size:13px;color:#3D3A34;line-height:1.65;">${greeting}, ${content.subtext}</p>
                  </td>
                  <td width="40%" style="background-image:url('https://firebasestorage.googleapis.com/v0/b/rentloop-e9d37.firebasestorage.app/o/emailAssets%2Fsnig.digital_Two_people_sitting_on_a_beach_at_sunset_framed_t_37e30c64-d7d6-44fc-89b9-e6ffbcb8a9b7_2.png?alt=media&token=0ef7d45e-f929-4ede-905c-0c0dde5ae620');background-size:cover;background-position:center 35%;height:210px;vertical-align:top;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td height="210" style="font-size:0;line-height:0;">&nbsp;</td></tr></table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- STEPS -->
          <tr>
            <td style="background-color:#FFFFFF;padding:36px 32px 0;">
              <p style="margin:0 0 24px;font-size:11px;font-weight:600;color:#B5AEA9;text-transform:uppercase;letter-spacing:1.2px;">${content.stepsLabel}</p>
              ${[
                [content.step1title, content.step1body],
                [content.step2title, content.step2body],
                [content.step3title, content.step3body],
              ].map(([title, body], i) => `
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                <tr>
                  <td width="40" valign="top" style="padding-top:1px;">
                    <table cellpadding="0" cellspacing="0" border="0"><tr>
                      <td width="32" height="32" align="center" valign="middle" style="width:32px;height:32px;background-color:#FDD35B;border-radius:50%;font-size:13px;font-weight:700;color:#1E1E1E;text-align:center;line-height:32px;">${i + 1}</td>
                    </tr></table>
                  </td>
                  <td style="padding-left:16px;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#1E1E1E;">${title}</p>
                    <p style="margin:0;font-size:13px;color:#66615D;line-height:1.6;">${body}</p>
                  </td>
                </tr>
              </table>`).join("")}
            </td>
          </tr>

          <!-- APP PREVIEW -->
          <tr>
            <td style="background-color:#FFFFFF;padding:32px 32px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="55%" valign="middle" style="padding:0 20px 0 0;vertical-align:middle;">
                    <p style="margin:0 0 6px;font-size:10px;font-weight:600;color:#B5AEA9;text-transform:uppercase;letter-spacing:1.2px;">${content.comingSoon}</p>
                    <p style="margin:0 0 10px;font-size:16px;font-weight:700;color:#1E1E1E;line-height:1.3;">${content.appTitle}</p>
                    <p style="margin:0;font-size:12px;color:#66615D;line-height:1.55;">${content.appBody}</p>
                  </td>
                  <td width="45%" valign="bottom" style="padding:0;line-height:0;font-size:0;vertical-align:bottom;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/rentloop-e9d37.firebasestorage.app/o/emailAssets%2Fapp_screenshot.png?alt=media&token=c1f8d946-7f97-4778-8a06-33442636e7a5" alt="Relengo app preview" width="224" style="display:block;width:100%;max-width:224px;height:auto;border:0;border-radius:12px 12px 0 0;"/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#FFFFFF;padding:32px 32px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <a href="https://relengo.app" style="display:inline-block;background-color:#FDD35B;color:#1E1E1E;font-size:14px;font-weight:700;text-decoration:none;padding:14px 40px;border-radius:50px;">${content.cta}</a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:12px;color:#B5AEA9;font-style:italic;">${content.tagline}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#F7F6F0;padding-bottom:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#FDD35B;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;">
                    <p style="margin:0;font-size:11px;color:#66615D;line-height:1.7;">
                      ${content.footerText}<br/>
                      Berlin, Germany &nbsp;&middot;&nbsp;
                      <a href="${unsubscribeUrl}" style="color:#3D3A34;text-decoration:underline;">${content.unsubscribe}</a>
                      &nbsp;&middot;&nbsp;
                      <a href="${content.privacyUrl}" style="color:#3D3A34;text-decoration:underline;">${content.privacy}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const { email, name, locale } = await req.json();
  if (!email) return NextResponse.json({ error: "No email" }, { status: 400 });

  const appId = process.env.ONESIGNAL_APP_ID;
  const apiKey = process.env.ONESIGNAL_API_KEY;
  const lang = locale === "de" ? "de" : "en";

  // Step 1: Create user with language code
  await fetch(`https://api.onesignal.com/apps/${appId}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Key ${apiKey}`,
    },
    body: JSON.stringify({
      properties: { language: lang },
      subscriptions: [{ type: "Email", token: email, enabled: true }],
    }),
  });

  // Step 2: Send branded email
  const unsubscribeUrl = `https://relengo.app/${lang}/unsubscribe?email=${encodeURIComponent(email)}`;
  const msgRes = await fetch("https://api.onesignal.com/notifications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Key ${apiKey}`,
    },
    body: JSON.stringify({
      app_id: appId,
      include_email_tokens: [email],
      include_unsubscribed: true,
      email_from_name: "Relengo Team",
      email_from_address: "relengoteam@relengo.app",
      email_subject: lang === "de"
        ? "Anmeldebestätigung — Relengo"
        : "Signup confirmation — Relengo",
      email_body: buildEmailHtml(lang, name || "", unsubscribeUrl),
    }),
  });

  const msgData = await msgRes.json();
  if (!msgRes.ok) return NextResponse.json({ error: msgData }, { status: 500 });

  return NextResponse.json({ success: true });
}