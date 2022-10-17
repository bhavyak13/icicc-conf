import AboutUniversalInnovators from './About/abt_universal_innovators'
import AboutInstitute from './About/abt_institute'
import Home from './Home/Home';
import CallForPaper from './Papers/callforpaper'
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import TempLay from './TempLay/TempLay';
import PaperSubmission from './Papers/papersubmission';
import IntWorkshops from './Papers/call_for_int_wshps';
import SpSession from './Papers/call_for_sp_session';
import Sponsorship from './Sponsorship/sponsorship';
import Awards from './Awards/awards';
import ConferenceVenue from './ConferenceVenue/venue';
import SpecialSessions from './SpecialSessions/spsessions';
import Workshops from './Workshops/workshops';
import Downloads from './Downloads/downloads';
import TechCom from './Committee/tech_committee';
import AdvCom from './Committee/adv_committee';
import IndExp from './Committee/ind_exp';
import Publications from './Publications/publications';
import SteerCom from './Committee/steering_comm';
import Registration from './Registration/Registration';


const router = createBrowserRouter([
  {
    path: '/',
    element: <TempLay />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about_universal_innovators',
        element: <AboutUniversalInnovators />,
      },
      {
        path: 'about_institute',
        element: <AboutInstitute />,
      },
      {
        path: 'call_for_papers',
        element: <CallForPaper />,
      },
      {
        path: 'paper_submission',
        element: <PaperSubmission />,
      },
      {
        path: 'call_for_special_sessions',
        element: <SpSession />,
      },
      {
        path: 'call_for_international_workshops',
        element: <IntWorkshops />,
      },
      {
        path:'publications',
        element:<Publications />
      },
      {
        path:'steercom',
        element:<SteerCom />
      },
      {
        path:'techcom',
        element:<TechCom />
      },
      {
        path:'advcom',
        element:<AdvCom />
      },
      {
        path:'indexp',
        element:<IndExp />
      },
      {
        path:'specialsessions',
        element:<SpecialSessions />
      },
      {
        path:'workshops',
        element:<Workshops />
      },
      {
        path: 'sponsorship',
        element: <Sponsorship />,
      },
      {
        path:'awards',
        element:<Awards />
      },
      {
        path:'venue',
        element:<ConferenceVenue />
      },
      {
        path:'downloads',
        element:<Downloads />
      },
      {
        path:'registrations',
        element:<Registration />
      },
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
