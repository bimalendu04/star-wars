const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return response;
    } else {
      return Promise.reject(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchData;
