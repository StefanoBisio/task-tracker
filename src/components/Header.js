import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

    const onClick = () => {
        alert('test!')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color="tomato"
                copy="hello"
                onClick={onClick} />
        </header>
    )
}

// Header.defaultProps = {
//     title : 'Default text'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header