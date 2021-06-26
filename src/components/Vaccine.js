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
        const PINCODE = ['383410', '383430', '383440', '383240', '383276', '383001', '383270',
                        '383422', '383246', '383270', '383422', '383251', '383225', '383434', 
                        '383255', '383240', '383270', '383240', '383001', '383001', '383110', 
                        '383245', '383245', '383230', '383421', '383006', '383230', '383246']
        let date = new Date()
        date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();      

        PINCODE.forEach(pin => {
            fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`)
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