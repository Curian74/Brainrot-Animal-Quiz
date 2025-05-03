import React from "react";

const DefaultLayout = ({children} : {children?: React.ReactNode}) => {
    return (
        <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-[950px] max-h-[80vh] p-10 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout
