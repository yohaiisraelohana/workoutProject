import { createContext } from "react";

export const ArticleContext = createContext();

export const ArticleContextProvider = ({children}) => {

    const article = {
        title:"Loose Your Fat",
        subjects:["loose fat","diet"],
        main_img:"https://www.bhg.com/thmb/dvOjN8kyHNul-TRAvt0B7DXM-8A=/1983x0/filters:no_upscale():strip_icc()/Protein-powder-1-3361da3ce9fe4c31b9ad59f5b59b2b6c.jpg",
        body:[{type:"p",text:"loss fat fast"},
            {type:"img",text:"https://www.bhg.com/thmb/dvOjN8kyHNul-TRAvt0B7DXM-8A=/1983x0/filters:no_upscale():strip_icc()/Protein-powder-1-3361da3ce9fe4c31b9ad59f5b59b2b6c.jpg"},
            {type:"p",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure cum veritatis quis esse quod possimus officiis nam, delectus aspernatur excepturi necessitatibus inventore voluptate optio expedita eveniet sapiente eos aperiam."},
            {type:"pre",text:`
            const article = {
                title:"Loose Your Fat",
                subjects:["loose fat","diet"],
                main_img:"https://www.bhg.com/thmb/dvOjN8kyHNul-TRAvt0B7DXM-8A=/1983x0/filters:no_upscale():strip_icc()/Protein-powder-1-3361da3ce9fe4c31b9ad59f5b59b2b6c.jpg",
                body:[{type:"p",text:"loss fat fast"},
                    {type:"img",text:"https://www.bhg.com/thmb/dvOjN8kyHNul-TRAvt0B7DXM-8A=/1983x0/filters:no_upscale():strip_icc()/Protein-powder-1-3361da3ce9fe4c31b9ad59f5b59b2b6c.jpg"},
                    {type:"p",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure cum veritatis quis esse quod possimus officiis nam, delectus aspernatur excepturi necessitatibus inventore voluptate optio expedita eveniet sapiente eos aperiam."},
                    {type:"pre",text:""}],
                author_id:"",
                likes:["users_id"],
                comments:[{
                    user_id:"",
                    comment:"",
                    replays:[{user_id:"",comment:""}]
                }]
            };`}],
        author_id:"author name",//will be author id to get his details
        likes:["users_id"],
        comments:[{
            user_id:"comment profile",
            comment:"very good",
            replays:[{user_id:"",comment:""}]
        },
        {
            user_id:"comment profile",
            comment:"very nice this article ma you us better man good exellent",
            replays:[{user_id:"replayer name",comment:"replayer comment will be here"}]
        }],
        created_at:"may 19 , 2020"
    };

    return(
        <ArticleContext.Provider value={article}>
            {children}
        </ArticleContext.Provider>
    )


}