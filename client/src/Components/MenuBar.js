import React, { useState } from 'react' // Components => useState
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom' // import for link to work
// Segment not imported from semantic-ui-react

// class=> function
function MenuBar() {
  const pathname=window.location.pathname; // to highlight page we're on is selected in menubar tab
  const path = pathname === '/' ? 'home' :pathname.substr(1);

  //state = { activeItem: 'home' } => const [activeItem, ...]=useState(''); now moved after path declareation
  const [activeItem, setActiveItem]=useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
// const to handleItemClick, this.setState({ activeItem: name }) =>> setActiveItem(name);
   /* render() {
    const { activeItem } = this.state */ 
// remove render() function

/* first Menu.Item as in one line then message-> home in 2nd Menu.Item and we only need 1 home so delete either one of them
this. is removed as not class-based component
friends=> login and  logout => register both in right position
Menu.Item can hold and act on links: as={} to="/" ie link location ie "/login","/register" so on
*/
    return (
        <Menu pointing secondary size="massive" color="teal">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to='/'
          /> 
         
          <Menu.Menu position='right'>
            <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to='/login'
            />
            <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to='/register'
            />
          </Menu.Menu>
        </Menu>

      // remove <Segment> wraping <div>
      /* <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment> */
    )
 // }
}

export default MenuBar;
// export default added