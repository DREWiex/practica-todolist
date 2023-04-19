

export const LoginForm = () => {


  return (
    <div>
        <h3 className="centerText margin2topbot">Login</h3>

        <form className="centerDiv margin2topbot loginForm">

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <a className="centerText decorationOff" id="logBtn" href="/">Log in</a>

        </form>
        
      
    </div>
  )
}



