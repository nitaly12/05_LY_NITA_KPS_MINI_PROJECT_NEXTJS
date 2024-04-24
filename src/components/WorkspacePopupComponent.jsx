import { insertWorkSpace } from "@/service/workspace.service";
import Image from "next/image";
import React from "react";

export default function WorkspacePopupComponent() {
  const handleWorkSpace = async (workSpaceInput) => {
    "use server";
    const newWorkSpace = {
      workspaceName: workSpaceInput.get("workspaceName")
    };
    await insertWorkSpace(newWorkSpace);
  }

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="cursor-pointer">
        <Image src={"/assets/icons/plus.svg"} width={22} height={22} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" action={handleWorkSpace}>
          <h3 className="font-bold text-lg capitalize">create new workspace</h3>
          <form action={handleWorkSpace}>
            <input
              type="text"
              name="workspaceName"
              placeholder="workspace name"
              className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />
            <div className="modal-action">
              {/* <label htmlFor="my_modal_6" >
                Create
              </label> */}
              <button className="bg-blue-600 rounded-lg text-white mr-3 h-12 px-5 flex items-center" type="submit">Create</button>
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
