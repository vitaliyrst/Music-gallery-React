import React, {useEffect} from "react";
import './Member.css';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getMember} from "../../../redux/actions/actions";

const Member = React.memo(() => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMember(params.id));
    }, [dispatch]);

    const member = useSelector(({sum41: {member}}) => member);

    const getDescription = () => {
        if (member.description) {
            return member.description.map((item, index) => (
                    <div key={index} className='member_description'>{item}</div>
                )
            );
        }
    }

    return (
        <div className='member_container page'>
            <img className='member_image' src={member.image} alt={member.name}/>
            <div className='member_name'>{member.name}</div>
            {getDescription()}
        </div>
    );
});

export default Member;