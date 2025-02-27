import { createContext, useContext, useState } from "react";

export const ProjectContext = createContext();

export const useProjectContext = () => {
	return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState(JSON.parse(localStorage.getItem("project"))||null);
    const [name,setName] = useState(JSON.parse(localStorage.getItem('name'))||null);

	return <ProjectContext.Provider value={{ project, setProject,name,setName }}>{children}</ProjectContext.Provider>;
};
