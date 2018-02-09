import React, { Component } from "react";

import Header from '../../components/header/Header';

//Styles
require("./styles.scss");

class Home extends Component {
	render() {
   		return (
	      	<div className="container">
                <Header />
	      		<div className="content">
					<div className="home__body">
						<h1>Welcome to Verbascript</h1>

						<p>
							Verbascript is an audio-to- text transcription solution that offers dynamic services
							both nationally and internationally. Our team of dedicated transcribers transcribe
							audio and video files, as well as streamed content, audio cassettes and cell phone
							recordings. We type from all digital formats such as mp3, mp4, wav, wma, aiff, caf,
							wmv, avi and more. We have standard templates that we use for various types of
							transcription and are also happy to use a client-specific format and / or layout.
						</p>

						<p>
							We offer our services both nationally and internationally and currently offer
							transcription in English, Afrikaans and isiZulu. We hope to expand our language
							portfolio to include all 11 South African official languages.
						</p>
						
						<p>
							Internationally, we	service firms of Solicitors and Barristers with their legal documents as well as
							assisting researchers with their academic work.
						</p>

						<h4>Types of transcription we provide include:</h4>

						<ul>
							<li>Interviews</li>
							<li>Research / dissertation work</li>
							<li>Focus Groups</li>
							<li>Legal transcription</li>
							<li>Disciplinary Hearing / CCMA / Arbitration transcription</li>
							<li>Meetings;</li>
							<li>Telephone calls / voice notes</li>
							<li>File notes and dictations</li>
							<li>Wire taps / surveillance</li>
							<li>Voice mails and voice notes</li>
							<li>Television broadcasts</li>
							<li>Internet webcasts / podcasts</li>
							<li>Seminars and presentations</li>
						</ul>

						<h4>Rates</h4>

						<p>
							Transcription pricing is charged per minute of audio recording. We will send out
							an invoice immediately on receipt of your audio file. 
						</p>

						Rates are determined by:

						<ul>
							<li>Turnaround time</li>
							<li>Clarity of recording</li>
							<li>Number of speakers</li>
							<li>Difficult accents</li>
						</ul>
						
						<p>
							For ongoing work, a 30-day account option is available.
						</p>
						
						<h4>Process</h4>

						<ul>
							<li>
								Send us your audio and specify your turnaround
							</li>
							<li>
								We will generate an invoice. Once we have your go-ahead, we will begin transcribing.
							</li>
							<li>
								On completion, and once payment has been received, your transcripts will be sent to you.
								(Hard copies couriered on request.)
							</li>	
						</ul>

						<h4>Advantages of outsourcing</h4>

						<ul>
							<li>
								Scalable Operations –  We provide a flexible transcribing service tailored
								to suit your needs. Whether that is to assist you on a part time basis or
								fulfil a more permanent role, we will work around your schedule to ensure that
								your deadlines are met.
							</li>
							<li>
								Experienced Transcriptionists – We ensure both the quality of documents and
								confidentiality of recordings and reports. All of our transcriptionists are
								experienced within the field and are constantly quality checked to ensure they
								remain at our required standard.
							</li>
							<li>
								Cost Savings – We are able to process a large amount of work, for a fraction 
								of what you would pay a member of your staff. We also free up your staff which
								allows them to focus on their core business activities.
							</li>
							<li>
								Quick Turnaround Time – We offer our clients a variety of turnaround times
								to meet their specific needs, including 4 hours, 12 hours, 24 hours,
								3-5 business days, and 6-10 business days. If you have an urgent file that
								needs same day processing, please ensure you call and speak with us to make
								sure that your order is processed immediately.
							</li>
							<li>
								Accuracy – We ensure the utmost accuracy of all of our transcripts. Our
								transcribers are very experienced, and all transcripts are proofread by an external
								proofreader for quality checking.
							</li>
						</ul>
					</div>
				</div>
	      	</div>
  		)
   	}
}

export default Home;