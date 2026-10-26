// Matching icons between fluenticons.co (Fluent), materialicons.co (Material
// Symbols) and lucideicons.co (Lucide), for the "Also in …" links on icon
// pages. Only confident matches: the same name, the same name
// after swapping each set's word for a thing (mobile → phone, close →
// dismiss), or a hand-checked pair below. Used by build-icon-data.mjs.

// Material word → Fluent word, applied word by word.
const WORDS = {
  upward: "up",
  downward: "down",
  mobile: "phone",
  smartphone: "phone",
  close: "dismiss",
  cancel: "dismiss",
  visibility: "eye",
  photo: "image",
  notifications: "alert",
  favorite: "heart",
  logout: "sign_out",
};

// Trailing Material words that only describe a variant of the same thing.
const MODIFIERS = new Set(["portrait", "landscape", "alt", "outline", "on"]);

// Material name → Fluent name, for concepts the two sets name differently.
const PAIRS = {
  arrow_back: "arrow_left",
  arrow_forward_ios: "chevron_right",
  arrow_back_ios: "chevron_left",
  expand_more: "chevron_down",
  expand_less: "chevron_up",
  content_copy: "copy",
  visibility_off: "eye_off",
  public: "globe",
  language: "globe",
  thermostat: "temperature",
  account_circle: "person_circle",
  menu: "navigation",
  more_vert: "more_vertical",
  more_horiz: "more_horizontal",
  download: "arrow_download",
  upload: "arrow_upload",
  refresh: "arrow_clockwise",
  sync: "arrow_sync",
  undo: "arrow_undo",
  redo: "arrow_redo",
  check: "checkmark",
  check_circle: "checkmark_circle",
  help: "question_circle",
  filter_list: "filter",
  photo_camera: "camera",
  videocam: "video",
  description: "document",
  attach_file: "attach",
  schedule: "clock",
  event: "calendar",
  location_on: "location",
  shopping_cart: "cart",
  dark_mode: "weather_moon",
  light_mode: "weather_sunny",
  lock: "lock_closed",
  error: "error_circle",
  play_arrow: "play",
  skip_previous: "previous",
  skip_next: "next",
  volume_up: "speaker_2",
  volume_off: "speaker_mute",
  label: "tag",
  group: "people",
  groups: "people_team",
  apartment: "building",
  security: "shield",
  verified_user: "shield_checkmark",
  thumb_up: "thumb_like",
  thumb_down: "thumb_dislike",
  mood: "emoji",
  chat_bubble: "chat",
  zoom_in: "zoom_in",
  remove: "subtract",
  login: "arrow_enter",
  fullscreen: "full_screen_maximize",
  fullscreen_exit: "full_screen_minimize",
  grid_view: "grid",
  push_pin: "pin",
  emoji_events: "trophy",
  card_giftcard: "gift",
  payments: "money",
  account_balance_wallet: "wallet",
  credit_card: "payment",
  bar_chart: "data_bar_vertical",
  pie_chart: "data_pie",
  trending_up: "data_trending",
  build: "wrench",
  science: "beaker",
  flight: "airplane",
  directions_car: "vehicle_car",
  local_cafe: "drink_coffee",
  restaurant: "food",
  sports_esports: "games",
  computer: "desktop",
  laptop: "laptop",
  tablet: "tablet",
  battery_full: "battery_full",
  bolt: "flash",
  auto_awesome: "sparkle",
  track_changes: "target",
  alarm: "clock_alarm",
  sticky_note_2: "note",
  content_paste: "clipboard",
  picture_as_pdf: "document_pdf",
  inventory_2: "box",
  inbox: "mail_inbox",
  rss_feed: "rss",
  newspaper: "news",
  explore: "compass_northwest",
};

// Both directions: { materialToFluent: { [materialSlug]: fluentSlug }, fluentToMaterial }.
export function matchIcons(fluentIcons, materialIcons) {
  const fluent = new Set(fluentIcons.filter((i) => i.filled || i.regular).map((i) => i.slug));
  const swap = (slug) => slug.split("_").map((w) => WORDS[w] ?? w).join("_");
  const materialToFluent = {};
  // Most used Material icons first, so a Fluent icon links back to the best known match.
  for (const { slug } of [...materialIcons].sort((a, b) => (b.popularity || 0) - (a.popularity || 0))) {
    // The full name, then without trailing modifiers (help_outline → help).
    const bases = [slug];
    const words = slug.split("_");
    while (words.length > 1 && MODIFIERS.has(words.at(-1))) {
      words.pop();
      bases.push(words.join("_"));
    }
    const match = bases.flatMap((b) => [PAIRS[b], b, swap(b)]).find((c) => c && fluent.has(c));
    if (match) materialToFluent[slug] = match;
  }
  const fluentToMaterial = {};
  for (const [m, f] of Object.entries(materialToFluent)) {
    // An exact name match wins over a synonym; otherwise the most used Material icon.
    if (!fluentToMaterial[f] || m === f) fluentToMaterial[f] = m;
  }
  return { materialToFluent, fluentToMaterial };
}

