import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim() || formData.message.length < 120) {
      errors.message = 'Message must be at least 120 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, submitting data:', formData);
    } else {
      console.log('Form is not valid, please correct the errors:', errors);
    }
  };

  return (
    <div className='contact'>
      <img
        src='src/assets/Background-Contact-Form.jpg'
        alt='Start helping'
        className='home-image'
      />
      <div className='text-container'>
        <h3 className='main-headline'>Contact us</h3>
        <img
          className='decoration'
          src='src/assets/Decoration.svg'
          alt='decoration'
        />
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='form-data'>
              <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <br />
                <input
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className='error'>{errors.name}</span>}
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className='error'>{errors.email}</span>}
              </div>
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <br />
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && (
                <span className='error'>{errors.message}</span>
              )}
            </div>
            <div className='submit-btn'>
              <div className='input-data'>
                <input type='submit' value='Send' />
                <div className='inner'></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
