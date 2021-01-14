import React from 'react';
import { db } from '../../Firebase/Firebase';
import './Admin.css'

const Admin = () => {
    function addFood(e) {
        e.preventDefault();
        const foodForm = document.getElementById('foodForm');
        const photo = document.getElementById('photoID');
        const form = new FormData();
        form.append('image', photo.files[0]);

        // uploading to imgbb
        fetch('https://api.imgbb.com/1/upload?key=7a779de2da5b7323c6edd36db1b4164b', 
        { method: 'POST', body: form })
        .then(res => res.json())
        .then(image => {
            const data = {
                name: foodForm.name.value,
                category: foodForm.category.value,
                ingredients: foodForm.ingredients.value,
                price: foodForm.price.value,
                photo: image.data.url,
            };
            
            // adding food to db
            db.collection('items').add(data)
            .then(data => {
                if(data) {
                    foodForm.reset();
                    document.getElementById('success').innerText = "Food Added Successfully!";
                }
            })
        })
    }

    return (
        <section id="admin" className="py-5 container">
            <div className="row">
                <div className="col-md-6 mb-5 mb-md-0">
                    <h3 className="text-center text-success">Add Foods</h3>
                    <form id="foodForm" onSubmit={addFood}>
                        <input name="name" type="text" placeholder="Food name" className="form-control my-2" required />
                        <div className="form-group my-2">
                            <select name="category" className="form-control" required>
                                <option>breakfast</option>
                                <option>lunch</option>
                                <option>dinner</option>
                            </select>
                        </div>
                        <input name="ingredients" type="text" placeholder="Ingredients (seperated with comma)" className="form-control my-2" required />
                        <input name="price" type="number" className="form-control my-2" placeholder="Food price" required />
                        <input name="photo" id="photoID" type="file" placeholder="Food image" accept="image/*" className="my-2" required />
                        <input type="submit" className="btn btn-danger btn-block w-50 mx-auto my-3" value="Add Food" />
                        <p className="mt-0 mb-5 text-center text-success" id="success"></p>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <h3 className="text-success mb-4">Update Foods</h3>
                    <button className="btn btn-success">Edit Details</button>
                </div>
            </div>
            
        </section>
    );
};

export default Admin;