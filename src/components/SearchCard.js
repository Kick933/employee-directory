import React from 'react'

function SearchCard(props) {
    const member = props.member
    return (
        <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-4/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
            <p className="text-center my-4 text-xs   col-span-1">{member.name}</p>
            <p className="text-center my-4 text-xs  col-span-1">{member.email}</p>
            <p className="text-center my-4 text-xs  col-span-1">{member.id}</p>
            <p className="text-center my-4 text-xs  col-span-1">{member.contact}</p>
            {member.isHead && member.department ? <p className="text-center my-4 text-xs  col-span-1">Head of {member.department}</p> : null}
            {member.isCeo ? <p className="text-center my-4 text-xs  col-span-1">CEO</p> : null}
            {member.team ? <p className="text-center my-4 text-xs  col-span-1">{member.team} Team</p> : null}
            {member.isLead ? <p className="text-center my-4 text-xs  col-span-1">Lead of {member.team}</p> : null}
            {member.department ? <p className="text-center my-4 text-xs  col-span-1">{member.department} Department</p> : null}
        </div>
    )
}

export default SearchCard
