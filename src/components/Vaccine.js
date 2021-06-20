import CardView from './CardView';
import '../App.css'
import React from 'react'
import ReactDOM from 'react-dom'

class Vaccine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        // const PINCODE = ['383440']
        const PINCODE = ['383410', '383430', '383440']
        PINCODE.forEach(pin => {
            fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=21-06-2021`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    items: [...this.state.items, data['sessions']]
                })
            })
            .catch((error) => {
                console.error(error)
            })
        })
    }

    getFinalJson = (items) => {
        let finalData = []
        items.forEach(item => {
            item.forEach(session => {
                finalData = [...finalData, session]
            })
        })
        console.log(finalData)
        return finalData
    }

    render() {
        console.log(this.state.items)
        let items = this.getFinalJson(this.state.items)
        return(
            <div>
                <ul>
                    {items.map(item => {
                        return <CardView item={item}/>
                        })
                    }
                </ul>
            </div>
            // 
        )
    }
}

export default Vaccine;