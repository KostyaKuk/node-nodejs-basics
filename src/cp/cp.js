import { fork } from 'child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin, stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
   const childProcess = fork(
    path.join(__dirname, 'files', 'script.js'),
    args,
    { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] }
  );

  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,4]);
