const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    lookAtLat: 37.815,
    lookAtLng: -122.4775,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 360,
    panoMarkerDistance: 10000,
    layers: [
        {
            name: 'default',
            visible: true,
            markers: [
                {
                    id: 501,
                    name: '<p>Main Event Gilbert</p>',
                    address: '1735 S Santan Village Pkwy, Gilbert, AZ 85295',
                    icon: 'search',
                },
                {
                    id: 500,
                    name: '<p>Gun Club 82 Gilbert</p>',
                    address: '1695 S Santan Village Pkwy #100, Gilbert, AZ 85295',
                    icon: 'poi',
                }
            ]
        }
    ]
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

const setZoomMin = (e) => {
    zoomMax = document.getElementById('zoomMax');
    aerialSphere.setZoomRange(Number(e.value), Number(zoomMax.value));
}

const setZoomMax = (e) => {
    zoomMin = document.getElementById('zoomMin');
    aerialSphere.setZoomRange(Number(zoomMin.value), Number(e.value));
}