// Runs before every page (public/_routes.json sends pages here; assets skip it).
// A sponsor with `hiddenIn` (app/sponsor.ts) isn't shown to visitors in those
// countries: its cards (data-hidden-in="PL …") are hidden in the HTML, and the
// country goes on <html data-country> so the browser then removes them
// (app/plugins/sponsor.client.js). Hidden, not removed here, so the page still
// matches what Vue hydrates; a hidden card is never on screen, so it counts no
// impressions. Anything that isn't a page, or any error, passes through
// unchanged.
//
// COUNTRY_OVERRIDE is only for local testing:
//   npx wrangler pages dev dist --binding COUNTRY_OVERRIDE=PL
export async function onRequest({ request, next, env }) {
  const response = await next();
  try {
    const country = env.COUNTRY_OVERRIDE || request.cf?.country;
    if (!country || !(response.headers.get("content-type") || "").includes("text/html")) return response;
    return new HTMLRewriter()
      .on("html", { element: (el) => el.setAttribute("data-country", country) })
      .on("[data-hidden-in]", {
        element(el) {
          if (el.getAttribute("data-hidden-in").split(" ").includes(country)) el.setAttribute("style", "display:none !important");
        },
      })
      .transform(response);
  } catch {
    return response;
  }
}