// ---- Lucide ------------------------------------------------------------------
// Lucide name → Fluent or Material name, for concepts the sets name
// differently. Tried before the plain name, so `check` → Fluent's checkmark.
const LUCIDE_PAIRS = {
  fluent: {
    x: "dismiss", circle_x: "dismiss_circle", house: "home", user: "person", users: "people", user_plus: "person_add",
    trash: "delete", trash_2: "delete", pencil: "edit", plus: "add", minus: "subtract", check: "checkmark",
    circle_check: "checkmark_circle", circle_help: "question_circle", circle_alert: "error_circle", triangle_alert: "warning",
    bell: "alert", lock: "lock_closed", lock_open: "lock_open", file: "document", file_text: "document_text",
    smartphone: "phone", phone: "call", sun: "weather_sunny", moon: "weather_moon", zap: "flash", sparkles: "sparkle",
    printer: "print", plane: "airplane", car: "vehicle_car", coffee: "drink_coffee", inbox: "mail_inbox",
    newspaper: "news", compass: "compass_northwest", shield_check: "shield_checkmark", building_2: "building",
    menu: "navigation", ellipsis: "more_horizontal", ellipsis_vertical: "more_vertical", log_out: "sign_out",
    log_in: "arrow_enter", external_link: "open", refresh_cw: "arrow_clockwise", rotate_cw: "arrow_clockwise",
    rotate_ccw: "arrow_counterclockwise", undo: "arrow_undo", redo: "arrow_redo", download: "arrow_download",
    upload: "arrow_upload", map_pin: "location", shopping_cart: "cart", credit_card: "payment",
    message_circle: "chat", message_square: "chat", layout_grid: "grid", chart_bar: "data_bar_vertical",
    chart_pie: "data_pie", trending_up: "data_trending", flask_conical: "beaker", gamepad_2: "games",
    utensils: "food", monitor: "desktop", volume_2: "speaker_2", volume_x: "speaker_mute", skip_forward: "next",
    skip_back: "previous", alarm_clock: "clock_alarm", sticky_note: "note", maximize: "full_screen_maximize",
    minimize: "full_screen_minimize", thumbs_up: "thumb_like", thumbs_down: "thumb_dislike", smile: "emoji",
    clipboard: "clipboard", image: "image", mail: "mail",
  },
  material: {
    x: "close", circle_x: "cancel", house: "home", user: "person", users: "group", user_plus: "person_add",
    trash: "delete", trash_2: "delete", pencil: "edit", plus: "add", minus: "remove", circle_check: "check_circle",
    circle_help: "help", circle_alert: "error", triangle_alert: "warning", bell: "notifications", eye: "visibility",
    eye_off: "visibility_off", heart: "favorite", zap: "bolt", sun: "light_mode", moon: "dark_mode",
    sparkles: "auto_awesome", ellipsis: "more_horiz", ellipsis_vertical: "more_vert", copy: "content_copy",
    clipboard: "content_paste", log_out: "logout", log_in: "login", refresh_cw: "refresh", external_link: "open_in_new",
    map_pin: "location_on", message_circle: "chat_bubble", camera: "photo_camera", video: "videocam", clock: "schedule",
    chart_bar: "bar_chart", chart_pie: "pie_chart", flask_conical: "science", gamepad_2: "sports_esports",
    utensils: "restaurant", monitor: "computer", volume_2: "volume_up", volume_x: "volume_off", skip_forward: "skip_next",
    skip_back: "skip_previous", alarm_clock: "alarm", maximize: "fullscreen", minimize: "fullscreen_exit",
    thumbs_up: "thumb_up", thumbs_down: "thumb_down", smile: "mood", plane: "flight", car: "directions_car",
    coffee: "local_cafe", file_text: "description", building_2: "apartment", layout_grid: "grid_view",
    filter: "filter_list", pin: "push_pin", trophy: "emoji_events", gift: "card_giftcard",
    wallet: "account_balance_wallet", wrench: "build", rss: "rss_feed", play: "play_arrow", globe: "public",
  },
};

// Both directions between Lucide and Fluent ("fluent") or Material
// ("material"): { lucideTo: { [lucideSlug]: slug }, toLucide: { [slug]: lucideSlug } }.
// Candidates for each Lucide icon: its name and its older names (aliases),
// each also without a trailing number (trash_2 → trash).
export function matchLucide(lucideIcons, otherIcons, kind) {
  const other = new Set(otherIcons.filter((i) => i.filled || i.regular).map((i) => i.slug));
  const pairs = LUCIDE_PAIRS[kind];
  const lucideTo = {};
  for (const icon of lucideIcons) {
    const names = [icon.slug, ...(icon.aliases || []).map((a) => a.replace(/-/g, "_"))];
    const bases = names.flatMap((n) => (/_\d+$/.test(n) ? [n, n.replace(/_\d+$/, "")] : [n]));
    const match = bases.flatMap((b) => [pairs[b], b]).find((c) => c && other.has(c));
    if (match) lucideTo[icon.slug] = match;
  }
  const toLucide = {};
  for (const [l, o] of Object.entries(lucideTo)) {
    // An exact name match wins; otherwise the first Lucide icon (A–Z).
    if (!toLucide[o] || l === o) toLucide[o] = l;
  }
  return { lucideTo, toLucide };
}

// The same icon on another site: { [mySlug]: theirSlug }, for sites of kind
// "fluent", "material" or "lucide".
export function matchSites(mine, myKind, theirs, theirKind) {
  if (myKind === "lucide") return matchLucide(mine, theirs, theirKind).lucideTo;
  if (theirKind === "lucide") return matchLucide(theirs, mine, myKind).toLucide;
  return myKind === "material" ? matchIcons(theirs, mine).materialToFluent : matchIcons(mine, theirs).fluentToMaterial;
}
