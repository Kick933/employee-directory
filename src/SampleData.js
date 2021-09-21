const Sample = {
    ceo: {
        name: "CEO Name",
        id: "CE0001",
        contact: "9876543210",
        email: "test@test.com"
    },
    departments: [
        {
            abvr: "HR",
            name: "Head of Staff/HR",
            head: {
                name: "HR Head",
                contact: "9876543210",
                email: 'hrhead@test.com',
                id: 'HR0001'
            },
            teams: [{
                id: 1,
                name: 'Team 1 of HR',
                members: [{
                    name: "Employee 1 of HR",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'HR1001'
                },
                {
                    name: "Employee 2 of HR",
                    contact: '9876543210',
                    email: 'employeetwoofhr@test.com',
                    id: 'HR2002'
                }]
            },
            {
                name: "Team 2 of HR",
                id: 2,
                members: [{
                    name: "Employee 1 of HR",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'HR0001'
                },
                {
                    name: "Employee 2 of HR",
                    contact: '9876543210',
                    email: 'employeetwoofhr@test.com',
                    id: 'HR0002'
                }]
            }
            ]
        },
        {
            abvr: "eng",
            name: "Head of Engineering",
            head: {
                name: "Head of Engineering",
                contact: "9876543210",
                email: 'engineeringhead@test.com',
                id: 'EN0001'
            },
            teams: [{
                id: 1,
                name: "Team 1 of ENG",
                members: [{
                    name: "Employee 1 of ENG",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'EN1001'
                },
                {
                    name: "Employee 2 of ENG",
                    contact: '9876543210',
                    email: 'employeetwoofhr@test.com',
                    id: 'EN1002'
                }]
            },
            {
                id: 2,
                name: "Team 2 of HR",
                members: [{
                    name: "Employee 1 of ENG",
                    contact: "9876543210",
                    email: 'employeeoneofeng@test.com',
                    id: 'EN2001'
                },
                {
                    name: "Employee 2 of ENG",
                    contact: '9876543210',
                    email: 'employeetwoofeng@test.com',
                    id: 'EN2002'
                }]
            }
            ]
        }
    ]
}

export default Sample