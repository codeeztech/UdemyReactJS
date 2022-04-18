import React from 'react'
import { connect } from 'react-redux';
import { deleteCard, fetchUser } from './actions/cardActions';

class Card extends React.Component {
    //state = { user: '' }

    componentDidMount() {
        // let username = this.props.match.params.user
        // this.setState({user:username})
        let id = this.props.card.id;
        this.props.fetchUser(id);
    }

    onButtonClick = () => {
        let id = this.props.card.id;
        this.props.deleteCard(id);
        this.props.history.push('/contact')
    }

    render() {
        const { user } = this.props;
        console.log(user);
       // const {users} = this.props;
        
              return (
                    <div
                        className='ui raised very padded text container segment'
                        style={{ marginTop: '80px' }}
                        key={user.name}
                    >
                        <h3 className='ui header'>{user.username}</h3>
                        Name: <p>{user.name}</p>
                        Email: <p>{user.email}</p>
                        Phone: <p>{user.phone}</p>
                        Website: <p>{user.website}</p>
                        Company Name: <p>{user.company.name}</p>
                        Address: <p>{user.address.street}</p>
                        <button className='ui right floated button' onClick={this.onButtonClick}>Delete</button>
                    </div>
                )




    //     return (
            
    //         users.map((userModel) => {
    //             console.log('User Detail: ' + userModel)
    //             return (
    //                 <div
    //                     className='ui raised very padded text container segment'
    //                     style={{ marginTop: '80px' }}
    //                     key={userModel.id}
    //                 >
    //                     <h3 className='ui header'>{userModel.name}</h3>
    //                     <p>{userModel.username}</p>
    //                     <p>{userModel.email}</p>
    //                     <button className='ui right floated button' onClick={this.onButtonClick}>Delete</button>
    //                 </div>
    //             )
    //         })
    //     )
     }
}

const mapStateToProps = (state, ownProps) => {
    let username = ownProps.match.params.user;
    return {
        card: state.cards.find((card) => card.title === username),
       //users: state.users
       user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch(deleteCard(id)) },
        fetchUser: (id) => { dispatch(fetchUser(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);