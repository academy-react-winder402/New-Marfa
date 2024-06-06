import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getItem } from "../../localStorage/localStorage";
import { useState } from "react";
export const Leftmenu = () => {
  // #E3D4FF   moon color
  // const svgLocation = useLocation();
  // const basketSvgLitgh = location.pathname=='/' ? `visible` : `invisible`;

  // const basketDarkLocation = useLocation();
  // const basketSvgDark = location.pathname !=='/' ? `visible` : `invisible`;

    const bgMoonLocation = useLocation();
    const moonSvgLitgh = location.pathname=='/' ? `stroke-[#e3d4ff]` : `stroke-[#3F40EA] dark:stroke-[#e3d4ff] `;
    const sunSvgLitgh = location.pathname=='/' ? `stroke-[#e3d4ff]` : `stroke-[#3F40EA] dark:stroke-[#e3d4ff]`;


    const [sunMoonSvg , setSunMoonSvg] = useState(true)

  const handleDark = () => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  // return (
  //   <div className="flex justify-end ml-6">
  //     <ul className="flex flex-row items-center">
  //       <li onClick={handleDark} className="p-4">
  //         <svg
  //           width="30"
  //           height="30"
  //           viewBox="0 0 30 30"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //           className={` ${moonSvgLitgh}`}
  //         >
  //           <path
  //             d="M1 14.4762C1 22.4949 7.50041 28.9952 15.5191 28.9952C21.6287 28.9952 26.8568 25.2216 29 19.8781C27.3277 20.5501 25.4978 20.9289 23.5852 20.9289C15.5665 20.9289 9.06615 14.4286 9.06615 6.4099C9.06615 4.50623 9.43935 2.66587 10.1054 1C4.76808 3.14611 1 8.3711 1 14.4762Z"
  //             stroke-width="2"
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //           />
  //         </svg>
  //       </li>

    
    return (
        <div className="flex justify-end ml-6">
          <ul className="flex flex-row items-center">
            <li onClick={handleDark} className="relative p-4">
             {!sunMoonSvg && <svg width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={()  => setSunMoonSvg(!sunMoonSvg)} xmlns="http://www.w3.org/2000/svg" className={`relative cursor-pointer ${moonSvgLitgh}`}>
                <path d="M1 14.4762C1 22.4949 7.50041 28.9952 15.5191 28.9952C21.6287 28.9952 26.8568 25.2216 29 19.8781C27.3277 20.5501 25.4978 20.9289 23.5852 20.9289C15.5665 20.9289 9.06615 14.4286 9.06615 6.4099C9.06615 4.50623 9.43935 2.66587 10.1054 1C4.76808 3.14611 1 8.3711 1 14.4762Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              }
              {sunMoonSvg &&  <svg xmlns="http://www.w3.org/2000/svg" onClick={()  => setSunMoonSvg(!sunMoonSvg)} fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" className={`cursor-pointer relative w-8 h-8 ${sunSvgLitgh}`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                 </svg>
              }
            </li>

        {/* <li className="p-4">
              <Link>
                <svg  width="40" height="40" viewBox="0 0 40 40"  fill="none" xmlns="http://www.w3.org/2000/svg" className={`${basketSvgLitgh}`} >
                  <path d="M33.0234 14.9609H29.6094C28.9609 14.9609 28.4375 14.4375 28.4375 13.7891C28.4375 13.1406 28.9609 12.6172 29.6094 12.6172H33.0234C33.6719 12.6172 34.1953 13.1406 34.1953 13.7891C34.1953 14.4375 33.668 14.9609 33.0234 14.9609ZM25.8711 14.9609H10.2773C9.62891 14.9609 9.10547 14.4375 9.10547 13.7891C9.10547 13.1406 9.62891 12.6172 10.2773 12.6172H25.8711C26.5195 12.6172 27.043 13.1406 27.043 13.7891C27.043 14.4375 26.5156 14.9609 25.8711 14.9609Z" fill="#8735F5"  />
                  <path d="M14.7734 34.1094C14.7734 34.3915 14.829 34.6709 14.937 34.9315C15.0449 35.1922 15.2032 35.429 15.4027 35.6285C15.6022 35.8281 15.839 35.9863 16.0997 36.0943C16.3604 36.2022 16.6397 36.2578 16.9219 36.2578C17.204 36.2578 17.4834 36.2022 17.744 36.0943C18.0047 35.9863 18.2415 35.8281 18.441 35.6285C18.6406 35.429 18.7988 35.1922 18.9068 34.9315C19.0147 34.6709 19.0703 34.3915 19.0703 34.1094C19.0703 33.8272 19.0147 33.5479 18.9068 33.2872C18.7988 33.0265 18.6406 32.7897 18.441 32.5902C18.2415 32.3907 18.0047 32.2324 17.744 32.1245C17.4834 32.0165 17.204 31.9609 16.9219 31.9609C16.6397 31.9609 16.3604 32.0165 16.0997 32.1245C15.839 32.2324 15.6022 32.3907 15.4027 32.5902C15.2032 32.7897 15.0449 33.0265 14.937 33.2872C14.829 33.5479 14.7734 33.8272 14.7734 34.1094Z" fill="#8735F5" />
                  <path d="M31.2305 34.1094C31.2305 34.6792 31.4568 35.2256 31.8597 35.6285C32.2626 36.0315 32.8091 36.2578 33.3789 36.2578C33.9487 36.2578 34.4952 36.0315 34.8981 35.6285C35.301 35.2256 35.5273 34.6792 35.5273 34.1094C35.5273 33.5396 35.301 32.9931 34.8981 32.5902C34.4952 32.1873 33.9487 31.9609 33.3789 31.9609C32.8091 31.9609 32.2626 32.1873 31.8597 32.5902C31.4568 32.9931 31.2305 33.5396 31.2305 34.1094Z" fill="#8735F5"/>
                  <path d="M34.7578 28.207H14.7969C13.3242 28.207 12.125 27.0078 12.125 25.5352V25.4805L10.7227 10.5469V10.5391V10.5313L10.4883 8.3672C10.1524 4.97657 8.23829 3.77735 6.68751 3.36329L3.96485 2.69532C3.33595 2.53907 2.70313 2.92579 2.54688 3.5547C2.39063 4.1836 2.77735 4.81642 3.40626 4.97267L6.09767 5.63282C6.73048 5.80079 7.19532 6.1172 7.52735 6.59767C7.86329 7.08204 8.07423 7.75782 8.15626 8.60548L8.39064 10.7774L9.78126 25.5938C9.81251 28.332 12.0508 30.5508 14.7969 30.5508H34.7578C35.4063 30.5508 35.9297 30.0274 35.9297 29.3789C35.9297 28.7305 35.4063 28.207 34.7578 28.207Z" fill="#F1EDFA"/>
                  <path d="M32.8242 7.72656H14.8828C14.2344 7.72656 13.7109 8.25 13.7109 8.89844C13.7109 9.54687 14.2344 10.0703 14.8828 10.0703H32.8242C34.0039 10.0703 34.9688 11.0195 34.9922 12.1914L34.2148 21.0391L34.2109 21.0898V21.1406C34.2109 22.3359 33.2383 23.3086 32.043 23.3086H17.0312C16.3828 23.3086 15.8594 23.832 15.8594 24.4805C15.8594 25.1289 16.3828 25.6523 17.0312 25.6523H32.043C34.5117 25.6523 36.5234 23.6562 36.5547 21.1953L37.332 12.3437L37.3359 12.293V12.2422C37.3359 9.75 35.3125 7.72656 32.8242 7.72656Z" fill="#F1EDFA"/>
                  <path d="M15.957 32.8945C16.2383 32.8945 16.4688 33.125 16.4688 33.4063C16.4688 33.6875 16.2383 33.918 15.957 33.918C15.6758 33.918 15.4453 33.6875 15.4453 33.4063C15.4453 33.125 15.6758 32.8945 15.957 32.8945ZM15.957 30.5508C14.3789 30.5508 13.1016 31.8281 13.1016 33.4063C13.1016 34.9844 14.3789 36.2617 15.957 36.2617C17.5352 36.2617 18.8125 34.9844 18.8125 33.4063C18.8125 31.8281 17.5352 30.5508 15.957 30.5508ZM32.1523 32.8945C32.4336 32.8945 32.6641 33.125 32.6641 33.4063C32.6641 33.6875 32.4336 33.918 32.1523 33.918C31.8711 33.918 31.6406 33.6875 31.6406 33.4063C31.6406 33.125 31.8711 32.8945 32.1523 32.8945ZM32.1523 30.5508C30.5742 30.5508 29.2969 31.8281 29.2969 33.4063C29.2969 34.9844 30.5742 36.2617 32.1523 36.2617C33.7305 36.2617 35.0078 34.9844 35.0078 33.4063C35.0078 31.8281 33.7305 30.5508 32.1523 30.5508Z" fill="#F1EDFA"/>
                </svg> */}
        {/* basket-dark */}
        {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute top-7 ${basketSvgDark}`}>
                  <path d="M33.0234 14.9609H29.6094C28.9609 14.9609 28.4375 14.4375 28.4375 13.7891C28.4375 13.1406 28.9609 12.6172 29.6094 12.6172H33.0234C33.6719 12.6172 34.1953 13.1406 34.1953 13.7891C34.1953 14.4375 33.668 14.9609 33.0234 14.9609ZM25.8711 14.9609H10.2773C9.62891 14.9609 9.10547 14.4375 9.10547 13.7891C9.10547 13.1406 9.62891 12.6172 10.2773 12.6172H25.8711C26.5195 12.6172 27.043 13.1406 27.043 13.7891C27.043 14.4375 26.5156 14.9609 25.8711 14.9609Z" fill="#8735F5"/>
                  <path d="M14.7734 34.1094C14.7734 34.3915 14.829 34.6709 14.937 34.9315C15.0449 35.1922 15.2032 35.429 15.4027 35.6285C15.6022 35.8281 15.839 35.9863 16.0997 36.0943C16.3604 36.2022 16.6397 36.2578 16.9219 36.2578C17.204 36.2578 17.4834 36.2022 17.744 36.0943C18.0047 35.9863 18.2415 35.8281 18.441 35.6285C18.6406 35.429 18.7988 35.1922 18.9068 34.9315C19.0147 34.6709 19.0703 34.3915 19.0703 34.1094C19.0703 33.8272 19.0147 33.5479 18.9068 33.2872C18.7988 33.0265 18.6406 32.7897 18.441 32.5902C18.2415 32.3907 18.0047 32.2324 17.744 32.1245C17.4834 32.0165 17.204 31.9609 16.9219 31.9609C16.6397 31.9609 16.3604 32.0165 16.0997 32.1245C15.839 32.2324 15.6022 32.3907 15.4027 32.5902C15.2032 32.7897 15.0449 33.0265 14.937 33.2872C14.829 33.5479 14.7734 33.8272 14.7734 34.1094Z" fill="#8735F5"/>
                  <path d="M31.2305 34.1094C31.2305 34.6792 31.4568 35.2256 31.8597 35.6285C32.2626 36.0315 32.8091 36.2578 33.3789 36.2578C33.9487 36.2578 34.4952 36.0315 34.8981 35.6285C35.301 35.2256 35.5273 34.6792 35.5273 34.1094C35.5273 33.5396 35.301 32.9931 34.8981 32.5902C34.4952 32.1873 33.9487 31.9609 33.3789 31.9609C32.8091 31.9609 32.2626 32.1873 31.8597 32.5902C31.4568 32.9931 31.2305 33.5396 31.2305 34.1094Z" fill="#8735F5"/>
                  <path d="M34.7578 28.207H14.7969C13.3242 28.207 12.125 27.0078 12.125 25.5352V25.4805L10.7227 10.5469V10.5391V10.5313L10.4883 8.3672C10.1524 4.97657 8.23829 3.77735 6.68751 3.36329L3.96485 2.69532C3.33595 2.53907 2.70313 2.92579 2.54688 3.5547C2.39063 4.1836 2.77735 4.81642 3.40626 4.97267L6.09767 5.63282C6.73048 5.80079 7.19532 6.1172 7.52735 6.59767C7.86329 7.08204 8.07423 7.75782 8.15626 8.60548L8.39064 10.7774L9.78126 25.5938C9.81251 28.332 12.0508 30.5508 14.7969 30.5508H34.7578C35.4063 30.5508 35.9297 30.0274 35.9297 29.3789C35.9297 28.7305 35.4063 28.207 34.7578 28.207Z" fill="#3F40EA"/>
                  <path d="M32.8242 7.72656H14.8828C14.2344 7.72656 13.7109 8.25 13.7109 8.89844C13.7109 9.54687 14.2344 10.0703 14.8828 10.0703H32.8242C34.0039 10.0703 34.9688 11.0195 34.9922 12.1914L34.2148 21.0391L34.2109 21.0898V21.1406C34.2109 22.3359 33.2383 23.3086 32.043 23.3086H17.0312C16.3828 23.3086 15.8594 23.832 15.8594 24.4805C15.8594 25.1289 16.3828 25.6523 17.0312 25.6523H32.043C34.5117 25.6523 36.5234 23.6562 36.5547 21.1953L37.332 12.3437L37.3359 12.293V12.2422C37.3359 9.75 35.3125 7.72656 32.8242 7.72656Z" fill="#3F40EA"/>
                  <path d="M15.957 32.8945C16.2383 32.8945 16.4688 33.125 16.4688 33.4063C16.4688 33.6875 16.2383 33.918 15.957 33.918C15.6758 33.918 15.4453 33.6875 15.4453 33.4063C15.4453 33.125 15.6758 32.8945 15.957 32.8945ZM15.957 30.5508C14.3789 30.5508 13.1016 31.8281 13.1016 33.4063C13.1016 34.9844 14.3789 36.2617 15.957 36.2617C17.5352 36.2617 18.8125 34.9844 18.8125 33.4063C18.8125 31.8281 17.5352 30.5508 15.957 30.5508ZM32.1523 32.8945C32.4336 32.8945 32.6641 33.125 32.6641 33.4063C32.6641 33.6875 32.4336 33.918 32.1523 33.918C31.8711 33.918 31.6406 33.6875 31.6406 33.4063C31.6406 33.125 31.8711 32.8945 32.1523 32.8945ZM32.1523 30.5508C30.5742 30.5508 29.2969 31.8281 29.2969 33.4063C29.2969 34.9844 30.5742 36.2617 32.1523 36.2617C33.7305 36.2617 35.0078 34.9844 35.0078 33.4063C35.0078 31.8281 33.7305 30.5508 32.1523 30.5508Z" fill="#3F40EA"/>
                </svg>
                
              </Link>
            </li> */}

            <li className="p-4">
              {!getItem('token') && 
                <Link to="/auth/login"  className="flex flex-row-reverse items-center gap-2 bg-gradient-to-r from-[#732aff] to-[#4136c9] px-6 py-3 rounded-lg text-[12px] text-300 text-center text-nowrap text-white">ورود به سایت 
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.21857 1.33301H14.3768V15.4997C14.3768 16.6174 13.5568 17.5235 12.5452 17.5235H5.21857" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.96613 12.464L10.7136 9.42831M10.7136 9.42831L7.96613 6.39258M10.7136 9.42831H1.55536" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </Link>
               }

              {getItem('token') && 
                <Link to="/profile"  className="flex flex-row-reverse items-center gap-2 bg-gradient-to-r from-[#732aff] to-[#4136c9] px-6 py-3 rounded-lg text-[12px] text-300 text-center text-nowrap text-white">  پروفایل کاربر 
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.21857 1.33301H14.3768V15.4997C14.3768 16.6174 13.5568 17.5235 12.5452 17.5235H5.21857" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.96613 12.464L10.7136 9.42831M10.7136 9.42831L7.96613 6.39258M10.7136 9.42831H1.55536" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </Link>
               }

            </li>
        </ul>
        </div>
    );
  };




