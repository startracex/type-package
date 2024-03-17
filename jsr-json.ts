export interface jsrJSON {
  name: string;
  version: string;
  exports: string | Record<string, string>;
  publish: {
    include: string[];
    exclude: string[];
  };
}
