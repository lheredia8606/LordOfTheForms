import { User } from "./User";
import { formatPhoneNumber } from "./utils/transformations";

export const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export const ProfileInformation = ({ userData }: { userData: User }) => {
  if (userData.firstName.length < 2) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }

  if (userData.firstName.length >= 2) {
    const { email, firstName, lastName, phone, city } = userData;
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <InfoRow label="Email" value={email} />
          <InfoRow label="First Name" value={firstName} />
          <InfoRow label="Last Name" value={lastName} />
          <InfoRow label="City" value={city} />
          <InfoRow label="Phone" value={formatPhoneNumber(phone)} />
        </div>
      </>
    );
  }
};
