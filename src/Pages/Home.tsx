import 'mapbox-gl/dist/mapbox-gl.css';
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import { MapPin } from 'lucide-react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import config from "../../env";
// import useUpdateViewState from "../Hooks/useChangeMapViewOnLocationChange";

function Home() {
    const QUEENS_COLLEGE = {
        longitude: -73.7949,
        latitude: 40.7282,
    };
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [viewState, setViewState] = useState({
        longitude: QUEENS_COLLEGE.longitude,
        latitude: QUEENS_COLLEGE.latitude,
        zoom: 13
    });
    // useUpdateViewState(QUEENS_COLLEGE,setViewState)

    return (
        <div className="min-h-screen flex flex-col">
            {/*<Header />*/}
            <main className="flex-1 relative">
                <Map
                    {...viewState}
                    onMove={evt => setViewState(evt.viewState)}
                    mapStyle="mapbox://styles/mapbox/light-v11"
                    mapboxAccessToken={config.MAPBOX_TOKEN}
                    style={{ width: '100%', height: 'calc(100vh - 64px)' }}
                >
                    <NavigationControl position="top-right" />

                    {/* User's current location marker */}
                    {/*{location.latitude && location.longitude && (*/}
                    {/*    <Marker*/}
                    {/*        longitude={location.longitude}*/}
                    {/*        latitude={location.latitude}*/}
                    {/*        anchor="bottom"*/}
                    {/*    >*/}
                    {/*        <div className="relative">*/}
                    {/*            <MapPin className="w-6 h-6 text-blue-600" />*/}
                    {/*            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">*/}
                    {/*                Your Location*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </Marker>*/}
                    {/*)}*/}

                    {/* Queens College marker */}
                    <Marker
                        longitude={QUEENS_COLLEGE.longitude}
                        latitude={QUEENS_COLLEGE.latitude}
                        anchor="bottom"
                    >
                        <div className="relative">
                            <MapPin className="w-6 h-6 text-qc-red" />
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                                Queens College
                            </div>
                        </div>
                    </Marker>
                </Map>

                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                    <button
                        className="map-overlay-button bg-eco-green text-white hover:bg-eco-dark"
                        onClick={() => setIsBottomSheetOpen(true)}
                    >
                        Find a Ride
                    </button>
                    <button
                        className="map-overlay-button border-2 border-eco-green text-eco-dark"
                        onClick={() => setIsBottomSheetOpen(true)}
                    >
                        Offer a Ride
                    </button>
                </div>

                {/*{location.error && (*/}
                {/*    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md z-10">*/}
                {/*        {location.error}*/}
                {/*    </div>*/}
                {/*)}*/}
            </main>

            {/*<RideBottomSheet*/}
            {/*    isOpen={isBottomSheetOpen}*/}
            {/*    onClose={() => setIsBottomSheetOpen(false)}*/}
            {/*/>*/}

        </div>
    );
}

export default observer(Home);
