// Stands in for a Discord bot: stays in the foreground and logs a heartbeat.
console.log(`loon-runtime-test running on Node.js ${process.version}`);
setInterval(() => console.log(`heartbeat ${new Date().toISOString()}`), 60_000);
