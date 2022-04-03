"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const framework_1 = require("@sapphire/framework");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new framework_1.SapphireClient({
    defaultPrefix: '!',
    regexPrefix: /^(hey +)?bot[,! ]/i,
    caseInsensitiveCommands: true,
    shards: 'auto',
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS'
    ]
});
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=index.js.map