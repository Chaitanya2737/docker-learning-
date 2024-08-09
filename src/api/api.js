import axios from 'axios';

const getProduct = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/data`);
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;  // Re-throw the error so it can be handled in the calling function
  }
};

export { getProduct };
