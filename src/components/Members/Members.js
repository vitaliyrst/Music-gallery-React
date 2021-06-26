import React, {useEffect, useState} from "react";
import './Members.css';
import {shallowEqual, useSelector} from "react-redux";
import Member from "./Member/Member";

const Members = () => {
    const [biography, setBiography] = useState();

    const groups = useSelector(({firestore: {ordered}}) => ordered.groups, shallowEqual);

    useEffect(() => {
        if (groups) {
            setBiography(groups[0].biography);
        }
    }, [groups]);

    const getMembers = () => {
        if (biography) {
            return biography.map(member => {
                return <Member key={member.id} data={member}/>;
            }) ;
        }
    }

    return (
        <div className='members_container page'>
            {getMembers()}
        </div>
    );
}

export default Members;