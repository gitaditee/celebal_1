import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sign_up.css";
function Sign_up(){
    return(
        <>
        
        <h1 id="head">Sign Up</h1>
    <body>
        
        <div className='container-fluid'>
        <form className='login-form'>
  <div class="mb-3">
  <h1 id="login">Sign Up here !!</h1>
  
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>

    <label for="exampleInputEmail1" class="form-label">USER ID</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Forget Password?</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
      </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Rajasthan</option>
        <option>Bihar</option>
        <option>Punjab</option>
        <option>Haryana</option>
      </select>
    </div>
    </div>
    <br></br>
    <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Aadhar No."/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Pan No."/>
    </div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" id="btn-primary" class="btn btn-primary" >Sign Up</button>
  <br></br>
 
</form>      
  </div>   
    </body>
        </>
    );

}

export default Sign_up;
