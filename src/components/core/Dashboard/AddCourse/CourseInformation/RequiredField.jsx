import React, { useEffect, useState } from 'react'

function RequiredField({ name, label, register, errors, setValue, getValues }) {
    const [requirement, setRequirements] = useState()
    const [requirementList, setRequirementList] = useState([]);

    const handleAddrequirement = () => {
        setRequirementList([...requirementList, requirement])
        setRequirements("");
    }
    useEffect(() => {
        register(name, {
            required: true,
            validate: (value) => value.length > 0

        })
    }, [])


    useEffect(() => {
        setValue(name, requirementList)
    }, [requirementList])




    const handleRemoveRequirement = (index) => {
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index, 1);
        setRequirementList(updatedRequirementList);
    };


    return (
        <div className='text-white'>
            <label htmlFor="">{label} <sup className=' text-xs tracking-wide text-pink-200'>*</sup></label>
            <div className='mt-2'>
                <input type="text"
                    id={name}
                    value={requirement}
                    onChange={(e) => setRequirements(e.target.value)}
                    style={{
                        boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                    }}  className='form-style lg:h-10 w-full bottom-1 rounded bg-richblack-600 p-[12px] text-richblack-5' />
                <button type='button' onClick={handleAddrequirement}
                    className='font-semibold text-yellow-50 mt-2'>
                    Add
                </button>
            </div>
            {
                requirementList.length > 0 && (
                    <ul>
                        {

                            requirementList.map((requirement, index) => {
                                return <li key={index} className=' text-yellow-100  space-x-5 space-y-1'>
                                    <span className='text-white'>
                                        {requirement}
                                    </span>
                                    <button type='button'
                                        onClick={() => handleRemoveRequirement(index)}

                                        className='text-md  p-2  rounded-xl text-pink-400'>Remove

                                    </button>
                                </li>

                            })
                        }
                    </ul>
                )
            }
            {
                errors[name] && (
                    <span className="text-red-500 text-sm">This field is required</span>
                )
            }


        </div>
    )
}

export default RequiredField
