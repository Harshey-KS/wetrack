export default function Header() {
  return (
    <div className="flex m-0 pt-2 pb-0.5 shadow-lg shadow-gray-300 text-[#5C5F65]">
      <div className="flex justify-between w-full">
        <div className="flex gap-2 px-4">
          <img
            className="h-8 w-8 rounded-full border-[1.34px] border-[#5C5F65]"
            src="https://media.licdn.com/dms/image/C510BAQHE1bLMZIcIxw/company-logo_200_200/0/1552644853195/bhartiya_vidya_bhavans_sardar_patel_institute_of_technology_munshi_nagar_andheri_mumbai_logo?e=2147483647&v=beta&t=yYSuS29Ck4KyXhJRRkEx07vNpWRsBTksd3dAeB3M8J8"
            alt=""
          />
          <div className="font-semibold">
            Sardar Patel Institute of Technology
          </div>
        </div>
        <div className="px-4 flex gap-2">
          <div className=" rounded-full p-0.5">
            <svg
              className="svg-icon h-6 w-6"
              stroke="currentColor"
              strokeWidth={0.8}
              fill="#5C5F65"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"
              ></path>
            </svg>
          </div>
          <div className="font-semibold">Reeta Koshy</div>
        </div>
      </div>
    </div>
  );
}
