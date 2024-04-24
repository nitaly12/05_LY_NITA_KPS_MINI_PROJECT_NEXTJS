import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

//Get token by cookies
const section = await getServerSession(authOption);

//Get all workspace 
export const getAlllistService = async () => {
    const res = await fetch(
        "http://110.74.194.123:8989/api/todo/v1/workspaces",{
        headers:{
            authorization : `Bearer ${section?.user?.token}`  
        },
        }
    );
    const data = await res.json();
    return data;
};

//Add work space
export const insertWorkSpace = async (userInput) => {
    const res = await fetch(
        "http://110.74.194.123:8989/api/todo/v1/workspaces",{
            method: 'POST',
            body: JSON.stringify(userInput),
            headers:{
                "Content-Type": "application/json", 
                authorization : `Bearer ${section?.user?.token}`
            },
        }
    );
    const data = await res.json();
    return data;
}