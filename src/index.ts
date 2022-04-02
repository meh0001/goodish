import { SapphireClient } from '@sapphire/framework';
import config from './config';
import dotenv from 'dotenv';
dotenv.config()

const client = new SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.login(token);