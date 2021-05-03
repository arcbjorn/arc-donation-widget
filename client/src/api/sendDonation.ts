import { DonationData } from "@/types";

function setRequestOptions(donationData: DonationData) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(donationData),
  };
}

const apiUrl = "http://localhost:8081";

export default function (donationData: DonationData): void {
  fetch(`${apiUrl}/donate`, setRequestOptions(donationData))
    .then(async (response) => {
      const data = await response.json();

      // HTTP errors
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

      alert("Thank you for your donation!");
    })
    // Network Error + thrown by promise HTTP errors
    .catch((error) => {
      alert(`There was an error: ${error.message}`);
      console.error("There was an error:", error.message);
    });
}
