# Visual Protocol

[English](README.md) | [中文](README.zh-CN.md)

Interactive automotive protocol learning platform. Learn car communication protocols through visual animations and interactive demos, following a recommended bottom-up learning path.

## Supported Protocols

The protocols are ordered by stack layer, starting from the data link layer up to middleware:

| Order | Protocol | Standard | Layer | Status |
|-------|----------|----------|-------|--------|
| 1 | CAN | ISO 11898 | Data Link | Available |
| 2 | Ethernet | IEEE 802.3 | Physical/Network | Available |
| 3 | DoIP | ISO 13400 | Transport | Available |
| 4 | UDS | ISO 14229 | Application | Available |
| 5 | SOME/IP | AUTOSAR | Middleware | Available |
| 6 | DDS | OMG DDS | Middleware | Available |

Additional protocol pages (LIN, MQTT, TCP, UDP) are also included.

## Features

Each protocol learning page includes:

- **Core concepts** — protocol fundamentals, architecture layers, relationships to other protocols
- **Packet analysis** — frame/message format, field descriptions, interactive field cards
- **Interactive demos** — controllable animations showing real-time protocol communication flows
- **Practical tools** — message parsers, port mappings, code examples
- **Knowledge tests** — instant quizzes to evaluate learning progress

## Tech Stack

- Pure HTML / CSS / JavaScript — zero external framework dependencies
- Responsive design with dark mode support
- Deployed as a static site on GitHub Pages
- Accessible: ARIA labels, keyboard navigation

## Quick Start

```bash
git clone https://github.com/jrtxio/visual-protocol.git
cd visual-protocol
npm install
npm start          # Start dev server with live reload
```

Or use Python's built-in HTTP server:

```bash
python -m http.server 8000 -d src
```

## Build for Deployment

```bash
npm run build      # Copies src/ to docs/ for GitHub Pages
```

## Project Structure

```
src/
  index.html              # Landing page
  assets/
    css/main.css          # Global styles
    js/main.js            # Shared scripts
  protocols/
    can/index.html        # CAN protocol
    ethernet/index.html   # Ethernet protocol
    doip/index.html       # DoIP protocol
    uds/index.html        # UDS protocol
    someip/index.html     # SOME/IP protocol
    dds/index.html        # DDS protocol
```

## License

This project is licensed under the [Apache License 2.0](LICENSE).
