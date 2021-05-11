import { DonationData, DonationResponse } from "@/types";
import config from "@/env.config";

function setRequestOptions(donationData: DonationData) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(donationData),
  };
}

export default async function (donationData: DonationData): Promise<void> {
  try {
    const response = await fetch(
      `${config.apiUrl}/donate`,
      setRequestOptions(donationData)
    );
    const data: DonationResponse = await response.json();

    // HTTP errors
    if (!response.ok) {
      const message = (data && data.error) || response.status.toString();
      throw new Error(message);
    }

    alert("Thank you for your donation!");
  } catch (error) {
    // Network Error + thrown by promise HTTP errors
    console.error("There was an error:", error.message);
    alert(`There was an error: ${error.message}`);
  }
}
