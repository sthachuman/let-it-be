import * as UserApi from "../api/UserRequests";
import {createChat, findChat} from "../api/ChatRequests";


export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATING_START"})
    try{
        const {data} = await UserApi.updateUser(id, formData);
        console.log("Action ko receive hoa hy ye : ",data)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}


export const followUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "FOLLOW_USER", data: id})
    UserApi.followUser(id, data)
    console.log(data._id,id)
    const {data: chat} = await findChat(id, data._id)
    const {data: chat2} = await findChat(data._id, id)
    if(chat){
        console.log("Chat already exists")
    }
    else if(chat2){
        console.log("Chat already exists")
    }
    else{
        console.log("Chat doesn't exist")
        createChat({senderId: id, receiverId: data._id})
    }
}

export const unfollowUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_USER", data: id})
    UserApi.unfollowUser(id, data)
}