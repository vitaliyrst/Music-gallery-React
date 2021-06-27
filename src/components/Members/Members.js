import React from "react";
import './Members.css';
import {useSelector} from "react-redux";
import Fallback from "../Loader/Loader";

const Members = () => {
    const loading = useSelector(({app: {loading}}) => loading);
    const biography = useSelector(({groups: {groups: {biography}}}) => biography);

    const getMembers = () => {
        return biography.map(member => (
            <div key={member.id} className='members_list_item'>
                <div className='members_item_image_container'>
                    <div className='members_item_name'>{member.name}</div>
                    <img className='members_item_image' src={member.image} alt={member.name}/>
                </div>
            </div>
        ));
    }


    return (
        <>
            {!loading ?
                <Fallback className='loader' type='Puff' color='#000000' width={150} height={150}/> :
                <div className='members_container page'>
                    <div className='members_list'>
                        {getMembers()}
                    </div>
                </div>
            }
        </>
    );
}

export default Members;