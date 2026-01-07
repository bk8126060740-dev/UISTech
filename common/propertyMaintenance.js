export const propertyMaintenanceCard = [
    {
        image: require('../assests/images/property-maintenance/worker.png'),
        title: 'Property Maintenance',
        redirect: 'propertymaintence#property_managment'
    },
    {
        image: require('../assests/images/property-maintenance/gardener.png'),
        title: 'Horticulture Services',
        redirect: 'propertymaintence#horticulture_services',
    },
    {
        image: require('../assests/images/property-maintenance/Image4.png'),
        title: 'Warehouse Management Services',
        redirect: 'propertymaintence#warehouse_services'
    }
]

export const propertyMaintenance = [
    {   
        id:'property_managment',
        title:"property management",
        data:[
            {
                image:require('../assests/images/property-maintenance/Image1.png'),
                heading:'',
                description:'UISPL offers a comprehensive itinerary of property management and property maintenance services. We provide trained experts capable of handling their designated tasks. If necessary, clients can also avail of our personalized property management services.',
                list_heading:'Property upkeep entails a wide range of duties and requirements. As such, we can provide you with professional property management personnel for:',
                list:[
                    'Overseeing and managing your property, building, complexes, facility, organization, and so on.',
                    'Supervising administrative tasks- responding to maintenance requests, procuring equipment for maintenance, and allocating tasks to the management and maintenance team.',
                    'Electricians for servicing and repairing HVAC systems, the property’s electrical wiring, and other appliances.',
                    'Gardeners for landscaping and lawn maintenance.',
                    'Inspections of property maintenance and malfunctioning equipment.',
                    'Entry and exit guards.',
                    'Pest control.',
                    'Complete training solutions for existing property management unit.',
                    'Property cleaning or painting staff'
                ]
            }
        ]
    },
    {   
        id:'horticulture_services',
        title:"Horticulture Services",
        data:[
            {
                image:require('../assests/images/property-maintenance/Image2.png'),
                heading:'Horticulture services refer to the maintenance and upkeep of green spaces, including parks, gardens, public areas, and other landscaped areas. This can include activities such as planting, pruning, watering, and maintaining soil health. Horticulture services play an important role in creating and maintaining attractive and functional green spaces that benefit communities, the environment, and wildlife.',
                description:'Horticulture Services : Maintenance Base Model',
                list_heading:'Horticulture services refer to the maintenance and upkeep of green spaces, including parks, gardens, public areas, and other landscaped areas. This can include activities such as planting, pruning, watering, and maintaining soil health. Horticulture services play an important role in creating and maintaining attractive and functional green spaces that benefit communities, the environment, and wildlife.',
                stepslist: [
                    {
                        title: 'Improved efficiency : ',
                        info: 'Centralized management and optimized use of resources result in more efficient maintenance activities.'
                    },
                    {
                        title: 'Consistent quality : ',
                        info: 'Standardized equipment and procedures ensure consistent quality of work across all maintenance projects.'
                    },
                    {
                        title: 'Effective utilization of manpower : ',
                        info: 'The model considers the skills and expertise of personnel, ensuring that tasks are assigned to the most suitable individuals.'
                    },
                    {
                        title: 'Reduced costs : ',
                        info: 'Efficient resource allocation and standardized equipment reduce costs associated with horticulture maintenance activities.'
                    }
                ]
            }
        ]
    },
    {   
        id:'horticulture_sub_services',
        title:"",
        data:[
            {
                image:require('../assests/images/property-maintenance/Image3.png'),
                heading:'Horticulture Services : Manpower Base Model',
                description:'Manpower-based horticulture services refer to a model where a team of skilled and experienced workers are deployed to carry out the various tasks required for proper horticulture practices.',
                list_heading:'The following bullet points provide an overview of the benefits of this model:',
                stepslist: [
                    {
                        title: "Reliability : ",
                        info: "A dedicated team of workers ensures that tasks are completed on time and to a high standard."
                    },
                    {
                        title: "Flexibility : ",
                        info: "The manpower model allows for easy scaling of the workforce to accommodate changes in the scope of work."
                    },
                    {
                        title: "Cost-effective : ",
                        info: "The manpower model eliminates the need for expensive equipment and eliminates the need to invest in new technology."
                    },
                    {
                        title: "Expertise : ",
                        info: "The workforce is made up of experienced and skilled individuals who are knowledgeable in various aspects of horticulture, allowing for efficient and effective service delivery."
                    },
                ]
            }
        ]
    },
    {   
        id:'warehouse_services',
        title:"Warehouse Management Services",
        data:[
            {
                image:require('../assests/images/property-maintenance/Image4.png'),
                heading:'',
                description:'When you require professional warehouse management labour, get in touch with us at UISPL. We provide professional warehouse management solutions and services designed to cut expenses, improve customer service, and produce measurable efficiency gains. We will thoroughly evaluate your requirements before designing and delivering the best warehouse solution for your company. At UISPL, we ensure speedy and flawless product delivery through the timely receiving and storing of raw materials and other commodities, such as product packaging and related supplies. When necessary, our onsite managers will arrange for offsite storage space and make regular journeys to your business to retrieve information. We ensure that the warehouse runs smoothly, beginning with the proper receiving and secure storage of items and materials.',
                list_heading:'Our Warehouse Management Services :',
                list:[
                    'Professionally trained labour personnel for handling all assets.',
                    'Warehouse managers, administrators, and supervisors to ensure all activities and functions are performed seamlessly.',
                    'Proper shelving, packaging, and adjusting inventory entries in the relevant systems.',
                    'Facilitating operations to improve inventory visibility.',
                    'Ensuring asset protection and management.',
                    'Warehouse safety and security.'
                ]
            }
        ]
    },
]