import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.angularcapacitor.app',
  appName: 'angular-capacitor-app',
  webDir: 'dist/angular_capacitor_app/browser',
  server: {
    url: 'http://192.168.0.10:4200/',
    cleartext: true,
  },
};

export default config;
