import React, { useRef, useState, useEffect } from 'react';
import './Dropdown.scss';

import { InputField } from '../';

/* OBS! This component is currently not accessible for screen readers. */

type Props = {
    label: string,
    options: string[],
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>> | ((value: string) => void);
}

export const Dropdown: React.FC<Props> = props => {
    const myRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const openDropdown = () => {
        if (!showDropdown) setShowDropdown(true);
    }
    const closeDropdown = (evt: MouseEvent) => {
        if (myRef.current && !myRef.current.contains(evt.target as Node)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => document.removeEventListener('mousedown', closeDropdown);
    });

    return (
        <InputField
            className="dropdown-container"
            label={props.label}
            value={props.value}
            onClick={openDropdown}
            inputAttributes={{ disabled: true }}
        >
            <div ref={myRef} className={`dropdown-content ${showDropdown ? "dropdown-open" : "dropdown-closed"}`}>
                {props.options.map(option =>
                    <a key={option} href="#" onClick={() => { props.setValue(option); setShowDropdown(false); }}>
                        {option}
                    </a>
                )}
            </div>
        </InputField>
    );
};