import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ?  'yes': 'No'}</p>
        </div>
    );

    Student.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        isStudent: PropTypes.bool
    }
    Student.defaultProps ={
        name: "Guest",
        age: 0,
        isStudent: false,
    }
}
export default Student