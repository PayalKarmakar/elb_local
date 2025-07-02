import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ correct named import

import customFetch from "@/utils/customFetch";

const GoogleLoginButton = ({ onSuccess = () => {}, onError = () => {} }) => {
  const handleLogin = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      // Decode the token
      const decoded = jwtDecode(credential);

      // Send to backend for verification or login
      const response = await customFetch.post("google/callback", {
        token: credential,
      });

      onSuccess(response.data);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={() => onError(new Error("Google authentication failed"))}
    />
  );
};

export default GoogleLoginButton;
