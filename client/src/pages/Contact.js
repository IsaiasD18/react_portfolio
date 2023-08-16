import { useState } from 'react';

function Contact() {
  // state variable used to manage the data entered by the user in a form.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  //state variable used to control a confirmation message displayed after submitting the form. 
  const [showConfirmation, setShowConfirmation] = useState(false);

  //state variable used to hold an error message that could occur during form validation. 
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = e => {
    const stateProp = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [stateProp]: value
    });

    // validation logic based on the input name
    if (stateProp === 'email') {
      const isValidEmail = validateEmail(value);

      if (!isValidEmail) {
        setErrorMessage('Please enter a valid email!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!value.length) {
        setErrorMessage(`Your ${stateProp} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Check if there are any error messages
    if (!errorMessage) {
      //use web3forms to recived the data submitted  
      const url = 'https://api.web3forms.com/submit';
      const access_key = '1c20486f-c9a0-4c02-8dc7-4d7f7e70313e';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          access_key
        })
      })
        .then(res => res.json())
        .then(data => {
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setShowConfirmation(true);

          setTimeout(() => setShowConfirmation(false), 3500);
        })
        .catch(err => console.log(err));
    }
  };

  //email validation logic
  const validateEmail = email => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());

  };

  return (
    <main className="mx-auto mt-10 max-w-lg p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-green-700 text-center text-4xl font-extrabold mb-6">Contact Me</h1>

  {showConfirmation && (
    <p className="text-center text-green-600 mb-4">
      Thanks for your message! I'll get back to you soon.
    </p>
  )}

  {errorMessage && (
    <p className="text-center text-red-600 mb-4">{errorMessage}</p>
  )}

  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      name="name"
      onChange={handleInputChange}
      value={formData.name}
      type="text"
      placeholder="Enter your name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
    />
    <input
      name="email"
      onChange={handleInputChange}
      value={formData.email}
      type="email"
      placeholder="Enter your email address"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
    />
    <textarea
      name="message"
      onChange={handleInputChange}
      value={formData.message}
      cols="30"
      rows="6"
      placeholder="Enter your message"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
    />
    <button
      type="submit"
      className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-yellow-300"
    >
      Submit
    </button>
  </form>
</main>

  );
}

export default Contact;
