// Matching icons between fluenticons.co (Fluent) and materialicons.co
// (Material Symbols), for the "Also in Fluent" / "Also in Material Symbols"
// links on icon pages. Only confident matches: the same name, the same name
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
