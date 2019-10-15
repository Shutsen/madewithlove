const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

const fetchCoordinates = async () => {
  try {
      const options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      }
      const { coords } = await getCurrentPosition(options);
      const { latitude, longitude } = coords;
      return { lat: latitude, lng: longitude };
  } catch (error) {
      console.error('Timed out probably', error);
      return false;
  }
};

const getClientPosition = async () => {
  // get client's current location
  let currentPosition = await fetchCoordinates()

  if (!currentPosition) {
    // no client location, default to Brussels
    currentPosition = { lat: 50.850346, lng: 4.351721 };
  }
  return currentPosition
}

export default getClientPosition;