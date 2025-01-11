import axios from 'axios';
import API_BASE_URL from '../API_Service';

// const API_BASE_URL = 'https://g23jza8mtp.ap-south-1.awsapprunner.com';

const getAuthHeader = (userToken: string|null) => {
  return {
    Authorization: `Bearer ${userToken}`,
  };
};

export const saveJob = async (jobId: number, applicantId: number |null,userToken: string |null) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/savedjob/applicants/savejob/${applicantId}/${jobId}`,
      {},
      {  headers: { Authorization: `Bearer ${userToken}` }, }
    );
    return response.data;
  } catch (error: any) {
    console.error("Failed to save job:", error.response?.data || error.message);
    throw error; // Re-throw the error to let the caller handle it
  }
};

export const applyJob = async (applicantId: number|null, jobId: number,userToken: string |null) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/applyjob/applicants/applyjob/${applicantId}/${jobId}`,
      {},
      { headers: getAuthHeader(userToken) }
    );
    return response.data;
  } catch (error: any) {
    console.error("Failed to apply for job:", error.response?.data || error.message);
    throw error; // Re-throw the error to let the caller handle it
  }
};

export const removeSavedJob = async (jobId: number, applicantId: number |null,userToken: string |null) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/savedjob/applicants/deletejob/${applicantId}/${jobId}`,
      {  headers: { Authorization: `Bearer ${userToken}` } }
    );
    return response.data;
  } catch (error: any) {
    console.error("Failed to remove job:", error.response?.data || error.message);
    throw error; // Re-throw the error to let the caller handle it
  }
};