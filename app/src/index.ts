import { makeApp } from "./makeApp";

const Host = process.env.HOST ?? "0.0.0.0";
const Port = Number(process.env.PORT ?? "7000");

const app = makeApp();

await app.listen({ host: Host, port: Port });
