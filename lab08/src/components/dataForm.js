import React, {useState} from 'react';


function DataForm({onSubmit}) {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
    });


    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }


    return (
        <div className="DataForm">
            <form onSubmit={handleSubmit}>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" name="address2" value={formData.address2} onChange={handleChange}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputProvimce">Province</label>
                        <select id="inputProvince" className="form-control" name="province" value={formData.province} onChange={handleChange}>
                            <option selected>Choose...</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Yukon">Yukon</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nunavut">Nunavut</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputPostalCode">Zip</label>
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}/>
                    </div>
                </div>

                {/*<label>Email:</label>*/}
                {/*<input type="text" name="email" value={formData.email} onChange={handleChange}/>*/}
                {/*<label>Name:</label>*/}
                {/*<input type="text" name="name" value={formData.name} onChange={handleChange}/>*/}

                {/*<label>Address:</label>*/}
                {/*<input type="text" name="address" value={formData.address} onChange={handleChange}/>*/}

                {/*<label>City:</label>*/}
                {/*<input type="text" name="city" value={formData.city} onChange={handleChange}/>*/}

                {/*<label>Province:</label>*/}
                {/*<input type="text" name="province" value={formData.province} onChange={handleChange}/>*/}
                {/*<label>Postal Code:</label>*/}
                {/*<input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}/>*/}

                <button type="submit">Submit</button>
            </form>
        </div>
    )


}

export default DataForm;