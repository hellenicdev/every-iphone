# Every iPhone Ever Made

[![Live demo](https://img.shields.io/badge/demo-live-19336e?style=flat-square)](https://hellenicdev.eu/every-iphone/) [![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

19 years. 52 models. 2.3 billion sold. An interactive visual history of every iPhone, from 2007 to 2026.

**Live site:** <https://hellenicdev.eu/every-iphone/>

## Features

- Scroll-driven "parade" of every model, in order
- Price history chart with hover details
- The "graveyard" of discontinued features
- Colour history for every generation
- Filterable collection with a detail panel for every model
- Side-by-side comparison of any two iPhones

## Run locally

No build step. Serve the folder with any static server:

```sh
git clone https://github.com/hellenicdev/every-iphone.git
cd every-iphone
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Tech

- HTML5, CSS3 and vanilla JavaScript
- Inline SVG charts, no chart library

## License

MIT. See [LICENSE](LICENSE).

## Credits

Made by [HellenicDev](https://hellenicdev.eu). More projects at <https://hellenicdev.eu>.

If you enjoy it, you can support the work here:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S31XB030)
