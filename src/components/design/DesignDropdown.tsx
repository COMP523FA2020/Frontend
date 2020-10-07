import React from 'react';

interface DesignDropdownProps {
    criteriaTitle: string;
    criteriaOptions: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DesignDropdown = (props: DesignDropdownProps) => {
    return (
        <div className="select">
            <select onChange={props.onChange}>
                {props.criteriaOptions.map(option => <option key={option}>{option}</option>)}
            </select>
        </div>
    )
}