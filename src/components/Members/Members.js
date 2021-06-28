import React, {useEffect, useRef} from "react";
import './Members.css';
import {useDispatch, useSelector} from "react-redux";
import {hideLoader, showLoader} from "../../redux/actions/actions";
import Fallback from "../Loader/Loader";
import {getGroupBiography, getLoading} from "../../redux/selectors";

const Members = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const biography = useSelector(getGroupBiography);
    const scrollRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        biography ? dispatch(hideLoader()) : dispatch(showLoader());
    }, [dispatch, biography]);

    const handleScroll = (eo) => {
        console.log(eo.target)
    }
    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#c41818' width={150} height={150}/> :
                <div className='members_container page' onScroll={handleScroll} ref={scrollRef}>
                    <div className='members_list'>
                        {biography.map((member, index) => (
                            <div key={member.id} className='members_list_item'>
                                <div className='members_item_name'>{member.name}</div>
                                <img className='members_item_image'
                                     style={{
                                         float: index % 2 === 0 ? 'right' : 'left',
                                         marginLeft: index % 2 !== 0 && '0',
                                         marginRight: index % 2 === 0 &&'0'
                                     }}
                                     src={member.image}
                                     alt={member.name}/>
                                <div className='members_list_item_wrapper'>

                                    {member.description.map((item, index) => (
                                        <div key={index} className='members_item_description'>{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>

    );
}

export default Members;