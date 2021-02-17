import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const NewItemForm = ({addToMenu}) => {
    const history = useHistory();
    const initialState = {
        name: '',
        description: '',
        recipe: '',
        serve: '',
        type: 'snack'
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToMenu({...formData, id: formData.name});
        setFormData(initialState);
        history.push('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            type="text"
            name="name" 
            placeholder="name" 
            value={formData.name} 
            onChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <input 
            id="description"
            type="text"
            name="description" 
            placeholder="description" 
            value={formData.description}
            onChange={handleChange}/>
            <label htmlFor="recipe">Recipe</label>
            <input 
            id="recipe"
            type="text"
            name="recipe" 
            placeholder="recipe" 
            value={formData.recipe}
            onChange={handleChange}/>
            <label htmlFor="serve">Serve</label>
            <input 
            id="serve"
            type="text"
            name="serve" 
            placeholder="serve" 
            value={formData.serve}
            onChange={handleChange}/>
            <label htmlFor="type">Snack or Drink?</label>
            <select 
            id="type"
            name="type" 
            placeholder="type"
            value={formData.type}
            onChange={handleChange}>
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
            </select>
            <button>Add To Menu!</button>
        </form>
    )
}

export default NewItemForm;