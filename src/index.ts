import { SapphireClient } from '@sapphire/framework';
import dotenv from 'dotenv';
dotenv.config()

const client = new SapphireClient({
    defaultPrefix: '!',
    caseInsensitiveCommands: true,
    intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.login(process.env.DISCORD_TOKEN);