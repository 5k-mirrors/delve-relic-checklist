# Tech details

## URL params

We use [react-url-query](https://github.com/pbeshai/react-url-query) to export & import user settings (from localstore) via URL params. We choose an [LZ-based compression lib](https://github.com/pieroxy/lz-string/) as it's more efficient and random-looking as other simple encodings (e.g. Base64).

Related PRs:
- https://github.com/5k-mirrors/delve-relic-checklist/pull/12
- https://github.com/5k-mirrors/delve-relic-checklist/pull/28
