// Create component called search
export default function Search(props) {
    return (
        <div className='d-block mx-auto text-center'>

            <input
                name="search"
                type="text"
                placeholder='Employee Directory'
                onChange={props.handleinput}
            />

            <button 
                type='button'
                className= 'btn btn-danger'
                onClick= {props.handleFormSubmit}
            >
            Search
            </button>

        </div>
    )
};
