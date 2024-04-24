import { POST } from "@/app/api/auth/[...nextauth]/route";

export const loginService = async (userInfo) => {
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/login",{
        method: "POST",
        body: JSON.stringify(userInfo),
        headers:{
            "Content-Type": "application/json",

        },
    });
    const data = await res.json();
    return data;
}

export const registerService = async (userInfo) => {
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/sign-up",{
        method: "POST",
        body: JSON.stringify(userInfo),
        headers:{
            accept: "*/*",
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}