'use client'
import React, { useEffect, useRef, useState } from 'react'


function Select() {
    const [open, setOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<{value: string, label: string}[]>([])
    const [options, setOptions] = useState([
        {value: "html", label: "HTML", selected: false},
        {value: "css", label: "CSS", selected: false},
        {value: "javascript", label: "Javascript", selected: false},
        {value: "php", label: "PHP", selected: false},
        {value: "laravel", label: "Laravel", selected: false},
    ])
    // Add a new state to track the visibility of the added card
    const [showAddedCard, setShowAddedCard] = useState(false);


    // selection Function
    const handleSelectOption = (value: string) => {
        // Use the map function to create a new array with updated options
        const updatedOptions = options.map((option) => {
          if (option.value === value) {
            // Check if the option is already selected
            const isSelected = selected.some((select) => select.value === value);
      
            if (isSelected) {
              // If selected, remove it from the selected array
              setSelected(selected.filter((select) => select.value !== value));
            } else {
              // If not selected, add it to the selected array
              setSelected([...selected, { value: option.value, label: option.label }]);
            }
      
            // Toggle the selected state for the current option
            return { ...option, selected: !isSelected };
          }
          return option;
        });
      
        // Update the state with the new options array
        setOptions(updatedOptions);
      };

    const handleRemove = (value: string) => {
        // Use the map function to create a new array with updated options
        const updatedOptions = options.map((option) => {
            if (option.value === value) {
              // Check if the option is already selected
              const isSelected = selected.some((select) => select.value === value);
        
              if (isSelected) {
                // If selected, remove it from the selected array
                setSelected(selected.filter((select) => select.value !== value));
              }
              // Toggle the selected state for the current option
              return { ...option, selected: false };
            }
            return option;
          });
        
          // Update the state with the new options array
          setOptions(updatedOptions);
    }


    // Close the dropdown when clicking outside of the select component
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, [selectRef]);

    // // Modify handleSelect function to trigger the animation
    // const handleSelect = (value: string) => {
    //     // ... (existing code)
    
    //     // Set showAddedCard to true to trigger the animation
    //     setShowAddedCard(true);
    
    //     // Reset showAddedCard after the animation duration (e.g., 1000ms)
    //     setTimeout(() => {
    //     setShowAddedCard(false);
    //     }, 1000);
    // };
      

  return (
    <div className="w-full flex flex-col items-center mx-auto" ref={selectRef}>
        <div className="w-full px-4">
            <div className="flex flex-col items-center relative">
                <div className="w-full svelte-1l8159u">
                    <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                        <div className="flex flex-auto flex-wrap">
                            {/* Selected Card */}
                            {
                            selected.map((select: {value: string, label: string}, index:number) =>
                            <div className={`flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ${showAddedCard ? 'fade-in' : ''}`} key={index}>
                                <div className="text-xs font-normal leading-none max-w-full flex-initial">{select.label}</div>
                                <div className="flex flex-auto flex-row-reverse">
                                    <div onClick={() => handleRemove(select.value)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            )
                            }
                            {/* Selected Card End */}

                            <div className="flex-1">
                                <input placeholder={selected.length > 0 ? "" : "Select interest ..."} className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800" onClick={() => setOpen(!open)}/>
                            </div>
                        </div>
                        <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                            <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none" onClick={() => setOpen(!open)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-4 h-4">
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`absolute shadow bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj ease-in-out duration-300 h-44 overflow-y-scroll ${open ? "top-full opacity-1 visible" : "top-20 opacity-0 invisible"}`}>
                    <div className="flex flex-col w-full">
                        {/* Option Card */}
                        {
                            options.map((option: {value: string, label: string, selected: boolean}, index:number) => 
                            <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100" key={index} onClick={() => handleSelectOption(option.value)}>
                                <div className={`flex w-full items-center p-2 pl-2 border-l-2 relative hover:border-teal-100 ${option.selected ? "border-l-4 border-teal-600 hover:border-teal-600" : "border-l-4 border-teal-600 border-transparent"}`}>
                                    <div className="w-full items-center flex">
                                        <div className="mx-2 leading-6">{option?.label}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        
                        {/* Option Card End */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Select
