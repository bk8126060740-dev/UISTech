export const HeaderNav = [
    {
        name: 'Home',
        redirect: '/',
        childmenu: false,
        submenu: []
    },
    {
        name: 'About Us',
        redirect: '/profile',
        childmenu: true,
        submenu: [
            {
                icon: 'companyprofile',
                name: 'Company Profile',
                redirect: '/profile',
                submenuChild: [
                    {
                        icon: 'profile-fill',
                        name: 'Why UISPL?',
                        redirect: '/profile#whyUISPL'
                    },
                    // {
                    //     icon: 'isocertifications',
                    //     name: 'ISO Certifications',
                    //     redirect: '/profile#ISOCertificate'
                    // },
                ]
            },
            {
                icon: 'achievements',
                name: 'Achievements',
                redirect: '/achievements',
                submenuChild: [
                    {
                        icon: 'achor',
                        name: 'Our Company Journey',
                        redirect: '/achievements#companyJorney'
                    }
                ]
            }
        ]
    },
    {
        name: 'Services',
        redirect: '/services',
        childmenu: true,
        submenu: [
            {
                icon: 'profile-fill',
                name: 'Human Resources Managements',
                redirect: '/humanresources',
                submenuChild: [
                    {
                        icon: 'profile-fill',
                        name: 'Contractual (Flexi) Staffing',
                        redirect: '/humanresources#fs'
                    },
                    {
                        icon: 'recruitment',
                        name: 'Permanent Recruitment',
                        redirect: '/humanresources#ps',
                    },
                    {
                        icon: 'itstaff',
                        name: 'IT Staffing',
                        redirect: '/humanresources#it'
                    },
                    {
                        icon: 'techstaff',
                        name: 'Technical and Non-Technical  Staffing',
                        redirect: '/humanresources#t-nt'
                    },
                    {
                        icon: 'managment',
                        name: 'Payroll Management',
                        redirect: '/humanresources#prs'
                    },
                ]
            },
            {
                icon: 'data-digital-fill',
                name: 'Information Technology Services',
                redirect: '/informationtechnology',
                submenuChild: [
                    {
                        icon: 'digilization',
                        name: 'Data Digitization',
                        redirect: '/informationtechnology#digilization'
                    },
                    {
                        icon: 'solution',
                        name: 'HRMS Solutions',
                        redirect: '/informationtechnology#hrm'
                    },
                    {
                        icon: 'development',
                        name: 'Software and App Development',
                        redirect: '/informationtechnology#sad'
                    },
                    {
                        icon: 'network',
                        name: 'Security and Surveillance Network',
                        redirect: '/informationtechnology#safeSecu'
                    },
                ]
            },
            {
                icon: 'services',
                name: 'Integrated Facility Managements',
                redirect: '/services',
                submenuChild: [
                    {
                        icon: 'elder-care',
                        name: 'Elderly Care Taker Services',
                        redirect: '/elderlycaretaker',
                    },
                    {
                        icon: 'cleaning',
                        name: 'Housekeeping and Cleaning Services',
                        redirect: '/integratedfacility#house',
                    },
                    {
                        icon: 'services',
                        name: 'Waste Management and Hospitality',
                        redirect: '/integratedfacility#waste',
                    },
                    {
                        icon: 'healthcare',
                        name: 'Healthcare Management',
                        redirect: '/integratedfacility#health-care',
                    },
                    {
                        icon: 'securitysafety',
                        name: 'Security and Safety Services',
                        redirect: '/integratedfacility#security',
                    },
                    {
                        icon: 'property-maintenance',
                        name: 'Property Maintenance',
                        redirect: '/integratedfacility#propertyMaintenance',
                    },
                    {
                        icon: 'warehousemanagement',
                        name: 'Warehouse Management Services',
                        redirect: '/propertymaintence#warehouse_services',
                    },
                ]
            }
        ]
    },
    {
        name: 'Gallery',
        redirect: '/gallery',
        childmenu: false,
        submenu: []
    },
    {
        name: 'Career',
        redirect: '/career',
        childmenu: false,
        submenu: []
    },
    {
        name: 'Contact Us',
        redirect: '/contactus',
        childmenu: false,
        submenu: []
    },
];
export const HeaderNavMobile = [
    {
        name: 'Home',
        redirect: '/',
        childmenu: false,
        submenu: []
    },
    {
        name: 'About Us',
        redirect: '/profile',
        childmenu: true,
        submenu: [
            {
                icon: 'companyprofile',
                name: 'Company Profile',
                redirect: '/profile',
                submenuChild: [
                    {
                        icon: 'companyprofile',
                        name: 'Company Profile',
                        redirect: '/profile'
                    },
                    {
                        icon: 'profile-fill',
                        name: 'Why UISPL?',
                        redirect: '/profile#whyUISPL'
                    }
                ]
            },
            {
                icon: 'achievements',
                name: 'Achievements',
                redirect: '/achievements',
                submenuChild: [
                    {
                        icon: 'achievements',
                        name: 'Achievements',
                        redirect: '/achievements'
                    },
                    {
                        icon: 'achor',
                        name: 'Our Company Journey',
                        redirect: '/achievements#companyJorney'
                    }
                ]
            }
        ]
    },
    {
        name: 'Services',
        redirect: '/services',
        childmenu: true,
        submenu: [
            {
                icon: 'profile-fill',
                name: 'Human Resources Managements',
                redirect: '/humanresources',
                submenuChild: [
                    {
                        icon: 'profile-fill',
                        name: 'Human Resources Managements',
                        redirect: '/humanresources',
                    },
                    {
                        icon: 'profile-fill',
                        name: 'Contractual (Flexi) Staffing',
                        redirect: '/humanresources#fs'
                    },
                    {
                        icon: 'recruitment',
                        name: 'Permanent Recruitment',
                        redirect: '/humanresources#ps',
                    },
                    {
                        icon: 'itstaff',
                        name: 'IT Staffing',
                        redirect: '/humanresources#it'
                    },
                    {
                        icon: 'techstaff',
                        name: 'Technical and Non-Technical  Staffing',
                        redirect: '/humanresources#t-nt'
                    },
                    {
                        icon: 'managment',
                        name: 'Payroll Management',
                        redirect: '/humanresources#prs'
                    },
                ]
            },
            {
                icon: 'data-digital-fill',
                name: 'Information Technology Services',
                redirect: '/informationtechnology',
                submenuChild: [
                    {
                        icon: 'data-digital-fill',
                        name: 'Information Technology Services',
                        redirect: '/informationtechnology',
                    },
                    {
                        icon: 'digilization',
                        name: 'Data Digitization',
                        redirect: '/informationtechnology#digilization'
                    },
                    {
                        icon: 'solution',
                        name: 'HRMS Solutions',
                        redirect: '/informationtechnology#hrm'
                    },
                    {
                        icon: 'development',
                        name: 'Software and App Development',
                        redirect: '/informationtechnology#sad'
                    },
                    {
                        icon: 'network',
                        name: 'Security and Surveillance Network',
                        redirect: '/informationtechnology#safeSecu'
                    },
                ]
            },
            {
                icon: 'services',
                name: 'Integrated Facility Managements',
                redirect: '/services',
                submenuChild: [
                    {
                        icon: 'services',
                        name: 'Integrated Facility Managements',
                        redirect: '/services',
                    },
                    {
                        icon: 'elder-care',
                        name: 'Elderly Care Taker Services',
                        redirect: '/elderlycaretaker'
                    },
                    {
                        icon: 'cleaning',
                        name: 'Housekeeping and Cleaning Services',
                        redirect: '/integratedfacility#house'
                    },
                    {
                        icon: 'services',
                        name: 'Waste Management and Hospitality',
                        redirect: '/integratedfacility#waste'
                    },
                    {
                        icon: 'healthcare',
                        name: 'Healthcare Management',
                        redirect: '/integratedfacility#health-care'
                    },
                    {
                        icon: 'securitysafety',
                        name: 'Security and Safety Services',
                        redirect: '/integratedfacility#security'
                    },
                    {
                        icon: 'property-maintenance',
                        name: 'Property Maintenance',
                        redirect: '/integratedfacility#property-maintenance'
                    },
                    {
                        icon: 'warehousemanagement',
                        name: 'Warehouse Management Services',
                        redirect: '/propertymaintence#warehouse_services'
                    },
                ]
            }
        ]
    },
    {
        name: 'Gallery',
        redirect: '/gallery',
        childmenu: false,
        submenu: []
    },
    {
        name: 'Career',
        redirect: '/career',
        childmenu: false,
        submenu: []
    },
    {
        name: 'Contact Us',
        redirect: '/contactus',
        childmenu: false,
        submenu: []
    },
];