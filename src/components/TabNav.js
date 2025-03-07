import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return(
        <div>
            
                <NavLink to="/Character">Characters</NavLink>
                <span>         </span>

                <NavLink to="/Location">Locations</NavLink>
                <span>         </span>
            
                <NavLink to='/Episode'>Episodes</NavLink>
                <span>         </span>
        </div>
    )

};

// const panes = [
//     { menuItem: 'Characters', render: () => <Tab.Pane>Characters</Tab.Pane> <Link to="/Character"> Character </Link> },
//     { menuItem: 'Locations', render: () => <Tab.Pane>Locations</Tab.Pane> },
//     { menuItem: 'Episodes', render: () => <Tab.Pane>Episodes</Tab.Pane> },
//   ]
  
//   const TabExampleBasic = () => <Tab panes={panes} />
  
//   export default TabExampleBasic;

