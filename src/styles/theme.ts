export type ThemeMode = "light" | "dark";

// ---------------------------------------------------------------------------
// Contracts – every mode must provide these tokens. Light and dark are peers;
// neither is derived from the other.
// ---------------------------------------------------------------------------

export type BadgeCategory =
  "historical" | "museum" | "park" | "attraction" | "landmark";

export interface ThemeColors {
  // Brand
  primary: string;
  primaryHover: string;
  primarySoft: string;
  contrast: string;
  contrastHover: string;
  accent: string;

  // Surfaces
  background: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  borderLight: string;

  // Text
  text: {
    heading: string;
    body: string;
    muted: string;
    placeholder: string;
    onPrimary: string;
    onContrast: string;
  };

  // Category badges on place cards
  badge: Record<BadgeCategory, { background: string; text: string }>;

  // Overlays
  overlay: string;
  overlaySoft: string;
}

export interface ThemeShadows {
  header: string;
  card: string;
  cardHover: string;
  search: string;
}

const lightColors: ThemeColors = {
  // Brand
  primary: "#1268e9", // Search button, "Mate" in the logo, links, active nav text
  primaryHover: "#0f57c5",
  primarySoft: "#e6f0fd", // Active nav pill background
  contrast: "#152f4c", // Strong fill: active Light/Dark toggle, hero heading
  contrastHover: "#0e2238",
  accent: "#fbbf24", // Sun / moon on the active theme segment

  // Surfaces
  background: "#f8fafc", // Page background
  surface: "#ffffff", // Header, cards, footer, search bar
  surfaceMuted: "#f1f5f9", // Language / Light-Dark toggle pill background
  border: "#e2e8f0", // Card and input borders
  borderLight: "#f1f5f9", // Footer / header divider

  // Text
  text: {
    heading: "#0f2440", // Section headings, card titles, logo "Travel"
    body: "#475569", // Paragraphs on the details page
    muted: "#64748b", // Card subtitles, footer links, tagline
    placeholder: "#94a3b8",
    onPrimary: "#ffffff", // Text on primary buttons
    onContrast: "#ffffff", // Text on contrast fills
  },

  // Category badges on place cards
  badge: {
    historical: { background: "#fdeed2", text: "#b45309" },
    museum: { background: "#e8d9fe", text: "#6d28d9" },
    park: { background: "#d1f0d6", text: "#15803d" },
    attraction: { background: "#cfe0fe", text: "#1d4ed8" },
    landmark: { background: "#fcdcda", text: "#b91c1c" },
  },

  // Overlays
  overlay: "rgba(255, 255, 255, 0.85)", // Favourite (heart) button on card images
  overlaySoft: "rgba(255, 255, 255, 0.6)", // Hero text panel
};

const darkColors: ThemeColors = {
  // Brand – primary is lifted a step for contrast on dark surfaces
  primary: "#3b82f6",
  primaryHover: "#60a5fa",
  primarySoft: "#172b4d",
  contrast: "#e2e8f0", // Near-white fill where light mode uses navy
  contrastHover: "#f8fafc",
  accent: "#f59e0b", // Deeper amber so it reads on the near-white segment

  // Surfaces
  background: "#0b1220",
  surface: "#111a2b",
  surfaceMuted: "#1b2536",
  border: "#243044",
  borderLight: "#1b2536",

  // Text
  text: {
    heading: "#f1f5f9",
    body: "#cbd5e1",
    muted: "#94a3b8",
    placeholder: "#64748b",
    onPrimary: "#ffffff",
    onContrast: "#0f2440",
  },

  // Category badges – deep tinted background, pastel text
  badge: {
    historical: { background: "#3d2a0f", text: "#fbbf24" },
    museum: { background: "#2e1f5e", text: "#c4b5fd" },
    park: { background: "#11341f", text: "#86efac" },
    attraction: { background: "#172b4d", text: "#93c5fd" },
    landmark: { background: "#3f1717", text: "#fca5a5" },
  },

  // Overlays
  overlay: "rgba(15, 23, 42, 0.75)",
  overlaySoft: "rgba(15, 23, 42, 0.5)",
};

const lightShadows: ThemeShadows = {
  header: "0 0.0625rem 0.1875rem rgba(15, 36, 64, 0.08)",
  card: "0 0.0625rem 0.1875rem rgba(15, 36, 64, 0.06)",
  cardHover: "0 0.5rem 1.25rem rgba(15, 36, 64, 0.12)",
  search: "0 0.5rem 1.5rem rgba(15, 36, 64, 0.14)",
};

const darkShadows: ThemeShadows = {
  header: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.4)",
  card: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.35)",
  cardHover: "0 0.5rem 1.25rem rgba(0, 0, 0, 0.5)",
  search: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.55)",
};

// ---------------------------------------------------------------------------
// Tokens shared by both modes
// ---------------------------------------------------------------------------

const base = {
  fonts: {
    heading: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.15, // Hero / page titles
    snug: 1.3, // Section headings, card titles
    normal: 1.5, // Body copy
    relaxed: 1.65, // Long paragraphs on the details page
  },

  // Measured from the list mockup: xs nav/links/placeholder, s card titles
  // and hero intro, m section headings, l logo, xxl hero title
  fontSizes: {
    xs: "0.875rem",
    s: "1rem",
    m: "1.25rem",
    l: "1.5rem",
    xl: "1.875rem",
    xxl: "2.625rem",
  },

  spacing: {
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "0.75rem",
    m: "1rem",
    l: "1.5rem",
    xl: "2rem",
  },

  // Measured from the mockups (list page rendered at ~1536px wide)
  sizes: {
    headerHeight: "3.75rem",
    heroHeight: "16.875rem",
    searchBarHeight: "3rem",
    buttonHeight: "2.5rem", // Search button
    navItemHeight: "2.5rem", // Mobile nav links and the burger stripe/button
    iconButtonSize: "2rem", // Heart button
    pillHeight: "2.25rem", // Language / Light-Dark toggle pills
    cardImageHeight: "6.25rem", // Country, city and place cards on the home page
    cardImageHeightLarge: "10rem", // Place cards on the details page
    detailImageHeight: "21.25rem", // Hero image on the details page
    mapHeight: "21.875rem",
    flagWidth: "1.75rem", // Flag on country cards
    flagWidthLarge: "3.5rem", // Flag next to the page title on details pages
  },

  maxWidths: {
    content: "78.125rem",
    heroText: "23.75rem", // Hero heading / intro paragraph column
  },

  radii: {
    s: "0.375rem", // Badges
    m: "0.625rem", // Buttons, nav pills, cards
    l: "0.875rem", // Search bar, hero image, map
    pill: "9999rem", // Light / Dark toggle
    round: "50%", // Heart button
  },

  transitions: {
    fast: "150ms ease",
    normal: "250ms ease",
  },

  breakpoints: {
    mobile: "30rem",
    tablet: "48rem",
    desktop: "64rem",
  },
};

type Base = typeof base;

// ---------------------------------------------------------------------------
// Themes
// ---------------------------------------------------------------------------

export interface Theme extends Base {
  mode: ThemeMode;
  colors: ThemeColors;
  shadows: ThemeShadows;
}

export const lightTheme: Theme = {
  ...base,
  mode: "light",
  colors: lightColors,
  shadows: lightShadows,
};

export const darkTheme: Theme = {
  ...base,
  mode: "dark",
  colors: darkColors,
  shadows: darkShadows,
};

export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

// Default theme (light) – keeps existing imports working.
export const theme = lightTheme;
