require('esbuild').build({
  entryPoints: ['./src/index.js', './src/db/connection.js', './src/routes/routes.js', './src/server/server.js', './src/token/token.js', './src/functions/login.js', './src/middleware/verifyToken.js'],
  bundle: true,
  outdir: 'out',
  outbase: 'src',
  platform: 'node',
  target: ['node10.2'],
  external: ['./node_modules/*'],
  allowOverwrite: true,
  minify: true,
}).catch(() => process.exit(1));
