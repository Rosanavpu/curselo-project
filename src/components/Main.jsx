import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { Route, Switch } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import Cursos from "../containers/alumnos/Cursos";
import InstructorContainer from "../containers/instructor/InstructorContainer";
import NavbarContainer from "../containers/NavbarContainer";
import SingleCursoInstructorContainer from "../containers/instructor/SingleCursoInstructorContainer";
import SingleCursoAlumnoContainer from "../containers/alumnos/SingleCursoAlumnoContainer";
import SideBar from "../components/instructor/SideBar";
import InstructorCursosContainer from "../containers/instructor/InstructorCursosContainer";
import CrearTemaContainer from "../containers/instructor/CrearTemaContainer";
import SignUpContainer from "../containers/SignUpContainer"
import SubirVideoContainer from "../containers/instructor/SubirVideoContainer";
import CursosCompradosContainer from "../containers/alumnos/CursosCompradosContainer";
import ComprarContainer from "../containers/alumnos/ComprarContainer"
import Log from "./Log";
import EditarTemaContainer from "../containers/instructor/EditarTemaContainer";
import SingleCursoCompradoContainer from "../containers/alumnos/SingleCursoCompradoContainer";

export default (props) => (
  <div>
    <Switch>
      
      {window.location.href.includes("instructor") && (props.loading ? (
        <Route path="/instructor" component={instructor} />
      ) : (
        <Route render={()=><Log logear={props.logear} history={props.history}/>} />
      ))}
      <Route path="/alumnos" component={alumnos} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);

const alumnos = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/alumnos/cursos/:cursoId/comprar" component={ComprarContainer}/>
      <Route exact path="/alumnos/signUp" component={SignUpContainer} />
      <Route exact path="/alumnos/cursos" component={Cursos} />
      <Route exact path="/alumnos/cursos/comprados" component={CursosCompradosContainer} />
      <Route exact path="/alumnos/cursos/comprados/:cursoId" component={SingleCursoCompradoContainer} />
      <Route
        exact
        path="/alumnos/cursos/:cursoId"
        component={SingleCursoAlumnoContainer}
      />
    </Switch>
  </div>
);

const instructor = () => (
  <div>
    <SideBar />

    <div
      style={{
        marginLeft: "200px",
        marginRight: "2%",
        marginTop: "2%"
      }}
    >
      <Switch>
        <Route exact path="/instructor" component={InstructorContainer} />
        <Route
          exact
          path="/instructor/cursos"
          component={InstructorCursosContainer}
        />
        <Route path="/instructor/crear" component={CrearContainer} />
        <Route
          exact
          path="/instructor/cursos/:cursoId/section/:sectionId"
          component={CrearTemaContainer}
        />
        <Route
          exact
          path="/instructor/cursos/:courseId/section/:secId/topic/:topicId"
          component={EditarTemaContainer}
        />
      
        <Route
          exact
          path="/instructor/cursos/:cursoId/section/:sectionId/subirvideo"
          component={SubirVideoContainer}
        />
        
        <Route
          exact
          path="/instructor/cursos/:cursoId"
          component={SingleCursoInstructorContainer}
        />
      </Switch>

    </div>
  </div>
);
