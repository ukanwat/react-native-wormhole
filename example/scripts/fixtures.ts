import * as child_process from 'child_process';

child_process.execSync(
  'yarn babel fixtures/Hello.jsx -o fixtures/dist/Hello.js',
  { stdio: 'inherit' },
);