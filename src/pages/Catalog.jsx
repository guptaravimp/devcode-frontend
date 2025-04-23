// import React from 'react'
// import { useParams } from 'react-router'
// import { useState } from 'react';

// import { useEffect } from 'react';
// // import CourseSlider from '../Components/core/Catalog/CourseSlider';
// // import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
// // import CatalogCard from '../Components/core/Catalog/CatalogCard';
// import { useDispatch } from 'react-redux';
// import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
// import { categoriesendpoints } from '../services/apis';
// import { apiconnector } from '../services/apiConnector';

// const Catalog = () => {

//     const catalogName = useParams();
//     // const [Desc, setDesc] = useState([]);
//     const [catalogPageData, setCatalogPageData] = useState(null);
//     const [categoryID, setcategoryID] = useState("");
//     const [activeOption, setActiveOption] = useState(1);
//     const dispatch = useDispatch();


//     const fetchSublinks = async () => {
//         try {
//             const result = await apiconnector("GET", categoriesendpoints.CATEGORIES_API);
//             console.log("result is ",result)
//             const category_id = result.data?.data?.filter((item) => item.name.split(" ").join("-").toLowerCase()===catalogName)[0]._id;
//             setcategoryID(category_id);
//             // setDesc(result.data.data.filter((item) => item.name === Catalog.catalog)[0]);
//             // console.log("Desc",Desc);  
//             // console.log(category_id);
//         } catch (error) {
//             console.log("could not fetch sublinks");
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         fetchSublinks();
//     }, [catalogName])

//     useEffect(() => {
//         const getcatagoryDetails = async () => {

//             const result = await getCatalogaPageData(categoryID);
//             setCatalogPageData(result);
//             console.log("printing res",result);

//         }
//         getcatagoryDetails();
//     }, [categoryID])


//     return (

//         <div>
//             {/* section 1  */}
//             <div className=' box-content bg-richblack-800 px-4'>
//                 <div className='mx-auto flex min-h-[260px]  flex-col justify-center gap-4 '>
//                     <p className='text-sm text-richblack-300'>Home / Catalog / 
//                         <span className='text-yellow-25'>{catalogPageData?.data?.selectedCategory?.name}</span> </p>
//                     <p className='text-3xl text-richblack-5'>{catalogPageData?.data?.selectedCategory?.name}</p>
//                     <p className='max-w-[870px] text-richblack-200'>
//                     {catalogPageData?.data?.selectedCategory?.description}
//                     </p>
//                 </div>
//             </div>
//             {/* section 2 */}

//             <div className=' mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent'>
//                 <h2 className='Courses to get you started'>
//                     Courses to get you started
//                 </h2>
//                 <div className='my-4 flex border-b border-b-richblack-600 text-sm'>
//                     <button onClick={() => { setActiveOption(1) }} className={activeOption === 1 ? `px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer` : `px-4 py-2 text-richblack-50 cursor-pointer`}>Most Populer</button>
//                     <button onClick={() => { setActiveOption(2) }} className={activeOption === 1 ? 'px-4 py-2 text-richblack-50 cursor-pointer' : 'px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer'}>New</button>
//                 </div>
//                 {/* <CourseSlider Courses={CatalogPageData?.selectedCourses} /> */}
//             </div>
//             {/* section 3 */}

//             <div className=' mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'>
//                 <h2 className='section_heading mb-6 md:text-3xl text-xl'>
//                     Similar to {Catalog.catalog}
//                 </h2>
//                 {/* <CourseSlider Courses={CatalogPageData?.differentCourses} /> */}
//             </div>
//   {/* section 4 */}
//             <div className=' mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent'>
//                 <h2 className='section_heading mb-6 md:text-3xl text-xl'>
//                     Frequently BoughtTogether
//                 </h2>
//                 <div className='grid grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-2 pr-4'>
//                     {
//                         // CatalogPageData?.mostSellingCourses?.map((item, index) => (
//                         //     // <CatalogCard key={index} course={item} Height={"h-[100px] lg:h-[400px]"} />
//                         // ))
//                     }
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Catalog



