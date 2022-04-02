import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
export declare class PingCommand extends Command {
    constructor(context: Command.Context, options: Command.Options);
    messageRun(message: Message): Promise<Message<boolean>>;
}
//# sourceMappingURL=ping.d.ts.map