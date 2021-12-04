import PropTypes from 'prop-types';
import Button from './Button';
import './mystyle.css'

const Header = ({ showAdd, onAdd}) => {
   
    return (
        <div>
        
        <header className='header'> 
            <h1 style={{ color: 'black' }}>Task Tracker</h1>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} color = 'white' colors={showAdd ? 'red': 'green'} className='head-btn'/>
            <br /><br />
            
            
        </header>

        
        </div>
    );
}


Header.defaultProps = {
    title1 : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string,
}



export default Header