import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import { apiconnector } from '../services/apiConnector';
import { categoriesendpoints } from '../services/apis';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import CatalogCard from '../components/core/Catalog/CatalogCard';
import Footer from '../components/common/Footer';
function Catalog() {
    const { catalogName } = useParams();
    const [activeOption, setActiveOption] = useState(1);
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryID, setcategoryID] = useState(null);
    const fetchSublinks = async () => {
        try {
            const result = await apiconnector("GET", categoriesendpoints.CATEGORIES_API);
            // console.log("result is ",result)
            const matchedCategory = result.data?.allTags?.find(
                (item) => item.name.split(" ").join("-").toLowerCase() === catalogName.toLowerCase()
            );
    
            if (matchedCategory) {
                setcategoryID(matchedCategory._id);
                console.log("category id is", matchedCategory._id);
            } else {
                console.warn("No matching category found for:", catalogName);
            }
            console.log("category id is" ,matchedCategory);
        } catch (error) {
            console.log("could not fetch sublinks");
            console.log(error);
        }
    }
    useEffect(() => {
        fetchSublinks();
    }, [catalogName])


    useEffect(() => {
        const getcatagoryDetails = async () => {

            const result = await getCatalogaPageData(categoryID);
            setCatalogPageData(result);
            console.log("printing res yahi hai ",result);

        }
        getcatagoryDetails();
    }, [categoryID])
    console.log("catalog page data is page data is ",catalogPageData)
    return (
        <div className='text-white mx-auto'>
            <div className=' mx-auto  box-content bg-richblack-800 px-4 '>
                <div className='mx-auto flex min-h-[260px] w-[85%]  flex-col justify-center gap-4 '>
                    <p className='text-md text-richblack-300'>Home / Catalog /  
                        <span className='text-yellow-25'>  {catalogName}</span> </p>
                    <p className='text-3xl font-bold text-richblack-5'>{catalogName}</p>
                    <p className='max-w-[870px] text-xl text-richblack-200'>
                        {/* {catalogPageData?.data?.selectedCategory?.description} */}
                        Master {catalogName} today — so what are you waiting for? Let’s get started!
                    </p>
                </div>

            </div>

            <div className=' mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent'>
                 <h2 className='Courses to get you started text-white text-2xl'>
                     Courses to get you started
                 </h2>
                 <div className='my-4 flex border-b-2 border-b-richblack-500 text-sm'>
                     <button onClick={() => { setActiveOption(1) }} className={activeOption === 1 ? `text-xl px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer` : ` text-xl px-4 py-2 text-richblack-50 cursor-pointer`}>Most Populer</button>
                     <button onClick={() => { setActiveOption(2) }} className={activeOption === 1 ? 'text-xl px-4 py-2 text-richblack-50 cursor-pointer' : ' text-xl px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer'}>New</button>
                 </div>
                 <CourseSlider Courses={catalogPageData?.selectedCourses} catagoryName={catalogName} />
             </div>

             <div className=' mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'>
                 <h2 className='section_heading mb-6 md:text-3xl text-xl'>
                     Top Courses in {catalogName}
                 </h2>
                 <CourseSlider Courses={catalogPageData?.differentCourses} catagoryName={catalogName}/>
             </div>

             <div className=' mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent z-100 '>
                 <h2 className='section_heading mb-6 md:text-3xl text-xl'>
                     Frequently BoughtTogether
                 </h2>
                 <div className='grid grid-cols-3 gap-3 lg:gap-6 lg:grid-cols-3 z-100 pr-4 w-[100%] mt-14 '>
                     {
                         catalogPageData?.mostSellingCourses?.map((item, index) => (
                             <CatalogCard key={index} course={item} Height={"h-[100px] lg:h-[250px]"} />
                         ))
                    }
                 </div>
             </div>
             <Footer/>
        </div>
       
    )
}

export default Catalog
