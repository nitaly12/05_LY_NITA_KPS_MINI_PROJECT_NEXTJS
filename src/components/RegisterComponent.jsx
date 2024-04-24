import React from "react";
import Link from "next/link";

const RegisterComponent = () => {
  async function handleLogin(userInfo){
    
  }
  return (
    <div className="flex justify-around">
      <div class="bg-white rounded-lg relative m-10 ">
        <div class="p-6 space-y-6">
          <div class="">
            <h3 class="text-xl font-semibold">
              <img src="assets/icons/logo.svg" alt="" />
            </h3>
          </div>
          <form action="" class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">
                  First Name :
                </label>
                  <input type="text" name="fName" id="fName" placeholder="First Name" class="w-[390px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                <label for="fName" class="mb-3 mt-5 block text-base font-medium text-[#07074D]">
                  Email :
                </label>
                  <input type="email" name="email" id="email" placeholder="info@xyz.com" class=" w-[390px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                <label for="fName" class="mb-3  mt-5 block text-base font-medium text-[#07074D]">
                  Password :
                </label>
                  <input type="password" name="password" id="password" placeholder="*************" class=" w-[390px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">
                  Last Name :
                </label>
                  <input type="text" name="lName" id="lName" placeholder="Last Name" class="w-[390px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                <label for="fName" class="mb-3  mt-5 block text-base font-medium text-[#07074D]">
                  Mobile No :
                </label>
                  <input type="text" name="mobile" id="mobile" placeholder="+91 29933557" class=" w-[390px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                <label for="fName" class="mb-3  mt-5 block text-base font-medium text-[#07074D]">
                  Confirm Password :
                </label>
                  <input type="password" name="password" id="password" placeholder="*************" class=" w-[390px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
          </form>
          <div class=" border-gray-200">
            <Link href="/login"><button
              class="text-white bg-blue-600 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-8 py-2 text-center"
              type="submit"
            >
              Sign Up
            </button></Link>
            
          </div>
          
        </div>
      </div>
      <div class="flex justify-between">
              <img src="assets/icons/sign-up.svg" alt="" />
            </div>
    </div>
  );
};

export default RegisterComponent;
