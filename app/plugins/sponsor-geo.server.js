import { hasHiddenIn } from "../composables/sponsor";
import config from "~/sponsor";
import { sponsorList, sponsorSlug } from "../utils/sponsor";

// While a sponsor has `hiddenIn` (app/sponsor.ts), every page starts looking up
// the visitor's country at the top of <head>, before the page renders: from
// localStorage when known from an earlier visit (no wait at all), and from
// Cloudflare's /cdn-cgi/trace (not a Worker request). Until it's known, those
// sponsors' cards are invisible (styles.css); once it is, the ones hidden there
// get display:none, so the rest of the layout is as if they weren't there, and
// <html data-geo> shows the others. plugins/sponsor.client.js then removes them
// from the page after hydration. Gives up after 2 seconds and shows everything.
// With no sponsor using `hiddenIn`, pages get no script.
const GEO_SCRIPT = `(function(){var d=document.documentElement,K="sponsor_country",c=null,s;
function set(v){v=v||"";if(s)s.remove();if(v){s=document.createElement("style");s.textContent='[data-hidden-in~="'+v+'"]{display:none!important}';document.head.appendChild(s);}
d.setAttribute("data-country",v);d.setAttribute("data-geo","");window.__sponsorCountry=v;}
try{c=localStorage.getItem(K)}catch(e){}
if(c!==null)set(c);
window.__sponsorGeo=fetch("/cdn-cgi/trace").then(function(r){return r.text()}).then(function(t){var m=t.match(/^loc=([A-Z]{2})$/m),v=m?m[1]:"";
try{localStorage.setItem(K,v)}catch(e){}if(v!==window.__sponsorCountry)set(v);return v}).catch(function(){if(!d.hasAttribute("data-geo"))set("");return window.__sponsorCountry});
setTimeout(function(){if(!d.hasAttribute("data-geo"))set("")},2000)})();`;

export default defineNuxtPlugin(() => {
  const slugs = sponsorList(config).map((s) => sponsorSlug(s.name));
  if (!hasHiddenIn(slugs)) return;
  useHead({ script: [{ key: "sponsor-geo", innerHTML: GEO_SCRIPT, tagPriority: "critical" }] });
});
