[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/babes18/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/babes18/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

# The World — 23 November 2026

A newspaper front page summing up the world news of Monday, 23 November 2026, in one image. Entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123).

## The stories on the page

- **COP31 collapses** — the climate summit in Antalya, Turkey, ends with no deal after the EU and about 130 other parties reject a text that omits fossil fuels.
- **Nikkei −5.06%** — an AI stock sell-off spreads across Asia; Japan's Nikkei drops 5.06% and Hong Kong hits a 19-month low.
- **Boy, 7, pulled alive in Ukraine** — rescuers pull a seven-year-old boy alive from the rubble after a Russian strike on an apartment block in Dymer, north of Kyiv, kills at least 10.
- **Tankers ablaze in Hormuz** — two supertankers hit mines and catch fire near the Strait of Hormuz.
- **Democrats win biggest House majority since 1992** — at least 258 House seats after a North Carolina recount.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.jpg` — a 1024×1024 JPEG, 263 KB — to the grader's output path as `entry.png`. A plain file copy, so both runs write the same bytes. No network, no dependencies.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
