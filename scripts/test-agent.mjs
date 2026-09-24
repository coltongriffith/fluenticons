// Checks the agent API (agent/) against the built catalogue before a deploy:
// searches that must find sensible icons, recommendations, and that every
// React component returned is one listed for that icon. Run after
// `yarn generate` (it reads app/generated/api-catalog.json).
import { findIcon, icons, recommend, search, details, code } from "../agent/icons.js";
import { reactName } from "../app/utils/iconCode.js";

let failures = 0;
const check = (ok, label) => {
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}`);
};
const names = (q, opts) => search(q, { limit: 10, ...opts }).map((h) => h.icon.pascal);

// Every component the API can return: sizes and styles listed for the icon.
const valid = new Set(
  icons.flatMap((i) => Object.entries(i.variants).flatMap(([s, v]) => v.map(([size]) => reactName(i.slug, size, s))))
);

const expect = {
  "user permissions": ["PersonLock", "PersonKey", "ShieldPerson", "PersonShield"],
  "user account security": ["PersonLock", "PersonKey", "ShieldPerson"],
  billing: ["Payment", "Receipt", "ReceiptMoney", "Wallet"],
  home: ["Home"],
  settings: ["Settings"],
  delete: ["Delete"],
  notification: ["Alert"],
  "upload file": ["DocumentArrowUp"],
  PersonLock: ["PersonLock"],
};
for (const [q, want] of Object.entries(expect)) {
  const got = names(q);
  check(want.every((w) => got.includes(w)), `search "${q}" -> ${got.slice(0, 6).join(", ")}`);
}
check(names("home")[0] === "Home" && names("PersonLock24Filled")[0] === "PersonLock", "exact names rank first");
check(search("zzqqxx").length === 0, "nonsense finds nothing");

const recs = recommend(["Home", "Projects", "Analytics", "Billing", "Settings"].map((label) => ({ label })));
check(recs.every((r) => r.component && valid.has(r.component)), `recommend -> ${recs.map((r) => r.component).join(", ")}`);
check(new Set(recs.map((r) => r.slug)).size === recs.length, "recommend has no repeats");

let returned = 0;
let bad = 0;
for (const q of ["user", "arrow", "document", "billing", "chat", "calendar", "security", "data", "settings", "mail"]) {
  for (const style of [undefined, "filled", "regular"]) {
    for (const size of [undefined, 16, 20, 24, 28, 32, 48]) {
      for (const { icon } of search(q, { style, size, limit: 20 })) {
        const c = code(icon, { style, size });
        returned++;
        if (c.error || !valid.has(c.react.component)) bad++;
      }
    }
  }
}
check(returned > 1000 && bad === 0, `${returned} filtered results all have a listed component`);
const d = details(findIcon("person_lock").icon);
check(Object.values(d.react.components).every((m) => Object.values(m).every((n) => valid.has(n))), "details components are listed");
check(findIcon("NotARealIcon") === null && findIcon("person-lock")?.icon.slug === "person_lock", "name lookup");

if (failures) {
  console.error(`${failures} agent API check(s) failed`);
  process.exit(1);
}
