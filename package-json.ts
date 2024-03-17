interface People {
  name: string;
  url?: string;
  email?: string;
}

interface Link {
  type: string;
  url: string;
}

export type Conditions = {
  import: string | Conditions;
  require: string | Conditions;
  node: string | Conditions;
  "node-addons": string | Conditions;
  types: string | Conditions;
  browser: string | Conditions;
  development: string | Conditions;
  production: string | Conditions;
  default: string | Conditions;
} & Record<string, string | null>;

export type IndexConditions = {
  ".": string | Conditions;
} & Record<string, string | null | Conditions>;

export interface PackageJSON {
  name: string;
  version: string;
  description: string;
  type: "module" | "commonjs";
  main: string;

  module: string;
  browser: string;
  esnext:
    | string
    | {
        main: string;
        browser: string;
      };
  bin: string | Record<string, string>;
  man: string;
  types: string;
  typings: string;
  files: string[];
  directories: {
    lib: string;
    bin: string;
    man: string;
    doc: string;
    example: string;
  };
  scripts: Record<string, string>;
  keywords: string[];

  license: string;

  homepage: string;

  repository: string | Link;

  author: string | People;
  bugs: {
    url: string;
    email: string;
  };
  contributors: string[] | People[];
  funding: string | Link | (string | Link)[];

  packageManager: string;

  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
  bundledDependencies: Record<string, string>;
  optionalDependencies: Record<string, string>;
  overrides: Record<string, any>;

  imports: Conditions;
  exports: string | string[] | Conditions | IndexConditions;

  config: Record<string, string>;

  engines: Record<string, string>;
  os: string[];
  cpu: string[];

  private: boolean | "true" | "false";
  publishConfig: {
    access: "public" | "restricted";
    registry: string;
    tag: string;
  };

  workspaces: string[];

  unpkg: string;
  jsdelivr: string;

  browserslist: string[];
}
