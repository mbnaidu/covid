import React,{useState} from 'react'
import { Button, Form, Jumbotron,FormGroup, Input, Label, FormFeedback, InputGroupAddon, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup } from 'reactstrap'
import '../Styles/SignUp.css'
import { useHistory } from 'react-router-dom';
import { ButtonContent } from 'semantic-ui-react';

function SignUp() {

    // To change directories
        const history = useHistory();

    //setting color before the input
        const [EM,setEM] = useState(false);
        const [EMD,setEMD] = useState(false);

        const [ID,setID] = useState(false);
        const [IDD,setIDD] = useState(false);

        const [UN,setUN] = useState(false);
        const [UND,setUND] = useState(false);

        const [PA,setPA] = useState(false);
        const [PAD,setPAD] = useState(false);

        const [PB,setPB] = useState(false);
        const [PBD,setPBD] = useState(false);
        
        const [C,setC] = useState(false);
        const [CD,setCD] = useState(false);

        const [Role, setRole] = useState("Select Your Role")

    // input
        const [id, setId] = useState("");
        const [username, setUsername] = useState("");
        const [password1, setPassword1] = useState("");
        const [password2, setPassword2] = useState("");
        const [email, setEmail] = useState("");
        const [contactNumber, setContactNumber] = useState("");

    // setting color after input

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

        const id_change = () =>{
            if(id.length === 10){setID(false);setIDD(true);};
            if(id.length !== 10){setID(true);setIDD(false)};
        }
        const email_change = () => {
            if(email.length>=5){setEM(false);setEMD(true);};
            if(email.length<5){setEM(true);setEMD(false);};
        }
        const username_change = () => {
            if(username.length>5){setUN(false);setUND(true)};
            if(username.length<4){setUN(true);setUND(false)};
        }
        const password_change = (a,b) =>{
            if(b === a){setPB(false);setPBD(true)};
            if(b !== a){setPB(true);setPBD(false)};
        }
        const contactNumber_change = (c) => {
            if(contactNumber.length===9 ){setCD(true);setC(false)};
            if(contactNumber.length>9 || contactNumber.length<9){setC(true);setCD(false)};
        }
        
const [viewModal, setViewModal] = useState(false);
const viewModalToggle = () => setViewModal(true);
    // checking input 
        function onSignupclickHandler() {
            if(id!="" && username!="" && password1 == password2  && email!="" && contactNumber!="" && password1!=""){
                viewModalToggle();
                const data = {
                    "id":id,
                    "username":username,
                    "password":password1,
                    "email":email,
                    "isStudent": true,
                    "contact":contactNumber,
                }
                // axios.post('http://localhost:3001/signup', {data}).then(
                //     function(res) {
                //         if(res.data) {
                //         }
                //     }
                // )
            }
        };
    return (
        <div>
            <div>
                <Modal isOpen={viewModal} size="lg" toggle={viewModalToggle} >
                    <ModalHeader ><strong>Sign Up Details....</strong></ModalHeader>
                        <ModalBody>
                                SUCCESSFULLY REGISTERED
                                </ModalBody>
                            <ModalFooter>
                            <Button color="success" href="/"><strong>Continue...</strong></Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </div>
        <div className="hero-image"> 
            <div className="signup">
                <a href="/">
                <img  top height="120" className="signup_image" src={require('../Shared/vit.ico')} alt="" />
                </a>
                    <div className="sign__up">
                    <Form>
                        <FormGroup >
                            <div class="form-floating ">
                                <Input type="number" className={ID ? "form-control is-invalid" : "signup_control"} id="rcorners3" placeholder="name@example.com" valid={IDD} value={id}   onChange={event=> {setId(event.target.value);id_change()}} this required/>
                                <Label >Aadhar Card No.</Label>
                            </div>
                        </FormGroup>
                        <FormGroup  >
                            <div class="form-floating">
                                <Input type="password" className={EM ? "form-control is-invalid" : "signup_control"} id="rcorners3" placeholder="Password" valid={EMD}  type="text" value={email}   onChange={event=> {setEmail(event.target.value);email_change()}}/>
                                <Label for="floatingPassword">Full Name</Label>
                            </div>
                        </FormGroup>
                        <FormGroup  >
                            <div class="form-floating">
                                <Input type="password" className={UN ? "form-control is-invalid" : "signup_control"} id="rcorners3" placeholder="Password" valid={UND}   type="text" value={username }   onChange={event=> {setUsername(event.target.value);username_change()}}/>
                                <Label for="floatingPassword">User Name</Label>
                            </div>
                        </FormGroup>
                        <FormGroup  >
                            <div class="form-floating">
                                <Input type="password" className="form-control "  id="rcorners3" placeholder="Password"  type="password" value={password1 }   onChange={event=> {setPassword1(event.target.value);}}/>
                                <Label for="floatingPassword">Password</Label>
                            </div>
                        </FormGroup>
                        <FormGroup  >
                            <div class="form-floating">
                                <Input type="password" className={PB ? "form-control is-invalid" : "signup_control"} id="rcorners3" placeholder="Password" valid={PBD}   type="password" value={password2}   onChange={event=> {setPassword2(event.target.value);password_change(password1,event.target.value)}}/>
                                <Label for="floatingPassword">Confirm password</Label>
                            </div>
                            </FormGroup>
                        <FormGroup  >
                            <div class="form-floating">
                                <Input type="password" className={C ? "form-control is-invalid" : "signup_control"} id="rcorners3" placeholder="Password" valid={CD}  type="number" value={contactNumber}   onChange={event=> {setContactNumber(event.target.value);contactNumber_change(contactNumber)}}/>
                                <Label for="floatingPassword">Contact number</Label>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Button type="button">
                                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret aria-checked color="accent" >
                                {Role}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Select Role</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={event=> {setRole("Citizen")}}>Citizen</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={event=> {setRole("Vaccinator")}}>Vaccinator</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                            </Button>
                        </FormGroup>
                    </Form>
                        <Button className="signup_Button " type="submit"  onClick={()=>{onSignupclickHandler();}}><strong>Sign Up</strong></Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp
