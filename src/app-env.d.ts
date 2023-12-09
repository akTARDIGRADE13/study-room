/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly CATEGORY_PHYSICS: string;
  readonly CATEGORY_MATHEMATICS: string;
  readonly CATEGORY_MATHEMATICAL_OPTIMIZATION: string;
  readonly CATEGORY_PROGRAMMING: string;
  readonly CATEGORY_OTHER: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
