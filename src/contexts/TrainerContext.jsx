import { createContext } from "react";

export const TrainerContext = createContext();

export const TrainerContextProvider = ({children}) => {

    const trainer = {
        profile:{
            username:"",
            full_name:"",
            email:"",
            profile_img:"",
            password:"",
            birth_day:"",
            gender:""
        },
        body_status:[{
                date:"",
                height:170,
                weight:70,
                circumference:{
                    shoulders:0,
                    right_arm:0,
                    left_arm:0,
                    stomach:0,
                    chest:0,
                    left_leg:0,
                    right_leg:0,
                    calves:0,
                    image:""
                }
            }
        ],
        professional:{
            trainees:0,
            rating:[{
                id:0,
                rate:0,
                comment:""
            }],
            escort_programs:[{
                name:"",
                price:0,
                discount:0,
                details:""
            }],
            expertise:[""],
            experience:0,//years
            whatsapp_number:"",
            facebook:"",
            instegram:"",
        },
        training:{
        
            training_programs:[{
                training_name:"",
                training_frequency:"",
                training_exercises:[{
                    id:0,
                    reps:0,
                    sets:0,
                    weight:0,
                    rest:0,
                    additional_comments:[""]
                    }
                ],
                training_muscles:[""]
            }],
        
            training_history:[{
                date:"",
                time:"",
                training_name:"",
                training_exercises:[{
                    id:0,
                    reps:0,
                    sets:0,
                    weight:0,
                    rest:0,
                    additional_comments:[""]
                    }
                ],
                training_muscles:[""]
            }]
        
        },
    
    
    
        
        nutriest:{
        
            nutriest_program:[{
                type:"",//gain,loss,netural
                frequency:[""],//everday,sundey,
                meals:[{
                    name:"",//breakfast/snaks
                    foods:[{
                        id:0,
                        amount:0,
                        name:""
                    }],
                    calories:0,
                    protein:0,
                    crabs:0,
                    fat:0
                }]
            }],
        
        
            nutriest_history:[{
                date:"",
                type:"",//gain,loss,netural
                meals:[{
                    name:"",//breakfast/snaks
                    foods:[{
                        id:0,
                        amount:0,
                        name:""
                    }],
                    calories:0,
                    protein:0,
                    crabs:0,
                    fat:0
                }]
            }]
        
        
        },
        products:[
            {
                id:0,
                name:"",
                price:"",
                discount:"",
                image:"",
                description:""
            }
        ],
        saved:[],
        whatch_list:[],
        liked_articles:["id of article"]
    };
    
    return(
        <TrainerContext.Provider value={trainer}>
            {children}
        </TrainerContext.Provider>
    )


}