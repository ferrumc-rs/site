/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GH_TOKEN?: string;
  readonly USE_MOCK_DATA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
