export const DENOLIB_JSON_URL = (scope: string, repo: string) =>
  `https://raw.githubusercontent.com/${scope}/${repo}/master/denolib.json`;

export const badgeConfig = {
  label: "DenoLib",
  query: "$.name",
  style: "flat-square"
};
