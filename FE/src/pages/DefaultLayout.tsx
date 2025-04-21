import React from "react";

const DefaultLayout = ({children} : {children?: React.ReactNode}) => {
    return (
        <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-xl w-[950px] h-[500px] p-10">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout
