export const SampleData = {
    ceo: {
        name: "CEO Name",
        id: "CE0001",
        contact: "9876543210",
        email: "test@test.com",
        isHead: true,//To be purged
        isCeo: true
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
            teams: [
                {
                    name: 'Aplha HR',
                    members: [{
                        name: "Chandni Sharma",
                        contact: "9876543210",
                        email: 'employeeoneofhr@test.com',
                        id: 'HR1001',
                        isLead: true,
                        department: 'HR',
                        team: 'Aplha HR'
                    },
                    {
                        name: "HR Employee 12",
                        contact: '9876543210',
                        email: 'employeetwoofhr@test.com',
                        id: 'HR2002',
                        department: 'HR',
                        team: 'Aplha HR'
                    }]
                },
                {
                    name: "Bravo HR",
                    members: [{
                        name: "Employee 1 of HR",
                        contact: "9876543210",
                        email: 'employeeoneofhr@test.com',
                        id: 'HR0001',
                        isLead: true,
                        department: 'HR',
                        team: 'Bravo HR'
                    },
                    {
                        name: "Employee 2 of HR",
                        contact: '9876543210',
                        email: 'employeetwoofhr@test.com',
                        id: 'HR0002',
                        department: 'HR',
                        team: 'Bravo HR'
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
                department: 'Engineering'
            },
            teams: [{
                name: "Alpha Engineering",
                members: [{
                    name: "Employee 1 of ENG",
                    contact: "9876543210",
                    email: 'employeeoneofhr@test.com',
                    id: 'EN1001',
                    isLead: true,
                    department: "Engineering",
                    team: "Alpha Engineering",
                },
                {
                    name: "Employee 2 of ENG",
                    contact: '9876543210',
                    email: 'employeetwoofhr@test.com',
                    id: 'EN1002',
                    department: "Engineering",
                    team: "Alpha Engineering",
                }]
            },
            {
                name: "Bravo Engineering",
                members: [{
                    name: "Eng Employee 12",
                    contact: "9876543210",
                    email: 'employeeoneofeng@test.com',
                    id: 'EN2001',
                    isLead: true,
                    department: "Engineering",
                    team: "Bravo Engineering",
                },
                {
                    name: "Employee 2 of ENG",
                    contact: '9876543210',
                    email: 'employeetwoofeng@test.com',
                    id: 'EN2002',
                    department: "Engineering",
                    team: "Bravo Engineering",
                }]
            }
            ]
        }
    ]
}
