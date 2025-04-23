import toast from "react-hot-toast"
// import { apiconnector } from "../a"
// apiconnector
import { endpoints } from "../apis"
// import { setLoading, setToken } from "../../slices/authSlice"
import { setLoading, setToken } from "../../slices/authSlice"
// setToken
import { setUser } from "../../slices/profileSlice"
import { apiconnector } from "../apiconnector"
const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSWORD_API,
  RESETPASSTOKEN_API
} = endpoints

export function sendOtp(email, navigate) {

  return async (dispatch) => {
    // const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiconnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    // toast.dismiss(toastId)
  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    // const toastId = toast.loading("Signing you up...");
    dispatch(setLoading(true));
    try {
      const response = await apiconnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error(error?.response?.data?.message || "Signup Failed");
    } finally {
      dispatch(setLoading(false));
    }
  };
}



export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
      const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiconnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      dispatch(setToken(response.data.token))
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({...response.data.user, image: userImage }))
      localStorage.setItem("user", JSON.stringify(response.data.user))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      toast.success("Login Successful")
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
      toast.dismiss(toastId)
  }
}



export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiconnector("POST", RESETPASSTOKEN_API, { email }) //// check the backend code for that why only sent email 
      console.log("RESETPASSWORD TOKEN RESPONSE ", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Reset Email Sent Successfully")
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD ROKEN ERROR", error);
      toast.error("Failed to send Email or reseting password ")
    }
    dispatch(setLoading(false))
  }
}


export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    // console.log("Not caklling ")
    dispatch(setLoading(true))
    try {
      const response = await apiconnector("POST", RESETPASSWORD_API, {
        password, confirmPassword, token
      })
      console.log("reset password response  ", response)
      if (!response.data.success) {
        throw new Error(response.error)
      }
      toast.success("Password reset successfullly ")
    } catch (error) {
      console.log("reset password token error  ", error)
      toast.error("Unable to reset password ")
    }
    dispatch(setLoading(false))
    // navigate("/")
  }
}
