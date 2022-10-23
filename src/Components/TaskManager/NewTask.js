import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {
  useDeleteTaskByIdMutation,
  useGetAllTaskQuery,
  useUpdateTaskByIdMutation,
} from "../../Redux/State/UserApiRequest/ApiRequest";
import { getToken } from "../HelperTools/userToken";
import Swal from "sweetalert2";

const NewTask = () => {
  let token = getToken();
  const params = "new";
  const res = useGetAllTaskQuery({ params, token });
  // console.log(token);
  // console.log(res);

  const [deleteTaskById] = useDeleteTaskByIdMutation();

  const [updateTaskById] = useUpdateTaskByIdMutation();

  const deleteHandle = (_id, token) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res2 = await deleteTaskById({ _id, token });
        console.log(res2.data);
        if (res2.data) {
          Swal.fire("Deleted!", ` Task ${res2.data.massege}`, "success");
          res.refetch();
        }
      }
    });
  };

  const updateTask =async (_id, token, status) => {
     Swal.fire({
      title: "Change Status",
      input: "select",
      inputOptions: {
        new: "new",
        complete: "complete",
        progress: "progress",
        cencel: "cencel",
      },
      inputPlaceholder: 'new',
      inputValue: status,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      let value = result.value;
        // console.log(value);
        
        let res2 = await updateTaskById({ _id, token, value });
        
        if (res2.data) {
          Swal.fire("Updated!", ` Task ${res2.data.massege}`, "success");
          res.refetch();
        }
      // if (result.isConfirmed) {
        
      //   // let value = result.value;
      //   // console.log(value);
      //   // console.log(res2.data);
      
      // }
    });


    // const { value: fruit } = await Swal.fire({
    //   title: 'Change Status',
    //   input: 'select',
      
    //     inputOptions: {
    //       New: "new",
    //       Complete: "complete",
    //       Progress: "progress",
    //       Cencel: "cencel",
    //     },
    //   inputPlaceholder: 'Select Status',
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, Update it!",
    //   inputValidator: (value) => {
    //     return new Promise((resolve) => {
    //       if (value === 'oranges') {
    //         resolve()
    //       } else {
    //         resolve('You need to select oranges :)')
    //       }
    //     })
    //   }
    // })
    
    // if (fruit) {
    //   Swal.fire(`You selected: ${fruit}`)
    // }

  };

  return (
    <div>
      <div className=" flex items-center justify-between p-3">
        <div className=" ">
          <h1 className=" font-semibold text-[20px] text-[#0052cc] tracking-widest">
            New Task
          </h1>
        </div>
        <div className=" flex items-center justify-center ">
          <div className="">
            <input className="py-2 px-5 border-2 w-[80%] rounded-md focus:outline-none mt-4" />
          </div>
          <div className="">
            <button
              className=" py-2 px-3  mt-3 bg-[#0052cc] text-white 
       font-normal rounded-lg tracking-wider hover:bg-[#0a397e]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full h-full">
        <div className=" grid grid-cols-3 gap-3 p-3">
          {res.data &&
            res.data.data.map((item, i) => (
              <div
                key={i}
                className=" bg-[#ffffff] shadow-md  flex flex-col justify-center pl-10 
                    rounded-lg gap-5 py-3  "
              >
                <h1 className=" font-semibold text-[20px] text-[#0052cc] tracking-widest">
                  {item.title}
                </h1>
                <h3 className=" font-normal text-[16px] tracking-wide">
                  {item.description}
                </h3>
                <div className=" flex items-center justify-around mt-4">
                  <button
                    onClick={() => updateTask(item._id, token, item.status)}
                  >
                    <BiEditAlt />
                  </button>
                  <button onClick={() => deleteHandle(item._id, token)}>
                    <AiFillDelete />
                  </button>
                  <button
                    className=" px-3 py-1  bg-[#0052cc] text-white 
       font-normal rounded-lg tracking-wider hover:bg-[#0a397e]"
                  >
                    {item.status}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewTask;
