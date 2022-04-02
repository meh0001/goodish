"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
class PingCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ping',
            aliases: ['pong'],
            description: 'ping pong'
        });
    }
    async messageRun(message) {
        const msg = await message.channel.send('Ping?');
        const content = `Pong from JavaScript! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`;
        return msg.edit(content);
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=ping.js.map