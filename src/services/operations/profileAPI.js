import { setUser } from "../../slices/profileSlice.jsx";
// import { apiconnector } from "../apiconnector.js";
import { profileEndpoints, settingsEndpoints } from "../apis";
import { toast } from "react-hot-toast";
// import { setToken } from "../../slices/authSlice"

import { logout } from "./authAPI.js";
import { setToken } from "../../slices/authSlice.js";
import { apiconnector } from "../apiconnector.js";
profileEndpoints
const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints

const { GET_USER_DETAILS_API, GET_USER_ENROLLED_COURSES_API, GET_INSTRUCTOR_DATA_API } = profileEndpoints


export function updateProfilePicture(token, formData) {
  return async (dispatch) => {
    try {
      console.log("mai chla ahu ")
      console.log("token is ", token)
      console.log("form data is ", formData)

      const response = await apiconnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {

          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",

        }
      )
      console.log("API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Picture Updated Successfully")
      dispatch(setUser(response.data.data))
      dispatch(setToken(response.data.token))

      // localStorage.setItem("token", JSON.stringify(response.data.token))
      // localStorage.setItem("user", JSON.stringify(response.data.user))
    } catch (error) {
      console.log("API ERROR............", error)
      toast.error("Please login again and then try")
    }
  }
}


export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    console.log("Mai chal rha hu ")
    try {
      const response = await apiconnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      // const response = await apiconnector("PUT", UPDATE_PROFILE_API, formData, {
      //   Authorization: `Bearer ${token}`,
      // })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.userDetails.image
        ? response.data.userDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.userDetails.firstName} ${response.data.userDetails.lastName}`
        dispatch(
          setUser({ ...response.data.userDetails, image: userImage })
        )
      toast.success("Profile Updated Successfully")
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
}



// export async function updateAdditionalDetails(token,additionalDetails){
//   console.log("additionalDetails",additionalDetails);
//   const {firstName,lastName,dateOfBirth,gender,contactNumber,about}=additionalDetails;
//   console.log("additionalDetails",additionalDetails);
//   const toastId = toast.loading("Updating...");
//   try {
//     const response = await apiconnector("PUT", settingsEndpoints.UPDATE_PROFILE_API,{firstName,lastName,dateOfBirth,gender,contactNumber,about},{
//       Authorization: `Bearer ${token}`,
//     });
//     console.log("UPDATE_ADDITIONAL_DETAILS_API API RESPONSE............", response)
//     if (!response.data.success) {
//       throw new Error(response.data.message)
//     }
//     toast.success("Additional Details Updated Successfully");
//     const user = JSON.parse(localStorage.getItem("user"));
//     user.firstName = firstName || user.firstName;
//     user.lastName = lastName || user.lastName;
//     user.additionalDetails.dateOfBirth = dateOfBirth  || user.additionalDetails.dateOfBirth;
//     user.additionalDetails.contactNumber = contactNumber || user.additionalDetails.contactNumber;
//     user.additionalDetails.about = about || user.additionalDetails.about;
//     user.additionalDetails.gender=gender
//     localStorage.setItem("user",JSON.stringify(user));

//   } catch (error) {
//     console.log("UPDATE_ADDITIONAL_DETAILS_API API ERROR............", error)
//     toast.error(error.response.data.message)
//   }
//   toast.dismiss(toastId);
// }
// export function updateProfile(token, additionalDetails) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     console.log("token is yahi hai  ", token)
//     console.log("additionalDetails", additionalDetails);
//     // const { firstName, lastName, dateOfBirth, gender, contactNumber, about } = additionalDetails;
//     // const toastId = toast.loading("Updating...");
//     try {
//       const response = await apiconnector("PUT", UPDATE_PROFILE_API, additionalDetails, {
//         Authorization: `Bearer ${token}`,
//       })
//       // const response = await apiconnector("PUT", UPDATE_PROFILE_API, { firstName, lastName, dateOfBirth, gender, contactNumber, about }, {
//       //   Authorization: `Bearer ${token}`,
//       // });
//       console.log("UPDATE_ADDITIONAL_DETAILS_API API RESPONSE............", response)
//       if (!response.data.success) {
//         throw new Error(response?.data?.message)
//       }
//      console.log("REsponse is ",response )
//       // const user = JSON.parse(localStorage.getItem("user"));

//       // if (!response.data.success) {
//       //   throw new Error(response.data.message)
//       // }
//       const userImage = response.data.updatedUserDetails.image
//         ? response.data.updatedUserDetails.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
//       dispatch(
//         setUser({ ...response.data.updatedUserDetails, image: userImage })
//       )
//       toast.success("Profile Updated Successfully")
//       dispatch(
//         setUser({ ...response.data.updatedUserDetails, image: userImage })
//       )
//       // user.firstName = firstName || user.firstName;
//       // user.lastName = lastName || user.lastName;
//       // // toast.success("Additional Details Updated Successfully");
//       // // user.additionalDetails.dateOfBirth = dateOfBirth  || user.additionalDetails.dateOfBirth;
//       // toast.success("Additional Details Updated Successfully");
//       // // user.additionalDetails.contactNumber = contactNumber || user.additionalDetails.contactNumber;
//       // // user.additionalDetails.about = about || user.additionalDetails.about;
//       // // user.additionalDetails.gender=gender
//       // // dispatch(setUser(response.data.data))
//       // // dispatch(setToken(response.data.token))
//       // localStorage.setItem("user", JSON.stringify(user));

//     } catch (error) {
//       console.log("UPDATE_ADDITIONAL_DETAILS_API API ERROR............", error)
//       toast.error(error?.response?.data?.message)
//     }
//     toast.dismiss(toastId);

//   }
// }

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...");
  let result = [];
 
  try {
    const response = await apiconnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
   
 
    if (!response.data?.data?.success) {
      // throw new Error(response.data?.data?.success);
      console.log("error occured")
    }

    result = response.data.data;
    console.log("Ha sab theek thak hai na response ",result)
  } catch (error) {
    console.error("GET_USER_ENROLLED_COURSES_API ERROR:", error);
    toast.error("Could Not Get Enrolled Courses");
  }
  toast.dismiss(toastId);
  return result;
}

export function deleteProfileAccount(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiconnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }
}



export async function changePasswordform(token, formData) {
  const toastId = toast.loading("Loading...")
  try {
    console.log("Password update karne aaya hu ")
    console.log("token is ", token)
    const response = await apiconnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Password Changed Successfully")
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
}





export async function getInstructorData(token) {
  const toastId = toast.loading("Loading...");
  let result = [];

  try {
    const response = await apiconnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`,
    });

    console.log("GET_INSTRUCTOR_API_RESPONSE yaha hai ", response);
    result = response.data; // 👈 FIXED HERE
  } catch (error) {
    console.log("GET_INSTRUCTOR_API ERROR", error);
    toast.error("Could not Get Instructor Data");
  }
  toast.dismiss(toastId);
  return result;
}

// export async function getInstructorData(token) {
//   const toastId = toast.loading("Loading...");
//   let result = [];
  
//   try{
//     const response = await apiconnector("GET", GET_INSTRUCTOR_DATA_API, null, 
//     {
//       Authorization: `Bearer ${token}`,
//     })
//     console.log("yaha sab badiya chal raha abai ")
//     console.log("GET_INSTRUCTOR_API_RESPONSE yaha hai ", response);
//     result = response

//   }
//   catch(error) {
//     console.log("GET_INSTRUCTOR_API ERROR", error);
//     toast.error("Could not Get Instructor Data")
//   }
//   toast.dismiss(toastId);
//   return result;
// }
