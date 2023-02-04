import React, { useRef, useState } from 'react';
import NewItem from './NewItem';

const Dropdown = () => {

    //Default options for dropdown
    const optionData = ['Car', 'Bike', 'Truck'];
    const selectRef = useRef('');
    const [options, setOptions] = useState(optionData);

    //Show dropdown when user hover over the menu
    const showDropdown = () => {
        const x = (selectRef.current.options.length);
        selectRef.current.size = x;
    }

    //Hide the dropdown when user leaves the menu
    const hideDropdown = () => {
        const x = (selectRef.current.options.length);
        selectRef.current.size = 0;
    }

    return (

        <>
            
            <NewItem setData={setOptions} />

            <section className="dropdownContainer w-full h-[50vh] p-4 ">


                <select name="Select" id="select" ref={selectRef} className='border-none outline-none w-full md:w-[50%] mx-auto block bg-slate-400 p-3 overflow-hidden' onMouseOver={showDropdown} onMouseOut={hideDropdown} >

                    {
                        options.map((item, idx) => <option value={item} key={idx + 'fda'}>{item}</option>)
                    }
                </select>
            </section>

        </>
    )
}

export default Dropdown;