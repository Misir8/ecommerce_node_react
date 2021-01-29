import client from "redis";
import Redis from "ioredis";

const redis_url = "redis://127.0.0.1";
export const redisClient= client.createClient(redis_url);
const redis = new Redis(redis_url);

