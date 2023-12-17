import React, { forwardRef, useEffect, useRef } from 'react';

const RoleCheckbox = forwardRef(({ className = '', isFocused = false, ...props }, ref) => {
    const inputRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <label className={`flex items-center ${className}`}>
            <input
                {...props}
                type="radio"  
                ref={inputRef}
                className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-700">I am a {props.value}</span>
        </label>
    );
});

export default RoleCheckbox;
