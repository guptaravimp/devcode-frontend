import './App.css'
import { createBrowserRouter, Navigate, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/common/Navbar'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import DashBoard from './pages/DashBoard'
import MyProfile from './components/core/Dashboard/MyProfile'
import PrivateRoute from './components/core/Auth/PrivateRoute'
import Error from './pages/Error'
import Setting from './pages/Setting'
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses'
import Cart from './components/core/Dashboard/Cart'
import { ACCOUNT_TYPE } from './utils/constants'
import { useSelector } from 'react-redux'
import AddCourse from './components/core/Dashboard/AddCourse'
import MyCourses from './components/core/Dashboard/MyCourses'
import EditCourse from './components/core/Dashboard/EditCourse'
import Catalog from './pages/Catalog'
import CourseDetails from './pages/CourseDetails'
import ViewCourse from './pages/ViewCourse'
import VideoDetails from './components/core/ViewCourses/VideoDetails'
import Instructor from './components/core/Dashboard/InstructorDashboard/Instructor'
import Blogs from './pages/Blogs'
function App() {
  const user = useSelector((state) => state.profile.user)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='flex flex-col'><Navbar /><Home /></div>
    },
    {
      path: '/blog',
      element: <div >
        <Navbar />
        <Blogs/>
      </div>
    },
    {
      path: '/catalog/:catalogName',
      element: <div >
        <Navbar />
        <Catalog/>
      </div>
    },
    {
      path: '/aboutus',
      element: <div >
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/courses/:courseId',
      element: <div >
        <Navbar />
         <CourseDetails/>
      </div>
    },
    {
      path: '/login',
      element: <div >
        <Navbar />
        <Login />

      </div>
    },
    {
      path: '/forgot-password',
      element: <div >
        <Navbar />
        <ForgotPassword />
        {/* <DashBoard/> */}

      </div>
    },
    {
      path: '/update-password/:id',
      element: <div >
        <Navbar />
        <UpdatePassword />


      </div>
    },
    {
      path: '/signup',
      element: <div >
        <Navbar />
        <Signup />
      </div>
    },
    {
      path: '/contact',
      element: <div >
        <Navbar />
        <Contact />
      </div>
    },
    {
      path: '/verify-email',
      element: <div >
        <Navbar />
        <VerifyEmail />
      </div>
    },


    // making the dashboard routes private and make it as outlet see the dashboard components 
    /// this is the method of nested routing 
    {
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <Navbar />
          <DashBoard />
        </PrivateRoute>
      ),
      children: [
        {
          path: 'my-profile',
          element: <div> <MyProfile /></div>
        },
        
        {
          path: 'setting',
          element: <div> <Setting /></div>
        },
        {
          path: 'getEnrolledCourses',
          element: user?.accountType === ACCOUNT_TYPE.STUDENT ? (<div> <EnrolledCourses /></div>) : (
            <Navigate to="/dashboard/my-profile" replace />

          )
        },
        {
          path: 'instructor',
          element: user?.accountType === ACCOUNT_TYPE.INSTRUCTOR ? (<div> <Instructor/></div>) : (
            <Navigate to="/dashboard/my-profile" replace />

          )
        },
        {
          path: 'cart',
          element: user?.accountType === ACCOUNT_TYPE.STUDENT
            ? <div><Cart /></div>
            : <Navigate to="/dashboard/my-profile" replace />
        },
        {
          path: 'add-course',
          element: user?.accountType === ACCOUNT_TYPE.INSTRUCTOR ? (<div> <AddCourse /></div>) : (
            <Navigate to="/dashboard/my-profile" replace />

          )
        },
        {
          path: 'edit-course/:courseId',
          element: user?.accountType === ACCOUNT_TYPE.INSTRUCTOR ? (<div> <EditCourse/></div>) : (
            <Navigate to="/dashboard/my-profile" replace />

          )
        },
        {
          path: 'my-courses',
          element: user?.accountType === ACCOUNT_TYPE.INSTRUCTOR ? (<div> <MyCourses/></div>) : (
            <Navigate to="/dashboard/my-profile" replace />


          )
        },

      ]
    },

    {
      path: 'dashboard/getEnrolledCourses/view-course',
      element: (
        <PrivateRoute>
          <Navbar />
          <ViewCourse />
        </PrivateRoute>
      ),
      children: [
        {
          path: ':courseId/section/:sectionId/sub-section/:subSectionId',
          element:
            user?.accountType === ACCOUNT_TYPE.STUDENT ? (
              <div><VideoDetails /></div>
            ) : (
              <Navigate to="/dashboard/my-profile" replace />
            ),
        },
      ],
    }
    
    , {
      path: '*',
      element: <div >
        <Error />
      </div>
    }

  ])

  return (

    <div className='w-full min-h-screen bg-richblack-900 flex flex-col items-center mx-auto font-inter'>

      {/* <Navbar/> */}
      <RouterProvider router={router} />



    </div>
  )
}

export default App
