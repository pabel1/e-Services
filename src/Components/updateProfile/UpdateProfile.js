import React, { useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateUserProfileMutation } from "../../Redux/State/UserApiRequest/ApiRequest";
import { setUserInfo } from "../../Redux/State/userSlice";
import { ErrorToast, getBase64, IsEmpty, IsNotEmail, SuccessToast } from "../HelperTools/RegivalidationTools";
import { getToken, storeUserDetails } from "../HelperTools/userToken";

const UpdateProfile = () => {

  const dispatch=useDispatch()
  let token= getToken()
  const navigate=useNavigate()
  const userData=useSelector((state)=>state.user.value)

  const [updateUserProfile,resInfo] =useUpdateUserProfileMutation()

  // let userImageRef,userImgRef=useRef()
  let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef,userImgRef,userImgView=useRef();

  // const [newData, setNewData] = useState({
  //   email:emailRef.value,
  //   firstname:firstNameRef.value,
  //   lastname:lastNameRef.value,
  //   phone:mobileRef.value,
  //   password: passwordRef.value,
  //   photo:userImgView.src
    
  // });

  // console.log(newData)

  const imageInputHandle=()=>{
    
    let imgFile=userImgRef.files[0];
    
    getBase64(imgFile).then((base64Img)=>{
      userImgView.src=base64Img;
     
    })
  
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();

    let email=emailRef.value;
    let firstname=firstNameRef.value;
    let lastname=lastNameRef.value;
    let phone=mobileRef.value;
    let password= passwordRef.value;
    let photo=userImgView.src
    
    const newData={
      email,
      firstname,
      lastname,
      phone,
      password,
      photo,
    }

    console.log(newData);
    if (newData.firstname === 0) {
      ErrorToast("FirstName Required!");
    }

    else if (newData.lastname === 0) {
      ErrorToast("LastName Required!");
    }
    else if (IsNotEmail(newData.email)) {
      ErrorToast("Valid  Email Required!");
    }
    else if (IsEmpty(newData.password)) {
      ErrorToast("Password  Required!");
    } else{
      const res = await updateUserProfile({newData,token});
      if(resInfo.isLoading){
        
      }
      console.log(res);
      if (res.data) {
        SuccessToast("Profile Update  Success!");
        storeUserDetails(newData)
        dispatch(setUserInfo(newData))
        navigate("/dashboard");
      } else if (!res.data) {
        ErrorToast("Some thing went wrong!");
      }
    }
  }


  return (
    <div className=" m-4">
      <div className=" w-[80%] bg-white shadow-lg p-4 px-6 rounded-md mx-auto my-4">
      <form
          className=" bg-transparent "
          onSubmit={handleSubmit}
        >
        <img className=" w-14 pb-2" src={userData.photo} alt=""  ref={(input)=>userImgView=input} />
        <hr />
        <div className=" flex items-center justify-between gap-3 mt-5">
          <div className=" flex flex-col gap-2 basis-1/2">
            <label className=" text-base font-semibold">Profile Picture</label>
            <input
              type="file"
              
              placeholder="User Profile Picture"
              className=" p-2 rounded-md text-b border  outline-1 outline-blue-700 "
              ref={(input)=>userImgRef=input}
              onChange={imageInputHandle}
              // onChange={(e) =>
              //   setNewData({
              //     ...newData,
              //     photo: e.target.files,
              //   })
              // }
            />
          </div>
          <div className="flex flex-col gap-2 basis-1/2 ">
            <label className=" text-base font-semibold">Email </label>
            <input
              key={Date.now()}
              defaultValue={userData.email}
              readOnly={true}
              placeholder="User Email"
              className=" p-2 rounded-md border  outline-1 outline-blue-700 text-base bg-gray-200"
              type="email"
              ref={(input)=>emailRef=input}
            
            />
          </div>
        </div>

        <div  className=" flex items-center justify-between gap-3 mt-5">
          <div className="flex flex-col gap-2 basis-1/2">
            <label className=" text-base font-semibold">First Name</label>
            <input
              key={Date.now()}
              placeholder="First Name"
              className="p-2 rounded-md border  outline-1 outline-blue-700 text-bas"
              defaultValue={userData.firstname}
              type="text"
              ref={(input)=>firstNameRef=input}
              // onChange={(e) =>
              //   setNewData({
              //     ...newData,
              //     firstname: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="flex flex-col gap-2 basis-1/2">
            <label className=" text-base font-semibold">Last Name</label>
            <input
              key={Date.now()}
              placeholder="Last Name"
              className="p-2 rounded-md border  outline-1 outline-blue-700 text-bas"
              defaultValue={userData.lastname}
              type="text"
              ref={(input)=>lastNameRef=input}
              // onChange={(e) =>
              //   setNewData({
              //     ...newData,
              //     lastname: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
        <div  className=" flex items-center justify-between gap-3 mt-5">
          <div className="flex flex-col gap-2 basis-1/2">
            <label className=" text-base font-semibold">Mobile Number</label>
            <input
              key={Date.now()}
              placeholder="Mobile"
              className="p-2 rounded-md border  outline-1 outline-blue-700 text-bas"
              defaultValue={userData.phone}
              type="text"
              ref={(input)=>mobileRef=input}
              // onChange={(e) =>
              //   setNewData({
              //     ...newData,
              //     phone: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="flex flex-col gap-3 basis-1/2">
            <label className=" text-base font-semibold">Password</label>
            <input
              key={Date.now()}
              placeholder="Password"
              className="p-2 rounded-md border  outline-1 outline-blue-700 text-bas"
              defaultValue={userData.password}
              type="password"
              ref={(input)=>passwordRef=input}
              // onChange={(e) =>
              //   setNewData({
              //     ...newData,
              //     password: e.target.value,
              //   })
              // }
            />
          </div>
        </div>

        <div className=" flex items-center justify-center my-5 ">
          <input type="submit"
            // onClick={UpdateMyProfile}
            className=" bg-blue-700 text-white text-base px-5 py-2 w-[30%] tracking-wide rounded
             hover:bg-blue-900"
             value="Update"
          />
            
          
        </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
