import React from 'react'

function Nav(props) {
    const setIsSearching = props.setIsSearching
    return (
        <>
            <nav className="bg-gray-200 shadow-lg w-screen p-2 text-center">
                <p className="self-center text-indigo-400 font-bold text-xl">Employee Directory</p>
            </nav>
            <button onClick={() => setIsSearching(true)} className="mx-auto block my-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white shadow-md p-2 rounded-md font-bold text-xl h-auto">
                <svg className='inline-block w-6 h-6 p-0.5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg><p className="inline-block">Search</p></button>
        </>
    )
}

export default Nav
