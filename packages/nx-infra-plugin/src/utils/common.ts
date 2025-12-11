import os from 'os';

export function isWindowsOS() {
  console.log('Detected OS platform:', os.platform());

  return os.platform() === 'win32';
}
