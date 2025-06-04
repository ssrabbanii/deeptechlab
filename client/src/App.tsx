import { Switch, Route } from "wouter";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ForParticipants from "@/pages/ForParticipants";
import ForPartners from "@/pages/ForPartners";
import Faculty from "@/pages/Faculty";
import Schedule from "@/pages/Schedule";
import Apply from "@/pages/Apply";
import Register from "@/pages/Register";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/for-participants" component={ForParticipants} />
        <Route path="/for-partners" component={ForPartners} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/apply" component={Apply} />
        <Route path="/register" component={Register} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
