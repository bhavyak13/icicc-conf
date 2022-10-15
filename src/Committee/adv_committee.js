import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from "../Date";

const AdvCom=()=>{
const list_of_adv=["Prof(Dr.) Valentina Emilia Balas , Aurel Vlaicu University of Arad, Romania",
"Prof(Dr.) Vincenzo Piuri , University of Milan, Italy",
"Prof(Dr.) Marius Balas , Aurel Vlaicu University of Arad, Romania",
"Prof(Dr.) Mohamed Salim Bouhlel , Sfax University, Tunisia",
"Prof(Dr.) Aboul Ella Hassanien , Cairo University, Egypt",
"Prof(Dr.) Cenap Ozel , King Abdulaziz University, Saudi Arabia",
"Prof(Dr.) Ashiq Anjum , University of Derby, Bristol, UK",
"Prof(Dr.) Mischa Dohler , King’s College London, UK ",
"Prof(Dr.) Sanjeevikumar Padmanaban , University of Johannesburg, South Africa ",
"Prof(Dr.) Siddhartha Bhattacharyya , Principal, RCC Institute of Information Technology, Kolkata, India",
"Prof(Dr.) David Camacho , Associate Prof, Universidad Autonoma de Madrid,Spain",
"Dr. Abu Yousuf , Asst.Prof University Malaysia Pahang Gambang, Malaysia",
"Prof(Dr.) Salah-ddine Krit , University Ibn Zohr – Agadir, Morocco",
"Dr. Sanjay Kumar Biswash , Research Scientist INFOCOMM Lab, Russia",
"Prof(Dr.) Maryna Yena S , Senior Lecturer Medical University of Kiev, Ukraine",
"Prof(Dr.) Giorgos Karagiannidis , Aristotle University of Thessaloniki, Greece",
"Prof(Dr.) Tanuja SRIVASTAVA , Dept of Mathematics, IIT Roorkee",
"Dr. D Jude Hemanth , Associate Professor, Karunya University, Coimbatore",
"Prof(Dr.) Tiziana Catarci , Sapienza University, Rome, Italy",
"Prof(Dr.) Salvatore Gaglio , University Degli Studi di Palermo, Italy",
"Prof(Dr.) Bozidar Klicek , University of Zagreb, Croatia",
"Dr. Marcin Paprzycki , Associate Professor, Polish Academy of Science, Poland",
"Prof(Dr.) A.K. Singh , NIT Kurukshetra, India",
"Prof(Dr.) Anil Kumar Ahlawat , KIET Group of Institutes, India",
"Prof(Dr.) Chang-Shing Lee , National University of Tainan, Taiwan",
"Dr. Paolo Bellavista , Associate Prof, Alma Mater Studiorum–Università di Bologna",
"Prof(Dr.) Sanjay Misra , Covenant University, Nigeria",
"Prof(Dr.) Benatiallah Ali , Associate Professor Adrar University, Algeria",
"Prof(Dr.) Suresh Chandra Satapathy , PVPSIT, Vijayawada, India",
"Prof(Dr.) Marylene Saldon-Eder , Mindanao University of Science and Technology",
"Prof(Dr.) Özlem ONAY , Anadolu University, Eskisehir TURKEY",
"Miss Rubelyn W. Coronel , Datu Abing St., Calinan, Davao City",
"Prof(Dr.) Kei Eguchi , Dept. of Information Electronics, Fukuoka Institute of Technology",
"Prof(Dr.) Zoltan Horvath , Professor, Kasetsart University",
"Dr. AKM Matiul Alam , Vancouver British Columbia, Canada",
"Prof(Dr.) Joong Hoon Jay Kim , Korea University",
"Prof(Dr.) Sheng-Lung Peng , National Dong Swa Uinversity, Taiwan",
"Dr. Daniela Lopez De Luise , CI2S Lab, Argentina",
"Dr. Dac-Nhuong Le , Haiphong University, Vietnam",
"Dr. Dusanka Boskovic , University of Sarajevo, Sarajevo",
"Dr. Periklis Chat Zimisios , Alexander TEI of Thessaloniki, Greece ",
"Dr. Atta Ur Rehman Khan , KSU and CIIT",
"Dr. Nhu Gia Nguyen , Duy Tan University, Vietnam",
"Prof(Dr.) Huynh Thanh Binh , Hanoi University of Science & Technology, Vietnam",
"Dr. Ahmed Faheem Zobaa , Brunel University, London",
"Prof(Dr.) Ladjel Bellatreche , Poitiers University",
"Prof(Dr.) Victor C.M. Leung , The University of British Columbia, Canada",
"Prof(Dr.) Huseyin Irmak , Cankiri Karatekin University, Turkey",
"Dr. Alex Norta , Associate Professor, Tallinn University of Technology, Estonia",
"Prof(Dr.) Amit Prakash Singh , GGSIPU, Delhi, India",
"Prof(Dr.) Abhishek Swaroop , Bhagwan Parshuram Institute of Technology, Delhi"];

return(
    <div>
         <h2 class={style.abtHeader}>Advisory Committee</h2>
        <hr />
        <div className={style.flex}>
        <div className={style.techCont}>
            {list_of_adv.map(mem=>{
                return(
                    <Alert className={style.techMem}><p style={{fontWeight:"500",width:"300px",fontSize:"14px"}}>{mem}</p></Alert>
                );
            }) 
            }
        </div>
        <Date />
        </div>
    </div>
)

}
export default AdvCom;