import React from 'react';

function QuestionCrs({ id, questionText, options, onChange, error, width }) {
    return (
        <div className='crs-question'>
            <label className="font-medium crs-label">{questionText}</label>
            <select onChange={event => onChange(id, event.target.value)} className={`${"crs-select"} ${width} ${error ? "crs-errorValidation" : ""}`}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default QuestionCrs;