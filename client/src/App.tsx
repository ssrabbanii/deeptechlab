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
import NotFound from "@/pages/not-found";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PYBMEVY9WQ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PYBMEVY9WQ');
          `}
        </script>
      </Helmet>

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
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
