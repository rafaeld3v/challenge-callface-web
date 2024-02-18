export function formatPhoneNumber(phoneNumber: string) {
  // Remove all characters that are not digits
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Check if the phone number is valid
  if (cleanedNumber.length !== 11) {
    return phoneNumber;
  }

  // Format the phone number
  const areaCode = cleanedNumber.substring(0, 2);
  const centralPart = cleanedNumber.substring(2, 7);
  const finalPart = cleanedNumber.substring(7, 11);

  return `(${areaCode}) ${centralPart}-${finalPart}`;
}
