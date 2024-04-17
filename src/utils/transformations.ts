export const capitalize = (strToCapitalize: string) => {
  if (!strToCapitalize) return "";
  return (
    strToCapitalize.charAt(0).toUpperCase() +
    strToCapitalize.slice(1).toLowerCase()
  );
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return "";
  const groups = phoneNumber.match(/.{1,2}/g);
  return groups ? groups.join("-") : "";
};
