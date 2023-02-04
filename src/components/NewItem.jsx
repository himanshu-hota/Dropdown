import React, { useRef } from 'react';

const NewItem = ({setData}) => {
    const inputRef = useRef('');
    const handleSubmit = (e) => {

        //Prevent form submission
        e.preventDefault();

        //Warn user if the input field is empty
        if(inputRef.current.value === ''){
            alert('Please enter any data');
            return;
        }
        
        //Get user entered data
        const option = inputRef.current.value.trim();

        //Add new option to options list
        setData(prev => prev.concat(option));

        // Reset input field
        inputRef.current.value = '';

    }

  return (
    <section className="newItem bg-slate-600 h-[30vh] w-full flex justify-center items-center">
        <form className='flex justify-around w-full px-4' onSubmit={handleSubmit}>

                <input type="text" className='p-2 md:w-[50vw] border-none outline-none' ref={inputRef} placeholder='Enter New Option' />
              <button className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full md:w-[20vw] hover:opacity-95 hover:text-white">ADD </button>
        </form>
    </section>
  )
}

export default NewItem;