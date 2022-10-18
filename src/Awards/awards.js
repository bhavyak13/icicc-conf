import React from "react";
import style from "../header.module.css";
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Awards=()=>{
    return(
        <div className={style.awardsCont}>
		<Alert> <h4><a style={{textTransform:"uppercase"}}>Click here to see the registration details for participation in UILA 2022</a></h4></Alert>
		<h4>4th Universal Inovators LEADERSHIP AWARDS (UILA 2023)</h4>
		<hr />
		
		<b>About Universal Inovators Leadership Awards (UILA)</b>
		<p>UI Leadership Awards is to honor the determined effort and achievements of Change makers who have made their performance and innovative excellence in their respective field. It is a very special and unique set up, it involves <span className={style.highlight}>International Excellence awards</span> in various categories. UI Leadership award creates a world-wide recognition and reserves the own space in the Society for the winning profiles. As such it also provides participants with an ideal opportunity to make their work visible to a wider audience.</p>

<p>Third UI Leadership awards will be organized along with 5th International Conference on Innovative Computing and Communication organized jointly by Shaheed Sukhdev College of Business Studies (University of Delhi) and Universal Inovators at Shaheed Sukhdev College of Business Studies, New Delhi, India.</p>
<br />
<h4 style={{textTransform:"uppercase",fontWeight:"700"}}>Important dates:</h4>
<hr />
<Card style={{ width: '50vw' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Last date for nomination:&nbsp;&nbsp;<b>31st January, 2023</b></ListGroup.Item>
        <ListGroup.Item>Announcement of Result:&nbsp;&nbsp;<b>28th February, 2023</b></ListGroup.Item>
      </ListGroup>
</Card>
<br />

  <Alert style={{backgroundColor:"#d9edf7", color:"#31708f"}}>
					<h4>NO NOMINATION/AWARD FEES, BUT ALL THE AWARDEES SHOULD REGSITER FOR THE CONFERENCE TO PARTICIPATE IN THE AWARD CEREMONY</h4>
					</Alert>
					<h4 style={{textTransform:"uppercase",fontWeight:"700"}}>Award category:</h4>
					<hr />
					<h5 style={{fontWeight:"700"}}>Leadership awards will honor the awards in the following categories:</h5><br />
					<h5 style={{fontWeight:"700"}}>Individual Awards</h5>

					<Alert className={style.awardAlert}>

                <h5 style={{color:"#31708f"}}> Life time achievement Award </h5>
				<hr />
						
						<p className={style.alertCont}>
							To honor outstanding leaders in education who have dedicated their life to the enhancement
							of the Institution/Organization and advancing the field of education with their pioneering
							spirit, demonstrated innovation, advocacy and career achievements that have improved the
							education industry. The Lifetime Achievement Award would be presented to an individual
							member whose long-term efforts, dedication, and sustained commitment has supported the
							organization/ Society/ Research/ Mankind.
						</p>
						</Alert>
                
    <div className="col-md-12">		

			<div className="row">
				<h3 className="container">  </h3>				
				<div className="col-md-12">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Young Researcher Award </h5>
						<hr />
						<p className={style.alertCont}> To the research scholars, academicians and professionals from industries for their research
							work published in any International Journals or Conferences, having age not more than 35.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 	Best Researcher Award 
</h5>
						<hr />
						<p className={style.alertCont}> To the research scholars, academicians and professionals from industries for their research work published in any International Journals or Conferences. 
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Best Head of Department Award </h5>
						<hr />
						<p className={style.alertCont}>For the HOD's of various Academic Departments of Educational Institutes for their excellence in leadership and management.

						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Best Dean of Department Award 

 </h5>
						<hr />
						<p className={style.alertCont}> For the Dean's of various Academic Departments of Educational Institutes for their excellence in leadership and management.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>


Best Teacher Award
 </h5>
						<hr />
						<p className={style.alertCont}> For teaching professionals for excellence in teaching.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 
Best Research Paper Award
</h5>
						<hr />
						<p className={style.alertCont}> For writing the excellent paper published in reputed journal like Nature.
						</p>
				</Alert>
				</div>
			


				<div className="col-md-4">
					<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>Best Principal Award 

 </h5>
						<hr />
						<p className={style.alertCont}> Award for the Principals of the Higher Educational Institutes.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 
Best Research Thesis Award 
</h5>
						<hr />
						<p className={style.alertCont}> Award to the Ph.D. students for their thesis.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  

Best Research Project Award 
</h5>
						<hr />
						<p className={style.alertCont}> Award to the UG/PG/PhD students for project.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>

Best PG Thesis Award 
 </h5>
						<hr />
						<p className={style.alertCont}>Award to the PG students for their thesis.
						</p>
				</Alert>
				</div>
	



				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Best Director Award 
</h5>
						<hr />
						<p className={style.alertCont}> Award for the Directors of the Educational Institutes.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 

Highly Cited Paper Award
</h5>
						<hr />
						<p className={style.alertCont}> For the paper which is cited highly on Google scholar.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 

Best PhD Thesis Award 
</h5>
						<hr />
						<p className={style.alertCont}>Award to the best PhD thesis.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 

Best Innovation Award 
 </h5>
						<hr />
						<p className={style.alertCont}> For the best innovation.
						</p>
				</Alert>
				</div>

	


				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Best Entrepreneur Award 
</h5>
						<hr />
						<p className={style.alertCont}> Award to the entrepreneur of the year. 
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 

Researcher of the Year
 </h5>
						<hr />
						<p className={style.alertCont}> Award for Researcher of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 

Teaching Excellence Award
 </h5>
						<hr />
						<p className={style.alertCont}> Award for Teaching Excellence.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 

Professor of the Year
</h5>
						<hr />
						<p className={style.alertCont}> Award for Professor of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Scientist of the Year


</h5>
						<hr />
						<p className={style.alertCont}> Award for Scientist of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 
Faculty of the Year

 </h5>
						<hr />
						<p className={style.alertCont}> Award for Faculty of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> 
Research Achievement Award
 </h5>
						<hr />
						<p className={style.alertCont}> Award for Research Achievement.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Academic Professional Award

 </h5>
						<hr />
						<p className={style.alertCont}> Award for Academic Professional.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>
Administrator of the Year
 </h5>
						<hr />
						<p className={style.alertCont}> Award for Administrator of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>

Supervisor of the Year
</h5>
						<hr />
						<p className={style.alertCont}> Award for Supervisor of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Outstanding Academic Leader of the Year
 </h5>
						<hr />
						<p className={style.alertCont}> Award for Outstanding Academic Leader of the year.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> START-UP of the Year Award 
 </h5>
						<hr />
						<p className={style.alertCont}> Award to best start-up.
						</p>
				</Alert>
				</div> 

				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Young Innovator Award </h5>
						<hr />
						<p className={style.alertCont}> Award to young Innovator.
						</p>
				</Alert>
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Womanovator Award </h5>
						<hr />
						<p className={style.alertCont}> Award given to womanovator.
						</p>
				</Alert>
					
				</div>
			</div>

			<br />


			<div className="row container">
			
			<h5 style={{fontWeight:"700"}}>Higher Education Awards</h5>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Best College of the Year (BBA/Bcom/BA/Bsc)

 </h5>
						<hr />
						<p className={style.alertCont}> This award is to recognize the institutes with excellent courses and pedagogy in undergrad
							level
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Institute offering best certification courses 
 </h5>
						<hr />
						<p className={style.alertCont}>Institute offering certificate courses in language, vocational courses, technology,
							multimedia, music & dance, skill enhancement etc. 
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  University of the Year (North)
 </h5>
						<hr />
						<p className={style.alertCont}> This will be awarded to an institution that has demonstrated exceptional performance in the
							past academic year.
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  University of the Year (South)

 </h5>
						<hr />
						<p className={style.alertCont}> This will be awarded to an institution that has demonstrated exceptional performance in the
							past academic year.
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  University of the Year (East)
 </h5>
						<hr />
						<p className={style.alertCont}> This will be awarded to an institution that has demonstrated exceptional performance in the
							past academic year.
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  BUniversity of the Year (West) 

 </h5>
						<hr />
						<p className={style.alertCont}>This will be awarded to an institution that has demonstrated exceptional performance in the
							past academic year.
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  International Collaboration of the Year 

 </h5>
						<hr />
						<p className={style.alertCont}> This award will recognize exceptional projects carried out jointly between an Indian
							institution and one or more international partners. 
						</p>
				</Alert>
				
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Business School of the Year (National/Regional)
 </h5>
						<hr />
						<p className={style.alertCont}> This title will be awarded to the business school demonstrating the most outstanding
							performance in the past academic year.
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Most Emerging Higher Education Institute of the Year 

 </h5>
						<hr />
						<p className={style.alertCont}> Emerging higher education institution lesser than 5 years old in
							Medical/Engineering/Management field
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Outstanding ICT Initiative of the Year 
 </h5>
						<hr />
						<p className={style.alertCont}>This award will recognize and reward an institutional ICT initiative that has demonstrated
							an innovative, strategic and potentially far-reaching use of ICT in support of the goals of
							that institution
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Most Entrepreneurial Institution of the Year
 </h5>
						<hr />
						<p className={style.alertCont}>The Awards will recognize institutions that have embedded entrepreneurial activity into the
							fabric of their institution either through setting Incubation centers or tie-ups with
							corporate sector for promoting entrepreneurship in higher education 
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Research Project of the Year 
 </h5>
						<hr />
						<p className={style.alertCont}> This will be awarded to the individual or team for innovative research that has a
							far-reaching impact on its field and has caught, or has the potential to catch, the
							imagination of the public. It is open to individuals or teams in any discipline at an Indian
							institution. Nominations must be endorsed by the applicants' institution.
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Excellence in Distance learning education 
 </h5>
						<hr />
						<p className={style.alertCont}> This award is for overcoming geographical challenges without diluting the quality
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Teaching Excellence Awards
 </h5>
						<hr />
						<p className={style.alertCont}> This will be awarded to the individual for demonstrating the upgraded curriculum and
							teaching methodologies
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Higher Education Publisher of the Year 
 </h5>
						<hr />
						<p className={style.alertCont}> The Award will recognize a Leading publisher who has brought out the best content in Higher
							education
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>   Best Private University
 </h5>
						<hr />
						<p className={style.alertCont}> Best academic delivery with desired infrastructure, best practices & working for the cause of
							Education
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>  Best Infrastructure of the Year
 </h5>
						<hr />
						<p className={style.alertCont}> 
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Institute with best placement
 </h5>
						<hr />
						<p className={style.alertCont}> 
						</p>
				</Alert>
				
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}> Best Engineering College of the Year (Regional / National)
 </h5>
						<hr />
						<p className={style.alertCont}>
						</p>
				</Alert>
					
				</div>
				<div className="col-md-4">
				<Alert className={style.awardAlert}>
						<h5 style={{color:"#31708f"}}>   Best Medical College of the Year (Regional / National)
 </h5>
						<hr />
						<p className={style.alertCont}>
						</p>
				</Alert>
					
				</div>
			</div>
            </div> <br />
			<h5 style={{fontWeight:"700"}}>SUBMISSION:</h5>
			<p>Please fill the attached form and send it along with complete CV to <span style={{color:"#4183c4"}}>universalinovators@gmail.com</span>(<b>Subject: Award [Category/Sub-Category] </b>).<br />If applying for best paper or thesis awards, then mail us filled form, CV, paper/thesis to <span style={{color:"#4183c4"}}>universalinovators@gmail.com </span>(<b>Subject: Award [Category/Sub-Category]</b> ).</p>
			<Card style={{ width: '50vw' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><a href={require("./Award Form- Individual Award.pdf")}style={{textDecoration:"none"}}><b>Individual Award Form</b></a></ListGroup.Item>
        <ListGroup.Item><a href={require("./Award Form- Higher Education Award.pdf")} style={{textDecoration:"none"}}><b>Higher Education Award Form</b></a></ListGroup.Item>
      </ListGroup>
</Card>
<br /><br />
	
<h5 style={{fontWeight:"700"}}>NOMINATION AND EVALUATION:</h5>
			<Card style={{ width: '70vw' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Each applicant would be required to fill in a Self-Nomination form and send it to us by 31st January, 2023</ListGroup.Item>
        <ListGroup.Item>Any organization/individual from education/allied sector can apply. Each applicant can apply for one or multiple categories.</ListGroup.Item>
		<ListGroup.Item>The nominees in each category will be presented to the final jury for determination of winners.</ListGroup.Item>
		<ListGroup.Item>Information received will be treated confidential and not used for any purpose except for determining the winner of the awards</ListGroup.Item>
		<ListGroup.Item>Incomplete questionnaire in any manner will disqualify a participant from participating in the awards.</ListGroup.Item>
		<ListGroup.Item>Right to permit participation is reserved with the Awards management.</ListGroup.Item>
      </ListGroup>
</Card>
<br /><br />
<h5 style={{fontWeight:"700"}}>PAST AWARDEES:</h5>
			<Card style={{ width: '50vw' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><b>UILA Awards 2020</b></ListGroup.Item>
        <ListGroup.Item><b>UILA Awards 2021</b></ListGroup.Item>
      </ListGroup>
</Card>
			
			</div>
            );
            };

export default Awards;            