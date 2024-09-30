

import { useState } from "react";

function FormData() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(""); 

    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState(""); 

    const [paracolor, setParacolor] = useState({ color: "" });
    const [paracolor2, setParacolor2] = useState({ color: "" });
    const [paracolor3, setParacolor3] = useState({ color: "" });
    const [paracolor4, setParacolor4] = useState({ color: "" });
    const [paracolor5, setParacolor5] = useState({ color: "" }); 

    const [changecolor, setChangecolor] = useState({ borderColor: "", borderWidth: "2px", borderStyle: "solid" });
    const [changecolor1, setChangecolor1] = useState({ borderColor: "", borderWidth: "2px", borderStyle: "solid" });
    const [changecolor2, setChangecolor2] = useState({ borderColor: "", borderWidth: "2px", borderStyle: "solid" });
    const [changecolor3, setChangecolor3] = useState({ borderColor: "", borderWidth: "2px", borderStyle: "solid" });
    const [changecolor4, setChangecolor4] = useState({ borderColor: "", borderWidth: "0px", borderStyle: "solid" }); // Color for gender

    function validateName(value) {
        let namePattern = /^[a-zA-Z ]{3,30}$/;

        if (value === "") {
            setAnswer1("Please enter the name");
            setChangecolor({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor({ color: "red" });
        } else if (namePattern.test(value)) {
            setAnswer1("Name is valid");
            setChangecolor({ borderColor: "green", borderWidth: "2px", borderStyle: "solid" });
            setParacolor({ color: "green" });
        } else {
            setAnswer1("Name should be 3 to 30 characters");
            setChangecolor({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor({ color: "red" });
        }
    }

    function validateEmail(value) {
        let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (value === "") {
            setAnswer2("Please enter the E-mail");
            setChangecolor1({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor2({ color: "red" });
        } else if (emailPattern.test(value)) {
            setAnswer2("E-mail is valid");
            setChangecolor1({ borderColor: "green", borderWidth: "2px", borderStyle: "solid" });
            setParacolor2({ color: "green" });
        } else {
            setAnswer2("Please enter a valid E-mail");
            setChangecolor1({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor2({ color: "red" });
        }
    }

    function validatePhone(value) {
        const phonePattern = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

        if (value === "") {
            setAnswer3("Please enter the phone number");
            setChangecolor2({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor3({ color: "red" });
        } else if (phonePattern.test(value)) {
            setAnswer3("Phone number is valid");
            setChangecolor2({ borderColor: "green", borderWidth: "2px", borderStyle: "solid" });
            setParacolor3({ color: "green" });
        } else {
            setAnswer3("Please enter a valid phone number");
            setChangecolor2({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor3({ color: "red" });
        }
    }

   function validatepassword(value) {
        const passwordpattern = /^[A-Za-z]\w{7,14}$/;

        if (value === "") {
            setAnswer4("Please enter the password number");
            setChangecolor3({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor4({ color: "red" });
        } else if (passwordpattern.test(value)) {
            setAnswer4("pass word is valid");
            setChangecolor3({ borderColor: "green", borderWidth: "2px", borderStyle: "solid" });
            setParacolor4({ color: "green" });
        } else {
            setAnswer4("Please enter a valid pass word number");
            setChangecolor3({ borderColor: "red", borderWidth: "2px", borderStyle: "solid" });
            setParacolor4({ color: "red" });
        }

    }

        function validateGender(value) {
            if (value === "") {
                setAnswer5("Please select your gender");
                setChangecolor4({ borderColor: "red", borderWidth: "0px", borderStyle: "solid" });
                setParacolor5({ color: "red" });
            } else {
                setAnswer5("Gender is valid");
                setChangecolor4({ borderColor: "green", borderWidth: "0px", borderStyle: "solid" });
                setParacolor5({ color: "green" });
            }
        }
    
    function handleNameChange(e) {
        const value = e.target.value;
        setName(value);
        validateName(value); 
    }

    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value); 
    }

    function handlePhoneChange(e) {
        const value = e.target.value;
        setPhone(value);
        validatePhone(value); 
    }

    function handlepassChange (e) {
        const value = e.target.value;
        setPassword(value);
        validatepassword(value);
    }

    function handleOptionChange (e) {
        const value = e.target.value;
        setGender(value);
        validateGender(value);
    }

    function submitfrom () {
        alert("from submit sucessfully....")
    }

    return (
        <>
            <label>Enter Your Name:</label>
            <input
                type="text"
                name="name"
                className="p-2 rounded-2 input"
                value={name}
                onChange={handleNameChange}
                style={changecolor}
            />
            <p style={paracolor}>{answer1}</p>
            <br />

            <label>Enter Your E-mail:</label>
            <input
                type="text"
                name="email"
                className="p-2 rounded-2 input"
                value={email}
                onChange={handleEmailChange}
                style={changecolor1}
            />
            <p style={paracolor2}>{answer2}</p>
            <br />

            <label>Enter Your Phone Number:</label>
            <input
                type="text"
                name="phone"
                className="p-2 rounded-2 input"
                value={phone}
                onChange={handlePhoneChange}
                style={changecolor2}
            />
            <p style={paracolor3}>{answer3}</p>
            <br />

            <label>Enter Your Pass word:</label>
            <input
                type="password"
                name="pass word"
                className="p-2 rounded-2 input"
                value={password}
                onChange={handlepassChange}
                style={changecolor3}
            />
            <p style={paracolor4}>{answer4}</p>
            <br />

            <div className="gender-selection">
            <label>Select Your Gender:</label>
            <div style={changecolor4}>
                <label>
                    <input
                        type="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={handleOptionChange}
                        className="radio"
                    />
                    Male
                </label>

                <label>
                    <input
                        type="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={handleOptionChange}
                        className="radio"
                    />
                    Female
                </label>
            </div>
            <p style={paracolor5}>{answer5}</p>
            </div> 

            <button onClick={submitfrom} className="btn1">Submit</button>
        </>
    );
}

export default FormData;