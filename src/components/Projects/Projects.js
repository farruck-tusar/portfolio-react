import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intelligent Frame Extractor (IFE)"
              description="AI-Based Video Processing Software Application. It's a Video frames processing tool for different object detection algorithms. Visualization of the videos and the results of the processing."
              ghLink="https://github.com/farruck-tusar/IFE_APP"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Outliers Data Cleaning"
              description="A simple project to forecast German transport demand in 2050 where it identify outliers (data cleaning). Fits a linear regression model to forecast the German transport demand in 2050."
              ghLink="https://github.com/farruck-tusar/outliers-data-cleaning"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Real-Time Computer vision MAV"
              description="A real-time computer vision system on an embedded platform for autonomous MAV. Key features are Object Detection, Save video and coordinates and Visualize bounding boxes."
              ghLink="https://github.com/farruck-tusar/Real-Time-Computer-Vision-System-MAV"
              demoLink="#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
