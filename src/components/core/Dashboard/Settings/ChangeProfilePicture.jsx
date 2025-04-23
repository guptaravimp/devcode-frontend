

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../../../common/IconButton';
import { FiUpload } from 'react-icons/fi';
import { updateProfilePicture } from '../../../../services/operations/profileAPI';
function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log('Preview ready:', reader.result);
      setPreviewSource(reader.result);
    };
  };

  const handleFileUpload = async () => {
    try {
      if (!imageFile) return;
      console.log('Uploading...');
      setLoading(true);

      const formData = new FormData();
      formData.append('displayPicture', imageFile);
      console.log("image file is ",imageFile);

      await dispatch(updateProfilePicture(token, formData));
      setPreviewSource(null);
      setImageFile(null);
      
    } catch (error) {
      console.error('ERROR MESSAGE - ', error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])
  return (
    <div className="mx-auto rounded-md mt-8 w-[85%] gap-4 flex justify-start p-4 items-center bg-richblack-800">
      <img
        src={previewSource || user?.image}
        alt="Profile"
        className="h-[60px] w-[60px] rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-3">
        {/* <div className="space-y-5"> */}
          <p>Change Profile Picture</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-row gap-3">
              <input
                id="upload"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center bg-richblack-600 text-white cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold "
              >
                Select
              </button>
              <button
                type="button"
                onClick={handleFileUpload}
                className="flex items-center bg-yellow-300 text-richblack-700 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold "
              >
                {loading ? 'Uploading..' : 'Upload'}
                {!loading && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </button>
              
            </div>
          </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ChangeProfilePicture;

