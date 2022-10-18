import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Button from 'react-bootstrap/Button';

const SpSession=()=>{
    return (
        <div className={style.container}>
          <hr />
            <u><b>Invitation to conduct special session in ICICC 2023</b></u> <br /><br />
            <b className={style.greet}>Dear Sir/ Mam</b>
            <br /><br />
            <p>Greeting from ICICC-2023!<br /><br />

ICICC Conference team invites you to organize the special session in sixth version of International Conference on Innovative Computing and Communications (ICICC-2023), to be held at Shaheed Sukhdev College of Business Studies (University of Delhi), Sector 16, Rohini, Delhi - 110089, India during 17-18th February 2023 of your research domain. We are diligently working to bring some of the most knowledgeable researchers from all over the world along with the leaders from the industry to explore the important topics of research. The two day conference will include workshop, technical sessions and keynotes on cutting edge technologies related to our industry. The URL for the conference: <a href="">icicc-conf.com</a>. International Conference on Innovative Computing and Communication (ICICC) is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Kindly increase the value of the conference by being part of this conference as a session chair and heading your own session in this esteemed conference. We are aware about your networking skills and of having an eye to identify quality research papers.</p>
<b>Highlights of the conference and Special Session Benefits:</b> <br/>
<ol>
<li> All accepted papers will be published in the proceedings of ICICC-2023 (Scopus Indexed)</li>
<li> You will get 20% of the total fees collected in your session.</li>
<li> The minimum number of registrations should be 8.</li>
<li> Extended papers in SCI/Scopus/ESCI/DBLP/ACM Digital Library journals. We have already got approval from some Scopus and high quality journals. (Soon will be declared)</li>
<li> High quality publishing houses are part of this conference like Springer, Elsevier, Inderscience, IEEE, Benthm Science, IGI Global and many more.</li>
<li> Opportunity to be Session chair at the conference.</li>
<li> Special discount for your personal paper if above conditions are met. (If minimum number of papers get registered in your session)</li>
<li> Extra weightage and support will be provided for your session extended paper in SCI/ Scopus Journal.</li>
<li>Many international and national key note speakers will be delivering their lectures on latest innovative technologies in the conference.</li>
<li>Easy accessibility of the well-connected conference venue.</li>
</ol>

<p>If you are interested to conduct a special session, kindly mail us the special session proposal at <a href='mailto:icicc.ui@gmail.com'>icicc.ui@gmail.com</a> latest by 30th November 2022 as per the format attached with this mail.</p>

<p>
ICICC brings together the innovative research in the field of Computing and Communication to a common platform. The primary goal of the conference is to promote research and developmental activities. Another goal is to promote scientific information interchange between researchers, developers, engineers, students, and practitioners working in and around the world.</p>
<br />
<p className={style.greet}>All the accepted papers (after double blinded peer review) will be published in a Springer series (Proposed) and further extended accepted papers will be published in the special issues of SCI/SCOPUS/WoS/DBLP/ACM/EI indexed Journals.</p>
<p>Looking to see you in ICICC-2023. <br /><br />

Sincerely,<br />

Organizer and Convener<br />

<b>ICICC-2023</b></p>
<Button variant="primary" > <a href={require("./Session_Proposal_Template.docx")} style={{color:"white",textDecoration:"none"}}>Session Proposal Template</a></Button>

        </div>
    );
}
export default SpSession;