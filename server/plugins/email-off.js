// Cloudflare's Email Address Obfuscation reads versioned CDN URLs in code
// samples ("svg-icons@1.1.341/icons/…") as email addresses, replaces them with
// "[email protected]" and a link to /cdn-cgi/l/email-protection (a 404 for
// crawlers). The email_off markers turn it off for the page body.
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("render:html", (html) => {
    html.bodyPrepend.unshift("<!--email_off-->");
    html.bodyAppend.push("<!--/email_off-->");
  });
});
