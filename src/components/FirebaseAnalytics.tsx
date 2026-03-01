'use client';
import { useEffect } from 'react';

export default function FirebaseAnalytics() {
  useEffect(() => {
    const init = async () => {
      const { getApps } = await import('firebase/app');
      const { getAnalytics } = await import('firebase/analytics');
      const apps = getApps();
      if (apps.length > 0) {
        getAnalytics(apps[0]);
      }
    };
    init();
  }, []);

  return null;
}
