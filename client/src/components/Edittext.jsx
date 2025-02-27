import React, { useState,useEffect,useRef    } from 'react';
import { FaPencil } from "react-icons/fa6";
import { useShowProject } from '../hooks/useShowProject';
import { useProjectContext } from '../context/ProjectContext';

function EditableSpan() {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const {name,setName} = useProjectContext();


  const handleIconClick = () => {
    setIsEditing(true);
    setName("");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsEditing(false);
        setName("Untitled")
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <h1 className="text-white font-semibold flex gap-2 items-center justify-center box-content">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          autoFocus
          className="p-1 bg-inherit outline-none border-none text-white w-24"
        />
      ) : (
        <span>{name}</span>
      )}
      <FaPencil onClick={handleIconClick} className={`text-white cursor-pointer ${isEditing ? 'hidden' : '' }`} />  
    </h1>
  );
}

export default EditableSpan;
