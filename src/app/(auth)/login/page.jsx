'use client'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const LoginPage = () => {

    const router = useRouter()
  //defind handle login
    async function handleLogin(userInfo){
    const newUserInfo ={
      email: userInfo.get("email"),
      password: userInfo.get("password")
    }

    //calling next auth service and passing "newUseInfo"

    const res = await signIn('credentials',{
      redirect: false,
      ...newUserInfo,
    });
    if(res.ok){
        router.push("/todo-list");
    }
}
  return (
     
  <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-between">
  <div className="max-w-screen-xl sm:m-36 bg-white sm:rounded-lg flex justify-between flex-1">
    <div className="lg:w-1/2 xl:w-5/12 flex justify-between ">
      <svg width="183" height="34" viewBox="0 0 183 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.72 17.4C31.72 26.1592 24.6192 33.26 15.86 33.26C7.10076 33.26 0 26.1592 0 17.4C0 8.64076 7.10076 1.53999 15.86 1.53999C24.6192 1.53999 31.72 8.64076 31.72 17.4ZM4.63644 17.4C4.63644 23.5986 9.6614 28.6236 15.86 28.6236C22.0586 28.6236 27.0836 23.5986 27.0836 17.4C27.0836 11.2014 22.0586 6.17643 15.86 6.17643C9.6614 6.17643 4.63644 11.2014 4.63644 17.4Z" fill="#306BFF"/>
          <path d="M69.5065 26.9H65.0905V14.5816H64.9948L60.1139 26.6949H57.2428L52.3756 14.5816H52.2662V26.9H47.8502V7.17146H53.6471L58.6237 19.8453H58.733L63.7096 7.17146H69.5065V26.9ZM74.401 32.3824C73.2708 32.3824 72.6829 32.3778 72.6373 32.3687V28.7047C72.7285 28.7229 73.0794 28.732 73.6901 28.732C74.4557 28.732 75.0253 28.6272 75.399 28.4176C75.7727 28.217 75.9915 27.8935 76.0553 27.4469L76.0826 27.2008C76.0918 27.0367 76.0918 26.9364 76.0826 26.9L71.0651 12.0113H76.4108L79.1041 23.2633H79.1862L81.8658 12.0113H86.9791L82.2213 26.859C81.5833 28.8551 80.6673 30.2724 79.4733 31.1109C78.2793 31.9586 76.5885 32.3824 74.401 32.3824ZM97.4928 20.9527H88.4967V16.7965H97.4928V20.9527ZM102.839 9.57771C104.598 7.74568 106.972 6.82967 109.962 6.82967C112.951 6.82967 115.321 7.74568 117.071 9.57771C118.821 11.4097 119.696 13.898 119.696 17.0426C119.696 20.1871 118.821 22.6754 117.071 24.5074C115.321 26.3303 112.951 27.2418 109.962 27.2418C106.963 27.2418 104.589 26.3303 102.839 24.5074C101.089 22.6754 100.214 20.1871 100.214 17.0426C100.214 13.898 101.089 11.4097 102.839 9.57771ZM113.325 12.5719C112.486 11.4599 111.365 10.9039 109.962 10.9039C108.558 10.9039 107.432 11.4599 106.585 12.5719C105.746 13.6747 105.327 15.165 105.327 17.0426C105.327 18.911 105.746 20.4013 106.585 21.5133C107.423 22.6161 108.549 23.1676 109.962 23.1676C111.365 23.1676 112.486 22.6161 113.325 21.5133C114.172 20.4013 114.596 18.911 114.596 17.0426C114.596 15.165 114.172 13.6747 113.325 12.5719ZM123.032 26.9V15.5797H121.049V12.1207H123.032V11.2594C123.032 9.76456 123.437 8.67537 124.249 7.99178C125.069 7.30818 126.436 6.96638 128.35 6.96638C129.253 6.96638 130.036 7.03474 130.702 7.17146V10.1793C130.337 10.1246 129.982 10.0972 129.635 10.0972C128.378 10.0972 127.749 10.5575 127.749 11.4781V12.1207H130.647V15.5797H127.885V26.9H123.032ZM133.778 26.9V15.5797H131.796V12.1207H133.778V11.2594C133.778 9.76456 134.184 8.67537 134.995 7.99178C135.815 7.30818 137.182 6.96638 139.096 6.96638C139.999 6.96638 140.783 7.03474 141.448 7.17146V10.1793C141.083 10.1246 140.728 10.0972 140.381 10.0972C139.124 10.0972 138.495 10.5575 138.495 11.4781V12.1207H141.393V15.5797H138.631V26.9H133.778ZM143.348 26.9V12.0113H148.188V26.9H143.348ZM147.532 10.1246C147.058 10.5803 146.47 10.8082 145.768 10.8082C145.066 10.8082 144.474 10.5803 143.991 10.1246C143.517 9.66886 143.28 9.10375 143.28 8.42928C143.28 7.76391 143.517 7.20336 143.991 6.74763C144.474 6.29191 145.066 6.06404 145.768 6.06404C146.47 6.06404 147.058 6.29191 147.532 6.74763C148.006 7.19425 148.243 7.7548 148.243 8.42928C148.243 9.10375 148.006 9.66886 147.532 10.1246ZM164.676 17.8902H160.219C160.137 17.1064 159.873 16.4866 159.426 16.0308C158.989 15.5751 158.419 15.3472 157.717 15.3472C156.861 15.3472 156.195 15.7027 155.721 16.4137C155.247 17.1246 155.01 18.1363 155.01 19.4488C155.01 20.7704 155.247 21.7913 155.721 22.5113C156.195 23.2222 156.861 23.5777 157.717 23.5777C158.428 23.5777 159.003 23.3635 159.44 22.9351C159.878 22.4976 160.142 21.8915 160.233 21.1168H164.676C164.613 23.0126 163.952 24.512 162.694 25.6148C161.436 26.7086 159.759 27.2554 157.663 27.2554C155.32 27.2554 153.475 26.5627 152.126 25.1773C150.777 23.7919 150.102 21.8824 150.102 19.4488C150.102 17.0426 150.777 15.1422 152.126 13.7476C153.475 12.3531 155.311 11.6558 157.635 11.6558C159.723 11.6558 161.4 12.2255 162.667 13.3648C163.943 14.5041 164.613 16.0126 164.676 17.8902ZM173.508 15.1012C172.77 15.1012 172.146 15.3518 171.635 15.8531C171.134 16.3453 170.852 16.9788 170.788 17.7535H176.202C176.156 16.9605 175.887 16.3225 175.395 15.8394C174.903 15.3472 174.274 15.1012 173.508 15.1012ZM176.311 22.1969H180.686C180.449 23.7372 179.693 24.9677 178.417 25.8883C177.141 26.7997 175.532 27.2554 173.59 27.2554C171.221 27.2554 169.366 26.5719 168.026 25.2047C166.686 23.8284 166.016 21.9371 166.016 19.5308C166.016 17.1246 166.682 15.2105 168.012 13.7887C169.352 12.3668 171.157 11.6558 173.426 11.6558C175.669 11.6558 177.45 12.3349 178.772 13.6929C180.103 15.051 180.768 16.8694 180.768 19.148V20.5152H170.719V20.816C170.719 21.7092 170.988 22.4338 171.526 22.9898C172.073 23.5458 172.784 23.8238 173.659 23.8238C174.306 23.8238 174.866 23.678 175.34 23.3863C175.814 23.0946 176.138 22.6982 176.311 22.1969Z" fill="#1E293B"/>
      </svg>
          <div className="mt-28 flex flex-col">
              <h1 className=" text-xl">
                  Login
              </h1>
              <div className="w-full flex-1 mt-5">
                 <form action={handleLogin} >
                        <input
                            className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-slate-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" name="email" id="email" placeholder="Email" />
                        <input
                            className="w-full mt-2 px-8 py-3 rounded-lg font-medium bg-gray-100 border border-slate-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password" name='password' id='password' placeholder="Password" />
                        <button
                            className="mt-5 tracking-wide text-white font-semibold bg-indigo-700 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <span className="ml-3">
                                Login
                            </span>
                        </button>
                        <p className="mt-4 text-sm text-gray-600 text-gray  ">
                            Didn't have account yet? 
                            <Link href="/register"><span className='text-indigo-700'> Register</span></Link>   
                        </p>
                        <div className="my-5 border-b text-gray text-center">
                            <div
                                className="leading-none px-3 inline-block  text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Continue with
                            </div>
                        </div>
                        <a href="#" className="block">
                            <button className="w-full text-center py-2 my-3 border flex items-center justify-center border-slate-300 rounded-lg text-slate-700 transition duration-150">
                                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2" alt="Google Icon"/>
                                <span className="dark:text-gray-300">Google</span>
                            </button>
                        </a>
                  </form>
              </div>
          </div>
        <p></p>
      </div>
      <div className="flex justify-between text-center ">
          <img classNameName='w-[400px]' src="assets/icons/login.svg" alt="" />
      </div> 
  </div> 
</div>
  )
}

export default LoginPage