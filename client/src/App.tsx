import { Switch, Route } from "wouter";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ForParticipants from "@/pages/ForParticipants";
import ForPartners from "@/pages/ForPartners";
import Faculty from "@/pages/Faculty";
import Schedule from "@/pages/Schedule";
import Apply from "@/pages/Apply";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Ventures from "@/pages/Ventures";
import VentureDetail from "@/pages/VentureDetail";
import UploadCompanies from "@/pages/UploadCompanies";
import InfoSession from "@/pages/InfoSession";
import NotFound from "@/pages/not-found";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

function App() {
  return (
    <>
      <GoogleAnalytics measurementId="G-PYBMEVY9WQ" />

      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/for-participants" component={ForParticipants} />
          <Route path="/for-partners" component={ForPartners} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/schedule" component={Schedule} /> */}
          <Route path="/apply" component={Apply} />
          {/* <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} /> */}
          <Route path="/ventures" component={Ventures} />
          <Route path="/ventures/:slug" component={VentureDetail} />
          <Route path="/uploadcompanies" component={UploadCompanies} />
          <Route path="/info-session" component={InfoSession} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
