import React from 'react';
import { Redirect } from 'react-router';
import './Home.css';

class Home extends React.Component {
    state = {
        nick: '',
        isEmptyNick: false,
        isSubmited: false
      }
    
      isPassedCorrectEmail = ( email = "" ) => {  // ewentualna wartość domyślna
          // własna logika, użyta wcześniej w liście zadań z jQuery
        if ( ( email.length < 1 ) || ( email.indexOf('@') < 1 ) || ( email.lastIndexOf('.') < 3 ) || ( email.lastIndexOf('.') > (email.length - 3) ) ) {
          return false;
        }
      return true;  
      }
    
      isPasswordLengthCorrect = ( text = "" ) => {
        if ( text.length >= this.state.passwordMinLength ) return true;
      return false;  
      }
    
      warnAboutEmptyField = () => {
          
        if ( this.state.nick.length <= 0 ) this.setState({ isEmptyNick: true });
      }
    
      handleLogin = ( evt ) => {  // też dla submit używane
        evt.preventDefault();
        console.log('Clicked',  evt.target.name, evt.target.innerText );
        // console.log("STATE:", this.state);
        if ( ( this.state.nick.length > 0 ) ) { // czy podano jakąś treść
            // czy podano prawidłową strukturę adresu email oraz wymaganą "złożoność" dla hasła?
        this.setState({ 
            isSubmited: true,   // wyróżnik, że jest pole wypełnione i można przejść dalej 
            isEmptyNick: false,
            });
        // tu przejście do innego komponentu porzez link... ale to w renderze ;)
// ...
        }
        else {  //  weryfikacja JAKOŚCI podanych OBU treści z formularza -- zakładać NIEUDANĄ weryfikację poprawości pól
            this.warnAboutEmptyField();
        }
      }
    
      handleNickChange = ( evt ) => {
        // evt.preventDefault();
        // this.email = evt.target.value;  // które THIS?!
        this.setState({ nick: evt.target.value });
          // if ( evt.target.value.length > 0 ) this.setState({ isEmptyEmail: false });  // ukryj komunikat o pustej zawartości
        // console.log('Changed', evt.target.name, evt.target.value );
      }
    
      handlePassChange = ( evt ) => {
        // evt.preventDefault();
        // this.password = evt.target.value;
        this.setState({ password: evt.target.value });
          if ( evt.target.value.length > 0 ) this.setState({ isEmptyPassword: false });
          if ( this.isPasswordLengthCorrect( evt.target.value ) ) this.setState({ isTooShortPassword: false });
      }
    
      handleLogout = ( evt ) => {
        // evt.preventDefault();
        // this.password = evt.target.value;
        this.setState({ email: '', password: '', isSubmited: false });
          // nie potrzeba zmieniać powyżej żadnego innego atrybutu stanu, bo podczas zalogowania są już one resetowane :)  
      }
    
      render() {  // Z OBSŁUGĄ WARUNKOWEGO WYŚWIETLANIA ZAWARTOŚCI KOMPONENTU, TAKŻE WYBRANE OBSZARY KOMPONENTU.. zależnie od warunku 
        return (
          <div className="my-login-form">
              <form onSubmit={this.handleLogin}>
              <>
                <h2>Twój pseudonim do czatu</h2>
                <label htmlFor="nick">Nick <span>*</span></label>
                    {/* UWAGA na atrybut "for"! zamiast tego słowa kluczowego tu MUSI BYĆ UŻYTE "htmlFor"  */}
                <input type="text" id="nick" name="nick" onChange={this.handleNickChange} value={this.state.nick} />
                { this.state.isEmptyNick ? (
                  <p className="error-text">To pole jest wymagane!</p> 
                ) : (null) }
    
                <input type="submit" value="Przejdź dalej" /* onClick={this.handleClick} */ />
              </>
    
            { this.state.isSubmited && (  //  warunkowe wyświetlanie fragmentu danego komponentu WEWNĄTRZ danego komponentu - wariant TRUE -- "zalogowany"
              <div>
                    <Redirect push to="/chat" nick={this.state.nick} /> {/* PRZEKIEROWANIE DO "/chat", gdy jest wypenione i przesłane pole "nick" w formularzu... jak przesłąć NICK?!  */}
              </div>  
                ) }
            </form>
          </div>
        );
    } 
}

export { Home };