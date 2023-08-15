import { Server } from './src/server';
import dotenv from 'dotenv';

dotenv.config();

const todoApi = new Server();
todoApi.init();
