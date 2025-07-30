import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => setLocation(pos.coords),
      err => console.warn(err),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return location;
}