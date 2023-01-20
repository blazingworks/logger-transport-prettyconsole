<div align="center">

# @blazingworks/logger-transport-prettyconsole

![Lines of code](https://img.shields.io/tokei/lines/github/blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![npm Downloads](https://img.shields.io/npm/dy/@blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![npm Version](https://img.shields.io/npm/v/@blazingworks/logger-transport-prettyconsole?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/blazingworks/logger-transport-prettyconsole?style=for-the-badge)

</div>

🔌 Pretty Console Transport for @blazingworks/logger

## Tech Stack

-   [TypeScript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

## Installation

```bash
npm install @blazingworks/logger @blazingworks/logger-transport-prettyconsole
yarn add @blazingworks/logger @blazingworks/logger-transport-prettyconsole
pnpm add @blazingworks/logger @blazingworks/logger-transport-prettyconsole
```

## Usage

### TypeScript

```typescript
import { Logger } from "@blazingworks/logger";
import PrettyConsoleTransport from "@blazingworks/logger-transport-prettyconsole";

const logger = new Logger({
    transports: [
        {
            transport: new PrettyConsoleTransport({}),
        },
    ],
});
```

### JavaScript

```javascript
const { Logger } = require("@blazingworks/logger");
const PrettyConsoleTransport = require("@blazingworks/logger-transport-prettyconsole");

const logger = new Logger({
    transports: [
        {
            transport: new PrettyConsoleTransport({}),
        },
    ],
});
```

## How to report issues/questions

-   For general issues/questions, [open an issue](https://github.com/blazingworks/logger-transport-prettyconsole/issues)
-   For security issues, please email [security@blazing.works](mailto:security@blazing.works)
-   For important questions, please email [opensource@blazing.works](mailto:opensource@blazing.works)

## License

As this is an open-source project, support is limited. Please use [GitHub Issues](https://github.com/blazingworks/logger-transport-prettyconsole/issues) for community support or contact [opensource@blazing.works](mailto:opensource@blazing.works) for very important matters.

**ℹ️ All code in this repository is licensed under the [MIT License](LICENSE.md).**
