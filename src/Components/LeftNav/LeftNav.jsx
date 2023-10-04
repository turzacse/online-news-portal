import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [category, setcategory] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setcategory(data))
    } ,[])

    const {name} = category;
    //console.log(name);
   
    return (
        <div>
            <div>
                <h2 className="text-2xl font-medium mb-4">All category</h2>
                <div className="mx-4">
                    {
                        category.map(c => <Link 
                            key={c.id} 
                            className="block text-[#9F9F9F] font-medium mb-7">
                                {c.name}
                            </Link>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default LeftNav;