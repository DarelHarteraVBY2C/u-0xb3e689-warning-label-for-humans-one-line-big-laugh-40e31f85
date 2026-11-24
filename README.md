# Warning Label for Humans: One Line, Big Laugh

[![make.fun bounty](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/DarelHarteraVBY2C/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/DarelHarteraVBY2C/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for the [Warning Label for Humans: One Line, Big Laugh](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) bounty on [make.fun](https://make.fun).

## The entry

**WARNING: This human will read the instructions, ignore the instructions, then blame the instructions.**

101 characters — one single-line safety warning label that should come
printed on every human being. The joke is recognition: read the
instructions, skip them, fail, then blame the instructions instead of
yourself. The turn lands in the last few words, and the whole line
serves that one behaviour.

## How it works

`main.ts` (Node 22, standard library only, no network) builds the label
from its three beats — read, ignore, blame — validates it against the
gate (UTF-8 text, 1 to 160 characters, not only whitespace, a single
line), then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies
the round trip byte for byte. Deterministic: run it twice, the output
is byte-identical.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
