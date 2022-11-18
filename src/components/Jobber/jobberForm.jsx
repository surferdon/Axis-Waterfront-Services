import React from "react";
import { Helmet } from "react-helmet";
import "./Jobber.scss"
import Navbar from "../Navbar";

export default class Jobber extends React.Component {
  render() {
    return (

      <div className="JobberOpen1">
<Navbar/>
<div className="JobberOpen">
      <div className="Application" id="c2c14fc-7b4a-46d8-a5bf-d5eaed5b87a2">
        <Helmet>
        <div id="c2c14fc-7b4a-46d8-a5bf-d5eaed5b87a2"></div>
          <link
            rel="stylesheet"
            media="screen"
            href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
          />
          <script 
            src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="c2c14fc-7b4a-46d8-a5bf-d5eaed5b87a2" form_url="https://clienthub.getjobber.com/client_hubs/c2c14fc-7b4a-46d8-a5bf-d5eaed5b87a2/public/work_request/embedded_work_request_form"
            />

        </Helmet>
      </div></div></div>
    );
  }
}

/* Needs to be updated with Axis jobber embed
Information doesnt seem to be valid */