export const themeModes = ["light", "dark", "mixed"] as const;
export type ThemeMode = (typeof themeModes)[number];

export const homeVariants = ["split-panel", "media-hero", "guide-portal", "visual-cover", "reference-desk"] as const;
export const hubVariants = ["card-grid", "grouped-list", "compact-index"] as const;
export const contentVariants = ["reading-right-rail", "reading-full", "wide-reference"] as const;
export const workspaceVariants = ["full-width", "panelled"] as const;

export type HomeVariant = (typeof homeVariants)[number];
export type HubVariant = (typeof hubVariants)[number];
export type ContentVariant = (typeof contentVariants)[number];
export type WorkspaceVariant = (typeof workspaceVariants)[number];

export interface ThemeTokens {
  pageBg: string;
  surface1: string;
  surface2: string;
  surface3: string;
  surfaceInverse: string;
  textPrimary: string;
  textMuted: string;
  textInverse: string;
  textOnAccentPrimary: string;
  textLink: string;
  focusRing: string;
  line: string;
  lineStrong: string;
  accentPrimary: string;
  accentSecondary: string;
  accentBright: string;
  statusConfirmed: string;
  statusCaution: string;
  statusUnknown: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  navigation?: "header" | "wiki-sidebar";
  tokens: ThemeTokens;
  typography: {
    headingFamily: string;
    bodyFamily: string;
    headingWeight: 700 | 800 | 900;
  };
  shape: {
    radius: string;
    borderWidth: string;
    shadow: string;
    hoverLift: string;
  };
  density: "compact" | "comfortable";
  background: {
    mode: "solid" | "gradient" | "texture" | "image";
    assetId?: string;
    overlay: number;
    position: string;
  };
  variants: {
    home: HomeVariant;
    hub: HubVariant;
    content: ContentVariant;
    workspace: WorkspaceVariant;
  };
  decoration: {
    motif: "none" | "lines" | "dots" | "grid" | "organic";
    intensity: "low" | "medium";
  };
}

/**
 * Visual config for Probably Stolen - Cyberpunk Shopkeeper Sim.
 * Every Collector screenshot is a dark, neon-lit pixel scene, so the site reads
 * as a dark station terminal: near-black panels, a cyan instruction colour and a
 * magenta warning colour lifted from the game's signage. Body text stays high
 * contrast because most answers are read as tables and ordered procedures.
 */
export const theme: ThemeConfig = {
  mode: "dark",
  navigation: "wiki-sidebar",
  tokens: {
    pageBg: "#0c1016",
    surface1: "#141b25",
    surface2: "#1c2531",
    surface3: "#27323f",
    surfaceInverse: "#05070a",
    textPrimary: "#e6edf5",
    textMuted: "#93a4b8",
    textInverse: "#0c1016",
    textOnAccentPrimary: "#04140f",
    textLink: "#4ee3cf",
    focusRing: "#4ee3cf",
    line: "#263140",
    lineStrong: "#3a4a5d",
    accentPrimary: "#4ee3cf",
    accentSecondary: "#ff4d6d",
    accentBright: "#ffd166",
    statusConfirmed: "#4ee3cf",
    statusCaution: "#ffd166",
    statusUnknown: "#93a4b8",
  },
  typography: {
    headingFamily:
      '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    bodyFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    headingWeight: 700,
  },
  shape: { radius: "6px", borderWidth: "1px", shadow: "none", hoverLift: "0px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "visual-cover",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "grid", intensity: "low" },
};