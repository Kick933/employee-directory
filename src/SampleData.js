export const SampleData = {
    ceo: {
        name: "CEO Name",
        id: "CE0001",
        contact: "9876543210",
        email: "test@test.com",
    },
    departments: [
        {
            name: "HR",
            abvr: "HR",
            head: {
                name: "Abhinav Shukla",
                contact: "9876543210",
                email: 'hrhead@test.com',
                id: 'HR0001',
                department: 'HR',
                isHead: true,
            },
            teams: [{
                id: 1,
                name: 'Aplha HR',
                members: [{
                    name: "Chandni Sharma",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'HR1001',
                    isLead: true,
                },
                {
                    name: "HR Employee 12",
                    contact: '9876543210',
                    email: 'employeetwoofhr@test.com',
                    id: 'HR2002'
                }]
            },
            {
                name: "Bravo HR",
                id: 2,
                members: [{
                    name: "Employee 1 of HR",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'HR0001',
                    isLead: true,
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
            name: "Engineering",
            abvr: "ENG",
            head: {
                name: "Head of Engineering",
                contact: "9876543210",
                email: 'engineeringhead@test.com',
                id: 'EN0001',
                isHead: true,
            },
            teams: [{
                id: 0,
                name: "Alpha Engineering",
                members: [{
                    name: "Employee 1 of ENG",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'EN1001',
                    isLead: true,
                },
                {
                    name: "Employee 2 of ENG",
                    contact: '9876543210',
                    email: 'employeetwoofhr@test.com',
                    id: 'EN1002'
                }]
            },
            {
                id: 1,
                name: "Bravo Engineering",
                members: [{
                    name: "Eng Employee 12",
                    contact: "9876543210",
                    email: 'employeeoneofeng@test.com',
                    id: 'EN2001',
                    isLead: true
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
