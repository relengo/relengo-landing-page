'use client';
import { useEffect } from 'react';

export default function FirebaseAnalytics() {
  useEffect(() => {
    const init = async () => {
      const { initializeApp, getApps } = await import('firebase/app');
      const { getAnalytics, isSupported } = await import('firebase/analytics');

      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      };

      const app = getApps().length
        ? getApps()[0]
        : initializeApp(firebaseConfig);

      const supported = await isSupported();
      if (supported) getAnalytics(app);
    };

    init();
  }, []);

  return null;
}
