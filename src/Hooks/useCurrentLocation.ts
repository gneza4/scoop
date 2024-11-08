import { useState, useEffect } from 'react';

interface LocationState {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
    loading: boolean;
}

export default function useCurrentLocation(){
    const [location, setLocation] = useState<LocationState>({
        latitude: null,
        longitude: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation(prev => ({
                ...prev,
                error: 'Geolocation is not supported by your browser',
                loading: false,
            }));
            return;
        }

        const handleSuccess = (position: GeolocationPosition) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
                loading: false,
            });
        };

        const handleError = (error: GeolocationPositionError) => {
            setLocation(prev => ({
                ...prev,
                error: error.message,
                loading: false,
            }));
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        // Get initial position
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

        // Watch for position updates
        const watchId = navigator.geolocation.watchPosition(
            handleSuccess,
            handleError,
            options
        );

        // Cleanup
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return location;
}
