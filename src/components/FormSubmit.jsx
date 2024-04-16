import React from 'react';
const FormDataSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
}
const FormSubmit = () => {
    return (
        <div>
            <form action="#" onSubmit={FormDataSubmit}>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default FormSubmit;