import {toast} from "react-hot-toast"
import { apiconnector } from "../apiconnector";
import { catalogData } from "../apis";





export const getCatalogaPageData = async (categoryId) => {
  
  if (!categoryId) {
    console.warn("Category ID is undefined. Skipping API call.");
    return [];
  }

  console.log("category id is yahi hai", categoryId);
  const toastId = toast.loading("Loading...");
  let result = [];

  try {
    const response = await apiconnector("POST", catalogData.CATALOGPAGEDATA_API, {
      categoryId: categoryId,
    });

    console.log("yaha tak to sab theek ahi");
    console.log("CATALOG PAGE DATA API RESPONSE....", response);

    if (!response.data.success) {
      throw new Error("Could not fetch category page data");
    }

    result = response.data;

  } catch (error) {
    console.log("CATALOG PAGE DATA API ERROR....", error);
    toast?.error("No Course added to this category yet");
    result = error.response?.data || [];
  }
  toast.dismiss(toastId);
  return result;
};

// export const getCatalogaPageData = async(categoryId) => {
//   // const toastId = toast.loading("Loading...");
//   // dispatch(setProgress(50));
//   console.log("category id is yahi hai  ",categoryId)
//   let result = [];
//   try{
       
//         const response = await apiconnector("POST", catalogData.CATALOGPAGEDATA_API, 
//         {categoryId: categoryId,});
//         console.log("yaha tak to sab theek ahi ")
//         console.log("CATALOG PAGE DATA API RESPONSE....", response);
//         if(!response.data.success)
//             throw new Error("Could not Fetch Category page data error",
//             response);

//          result = response?.data;

//   }
//   catch(error) {
//     console.log("CATALOG PAGE DATA API ERROR....", error);
//     toast.error("No Course added to this category yet");
//     result = error.response?.data;
//   }
//   // toast.dismiss(toastId);
//   // dispatch(setProgress(100));
//   return result;
// }
