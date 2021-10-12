import React from 'react';

function ProfileForm(props) {
    return (
        <div>
            <div>Theme: {props.user.profile.theme}</div>
            <div>Quote: {props.user.profile.quote}</div>
            <div>Color: {props.user.profile.color}</div>
        </div>
    );
}

export default ProfileForm;