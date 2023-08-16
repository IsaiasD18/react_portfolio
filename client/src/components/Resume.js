import React from 'react';

function Resume() {
    return (
        <section className='p-6'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>Resume</h2>
            
            <a href='https://docs.google.com/document/d/10lchrVgrPI84u7hWzYF4tBk_4l0m8FJTbWl-RUgF15M/edit?usp=sharing' 
               target='_blank' 
               rel='noopener noreferrer'
               className='text-blue-600 hover:underline mb-6 block text-center'>
                Download Resume
            </a>

            <h3 className='text-xl font-medium mb-4 text-center'>Front End Skills</h3>
            <ul className='grid md:grid-cols-3 gap-2'>
                <li className='text-gray-600 flex items-center justify-center'>HTML</li>
                <li className='text-gray-600 flex items-center justify-center'>CSS</li>
                <li className='text-gray-600 flex items-center justify-center'>Javascript</li>
                <li className='text-gray-600 flex items-center justify-center'>Bootstrap</li>
                <li className='text-gray-600 flex items-center justify-center'>jQuery</li>
                <li className='text-gray-600 flex items-center justify-center'>React</li>
            </ul>

            <h3 className='text-xl font-medium mb-4 text-center mt-6'>Backend End Skills</h3>
            <ul className='grid md:grid-cols-3 gap-2'>
                <li className='text-gray-600 flex items-center justify-center'>Express.js</li>
                <li className='text-gray-600 flex items-center justify-center'>Node.js</li>
                <li className='text-gray-600 flex items-center justify-center'>MongoDB</li>
                <li className='text-gray-600 flex items-center justify-center'>MySQL</li>
                <li className='text-gray-600 flex items-center justify-center'>NoSQL</li>
            </ul>
        </section>
    );
};

export default Resume;
