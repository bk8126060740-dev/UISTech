export const healthcareCard = [
    {
        image:require('../assests/images/medical-team.jpeg'),
        title:'Our Healthcare Management Services include',
        redirect:'healthcare#service_managment'
    },
    {
        image:require('../assests/images/AllServices/managment4.png'),
        title:'Healthcare Human Resource Outsourcing Service',
        redirect:'healthcare#health_resource'
    },
    {
        image:require('../assests/images/AllServices/hospital1.png'),
        title:'Healthcare Sanitation Service',
        redirect:'healthcare#sanitation'
    },
]

export const healthcareManagment = [
    {   
        id:'service_managment',
        title:"Our Healthcare Management Services ",
        data:[
            {
                image:require('../assests/images/healthcare-managment/healthmanagment.png'),
                heading:'',
                description:'The demand for improved, patient-centred medical care has grown over time. The hospital-focused services provided by UISPL help to achieve breakthrough growth, better customer engagement, improved health outcomes, and cost savings. Our healthcare management services include end-to-end service management and solutions tailored precisely to the demands of healthcare providers. We also provide hospital information management systems to manage important healthcare processes, from billing to patient care. Our experience in the healthcare sector, along with our trained and skilled personnel, enables us to collaborate with prominent healthcare organizations to help them make the most of the newest digital innovations to boost healthcare and medical services.',
                list_heading:'Our Healthcare Management Services include:',
                list:[
                    'Provision of healthcare personnel- nurses, hospital clerks, pharmacists, and personnel trained in basic healthcare administration.',
                    'Professional Doctors as per the requests of clients.'
                ]
            }
        ]
    },
    {   
        id:'health_resource',
        title:"Healthcare Human Resource Outsourcing Service",
        data:[
            {
                image:require('../assests/images/healthcare-managment/healthresources.png'),
                heading:'',
                description:'Healthcare human resource outsourcing is the practice of hiring a third-party service provider to manage various HR-related tasks and functions within a healthcare organization.',
                list_heading:'This service can provide a range of benefits, including:',
                list:[
                    '<span>Time savings:</span> Outsourcing HR tasks frees up valuable time for healthcare organizations to focus on core business functions and patient care.',
                    '<span>Access to expertise:</span> HR outsourcing providers typically have a deep pool of HR professionals with a wide range of expertise and experience. This provides healthcare organizations access to the latest HR practices and strategies.',
                    '<span>Cost savings:</span> Outsourcing HR can result in significant cost savings as it eliminates the need to hire and train HR staff and provides economies of scale through shared resources and processes.',
                    '<span>Improved compliance:</span> HR outsourcing providers typically have a deep understanding of healthcare-specific HR regulations and can help organizations stay compliant with federal and state laws.',
                    '<span>Increased efficiency:</span> Outsourcing HR can help streamline HR processes, increase efficiency, and provide faster response times for HR-related tasks.',
                ]
            }
        ]
    },
    {   
        id:'sanitation',
        title:"Healthcare Sanitation Service",
        data:[
            {
                image:require('../assests/images/healthcare-managment/sanitization.png'),
                heading:'',
                description:'Healthcare sanitation services refer to the cleaning and disinfection of healthcare facilities to prevent the spread of germs and infections. These services play a crucial role in maintaining a safe and hygienic environment for patients, staff, and visitors.',
                list_heading:'The following bullet points provide an overview of the benefits of healthcare sanitation services:',
                list:[
                    '<span>Improved patient safety:</span> Regular cleaning and disinfection of healthcare facilities helps to reduce the risk of healthcare-associated infections and promotes a safer environment for patients.',
                    '<span>Compliance with regulations:</span> Healthcare sanitation services help facilities to meet regulatory requirements for infection control and prevention.',
                    '<span>Cost savings:</span> Outsourcing HR can result in significant cost savings as it eliminates the need to hire and train HR staff and provides economies of scale through shared resources and processes.',
                    '<span>Enhanced reputation:</span> A clean and well-maintained healthcare facility can enhance its reputation and promote patient confidence.',
                    '<span>Reduction of absenteeism:</span> A clean and disinfected environment can help to reduce the spread of germs and illness, leading to fewer absences among staff and patients.',
                    '<span>Cost savings:</span> By reducing the spread of infections, healthcare sanitation services can help to reduce healthcare costs associated with treating infections.'
                ]
            }
        ]
    },
]