import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cemex.logistic.load.am',
  appName: 'appcemex',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: "com.cemex.app",
    androidScheme: "https"
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};
 
export default config;
