import React from 'react'
import { connect } from 'react-redux';
import UsersViewModel from '../Models/UserViewModel';
import { addUser, deleteCard, fetchUser, updateUser } from './actions/cardActions';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.UsersModel = new UsersViewModel();
    }

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

    onClickAdd = () => {
        this.UsersModel.Id = this.props.userInfo.id;
        this.UsersModel.Name = this.props.userInfo.name;
        this.UsersModel.Email = this.props.userInfo.email;
        this.UsersModel.Contact = this.props.userInfo.phone;
        this.UsersModel.Website = this.props.userInfo.website;

        this.props.AddUser(this.UsersModel)

    }
    onClickUpdate = () => {
        this.UsersModel.Id = this.props.userInfo.id;
		this.UsersModel.Name = this.props.userInfo.name;
		this.UsersModel.Email = 'srk.shahroz63@gmail.com'//this.props.userInfo.email;
		this.UsersModel.Contact = this.props.userInfo.contact;
		this.UsersModel.Website = this.props.userInfo.website;

		this.props.updateUser(this.UsersModel)
		
		console.log("onClickAdd: "+JSON.stringify(this.props.UserList))
	}
    render() {
        const { userInfo } = this.props;
       // console.log(userInfo);
       // const {users} = this.props;
        
              return (
                    <div
                        className='ui raised very padded text container segment'
                        style={{ marginTop: '80px' }}
                        key={userInfo.name}
                    >
                        <h3 className='ui header'>{userInfo.username}</h3>
                        UserID: <p>{userInfo.id}</p>
                        Name: <p>{userInfo.name}</p>
                        Email: <p>{userInfo.email}</p>
                        Phone: <p>{userInfo.phone}</p>
                        Website: <p>{userInfo.website}</p>
                        {/* Company Name: <p>{user.company.name}</p>
                        Address: <p>{user.address.street}</p> */}
                        <button className='ui right floated button' onClick={this.onButtonClick}>Delete</button>
                        <button className='ui primary right floated button' onClick={this.onClickUpdate}>Update</button>
                        <button className='ui right floated button' onClick={this.onClickAdd}>Add</button>
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
       userInfo: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch(deleteCard(id)) },
        fetchUser: (id) => { dispatch(fetchUser(id)) },
        AddUser : (UserViewModel) => {dispatch(addUser(UserViewModel))},
        updateUser: (UserViewModel) => { dispatch(updateUser(UserViewModel)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);