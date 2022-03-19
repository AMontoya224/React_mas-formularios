import React, { useState } from  'react';
import './UserForm.css'



const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [firstNameForm, setFirstNameForm] = useState('');
    const [lastNameForm, setLastNameForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');
    const [confirmForm, setConfirmForm] = useState('');

    const [firstNameError, setFirstNameError] = useState('  ');
    const [lastNameError, setLastNameError] = useState('  ');
    const [emailError, setEmailError] = useState('  ');
    const [passwordError, setPasswordError] = useState('  ');
    const [confirmError, setConfirmError] = useState('  ');

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmShown, setConfirmShown] = useState(false);

    const togglePassword = () => setPasswordShown(!passwordShown);
    const toggleConfirm = () => setConfirmShown(!confirmShown);
    
    const createUser = (event) => {
        event.preventDefault();
        const newUser = { firstNameForm, lastNameForm, emailForm, passwordForm, confirmForm };

        setFirstName( () => newUser['firstNameForm'] );
        setLastName( () => newUser['lastNameForm'] );
        setEmail( () => newUser['emailForm'] );
        setPassword( () => newUser['passwordForm'] );
        setConfirm( () => newUser['confirmForm'] );

        setFirstNameForm('');
        setLastNameForm('');
        setEmailForm('');
        setPasswordForm('');
        setConfirmForm('');

        setFirstNameError('  ');
        setLastNameError('  ');
        setEmailError('  ');
        setPasswordError('  ');
        setConfirmError('  ');
    };

    const handleFirstName = ( event ) => {
        setFirstNameForm(event.target.value);
        ( event.target.value.length === 0 || event.target.value.length > 1 ) ? setFirstNameError(' ') :
                                   setFirstNameError( 'First name must be 2 characters or longer.' );
    };
    const handleLastName = ( event ) => {
        setLastNameForm(event.target.value);
        ( event.target.value.length === 0 || event.target.value.length > 1 ) ? setLastNameError(' ') :
                                    setLastNameError( 'Last name must be 2 characters or longer.' );
    };
    const handleEmail = ( event ) => {
        setEmailForm(event.target.value);
        ( event.target.value.length === 0 || event.target.value.length > 4 ) ? setEmailError(' ') :
                                        setEmailError( 'Email must be 5 characters or longer.' );
    };
    const handlePassword = ( event ) => {
        setPasswordForm(event.target.value);
        ( event.target.value.length === 0 || event.target.value.length > 7 ) ? setPasswordError(' ') :
                                setPasswordError( 'Password name must be 8 characters or longer.' );
    };
    const handleConfirm = ( event ) => {
        setConfirmForm(event.target.value);
        ( event.target.value === passwordForm ) ? setConfirmError(' ') :
                           setConfirmError( 'Passwords must match.' );
    };

    return(
        <div className='form'>
            <form onSubmit={ createUser }>
                <div className='inp-container'>
                    <label htmlFor='firstNameForm' className='inp'>
                        <input type='text' id='firstNameForm' className='inp-input' placeholder=' ' value={firstNameForm} onChange={handleFirstName} />
                        <span className='inp-label'>First Name</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{firstNameError}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='lastNameForm' className='inp'>
                        <input type='text' id='lastNameForm' className='inp-input' placeholder=' ' value={lastNameForm} onChange={handleLastName} />
                        <span className='inp-label'>Last Name</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{lastNameError}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='emailForm' className='inp'>
                        <input type='email' id='emailForm' className='inp-input' placeholder=' ' value={emailForm} onChange={handleEmail} />
                        <span className='inp-label'>Email</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{emailError}</p>
                    </label> 
                </div>
                <div className='inp-container'>
                    <label htmlFor='passwordForm' className='inp'>
                        <div className='row'>
                            <input type={passwordShown ? 'text' : 'password'} id='passwordForm' className='inp-input' placeholder=' ' value={passwordForm} onChange={handlePassword} />
                            <span className='inp-label inp-label-P'>Password</span>
                            <span className='inp-focus'></span>
                            <span className='material-icons-outlined inp-icons' onClick={togglePassword}>{passwordShown ? 'visibility' : 'visibility_off'}</span>
                        </div>
                        <p className='inp-error'>{passwordError}</p>
                    </label> 
                </div>
                <div className='inp-container'>
                    <label htmlFor='confirmForm' className='inp'>
                        <div className='row'>
                            <input type={confirmShown ? 'text' : 'password'} id='confirmForm' className='inp-input' placeholder=' ' value={confirmForm} onChange={handleConfirm} />
                            <span className='inp-label inp-label-P'>Password<b>_</b>Confirm</span>
                            <span className='inp-focus'></span>
                            <span className='material-icons-outlined inp-icons' onClick={toggleConfirm}>{confirmShown ? 'visibility' : 'visibility_off'}</span>
                        </div>
                        <p className='inp-error'>{confirmError}</p>
                    </label> 
                </div>
                <button type={(firstNameError.length > 1 || lastNameError.length > 1 || emailError.length > 1 || passwordError.length > 1 || confirmError.length > 1) ? 'reset' : 'submit'}
                   className={(firstNameError.length > 1 || lastNameError.length > 1 || emailError.length > 1 || passwordError.length > 1 || confirmError.length > 1) ? 'submit not-submit' : 'submit'}>
                    Add
                </button>
            </form>
            <div className='infoData'>
                <div>
                    <h1>
                        Your Form Data
                    </h1>
                    <p>
                        <b>First Name:</b> {firstNameForm}
                    </p>
                    <p>
                        <b>Last Name:</b> {lastNameForm}
                    </p>
                    <p>
                        <b>Email:</b> {emailForm}
                    </p>
                    <p>
                        <b>Password</b>: {passwordForm}
                    </p>
                    <p>
                        <b>Password Confirm:</b> {confirmForm}
                    </p>
                </div>
                <div>
                    <h1>
                        Your Data Add
                    </h1>
                    <p>
                        <b>First Name:</b> {firstName}
                    </p>
                    <p>
                        <b>Last Name:</b> {lastName}
                    </p>
                    <p>
                        <b>Email:</b> {email}
                    </p>
                    <p>
                        <b>Password:</b> {password}
                    </p>
                    <p>
                        <b>Password Confirm:</b> {confirm}
                    </p>
                </div>
            </div>
        </div>
    );
};
    
export default UserForm;