import React from "react";
// import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import upi from "./upi.png";
// import Date from "../Date";

// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
// 		script.src = src
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.body.appendChild(script)
// 	})
// }

const Registration = () => {

//     async function displayRazorpay() {
// 		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

// 		if (!res) {
// 			alert('Razorpay SDK failed to load. Are you online?')
// 			return
// 		}

// 		const data = await fetch('http://localhost:8000/razorpay', 
// 		{ method: 'POST' }).then((t) =>
// 			t.json()
// 		)

// 		console.log(data)

// 		const options = {
// 			key: 'rzp_test_0Kpqhy50iiKUgM',
// 			currency: data.currency,
// 			amount: data.amount.toString(),
// 			order_id: data.id,
// 			name: 'ICICC-CONF REGISTRATION',
// 			description: 'Thank you.',
// 			// image: "",
//             // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
// 			handler: function (response) {
// 				alert('Payment successful.')
// 				alert(response.razorpay_payment_id)
// 				alert(response.razorpay_order_id)
// 				alert(response.razorpay_signature)
				
// 			},
// 			prefill: {
// 				name:"",
// 				email: '',
// 				phone_number: ''
// 			}
// 		}
// 		const paymentObject = new window.Razorpay(options)
// 		paymentObject.open()
// 	}

  const url1="https://pages.razorpay.com/pl_IOTJy0iZ8kxq43/view";
  const url2="https://www.paypal.com/paypalme/ICICCConference?locale.x=en_GB";
  const url3="https://buy.stripe.com/dR602n7dZ06g1JmbIJ";
  const url4="https://rzp.io/rzp/Varw8wTX";
  const url5="https://rzp.io/rzp/5I3shvTY";

  

    return (
    <div className={style.container}>		  
		<h2 class={style.abtHeader}>Registration</h2>
		<hr />
		<p>Once Your paper is accepted, the registration process begins. you have to complete the following steps.<br></br>
		<b>Step1 - Registration Fee:</b> It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and included in the Technical Program.</p>
		<b>Author/Co-Author Registration Fee Includes</b>
		<ol>
			<li>Welcome reception</li>
			<li>Badge</li>
			<li>Conference Kit with Proceeding</li>
			<li>Participation in the technical program</li>
			<li>Coffee breaks</li>
			<li>Lunch</li>
			<li>Banquet</li>
		</ol>
		<b>Registration Account Details</b><br></br>

		<div className={style.paymentCont}>
		<p style={{fontWeight:"700",fontSize:"17px"}}>Pay via Bank Transfer</p><br></br>
		<div style={{width:"70vw",margin:"auto"}}>
		{/* <table class="table table-bordered table-hover" style={{textAlign:"left"}}>
            <tbody>
              <tr>
                <td><b>ACCOUNT NAME </b></td>
                <td> ICICC</td>
              </tr>
              <tr>
                <td><b>ACCOUNT NUMBER </b></td>
                <td> 510909010080523</td>
              </tr>
              <tr>
                <td><b>BANK </b></td>
                <td> City Union Bank</td>
              </tr>
              <tr>
                <td><b>BRANCH </b></td>
                <td> Sector-8, Rohini Delhi </td>
              </tr>
              <tr>
                <td><b> BRANCH CODE </b></td>
                <td> 244</td>
              </tr>
              <tr>
                <td><b> IFSC CODE </b></td>
                <td> CIUB0000244 </td>
              </tr>
              <tr>
                <td><b> MICR </b></td>
                <td> 600054027</td>
              </tr>
              <tr>
                <td><b> SWIFT CODE </b></td>
                <td> CIUBIN5M</td>
              </tr>
              <tr>
                <td><b> ACCOUNT TYPE </b></td>
                <td> CURRENT</td>
              </tr>
            </tbody>
      </table>
      <p style={{fontWeight:"700",fontSize:"17px"}}>Secondary Bank Account</p> */}
      <table class="table table-bordered table-hover" style={{textAlign:"left"}}>
            <tbody>
              <tr>
                <td><b>ACCOUNT NAME </b></td>
                <td>ui-educon</td>
              </tr>
              <tr>
                <td><b>ACCOUNT NUMBER </b></td>
                <td> 510909010229212</td>
              </tr>
              <tr>
                <td><b>BANK </b></td>
                <td> City Union Bank</td>
              </tr>
              <tr>
                <td><b>BRANCH </b></td>
                <td> Sector-8, Rohini Delhi </td>
              </tr>
              <tr>
                <td><b> BRANCH CODE </b></td>
                <td> 244</td>
              </tr>
              <tr>
                <td><b> IFSC CODE </b></td>
                <td> CIUB0000244 </td>
              </tr>
              {/* <tr>
                <td><b> MICR </b></td>
                <td> 600054027</td>
              </tr>
              <tr>
                <td><b> SWIFT CODE </b></td>
                <td> CIUBIN5M</td>
              </tr>*/}
              <tr> 
                <td><b> ACCOUNT TYPE </b></td>
                <td> CURRENT</td>
              </tr>
            </tbody>
          </table>
</div>

<hr />
<p style={{fontWeight:"700",fontSize:"17px"}}>Pay via Paypal</p>
<p>For Payment from International Authors/Attendees, use the following links</p>
    	<button  className={style.paymentBtn}><a href={url2} target="_blank" className={style.links} style={{color:"white"}}>Pay via Paypal</a></button><br /><span>OR</span><br />
      <button  className={style.paymentBtn}><a href={url3} target="_blank" className={style.links} style={{color:"white"}}>Pay via Stripe</a></button>
      <button  className={style.paymentBtn}><a href={url4} target="_blank" className={style.links} style={{color:"white"}}>Pay via Razorpay</a></button>
<hr />
<p style={{fontWeight:"700",fontSize:"17px"}}>Pay via RazorPay</p>
<p>For payment from Indian Authors/Attendees, use the following payment link</p>
    	<button  className={style.paymentBtn}><a href={url5} target="_blank" className={style.links} style={{color:"white"}}>Payment Link - 1</a></button>
      <button  className={style.paymentBtn}><a href={url1} target="_blank" className={style.links} style={{color:"white"}}>Payment Link - 2</a></button>
      <p>OR</p>
      <p style={{fontWeight:"700",fontSize:"17px"}}>Pay via UPI</p>
      <img src={upi} style={{width:"150px"}}/>
</div> 
<hr />

<p style={{fontWeight:"700",fontSize:"17px"}}>Registration Fee For ICICC 2025 (Springer)</p>
<table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th><b>Category</b></th>
              <th><b>Early Registration (before 25th November, 2024) </b></th>
              <th><b>Late Registration (after 25th November, 2024) </b></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Research Scholar/Student</td>
              <td>INR 11000</td>
              <td>INR 12000</td>

            </tr>
            <tr>
              <td>Academician</td>
              <td>INR 12000</td>
              <td>INR 13000</td>

            </tr>
            <tr>
              <td>Industrial Participants</td>
              <td>INR 13000</td>
              <td>INR 14000</td>

            </tr>
            <tr>
              <td>Attendee</td>
              <td>INR 5000</td>
              <td>INR 6000</td>

            </tr>
            <tr>
              <td>Foreigner Research Scholar/Student (Outside India)</td>
              <td>USD 200</td>
              <td>USD 250</td>

            </tr>
            <tr>
              <td>Foreigner Academician (Outside India)</td>
              <td>USD 250</td>
              <td>USD 300</td>

            </tr>

            <tr>
              <td>Foreigner Industrial Participant (Outside India)</td>
              <td>USD 300</td>
              <td>USD 350</td>

            </tr>
            <tr>
              <td>Attendee (Outside India)</td>
              <td>USD 100</td>
              <td>USD 150</td>

            </tr>

          </tbody>
</table>


<p style={{fontWeight:"700",fontSize:"17px"}}>Registration Fee For ICICC 2025 (Poster Paper Presentation)</p>
<table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th><b>Category</b></th>
              <th><b>Early Registration (before 25th November, 2024) </b></th>
              <th><b>Late Registration (after 25th November, 2024) </b></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Research Scholar/Student</td>
              <td>INR 5000</td>
              <td>INR 5500</td>

            </tr>
            <tr>
              <td>Academician</td>
              <td>INR 5500</td>
              <td>INR 6000</td>

            </tr>
            <tr>
              <td>Industrial Participants</td>
              <td>INR 6000</td>
              <td>INR 6500</td>

            </tr>
            <tr>
              <td>Foreigner Research Scholar/Student (Outside India)</td>
              <td>USD 120</td>
              <td>USD 150</td>

            </tr>
            <tr>
              <td>Foreigner Academician (Outside India)</td>
              <td>USD 150</td>
              <td>USD 200</td>

            </tr>

            <tr>
              <td>Foreigner Industrial Participant (Outside India)</td>
              <td>USD 200</td>
              <td>USD 250</td>

            </tr>

          </tbody>
</table>
		<b>Special Discount of 10% for Universal Inovator (UI) Member</b>
    </div>
    )

}
export default Registration;