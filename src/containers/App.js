import React from "react"
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            info: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ info: user }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { info, searchfield } = this.state
        const filterName = info.filter(user => {
            return user.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        const plural = filterName.length === 1 ? '' : 's'
        let result = !searchfield.length ? '' : `${filterName.length} search result${plural} found`
        return !info.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'> Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <p className='ma2'>{result}</p>
                    <Scroll>
                        <CardList info={filterName} />
                    </Scroll>
                </div>
            )
    }
}

export default App