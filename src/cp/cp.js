import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const scriptFile = path.resolve(__dirname, 'files', 'script.js');

  const childProcess = spawn(`node`, [scriptFile, ...args], {
    stdio: [process.stdin, 'pipe'],
  });

  childProcess.stdout.on('data', (data) =>
    console.log(`Received data from child process:\n${data}`)
  );

  childProcess.on('spawn', () => console.log('Child process created!'));
};

// Put your arguments in function call to test this functionality
spawnChildProcess([5, 69, 78, 'test', '87']);
