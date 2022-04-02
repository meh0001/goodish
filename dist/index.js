"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const framework_1 = require("@sapphire/framework");
require("./config");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new framework_1.SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=index.js.map